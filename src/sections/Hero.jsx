import { personal, sdgGoals } from "../data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={`container ${styles.content}`}>
          {personal.available && (
            <div className={styles.badge}>
              <span className={styles.dot} />
              Available for opportunities
            </div>
          )}

          <h1 className={styles.name}>
            <span className={styles.nameTop}>Gbolahan</span>
            <span className={styles.nameBottom}>
              Alaba<span className={styles.nameDot}>.</span>
            </span>
          </h1>

          <p className={styles.title}>{personal.title}</p>

          <p className={styles.tagline}>
            Technology as a catalyst for{" "}
            <em className={styles.highlight}>positive change</em> — building
            solutions aligned with the UN Sustainable Development Goals.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Let's Talk
            </a>
          </div>

          <div className={styles.sdgStrip}>
            <span className={styles.sdgLabel}>Focused on:</span>
            <div className={styles.sdgPills}>
              {sdgGoals.map((g) => (
                <span
                  key={g.number}
                  className={styles.sdgPill}
                  style={{ borderColor: g.color, color: g.color }}
                >
                  SDG {g.number}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.orbOuter}>
            <div className={styles.orbInner}>
              <span className={styles.orbInitials}>GA</span>
            </div>
            <div className={styles.orbRing1} />
            <div className={styles.orbRing2} />

            {sdgGoals.slice(0, 6).map((g, i) => {
              const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
              const r = 148;
              const x = 50 + (r / 2) * Math.cos(angle);
              const y = 50 + (r / 2) * Math.sin(angle);
              return (
                <div
                  key={g.number}
                  className={styles.floatBadge}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    borderColor: g.color,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <span style={{ color: g.color }}>#{g.number}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
