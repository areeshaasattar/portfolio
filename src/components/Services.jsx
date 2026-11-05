"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Bot,
  LayoutDashboard,
  Server,
  Workflow,
  Wallet,
  Globe,
} from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ai: true -> purple accent (same idea as the purple AI terms in About)
const services = [
  {
    title: "AI Agents & RAG Chatbots",
    description:
      "Chatbots and agents that answer from your own data, using vector search and LLMs with reliable retrieval pipelines.",
    technologies: ["OpenAI SDK", "Qdrant", "FastAPI"],
    icon: Bot,
    ai: true,
  },
  {
    title: "AI Workflow Automation",
    description:
      "Automate support, CRM and repetitive tasks with agentic AI across channels like Gmail, WhatsApp and web forms.",
    technologies: ["Agents SDK", "n8n", "Kafka"],
    icon: Workflow,
    ai: true,
  },
  {
    title: "Full Stack Web Applications",
    description:
      "SaaS products, dashboards and internal tools, from the responsive interface to the database behind it.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: LayoutDashboard,
  },
  {
    title: "Backend & REST APIs",
    description:
      "Secure, well-structured APIs with authentication, user management and clean integration for any frontend.",
    technologies: ["Node.js", "FastAPI", "JWT"],
    icon: Server,
  },
  {
    title: "Fintech & Wallet Features",
    description:
      "Trading, wallet and transaction flows with secure authentication, built for platforms that run live.",
    technologies: ["REST APIs", "Auth", "Blockchain"],
    icon: Wallet,
  },
  {
    title: "Website Development & Redesign",
    description:
      "Fast, responsive business websites, or a fresh frontend for an existing one, built with modern tooling.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    icon: Globe,
  },
];

const ServiceItem = ({ title, description, technologies, icon: Icon, ai, index }) => (
  <Tilt
    className="h-full"
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    glareEnable={true}
    glareMaxOpacity={0.12}
    glareColor="#915EFF"
    glarePosition="all"
  >
    <motion.article
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="group relative h-full"
    >
      {/* gradient glow border (same as About cards) */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#915EFF] via-purple-500 to-pink-500 opacity-40 group-hover:opacity-75 transition-opacity duration-300 blur-[1px]" />

      <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[20px] border border-[#915EFF]/20 bg-tertiary p-7 backdrop-blur-sm">
        {/* moving glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #915EFF 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #915EFF 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #915EFF 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#915EFF]/30 bg-[#915EFF]/10 text-[#915EFF]"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
        </motion.div>

        <h3
          className={`relative text-[20px] font-bold leading-snug ${
            ai ? "text-purple-300" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p className="relative mt-3 flex-1 text-[14px] leading-[24px] text-secondary">
          {description}
        </p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className={`rounded-full border px-3 py-1 text-xs ${
                ai
                  ? "border-purple-300/30 bg-purple-300/10 text-purple-200"
                  : "border-[#915EFF]/20 bg-[#915EFF]/5 text-[#dfd9ff]"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </motion.article>
  </Tilt>
);

const Services = () => (
  <>
    {/* particles, same as About / Hero */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#915EFF] rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000)],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>

    <motion.div variants={textVariant()} className="relative z-10">
      <motion.p className={`${styles.sectionSubText} relative inline-block`}>
        What I Do
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] bg-[#915EFF]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.p>
      <h2 className={styles.sectionHeadText}>Services.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="relative z-10 mt-8 pl-6"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#915EFF] via-purple-500 to-transparent" />
      <p className="max-w-3xl text-[17px] leading-[32px] text-secondary">
        From the interface to the API to the AI layer, I build the whole
        product, not just one piece of it. Here is where I can help.
      </p>
    </motion.div>

    <div className="relative z-10 mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceItem key={service.title} index={index} {...service} />
      ))}
    </div>

    {/* closing call to action */}
    <motion.div
      className="relative z-10 mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="max-w-xl text-[17px] leading-[30px] text-secondary">
        Have a project in mind? Tell me what you need and I will tell you how I
        would build it.
      </p>
      <motion.a
        href="#contact"
        className="rounded-lg bg-[#915EFF] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#915EFF]/50 sm:text-base"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(145, 94, 255, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.a>
    </motion.div>

    <motion.div
      className="relative z-10 mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
  </>
);

export default SectionWrapper(Services, "services");