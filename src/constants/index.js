import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  kubernetes,
  nextjs,
  python,
  fastapi,
  postman,
  openai,
  claude,
  gemini,
  speckit,
  openclaw,
  huggingface,
  food,
  carrent,
  jobit,
  tripguide,
  threejs,
  crm,
  book,
  todo,
  nexa,
  dashboard,
  aiEmployee,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Frontend Specialist",
    icon: mobile,
  },
  {
    title: "Agentic AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "OpenAI SDK",
    icon: openai,
  },
  {
    name: "Claude Code",
    icon: claude,
  },
  {
    name: "Gemini CLI",
    icon: gemini,
  },
  {
    name: "SpecKit Plus",
    icon: speckit,
  },
  {
    name: "OpenClaw",
    icon: openclaw,
  },
  {
    name: "Huggingface",
    icon: huggingface,
  },
];

// Paste this into constants/index.js, replacing the old `experiences` array.
// The icon imports (backend, web, creator) are the ones you already have.

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "PRAQEN",
    icon: web,
    iconBg: "#383E56",
    date: "June 2026 - Present",
    points: [
      "Develop and maintain full-stack features for a live trading platform, building responsive frontend interfaces and scalable backend services with seamless API integration.",
      "Design and integrate RESTful APIs for trading, user management, wallets, transactions, notifications, and core platform workflows, with secure authentication and authorization.",
      "Build and maintain crypto wallet functionality, including wallet creation, balance management, transaction flows, and blockchain integrations.",
      "Handle real-time data flows and resolve key production bottlenecks, improving platform uptime to 99.9% during high-volatility trading periods.",
      "Troubleshoot and resolve production issues across the platform.",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "NeuralHub",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "June 2026 - Sep 2026",
    points: [
      "Built RAG-based AI agents for a healthcare platform, reducing query response times by 40% and accurately serving over 8,000 medical query requests.",
      "Designed efficient backend pipelines connecting retrieval systems with LLM-based response generation.",
    ],
  },
  {
    title: "AI Developer (Independent Projects)",
    company_name: "Nexa AI & AI CRM Digital FTE",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Engineered Nexa AI, an AI voice meeting and video conferencing SaaS platform with real-time meetings and custom AI agents, using Next.js, tRPC, and Stream Video SDK.",
      "Built a provider-agnostic LLM architecture supporting OpenRouter, Gemini, and Groq, with secure multi-provider authentication.",
      "Built AI CRM Digital FTE, a multi-channel customer support system (Gmail, WhatsApp, Web Forms) using FastAPI, OpenAI Agents SDK, and Kafka.",
      "Deployed a scalable, event-driven backend with PostgreSQL, Docker, and Kubernetes.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NextSoft Solutions",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - June 2025",
    points: [
      "Developed responsive, cross-browser web applications and features for client projects.",
      "Collaborated on full-stack prototypes and hackathon projects under tight deadlines.",
    ],
  },
  {
    title: "Full Stack & AI Engineer Programs",
    company_name: "Governor House Tech Program",
    icon: creator,
    iconBg: "#383E56",
    date: "Expected 2026",
    points: [
      "Completed the Full Stack Development Program.",
      "Currently completing the AI Engineer program.",
      "Self-directed learning in full-stack web development and AI engineering.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI CRM Digital FTE - Customer Support Automation",
    description:
      "An AI-powered Digital FTE system for automated customer support and CRM workflow management. Features a multi-channel architecture (Gmail, WhatsApp, Web Forms) built with FastAPI, OpenAI Agents SDK, and Kafka, with an event-driven backend deployed using Docker and Kubernetes.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "kafka", color: "green-text-gradient" },
      { name: "openai-sdk", color: "pink-text-gradient" },
    ],
    image: crm,
    source_code_link:
      "https://github.com/areeshaasattar/customer-support-fte-final",
    // no liveLink, so only the GitHub button appears in the overlay
  },
    {
    name: "Personal AI Employee - Autonomous Digital FTE",
    description:
      "A local-first, agent-driven AI employee powered by Claude Code and an Obsidian vault. Python watchers monitor inputs like Gmail and the file system, Claude plans and reasons over tasks, and MCP servers carry out actions, with a human-in-the-loop approval workflow for sensitive operations.",
    tags: [
      { name: "claude-code", color: "blue-text-gradient" },
      { name: "mcp", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: aiEmployee, // add: import aiEmployee from "../assets/ai-employee.png"
    source_code_link: "https://github.com/areeshaasattar/Personal_AI_Employee",
  },
  {
    name: "Physical AI & Humanoid Robotics Website",
    description:
      "An innovative web application showcasing Physical AI and Humanoid Robotics concepts. Built using Claude Code CLI and SpecKit Plus for intelligent content generation and AI integration.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "claude-code",
        color: "green-text-gradient",
      },
      {
        name: "speckit-plus",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link:
      "https://github.com/GlitchPhantomX/Hackathon1-humanoids-robotics-book.git",
  },
  {
    name: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI SDK with features like context-aware responses, prompt engineering, and real-time conversation handling.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link:
      "https://github.com/GlitchPhantomX/Hackathon2-Todo-App.git",
    liveLink: "https://todo-master-app.vercel.app/",
  },
  {
    name: "Nexa AI - AI Voice Meeting Platform",
    description:
      "An AI-powered SaaS platform for real-time video meetings with custom AI voice agents. Features a provider-agnostic LLM architecture (OpenRouter, Gemini, Groq), secure multi-provider authentication, and automated meeting lifecycle management using Stream Video SDK.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "stream-video", color: "green-text-gradient" },
      { name: "openrouter", color: "pink-text-gradient" },
    ],
    image: nexa,
    source_code_link: "https://github.com/areeshaasattar/Nexa-ai",
  },
  {
    name: "Task Management Dashboard",
    description:
      "A comprehensive task management system with features like task creation, assignment, progress tracking, and team collaboration. Built with modern full-stack technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/Areesha-sites/Hackathon_Admin_Panel.git",
    liveLink: "https://hackathon-admin-panel-azure.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
