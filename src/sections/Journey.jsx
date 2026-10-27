import { timeline } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Journey.module.css";

export default function Journey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" ref={ref} className={styles.section}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Journey</p>
          <h2 className="section-title">Shipping, year by year</h2>
        </div>

        <ol className={styles.timeline}>
          {timeline.map((item, i) => (
            <li
              key={item.year}
              className={`${styles.entry} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <span className={styles.year}>{item.year}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
