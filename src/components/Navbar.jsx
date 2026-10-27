import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";
import { useActiveSection } from "../hooks/useScrollReveal";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <a href="#hero" className={styles.logo} aria-label="Gbolahan Alaba, back to top">
          <span className={styles.logoInitials}>GA</span>
          <span className={styles.logoDot} />
        </a>

        <ul id="nav-menu" className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${activeSection === id ? styles.active : ""}`}
                aria-current={activeSection === id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${personal.email}`}
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
