import { Card } from "../components/ui/Card";
import { Chip, ChipList } from "../components/ui/Chip";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AI_SECTION, AI_TOOLS } from "../data/aiTools";
import { latestRingOf } from "../data/radar";
import styles from "./AIPage.module.css";

export function AIPage() {
  return (
    <section className={`container ${styles.page}`} aria-labelledby="ai-title">
      <SectionHeader id="ai-title" as="h1" title={AI_SECTION.title} subtitle={AI_SECTION.subtitle} />
      <div className={styles.list}>
        {AI_TOOLS.map((tool) => (
          <Card key={tool.name} as="article" variant="lime" className={styles.card}>
            {/* Brand icons arrive in iteration 2; the slot keeps the layout ready */}
            <div className={styles.icon} aria-hidden="true">
              {tool.icon && <img src={tool.icon} alt="" />}
            </div>
            <div className={styles.text}>
              <h3 className={styles.name}>
                {tool.name} <span className={styles.ring}>{latestRingOf(tool.radarLabel)}</span>
              </h3>
              <p className={styles.description}>{tool.description}</p>
            </div>
            <ChipList className={styles.uses}>
              {tool.uses.map((use) => (
                <Chip key={use} variant="dark">
                  {use}
                </Chip>
              ))}
            </ChipList>
          </Card>
        ))}
      </div>
    </section>
  );
}
