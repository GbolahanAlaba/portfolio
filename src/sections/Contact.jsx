import { personal } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <p className="section-label">Contact</p>
        </div>

        <div className={styles.wrapper}>
          <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-1`}>
            <h2 className={`section-title ${styles.title}`}>
              Let's build something{" "}
              <em className={styles.em}>meaningful</em>.
            </h2>
            <p className={styles.sub}>
              Whether you have a project aligned with the SDGs, a collaboration idea,
              or simply want to connect — my inbox is always open.
            </p>

            <a href={`mailto:${personal.email}`} className={styles.emailBtn}>
              {personal.email}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{personal.location}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Availability</span>
                <span className={`${styles.detailValue} ${styles.available}`}>
                  <span className={styles.availDot} />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-2 ${styles.card}`}>
            <p className={styles.cardLabel}>Quick Message</p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personal.email}`;
              }}
            >
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  className={styles.textarea}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
