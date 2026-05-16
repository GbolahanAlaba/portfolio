import { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useScrollReveal";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoInitials}>GA</span>
          <span className={styles.logoDot} />
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`${styles.link} ${activeSection === id ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="mailto:gbolahan@example.com"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
