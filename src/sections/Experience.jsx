import { experiences } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Experience.module.css";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Career Journey</h2>
          <p className="section-subtitle">
            Building at the intersection of technology and social impact across Africa and beyond.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.entry} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className={styles.indicator}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tech}>
                  {exp.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
