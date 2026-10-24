// Content follows Max Baginskiy's essay on how Solidgate became AI-first.

export const AI_SECTION = {
  title: "How We Use AI at Solidgate",
  subtitle: [
    "Fintech is regulated — and that's exactly why we went AI-first.",
    "Used well, AI improves code quality and security posture, keeps compliance happy and helps us win the market.",
  ],
};

export const AI_STATS = [
  { value: "~70%", label: "of our code is written with AI" },
  { value: "2.2×", label: "more merged MRs per week (1,224 vs. 554)" },
  { value: "+87%", label: "weekly deployments" },
  { value: "3–4×", label: "less alert noise with our Ward agent" },
];

export const AI_TOOLS = [
  {
    name: "CodeRabbit",
    radarLabel: "CodeRabbit",
    icon: "/icons/ai/coderabbit.svg",
    description:
      "AI code review on every merge request since early 2025. We chose it after A/B testing review tools on real defects and taught it our own rules — for example, to catch the kind of SQL issue that once caused an incident. Auditors called AI code review a strength in our PCI DSS and banking-licence reviews.",
    uses: ["Automated MR reviews", "Custom SQL & schema rules", "Security & compliance checks"],
  },
  {
    name: "OpenAI",
    radarLabel: "OpenAI",
    icon: "/icons/ai/openai.svg",
    description:
      "Our first company-wide AI tool: ChatGPT was a centralized subscription even before 2024. Engineers use it for problem-solving, documentation and research — it once helped us pin down the root cause of a tricky SQL incident.",
    uses: ["Documentation writing", "Problem-solving", "Research"],
  },
  {
    name: "Gemini",
    radarLabel: "Gemini",
    icon: "/icons/ai/gemini.svg",
    description:
      "Google's AI assistant used as an alternative to OpenAI, particularly useful for tasks requiring up-to-date knowledge and integration with the Google ecosystem.",
    uses: ["Research assistance", "Code generation", "Writing support"],
  },
  {
    name: "Cursor",
    radarLabel: "Cursor",
    icon: "/icons/ai/cursor.svg",
    description:
      "Started our agentic era in mid-2025. A pilot with the Integrations, Connectivity and Platform teams raised deployment frequency 1.2–1.6× with no rise in change failure rate, so we rolled it out to every engineer — and to Support, Financial Control and Risk.",
    uses: ["Agentic coding", "Codebase navigation", "Automation for non-engineers"],
  },
  {
    name: "Claude",
    radarLabel: "Claude",
    icon: "/icons/ai/claude.svg",
    description:
      "Adopted in early 2026, with Claude Skills, as a more advanced alternative to Cursor — it even sparked a friendly tokenmaxxing competition. Since moving to Claude and agentic workflows we complete 30% more tickets with a 20% shorter cycle time.",
    uses: ["Agentic coding", "Claude Skills", "MCP integrations"],
  },
];

export const IN_HOUSE_SECTION = {
  title: "Built In-House",
  subtitle: "10+ agents of our own — with full control over context, repositories, domain conventions and security boundaries. Here are two of them.",
};

export const IN_HOUSE_MORE = {
  value: "10+",
  text: "in-house agents and counting. Veritas and Ward are just two of the agents our teams have built — and use every day.",
};

export const IN_HOUSE_AGENTS = [
  {
    name: "Veritas",
    kind: "Agentic platform",
    description:
      "Describe a task in a Jira ticket or a Slack message and Veritas plans it, writes the code, runs the tests, opens a merge request and iterates on review comments — no IDE needed. Designed by Staff Engineer Vlad Pistun, it now serves product managers, QA, infrastructure and frontend engineers making changes outside their usual stack.",
    highlights: ["100+ tickets, zero production defects", "2-month feature shipped in a week"],
  },
  {
    name: "Ward",
    kind: "Observability 2.0 agent",
    icon: "/icons/ai/ward.svg",
    description:
      "For every alert, Ward pulls context from VictoriaLogs, VictoriaMetrics, GitLab and RDS Performance Insights and suggests what went wrong. Engineers stay in the loop and can hand the fix to Veritas in one click. Built by Software Engineers Yuriy Zaiveilev and Vlad Pavlenko.",
    highlights: ["3–4× less alert noise", "3–4× less time per alert"],
  },
];

export const JOURNEY_SECTION = {
  title: "Our AI Journey",
  subtitle: "From the first Copilot seats to agentic workflows in two years.",
};

export const AI_JOURNEY = [
  {
    period: "Before 2024",
    title: "ChatGPT for everyone",
    text: "A centralized ChatGPT subscription became our first company-wide AI tool.",
  },
  {
    period: "2024",
    title: "GitHub Copilot",
    text: "Rolled out to every engineer. The first visible change was a surge in unit tests — and happier security and penetration-testing specialists.",
  },
  {
    period: "2025",
    title: "AI code review",
    text: "After an incident caused by a complex SQL query, we A/B-tested AI reviewers and adopted CodeRabbit. Auditors later named AI code review a strength.",
  },
  {
    period: "Mid-2025",
    title: "Cursor and the agentic era",
    text: "Deployment frequency grew 1.2–1.6× with no rise in change failure rate. Cursor went to every engineer, then to operations — our Finance team now builds its own APIs and PDF parsers.",
  },
  {
    period: "Late 2025",
    title: "AI-assisted incident management",
    text: "With incident.io, AI drafts post-mortems and timelines, transcribes bridge calls, suggests follow-up actions and helps write status updates.",
  },
  {
    period: "Early 2026",
    title: "Claude",
    text: "Claude and Claude Skills became our main agentic tools. Merge request volume grew 1.5× in six months and 2.2× year over year.",
  },
  {
    period: "Early 2026",
    title: "Veritas and Ward",
    text: "Our own agents: Veritas turns Jira tickets and Slack requests into merge requests, and Ward triages alerts with full context.",
  },
  {
    period: "Early 2026",
    title: "Agentic commerce",
    text: "AI is changing how people pay, too: merchants can enable agentic payment flows on Solidgate, and we co-hosted a Warsaw hackathon on AI shopping agents.",
  },
];

export const GUARDRAILS_SECTION = {
  title: "How We Keep AI Safe",
  subtitle: "Faster delivery without giving up compliance or quality.",
};

export const AI_GUARDRAILS = [
  {
    title: "Humans stay in the loop",
    text: "Every merge request gets a human review — regulation requires it, and we believe in it. Engineers acknowledge alerts and decide on fixes.",
  },
  {
    title: "Small, reviewable changes",
    text: "Trunk-based development and merge requests under 500 lines keep AI-written code easy to review and safe to ship.",
  },
  {
    title: "Writing is thinking",
    text: "AI drafts docs faster, but the critical parts of our ADRs, RFCs and design docs are written by hand. No AI slop.",
  },
];
