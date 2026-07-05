"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <section className="projects section" id="projects">
        <div className="projects-header container">
          <span className="section-tag reveal-up">Portfolio</span>
          <h2 className="section-title reveal-up">
            Featured <em>Projects</em>
          </h2>
          <p className="projects-desc reveal-up">
            A selection of civil, structural, and infrastructure works delivered
            across India. Click a project to view details.
          </p>
        </div>

        <div className="projects-track-wrapper">
          <div className="projects-track" id="projects-track">
            {projects.map((project) => (
              <button
                type="button"
                className="project-card"
                key={project.num}
                onClick={() => setActive(project)}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-card-img">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="420px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="project-card-info">
                  <span className="project-num">{project.num}</span>
                  <h3>{project.title}</h3>
                  <p>
                    {project.client} — {project.location}. {project.scope}
                  </p>
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-view-hint">View details →</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-progress container">
          <div className="projects-progress-bar" id="projects-progress" />
        </div>
      </section>

      {active && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setActive(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <div className="modal-image">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="720px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="modal-body">
              <span className="project-num">Project {active.num}</span>
              <h3 id="modal-title">{active.title}</h3>
              <div className="modal-meta">
                <span>{active.client}</span>
                <span>{active.location}</span>
                <span className="project-tag">{active.tag}</span>
              </div>
              <p>{active.scope}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}