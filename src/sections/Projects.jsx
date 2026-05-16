import { useState } from "react";
import { projects } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Projects.module.css";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Impact-Driven Work</h2>
          <p className="section-subtitle">
            Each project is a step towards a more sustainable and equitable world,
            aligned with the UN's Sustainable Development Goals.
          </p>
        </div>

        <div className={styles.grid}>
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={`${0.1 + (i % 3) * 0.1}s`}
              isVisible={isVisible}
            />
          ))}
        </div>

        {!showAll && rest.length > 0 && (
          <div className={styles.center}>
            <button className={styles.showMore} onClick={() => setShowAll(true)}>
              Show {rest.length} More Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, isVisible }) {
  return (
    <div
      className={`${styles.card} reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardTop}>
        <span className={styles.sdg}>{project.sdg}</span>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Live">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
