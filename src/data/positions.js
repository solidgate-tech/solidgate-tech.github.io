export const SCHOOL_SECTION = {
  title: "Software Engineering School — Open Positions",
  subtitle:
    "We look for product engineers who know how to code and are ready to become real T-shaped specialists.",
};

export const POSITIONS = [
  {
    title: "Node.js Backend Engineer",
    team: "Banking",
    stack: "Node.js",
    hook: "Move millions across currencies — build the IBANs merchants use instead of a local bank account.",
    details:
      "Treasury gives merchants their own EUR, USD, and GBP IBANs, fast SEPA and SWIFT transfers, competitive FX rates, and worldwide payouts — moving millions in merchant funds across markets every month, all from a single dashboard. The team owns everything from account provisioning to reconciliation with banking partners, so companies never have to open a local bank account just to operate globally.",
  },
  {
    title: "Go Engineer",
    team: "Billing & Taxes",
    stack: "Go",
    hook: "Run the subscription engine behind 10M+ active subscriptions — and the taxes on every single one.",
    details:
      "The team owns the subscription engine end-to-end for 10M+ active subscriptions — renewals, upgrades, downgrades, cancellations, and revenue recovery — plus the Tax sub-team, which keeps tax calculation and compliance correct across every market Solidgate operates in. Get this wrong and merchants lose LTV and churn; get it right and it compounds revenue quietly in the background.",
  },
  {
    title: "Go Engineer",
    team: "Antifraud",
    stack: "Go",
    hook: "Screen every one of our 20M+ monthly transactions for fraud — in real time, without slowing anyone down.",
    details:
      "Part of Risk Systems, this team builds the fraud-prevention engine that scores and screens all 20M+ transactions Solidgate processes every month in real time, combining rules and automated detection to block fraud before it happens. The hard part is doing that without adding friction for legitimate shoppers — a balance that directly protects merchant trust and Solidgate's own financial resilience.",
  },
  {
    title: "Go Engineer",
    team: "Dispute Representment",
    stack: "Go",
    hook: "Build the system that fights chargebacks — 96% of it running with zero human hands.",
    details:
      "Also part of Risk Systems, in the Dispute Management sub-team, this group builds the logic behind chargebacks and disputes — evidence handling, automated representment, and outcome tracking — with 96% of the representment process fully automated. Winning disputes recovers revenue merchants would otherwise lose, so this is one of the clearest places where engineering work shows up directly in a merchant's bottom line.",
  },
  {
    title: "Go Engineer",
    team: "Cards",
    stack: "Go",
    hook: "Build the integrations that connect Solidgate to card networks and acquiring banks worldwide.",
    details:
      "The Cards team owns card payment integrations — connecting Solidgate to card networks, schemes, and acquiring banks so every card transaction can be authorized and processed reliably. Every new integration affects uptime, authorization rates, and how many markets and card types Solidgate can support.",
  },
  {
    title: "Frontend Engineer",
    team: "APM",
    stack: "Frontend",
    hook: "Make 20+ alternative payment methods feel like one seamless checkout, everywhere they show up.",
    details:
      "Same Payment Infra / APMs mission as the Go role on this team, from the frontend side: the checkout and merchant-facing surfaces that expose our 20+ alternative payment methods have to stay fast and reliable as new methods and routing logic roll out underneath them.",
  },
  {
    title: "Frontend Engineer",
    team: "Finance Engineering",
    stack: "Frontend",
    hook: "Turn billions of calculations a month into dashboards Finance can actually trust.",
    details:
      "Finance Engineering automates work that would otherwise be manual for the Finance team — reconciliation, reporting, ledgers — while running billions of calculations every month on financial data. The team builds the internal tools and dashboards that let Finance operate at Solidgate's transaction volume without drowning in spreadsheets.",
  },
  {
    title: "Kotlin Engineer",
    team: "Core",
    stack: "Kotlin",
    hook: "Build the engine that authorizes and routes 20M+ card payments every single month.",
    details:
      "Core is the heart of Solidgate's payment router — the engine that decides how every one of the 20M+ card payments we process each month gets authorized, routed, and settled. It sits inside the Orchestration team, which builds intelligent routing across PSPs and payment methods for NA, EU, and LatAm — the layer where milliseconds, conversion, and merchant trust are won or lost.",
  },
  {
    title: "ML Engineer",
    team: "Orchestration",
    stack: "ML",
    hook: "Train the models that decide, in milliseconds, which PSP gets each of our 20M+ monthly card payments.",
    details:
      "Orchestration builds intelligent payment routing across PSPs and payment methods for NA, EU, and LatAm — the layer where milliseconds, conversion, and merchant trust are won or lost. This role builds the machine learning models behind that routing — feature pipelines, training, and online scoring — working alongside the Go engineers who run the router in production, so routing decisions keep getting sharper as PSP performance and fraud patterns shift.",
  },
];
