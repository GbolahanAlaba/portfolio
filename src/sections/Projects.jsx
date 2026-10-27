import { projects } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ExternalIcon, GithubIcon } from "../components/Icons";
import styles from "./Projects.module.css";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className={`section-head reveal ${isVisible ? "visible" : ""}`}>
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">
              Products I've <span className="serif">led and built.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Real platforms with real users and real money moving through them,
            and what I was responsible for on each.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={`${0.1 + (i % 3) * 0.1}s`}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, isVisible }) {
  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ""} reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardTop}>
        <span className={styles.domain}>{project.domain}</span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.role}>{project.role}</p>
      <p className={styles.desc}>{project.description}</p>

      {project.tech.length > 0 && (
        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer" className={styles.visit}>
            Visit {new URL(project.live).hostname.replace(/^www\./, "")}
            <ExternalIcon size={14} />
          </a>
        ) : (
          <span className={styles.private}>Private client build</span>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label={`${project.title} on GitHub`}>
            <GithubIcon size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
