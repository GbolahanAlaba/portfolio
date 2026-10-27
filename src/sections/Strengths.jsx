import { strengths } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Strengths.module.css";

export default function Strengths() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className={`section-head reveal ${isVisible ? "visible" : ""}`}>
          <div>
            <p className="section-label">What I bring</p>
            <h2 className="section-title">
              A leader who <span className="serif">still ships.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Organisations hire me to own the technology side of the business:
            the direction, the people and partners involved, and the outcome.
          </p>
        </div>

        <div className={styles.bento}>
          {strengths.map((s, i) => (
            <article
              key={s.title}
              className={`${styles.tile} ${s.size ? styles[s.size] : ""} reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.05 + i * 0.07}s` }}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
