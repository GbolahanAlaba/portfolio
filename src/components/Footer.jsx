import { personal } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>GA<span className={styles.dot}>.</span></span>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Gbolahan Alaba. Crafted with intention.
          </p>
        </div>
        <div className={styles.links}>
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personal.twitter} target="_blank" rel="noreferrer">Twitter</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
