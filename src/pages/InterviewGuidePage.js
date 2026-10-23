import { useEffect, useState } from "react";
import { CareerLevels } from "../components/interview/CareerLevels";
import { CompetencyMatrix } from "../components/interview/CompetencyMatrix";
import { FireworkExplosion } from "../components/interview/FireworkExplosion";
import { HiringProcess } from "../components/interview/HiringProcess";
import { LanguageRequirements } from "../components/interview/LanguageRequirements";
import { ABOUT_PARAGRAPHS, HERO_STATEMENT } from "../data/siteCopy";
import styles from "./InterviewGuidePage.module.css";

// Each sentence of the hero statement starts on its own line, as in the mockup
const HERO_SENTENCES = HERO_STATEMENT.replace(/\.\s+/g, ".\n").split("\n");

export function InterviewGuidePage() {
  const [activeTab, setActiveTab] = useState("backend");
  const [tabClickCount, setTabClickCount] = useState(0);
  const [fireworkPosition, setFireworkPosition] = useState(null);

  // Reset click count after 2 seconds of inactivity
  useEffect(() => {
    if (tabClickCount > 0) {
      const timer = setTimeout(() => setTabClickCount(0), 2000);
      return () => clearTimeout(timer);
    }
  }, [tabClickCount]);

  // Five quick track switches launch the heart firework
  const handleTabClick = (tab) => {
    const newCount = tabClickCount + 1;
    setTabClickCount(newCount);
    setActiveTab(tab);

    if (newCount >= 5) {
      setFireworkPosition({ x: Math.random() * 100, y: Math.random() * 100 });
      setTabClickCount(0);
      // Clean up after animation completes (0.5s fly + 0.8s explode)
      setTimeout(() => setFireworkPosition(null), 1300);
    }
  };

  return (
    <div className={styles.page}>
      {fireworkPosition && <FireworkExplosion position={fireworkPosition} />}

      <section className={`container ${styles.hero}`}>
        <h1 className={styles.statement}>
          {HERO_SENTENCES.map((sentence) => (
            <span key={sentence} className={styles.sentence}>
              {sentence}{" "}
            </span>
          ))}
        </h1>
        <div className={styles.about}>
          {ABOUT_PARAGRAPHS.map((segments, index) => (
            <p key={index}>
              {segments.map((segment) =>
                segment.highlight ? (
                  <span key={segment.text} className={styles.highlight}>
                    {segment.text}
                  </span>
                ) : (
                  segment.text
                )
              )}
            </p>
          ))}
        </div>
      </section>

      <HiringProcess />
      <CompetencyMatrix activeTab={activeTab} onTabChange={handleTabClick} />
      <CareerLevels />
      <LanguageRequirements activeTab={activeTab} onTabChange={handleTabClick} />
    </div>
  );
}
