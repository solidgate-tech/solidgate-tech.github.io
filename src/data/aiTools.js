export const AI_SECTION = {
  title: "How We Use AI at Solidgate",
  subtitle:
    "AI tools are woven into our daily engineering workflow — from code completion to automated reviews and intelligent pair programming.",
};

export const AI_TOOLS = [
  {
    name: "CodeRabbit",
    radarLabel: "CodeRabbit",
    description:
      "AI-powered code review integrated into our GitLab workflow. CodeRabbit provides automated PR reviews, catching bugs, style issues, and security concerns before human reviewers get involved.",
    uses: ["Automated PR reviews", "Bug detection", "Code quality checks"],
  },
  {
    name: "OpenAI",
    radarLabel: "OpenAI",
    description:
      "Used team-wide for problem-solving, drafting documentation, and exploring new ideas. Engineers use OpenAI models for debugging complex issues, writing technical specs, and general Q&A.",
    uses: ["Documentation writing", "Problem-solving", "Research"],
  },
  {
    name: "Gemini",
    radarLabel: "Gemini",
    description:
      "Google's AI assistant used as an alternative to OpenAI, particularly useful for tasks requiring up-to-date knowledge and integration with the Google ecosystem.",
    uses: ["Research assistance", "Code generation", "Writing support"],
  },
  {
    name: "Cursor",
    radarLabel: "Cursor",
    description:
      "An AI-first IDE used across our engineering teams. Cursor offers deep codebase context awareness and natural language editing, enabling faster code exploration and modification.",
    uses: [
      "Codebase navigation",
      "Natural language edits",
      "Context-aware completion",
    ],
  },
  {
    name: "Claude",
    radarLabel: "Claude",
    description:
      "Anthropic's Claude is used for complex reasoning tasks, architecture discussions, and detailed technical analysis. Particularly useful for understanding large codebases and reviewing architectural decisions.",
    uses: ["Architecture discussions", "Code review", "Technical analysis"],
  },
];
