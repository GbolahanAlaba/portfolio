import { skills } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Skills.module.css";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A full-stack toolkit honed through real-world impact-driven engineering across the African tech ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`${styles.card} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <p className={styles.category}>{group.category}</p>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
