import React from "react";
function TechRadar2023() {
    window.radar_visualization({
        svg_id: "radar",
        date: 2023.09,
        width: 1450,
        height: 1000,
        colors: {
            background: "#fff",
            grid: "#bbb",
            inactive: "#ddd"
        },
        title: "Tech radar 2023",
        quadrants: [
            { name: "Language & Frameworks" },
            { name: "Platform & Infrastructure" },
            { name: "Data management" },
            { name: "Techniques & Tools" }
        ],
        rings: [
            { name: "ADOPT",  color: "#5ba300" },
            { name: "TRIAL", color: "#009eb0" },
            { name: "ASSESS",  color: "#c7ba00" },
            { name: "HOLD",  color: "#e09b96" },
        ],
        print_layout: true,
        links_in_new_tabs: true,
        entries: [
            {
                label: "Go",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Kotlin",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PHP",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Symfony",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Ktor",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Spring",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Echo v4",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Gorm",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Go PGX",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "React",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "TypeScript",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Javascript",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Hugo",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Astro",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redux",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Python",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Task.dev",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Shell",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Make",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "VictoriaMetrics",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Grafana",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Airflow",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "K8S",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 2,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenTelemetry",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 2,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nexus",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Grafana On Call",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Docker",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nginx",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS Fargate",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS ECS",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Terraform",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Npm",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Yarn",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Sentry",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Vite",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nx",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PNPm",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Gitlab",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "GitlabCI",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Jenkins",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Kibana",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Fluent",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Vector",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Loki",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "RabbitMQ",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Amazon MSK(Kafka)",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS Aurora",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS S3",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "DBT",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redshift",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PostgreSQL",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redis",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Memcached",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Elasticsearch",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenSearch",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "C4 model",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "ADR",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Structurizr",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Scrum",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "On call",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Functional testing",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Unit testing",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "BDD",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Conventional commits",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Buf(gRPC)",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Buf(gRPC) registry",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "golangci-lint",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenApi",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Jira",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Confluence",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Github Copilot",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Blue-green deploy",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 2,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "GitOps",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
        ]
    })

    return (
        <div className="App">
            <img id="logo" src="logo_m.png" alt="solidgate logo" />
            <div id="radar-description">
                <p><div id="hold">Hold</div> — in this category, we have expertise, but the mentioned tools are used only to support existing systems — new projects are not launched on them.</p>
                <p><div id="assess">Assess</div> — trial technologies and tools that are currently being evaluated. They are only used for test projects and are not used for real tasks.</p>
                <p><div id="trial">Trial</div> — technologies and tools that have already passed the testing phase and are preparing to work in production (or are even already working there).</p>
                <p><div id="adopt">Adopt</div> — technologies and tools that are implemented and actively used by teams. Technologies in which Solidgate has expertise.</p>
            </div>
        </div>
    );
}

function TechRadar2024() {
    window.radar_visualization({
        svg_id: "radar",
        date: 2024.09,
        width: 1450,
        height: 1000,
        colors: {
            background: "#fff",
            grid: "#bbb",
            inactive: "#ddd"
        },
        title: "Tech radar 2024",
        quadrants: [
            { name: "Language & Frameworks" },
            { name: "Platform & Infrastructure" },
            { name: "Data management" },
            { name: "Techniques & Tools" }
        ],
        rings: [
            { name: "ADOPT",  color: "#5ba300" },
            { name: "TRIAL", color: "#009eb0" },
            { name: "ASSESS",  color: "#c7ba00" },
            { name: "HOLD",  color: "#e09b96" },
        ],
        print_layout: true,
        links_in_new_tabs: true,
        entries: [
            {
                label: "Go",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Kotlin",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PHP",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Node.js",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Fastify",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Drizzle ORM",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Symfony",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Ktor",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                                      //  0 = not moved (circle)
                                      //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Spring",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Echo v4",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Gorm",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Go PGX",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "React",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "TypeScript",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Hugo",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Astro",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redux",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Python",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Task.dev",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Shell",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "VictoriaMetrics",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Grafana",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Airflow",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "K8S",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 2,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenTelemetry",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nexus",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Grafana On Call",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Docker",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nginx",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS Fargate",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS ECS",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Terraform",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Sentry",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Vite",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Nx",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PNPm",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Gitlab",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "GitlabCI",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Jenkins",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Kibana",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Fluent",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0            // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Vector",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Loki",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "RabbitMQ",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS SQS",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Amazon MSK(Kafka)",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS Aurora",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "AWS S3",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "DBT",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redshift",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "PostgreSQL",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Redis",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Memcached",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Elasticsearch",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenSearch",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "C4 model",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "ADR",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Structurizr",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Scrum",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "On call",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Functional testing",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Unit testing",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "BDD",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Conventional commits",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Buf(gRPC)",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Buf(gRPC) registry",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "golangci-lint",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "OpenApi",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Jira",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Confluence",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Github Copilot",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Blue-green deploy",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "GitOps",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            }
        ]
    })

    return (
        <div className="App">
            <img id="logo" src="logo_m.png" alt="solidgate logo" />
            <div id="radar-description">
                <p><div id="hold">Hold</div> — in this category, we have expertise, but the mentioned tools are used only to support existing systems — new projects are not launched on them.</p>
                <p><div id="assess">Assess</div> — trial technologies and tools that are currently being evaluated. They are only used for test projects and are not used for real tasks.</p>
                <p><div id="trial">Trial</div> — technologies and tools that have already passed the testing phase and are preparing to work in production (or are even already working there).</p>
                <p><div id="adopt">Adopt</div> — technologies and tools that are implemented and actively used by teams. Technologies in which Solidgate has expertise.</p>
            </div>
        </div>
    );
}


function Footer() {
    return (
        <>
            <div>Made by backend developer for developers! With love 💚!</div>
            <div><a href="https://jobs.dou.ua/companies/solidgate/vacancies/">Solidgate is hiring!</a></div>
        </>
    );
}

export const MemoisedTechRadar2023 = React.memo(TechRadar2023);
export const MemoisedTechRadar2024 = React.memo(TechRadar2024);
export const MemoisedFooter = React.memo(Footer);
