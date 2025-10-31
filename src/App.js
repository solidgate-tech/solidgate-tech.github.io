import { useState, useEffect } from "react";
import { Testimonials } from "./components/Testimonials";

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
    { name: "Languages & Frameworks" },
    { name: "Platform & Infrastructure" },
    { name: "Data Management" },
    { name: "Techniques, Tools & AI" },
  ],
  rings: [
    { name: "ADOPT", color: "#06a872" },
    { name: "TRIAL", color: "#A26CE6" },
    { name: "ASSESS", color: "#005FBB" },
    { name: "HOLD", color: "#7A7A7A" },
  ],
  print_layout: true,
  links_in_new_tabs: true,
};

const RADAR_CONFIG = {
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
    date: getLastUpdated('2025-07-28'),
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
      { label: "Github Copilot", quadrant: 3, ring: 0, moved: 1 },
      { label: "Blue-Green Deployment", quadrant: 3, ring: 0, moved: 1 },
      { label: "GitOps", quadrant: 3, ring: 0, moved: 1 },
      { label: "ChatGPT", quadrant: 3, ring: 0, moved: 0 },
      { label: "Gemini", quadrant: 3, ring: 0, moved: 0 },
      { label: "Cursor", quadrant: 3, ring: 1, moved: 2 },
      { label: "CodeRabbit", quadrant: 3, ring: 0, moved: 2 },
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
        e.currentTarget.style.borderColor = '#00816A';
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
          background: '#3B9A83',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
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
          {logo && logo.trim() !== "" && (
            <img
              src={logo}
              alt={`${language} logo`}
              style={{ width: 28, height: 28, marginRight: 16, objectFit: "contain" }}
            />
          )}
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
            fontSize: "1.6rem",
            color: "#00816A",
            transition: "transform 0.3s ease",
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
            fontWeight: "400",
          }}
        >
          ›
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
              background: "rgba(0, 129, 106, 0.04)",
              borderRadius: 8,
              border: "1px solid rgba(0, 129, 106, 0.1)",
            }}
          >
            <h5
              style={{
                color: "#00816A",
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
        <svg id="radar" style={{ display: "block", flex: "0 0 auto", minHeight: "925px" }}></svg>
      </div>
    </div>
  );
}

function CompetencyMatrix() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("backend");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backendCategories = [
    {
      name: "Engineering Culture",
      score: 4,
      description:
        "Understanding of engineering principles, code quality standards, testing practices, and collaborative development workflows. Includes knowledge of agile methodologies, code reviews, and best practices for maintainable software. We work on features, not on fixing bugs.",
    },
    {
      name: "Architecture Skills",
      score: 3,
      description:
        "Ability to design scalable system architectures, make technical decisions, and understand trade-offs between different architectural patterns. Includes knowledge of microservices, monoliths, and distributed systems, also knowledge of event-driven architecture.",
    },
    {
      name: "Programming Language",
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

  const frontendCategories = [
    {
      name: "Engineering Culture",
      score: 4,
      description:
        "Understanding of engineering principles, code quality standards, testing practices, and collaborative development workflows. Includes knowledge of agile methodologies, code reviews, and best practices for maintainable software. We work on features, not on fixing bugs.",
    },
    {
      name: "Architecture Skills",
      score: 3,
      description:
        "Ability to design scalable frontend architectures, make technical decisions, and understand trade-offs between different architectural patterns. Includes knowledge of component architecture, state management, and frontend architectural patterns.",
    },
    {
      name: "Programming Language",
      score: 5,
      description:
        "Proficiency in programming languages, frameworks, and tools relevant to the role. Includes understanding of language-specific features, best practices, and ecosystem knowledge.",
    },
    {
      name: "Core Web Technologies",
      score: 4,
      description:
        "Deep understanding of browser APIs, rendering pipeline, DOM manipulation, and modern web standards. Includes knowledge of HTML, CSS, JavaScript fundamentals, and browser performance optimization.",
    },
    {
      name: "FrontOps",
      score: 3,
      description:
        "Understanding of frontend CI/CD pipelines, build tools, bundling strategies, and deployment practices. Includes knowledge of modern frontend tooling, performance optimization, and frontend infrastructure.",
    },
    {
      name: "Testing",
      score: 4,
      description:
        "Expertise in frontend testing methodologies including unit testing, component testing, integration testing, and E2E testing. Includes understanding of testing frameworks, testing best practices, and quality assurance for frontend applications.",
    },
  ];

  const infrastructureCategories = [
    {
      name: "Engineering Culture",
      score: 4,
      description:
        "Understanding of engineering principles, code quality standards, testing practices, and collaborative development workflows. Includes knowledge of agile methodologies, code reviews, and best practices for maintainable software. We work on features, not on fixing bugs.",
    },
    {
      name: "AWS Cloud",
      score: 4,
      description:
        "Strong knowledge of core AWS Services (networking, compute, storage, databases, monitoring). Experience in building fault-tolerant and scalable systems. Understanding of Well-Architected Framework.",
    },
    {
      name: "Infrastructure as a Code",
      score: 4,
      description:
        "Core knowledge of principles for creating automated, consistent and version-controlled environment provisioning using specialized tools, emphasizing reproducibility, scalability and security.",
    },
    {
      name: "Observability",
      score: 4,
      description:
        "Knowledge of building robust monitoring systems to ensure reliability and performance, focused on proactive issue detection, data-driven insights and continuous improvement.",
    },
    {
      name: "SDLC",
      score: 4,
      description:
        "Understanding of the Software Development Life Cycle (SDLC), from planning and design to deployment and maintenance. Emphasizes structured processes, clear documentation, and continuous improvement. Includes knowledge of agile and iterative models, ensuring features are delivered efficiently, reliably, and with long-term maintainability in mind.",
    },
    {
      name: "Databases",
      score: 4,
      description:
        "Understanding of SQL syntax and principles. Knowledge of how Postgres operates, administration and clustering. Basic understanding of DB schema management. Proficiency in RDS (monitoring, patch management, capacity planning, integration with other AWS tools).",
    },
    {
      name: "Security",
      score: 3,
      description:
        "Understanding of security by design principles, OWASP framework and general best practices for least privilege approach, encryption, vulnerability management and risk mitigation.",
    },
  ];

  const categories = activeTab === "backend" ? backendCategories : activeTab === "frontend" ? frontendCategories : infrastructureCategories;

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
    <div>
      {/* Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        marginBottom: "24px",
      }}>
        <button
          onClick={() => setActiveTab("backend")}
          style={{
            padding: "8px 20px",
            border: activeTab === "backend" ? "2px solid #00816A" : "2px solid #e5e7eb",
            background: activeTab === "backend" ? "#E4F0EC" : "transparent",
            color: activeTab === "backend" ? "#00816A" : "#64748b",
            fontWeight: activeTab === "backend" ? 600 : 400,
            fontSize: "0.95rem",
            cursor: "pointer",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveTab("frontend")}
          style={{
            padding: "8px 20px",
            border: activeTab === "frontend" ? "2px solid #00816A" : "2px solid #e5e7eb",
            background: activeTab === "frontend" ? "#E4F0EC" : "transparent",
            color: activeTab === "frontend" ? "#00816A" : "#64748b",
            fontWeight: activeTab === "frontend" ? 600 : 400,
            fontSize: "0.95rem",
            cursor: "pointer",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveTab("infrastructure")}
          style={{
            padding: "8px 20px",
            border: activeTab === "infrastructure" ? "2px solid #00816A" : "2px solid #e5e7eb",
            background: activeTab === "infrastructure" ? "#E4F0EC" : "transparent",
            color: activeTab === "infrastructure" ? "#00816A" : "#64748b",
            fontWeight: activeTab === "infrastructure" ? 600 : 400,
            fontSize: "0.95rem",
            cursor: "pointer",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
        >
          Infrastructure
        </button>
      </div>

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
                <stop offset="0%" stopColor="#00816A" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3B9A83" stopOpacity="0.25" />
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
                    x={labelX - 85}
                    y={labelY - 15}
                    width="170"
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
                    stroke="#00816A"
                    strokeWidth="2.5"
                    style={{ transition: "all 0.15s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.r = "16";

                      const categoryDetails = document.getElementById(
                        `category-${index}`
                      );
                      if (categoryDetails) {
                        categoryDetails.style.background = "#E4F0EC";
                        categoryDetails.style.borderColor = '#00816A';
                        categoryDetails.style.padding = "16px";

                        const description = document.getElementById(
                          `description-${index}`
                        );
                        if (description) {
                          description.style.maxHeight = "1000px";
                          description.style.opacity = "1";
                          description.style.marginTop = "12px";
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.r = "14";

                      const categoryDetails = document.getElementById(
                        `category-${index}`
                      );
                      if (categoryDetails) {
                        categoryDetails.style.background = "#FAFAFA";
                        categoryDetails.style.borderColor = "#e2e8f0";
                        categoryDetails.style.padding = "20px";

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
              stroke="#00816A"
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
                  fill="#00816A"
                  stroke="white"
                  strokeWidth="2.5"
                  style={{ transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => {
                    e.target.style.r = "9";

                    const categoryDetails = document.getElementById(
                      `category-${index}`
                    );
                    if (categoryDetails) {
                      categoryDetails.style.background = "#E4F0EC";
                      categoryDetails.style.borderColor = '#00816A';
                      categoryDetails.style.padding = "16px";

                      const description = document.getElementById(
                        `description-${index}`
                      );
                      if (description) {
                        description.style.maxHeight = "1000px";
                        description.style.opacity = "1";
                        description.style.marginTop = "12px";
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.r = "7";

                    const categoryDetails = document.getElementById(
                      `category-${index}`
                    );
                    if (categoryDetails) {
                      categoryDetails.style.background = "#FAFAFA";
                      categoryDetails.style.borderColor = "#e2e8f0";
                      categoryDetails.style.padding = "20px";

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
              fill="#00816A"
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
                    border: isExpanded ? "2px solid #00816A" : "2px solid #e2e8f0",
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
                    background: '#3B9A83',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
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
                        color: "#00816A",
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
            background: "#F5F5F5",
            borderRadius: "12px",
            border: "1px solid rgba(91, 163, 0, 0.1)",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "0.9rem",
              color: "#666666",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Hover over hexagon elements or category cards to expand details
          </p>
        </div>
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
                background: '#3B9A83',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
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
                                e.currentTarget.style.borderColor = '#00816A';
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
                                background: '#3B9A83',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12
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
                                    fontSize: '1.6rem',
                                    color: '#00816A',
                                    transition: 'transform 0.3s ease',
                                    transform: expandedLevels[index] ? 'rotate(90deg)' : 'rotate(0deg)',
                                    marginLeft: '16px',
                                    fontWeight: '400'
                                }}>
                                    ›
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
  const [techInterviewTab, setTechInterviewTab] = useState("backend");
  const [languageTab, setLanguageTab] = useState("backend");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: window.innerWidth < 768 ? "0" : "10px",
      }}
    >
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
          At Solidgate, we work with <span style={{ fontWeight: 600 }}>engineers</span>, not just
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
        
        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "24px",
        }}>
          <button
            onClick={() => setTechInterviewTab("backend")}
            style={{
              padding: "8px 20px",
              border: techInterviewTab === "backend" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: techInterviewTab === "backend" ? "#E4F0EC" : "transparent",
              color: techInterviewTab === "backend" ? "#00816A" : "#64748b",
              fontWeight: techInterviewTab === "backend" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Backend
          </button>
          <button
            onClick={() => setTechInterviewTab("frontend")}
            style={{
              padding: "8px 20px",
              border: techInterviewTab === "frontend" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: techInterviewTab === "frontend" ? "#E4F0EC" : "transparent",
              color: techInterviewTab === "frontend" ? "#00816A" : "#64748b",
              fontWeight: techInterviewTab === "frontend" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Frontend
          </button>
          <button
            onClick={() => setTechInterviewTab("infrastructure")}
            style={{
              padding: "8px 20px",
              border: techInterviewTab === "infrastructure" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: techInterviewTab === "infrastructure" ? "#E4F0EC" : "transparent",
              color: techInterviewTab === "infrastructure" ? "#00816A" : "#64748b",
              fontWeight: techInterviewTab === "infrastructure" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Infrastructure
          </button>
        </div>

        {/* Tab Content */}
        {techInterviewTab === "backend" && (
          <div>
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
                Preparation
              </h3>
              <p style={{ color: "#444", fontSize: "0.95rem" }}>
                Start by checking out our website — <a href="https://solidgate.com/" style={{textDecoration: "none"}}>solidgate.com</a> 💚 — and get to know our product inside out. Want to dig deeper? Our API docs have all the details you need.
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
          </div>
        )}

        {techInterviewTab === "frontend" && (
          <div>
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
                Preparation
              </h3>
              <p style={{ color: "#444", fontSize: "0.95rem" }}>
                Start by checking out our website — <a href="https://solidgate.com/" style={{textDecoration: "none"}}>solidgate.com</a> 💚 — and get to know our product inside out. Want to dig deeper? Our API docs have all the details you need.
                Below, you'll find a clear breakdown of the skills we look for across engineering roles.
              </p>
            </div>
            
            <div style={{ 
              marginBottom: "25px",
              padding: "16px",
              background: "#FFF4E6",
              border: "1px solid #FFE0B2",
              borderRadius: "8px",
            }}>
              <p style={{ margin: "0 0 12px 0", color: "#E65100", fontWeight: 600, fontSize: "0.95rem" }}>
                ⚠️ Additional Stage – Frontend Roles Only
              </p>
              <p style={{ color: "#444", fontSize: "0.95rem", marginBottom: "8px" }}>
                Before the technical interview, Front-End Engineer candidates go through an additional step:
              </p>
              <p style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem", margin: "12px 0 8px 0" }}>
                Tech Screen (React live-coding) (30 min)
              </p>
              <p style={{ color: "#444", fontSize: "0.95rem", margin: 0 }}>
                A real-time coding session focused on React fundamentals and problem-solving.
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
          </div>
        )}

        {techInterviewTab === "infrastructure" && (
          <div>
            <div style={{ marginBottom: "25px" }}>
              <h3 style={{ color: "#000000", fontWeight: 600, fontSize: "1.1rem" }}>
                Preparation
              </h3>
              <p style={{ color: "#444", fontSize: "0.95rem" }}>
                Start by checking out our website — <a href="https://solidgate.com/" style={{textDecoration: "none"}}>solidgate.com</a> 💚 — and get to know our product inside out. Want to dig deeper? Our API docs have all the details you need.
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
          </div>
        )}
      </section>

      {/* Testimonials Section moved closer to Books */}

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
        
        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "24px",
        }}>
          <button
            onClick={() => setLanguageTab("backend")}
            style={{
              padding: "8px 20px",
              border: languageTab === "backend" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: languageTab === "backend" ? "#E4F0EC" : "transparent",
              color: languageTab === "backend" ? "#00816A" : "#64748b",
              fontWeight: languageTab === "backend" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Backend
          </button>
          <button
            onClick={() => setLanguageTab("frontend")}
            style={{
              padding: "8px 20px",
              border: languageTab === "frontend" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: languageTab === "frontend" ? "#E4F0EC" : "transparent",
              color: languageTab === "frontend" ? "#00816A" : "#64748b",
              fontWeight: languageTab === "frontend" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Frontend
          </button>
          <button
            onClick={() => setLanguageTab("infrastructure")}
            style={{
              padding: "8px 20px",
              border: languageTab === "infrastructure" ? "2px solid #00816A" : "2px solid #e5e7eb",
              background: languageTab === "infrastructure" ? "#E4F0EC" : "transparent",
              color: languageTab === "infrastructure" ? "#00816A" : "#64748b",
              fontWeight: languageTab === "infrastructure" ? 600 : 400,
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
          >
            Infrastructure
          </button>
        </div>

        {/* Tab Content */}
        {languageTab === "backend" && (
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
        )}

        {languageTab === "frontend" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <LanguageBlock
              language="JavaScript"
              logo="/covers/js-logo.svg"
              requirements={[
                "Strong TypeScript & JavaScript fundamentals",
                "Solid understanding of browser APIs, rendering pipeline & networking",
                "Awareness of web security best practices",
                "Production experience with React",
              ]}
              questions={[
                "How would our codebases look if JSON.parse returned unknown instead of any?",
                "You're tasked with improving landing page loading speed — what's the first thing you do? And the last?",
                "What are the most common frontend attack vectors and how do you mitigate them?",
              ]}
            />
            <LanguageBlock
              language="TypeScript"
              logo="/covers/ts-logo.svg"
              requirements={[
                "Core concepts: Primitive types, interfaces, structural typing, utility types, generics",
                "Type manipulation: Conditional types, mapped types, template literals, infer, function overloads",
                "Effective TypeScript: Type inference, narrowing, guards & assertions",
                "TypeScript in React: Using built-in React types, typing children, refs, and generic components with forwardRef / memo",
                "Full type-safety in practice: API & networking layer, error boundaries & error handling strategies",
                "Sanitising & validating user input",
                "Ecosystem & tooling: Linting & static analysis, project config, compilation, bundling",
              ]}
              questions={[
                "What's the difference between any and unknown?",
                "Why does JSON.parse() return any? How would you make it more type-safe?",
                "How would you write a generic type that converts \"a,b,c,d\" into \"a\" | \"b\" | \"c\" | \"d\"?",
              ]}
            />
          </div>
        )}

        {languageTab === "infrastructure" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <LanguageBlock
              language="AWS Cloud"
              logo=""
              requirements={[
                "Strong knowledge of core AWS Services (networking, compute, storage, databases, monitoring)",
                "Experience in building fault-tolerant and scalable systems",
                "Understanding of Well-Architected Framework",
              ]}
              questions={[
                "How would you design a global, low-latency API on AWS, and which components would you use to route and fail over traffic between regions?",
                "How would you design a multi-AZ VPC layout for microservices—covering ingress, egress, and high availability?",
                "How would you design an event-driven image/media processing pipeline—from S3 upload through processing to delivery—so it's reliable and scalable?",
              ]}
            />
            <LanguageBlock
              language="Infrastructure as a Code"
              logo=""
              requirements={[
                "Proficiency in Terraform syntax and language features",
                "Experience in building complex multi-account/env infrastructures using IaaC",
                "Knowledge of safe change promotion",
              ]}
              questions={[
                "What's your strategy for safe replacements (ALB, ASG, RDS) to avoid downtime?",
                "How do you manage change control: who can apply, what gets blocked, and how are risky plans approved?",
                "How do you ensure RDS secrets and other sensitive data don't land in state files?",
                "What's your org-wide drift detection approach across many workspaces?",
              ]}
            />
            <LanguageBlock
              language="DBA"
              logo=""
              requirements={[
                "Understanding of SQL syntax and principles",
                "Knowledge of how Postgres operates, administration and clustering",
                "Basic understanding of DB schema management",
                "Proficiency in RDS (monitoring, patch management, capacity planning, integration with other AWS tools)",
              ]}
              questions={[
                "How would you choose between Aurora PostgreSQL and RDS PostgreSQL?",
                "When and how would you partition a time-series table?",
                "Explain Multi-AZ & failover behavior and what the app must handle",
                "Safely deploy a schema change on a large table (e.g., ADD COLUMN NOT NULL DEFAULT, big index).",
              ]}
            />
            <LanguageBlock
              language="Observability"
              logo=""
              requirements={[
                "General understanding of how monitoring and alerting works",
                "Proficiency in building durable observability systems",
                "Understanding of how to efficiently monitor system vitals",
                "Understanding of SLA, SLO, SLI",
              ]}
              questions={[
                "What signals and SLIs would you instrument for a user-facing API?",
                "High-cardinality metrics are exploding in VictoriaMetrics/Prometheus—what do you do?",
                "How do you validate that alerts are actionable and reduce noise over time?",
                "Observability costs doubled—how do you cut cost without losing visibility?",
              ]}
            />
            <LanguageBlock
              language="SDLC"
              logo=""
              requirements={[
                "Proficiency in designing and operating end-to-end CI/CD",
                "Understanding of release management and deployment hygiene",
                "Knowledge of delivery performance and pipeline efficiency",
              ]}
              questions={[
                "How do you auto-rollback a bad deploy without paging a human?",
                "What quality gates belong in a modern CI pipeline?",
                "How do you make builds reproducible and promotable across dev→stg→prod?",
              ]}
            />
          </div>
        )}
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
            href="https://www.youtube.com/watch?v=Dz0JS8fVN6M"
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#FF0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ marginLeft: "2px" }}
                  >
                    <path
                      d="M7 5L3 2V8L7 5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Як 50 інженерів роблять 1000 деплоїв на місяць | DOU Day 2025
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Макс Багінський, Head of engineering
              </p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=B6pO8SkaSUY"
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#FF0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ marginLeft: "2px" }}
                  >
                    <path
                      d="M7 5L3 2V8L7 5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Challenge: Unbreakable Payment Form
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Лев Давидов Tech Lead(FE Guild Master)
              </p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=bfUboflKmf0"
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#FF0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ marginLeft: "2px" }}
                  >
                    <path
                      d="M7 5L3 2V8L7 5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Реальність керування 100+ «керованими» базами даних RDS Postgres
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Микита Глушак, Head of Infrastructure
              </p>
            </div>
          </a>
          <a
            href="https://youtu.be/Ax4BEp3ArO4?si=tKDDnCv_fHmAStlq"
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#FF0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{ marginLeft: "2px" }}
                  >
                    <path
                      d="M7 5L3 2V8L7 5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Надійність систем за налаштованого CI/CD
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Сергій Сафонов, ex-Tech Lead
              </p>
            </div>
          </a>
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#00816A",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "white",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                  </div>
                </span>
                Чи варто деплоїтись у п'ятницю
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Сергій Сафонов, ex-Tech Lead
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#00816A",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "white",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                  </div>
                </span>
                $10.000 за хвилину даунтайму: архітектура, черги та стрімінг у
                фінтех
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#00816A",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "white",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                  </div>
                </span>
                Як стати джуном, якого найматимуть
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
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
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#00816A",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "white",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "2px",
                        right: "2px",
                        height: "1px",
                        background: "#00816A",
                      }}
                    />
                  </div>
                </span>
                Як ми розпилювали моноліт. Наш досвід переходу до мікросервісів
              </h4>
              <p style={{ color: "#00816A", fontWeight: 500, fontSize: 13 }}>
                Сергій Сафонов, ex-Tech Lead
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="card">
        <Testimonials />
      </section>

      {/* Books Section */}
      <BookList />

      {/* Quote Section */}
      <section
        style={{
          "background": "#f7f8fa",
          "textAlign": "center",
          "borderRadius": "14px",
          "padding": "2rem",
          "marginBottom": "3rem",
      }}
      >
        <blockquote
          style={{
            margin: 0,
            fontSize: "1rem",
            fontWeight: 500,
            color: "#181A20",
          }}
        >
          We don't just complete tasks at Solidgate — we build top-quality products using DevOps and Lean approaches.
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
    {
      title: "TypeScript Cookbook",
      authors: "Stefan Baumgartner",
      description: "Comprehensive guide to TypeScript patterns, type manipulation, and advanced techniques",
      cover: "/covers/ts-cookbook.jpg",
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
              alignItems: "flex-start",
              gap: "16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "#E4F0EC";
              // Rotate the book cover randomly left or right
              const bookCover = e.currentTarget.querySelector('div');
              if (bookCover) {
                const randomDirection = Math.random() > 0.5 ? 1 : -1;
                const randomAngle = (Math.random() * 3 + 2) * randomDirection; // 2-5 degrees
                bookCover.style.transform = `rotate(${randomAngle}deg)`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#FAFAFA";
              // Reset book cover rotation
              const bookCover = e.currentTarget.querySelector('div');
              if (bookCover) {
                bookCover.style.transform = "rotate(0deg)";
              }
            }}
          >
            {/* Book Cover */}
            <div
              style={{
                width: "60px",
                height: "80px",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                flexShrink: 0,
                transition: "transform 0.3s ease",
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
                  marginBottom: 4,
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
                color: "#00816A",
                fontWeight: 500,
                fontSize: "0.8rem",
                marginBottom: 12,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.3",
              }}>
                by {book.authors}
              </p>

              <p style={{
                color: "#64748b",
                fontSize: "0.8rem",
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            width: "fit-content",
            boxSizing: "content-box",
            alignItems: "center",
            border: "1px solid #E0E0E0",
            borderRadius: "6px",
            background: "#ffffff",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        }}
      >
        <button
          onClick={() => setSelected("2023")}
          style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            border: "none",
              borderRadius: "4px",
              background: selected === "2023" ? "#E1EFFC" : "#ffffff",
              color: "#111827",
              height: "calc(2rem - 2px)",
              padding: "4px 16px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
            cursor: "pointer",
              zIndex: selected === "2023" ? 1 : "auto",
              outline: selected === "2023" ? "2px solid #0072E0" : "none",
              flex: "1 1 auto",
              minWidth: "80px",
            }}
            onMouseEnter={(e) => {
              if (selected !== "2023") {
                e.target.style.background = "#F5F5F5";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== "2023") {
                e.target.style.background = "#ffffff";
              }
            }}
            onMouseDown={(e) => {
              if (selected !== "2023") {
                e.target.style.background = "#d1d5db";
              }
          }}
        >
          2023
        </button>
        <button
          onClick={() => setSelected("2025")}
          style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            border: "none",
              borderRadius: "4px",
              background: selected === "2025" ? "#E1EFFC" : "#ffffff",
              color: "#111827",
              height: "calc(2rem - 2px)",
              padding: "4px 16px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
            cursor: "pointer",
              zIndex: selected === "2025" ? 1 : "auto",
              outline: selected === "2025" ? "2px solid #0072E0" : "none",
              flex: "1 1 auto",
              minWidth: "80px",
            }}
            onMouseEnter={(e) => {
              if (selected !== "2025") {
                e.target.style.background = "#F5F5F5";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== "2025") {
                e.target.style.background = "#ffffff";
              }
            }}
            onMouseDown={(e) => {
              if (selected !== "2025") {
                e.target.style.background = "#d1d5db";
              }
          }}
        >
          2025
        </button>
        </div>
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
        fontSize: "1rem",
        lineHeight: "1.6",
        gap: "8px",
      }}
    >
      <div style={{
        fontWeight: 400,
      }}>
        Built by backend engineers, for engineers — with love! 💚
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
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <nav
            style={{
              width: "100%",
              background: "#fff",
              padding: isMobile ? "8px 16px" : "26px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "1280px",
              margin: "0 auto",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <a
              href="https://solidgate.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
          >
            <img
                src="logo.svg"
              alt="Solidgate logo"
              style={{
                maxWidth: 120,
                width: "auto",
                height: "auto",
                cursor: "pointer",
              }}
            />
            </a>

            {isMobile ? (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <a
                  href="https://solidgate.teamtailor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#E4F0EC",
                    color: "#105547",
                    textDecoration: "none",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#105547";
                    e.target.style.color = "#E4F0EC";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#E4F0EC";
                    e.target.style.color = "#105547";
                  }}
                >
                  We're hiring!
                </a>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    background: "none",
                    border: "none",
                    boxShadow: "none",
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
              <>
                <div style={{ display: "flex", gap: "16px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                  <a
                    href="#home"
                    style={{
                      color: "#26282C",
                      fontWeight: 400,
                      textDecoration: "none",
                      fontSize: "1rem",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      background: hash === "#home" ? "#E1EFFC" : "#ffffff",
                      border: "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (hash !== "#home") {
                        e.target.style.background = "#F5F5F5";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (hash !== "#home") {
                        e.target.style.background = "#ffffff";
                      }
                    }}
                    onMouseDown={(e) => {
                      if (hash !== "#home") {
                        e.target.style.background = "#d1d5db";
                      }
                    }}
                  >
                    Tech Radar
                  </a>
                  <a
                    href="#interview"
                    style={{
                      color: "#26282C",
                      fontWeight: 400,
                      textDecoration: "none",
                      fontSize: "1rem",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      background: hash === "#interview" ? "#E1EFFC" : "#ffffff",
                      border: "2px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (hash !== "#interview") {
                        e.target.style.background = "#F5F5F5";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (hash !== "#interview") {
                        e.target.style.background = "#ffffff";
                      }
                    }}
                    onMouseDown={(e) => {
                      if (hash !== "#interview") {
                        e.target.style.background = "#d1d5db";
                      }
                    }}
                  >
                    Interview Guide
                  </a>
                </div>
                <a
                  href="https://solidgate.teamtailor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#E4F0EC",
                    color: "#105547",
                    textDecoration: "none",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#105547";
                    e.target.style.color = "#E4F0EC";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#E4F0EC";
                    e.target.style.color = "#105547";
                  }}
                >
                  We're hiring!
                </a>
              </>
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
                  color: "#26282C",
                  fontWeight: 400,
                  textDecoration: "none",
                  fontSize: "1rem",
                  padding: "8px 16px",
                  borderRadius: "8px",
                                        background: hash === "#home" ? "#E1EFFC" : "#ffffff",
                  border: "2px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (hash !== "#home") {
                    e.target.style.background = "#F5F5F5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (hash !== "#home") {
                    e.target.style.background = "#ffffff";
                  }
                }}
                onMouseDown={(e) => {
                  if (hash !== "#home") {
                    e.target.style.background = "#d1d5db";
                  }
                }}
              >
                Tech Radar
              </a>
              <a
                href="#interview"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#26282C",
                  fontWeight: 400,
                  textDecoration: "none",
                  fontSize: "1rem",
                  padding: "8px 16px",
                  borderRadius: "8px",
                                        background: hash === "#interview" ? "#E1EFFC" : "#ffffff",
                  border: "2px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (hash !== "#interview") {
                    e.target.style.background = "#F5F5F5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (hash !== "#interview") {
                    e.target.style.background = "#ffffff";
                  }
                }}
                onMouseDown={(e) => {
                  if (hash !== "#interview") {
                    e.target.style.background = "#d1d5db";
                  }
                }}
              >
                Interview Guide
              </a>
            </div>
          )}
        </div>

              {/* Page Content */}
      <div style={{ padding: window.innerWidth < 768 ? "16px" : "0px" }}>
        {hash === "#interview" ? (
          <InterviewGuide />
        ) : (
          <>
            {/* TechRadar Section ONLY */}
            <section style={{
              "background": "#fff",
              "padding": "2rem",
              "textAlign": "center",

            }}>
              <TechRadarTabs />
              <div style={{
                padding: window.innerWidth < 768 ? "0 16px" : "0 40px",
              }}>
                  <p>
                    <div
                      id="hold"
                      style={{
                        display: "inline-block",
                        background: "#F5F5F5",
                        color: "#525252",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 500,
                        marginRight: 8,
                      }}
                    >
                      Hold
                    </div>{" "}
                    — Tools we know well but only use to support existing systems. Not used for new projects.
                  </p>
                  <p>
                    <div
                      id="assess"
                      style={{
                        display: "inline-block",
                        background: "#CADCED",
                        color: "#14416C",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 500,
                        marginRight: 8,
                      }}
                    >
                      Assess
                    </div>{" "}
                    — Technologies under evaluation, used only in test environments, not for real tasks.
                  </p>
                  <p>
                    <div
                      id="trial"
                      style={{
                        display: "inline-block",
                        background: "#DBC0F0",
                        color: "#4D1D74",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 500,
                        marginRight: 8,
                      }}
                    >
                      Trial
                    </div>{" "}
                    — Tools that have passed testing and are being prepared (or already used) in production.
                  </p>
                  <p>
                    <div
                      id="adopt"
                      style={{
                        display: "inline-block",
                        background: "#E4F0EC",
                        color: "#105547",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontWeight: 500,
                        marginRight: 8,
                      }}
                    >
                      Adopt
                    </div>{" "}
                    — Fully implemented tools actively used by teams. We have solid expertise with these.
                  </p>
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
