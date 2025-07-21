import { useState, useEffect } from "react";

// Add CSS animations for consistent expandable components
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

const DEFAULT_RADAR_CONFIG = {
  svg_id: "radar",
  width: 1350,
  height: 900,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd",
  },
  quadrants: [
    { name: "Language & Frameworks" },
    { name: "Platform & Infrastructure" },
    { name: "Data management" },
    { name: "Techniques & Tools" },
  ],
  rings: [
    { name: "ADOPT", color: "#5ba300" },
    { name: "TRIAL", color: "#009eb0" },
    { name: "ASSESS", color: "#c7ba00" },
    { name: "HOLD", color: "#e09b96" },
  ],
  print_layout: true,
  links_in_new_tabs: true,
};

const RADAR_CONFIG = {
  2023: {
    ...DEFAULT_RADAR_CONFIG,
    date: 2023.09,
    title: "Tech radar 2023",
    entries: [
      {
        label: "Go",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Kotlin",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "PHP",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Symfony",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Ktor",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Spring",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Echo v4",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Gorm",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Go PGX",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "React",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "TypeScript",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Javascript",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Hugo",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Astro",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Redux",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Python",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Task.dev",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Shell",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Make",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "VictoriaMetrics",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Grafana",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Airflow",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "K8S",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 2, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "OpenTelemetry",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 2, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Nexus",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Grafana On Call",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Docker",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Nginx",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "AWS Fargate",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "AWS ECS",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Terraform",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Npm",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Yarn",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Sentry(frontend only)",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Vite",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Nx",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "PNPm",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Gitlab",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "GitlabCI",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Jenkins",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Kibana",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Fluent",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Vector",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Loki",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "RabbitMQ",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Amazon MSK(Kafka)",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "AWS Aurora",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "AWS S3",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "DBT",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Redshift",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "PostgreSQL",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Redis",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Memcached",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Elasticsearch",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "OpenSearch",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "C4 model",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "ADR",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Structurizr",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Scrum",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "On call",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Functional testing",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Unit testing",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "BDD",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Conventional commits",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Buf(gRPC)",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Buf(gRPC) registry",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "golangci-lint",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "OpenApi",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 3, // 0,1,2,3 (starting from inside)
        moved: -1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Jira",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Confluence",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Github Copilot",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Blue-green deploy",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 2, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "GitOps",
        quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 1, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
    ],
  },
  2025: {
    ...DEFAULT_RADAR_CONFIG,
    date: 2025.01,
    title: "Tech radar 2025",
    entries: [
      {
        label: "Go",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "Node.js",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Kotlin",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "PHP",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Symfony",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Ktor",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Spring",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "Echo v4",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Gorm",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Go PGX",
        quadrant: 0,
        ring: 0,
        moved: 1,
      },
      {
        label: "React",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "TypeScript",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "Javascript",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Hugo",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Astro",
        quadrant: 0,
        ring: 1,
        moved: 1,
      },
      {
        label: "Redux",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Python",
        quadrant: 0,
        ring: 0,
        moved: 0,
      },
      {
        label: "Task.dev",
        quadrant: 0,
        ring: 0,
        moved: 1,
      },
      {
        label: "Fastify",
        quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Loki",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Gitlab",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
            {
        label: "GitlabCI",
        quadrant: 1, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 0, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "RabbitMQ",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "SQS",
        quadrant: 2, // 0,1,2,3 (counting clockwise, starting from bottom right)
        ring: 0, // 0,1,2,3 (starting from inside)
        moved: 1, // -1 = moved out (triangle pointing down)
        //  0 = not moved (circle)
        //  1 = moved in  (triangle pointing up)
      },
      {
        label: "Shell",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "Make",
        quadrant: 0,
        ring: 3,
        moved: -1,
      },
      {
        label: "VictoriaMetrics",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "Grafana",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "Airflow",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "Docker",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "AWS",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "Terraform",
        quadrant: 1,
        ring: 0,
        moved: 0,
      },
      {
        label: "PostgreSQL",
        quadrant: 2,
        ring: 0,
        moved: 0,
      },
      {
        label: "Redis",
        quadrant: 2,
        ring: 0,
        moved: 0,
      },
      {
        label: "Kafka",
        quadrant: 2,
        ring: 0,
        moved: 0,
      },
      {
        label: "Elasticsearch",
        quadrant: 2,
        ring: 0,
        moved: 0,
      },
      {
        label: "OpenSearch",
        quadrant: 2,
        ring: 0,
        moved: 0,
      },
      
      {
        label: "MongoDB",
        quadrant: 2,
        ring: 3,
        moved: -1,
      },
      {
        label: "MySQL",
        quadrant: 2,
        ring: 3,
        moved: -1,
      },
      {
        label: "Unit testing",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "TBD(trunk based development)",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "Conventional commits",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "Buf(gRPC)",
        quadrant: 3,
        ring: 0,
        moved: 1,
      },
      {
        label: "Buf(gRPC) registry",
        quadrant: 3,
        ring: 0,
        moved: 1,
      },
      {
        label: "golangci-lint",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "OpenApi",
        quadrant: 3,
        ring: 3,
        moved: 0,
      },
      {
        label: "Jira",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "Confluence",
        quadrant: 3,
        ring: 0,
        moved: 0,
      },
      {
        label: "Github Copilot",
        quadrant: 3,
        ring: 0,
        moved: 1,
      },
      {
        label: "Blue-green deploy",
        quadrant: 3,
        ring: 0,
        moved: 1,
      },
      {
        label: "GitOps",
        quadrant: 3,
        ring: 0,
        moved: 1,
      },
    ],
  },
};

function LanguageBlock({ language, logo, requirements, questions }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        border: "2px solid #e5e7eb",
        marginBottom: 12,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#5ba300';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #5ba300 0%, #4a7c59 100%)'
        }}
      />
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
          marginTop: "4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt={`${language} logo`}
            style={{ width: 28, height: 28, marginRight: 16 }}
          />
          <h4
            style={{
              color: "#000000",
              fontSize: "1.2rem",
              margin: 0,
              fontWeight: 700,
            }}
          >
            {language}
          </h4>
        </div>
        <div
          style={{
            fontSize: "1.3rem",
            color: "#5ba300",
            transition: "transform 0.3s ease",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            fontWeight: "bold",
          }}
        >
          ▼
        </div>
      </div>

      {isExpanded && (
        <div
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: "2px solid #f1f5f9",
            animation: "slideDown 0.3s ease-out",
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <h5
              style={{
                color: "#0f172a",
                marginBottom: 12,
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Requirements:
            </h5>
            <ul
              style={{
                color: "#475569",
                lineHeight: "1.6",
                margin: 0,
                paddingLeft: 20,
                fontSize: "0.95rem",
              }}
            >
              {requirements.map((req, index) => (
                <li key={index} style={{ marginBottom: 8 }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              padding: 16,
              background: "rgba(91, 163, 0, 0.04)",
              borderRadius: 8,
              border: "1px solid rgba(91, 163, 0, 0.1)",
            }}
          >
            <h5
              style={{
                color: "#5ba300",
                marginBottom: 12,
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Top Interview Questions:
            </h5>
            <ol
              style={{
                color: "#475569",
                lineHeight: "1.6",
                margin: 0,
                paddingLeft: 20,
                fontSize: "0.95rem",
              }}
            >
              {questions.map((question, index) => (
                <li key={index} style={{ marginBottom: 10 }}>
                  {question}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

function TechRadar({ config }) {
  useEffect(() => {
    window.radar_visualization(config);
  }, [config]);

  return (
    <div
      id="radar-2023-container"
      style={{
        overflowX: "auto",
        maxWidth: "100%",
        paddingBottom: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1350px",
          margin: "0 auto",
        }}
      >
        <svg id="radar" style={{ display: "block", flex: "0 0 auto" }}></svg>
      </div>
    </div>
  );
}

function CompetencyMatrix() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      name: "Engineering culture",
      score: 4,
      description:
        "Understanding of engineering principles, code quality standards, testing practices, and collaborative development workflows. Includes knowledge of agile methodologies, code reviews, and best practices for maintainable software. We work on features, not on fixing bugs.",
    },
    {
      name: "Architecture skills",
      score: 3,
      description:
        "Ability to design scalable system architectures, make technical decisions, and understand trade-offs between different architectural patterns. Includes knowledge of microservices, monoliths, and distributed systems, also knowledge of event-driven architecture.",
    },
    {
      name: "Programming language",
      score: 5,
      description:
        "Proficiency in programming languages, frameworks, and tools relevant to the role. Includes understanding of language-specific features, best practices, and ecosystem knowledge.",
    },
    {
      name: "Databases",
      score: 3,
      description:
        "Knowledge of database design, query optimization, and data modeling. Includes understanding of SQL, SQL optimization, database internals.",
    },
    {
      name: "DevOps",
      score: 3,
      description:
        "Understanding of CI/CD pipelines, infrastructure as code, monitoring, and deployment strategies. Includes knowledge of cloud platforms and containerization.",
    },
    {
      name: "Testing",
      score: 5,
      description:
        "Expertise in testing methodologies including unit testing, integration testing, and automated testing. Includes understanding of test-driven development and quality assurance practices, or using advanced techniques like fuzz testing or mutation testing.",
    },
  ];

  const maxScore = 5;
  const radius = 140;
  const centerX = 300;
  const centerY = 300;
  const numCategories = categories.length;

  // Generate hexagon points
  const generateHexagonPoints = (r) => {
    const points = [];
    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push({ x, y });
    }
    return points;
  };

  // Generate data points based on scores
  const generateDataPoints = () => {
    const points = [];
    for (let i = 0; i < numCategories; i++) {
      const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2;
      const scoreRadius = (categories[i].score / maxScore) * radius;
      const x = centerX + scoreRadius * Math.cos(angle);
      const y = centerY + scoreRadius * Math.sin(angle);
      points.push({ x, y });
    }
    return points;
  };

  const hexagonPoints = generateHexagonPoints(radius);
  const dataPoints = generateDataPoints();

  // Create SVG path for hexagon grid
  const createHexagonPath = (points) => {
    return (
      points
        .map(
          (point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ") + " Z"
    );
  };

  // Create SVG path for data
  const createDataPath = (points) => {
    return (
      points
        .map(
          (point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ") + " Z"
    );
  };

  // Generate grid lines (concentric hexagons)
  const gridLines = [];
  for (let i = 1; i <= maxScore; i++) {
    const gridRadius = (i / maxScore) * radius;
    const gridPoints = generateHexagonPoints(gridRadius);
    gridLines.push(gridPoints);
  }

  // Helper for consistent hover/expand logic
  const handleCategoryHover = (index) => setExpandedCategory(index);
  const handleCategoryLeave = () => setExpandedCategory(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "20px" : "40px",
        alignItems: isMobile ? "center" : "flex-start",
      }}
    >
      {/* Competency Matrix */}
      <div
        style={{
          textAlign: "center",
          background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
          borderRadius: "16px",
          padding: isMobile ? "20px" : "40px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          border: "1px solid #f1f5f9",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h3
          style={{
            margin: isMobile ? "0 0 20px 0" : "0 0 30px 0",
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: "700",
            color: "#0f172a",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          Competency Matrix
        </h3>
        <div
          style={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          <svg
            width="600"
            height="600"
            style={{
              display: "block",
              margin: "0 auto",
              filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.06))",
              minWidth: "600px",
            }}
          >
            <defs>
              <linearGradient
                id="dataGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5ba300" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#4a7c59" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient
                id="gridGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Background circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius + 30}
              fill="url(#gridGradient)"
              opacity="0.4"
            />

            {/* Grid lines */}
            {gridLines.map((points, index) => (
              <path
                key={`grid-${index}`}
                d={createHexagonPath(points)}
                fill="none"
                stroke={index === 0 ? "#cbd5e1" : "#e2e8f0"}
                strokeWidth={index === 0 ? "2" : "1"}
                opacity="0.7"
              />
            ))}

            {/* Category labels */}
            {hexagonPoints.map((point, index) => {
              const angle = (index * 2 * Math.PI) / numCategories - Math.PI / 2;
              const labelRadius = radius + 90;
              const labelX = centerX + labelRadius * Math.cos(angle);
              const labelY = centerY + labelRadius * Math.sin(angle);

              return (
                <g key={`label-${index}`} style={{ cursor: "pointer" }}>
                  <rect
                    x={labelX - 70}
                    y={labelY - 15}
                    width="140"
                    height="30"
                    rx="15"
                    fill="rgba(255, 255, 255, 0.95)"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    style={{ transition: "all 0.15s ease" }}
                    onMouseEnter={() => handleCategoryHover(index)}
                    onMouseLeave={handleCategoryLeave}
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="13"
                    fill="#334155"
                    fontWeight="600"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={() => handleCategoryHover(index)}
                    onMouseLeave={handleCategoryLeave}
                  >
                    {categories[index].name}
                  </text>
                </g>
              );
            })}

            {/* Score labels */}
            {hexagonPoints.map((point, index) => {
              const scoreRadius = (categories[index].score / maxScore) * radius;
              const scoreX =
                centerX +
                scoreRadius *
                  Math.cos((index * 2 * Math.PI) / numCategories - Math.PI / 2);
              const scoreY =
                centerY +
                scoreRadius *
                  Math.sin((index * 2 * Math.PI) / numCategories - Math.PI / 2);

              return (
                <g key={`score-${index}`} style={{ cursor: "pointer" }}>
                  <circle
                    cx={scoreX}
                    cy={scoreY}
                    r="14"
                    fill="white"
                    stroke="#5ba300"
                    strokeWidth="2.5"
                    style={{ transition: "all 0.15s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.r = "16";

                      const categoryDetails = document.getElementById(
                        `category-${index}`
                      );
                      if (categoryDetails) {
                        categoryDetails.style.background =
                          "rgba(91, 163, 0, 0.04)";
                        categoryDetails.style.borderColor = "#5ba300";
                        categoryDetails.style.padding = "16px";

                        const description = document.getElementById(
                          `description-${index}`
                        );
                        if (description) {
                          description.style.maxHeight = "100px";
                          description.style.opacity = "1";
                          description.style.marginTop = "8px";
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.r = "14";

                      const categoryDetails = document.getElementById(
                        `category-${index}`
                      );
                      if (categoryDetails) {
                        categoryDetails.style.background =
                          "rgba(255, 255, 255, 0.9)";
                        categoryDetails.style.borderColor = "#e2e8f0";
                        categoryDetails.style.padding = "12px";

                        const description = document.getElementById(
                          `description-${index}`
                        );
                        if (description) {
                          description.style.maxHeight = "0";
                          description.style.opacity = "0";
                          description.style.marginTop = "0";
                        }
                      }
                    }}
                  />
                  <text
                    x={scoreX}
                    y={scoreY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="15"
                    fill="#5ba300"
                    fontWeight="700"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {categories[index].score}
                  </text>
                </g>
              );
            })}

            {/* Data area fill */}
            <path
              d={createDataPath(dataPoints)}
              fill="url(#dataGradient)"
              stroke="#5ba300"
              strokeWidth="2.5"
              opacity="0.9"
            />

            {/* Data points */}
            {dataPoints.map((point, index) => (
              <g key={`point-${index}`} style={{ cursor: "pointer" }}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="7"
                  fill="#5ba300"
                  stroke="white"
                  strokeWidth="2.5"
                  style={{ transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => {
                    e.target.style.r = "9";

                    const categoryDetails = document.getElementById(
                      `category-${index}`
                    );
                    if (categoryDetails) {
                      categoryDetails.style.background =
                        "rgba(91, 163, 0, 0.04)";
                      categoryDetails.style.borderColor = "#5ba300";
                      categoryDetails.style.padding = "16px";

                      const description = document.getElementById(
                        `description-${index}`
                      );
                      if (description) {
                        description.style.maxHeight = "100px";
                        description.style.opacity = "1";
                        description.style.marginTop = "8px";
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.r = "7";

                    const categoryDetails = document.getElementById(
                      `category-${index}`
                    );
                    if (categoryDetails) {
                      categoryDetails.style.background =
                        "rgba(255, 255, 255, 0.9)";
                      categoryDetails.style.borderColor = "#e2e8f0";
                      categoryDetails.style.padding = "12px";

                      const description = document.getElementById(
                        `description-${index}`
                      );
                      if (description) {
                        description.style.maxHeight = "0";
                        description.style.opacity = "0";
                        description.style.marginTop = "0";
                      }
                    }
                  }}
                />
              </g>
            ))}

            {/* Center point */}
            <circle
              cx={centerX}
              cy={centerY}
              r="5"
              fill="#5ba300"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Categories Details Panel */}
      <div
        style={{
          width: isMobile ? "100%" : "380px",
          maxWidth: isMobile ? "600px" : "380px",
          background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
          borderRadius: "16px",
          padding: isMobile ? "20px" : "30px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          border: "1px solid #f1f5f9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            margin: isMobile ? "0 0 20px 0" : "0 0 25px 0",
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "700",
            color: "#0f172a",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          Category Details
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "12px" : "14px",
          }}
        >
          {categories.map((category, index) => {
            const isExpanded = expandedCategory === index;
            return (
              <div
                key={`category-${index}`}
                id={`category-${index}`}
                                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    border: isExpanded ? "2px solid #5ba300" : "2px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: isMobile ? "20px" : "20px",
                    transition: "all 0.5s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "visible",
                    boxShadow: "none",
                    transform: isExpanded ? "scale(1.02)" : "scale(1)",
                  }}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={handleCategoryLeave}
              >
                {/* Background accent for each expandable */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #5ba300 0%, #4a7c59 100%)",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "4px",
                  }}
                >
                  <h4
                    style={{
                      margin: "0",
                      fontSize: isMobile ? "16px" : "18px",
                      fontWeight: "700",
                      color: "#000000",
                    }}
                  >
                    {category.name}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? "20px" : "22px",
                        fontWeight: "700",
                        color: "#5ba300",
                      }}
                    >
                      {category.score}
                    </span>
                    <span
                      style={{
                        fontSize: isMobile ? "13px" : "14px",
                        color: "#64748b",
                        fontWeight: "500",
                      }}
                    >
                      /5
                    </span>
                  </div>
                </div>
                <div
                  id={`description-${index}`}
                  style={{
                    maxHeight: isExpanded ? '1000px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? '12px' : '0',
                    transition: 'all 0.5s ease',
                    overflow: 'hidden',
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: isMobile ? "13px" : "14px",
                      lineHeight: "1.6",
                      color: "#475569",
                    }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            marginTop: "25px",
            padding: "16px",
            background: "rgba(91, 163, 0, 0.04)",
            borderRadius: "12px",
            border: "1px solid rgba(91, 163, 0, 0.1)",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              color: "#5ba300",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Hover over hexagon elements or category cards to expand details
          </p>
        </div>
      </div>
    </div>
  );
}

function EngineeringLevelsTree() {
    const [expandedLevels, setExpandedLevels] = useState({});

    const levels = [
        {
            name: "Junior Engineer 🤓",
            description: "Entry-level engineer with basic programming skills and learning mindset",
            characteristics: [
                "Basic understanding of core technologies",
                "Needs guidance for complex problems",
                "Works on small, well-defined tasks",
                "Learns to collaborate with team members",
                "Receives mentorship",
                "Communicates effectively with the team",
                "Follows guidance on decisions",
                "Actively learning and developing skills",
                "No leadership responsibilities"
            ]
        },
        {
            name: "Middle Engineer 💪",
            description: "Experienced engineer who can work independently on most tasks",
            characteristics: [
                "Proficient in core technologies",
                "Can solve most problems independently",
                "Works on larger, more complex tasks",
                "Collaborates effectively within a team",
                "Provides mentorship to more junior engineers",
                "Communicates effectively with stakeholders",
                "Makes informed decisions with some autonomy",
                "Continuously improving and expanding skills",
                "May lead small projects or teams"
            ]
        },
        {
            name: "Senior Engineer ⭐",
            description: "Expert engineer who can handle complex technical challenges",
            characteristics: [
                "Expert in core technologies and tools (only proficient answers)",
                "Solves complex problems using appropriate solutions",
                "Handles full project lifecycle from start to finish",
                "Actively mentors others and leads by example",
                "Communicates effectively at all levels, including leadership",
                "Drives key technical decisions and provides strategic direction",
                "Constantly seeks out new knowledge and mentors others",
                "Leads teams, projects, or departments; influences company direction"
            ]
        },
        {
            name: "Staff Engineer 🏆",
            description: "Senior technical leader with broad organizational impact and deep technical expertise",
            characteristics: [
                "Expert in core technologies with deep architectural knowledge",
                "Solves complex cross-team and cross-system problems independently",
                "Shapes technical strategy and architecture across multiple teams",
                "Handles full project lifecycle for complex, multi-team initiatives",
                "Leads collaboration across departments and external stakeholders",
                "Actively mentors senior engineers and technical leaders",
                "Communicates effectively with C-level executives and board members",
                "Drives strategic technical decisions that impact company direction",
                "Constantly seeks out new knowledge and sets technical standards",
                "Leads multiple teams or departments; shapes company technical vision"
            ]
        },
        {
            name: "Tech Lead 🎯",
            description: "Technical leader with both technical excellence and team management responsibilities",
            characteristics: [
                "Expert in core technologies with strong architectural skills",
                "Solves complex problems using innovative and appropriate solutions",
                "Handles full project lifecycle with team coordination",
                "Leads collaboration within team and across stakeholders",
                "Actively mentors engineers and grows team capabilities",
                "Communicates effectively with all levels including leadership",
                "Drives key technical decisions and provides strategic direction",
                "Balances technical excellence with business needs and deadlines",
                "Manages team processes, technical delivery, and quality standards",
                "Leads team projects and influences team technical direction"
            ]
        }
    ];

    const toggleLevel = (index) => {
        setExpandedLevels(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #5ba300 0%, #4a7c59 100%)'
            }} />
            
            <h3 style={{
                margin: '0 0 30px 0',
                fontSize: '28px',
                fontWeight: '700',
                color: '#0f172a',
                textAlign: 'center',
                letterSpacing: '-0.02em'
            }}>
                Engineering Career Levels
            </h3>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative'
            }}>

                {levels.map((level, index) => {
                    // Create gradient border colors from light green to dark green
                    const borderColors = [
                        '#5ba300', // Junior - lightest green
                        '#4a7c59', // Mid-Level
                        '#3d6b4a', // Senior
                        '#2f5a3b', // Staff
                        '#21492c'  // Tech Lead - darkest green
                    ];
                    
                    const borderColor = borderColors[index];
                    
                    return (
                        <div
                            key={index}
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.95)',
                                border: '2px solid #e2e8f0',
                                borderRadius: '12px',
                                boxShadow: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                            onClick={() => toggleLevel(index)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#5ba300';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e2e8f0';
                            }}
                        >
                            {/* Background accent for each level */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, #5ba300 0%, #4a7c59 100%)'
                            }} />
                            
                            <div style={{
                                padding: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '4px'
                            }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{
                                        margin: '0 0 8px 0',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: '#000000'
                                    }}>
                                        {level.name}
                                    </h4>
                                    <p style={{
                                        margin: '0',
                                        fontSize: '14px',
                                        color: '#475569',
                                        lineHeight: '1.6'
                                    }}>
                                        {level.description}
                                    </p>
                                </div>
                                <div style={{
                                    fontSize: '1.3rem',
                                    color: '#5ba300',
                                    transition: 'transform 0.3s ease',
                                    transform: expandedLevels[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                    marginLeft: '16px',
                                    fontWeight: 'bold'
                                }}>
                                    ▼
                                </div>
                            </div>

                        {expandedLevels[index] && (
                            <div style={{
                                padding: '0 20px 20px 20px',
                                borderTop: '2px solid #f1f5f9',
                                marginTop: '8px',
                                animation: 'slideDown 0.3s ease-out'
                            }}>
                                <ul style={{
                                    margin: '0',
                                    paddingLeft: '20px',
                                    fontSize: '13px',
                                    color: '#64748b',
                                    lineHeight: '1.6'
                                }}>
                                    {level.characteristics.map((char, charIndex) => (
                                        <li key={charIndex} style={{ marginBottom: '8px' }}>{char}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )})}
            </div>
        </div>
    );
}

function InterviewGuide() {

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: window.innerWidth < 768 ? "0" : "10px",
      }}
    >
      <h1
        className="section-title"
        style={{ textAlign: "center", marginBottom: 30, fontSize: "1.8rem" }}
      >
        Interview Guide (Backend)
      </h1>

      {/* About Solidgate Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          About Solidgate
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#444",
            marginBottom: "15px",
          }}
        >
          Solidgate is a payment processing and orchestration platform helping
          thousands of businesses to accept payments online. We enable
          businesses to accept payments globally through a unified API,
          supporting multiple payment methods, currencies, and compliance
          requirements. Our client base encompasses various industries and
          countries, working with both local merchants and multinational
          corporations. They do business while we do payments for their
          businesses.
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#444",
            marginBottom: "15px",
          }}
        >
          At Solidgate, we work with <strong>engineers</strong>, not just
          developers. Solidgate engineers don't maintain systems — they design
          them. We build the architecture behind seamless global payments,
          trusted by 150+ digital leaders. They take a holistic approach to
          problem-solving, designing systems with scalability, security, and
          business impact in mind. They understand the entire system lifecycle
          and make architectural decisions that drive business value.
        </p>

        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
          We embrace DevOps principles with continuous integration/deployment,
          infrastructure as code (Terraform, AWS Fargate), comprehensive
          monitoring (Grafana, VictoriaMetrics, Loki), and site reliability
          engineering. Our technology stack includes Go, Kotlin, Python, React,
          TypeScript, PostgreSQL, Redis, and AWS cloud infrastructure.
        </p>
      </section>

      {/* Tech Interview Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Tech Interview Plan
        </h2>
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            Preparation
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            Start by checking out our website — <a href="https://solidgate.com/">Solidgate.com 💚</a> - and get to know our product inside out. Want to dig deeper? Our API docs have all the details you need.
            Below, you'll find a clear breakdown of the skills we look for across engineering roles.
          </p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            1. 👋 Intro (5 min)
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            We'll kick things off with quick intros — who you are, who we are,
            and what we're here to do. Before we dive in, you'll have a chance
            to ask any questions upfront — about the role, the team, how we
            work, or anything that helps you feel confident moving forward.
          </p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            2. 📂 Deep Dive into Experience (20 min)
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            We want to understand how you work, not just where you've worked.
          </p>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            We'll ask about:
          </p>
          <ul style={{ color: "#444", fontSize: "0.95rem" }}>
            <li>Key projects you've shipped</li>
            <li>Technical decisions you've made (and why)</li>
            <li>Real impact you've had on teams and products</li>
          </ul>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            Be ready to go beyond your CV. We're interested in ownership and
            real impact you've had on teams and products.
          </p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            3. 🧠 Technical Questions (60 min)
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            Now we go into your engineering skills. Expect questions covering the
            topics outlined in the competence matrix section.
          </p>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            This could be hands-on or conceptual. We're not just looking for the
            right answer — we care about how you approach problems.
          </p>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          margin: '20px 0',
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#000000'
        }}>
          OR
        </div>
        
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            3. 🏗️ Architecture Task (60 min)
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            If relevant for the role, we'll throw in a system design challenge.
          </p>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            You might be asked to sketch out how you'd build something like:
          </p>
          <ul style={{ color: "#444", fontSize: "0.95rem", marginLeft: "20px" }}>
            <li>A high-load payments service</li>
            <li>A secure API for transaction processing</li>
            <li>An internal tool for risk monitoring</li>
          </ul>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            We want to see how you balance scalability, reliability, and speed —
            and how you justify your tech choices.
          </p>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
            4. ✅ Wrap-Up & Next Steps (5 min)
          </h3>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            We'll close with a short debrief and outline what's next.
          </p>
          <p style={{ color: "#444", fontSize: "0.95rem" }}>
            You'll also have time to ask us anything — about the role, the team,
            the culture, or how we build at Solidgate.
          </p>
        </div>
      </section>

      {/* Competency Matrix Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Expected Competency Matrix
        </h2>
        <p style={{ color: "#444", marginBottom: 20, fontSize: "0.95rem" }}>
          This matrix represents the expected competency levels for our
          engineering roles. Each category is scored from 0 to 5, where 5
          represents maximum competency.
        </p>
        <CompetencyMatrix />
      </section>

      {/* Engineering Levels Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Engineering Career Levels
        </h2>
        <p style={{ color: "#444", marginBottom: 20, fontSize: "0.95rem" }}>
          Understanding our engineering career progression helps align
          expectations and growth opportunities. Each level represents different
          responsibilities, technical depth, and organizational impact.
        </p>
        <EngineeringLevelsTree />
      </section>

      {/* Language-Specific Requirements Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Language-Specific Requirements
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <LanguageBlock
            language="Go"
            logo="/covers/go-logo.svg"
            requirements={[
              "Strong understanding of Go concurrency patterns (goroutines, channels)",
              "Experience with Go modules and dependency management",
              "Knowledge of Go testing frameworks and best practices",
              "Understanding of Go performance optimization",
            ]}
            questions={[
              "What is Go and why was it created? Explain its design philosophy and how it addresses common programming challenges.",
              "What is a slice in Go? How does it differ from arrays, and what are the implications for memory management?",
              "Explain Go's concurrency model. How do goroutines and channels work together, and what are the best practices for avoiding race conditions?",
            ]}
          />
          <LanguageBlock
            language="Kotlin"
            logo="/covers/kotlin-logo.svg"
            requirements={[
              "Proficiency in Kotlin syntax and language features",
              "Experience with Spring Boot and Kotlin integration",
              "Understanding of Kotlin coroutines and async programming",
              "Knowledge of Kotlin testing frameworks ",
            ]}
            questions={[
              "What is the significance of data classes in Kotlin? How do they improve code quality and reduce boilerplate compared to Java?",
              "How does Kotlin ensure type safety? Explain the null safety system and how it prevents common runtime errors.",
              "What are the advantages of using Kotlin over Java? Discuss interoperability, syntax improvements, and modern language features.",
            ]}
          />
          <LanguageBlock
            language="Node.js"
            logo="/covers/nodejs-logo.svg"
            requirements={[
              "Strong JavaScript/TypeScript fundamentals",
              "Experience with Fastify framework",
              "Understanding of Node.js event loop and async patterns",
              "Knowledge of npm/pnpm package management",
            ]}
            questions={[
              "What tasks is Node.js good for? Which projects would you NOT use it for? Explain the trade-offs and use cases.",
              "Explain in detail how the Event Loop works in Node.js. How can you use it effectively and what are common pitfalls?",
              "How can you handle a large task consisting of small subtasks without blocking the event loop? Discuss strategies and best practices.",
            ]}
          />
          <LanguageBlock
            language="Python"
            logo="/covers/python-logo.svg"
            requirements={[
              "Strong Python fundamentals and best practices",
              "Experience with simple web frameworks (Flask, FastAPI)",
              "Understanding of Python async programming (asyncio)",
              "Knowledge of Python testing (pytest, unittest)",
            ]}
            questions={[
              "How do you implement graceful shutdown in Python? Discuss signal handling, cleanup procedures, and best practices for production systems.",
              "Explain the Global Interpreter Lock (GIL). Is it bad? What are its implications for multithreading vs multiprocessing?",
              "Concurrency vs Parallelism in Python: what does Python provide? In which cases should you use threading, multiprocessing, or asyncio?",
            ]}
          />
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="card">
        <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
          Our Engineers on Media
        </h2>
        <div
          style={{
            display: "grid",
            gap: 15,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <a
            href="https://dou.ua/forums/topic/54148"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="media-block">
              <h4
                style={{
                  color: "#181A20",
                  marginBottom: 8,
                  fontSize: "0.95rem",
                }}
              >
                Чи варто деплоїтись у п'ятницю
              </h4>
              <p style={{ color: "#5ba300", fontWeight: 500, fontSize: 13 }}>
                Сергій Сафонов, Tech Lead
              </p>
            </div>
          </a>
          <a
            href="https://dou.ua/forums/topic/50318/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="media-block">
              <h4
                style={{
                  color: "#181A20",
                  marginBottom: 8,
                  fontSize: "0.95rem",
                }}
              >
                $10.000 за хвилину даунтайму: архітектура, черги та стрімінг у
                фінтех
              </h4>
              <p style={{ color: "#5ba300", fontWeight: 500, fontSize: 13 }}>
                Макс Багінський, Head of Engineering
              </p>
            </div>
          </a>
          <a
            href="https://dou.ua/forums/topic/53604"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="media-block">
              <h4
                style={{
                  color: "#181A20",
                  marginBottom: 8,
                  fontSize: "0.95rem",
                }}
              >
                Як стати джуном, якого найматимуть
              </h4>
              <p style={{ color: "#5ba300", fontWeight: 500, fontSize: 13 }}>
                Владислав Павленко, Go Engineer
              </p>
            </div>
          </a>
          <a
            href="https://dou.ua/forums/topic/51033/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="media-block">
              <h4
                style={{
                  color: "#181A20",
                  marginBottom: 8,
                  fontSize: "0.95rem",
                }}
              >
                Як ми розпилювали моноліт. Наш досвід переходу до мікросервісів
              </h4>
              <p style={{ color: "#5ba300", fontWeight: 500, fontSize: 13 }}>
                Сергій Сафонов, Tech Lead
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Books Section */}
      <BookList />

      {/* Quote Section */}
      <section
        className="card"
        style={{ background: "#f7f8fa", textAlign: "center" }}
      >
        <blockquote
          style={{
            margin: 0,
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#181A20",
            letterSpacing: "-0.5px",
          }}
        >
          We don't work on tasks we deliver high-quality product for our
          customers, so in Solidgate we highly value DevOps and Lean approaches
        </blockquote>
      </section>
    </div>
  );
}

function BookList() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const books = [
    {
      title: "Software Engineering at Google",
      authors: "Titus Winters, Tom Manshreck & Hyrum Wright",
      description:
        "Comprehensive guide to software engineering practices at Google scale",
      cover: "/covers/software-engineering-at-google.jpg",
    },
    {
      title: "Accelerate: The Science of Lean Software and DevOps",
      authors: "Nicole Forsgren PhD, Jez Humble & Gene Kim",
      description:
        "Research-based insights into high-performing software teams",
      cover: "/covers/accelerate-the-science-of-lean-software-and-devops.jpg",
    },
    {
      title: "Designing Data-Intensive Applications",
      authors: "Martin Kleppmann",
      description: "Essential guide for building scalable data systems",
      cover: "/covers/designing-data-intensive-applications.jpg",
    },
    {
      title: "Software Architecture: The Hard Parts",
      authors: "Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani",
      description: "Practical approaches to complex architectural decisions",
      cover: "/covers/software-architecture-the-hard-parts.jpg",
    },
    {
      title: "Thinking in Systems: A Primer",
      authors: "Donella H. Meadows",
      description: "Understanding complex systems and their behavior",
      cover: "/covers/thinking-in-systems-a-primer.jpg",
    },
    {
      title:
        "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
      authors: "Robert Martin",
      description: "Principles for creating maintainable software architecture",
      cover:
        "/covers/clean-architecture-a-craftsman-guide-to-software-structure-and-design.jpg",
    },
    {
      title: "The Phoenix Project",
      authors: "Gene Kim, Kevin Behr & George Spafford",
      description: "Novel about DevOps transformation and IT management",
      cover: "/covers/the-phoenix-project.jpg",
    },
    {
      title: "SRE by Google",
      authors: "Google",
      description: "Site Reliability Engineering practices and principles",
      cover: "/covers/sre-by-google.jpg",
    },
  ];

  return (
    <section className="card">
      <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
        Books We Love and Recommend 💚
      </h2>
      
      {/* Book Grid */}
      <div
        style={{
          display: "grid",
          gap: 15,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              background: "#f7f8fa",
              borderRadius: 12,
              padding: 20,
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "#e8f5e8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#f7f8fa";
            }}
          >
            {/* Book Cover */}
            <div
              style={{
                width: "60px",
                height: "80px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            >
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            
            {/* Book Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4
                style={{
                  color: "#181A20",
                  marginBottom: 8,
                  fontSize: "0.95rem",
                  lineHeight: "1.3",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {book.title}
              </h4>
              
              <p style={{ 
                color: "#5ba300", 
                fontWeight: 500, 
                fontSize: 13,
                fontStyle: "italic",
                marginBottom: 4,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
                by {book.authors}
              </p>
              
              <p style={{ 
                color: "#64748b", 
                fontSize: 12,
                lineHeight: "1.4",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}>
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechRadarTabs() {
  const [selected, setSelected] = useState("2025");
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: window.innerWidth < 768 ? "16px" : "24px",
          marginBottom: window.innerWidth < 768 ? "20px" : "32px",
        }}
      >
        <button
          onClick={() => setSelected("2023")}
          style={{
            padding: "10px 20px",
            background: selected === "2023" ? "#5ba300" : "#eee",
            color: selected === "2023" ? "#fff" : "#333",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
            minWidth: 80,
          }}
        >
          2023
        </button>
        <button
          onClick={() => setSelected("2025")}
          style={{
            padding: "10px 20px",
            background: selected === "2025" ? "#5ba300" : "#eee",
            color: selected === "2025" ? "#fff" : "#333",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
            minWidth: 80,
          }}
        >
          2025
        </button>
      </div>
      <TechRadar key={selected} config={RADAR_CONFIG[selected]} />
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        gap: "8px",
      }}
    >
      <div style={{ fontWeight: 500 }}>
        Made by backend developer for developers! With love 💚!
      </div>
      <div>
        <a
          href="https://jobs.dou.ua/companies/solidgate/vacancies/"
          style={{ color: "#5ba300", textDecoration: "none", fontWeight: 500 }}
        >
          Solidgate is hiring!
        </a>
      </div>
    </div>
  );
}

export function App() {
  const [hash, setHash] = useState(window.location.hash || "#home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#home");
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          overflowX: "hidden",
          maxWidth: "100vw",
        }}
      >
        {/* Navigation Bar */}
        <div
          style={{
            borderBottom: "1px solid #e5e7eb",
            position: "sticky",
            top: 0,
            zIndex: 100,
            marginBottom: 32,
          }}
        >
          <nav
            style={{
              width: "100%",
              background: "#fff",
              padding: isMobile ? "8px 16px" : "12px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "1280px",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            <img
              src="logo_m.png"
              alt="solidgate logo"
              style={{
                maxWidth: isMobile ? 80 : 120,
                width: "auto",
                height: "auto",
              }}
            />
            
            {isMobile ? (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    padding: "4px",
                    color: "#181A20",
                  }}
                >
                  ☰
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="#home"
                  style={{
                    color: hash === "#home" ? "#5ba300" : "#181A20",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                    padding: "8px 16px",
                    borderRadius: 6,
                    background: hash === "#home" ? "#f7f8fa" : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  Tech Radar
                </a>
                <a
                  href="#interview"
                  style={{
                    color: hash === "#interview" ? "#5ba300" : "#181A20",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                    padding: "8px 16px",
                    borderRadius: 6,
                    background: hash === "#interview" ? "#f7f8fa" : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  Interview Guide (Backend)
                </a>
              </div>
            )}
          </nav>
          
          {/* Mobile Menu */}
          {isMobile && mobileMenuOpen && (
            <div
              style={{
                background: "#fff",
                borderTop: "1px solid #e5e7eb",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: hash === "#home" ? "#5ba300" : "#181A20",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                  padding: "12px 16px",
                  borderRadius: 6,
                  background: hash === "#home" ? "#f7f8fa" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                Tech Radar
              </a>
              <a
                href="#interview"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: hash === "#interview" ? "#5ba300" : "#181A20",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                  padding: "12px 16px",
                  borderRadius: 6,
                  background: hash === "#interview" ? "#f7f8fa" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                Interview Guide (Backend)
              </a>
            </div>
          )}
        </div>

              {/* Page Content */}
      <div style={{ padding: window.innerWidth < 768 ? "16px" : "32px" }}>
        {hash === "#interview" ? (
          <InterviewGuide />
        ) : (
          <>
            {/* TechRadar Section ONLY */}
            <section className="card" style={{ maxWidth: "" }}>
              <div
                style={{
                  padding: window.innerWidth < 768 ? "0 16px" : "0 40px",
                }}
              >
                <div id="radar-description" style={{ marginBottom: 20 }}>
                  <p>
                    <div
                      id="hold"
                      style={{
                        display: "inline-block",
                        background: "#e09b96",
                        color: "#fff",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 600,
                        marginRight: 8,
                      }}
                    >
                      Hold
                    </div>{" "}
                    — in this category, we have expertise, but the mentioned
                    tools are used only to support existing systems — new
                    projects are not launched on them.
                  </p>
                  <p>
                    <div
                      id="assess"
                      style={{
                        display: "inline-block",
                        background: "#c7ba00",
                        color: "#fff",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 600,
                        marginRight: 8,
                      }}
                    >
                      Assess
                    </div>{" "}
                    — trial technologies and tools that are currently being
                    evaluated. They are only used for test projects and are not
                    used for real tasks.
                  </p>
                  <p>
                    <div
                      id="trial"
                      style={{
                        display: "inline-block",
                        background: "#009eb0",
                        color: "#fff",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 600,
                        marginRight: 8,
                      }}
                    >
                      Trial
                    </div>{" "}
                    — technologies and tools that have already passed the
                    testing phase and are preparing to work in production (or
                    are even already working there).
                  </p>
                  <p>
                    <div
                      id="adopt"
                      style={{
                        display: "inline-block",
                        background: "#5ba300",
                        color: "#fff",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 600,
                        marginRight: 8,
                      }}
                    >
                      Adopt
                    </div>{" "}
                    — technologies and tools that are implemented and actively
                    used by teams. Technologies in which Solidgate has
                    expertise.
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "0 auto",
                  boxSizing: "border-box",
                  padding: window.innerWidth < 768 ? "16px 8px" : "32px 24px",
                }}
              >
                <TechRadarTabs />
              </div>
            </section>
          </>
        )}
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
    </div>
  );
}
