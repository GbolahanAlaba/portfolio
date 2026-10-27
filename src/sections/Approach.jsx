import { approach } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Approach.module.css";

export default function Approach() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="approach" ref={ref} className={styles.section}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">How I lead</p>
          <h2 className="section-title">
            Clear plans, <span className="serif">no surprises.</span>
          </h2>
        </div>

        <ol className={styles.steps}>
          {approach.map((step, i) => (
            <li
              key={step.title}
              className={`${styles.step} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className={styles.index}>Step {i + 1}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
