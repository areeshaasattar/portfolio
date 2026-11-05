"use client";
import { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "../constants";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const isValid = (url) =>
    typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
  const hasLive = isValid(project.liveLink);
  const hasCode = isValid(project.source_code_link);

  return (
    <PinContainer
      title="Click for links"
      containerClassName="w-full h-[25rem]"
      onClick={() => setOpen((v) => !v)}
    >
      {/* no extra padding here: PinContainer's card already has p-4 */}
      <div className="relative flex flex-col tracking-tight text-slate-100/50 w-[17rem] sm:w-[19rem]">
        <div className="w-full aspect-video mb-3 overflow-hidden rounded-lg bg-black/40">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="!pb-1 !m-0 font-bold text-lg text-white">
          {project.name}
        </h3>

        <div className="text-sm !m-0 !p-0 font-normal">
          <span className="text-slate-400 line-clamp-2">
            {project.description}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={`${project.name}-tag-${tagIndex}`}
              className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-opacity-20 border border-current`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Click overlay */}
        {open && (
          <div
            className="absolute -inset-4 z-30 flex flex-col items-center justify-center gap-3 rounded-2xl bg-black/90 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-semibold text-sm mb-1">
              {project.name}
            </p>

            {hasCode && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 text-center text-sm font-medium text-white border border-white/30 rounded-lg py-2 hover:bg-white/10 transition"
              >
                GitHub
              </a>
            )}

            {hasLive && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 text-center text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg py-2 transition"
              >
                Live Website
              </a>
            )}

            {!hasCode && !hasLive && (
              <span className="text-xs text-slate-400">No links available</span>
            )}

            <button
              onClick={() => setOpen(false)}
              className="text-xs text-slate-400 hover:text-white mt-1"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </PinContainer>
  );
}

export function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 w-full place-items-center">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} project={project} />
      ))}
    </div>
  );
}