import { COPYRIGHT_HOLDER, LOVE_TAGLINE, QUOTE } from "../../data/siteCopy";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <blockquote className={styles.quote}>{QUOTE}</blockquote>

        <p className={styles.tagline}>
          {LOVE_TAGLINE.lines.map((line) => (
            <span key={line} className={styles.taglineLine}>
              {line}{" "}
            </span>
          ))}
          <span className={styles.heart} aria-hidden="true">
            {LOVE_TAGLINE.emoji}
          </span>
        </p>

        <p className={styles.copyright}>
          © {COPYRIGHT_HOLDER} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
