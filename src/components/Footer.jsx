import { personal, whatsappLink } from "../data/portfolio";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Logo />
          <p className={styles.copy}>
            © {new Date().getFullYear()} {personal.name}. Built with React and Vite.
          </p>
        </div>
        <div className={styles.links}>
          {personal.github && <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>}
          {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
          {personal.twitter && <a href={personal.twitter} target="_blank" rel="noreferrer">X / Twitter</a>}
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
