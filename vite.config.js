import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      {
        name: "local-api",
        configureServer(server) {
          server.middlewares.use("/api/chat", async (req, res) => {
            try {
              if (req.method !== "POST") {
                res.statusCode = 405;
                res.end();
                return;
              }

              try {
                const chunks = [];
                for await (const chunk of req) {
                  chunks.push(chunk);
                }
                const body = Buffer.concat(chunks).toString("utf8");
                req.body = body ? JSON.parse(body) : {};
              } catch {
                res.statusCode = 400;
                res.end();
                return;
              }

              res.status = (code) => {
                res.statusCode = code;
                return res;
              };
              res.json = (obj) => {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(obj));
              };

              const { default: handler } = await server.ssrLoadModule("/api/chat.js");
              await handler(req, res);
            } catch (error) {
              console.error(error);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ reply: "Having trouble connecting right now." }));
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': {}
    }
  };
})