import { personal, projects } from "../data/portfolio";
import styles from "./Hero.module.css";

const shipping = projects.filter((p) => p.featured);

const CODE = [
  ["based", `"Lagos, NG"`],
  ["backend", `["Django", "DRF", "Celery"]`],
  ["frontend", `["React", "Next.js", "TypeScript"]`],
  ["payments", `["Paystack", "Flutterwave", "Paga", "+2"]`],
  ["shipping", `[${shipping.map((p) => `"${p.title}"`).join(", ")}]`],
  ["openToWork", String(personal.available)],
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
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
            I build the systems businesses run on: payment rails, lending
            software, commerce and media platforms. From the Django API to the{" "}
            <em className={styles.highlight}>last pixel</em>.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              See My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Let's Talk
            </a>
          </div>

          <div className={styles.liveStrip}>
            <span className={styles.liveLabel}>Live in production:</span>
            <div className={styles.livePills}>
              {shipping.filter((p) => p.live).map((p) => (
                <a key={p.title} href={p.live} target="_blank" rel="noreferrer" className={styles.livePill}>
                  {p.title}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span /><span /><span />
              <p className={styles.fileName}>gbolahan.js</p>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.kw}>const</span> engineer = {"{\n"}
                {CODE.map(([key, value]) => (
                  <span key={key}>
                    {"  "}<span className={styles.key}>{key}</span>:{" "}
                    <span className={value === "true" ? styles.kw : styles.str}>{value}</span>,{"\n"}
                  </span>
                ))}
                {"};"}
              </code>
            </pre>
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatValue}>5</span>
            <span className={styles.floatLabel}>payment providers<br />behind one API</span>
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to About">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
