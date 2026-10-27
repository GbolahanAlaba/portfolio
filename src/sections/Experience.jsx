import { experience } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Experience.module.css";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className={styles.list}>
          {experience.map((job, i) => (
            <article
              key={job.role + job.org}
              className={`${styles.row} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <p className={styles.period}>{job.period}</p>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.org}>{job.org}</p>
              </div>
              <ul className={styles.points}>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
