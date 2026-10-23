export const MATRIX_SECTION = {
  title: "Expected Competency Matrix",
  subtitle: [
    "This matrix represents the expected competency levels for our engineering roles.",
    "Each category is scored from 0 to 5, where 5 represents maximum competency.",
  ],
  chartLabel: "Competency Matrix",
  listLabel: "Category Details",
  hint: "Hover over hexagon elements or category cards to expand details",
};

export const TRACKS = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "data-engineering", label: "Data Engineering" },
];

export const COMPETENCIES = {
  backend: [
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
  ],
  frontend: [
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
  ],
  infrastructure: [
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
  ],
  "data-engineering": [
    {
      name: "Data Pipelines",
      score: 4,
      description:
        "Ability to design, build, and operate reliable batch & streaming pipelines with clear SLAs, idempotency, and safe backfill/replay strategies. Includes ingestion, transformation, lineage/observability, and cost/latency trade-offs.",
    },
    {
      name: "Python",
      score: 3,
      description:
        "Writes maintainable Python for ETL/ELT and platform tooling with tests and typing. Includes packaging/virtual envs, common data libs, and pragmatic performance awareness (I/O, memory).",
    },
    {
      name: "Databases",
      score: 4,
      description:
        "Strong SQL and data-modeling for OLTP/OLAP; understands partitioning/indexing, transaction isolation, and query plans. Includes schema evolution and cost/performance optimization.",
    },
    {
      name: "Airflow",
      score: 4,
      description:
        "Designs clear, idempotent DAGs with retries, SLAs, and event-driven patterns; manages backfills safely. Includes modular operators, DAG testing, and deployment/versioning best practices.",
    },
    {
      name: "AWS Cloud",
      score: 3,
      description:
        "Working knowledge of core services (S3, IAM, Glue/EMR, Lambda, Kinesis, EKS) and IaC (Terraform/CloudFormation). Includes basic networking/security and cost awareness.",
    },
    {
      name: "Engineering Culture",
      score: 4,
      description:
        "Adheres to high standards in code quality, reviews, testing, and documentation; collaborates effectively. Includes agile practices and a \"build data products, not firefighting\" mindset.",
    },
    {
      name: "Data Modeling",
      score: 5,
      description:
        "Expert in dimensional/medallion modeling and semantic layers; defines clear grain and conformed dimensions. Includes partitioning/clustering strategies, SCDs, handling late-arriving data, and data contracts.",
    },
    {
      name: "Compute Engines",
      score: 4,
      description:
        "Proficient with distributed/serverless engines for batch & streaming (Athena/Trino/Redshift, Spark on EMR/Glue, Flink/KDA). Includes tuning partitions/shuffle/file sizes, right-tool selection, and reliability at scale.",
    },
  ],
};
