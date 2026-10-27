import { personal, stats } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { EarthIcon, GithubIcon, LinkedinIcon, XIcon } from "../components/Icons";
import styles from "./About.module.css";

const SOCIALS = [
  { label: "GitHub", href: personal.github, Icon: GithubIcon },
  { label: "LinkedIn", href: personal.linkedin, Icon: LinkedinIcon },
  { label: "X / Twitter", href: personal.twitter, Icon: XIcon },
].filter((s) => s.href);

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">About Me</p>
        </div>

        <div className={styles.grid}>
          <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <h2 className="section-title">
              Engineer with a{" "}
              <em className={styles.em}>purpose</em>
            </h2>
            <div className={styles.bio}>
              {personal.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <Icon /> {label}
                </a>
              ))}
            </div>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-2`}>
            <div className={styles.statsGrid}>
              {stats.map(({ value, label }) => (
                <div key={label} className={styles.statCard}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.sdgMission}>
              <div className={styles.missionIcon}>
                <EarthIcon />
              </div>
              <div>
                <p className={styles.missionTitle}>Building toward the SDGs</p>
                <p className={styles.missionText}>
                  Financial inclusion, decent work and resilient local businesses.
                  I pick projects where good software makes everyday economic
                  life work better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
