import { useId, useState } from "react";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { CtaButton } from "../ui/CtaButton";
import { SectionHeader } from "../ui/SectionHeader";
import { HIRING_SECTION, HIRING_STEPS } from "../../data/hiringSteps";
import styles from "./HiringProcess.module.css";

function PlanBlock({ block }) {
  if (block.type === "ul") {
    return (
      <ul className={styles.planList}>
        {block.items.map((item) =>
          typeof item === "string" ? (
            <li key={item}>{item}</li>
          ) : (
            <li key={item.strong}>
              <strong>{item.strong}</strong>
              {item.text}
            </li>
          )
        )}
      </ul>
    );
  }
  if (block.parts) {
    return (
      <p>
        {block.parts.map((part, index) =>
          typeof part === "string" ? (
            part
          ) : (
            <a key={index} href={part.href}>
              {part.text}
            </a>
          )
        )}
      </p>
    );
  }
  return <p>{block.text}</p>;
}

function PlanContent({ sections }) {
  return sections.map((section, index) =>
    section.divider ? (
      <p key={index} className={styles.divider}>
        {section.divider}
      </p>
    ) : (
      <div key={index} className={styles.planSection}>
        {section.heading && <h4 className={styles.planHeading}>{section.heading}</h4>}
        {section.blocks.map((block, blockIndex) => (
          <PlanBlock key={blockIndex} block={block} />
        ))}
      </div>
    )
  );
}

function HiringStep({ step }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className={styles.step}>
      <span className={styles.number} aria-hidden="true">
        {step.number}
      </span>
      <Card className={styles.card}>
        <div className={styles.head}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{step.title}</h3>
            {step.tag && (
              <Chip variant="grey" size="sm">
                {step.tag}
              </Chip>
            )}
          </div>
          {step.duration && <span className={styles.duration}>{step.duration}</span>}
        </div>

        <div className={styles.bodyRow}>
          <div className={styles.body}>
            {step.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {step.plan && (
            <CtaButton expanded={open} controls={panelId} onClick={() => setOpen(!open)} className={styles.cta}>
              {step.plan.label}
            </CtaButton>
          )}
        </div>

        {step.plan && (
          <div id={panelId} className={styles.plan} hidden={!open}>
            <PlanContent sections={step.plan.sections} />
          </div>
        )}
      </Card>
    </li>
  );
}

export function HiringProcess() {
  return (
    <section className="section" aria-labelledby="hiring-title">
      <div className={styles.wrap}>
        <SectionHeader id="hiring-title" title={HIRING_SECTION.title} subtitle={HIRING_SECTION.subtitle} />
        <ol className={styles.steps}>
          {HIRING_STEPS.map((step) => (
            <HiringStep key={step.number} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
