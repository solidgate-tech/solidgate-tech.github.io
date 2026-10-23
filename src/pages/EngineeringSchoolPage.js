import { useId, useState } from "react";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { SectionHeader } from "../components/ui/SectionHeader";
import { POSITIONS, SCHOOL_SECTION } from "../data/positions";
import { cx } from "../utils/cx";
import styles from "./EngineeringSchoolPage.module.css";

function PositionCard({ position, expanded, onToggle }) {
  const detailsId = useId();

  return (
    <Card as="article" className={cx(styles.card, expanded && styles.expanded)} onClick={onToggle}>
      <div className={styles.head}>
        <h3 className={styles.title}>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {position.title}
          </button>
        </h3>
        <Chip size="sm">{position.stack}</Chip>
      </div>
      <p className={styles.team}>{position.team} Team</p>
      <p className={styles.hook}>{position.hook}</p>
      <div id={detailsId} className={styles.details} hidden={!expanded}>
        <p>{position.details}</p>
      </div>
      <span className={styles.chevron} aria-hidden="true">
        {expanded ? "↑" : "↓"}
      </span>
    </Card>
  );
}

export function EngineeringSchoolPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className={`container ${styles.page}`} aria-labelledby="school-title">
      <SectionHeader id="school-title" as="h1" title={SCHOOL_SECTION.title} subtitle={SCHOOL_SECTION.subtitle} />
      <div className={styles.grid}>
        {POSITIONS.map((position, index) => (
          <PositionCard
            key={`${position.title}-${position.team}`}
            position={position}
            expanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
