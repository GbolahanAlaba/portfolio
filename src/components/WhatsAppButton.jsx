import { useEffect, useState } from "react";
import { whatsappLink } from "../data/portfolio";
import { WhatsAppIcon } from "./Icons";
import styles from "./WhatsAppButton.module.css";

// Floating quick-chat button; appears once the visitor scrolls past the hero.
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={`${styles.fab} ${visible ? styles.visible : ""}`}
      aria-label="Chat with me on WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={26} />
      <span className={styles.label}>Chat with me</span>
    </a>
  );
}
