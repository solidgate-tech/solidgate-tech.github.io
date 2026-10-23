import { COPYRIGHT_HOLDER, FOOTER_LINK_COLUMNS } from "../../data/footerLinks";
import { LOVE_TAGLINE, QUOTE } from "../../data/siteCopy";
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

        <nav className={styles.links} aria-label="Solidgate">
          {FOOTER_LINK_COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((group, groupIndex) => (
                <ul key={groupIndex} className={styles.group}>
                  {group.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </nav>

        <p className={styles.copyright}>
          © {COPYRIGHT_HOLDER} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
