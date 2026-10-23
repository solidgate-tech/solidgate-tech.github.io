const getLastUpdated = (lastUpdateDate) => {
  const lastUpdate = new Date(lastUpdateDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  lastUpdate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - lastUpdate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Last updated today";
  if (diffDays === 1) return "Last updated 1 day ago";
  if (diffDays < 0) return "Last updated today";
  return `Last updated ${diffDays} days ago`;
};

// Styling for the forked Zalando radar in public/vendor/radar.js (see its header for the options)
const DEFAULT_RADAR_CONFIG = {
  svg_id: "radar",
  width: 1450,
  height: 1100,
  responsive: true,
  font_family: "Onest, Arial, Helvetica, sans-serif",
  colors: {
    background: "transparent",
    grid: "#000000",
    inactive: "#1E220D",
    blip: "#EEFFA9",
    text: "#FFFFFF",
    legend_heading: "#FFFFFF",
    quadrant_name: "#8C8C8C",
    ring_label: "rgba(255, 255, 255, 0.5)",
    highlight: "#C1DC55",
    bubble: "#C1DC55",
    bubble_text: "#000000",
  },
  outer_band: { radius: 540, color: "#0C0D05" },
  ring_fills: ["#B6CF50", "#889B3C", "#4F5A23", "#1E220D"],
  ring_labels: "axis",
  legend_layout: "corners",
  blip_numbers: false,
  quadrants: [
    { name: "Languages & Frameworks" },
    { name: "Platform & Infrastructure" },
    { name: "Data Management" },
    { name: "Techniques, Tools & AI" },
  ],
  rings: [
    { name: "Adopt", color: "#B6CF50" },
    { name: "Trial", color: "#889B3C" },
    { name: "Assess", color: "#4F5A23" },
    { name: "Hold", color: "#1E220D" },
  ],
  print_layout: true,
  links_in_new_tabs: true,
};

export const RADAR_CONFIG = {
  2023: {
    ...DEFAULT_RADAR_CONFIG,
    date: "Last updated 09.2023",
    title: "Tech Radar 2023",
    entries: [
      // Languages & Frameworks
      { label: "Go", quadrant: 0, ring: 0, moved: 0 },
      { label: "Kotlin", quadrant: 0, ring: 0, moved: 0 },
      { label: "PHP", quadrant: 0, ring: 3, moved: -1 },
      { label: "Symfony", quadrant: 0, ring: 3, moved: -1 },
      { label: "Ktor", quadrant: 0, ring: 3, moved: -1 },
      { label: "Spring", quadrant: 0, ring: 0, moved: 0 },
      { label: "Echo v4", quadrant: 0, ring: 3, moved: -1 },
      { label: "GORM", quadrant: 0, ring: 3, moved: -1 },
      { label: "Go PGX", quadrant: 0, ring: 0, moved: 1 },
      { label: "React", quadrant: 0, ring: 0, moved: 0 },
      { label: "TypeScript", quadrant: 0, ring: 0, moved: 0 },
      { label: "JavaScript", quadrant: 0, ring: 3, moved: -1 },
      { label: "Hugo", quadrant: 0, ring: 3, moved: -1 },
      { label: "Astro", quadrant: 0, ring: 1, moved: 1 },
      { label: "Redux", quadrant: 0, ring: 3, moved: -1 },
      { label: "Python", quadrant: 0, ring: 0, moved: 0 },
      { label: "Task", quadrant: 0, ring: 0, moved: 1 },
      { label: "Shell", quadrant: 0, ring: 3, moved: -1 },
      { label: "Make", quadrant: 0, ring: 3, moved: -1 },
      // Platform & Infrastructure
      { label: "VictoriaMetrics", quadrant: 1, ring: 0, moved: 0 },
      { label: "Grafana", quadrant: 1, ring: 0, moved: 0 },
      { label: "Apache Airflow", quadrant: 1, ring: 0, moved: 0 },
      { label: "K8S", quadrant: 1, ring: 2, moved: 0 },
      { label: "OpenTelemetry", quadrant: 1, ring: 2, moved: 0 },
      { label: "Nexus", quadrant: 1, ring: 0, moved: 0 },
      { label: "Grafana OnCall", quadrant: 1, ring: 1, moved: 0 },
      { label: "Docker", quadrant: 1, ring: 0, moved: 0 },
      { label: "Nginx", quadrant: 1, ring: 0, moved: 0 },
      { label: "AWS Fargate", quadrant: 1, ring: 0, moved: 0 },
      { label: "AWS ECS", quadrant: 1, ring: 0, moved: 0 },
      { label: "Terraform", quadrant: 1, ring: 0, moved: 1 },
      { label: "npm", quadrant: 1, ring: 3, moved: -1 },
      { label: "yarn", quadrant: 1, ring: 3, moved: -1 },
      { label: "Sentry (frontend only)", quadrant: 1, ring: 0, moved: 0 },
      { label: "Vite", quadrant: 1, ring: 0, moved: 0 },
      { label: "Nx", quadrant: 1, ring: 0, moved: 0 },
      { label: "pnpm", quadrant: 1, ring: 1, moved: 1 },
      { label: "GitLab", quadrant: 1, ring: 0, moved: 0 },
      { label: "GitLab CI/CD", quadrant: 1, ring: 0, moved: 0 },
      { label: "Jenkins", quadrant: 1, ring: 3, moved: -1 },
      { label: "Kibana", quadrant: 1, ring: 3, moved: -1 },
      // Data Management
      { label: "Fluent", quadrant: 2, ring: 3, moved: -1 },
      { label: "Vector", quadrant: 2, ring: 1, moved: 1 },
      { label: "Loki", quadrant: 2, ring: 1, moved: 1 },
      { label: "RabbitMQ", quadrant: 2, ring: 0, moved: 0 },
      { label: "Amazon MSK (Kafka)", quadrant: 2, ring: 1, moved: 1 },
      { label: "AWS Aurora", quadrant: 2, ring: 0, moved: 0 },
      { label: "AWS S3", quadrant: 2, ring: 0, moved: 0 },
      { label: "DBT", quadrant: 2, ring: 0, moved: 0 },
      { label: "Redshift", quadrant: 2, ring: 0, moved: 0 },
      { label: "PostgreSQL", quadrant: 2, ring: 0, moved: 0 },
      { label: "Redis", quadrant: 2, ring: 0, moved: 0 },
      { label: "Memcached", quadrant: 2, ring: 3, moved: -1 },
      { label: "ElasticSearch", quadrant: 2, ring: 3, moved: -1 },
      { label: "OpenSearch", quadrant: 2, ring: 3, moved: -1 },
      // Techniques, Tools & AI
      { label: "ADR", quadrant: 3, ring: 1, moved: 1 },
      { label: "Structurizr", quadrant: 3, ring: 0, moved: 0 },
      { label: "Scrum", quadrant: 3, ring: 0, moved: 0 },
      { label: "Grafana OnCall", quadrant: 3, ring: 1, moved: 1 },
      { label: "BDD", quadrant: 3, ring: 0, moved: 0 },
      { label: "Buf (gRPC)", quadrant: 3, ring: 0, moved: 1 },
      { label: "Buf (gRPC) Registry", quadrant: 3, ring: 0, moved: 1 },
      { label: "golangci-lint", quadrant: 3, ring: 0, moved: 0 },
      { label: "OpenAPI", quadrant: 3, ring: 3, moved: -1 },
      { label: "Jira", quadrant: 3, ring: 0, moved: 0 },
      { label: "Confluence", quadrant: 3, ring: 0, moved: 0 },
      { label: "GitHub Copilot", quadrant: 3, ring: 0, moved: 1 },
      { label: "Blue-Green Deployment", quadrant: 3, ring: 2, moved: 0 },
      { label: "GitOps", quadrant: 3, ring: 1, moved: 1 },
    ],
  },
  2025: {
    ...DEFAULT_RADAR_CONFIG,
    date: getLastUpdated("2025-12-30"),
    title: "Tech Radar 2025",
    entries: [
      // Languages & Frameworks
      { label: "Go", quadrant: 0, ring: 0, moved: 0 },
      { label: "Kotlin", quadrant: 0, ring: 0, moved: 0 },
      { label: "PHP", quadrant: 0, ring: 3, moved: -1 },
      { label: "Symfony", quadrant: 0, ring: 3, moved: -1 },
      { label: "Ktor", quadrant: 0, ring: 3, moved: -1 },
      { label: "Spring", quadrant: 0, ring: 0, moved: 0 },
      { label: "Echo v4", quadrant: 0, ring: 3, moved: -1 },
      { label: "GORM", quadrant: 0, ring: 3, moved: -1 },
      { label: "Go PGX", quadrant: 0, ring: 0, moved: 1 },
      { label: "React", quadrant: 0, ring: 0, moved: 0 },
      { label: "TypeScript", quadrant: 0, ring: 0, moved: 0 },
      { label: "JavaScript", quadrant: 0, ring: 3, moved: -1 },
      { label: "Hugo", quadrant: 0, ring: 3, moved: -1 },
      { label: "Astro", quadrant: 0, ring: 1, moved: 1 },
      { label: "Redux", quadrant: 0, ring: 3, moved: -1 },
      { label: "Python", quadrant: 0, ring: 0, moved: 1 },
      { label: "Task", quadrant: 0, ring: 0, moved: 1 },
      { label: "Fastify", quadrant: 0, ring: 0, moved: 1 },
      { label: "Shell", quadrant: 0, ring: 3, moved: -1 },
      { label: "Make", quadrant: 0, ring: 3, moved: -1 },
      // Platform & Infrastructure
      { label: "Loki", quadrant: 1, ring: 0, moved: 0 },
      { label: "GitLab", quadrant: 1, ring: 0, moved: 0 },
      { label: "GitLab CI/CD", quadrant: 1, ring: 0, moved: 0 },
      { label: "VictoriaMetrics", quadrant: 1, ring: 0, moved: 0 },
      { label: "Grafana", quadrant: 1, ring: 0, moved: 0 },
      { label: "Apache Airflow", quadrant: 1, ring: 0, moved: 0 },
      { label: "Docker", quadrant: 1, ring: 0, moved: 0 },
      { label: "Kubernetes", quadrant: 1, ring: 2, moved: 0 },
      { label: "AWS", quadrant: 1, ring: 0, moved: 0 },
      { label: "Terraform", quadrant: 1, ring: 0, moved: 0 },
      // Data Management
      { label: "RabbitMQ", quadrant: 2, ring: 0, moved: 1 },
      { label: "SQS", quadrant: 2, ring: 0, moved: 1 },
      { label: "PostgreSQL", quadrant: 2, ring: 0, moved: 0 },
      { label: "Redis", quadrant: 2, ring: 0, moved: 0 },
      { label: "Kafka", quadrant: 2, ring: 0, moved: 0 },
      { label: "ElasticSearch", quadrant: 2, ring: 0, moved: 0 },
      { label: "OpenSearch", quadrant: 2, ring: 0, moved: 0 },
      { label: "MongoDB", quadrant: 2, ring: 3, moved: -1 },
      { label: "MySQL", quadrant: 2, ring: 3, moved: -1 },
      // Techniques, Tools & AI
      { label: "TBD", quadrant: 3, ring: 0, moved: 0 },
      { label: "Buf (gRPC)", quadrant: 3, ring: 0, moved: 1 },
      { label: "Buf (gRPC) Registry", quadrant: 3, ring: 0, moved: 1 },
      { label: "golangci-lint", quadrant: 3, ring: 0, moved: 0 },
      { label: "bufbuild/protovalidate", quadrant: 3, ring: 1, moved: 1 },
      { label: "OpenAPI", quadrant: 3, ring: 3, moved: 0 },
      { label: "Jira", quadrant: 3, ring: 0, moved: 0 },
      { label: "Confluence", quadrant: 3, ring: 0, moved: 0 },
      { label: "Blue-Green Deployment", quadrant: 3, ring: 0, moved: 1 },
      { label: "GitOps", quadrant: 3, ring: 0, moved: 1 },
      { label: "GitHub Copilot", quadrant: 3, ring: 3, moved: -1 },
      { label: "OpenAI", quadrant: 3, ring: 0, moved: 0 },
      { label: "Gemini", quadrant: 3, ring: 0, moved: 0 },
      { label: "Cursor", quadrant: 3, ring: 1, moved: 2 },
      { label: "CodeRabbit", quadrant: 3, ring: 0, moved: 2 },
      { label: "Claude", quadrant: 3, ring: 1, moved: 2 },
    ],
  },
  2026: {
    ...DEFAULT_RADAR_CONFIG,
    date: getLastUpdated("2026-07-10"),
    title: "Tech Radar 2026",
    entries: [
      // Languages & Frameworks
      { label: "Go", quadrant: 0, ring: 0, moved: 0 },
      { label: "Kotlin", quadrant: 0, ring: 0, moved: 0 },
      { label: "PHP", quadrant: 0, ring: 3, moved: -1 },
      { label: "Symfony", quadrant: 0, ring: 3, moved: -1 },
      { label: "Ktor", quadrant: 0, ring: 3, moved: -1 },
      { label: "Spring", quadrant: 0, ring: 0, moved: 0 },
      { label: "Echo v4", quadrant: 0, ring: 3, moved: -1 },
      { label: "GORM", quadrant: 0, ring: 3, moved: -1 },
      { label: "Go PGX", quadrant: 0, ring: 0, moved: 1 },
      { label: "React", quadrant: 0, ring: 0, moved: 0 },
      { label: "TypeScript", quadrant: 0, ring: 0, moved: 0 },
      { label: "JavaScript", quadrant: 0, ring: 3, moved: -1 },
      { label: "Hugo", quadrant: 0, ring: 3, moved: -1 },
      { label: "Astro", quadrant: 0, ring: 1, moved: 1 },
      { label: "Redux", quadrant: 0, ring: 3, moved: -1 },
      { label: "Python", quadrant: 0, ring: 0, moved: 0 },
      { label: "Task", quadrant: 0, ring: 0, moved: 0 },
      { label: "Fastify", quadrant: 0, ring: 0, moved: 0 },
      { label: "Shell", quadrant: 0, ring: 3, moved: -1 },
      { label: "Make", quadrant: 0, ring: 3, moved: -1 },
      // Platform & Infrastructure
      { label: "Loki", quadrant: 1, ring: 3, moved: -1 },
      { label: "GitLab", quadrant: 1, ring: 0, moved: 0 },
      { label: "GitLab CI/CD", quadrant: 1, ring: 0, moved: 0 },
      { label: "VictoriaMetrics", quadrant: 1, ring: 0, moved: 0 },
      { label: "Grafana", quadrant: 1, ring: 0, moved: 0 },
      { label: "Apache Airflow", quadrant: 1, ring: 0, moved: 0 },
      { label: "Docker", quadrant: 1, ring: 0, moved: 0 },
      { label: "Kubernetes", quadrant: 1, ring: 2, moved: 0 },
      { label: "AWS", quadrant: 1, ring: 0, moved: 0 },
      { label: "Terraform", quadrant: 1, ring: 0, moved: 0 },
      // Data Management
      { label: "RabbitMQ", quadrant: 2, ring: 3, moved: -1 },
      { label: "SQS", quadrant: 2, ring: 0, moved: 0 },
      { label: "PostgreSQL", quadrant: 2, ring: 0, moved: 0 },
      { label: "Redis", quadrant: 2, ring: 0, moved: 0 },
      { label: "Kafka", quadrant: 2, ring: 0, moved: 0 },
      { label: "ElasticSearch", quadrant: 2, ring: 3, moved: -1 },
      { label: "OpenSearch", quadrant: 2, ring: 0, moved: 0 },
      { label: "MongoDB", quadrant: 2, ring: 3, moved: -1 },
      { label: "MySQL", quadrant: 2, ring: 3, moved: -1 },
      // Techniques, Tools & AI
      { label: "TBD", quadrant: 3, ring: 0, moved: 0 },
      { label: "Buf (gRPC)", quadrant: 3, ring: 0, moved: 0 },
      { label: "Buf (gRPC) Registry", quadrant: 3, ring: 0, moved: 0 },
      { label: "golangci-lint", quadrant: 3, ring: 0, moved: 0 },
      { label: "bufbuild/protovalidate", quadrant: 3, ring: 1, moved: 0 },
      { label: "OpenAPI", quadrant: 3, ring: 3, moved: 0 },
      { label: "Jira", quadrant: 3, ring: 0, moved: 0 },
      { label: "Confluence", quadrant: 3, ring: 0, moved: 0 },
      { label: "Blue-Green Deployment", quadrant: 3, ring: 0, moved: 0 },
      { label: "GitOps", quadrant: 3, ring: 0, moved: 0 },
      { label: "GitHub Copilot", quadrant: 3, ring: 3, moved: 0 },
      { label: "OpenAI", quadrant: 3, ring: 0, moved: 0 },
      { label: "Gemini", quadrant: 3, ring: 0, moved: 0 },
      { label: "Cursor", quadrant: 3, ring: 0, moved: 1 },
      { label: "CodeRabbit", quadrant: 3, ring: 0, moved: 0 },
      { label: "Claude", quadrant: 3, ring: 0, moved: 1 },
    ],
  },
};

export const RADAR_YEARS = ["2023", "2025", "2026"];
export const LATEST_RADAR_YEAR = "2026";

export const RADAR_MARKERS = ["▲ moved up", "▼ moved down", "★ new", "● no change"];

export const RING_DESCRIPTIONS = [
  {
    ring: "Hold",
    text: "Tools we know well but only use to support existing systems. Not used for new projects.",
  },
  {
    ring: "Assess",
    text: "Technologies under evaluation, used only in test environments, not for real tasks.",
  },
  {
    ring: "Trial",
    text: "Tools that have passed testing and are being prepared (or already used) in production.",
  },
  {
    ring: "Adopt",
    text: "Fully implemented tools actively used by teams. We have solid expertise with these.",
  },
];

// Ring name (e.g. "Adopt") of an entry on the latest radar, by its label
export const latestRingOf = (label) => {
  const config = RADAR_CONFIG[LATEST_RADAR_YEAR];
  const entry = config.entries.find((e) => e.label === label);
  return entry ? config.rings[entry.ring].name : null;
};
