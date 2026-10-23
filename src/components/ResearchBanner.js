import { Card } from "./ui/Card";
import { RESEARCH } from "../data/research";
import styles from "./ResearchBanner.module.css";

export function ResearchBanner({ className }) {
  return (
    <aside className={className} aria-labelledby="research-banner-title">
      <Card variant="lime" className={styles.banner}>
        <div>
          <p className={styles.label}>
            {RESEARCH.title} · {RESEARCH.partners}
          </p>
          <h2 id="research-banner-title" className={styles.question}>
            {RESEARCH.question}
          </h2>
          <p className={styles.text}>{RESEARCH.text}</p>
        </div>
        <div className={styles.action}>
          <a href={RESEARCH.cta.href} target="_blank" rel="noopener noreferrer" className={styles.button}>
            {RESEARCH.cta.label} <span aria-hidden="true">↗</span>
          </a>
          <p className={styles.note}>{RESEARCH.note}</p>
        </div>
      </Card>
    </aside>
  );
}
