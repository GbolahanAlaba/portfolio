import styles from "./Logo.module.css";

// GA monogram: the G's bar runs on as the A's crossbar, one continuous stroke.
export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={styles.mark}>
      <rect width="40" height="40" rx="11" className={styles.tile} />
      <path
        d="M27.07 12.93 A10 10 0 1 0 29.66 22.59 L16.8 22.59"
        className={styles.g}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1 27 L20 14.5 L24.9 27"
        className={styles.a}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ withName = true }) {
  return (
    <span className={styles.logo}>
      <LogoMark />
      {withName && (
        <span className={styles.name}>
          Gbolahan<span className={styles.surname}> Alaba</span>
        </span>
      )}
    </span>
  );
}
