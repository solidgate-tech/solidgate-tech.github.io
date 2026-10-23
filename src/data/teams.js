export const TEAMS_SECTION = {
  title: "Team Structure",
  subtitle: [
    "We move fast. We stay transparent.",
    "We evaluate impact and thinking — not buzzwords.",
  ],
};

// description, points and quote are optional; teams render as chips
export const TEAM_GROUPS = [
  {
    title: "Payments Stream",
    description:
      "Builds the payment router — the brain behind every transaction decision.",
    points: [
      "Intelligent routing logic across PSPs and payment methods",
      "Orchestration services for NA, EU, and LatAm markets",
      "Faster feature delivery than any competitor on the market",
      "Simple integration, powerful control",
    ],
    quote:
      "This is where we win or lose conversion, margin, and merchant trust.",
    teams: ["Core", "Connectivity", "Orchestration", "Vault", "Payments Analytics"],
  },
  {
    title: "Payments Infra Stream",
    description: "Builds the core product — the payment engine.",
    points: [
      "Orchestration logic",
      "Gateway and payment method integrations",
      "Global payment routing",
      "Merchant + developer integration experience",
    ],
    quote:
      "This is where we win or lose milliseconds, conversion, margin and scale.",
    teams: ["Integrations", "Reconciliation", "APMs"],
  },
  {
    title: "Platform Stream",
    description: "Builds the core platform that every product team runs on.",
    points: [
      "Standardised service patterns, frameworks, and shared primitives",
      "Scalable, secure, high-performance defaults",
      "Enable product teams to focus on product outcomes instead of platform complexity",
    ],
    quote:
      "Platform sets the baseline and architectural direction, so everything we build compounds.",
    teams: ["Data Engineering", "Backend Platform", "Web Platform", "Platform Analytics"],
  },
  {
    title: "Billing Stream",
    description:
      "Builds the subscription engine — the backbone of recurring revenue.",
    points: [
      "Full subscription lifecycle management",
      "Renewals, upgrades, pauses, and cancellations",
      "Retention and revenue recovery logic",
      "Billing evolution driven by market and merchant feedback",
    ],
    quote:
      "This is where we win or lose LTV, churn, and long-term merchant growth.",
    teams: ["Billing & Subscription Management", "Tax & Customers"],
  },
  {
    title: "Risk Systems Stream",
    description:
      "Builds the fraud prevention engine — the line between safe payments and financial exposure.",
    points: [
      "Advanced fraud detection and risk analysis",
      "Chargeback management and dispute logic",
      "Real-time alerting and automated prevention",
      "Payment integrity at scale",
    ],
    quote:
      "This is where we win or lose merchant trust, transaction safety, and financial resilience.",
    teams: ["Risk Systems", "Dispute Management", "Launch", "Antifraud"],
  },
  {
    title: "Standalone Teams",
    description:
      "Cross-cutting functions that operate independently across every group.",
    teams: ["Banking", "Finance Engineering"],
  },
];
