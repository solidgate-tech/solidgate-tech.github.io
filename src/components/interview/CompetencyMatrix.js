import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";
import { PillTabs } from "../ui/PillTabs";
import { SectionHeader } from "../ui/SectionHeader";
import { COMPETENCIES, MATRIX_SECTION, TRACKS } from "../../data/competencies";
import { cx } from "../../utils/cx";
import styles from "./CompetencyMatrix.module.css";

const MAX_SCORE = 5;
const WIDTH = 960;
const HEIGHT = 780;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const RADIUS = 230;
const LABEL_GAP = 30;
const FONT_SIZE = 30;
const LINE_HEIGHT = 34;

const pointAt = (index, count, radius) => {
  const angle = (index * 2 * Math.PI) / count - Math.PI / 2;
  return {
    x: CENTER_X + radius * Math.cos(angle),
    y: CENTER_Y + radius * Math.sin(angle),
    cos: Math.cos(angle),
    sin: Math.sin(angle),
  };
};

const toPoints = (points) => points.map((p) => `${p.x},${p.y}`).join(" ");

// Split a multi-word label into two lines of similar length
const splitLabel = (name) => {
  const words = name.split(" ");
  if (words.length < 2) return [name];
  let best = [name];
  let bestWidth = Infinity;
  for (let i = 1; i < words.length; i++) {
    const lines = [words.slice(0, i).join(" "), words.slice(i).join(" ")];
    const width = Math.max(lines[0].length, lines[1].length);
    if (width < bestWidth) {
      best = lines;
      bestWidth = width;
    }
  }
  return best;
};

function ChartLabel({ category, index, count, active, onHover }) {
  const { x, y, cos, sin } = pointAt(index, count, RADIUS + LABEL_GAP);
  const lines = splitLabel(category.name);
  const anchor = cos > 0.2 ? "start" : cos < -0.2 ? "end" : "middle";
  let firstBaseline;
  if (sin < -0.5) {
    firstBaseline = y - (lines.length - 1) * LINE_HEIGHT - 4;
  } else if (sin > 0.5) {
    firstBaseline = y + FONT_SIZE * 0.8;
  } else {
    firstBaseline = y - ((lines.length - 1) * LINE_HEIGHT) / 2 + FONT_SIZE * 0.35;
  }

  return (
    <text
      x={x}
      y={firstBaseline}
      textAnchor={anchor}
      className={cx(styles.chartLabel, active && styles.chartLabelActive)}
      onPointerEnter={() => onHover(index)}
    >
      {lines.map((line, lineIndex) => (
        <tspan key={line} x={x} dy={lineIndex === 0 ? 0 : LINE_HEIGHT}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function CompetencyChart({ categories, openIndex, onHover, onLeave }) {
  const count = categories.length;
  const levels = Array.from({ length: MAX_SCORE }, (_, i) => i + 1);
  const dataPoints = categories.map((category, index) =>
    pointAt(index, count, (category.score / MAX_SCORE) * RADIUS)
  );
  const summary = categories.map((c) => `${c.name} ${c.score} of ${MAX_SCORE}`).join(", ");

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={styles.chartSvg}
      role="img"
      aria-label={summary}
      onPointerLeave={onLeave}
    >
      {levels.map((level) => (
        <polygon
          key={level}
          points={toPoints(categories.map((_, index) => pointAt(index, count, (level / MAX_SCORE) * RADIUS)))}
          className={styles.gridLine}
        />
      ))}
      <polygon points={toPoints(dataPoints)} className={styles.dataArea} />
      {dataPoints.map((point, index) => (
        <circle
          key={categories[index].name}
          cx={point.x}
          cy={point.y}
          r={openIndex === index ? 10 : 7}
          className={styles.dataPoint}
          onPointerEnter={() => onHover(index)}
        />
      ))}
      {categories.map((category, index) => (
        <ChartLabel
          key={category.name}
          category={category}
          index={index}
          count={count}
          active={openIndex === index}
          onHover={onHover}
        />
      ))}
    </svg>
  );
}

export function CompetencyMatrix({ activeTab, onTabChange }) {
  const [openIndex, setOpenIndex] = useState(null);
  const categories = COMPETENCIES[activeTab];

  useEffect(() => {
    setOpenIndex(null);
  }, [activeTab]);

  const closeOnMouseLeave = (e) => {
    if (e.pointerType === "mouse") setOpenIndex(null);
  };

  return (
    <section className="section" aria-labelledby="matrix-title">
      <div className={styles.wrap}>
        <SectionHeader id="matrix-title" title={MATRIX_SECTION.title} subtitle={MATRIX_SECTION.subtitle} />
        <PillTabs
          items={TRACKS}
          value={activeTab}
          onChange={onTabChange}
          ariaLabel="Engineering track"
          className={styles.tabs}
        />

        <div className={styles.layout}>
          <figure className={styles.chart}>
            <figcaption className={styles.label}>{MATRIX_SECTION.chartLabel}</figcaption>
            <CompetencyChart
              categories={categories}
              openIndex={openIndex}
              onHover={setOpenIndex}
              onLeave={closeOnMouseLeave}
            />
          </figure>

          <div className={styles.details}>
            <p className={styles.label}>{MATRIX_SECTION.listLabel}</p>
            <Accordion onPointerLeave={closeOnMouseLeave}>
              {categories.map((category, index) => (
                <AccordionItem
                  key={category.name}
                  open={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  onHoverChange={(hovering) => hovering && setOpenIndex(index)}
                  summary={
                    <span className={styles.row}>
                      <span className={styles.rowName}>{category.name}</span>
                      <span className={styles.rowScore}>
                        <strong>{category.score}</strong>/{MAX_SCORE}
                      </span>
                    </span>
                  }
                  header={
                    <span className={styles.row}>
                      <span className={styles.openName}>{category.name}</span>
                      <span className={styles.openScore}>
                        {category.score} <span className={styles.openMax}>/{MAX_SCORE}</span>
                      </span>
                    </span>
                  }
                >
                  <p className={styles.description}>{category.description}</p>
                </AccordionItem>
              ))}
            </Accordion>
            <p className={styles.hint}>{MATRIX_SECTION.hint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
