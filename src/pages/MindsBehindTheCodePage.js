import { Card } from "../components/ui/Card";
import { Chip, ChipList } from "../components/ui/Chip";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TEAM_GROUPS, TEAMS_SECTION } from "../data/teams";
import { ENGINEERING_VALUES, RELIABILITY_VALUE, VALUES_SECTION } from "../data/values";
import styles from "./MindsBehindTheCodePage.module.css";

function EngineeringValues() {
  const { uptimeNote } = RELIABILITY_VALUE;

  return (
    <section className={`container ${styles.firstSection}`} aria-labelledby="values-title">
      <SectionHeader id="values-title" as="h1" title={VALUES_SECTION.title} subtitle={VALUES_SECTION.subtitle} />
      <div className={styles.grid}>
        {ENGINEERING_VALUES.map((value) => (
          <Card key={value.title} as="article" className={styles.valueCard}>
            <h3 className={styles.cardTitle}>{value.title}</h3>
            <p className={styles.cardText}>{value.description}</p>
          </Card>
        ))}

        <Card as="article" className={`${styles.valueCard} ${styles.reliability}`}>
          <div className={styles.reliabilityHead}>
            <h3 className={styles.cardTitle}>{RELIABILITY_VALUE.title}</h3>
            <a
              href={RELIABILITY_VALUE.statusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.statusLink}
            >
              {RELIABILITY_VALUE.statusLabel}
            </a>
          </div>
          <p className={`${styles.cardText} ${styles.reliabilityText}`}>{RELIABILITY_VALUE.description}</p>
          <div className={styles.uptime}>
            <p className={styles.uptimeGoal}>{RELIABILITY_VALUE.uptimeGoal}</p>
            <p className={styles.uptimeNote}>
              {uptimeNote.before} <s>{uptimeNote.struck}</s> {uptimeNote.after}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function TeamStructure() {
  return (
    <section className="section container" aria-labelledby="teams-title">
      <SectionHeader id="teams-title" title={TEAMS_SECTION.title} subtitle={TEAMS_SECTION.subtitle} />
      <div className={styles.teamGrid}>
        {TEAM_GROUPS.map((group) => (
          <Card key={group.title} as="article" className={styles.teamCard}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            {group.description && <p className={styles.teamDescription}>{group.description}</p>}
            {group.points && (
              <ul className={styles.points}>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {group.quote && <p className={styles.quote}>{group.quote}</p>}
            {group.teams.length > 0 && (
              <ChipList className={styles.teams}>
                {group.teams.map((team) => (
                  <Chip key={team}>{team}</Chip>
                ))}
              </ChipList>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

export function MindsBehindTheCodePage() {
  return (
    <>
      <EngineeringValues />
      <TeamStructure />
    </>
  );
}
