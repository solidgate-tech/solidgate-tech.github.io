import { Card } from "../components/ui/Card";
import { Chip, ChipList } from "../components/ui/Chip";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  AI_GUARDRAILS,
  AI_JOURNEY,
  AI_SECTION,
  AI_STATS,
  AI_TOOLS,
  GUARDRAILS_SECTION,
  IN_HOUSE_AGENTS,
  IN_HOUSE_MORE,
  IN_HOUSE_SECTION,
  JOURNEY_SECTION,
} from "../data/aiTools";
import { latestRingOf } from "../data/radar";
import styles from "./AIPage.module.css";

function Tools() {
  return (
    <section className={`container ${styles.page}`} aria-labelledby="ai-title">
      <SectionHeader id="ai-title" as="h1" title={AI_SECTION.title} subtitle={AI_SECTION.subtitle} />

      <dl className={styles.stats}>
        {AI_STATS.map((stat) => (
          <Card key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </Card>
        ))}
      </dl>

      <div className={styles.list}>
        {AI_TOOLS.map((tool) => (
          <Card key={tool.name} as="article" variant="lime" className={styles.card}>
            {/* Icons traced from the redesign mockup */}
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

function InHouseAgents() {
  return (
    <section className="section container" aria-labelledby="in-house-title">
      <SectionHeader id="in-house-title" title={IN_HOUSE_SECTION.title} subtitle={IN_HOUSE_SECTION.subtitle} />
      <div className={styles.agents}>
        {IN_HOUSE_AGENTS.map((agent) => (
          <Card key={agent.name} as="article" className={styles.agent}>
            <h3 className={styles.agentName}>{agent.name}</h3>
            <p className={styles.agentKind}>{agent.kind}</p>
            <p className={styles.agentDescription}>{agent.description}</p>
            <ChipList className={styles.highlights}>
              {agent.highlights.map((highlight) => (
                <Chip key={highlight}>{highlight}</Chip>
              ))}
            </ChipList>
          </Card>
        ))}
        <Card variant="lime" className={styles.moreAgents}>
          <p className={styles.moreValue}>{IN_HOUSE_MORE.value}</p>
          <p className={styles.moreText}>{IN_HOUSE_MORE.text}</p>
        </Card>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section container" aria-labelledby="journey-title">
      <SectionHeader id="journey-title" title={JOURNEY_SECTION.title} subtitle={JOURNEY_SECTION.subtitle} />
      <ol className={styles.journey}>
        {AI_JOURNEY.map((step) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.period}>{step.period}</span>
            <Card className={styles.stepCard}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Guardrails() {
  return (
    <section className="section container" aria-labelledby="guardrails-title">
      <SectionHeader id="guardrails-title" title={GUARDRAILS_SECTION.title} subtitle={GUARDRAILS_SECTION.subtitle} />
      <div className={styles.guardrails}>
        {AI_GUARDRAILS.map((guardrail) => (
          <Card key={guardrail.title} as="article" variant="lime" className={styles.guardrail}>
            <h3 className={styles.guardrailTitle}>{guardrail.title}</h3>
            <p className={styles.guardrailText}>{guardrail.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function AIPage() {
  return (
    <>
      <Tools />
      <InHouseAgents />
      <Journey />
      <Guardrails />
    </>
  );
}
