import { personal, stats, organisations, openToRoles } from "../data/portfolio";
import { LogoMark } from "../components/Logo";
import { ArrowIcon } from "../components/Icons";
import portrait from "../assets/portrait.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          {personal.available && (
            <div className={styles.badge}>
              <span className={styles.dot} />
              Open to {openToRoles} roles
            </div>
          )}

          <h1 className={styles.headline}>
            I turn business goals into{" "}
            <span className="serif">technology that works.</span>
          </h1>

          <p className={styles.sub}>
            I'm {personal.name}, a tech lead and engineer in {personal.location.split(",")[0]}.
            I lead technology for growing organisations, from strategy and
            vendor choices to the team and the code, across fintech, payments,
            commerce and media.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Let's work together
              <ArrowIcon />
            </a>
            <a href="#projects" className={styles.btnSecondary}>
              See my work
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoFrame}>
            <img
              src={portrait}
              alt={`Portrait of ${personal.name}`}
              className={styles.photo}
              width="720"
              height="726"
              fetchpriority="high"
            />
          </div>

          <aside className={styles.card} aria-label="Roles I'm open to">
            <div className={styles.cardHead}>
              <LogoMark size={36} />
              <div>
                <p className={styles.cardName}>{personal.name}</p>
                <p className={styles.cardTitle}>{personal.title}</p>
              </div>
            </div>
            <p className={styles.cardLabel}>Open to roles as</p>
            <div className={styles.roles}>
              {personal.lookingFor.map((r) => (
                <span key={r} className={styles.role}>{r}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <dl className={styles.stats}>
        {stats.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <dt className={styles.statLabel}>{label}</dt>
            <dd className={styles.statValue}>{value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.orgs}>
        <p className={styles.orgsLabel}>Organisations I've built for</p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...organisations, ...organisations].map((o, i) => (
              <span key={i} className={styles.org} aria-hidden={i >= organisations.length}>
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
