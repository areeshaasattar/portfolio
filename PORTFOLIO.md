# Areesha Sattar — Developer Portfolio

## Overview

This repository contains Areesha Sattar's responsive, single-page developer portfolio. It presents her work across full-stack engineering, AI development, and agentic automation through an animated dark interface with interactive 3D elements. The portfolio is built with React and Vite, with content and portfolio data organized in reusable components and shared constants.

## Professional Profile

The portfolio describes Areesha as a Software Engineer and AI Developer with 2+ years of experience building web applications, backend systems, REST APIs, and AI-powered automation. Her focus areas include full-stack development, backend architecture, AI agents, and practical automation.

### Experience shown in the portfolio

- **Software Engineer, CarbonRepro (July 2026–present):** Python and FastAPI backend services; secure REST APIs for AI-powered applications; third-party integrations; and an emphasis on reliability, scalability, security, and maintainability. The profile also describes cross-functional collaboration, Git-based workflows, code reviews, and debugging.
- **Full-stack web development (projects and hackathons, 2024):** React, Next.js, Node.js, MongoDB, REST APIs, responsive interfaces, CMS and authentication features, version control, and Vercel deployments.
- **AI and agentic AI development (independent projects, 2025):** OpenAI Agents SDK, prompt and context engineering, SpecKit Plus, Claude Code CLI, Gemini CLI, and OpenClaw, with a stated interest in intelligent workflows and multi-agent systems.
- **Hackathon development (2025):** Team-based AI and Physical AI/humanoid robotics themed applications, frontend work, AI content integration, GitHub, and deployment.
- **DevOps and cloud engineering (2026–present):** The profile describes working with Docker and Kubernetes and learning cloud deployment, CI/CD, and scalable backend practices.

### Education and training listed

- Intermediate in Pre-Engineering, Govt. Degree College Karachi (2022).
- Matriculation in Science, Major Shabbir Sharif School Karachi (2020).
- Full Stack Development, Governor House Tech Program.
- Agentic AI, OpenAI Agents SDK, and AI Automation.

## Skills and Technologies

The portfolio presents the following skills and tools:

- **Languages and web fundamentals:** JavaScript, TypeScript, Python, HTML5, and CSS3.
- **Frontend:** React, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap, and responsive web design.
- **Backend and APIs:** Node.js, Express.js, Python, FastAPI, REST APIs, JWT authentication, and API integration.
- **Data:** MongoDB, Mongoose, and MySQL.
- **AI and automation:** OpenAI SDK, OpenAI Agents SDK, agentic AI, prompt engineering, Claude Code CLI, Gemini CLI, OpenClaw, and Hugging Face.
- **Development and operations:** Git, GitHub, Docker, Kubernetes, Postman, and Vercel.
- **Additional technologies displayed in the skills visual:** Three.js, Figma, SpecKit Plus, and Bootstrap.

## Portfolio Sections and Features

1. **Hero:** Introductory headline, rotating role text, calls to contact and view projects, animated particles, a scroll cue, and a 3D computer scene.
2. **About:** Overview, technical-skills, and vision/goals tabs, with interactive tooltips and animated service cards for Full Stack Developer, AI Engineer, Frontend Specialist, and Agentic AI Developer.
3. **Work experience:** Animated vertical timeline with roles, dates, and responsibilities.
4. **Technology showcase:** Floating, animated technology icons with hover effects.
5. **Projects:** Interactive 3D pin-style project cards with descriptions, technology tags, and links to source code or live demos.
6. **Testimonials:** Animated feedback cards. The current content uses generic sample names and statements, so it should be verified before being presented as genuine endorsements.
7. **Contact:** Name, email, and message form with EmailJS integration, plus contact cards for email, phone, location, and GitHub.
8. **AI portfolio chatbot:** Floating chat widget that answers questions using an embedded profile and project prompt. It sends chat requests to Mistral's chat-completions API using the `mistral-small-latest` model and reads its API key from `VITE_MISTRAL_API_KEY`.
9. **Navigation and footer:** Fixed responsive navigation, in-page section links, and social links for GitHub, LinkedIn, X, and email.

The visual design uses a dark background, purple accents, animated gradients and particles, responsive layouts, scroll-triggered motion, hover interactions, and 3D elements.

## Projects Featured in the Project Grid

The project cards and descriptions are maintained in the portfolio's project data:

- **Blog Website with CMS:** A responsive Next.js blog/CMS project focused on dynamic content and SEO. [Source](https://github.com/Areesha-sites/milestone3-blog-website.git) · [Live site](https://areesha-milestone3-blog-website.vercel.app/)
- **ChowChamp — Food E-commerce:** Food storefront with a product catalog, cart, order management, and responsive design; tagged with React, MongoDB, and REST API. [Source](https://github.com/Areesha-sites/3b-milestone-ecommerce-website.git) · [Live site](https://3b-milestone-ecommerce-website.vercel.app/)
- **Physical AI & Humanoid Robotics Website:** Educational web project about Physical AI and humanoid robotics, described as using Claude Code CLI and SpecKit Plus. [Source](https://github.com/GlitchPhantomX/Hackathon1-humanoids-robotics-book.git) · [Live site](https://hackathon1-humanoids-robotics-book.vercel.app/)
- **AI Chat Application:** Described as an OpenAI SDK-powered, context-aware chat application with prompt engineering and real-time conversation handling. [Source](https://github.com/GlitchPhantomX/Hackathon2-Todo-App.git) · [Live site](https://todo-master-app.vercel.app/)
- **Portfolio Website:** A responsive portfolio example described as using React, Three.js, and Framer Motion. [Source](https://github.com/Areesha-sites/Marketplace_Hackathon_SHOPCO.git) · [Live site](https://marketplace-hackathon-shopco.vercel.app/)
- **Task Management Dashboard:** Task creation, assignment, progress tracking, and team collaboration; tagged with React, Node.js, and MongoDB. [Source](https://github.com/Areesha-sites/Hackathon_Admin_Panel.git) · [Live site](https://hackathon-admin-panel-azure.vercel.app/)

The chatbot's embedded profile also describes two projects that are not in the project-grid data:

- **Nexa AI — AI voice meeting and video-conferencing SaaS:** The profile lists Next.js 16, React 19, TypeScript, tRPC, Better-Auth, Stream Video SDK, OpenRouter, Gemini, Groq, Neon PostgreSQL, Drizzle ORM, Tailwind CSS, and shadcn/ui. It describes real-time meetings, custom AI agents, provider-agnostic LLMs, browser-based speech input/output, OAuth, and meeting recording management.
- **AI CRM Digital FTE — multi-channel customer-support automation:** The profile lists Python, FastAPI, OpenAI Agents SDK, PostgreSQL, Kafka, React, Docker, Kubernetes, and REST APIs. It describes support workflows across Gmail, WhatsApp, and web forms, including ticket handling and escalation.

These two descriptions come from the chatbot's built-in profile rather than the visible project cards.

## Implementation and Tech Stack

The portfolio application itself uses:

- **React 18** and **React DOM** for the interface, with **Vite** and the React Vite plugin for development and production builds.
- **React Router** for routing context.
- **Three.js**, **React Three Fiber**, and **Drei** for 3D scenes.
- **Framer Motion** for animated transitions and interactions, and **react-parallax-tilt** for tilt effects.
- **Tailwind CSS**, PostCSS, and Autoprefixer for responsive styling.
- **EmailJS** for contact-form delivery.
- **react-vertical-timeline-component** for the experience timeline.
- **Lucide React** and **Tabler Icons** for icon assets; `clsx` and `tailwind-merge` for class utilities.

The app is composed in `src/App.jsx`; reusable UI is in `src/components/`, shared portfolio data is in `src/constants/index.js`, and static assets are indexed in `src/assets/`.

## Running the Project

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

The contact form expects `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, and `VITE_APP_EMAILJS_PUBLIC_KEY`. The chatbot expects `VITE_MISTRAL_API_KEY`. Configure these in the local environment; do not commit secret values.

## Links

- [GitHub](https://github.com/GlitchPhantomX)
- [LinkedIn](https://www.linkedin.com/in/areesha-sattar/)
