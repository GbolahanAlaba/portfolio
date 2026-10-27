import { personal, openToRoles, whatsappLink } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ArrowIcon, LinkedinIcon, WhatsAppIcon } from "../components/Icons";
import casual from "../assets/casual.jpg";
import styles from "./Contact.module.css";

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const subject = `Hello from ${form.get("name")}`;
  const body = `${form.get("message")}\n\n${form.get("name")}\n${form.get("email")}`;
  window.location.href =
    `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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
              Need someone to own your{" "}
              <span className="serif">technology?</span>
            </h2>
            <p className={styles.sub}>
              Whether you're hiring a tech lead, ICT lead or backend engineer, or need someone to
              take a product from idea to launch, tell me about it. I read every
              message.
            </p>

            <a href={`mailto:${personal.email}`} className={styles.person}>
              <span className={styles.avatar}>
                <img src={casual} alt={`Photo of ${personal.name}`} width="64" height="64" loading="lazy" />
              </span>
              <span className={styles.personText}>
                <span className={styles.personName}>{personal.name}</span>
                <span className={styles.emailBtn}>
                  {personal.email}
                  <ArrowIcon size={16} />
                </span>
              </span>
            </a>

            <div className={styles.quick}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className={`${styles.quickBtn} ${styles.wa}`}>
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className={`${styles.quickBtn} ${styles.li}`}>
                <LinkedinIcon size={17} />
                View LinkedIn profile
              </a>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{personal.location}</span>
              </div>
              {personal.available && (
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Availability</span>
                  <span className={`${styles.detailValue} ${styles.available}`}>
                    <span className={styles.availDot} />
                    Open to {openToRoles} roles
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} reveal-delay-2 ${styles.card}`}>
            <p className={styles.cardLabel}>Quick Message</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={styles.textarea}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
              <p className={styles.note}>Opens your email app with the message filled in.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
