import { cx } from "../../utils/cx";
import styles from "./SectionHeader.module.css";

// Centered section title with an optional muted subtitle (a string or a list of lines)
export function SectionHeader({ title, subtitle, as: Heading = "h2", id, className }) {
  const lines = subtitle == null ? [] : [].concat(subtitle);

  return (
    <header className={cx(styles.header, className)}>
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {lines.length > 0 && (
        <p className={styles.subtitle}>
          {lines.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </p>
      )}
    </header>
  );
}
