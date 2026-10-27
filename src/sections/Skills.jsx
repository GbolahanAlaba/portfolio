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
          <h2 className="section-title">
            Leadership, backed by <span className="serif">real engineering.</span>
          </h2>
        </div>

        <div className={styles.groups}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`${styles.group} ${i === 0 ? styles.lead : ""} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
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
