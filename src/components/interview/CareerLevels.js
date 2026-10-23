import { useState } from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";
import { SectionHeader } from "../ui/SectionHeader";
import { CAREER_LEVELS, LEVELS_SECTION } from "../../data/careerLevels";
import styles from "./CareerLevels.module.css";

export function CareerLevels() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" aria-labelledby="levels-title">
      <div className="container">
        <SectionHeader id="levels-title" title={LEVELS_SECTION.title} subtitle={LEVELS_SECTION.subtitle} />
      </div>
      <div className={styles.wrap}>
        <Accordion>
          {CAREER_LEVELS.map((level, index) => (
            <AccordionItem
              key={level.name}
              split
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              summary={
                <span className={styles.summary}>
                  <span className={styles.summaryName}>{level.name}</span>
                  <span className={styles.summaryDescription}>{level.description}</span>
                </span>
              }
              header={
                <span className={styles.header}>
                  <span className={styles.openName}>{level.name}</span>
                  <span className={styles.openDescription}>{level.description}</span>
                </span>
              }
            >
              <ul className={styles.characteristics}>
                {level.characteristics.map((characteristic) => (
                  <li key={characteristic}>{characteristic}</li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
