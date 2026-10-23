import { useState } from "react";
import { ResearchBanner } from "../components/ResearchBanner";
import { TechRadar } from "../components/radar/TechRadar";
import { PillTabs } from "../components/ui/PillTabs";
import {
  LATEST_RADAR_YEAR,
  RADAR_CONFIG,
  RADAR_MARKERS,
  RADAR_YEARS,
  RING_DESCRIPTIONS,
} from "../data/radar";
import styles from "./TechRadarPage.module.css";

const YEAR_TABS = RADAR_YEARS.map((year) => ({ id: year, label: year }));

export function TechRadarPage() {
  const [year, setYear] = useState(LATEST_RADAR_YEAR);
  const config = RADAR_CONFIG[year];
  const titleWords = config.title.split(" ");
  const titleYear = titleWords.pop();

  return (
    <div className={styles.page}>
      <ResearchBanner className={`container ${styles.research}`} />

      <div className={styles.stage}>
        <h1 className={styles.title}>
          {titleWords.join(" ")}
          <br />
          {titleYear}
        </h1>
        <TechRadar key={year} config={config} className={styles.radar} />
      </div>

      <div className={styles.controls}>
        <PillTabs items={YEAR_TABS} value={year} onChange={setYear} ariaLabel="Tech Radar year" />
        <p className={styles.updated}>{config.date}</p>
        <ul className={styles.markers}>
          {RADAR_MARKERS.map((marker) => (
            <li key={marker}>{marker}</li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.rings}`}>
        {RING_DESCRIPTIONS.map((ring) => (
          <p key={ring.ring} id={ring.ring.toLowerCase()}>
            {ring.ring} – {ring.text}
          </p>
        ))}
      </div>
    </div>
  );
}
