import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";
import { Chip } from "../ui/Chip";
import { PillTabs } from "../ui/PillTabs";
import { SectionHeader } from "../ui/SectionHeader";
import { TRACKS } from "../../data/competencies";
import { LANGUAGES, LANGUAGES_SECTION } from "../../data/languages";
import styles from "./LanguageRequirements.module.css";

export function LanguageRequirements({ activeTab, onTabChange }) {
  const [openIndex, setOpenIndex] = useState(0);
  const languages = LANGUAGES[activeTab];

  useEffect(() => {
    setOpenIndex(0);
  }, [activeTab]);

  return (
    <section className="section" aria-labelledby="languages-title">
      <div className={styles.wrap}>
        <SectionHeader id="languages-title" title={LANGUAGES_SECTION.title} />
        <PillTabs
          items={TRACKS}
          value={activeTab}
          onChange={onTabChange}
          ariaLabel="Engineering track"
          className={styles.tabs}
        />
        <Accordion>
          {languages.map((language, index) => (
            <AccordionItem
              key={language.name}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              summary={<span className={styles.summaryName}>{language.name}</span>}
              header={
                <span className={styles.header}>
                  <span className={styles.openName}>{language.name}</span>
                  {language.logo && (
                    <img src={language.logo} alt={`${language.name} logo`} className={styles.logo} />
                  )}
                </span>
              }
            >
              <div className={styles.columns}>
                <div>
                  <Chip variant="label" size="sm">
                    {LANGUAGES_SECTION.questionsLabel}
                  </Chip>
                  <ul className={styles.questions}>
                    {language.questions.map((question) => (
                      <li key={question.q}>
                        <span className={styles.arrow} aria-hidden="true">
                          →
                        </span>
                        <span>
                          <span className={styles.question}>{question.q}</span>
                          {question.detail && <span className={styles.detail}>{question.detail}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Chip variant="label" size="sm">
                    {LANGUAGES_SECTION.requirementsLabel}
                  </Chip>
                  <ul className={styles.requirements}>
                    {language.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
