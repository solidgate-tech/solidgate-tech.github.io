export const LANGUAGES_SECTION = {
  title: "Language-Specific Requirements",
  questionsLabel: "Top Interview Questions",
  requirementsLabel: "Requirements",
};

export const LANGUAGES = {
  backend: [
    {
      name: "Golang",
      logo: "/covers/go-logo.svg",
      requirements: [
        "Strong understanding of Go concurrency patterns (goroutines, channels)",
        "Experience with Go modules and dependency management",
        "Knowledge of Go testing frameworks and best practices",
        "Understanding of Go performance optimization",
      ],
      questions: [
        {
          q: "What is Go and why was it created?",
          detail:
            "Explain its design philosophy and how it addresses common programming challenges.",
        },
        {
          q: "What is a slice in Go?",
          detail:
            "How does it differ from arrays, and what are the implications for memory management?",
        },
        {
          q: "Explain Go's concurrency model. How do goroutines and channels work together, and what are the best practices for avoiding race conditions?",
          detail: "",
        },
      ],
    },
    {
      name: "Kotlin",
      logo: "/covers/kotlin-logo.svg",
      requirements: [
        "Proficiency in Kotlin syntax and language features",
        "Experience with Spring Boot and Kotlin integration",
        "Understanding of Kotlin coroutines and async programming",
        "Knowledge of Kotlin testing frameworks",
      ],
      questions: [
        {
          q: "What is the significance of data classes in Kotlin?",
          detail:
            "How do they improve code quality and reduce boilerplate compared to Java?",
        },
        {
          q: "How does Kotlin ensure type safety?",
          detail:
            "Explain the null safety system and how it prevents common runtime errors.",
        },
        {
          q: "What are the advantages of using Kotlin over Java?",
          detail:
            "Discuss interoperability, syntax improvements, and modern language features.",
        },
      ],
    },
    {
      name: "Node.js",
      logo: "/covers/nodejs-logo.svg",
      requirements: [
        "Strong JavaScript/TypeScript fundamentals",
        "Experience with Fastify framework",
        "Understanding of Node.js event loop and async patterns",
        "Knowledge of npm/pnpm package management",
      ],
      questions: [
        {
          q: "What tasks is Node.js good for?",
          detail:
            "Which projects would you NOT use it for? Explain the trade-offs and use cases.",
        },
        {
          q: "Explain in detail how the Event Loop works in Node.js. How can you use it effectively and what are common pitfalls?",
          detail: "",
        },
        {
          q: "How can you handle a large task consisting of small subtasks without blocking the event loop?",
          detail: "Discuss strategies and best practices.",
        },
      ],
    },
    {
      name: "Python",
      logo: "/covers/python-logo.svg",
      requirements: [
        "Strong Python fundamentals and best practices",
        "Experience with simple web frameworks (Flask, FastAPI)",
        "Understanding of Python async programming (asyncio)",
        "Knowledge of Python testing (pytest, unittest)",
      ],
      questions: [
        {
          q: "How do you implement graceful shutdown in Python?",
          detail:
            "Discuss signal handling, cleanup procedures, and best practices for production systems.",
        },
        {
          q: "Explain the Global Interpreter Lock (GIL). Is it bad?",
          detail:
            "What are its implications for multithreading vs multiprocessing?",
        },
        {
          q: "Concurrency vs Parallelism in Python: what does Python provide?",
          detail:
            "In which cases should you use threading, multiprocessing, or asyncio?",
        },
      ],
    },
  ],
  frontend: [
    {
      name: "JavaScript",
      logo: "/covers/js-logo.svg",
      requirements: [
        "Strong TypeScript & JavaScript fundamentals",
        "Solid understanding of browser APIs, rendering pipeline & networking",
        "Awareness of web security best practices",
        "Production experience with React",
      ],
      questions: [
        {
          q: "How would our codebases look if JSON.parse returned unknown instead of any?",
          detail: "",
        },
        {
          q: "You're tasked with improving landing page loading speed — what's the first thing you do?",
          detail: "And the last?",
        },
        {
          q: "What are the most common frontend attack vectors and how do you mitigate them?",
          detail: "",
        },
      ],
    },
    {
      name: "TypeScript",
      logo: "/covers/ts-logo.svg",
      requirements: [
        "Core concepts: Primitive types, interfaces, structural typing, utility types, generics",
        "Type manipulation: Conditional types, mapped types, template literals, infer, function overloads",
        "Effective TypeScript: Type inference, narrowing, guards & assertions",
        "TypeScript in React: Using built-in React types, typing children, refs, and generic components with forwardRef / memo",
        "Full type-safety in practice: API & networking layer, error boundaries & error handling strategies",
        "Sanitising & validating user input",
        "Ecosystem & tooling: Linting & static analysis, project config, compilation, bundling",
      ],
      questions: [
        { q: "What's the difference between any and unknown?", detail: "" },
        {
          q: "Why does JSON.parse() return any?",
          detail: "How would you make it more type-safe?",
        },
        {
          q: "How would you write a generic type that converts \"a,b,c,d\" into \"a\" | \"b\" | \"c\" | \"d\"?",
          detail: "",
        },
      ],
    },
  ],
  infrastructure: [
    {
      name: "AWS Cloud",
      logo: "/covers/aws-logo.svg",
      requirements: [
        "Strong knowledge of core AWS Services (networking, compute, storage, databases, monitoring)",
        "Experience in building fault-tolerant and scalable systems",
        "Understanding of Well-Architected Framework",
      ],
      questions: [
        {
          q: "How would you design a global, low-latency API on AWS, and which components would you use to route and fail over traffic between regions?",
          detail: "",
        },
        {
          q: "How would you design a multi-AZ VPC layout for microservices—covering ingress, egress, and high availability?",
          detail: "",
        },
        {
          q: "How would you design an event-driven image/media processing pipeline—from S3 upload through processing to delivery—so it's reliable and scalable?",
          detail: "",
        },
      ],
    },
    {
      name: "Infrastructure as a Code",
      logo: "/covers/terraform-logo.svg",
      requirements: [
        "Proficiency in Terraform syntax and language features",
        "Experience in building complex multi-account/env infrastructures using IaaC",
        "Knowledge of safe change promotion",
      ],
      questions: [
        {
          q: "What's your strategy for safe replacements (ALB, ASG, RDS) to avoid downtime?",
          detail: "",
        },
        {
          q: "How do you manage change control: who can apply, what gets blocked, and how are risky plans approved?",
          detail: "",
        },
        {
          q: "How do you ensure RDS secrets and other sensitive data don't land in state files?",
          detail: "",
        },
        {
          q: "What's your org-wide drift detection approach across many workspaces?",
          detail: "",
        },
      ],
    },
    {
      name: "DBA",
      logo: "/covers/postgres-logo.svg",
      requirements: [
        "Understanding of SQL syntax and principles",
        "Knowledge of how Postgres operates, administration and clustering",
        "Basic understanding of DB schema management",
        "Proficiency in RDS (monitoring, patch management, capacity planning, integration with other AWS tools)",
      ],
      questions: [
        {
          q: "How would you choose between Aurora PostgreSQL and RDS PostgreSQL?",
          detail: "",
        },
        {
          q: "When and how would you partition a time-series table?",
          detail: "",
        },
        {
          q: "Explain Multi-AZ & failover behavior and what the app must handle",
          detail: "",
        },
        {
          q: "Safely deploy a schema change on a large table (e.g., ADD COLUMN NOT NULL DEFAULT, big index).",
          detail: "",
        },
      ],
    },
    {
      name: "Observability",
      logo: "/covers/observability-logo.png",
      requirements: [
        "General understanding of how monitoring and alerting works",
        "Proficiency in building durable observability systems",
        "Understanding of how to efficiently monitor system vitals",
        "Understanding of SLA, SLO, SLI",
      ],
      questions: [
        {
          q: "What signals and SLIs would you instrument for a user-facing API?",
          detail: "",
        },
        {
          q: "High-cardinality metrics are exploding in VictoriaMetrics/Prometheus—what do you do?",
          detail: "",
        },
        {
          q: "How do you validate that alerts are actionable and reduce noise over time?",
          detail: "",
        },
        {
          q: "Observability costs doubled—how do you cut cost without losing visibility?",
          detail: "",
        },
      ],
    },
    {
      name: "SDLC",
      logo: "/covers/sdlc-logo.svg",
      requirements: [
        "Proficiency in designing and operating end-to-end CI/CD",
        "Understanding of release management and deployment hygiene",
        "Knowledge of delivery performance and pipeline efficiency",
      ],
      questions: [
        {
          q: "How do you auto-rollback a bad deploy without paging a human?",
          detail: "",
        },
        { q: "What quality gates belong in a modern CI pipeline?", detail: "" },
        {
          q: "How do you make builds reproducible and promotable across dev→stg→prod?",
          detail: "",
        },
      ],
    },
    {
      name: "Kubernetes",
      logo: "/covers/kubernetes-logo.svg",
      requirements: [
        "Understanding of Kubernetes core concepts (pods, services, deployments, namespaces)",
        "Experience with container orchestration and workload management",
        "Knowledge of networking, storage, and resource management in Kubernetes",
      ],
      questions: [
        {
          q: "How would you design a multi-tenant Kubernetes cluster with resource isolation?",
          detail: "",
        },
        {
          q: "Explain the difference between Deployments, StatefulSets, and DaemonSets—when would you use each?",
          detail: "",
        },
        {
          q: "How do you handle persistent storage and state in Kubernetes applications?",
          detail: "",
        },
        {
          q: "What strategies would you use for Kubernetes networking and ingress control?",
          detail: "",
        },
      ],
    },
  ],
  "data-engineering": [
    {
      name: "Compute Engines",
      logo: "/covers/aws-logo.svg",
      requirements: [
        "Experience in designing and optimizing data processing pipelines.",
        "Understanding of how compute engines (e.g., Spark, Trino) execute queries under the hood: decompression, shuffle, spilling, broadcasting, etc.",
        "Familiarity with the core components of a modern data lake: object storage, metadata/catalog layer, table formats, and orchestration systems.",
      ],
      questions: [
        {
          q: "What join strategies does Apache Spark use?",
          detail: "When does Spark select each strategy?",
        },
        {
          q: "What is the difference between Apache Parquet and Apache Iceberg?",
          detail: "When would you use Apache Iceberg?",
        },
        {
          q: "What is a metadata/catalog layer in a data lake, and why do you need it?",
          detail: "",
        },
      ],
    },
    {
      name: "Data Modeling",
      logo: "/covers/postgres-logo.svg",
      requirements: [
        "Knowledge of Slowly Changing Dimensions (SCD) types and how to implement them in ELT pipelines.",
        "Understanding of CDC flows — update patterns, ordering, deduplication, late data handling, and schema evolution.",
        "Familiarity with dbt (or similar ELT frameworks).",
        "Experience in data quality validations and handling of historical corrections/backfills.",
      ],
      questions: [
        {
          q: "Explain SCD Type 1 vs Type 2. When would you use each one?",
          detail: "",
        },
        {
          q: "Describe how dbt organizes projects (models, staging, marts). How do ref(), tests, and snapshots work?",
          detail: "",
        },
        {
          q: "How would you implement a PII data cleaning in a CDC pipeline?",
          detail: "",
        },
      ],
    },
    {
      name: "Python",
      logo: "/covers/python-logo.svg",
      requirements: [
        "Proficiency in resolving data processing/transferring tasks using native language tooling and Pandas/Polars.",
        "Ability to write maintainable code using typing, testing, and other development best practices.",
      ],
      questions: [
        {
          q: "What is a context manager?",
          detail: "What problems does it solve? How to implement a custom one?",
        },
        {
          q: "What is the complexity of searching for a value in a dict/list?",
          detail: "",
        },
        {
          q: "What is the difference between an iterator and a generator?",
          detail: "",
        },
      ],
    },
    {
      name: "Data Pipelines",
      logo: "/covers/aws-logo.svg",
      requirements: [
        "Experience in building multi-stage data pipelines using orchestration and compute engines",
        "Knowledge of batch/streaming processing practices",
        "How to establish and maintain data quality gates",
      ],
      questions: [
        {
          q: "What is the difference between ETL vs ELT, and what are the use-cases for each?",
          detail: "",
        },
        { q: "How to enforce data quality?", detail: "" },
        {
          q: "What is the difference in approach to batch processing compared to stream processing?",
          detail: "",
        },
      ],
    },
  ],
};
