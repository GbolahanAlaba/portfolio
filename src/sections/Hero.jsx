import { personal, stats, organisations, openToRoles, whatsappLink } from "../data/portfolio";
import { LogoMark } from "../components/Logo";
import { ArrowIcon, DownloadIcon, LinkedinIcon, WhatsAppIcon } from "../components/Icons";
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
            I build technology that helps African businesses{" "}
            <span className="serif">run efficiently and transact with ease.</span>
          </h1>

          <p className={styles.sub}>
            I'm {personal.name}, a tech lead and engineer in {personal.location.split(",")[0]}.
            I lead products from strategy and vendor choices to the team and
            the code, across payments, fintech, commerce and community
            platforms.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Let's work together
              <ArrowIcon />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btnSecondary} ${styles.btnWhatsapp}`}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <span className={styles.whatsapp}><WhatsAppIcon size={18} /></span>
              <span className={styles.waLabel}>Chat on WhatsApp</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.btnIcon}
              aria-label="View my LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personal.cv}
              download
              className={styles.btnCv}
              aria-label="Download my CV"
              title="Download CV"
            >
              <DownloadIcon size={17} />
              CV
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
