export const HIRING_SECTION = {
  title: "Hiring Process",
  subtitle: [
    "We move fast. We stay transparent.",
    "We evaluate impact and thinking — not buzzwords.",
  ],
};

export const TECH_INTERVIEW_PLAN = [
  {
    heading: "Preparation",
    blocks: [
      {
        type: "p",
        parts: [
          "Start by checking out our website — ",
          { text: "solidgate.com", href: "https://solidgate.com/" },
          " 💚 — and get to know our product inside out. Want to dig deeper? Our API docs have all the details you need. Below, you'll find a clear breakdown of the skills we look for across engineering roles.",
        ],
      },
    ],
  },
  {
    heading: "1. Intro (5 min)",
    blocks: [
      {
        type: "p",
        text:
          "We'll kick things off with quick intros — who you are, who we are, and what we're here to do. Before we dive in, you'll have a chance to ask any questions upfront — about the role, the team, how we work, or anything that helps you feel confident moving forward.",
      },
    ],
  },
  {
    heading: "2. Deep Dive into Experience (20 min)",
    blocks: [
      {
        type: "p",
        text:
          "We want to understand how you work, not just where you've worked.",
      },
      { type: "p", text: "We'll ask about:" },
      {
        type: "ul",
        items: [
          "Key projects you've shipped",
          "Technical decisions you've made (and why)",
          "Real impact you've had on teams and products",
        ],
      },
      {
        type: "p",
        text:
          "Be ready to go beyond your CV. We're interested in ownership and real impact you've had on teams and products.",
      },
    ],
  },
  {
    heading: "3. Technical Questions (60 min)",
    blocks: [
      {
        type: "p",
        text:
          "Now we go into your engineering skills. Expect questions covering the topics outlined in the competence matrix section.",
      },
      {
        type: "p",
        text:
          "This could be hands-on or conceptual. We're not just looking for the right answer — we care about how you approach problems.",
      },
    ],
  },
  { divider: "OR" },
  {
    heading: "3. Architecture Task (60 min)",
    blocks: [
      {
        type: "p",
        text:
          "If relevant for the role, we'll throw in a system design challenge.",
      },
      {
        type: "p",
        text:
          "You might be asked to sketch out how you'd build something like:",
      },
      {
        type: "ul",
        items: [
          "A high-load payments service",
          "A secure API for transaction processing",
          "An internal tool for risk monitoring",
        ],
      },
      {
        type: "p",
        text:
          "We want to see how you balance scalability, reliability, and speed — and how you justify your tech choices.",
      },
    ],
  },
  {
    heading: "4. Wrap-Up & Next Steps (5 min)",
    blocks: [
      {
        type: "p",
        text: "We'll close with a short debrief and outline what's next.",
      },
      {
        type: "p",
        text:
          "You'll also have time to ask us anything — about the role, the team, the culture, or how we build at Solidgate.",
      },
    ],
  },
];

export const AI_FLUENCY_PLAN = [
  {
    heading: "Preparation",
    blocks: [
      {
        type: "p",
        parts: [
          "Check out ",
          { text: "solidgate.com", href: "https://solidgate.com/" },
          " 💚 and get to know what we build. You don't need domain knowledge going in — what matters is how you think, communicate, and use AI tools like Claude.",
        ],
      },
    ],
  },
  {
    heading: "1. Intro (5 min)",
    blocks: [
      {
        type: "p",
        text:
          "Quick introductions, then a chance to ask any questions upfront — about the role, the team, or how we work.",
      },
    ],
  },
  {
    heading: "2. Warm-Up — Explore the Environment (5 min)",
    blocks: [
      {
        type: "p",
        text:
          "A browser-based VS Code environment, pre-configured with Node.js, TypeScript, and Claude Code CLI. Read the spec, run the tests, ask clarifying questions.",
      },
    ],
  },
  {
    heading: "3. Task 1 — Small Feature (15 min)",
    blocks: [
      {
        type: "p",
        text:
          "A small, well-scoped feature on a pre-built TypeScript/Node.js app. Get oriented, make a focused change, verify it works in the running app — not just that the code looks right.",
      },
    ],
  },
  {
    heading: "4. Task 2 — Feature Implementation (20 min)",
    blocks: [
      {
        type: "p",
        text:
          "A bigger feature from a spec that's intentionally concise. Treat it like a real ticket — ask clarifying questions, read the code you're building on, consider edge cases, verify your work.",
      },
    ],
  },
  {
    heading: "5. Wrap-Up & Next Steps (5 min)",
    blocks: [
      {
        type: "p",
        text:
          "A short debrief and what's next. Time to ask us anything — about the role, the team, or the engineering culture at Solidgate.",
      },
    ],
  },
  {
    heading: "What we're looking for",
    blocks: [
      {
        type: "p",
        text:
          "Not whether you finish everything — how you approach problems and collaborate with AI:",
      },
      {
        type: "ul",
        // { strong, text } items render the lead phrase in bold
        items: [
          {
            strong: "Requirements Discovery",
            text: " — explore before touching code; ask about what's left open rather than assuming",
          },
          {
            strong: "AI Direction",
            text: " — give Claude specific, bounded tasks; skip it when reading the code yourself is faster",
          },
          {
            strong: "Verification & Debugging",
            text: " — read AI-generated code before applying it; dig for root cause, don't just patch symptoms",
          },
          {
            strong: "Judgment & Trade-offs",
            text: " — make reasonable calls on scope and design, and say why",
          },
          {
            strong: "Communication",
            text: " — think out loud, treat the interviewer as a pairing partner",
          },
        ],
      },
    ],
  },
];

export const HIRING_STEPS = [
  {
    number: 1,
    title: "Recruiter Screening",
    duration: "30–45 min",
    tag: null,
    accent: "default",
    body: [
      "First alignment.",
      "Talent team learns your story, expectations, goals, motivation + comp range.",
      "You get signal on role, team, product and direction.",
    ],
    plan: null,
  },
  {
    number: 2,
    title: "AI Fluency Screening",
    duration: "~60 min",
    tag: "Frontend / Full-Stack Only",
    accent: "amber",
    body: [
      "A browser-based VS Code session with Claude Code available throughout. You'll explore a small TypeScript/Node.js codebase, add a focused feature, then implement a bigger one from a deliberately concise spec. Before the technical interview, Front-End and Full-Stack Engineer candidates go through this additional step.",
      "We're not grading whether you finish — we're watching how you direct AI, verify its output, and reason about trade-offs.",
    ],
    plan: { label: "AI Fluency Screening Plan", sections: AI_FLUENCY_PLAN },
  },
  {
    number: 3,
    title: "Technical Interview",
    duration: "~90 min",
    tag: null,
    accent: "default",
    body: [
      "Deep dive into how you engineer, reason and make decisions.",
      "Architecture thinking, trade-offs, problem solving, clarity of thought.",
    ],
    plan: { label: "Tech Interview Plan", sections: TECH_INTERVIEW_PLAN },
  },
  {
    number: 4,
    title: "Soft Skills Interview",
    duration: "~90 min",
    tag: null,
    accent: "default",
    body: [
      "We evaluate leadership behaviors, ownership, communication, feedback culture, and collaboration patterns.",
      "Usually with the Head of Engineering or the Engineering Managers.",
    ],
    plan: null,
  },
  {
    number: 5,
    title: "Bar-Raising Interview",
    duration: "60–90 min",
    tag: null,
    accent: "default",
    body: [
      "Independent calibration. We check if you increase our bar — not just match it.",
      "Focus on long-term potential and cultural contribution. Held by the CEO.",
    ],
    plan: null,
  },
  {
    number: 6,
    title: "Final Alignment Call",
    duration: "15 min",
    tag: null,
    accent: "default",
    body: [
      "We align on offer details, expectations, timeline and final signals from both sides.",
    ],
    plan: null,
  },
  {
    number: 7,
    title: "Offer Signed",
    duration: null,
    tag: null,
    accent: "lime",
    body: [
      "And you join one of the strongest fintech engineering teams in the world.",
    ],
    plan: null,
  },
];
