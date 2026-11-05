const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions";
const REQUEST_TIMEOUT_MS = 12000;

const getKeys = (value) =>
  (value || "")
    .split(",")
    .map((key) => key.trim())
    .filter(Boolean);

async function requestReply(url, model, key, messages) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ model, messages }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Provider returned ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      throw new Error("Provider returned an empty reply");
    }

    return reply.trim();
  } finally {
    clearTimeout(timeout);
  }
}

async function tryProvider(url, model, keys, messages) {
  for (const key of keys) {
    try {
      return await requestReply(url, model, key, messages);
    } catch {
      // Try the next configured key before failing over to the next provider.
    }
  }

  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages must be an array" });
  }

  const groqKeys = getKeys(process.env.GROQ_API_KEYS);
  const groqReply = await tryProvider(
    GROQ_URL,
    "llama-3.3-70b-versatile",
    groqKeys,
    messages
  );
  if (groqReply) {
    return res.status(200).json({ reply: groqReply });
  }

  const mistralKeys = getKeys(process.env.MISTRAL_API_KEYS);
  const mistralReply = await tryProvider(
    MISTRAL_URL,
    "mistral-small-latest",
    mistralKeys,
    messages
  );
  if (mistralReply) {
    return res.status(200).json({ reply: mistralReply });
  }

  return res.status(502).json({ error: "Chat providers are unavailable" });
}
