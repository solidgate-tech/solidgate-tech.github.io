export const TEAMS_SECTION = { title: "Team Structure", teamsLabel: "Teams" };

export const TEAM_STREAMS = [
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
    teams: ["Frontend Platform", "Backend Platform", "Data Platform"],
  },
  {
    title: "Payments Stream",
    description: "Builds the core product — the payment engine.",
    points: [
      "Orchestration logic",
      "Gateway and payment method integrations",
      "Global payment routing",
      "Merchant + developer integration experience",
    ],
    quote:
      "This is where we win or lose milliseconds, conversion, margin and scale.",
    teams: ["Core", "Orchestration", "Integrations", "Connectivity"],
  },
  {
    title: "Infra Stream",
    description: "Keeps everything fast, reliable and shippable.",
    points: [
      "Infra, CI/CD, runtime performance, cost optimisation",
      "Monitoring, security and tooling",
      "Automation everywhere",
    ],
    quote: "Infra is the force multiplier: less manual work, safer velocity.",
    teams: [],
  },
  {
    title: "Value Added Services",
    description:
      "Build products that extend revenue and create a competitive edge.",
    points: [
      "Risk & fraud systems",
      "Treasury",
      "Finance Engineering",
      "Billing/Subscriptions",
      "Launch team accelerating merchant go-live",
    ],
    quote:
      'This stream turns "payments processor" into "financial infrastructure".',
    teams: [
      "Risk Systems",
      "Banking",
      "Finance Engineering",
      "Billing",
      "Launch",
    ],
  },
];
