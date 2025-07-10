import React, { useState, useEffect } from "react";

function LanguageBlock({ language, logo, requirements, questions }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div style={{ 
            background: '#fff', 
            borderRadius: 8, 
            padding: 16, 
            border: '1px solid #e5e7eb',
            marginBottom: 8
        }}>
            <div 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt={`${language} logo`} style={{ width: 24, height: 24, marginRight: 12 }} />
                    <h4 style={{ color: '#181A20', fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>{language}</h4>
                </div>
                <div style={{ 
                    fontSize: '1.2rem', 
                    color: '#64748b', 
                    transition: 'transform 0.2s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                    ▼
                </div>
            </div>
            
            {isExpanded && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ marginBottom: 16 }}>
                        <h5 style={{ color: '#181A20', marginBottom: 8, fontSize: '0.95rem', fontWeight: 600 }}>Requirements:</h5>
                        <ul style={{ color: '#475569', lineHeight: '1.5', margin: 0, paddingLeft: 16, fontSize: '0.9rem' }}>
                            {requirements.map((req, index) => (
                                <li key={index} style={{ marginBottom: 4 }}>{req}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ padding: 12, background: '#f8fafc', borderRadius: 6, border: '1px solid #e2e8f0' }}>
                        <h5 style={{ color: '#5ba300', marginBottom: 8, fontSize: '0.95rem', fontWeight: 600 }}>Top Interview Questions:</h5>
                        <ol style={{ color: '#475569', lineHeight: '1.5', margin: 0, paddingLeft: 16, fontSize: '0.9rem' }}>
                            {questions.map((question, index) => (
                                <li key={index} style={{ marginBottom: 6 }}>{question}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
}

function TechRadar2023() {
    React.useEffect(() => {
        window.radar_visualization({
            svg_id: "radar-2023",
            date: 2023.09,
            width: 1350,
            height: 900,
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
                    label: "Sentry(frontend only)",
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
                }
            ]
        });
    }, []);
    return (
        <div
            id="radar-2023-container"
            style={{ width: '100%', overflowX: 'auto', display: 'block', paddingBottom: 16 }}
        >
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <svg id="radar-2023" style={{ display: 'block' }}></svg>
            </div>
        </div>
    );
}

function TechRadar2025() {
    React.useEffect(() => {
        window.radar_visualization({
            svg_id: "radar-2025",
            date: 2025.01,
            width: 1350,
            height: 900,
            colors: {
                background: "#fff",
                grid: "#bbb",
                inactive: "#ddd"
            },
            title: "Tech radar 2025",
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
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Kotlin",
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "PHP",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Symfony",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Ktor",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Spring",
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Echo v4",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Gorm",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Go PGX",
                    quadrant: 0,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "React",
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "TypeScript",
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Javascript",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Hugo",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Astro",
                    quadrant: 0,
                    ring: 1,
                    moved: 1
                },
                {
                    label: "Redux",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Python",
                    quadrant: 0,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Task.dev",
                    quadrant: 0,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "Shell",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Make",
                    quadrant: 0,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "VictoriaMetrics",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Grafana",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Airflow",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Kubernetes",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Docker",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "AWS",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Terraform",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Helm",
                    quadrant: 1,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "ArgoCD",
                    quadrant: 1,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "PostgreSQL",
                    quadrant: 2,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Redis",
                    quadrant: 2,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Kafka",
                    quadrant: 2,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "ClickHouse",
                    quadrant: 2,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Elasticsearch",
                    quadrant: 2,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "MongoDB",
                    quadrant: 2,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "MySQL",
                    quadrant: 2,
                    ring: 3,
                    moved: -1
                },
                {
                    label: "Unit testing",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "TBD(trunk based development)",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Conventional commits",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Buf(gRPC)",
                    quadrant: 3,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "Buf(gRPC) registry",
                    quadrant: 3,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "golangci-lint",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "OpenApi",
                    quadrant: 3,
                    ring: 3,
                    moved: 0
                },
                {
                    label: "Jira",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Confluence",
                    quadrant: 3,
                    ring: 0,
                    moved: 0
                },
                {
                    label: "Github Copilot",
                    quadrant: 3,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "Blue-green deploy",
                    quadrant: 3,
                    ring: 0,
                    moved: 1
                },
                {
                    label: "GitOps",
                    quadrant: 3,
                    ring: 0,
                    moved: 1
                }
            ]
        });
    }, []);
    return (
        <div
            id="radar-2025-container"
            style={{ width: '100%', overflowX: 'auto', display: 'block', paddingBottom: 16 }}
        >
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <svg id="radar-2025" style={{ display: 'block' }}></svg>
            </div>
        </div>
    );
}

function CompetencyMatrix() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = [
        { 
            name: "Engineering culture", 
            score: 4,
            description: "Understanding of engineering principles, code quality standards, testing practices, and collaborative development workflows. Includes knowledge of agile methodologies, code reviews, and best practices for maintainable software."
        },
        { 
            name: "Architecture skills", 
            score: 3,
            description: "Ability to design scalable system architectures, make technical decisions, and understand trade-offs between different architectural patterns. Includes knowledge of microservices, monoliths, and distributed systems."
        },
        { 
            name: "Programming language", 
            score: 5,
            description: "Proficiency in programming languages, frameworks, and tools relevant to the role. Includes understanding of language-specific features, best practices, and ecosystem knowledge."
        },
        { 
            name: "Databases", 
            score: 3,
            description: "Knowledge of database design, query optimization, and data modeling. Includes understanding of SQL, NoSQL databases, and data access patterns."
        },
        { 
            name: "DevOps", 
            score: 3,
            description: "Understanding of CI/CD pipelines, infrastructure as code, monitoring, and deployment strategies. Includes knowledge of cloud platforms and containerization."
        },
        { 
            name: "Testing", 
            score: 5,
            description: "Expertise in testing methodologies including unit testing, integration testing, and automated testing. Includes understanding of test-driven development and quality assurance practices."
        }
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
            const angle = (i * 2 * Math.PI / numCategories) - Math.PI / 2;
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
            const angle = (i * 2 * Math.PI / numCategories) - Math.PI / 2;
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
        return points.map((point, index) => 
            `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
        ).join(' ') + ' Z';
    };

    // Create SVG path for data
    const createDataPath = (points) => {
        return points.map((point, index) => 
            `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
        ).join(' ') + ' Z';
    };

    // Generate grid lines (concentric hexagons)
    const gridLines = [];
    for (let i = 1; i <= maxScore; i++) {
        const gridRadius = (i / maxScore) * radius;
        const gridPoints = generateHexagonPoints(gridRadius);
        gridLines.push(gridPoints);
    }

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '20px' : '40px',
            alignItems: isMobile ? 'center' : 'flex-start'
        }}>
            {/* Competency Matrix */}
            <div style={{ 
                textAlign: 'center',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '16px',
                padding: isMobile ? '20px' : '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '600px'
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
                    margin: isMobile ? '0 0 20px 0' : '0 0 30px 0',
                    fontSize: isMobile ? '24px' : '28px',
                    fontWeight: '700',
                    color: '#0f172a',
                    textAlign: 'center',
                    letterSpacing: '-0.02em'
                }}>
                    Competency Matrix
                </h3>
                
                <div style={{
                    width: '100%',
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }}>
                    <svg width="600" height="600" style={{ 
                        display: 'block', 
                        margin: '0 auto',
                        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.06))',
                        minWidth: '600px'
                    }}>
                        <defs>
                            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#5ba300" stopOpacity="0.15"/>
                                <stop offset="100%" stopColor="#4a7c59" stopOpacity="0.25"/>
                            </linearGradient>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.6"/>
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
                            const angle = (index * 2 * Math.PI / numCategories) - Math.PI / 2;
                            const labelRadius = radius + 90;
                            const labelX = centerX + labelRadius * Math.cos(angle);
                            const labelY = centerY + labelRadius * Math.sin(angle);
                            
                            return (
                                <g key={`label-${index}`} style={{ cursor: 'pointer' }}>
                                    <rect
                                        x={labelX - 70}
                                        y={labelY - 15}
                                        width="140"
                                        height="30"
                                        rx="15"
                                        fill="rgba(255, 255, 255, 0.95)"
                                        stroke="#e2e8f0"
                                        strokeWidth="1"
                                        style={{ transition: 'all 0.15s ease' }}
                                        onMouseEnter={(e) => {
                                            e.target.style.fill = 'rgba(91, 163, 0, 0.08)';
                                            e.target.style.stroke = '#5ba300';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(91, 163, 0, 0.04)';
                                                categoryDetails.style.borderColor = '#5ba300';
                                                categoryDetails.style.padding = '16px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '100px';
                                                    description.style.opacity = '1';
                                                    description.style.marginTop = '8px';
                                                }
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.fill = 'rgba(255, 255, 255, 0.95)';
                                            e.target.style.stroke = '#e2e8f0';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(255, 255, 255, 0.9)';
                                                categoryDetails.style.borderColor = '#e2e8f0';
                                                categoryDetails.style.padding = '12px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '0';
                                                    description.style.opacity = '0';
                                                    description.style.marginTop = '0';
                                                }
                                            }
                                        }}
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
                                            fontFamily: 'Inter, sans-serif',
                                            transition: 'all 0.15s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.fill = '#5ba300';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(91, 163, 0, 0.04)';
                                                categoryDetails.style.borderColor = '#5ba300';
                                                categoryDetails.style.padding = '16px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '100px';
                                                    description.style.opacity = '1';
                                                    description.style.marginTop = '8px';
                                                }
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.fill = '#334155';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(255, 255, 255, 0.9)';
                                                categoryDetails.style.borderColor = '#e2e8f0';
                                                categoryDetails.style.padding = '12px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '0';
                                                    description.style.opacity = '0';
                                                    description.style.marginTop = '0';
                                                }
                                            }
                                        }}
                                    >
                                        {categories[index].name}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Score labels */}
                        {hexagonPoints.map((point, index) => {
                            const scoreRadius = (categories[index].score / maxScore) * radius;
                            const scoreX = centerX + scoreRadius * Math.cos((index * 2 * Math.PI / numCategories) - Math.PI / 2);
                            const scoreY = centerY + scoreRadius * Math.sin((index * 2 * Math.PI / numCategories) - Math.PI / 2);
                            
                            return (
                                <g key={`score-${index}`} style={{ cursor: 'pointer' }}>
                                    <circle
                                        cx={scoreX}
                                        cy={scoreY}
                                        r="14"
                                        fill="white"
                                        stroke="#5ba300"
                                        strokeWidth="2.5"
                                        style={{ transition: 'all 0.15s ease' }}
                                        onMouseEnter={(e) => {
                                            e.target.style.r = '16';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(91, 163, 0, 0.04)';
                                                categoryDetails.style.borderColor = '#5ba300';
                                                categoryDetails.style.padding = '16px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '100px';
                                                    description.style.opacity = '1';
                                                    description.style.marginTop = '8px';
                                                }
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.r = '14';
                                            
                                            const categoryDetails = document.getElementById(`category-${index}`);
                                            if (categoryDetails) {
                                                categoryDetails.style.background = 'rgba(255, 255, 255, 0.9)';
                                                categoryDetails.style.borderColor = '#e2e8f0';
                                                categoryDetails.style.padding = '12px';
                                                
                                                const description = document.getElementById(`description-${index}`);
                                                if (description) {
                                                    description.style.maxHeight = '0';
                                                    description.style.opacity = '0';
                                                    description.style.marginTop = '0';
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
                                            fontFamily: 'Inter, sans-serif',
                                            transition: 'all 0.15s ease'
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
                            <g key={`point-${index}`} style={{ cursor: 'pointer' }}>
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="7"
                                    fill="#5ba300"
                                    stroke="white"
                                    strokeWidth="2.5"
                                    style={{ transition: 'all 0.15s ease' }}
                                    onMouseEnter={(e) => {
                                        e.target.style.r = '9';
                                        
                                        const categoryDetails = document.getElementById(`category-${index}`);
                                        if (categoryDetails) {
                                            categoryDetails.style.background = 'rgba(91, 163, 0, 0.04)';
                                            categoryDetails.style.borderColor = '#5ba300';
                                            categoryDetails.style.padding = '16px';
                                            
                                            const description = document.getElementById(`description-${index}`);
                                            if (description) {
                                                description.style.maxHeight = '100px';
                                                description.style.opacity = '1';
                                                description.style.marginTop = '8px';
                                            }
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.r = '7';
                                        
                                        const categoryDetails = document.getElementById(`category-${index}`);
                                        if (categoryDetails) {
                                            categoryDetails.style.background = 'rgba(255, 255, 255, 0.9)';
                                            categoryDetails.style.borderColor = '#e2e8f0';
                                            categoryDetails.style.padding = '12px';
                                            
                                            const description = document.getElementById(`description-${index}`);
                                            if (description) {
                                                description.style.maxHeight = '0';
                                                description.style.opacity = '0';
                                                description.style.marginTop = '0';
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
            <div style={{
                width: isMobile ? '100%' : '380px',
                maxWidth: isMobile ? '600px' : '380px',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '16px',
                padding: isMobile ? '20px' : '30px',
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
                    margin: isMobile ? '0 0 20px 0' : '0 0 25px 0',
                    fontSize: isMobile ? '20px' : '24px',
                    fontWeight: '700',
                    color: '#0f172a',
                    textAlign: 'center',
                    letterSpacing: '-0.02em'
                }}>
                    Category Details
                </h3>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '12px' : '14px',
                    maxHeight: isMobile ? '400px' : 'none',
                    overflowY: isMobile ? 'auto' : 'visible'
                }}>
                    {categories.map((category, index) => (
                        <div
                            key={`category-${index}`}
                            id={`category-${index}`}
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: isMobile ? '16px' : '12px',
                                transition: 'all 0.15s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(91, 163, 0, 0.04)';
                                e.currentTarget.style.borderColor = '#5ba300';
                                e.currentTarget.style.padding = '16px';
                                
                                const description = document.getElementById(`description-${index}`);
                                if (description) {
                                    description.style.maxHeight = '100px';
                                    description.style.opacity = '1';
                                    description.style.marginTop = '8px';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.padding = isMobile ? '16px' : '12px';
                                
                                const description = document.getElementById(`description-${index}`);
                                if (description) {
                                    description.style.maxHeight = '0';
                                    description.style.opacity = '0';
                                    description.style.marginTop = '0';
                                }
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: isMobile ? '8px' : '0'
                            }}>
                                <h4 style={{
                                    margin: '0',
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: '#0f172a'
                                }}>
                                    {category.name}
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    <span style={{
                                        fontSize: isMobile ? '18px' : '20px',
                                        fontWeight: '700',
                                        color: '#5ba300'
                                    }}>
                                        {category.score}
                                    </span>
                                    <span style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        color: '#64748b',
                                        fontWeight: '500'
                                    }}>
                                        /5
                                    </span>
                                </div>
                            </div>
                            
                            <div
                                id={`description-${index}`}
                                style={{
                                    maxHeight: '0',
                                    opacity: '0',
                                    marginTop: '0',
                                    transition: 'all 0.15s ease',
                                    overflow: 'hidden'
                                }}
                            >
                                <p style={{
                                    margin: '0',
                                    fontSize: isMobile ? '12px' : '13px',
                                    lineHeight: '1.5',
                                    color: '#475569'
                                }}>
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div style={{
                    marginTop: '25px',
                    padding: '14px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0'
                }}>
                    <p style={{
                        margin: '0',
                        fontSize: '12px',
                        color: '#64748b',
                        textAlign: 'center',
                        fontWeight: '500'
                    }}>
                        Hover over hexagon elements or category cards to expand details
                    </p>
                </div>
            </div>
        </div>
    );
}

function InterviewGuide() {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    
    const books = [
        {
            title: "Software Engineering at Google",
            authors: "Titus Winters, Tom Manshreck & Hyrum Wright",
            description: "Comprehensive guide to software engineering practices at Google scale",
            cover: "/covers/software-engineering-at-google.jpg"
        },
        {
            title: "Accelerate: The Science of Lean Software and DevOps",
            authors: "Nicole Forsgren PhD, Jez Humble & Gene Kim",
            description: "Research-based insights into high-performing software teams",
            cover: "/covers/accelerate-the-science-of-lean-software-and-devops.jpg"
        },
        {
            title: "Designing Data-Intensive Applications",
            authors: "Martin Kleppmann",
            description: "Essential guide for building scalable data systems",
            cover: "/covers/designing-data-intensive-applications.jpg"
        },
        {
            title: "Software Architecture: The Hard Parts",
            authors: "Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani",
            description: "Practical approaches to complex architectural decisions",
            cover: "/covers/software-architecture-the-hard-parts.jpg"
        },
        {
            title: "Thinking in Systems: A Primer",
            authors: "Donella H. Meadows",
            description: "Understanding complex systems and their behavior",
            cover: "/covers/thinking-in-systems-a-primer.jpg"
        },
        {
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            authors: "Robert Martin",
            description: "Principles for creating maintainable software architecture",
            cover: "/covers/clean-architecture-a-craftsman-guide-to-software-structure-and-design.jpg"
        },
        {
            title: "The Phoenix Project",
            authors: "Gene Kim, Kevin Behr & George Spafford",
            description: "Novel about DevOps transformation and IT management",
            cover: "/covers/the-phoenix-project.jpg"
        },
        {
            title: "SRE by Google",
            authors: "Google",
            description: "Site Reliability Engineering practices and principles",
            cover: "/covers/sre-by-google.jpg"
        }
    ];

    const nextBook = () => {
        setCurrentBookIndex((prev) => (prev + 1) % books.length);
    };

    const prevBook = () => {
        setCurrentBookIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    return (
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '10px' }}>
            <h1 className="section-title" style={{ textAlign: 'center', marginBottom: 30, fontSize: '1.8rem' }}>Interview Guide</h1>

            {/* About Solidgate Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>About Solidgate</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#444', marginBottom: '15px' }}>
                    Solidgate is a payment processing and orchestration platform helping thousands of businesses to accept payments online. We enable businesses to accept payments globally through a unified API, supporting multiple payment methods, currencies, and compliance requirements. Our client base encompasses various industries and countries, working with both local merchants and multinational corporations. They do business while we do payments for their businesses.
                </p>
                
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#444', marginBottom: '15px' }}>
                    At Solidgate, we work with <strong>engineers</strong>, not just developers. Solidgate engineers don't maintain systems — they design them. We build the architecture behind seamless global payments, trusted by 150+ digital leaders. They take a holistic approach to problem-solving, designing systems with scalability, security, and business impact in mind. They understand the entire system lifecycle and make architectural decisions that drive business value.
                </p>

                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#444' }}>
                    We embrace DevOps principles with continuous integration/deployment, infrastructure as code (Terraform, AWS Fargate), comprehensive monitoring (Grafana, VictoriaMetrics, Loki), and site reliability engineering. Our technology stack includes Go, Kotlin, Python, React, TypeScript, PostgreSQL, Redis, and AWS cloud infrastructure.
                </p>
            </section>

            {/* Competency Matrix Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Expected Competency Matrix</h2>
                <p style={{ color: '#444', marginBottom: 20, fontSize: '0.95rem' }}>
                    This matrix represents the expected competency levels for our engineering roles. 
                    Each category is scored from 0 to 5, where 5 represents maximum competency.
                </p>
                <CompetencyMatrix />
            </section>

            {/* Tech Interview Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Tech Interview</h2>
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600, fontSize: '1.1rem' }}>Introduction</h3>
                    <p style={{ color: '#444', fontSize: '0.95rem' }}>
                        Our technical interview process is designed to assess both your technical skills and cultural fit. We believe in creating a collaborative environment where candidates can showcase their best work.
                    </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600, fontSize: '1.1rem' }}>Soft Skills Assessment</h3>
                    <p style={{ color: '#444', fontSize: '0.95rem' }}>
                        We evaluate communication skills, problem-solving approach, teamwork, and how you handle challenges. Be prepared to discuss your previous projects, challenges you've faced, and how you've grown as a developer.
                    </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600, fontSize: '1.1rem' }}>Hard Skills Assessment</h3>
                    <p style={{ color: '#444', fontSize: '0.95rem' }}>
                        Technical evaluation includes coding exercises, system design discussions, and knowledge of relevant technologies. We focus on practical problem-solving rather than memorization.
                    </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600, fontSize: '1.1rem' }}>Architecture Interview (Optional)</h3>
                    <p style={{ color: '#444', fontSize: '0.95rem' }}>
                        For senior positions, we may conduct an additional architecture-focused interview. This includes discussions about system design, scalability, and architectural decision-making processes.
                    </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600, fontSize: '1.1rem' }}>Test Task Discussion</h3>
                    <p style={{ color: '#444', fontSize: '0.95rem' }}>
                        After completing the test task, we'll have a detailed discussion about your solution. Be prepared to explain your design decisions, discuss potential improvements, and identify areas that could be enhanced or were missing from your implementation.
                    </p>
                </div>
            </section>

            {/* Language-Specific Requirements Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Language-Specific Requirements</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    <LanguageBlock 
                        language="Go"
                        logo="/covers/go-logo.svg"
                        requirements={[
                            "Strong understanding of Go concurrency patterns (goroutines, channels)",
                            "Experience with Go modules and dependency management",
                            "Knowledge of Go testing frameworks and best practices",
                            "Understanding of Go performance optimization",
                            "Experience with popular Go frameworks (Gin, Echo, Fiber)"
                        ]}
                        questions={[
                            "What is Go and why was it created? Explain its design philosophy and how it addresses common programming challenges.",
                            "What is a slice in Go? How does it differ from arrays, and what are the implications for memory management?",
                            "Explain Go's concurrency model. How do goroutines and channels work together, and what are the best practices for avoiding race conditions?"
                        ]}
                    />
                    <LanguageBlock 
                        language="Kotlin"
                        logo="/covers/kotlin-logo.svg"
                        requirements={[
                            "Proficiency in Kotlin syntax and language features",
                            "Experience with Spring Boot and Kotlin integration",
                            "Understanding of Kotlin coroutines and async programming",
                            "Knowledge of Kotlin testing frameworks (JUnit, MockK)",
                            "Experience with Kotlin DSL and build tools"
                        ]}
                        questions={[
                            "What is the significance of data classes in Kotlin? How do they improve code quality and reduce boilerplate compared to Java?",
                            "How does Kotlin ensure type safety? Explain the null safety system and how it prevents common runtime errors.",
                            "What are the advantages of using Kotlin over Java? Discuss interoperability, syntax improvements, and modern language features."
                        ]}
                    />
                    <LanguageBlock 
                        language="Node.js"
                        logo="/covers/nodejs-logo.svg"
                        requirements={[
                            "Strong JavaScript/TypeScript fundamentals",
                            "Experience with Express.js or Fastify frameworks",
                            "Understanding of Node.js event loop and async patterns",
                            "Knowledge of npm/yarn package management",
                            "Experience with Node.js testing (Jest, Mocha)"
                        ]}
                        questions={[
                            "What tasks is Node.js good for? Which projects would you NOT use it for? Explain the trade-offs and use cases.",
                            "Explain in detail how the Event Loop works in Node.js. How can you use it effectively and what are common pitfalls?",
                            "How can you handle a large task consisting of small subtasks without blocking the event loop? Discuss strategies and best practices."
                        ]}
                    />
                    <LanguageBlock 
                        language="Python"
                        logo="/covers/python-logo.svg"
                        requirements={[
                            "Strong Python fundamentals and best practices",
                            "Experience with web frameworks (Django, Flask, FastAPI)",
                            "Understanding of Python async programming (asyncio)",
                            "Knowledge of Python testing (pytest, unittest)",
                            "Experience with data processing libraries (pandas, numpy)"
                        ]}
                        questions={[
                            "How do you implement graceful shutdown in Python? Discuss signal handling, cleanup procedures, and best practices for production systems.",
                            "Explain the Global Interpreter Lock (GIL). Is it bad? What are its implications for multithreading vs multiprocessing?",
                            "Concurrency vs Parallelism in Python: what does Python provide? In which cases should you use threading, multiprocessing, or asyncio?"
                        ]}
                    />
                </div>
            </section>

            {/* Recommendations Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Our Engineers on Media</h2>
                <div style={{ display: 'grid', gap: 15, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    <a href="https://dou.ua/forums/topic/54148" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="media-block">
                            <h4 style={{ color: '#181A20', marginBottom: 8, fontSize: '0.95rem' }}>Чи варто деплоїтись у п'ятницю</h4>
                            <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 13 }}>Сергій Сафонов, Tech Lead</p>
                        </div>
                    </a>
                    <a href="https://dou.ua/forums/topic/50318/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="media-block">
                            <h4 style={{ color: '#181A20', marginBottom: 8, fontSize: '0.95rem' }}>$10.000 за хвилину даунтайму: архітектура, черги та стрімінг у фінтех</h4>
                            <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 13 }}>Макс Багінський, Head of Engineering</p>
                        </div>
                    </a>
                    <a href="https://dou.ua/forums/topic/53604" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="media-block">
                            <h4 style={{ color: '#181A20', marginBottom: 8, fontSize: '0.95rem' }}>Як стати джуном, якого найматимуть</h4>
                            <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 13 }}>Владислав Павленко, Go Engineer</p>
                        </div>
                    </a>
                    <a href="https://dou.ua/forums/topic/51033/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className="media-block">
                            <h4 style={{ color: '#181A20', marginBottom: 8, fontSize: '0.95rem' }}>Як ми розпилювали моноліт. Наш досвід переходу до мікросервісів</h4>
                            <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 13 }}>Сергій Сафонов, Tech Lead</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Books Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Books We Love and Recommend 💚</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
                    <button 
                        onClick={prevBook} 
                        style={{ 
                            minWidth: 50, 
                            minHeight: 50, 
                            fontSize: 24, 
                            borderRadius: 8,
                            background: 'linear-gradient(135deg, #5ba300 0%, #489000 100%)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(91, 163, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.boxShadow = '0 6px 20px rgba(91, 163, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(91, 163, 0, 0.3)';
                        }}
                    >
                        ‹
                    </button>
                    <div style={{ flex: 1, textAlign: 'center', maxWidth: 500, minWidth: 280 }}>
                        <div style={{ 
                            background: '#f7f8fa', 
                            borderRadius: 16, 
                            padding: 20, 
                            minHeight: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 15,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ flex: '0 0 120px' }}>
                                <img 
                                    src={books[currentBookIndex].cover} 
                                    alt={`${books[currentBookIndex].title} cover`}
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        borderRadius: 8,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div style={{ flex: 1, textAlign: 'center' }}>
                                <h3 style={{ color: '#181A20', marginBottom: 8, fontSize: '1.1rem' }}>{books[currentBookIndex].title}</h3>
                                <p style={{ color: '#5ba300', fontStyle: 'italic', marginBottom: 12, fontSize: '0.9rem' }}>by {books[currentBookIndex].authors}</p>
                                <p style={{ color: '#444', lineHeight: '1.5', fontSize: '0.85rem' }}>{books[currentBookIndex].description}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: 15, color: '#888', fontSize: 14, fontWeight: 500 }}>{currentBookIndex + 1} of {books.length}</div>
                    </div>
                    <button 
                        onClick={nextBook} 
                        style={{ 
                            minWidth: 50, 
                            minHeight: 50, 
                            fontSize: 24, 
                            borderRadius: 8,
                            background: 'linear-gradient(135deg, #5ba300 0%, #489000 100%)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(91, 163, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.boxShadow = '0 6px 20px rgba(91, 163, 0, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(91, 163, 0, 0.3)';
                        }}
                    >
                        ›
                    </button>
                </div>
            </section>

            {/* Quote Section */}
            <section className="card" style={{ background: '#f7f8fa', textAlign: 'center' }}>
                <blockquote style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#181A20',
                    letterSpacing: '-0.5px',
                }}>
                    We don't work on tasks we deliver high-quality product for our customers, so in Solidgate we highly value DevOps and Lean approaches
                </blockquote>
            </section>
        </div>
    );
}
    
function App() {
    const [hash, setHash] = useState(window.location.hash || "#home");

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash || "#home");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return (
        <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
            {/* Navigation Bar */}
            <nav style={{
                width: '100%',
                background: '#fff',
                borderBottom: '1px solid #e5e7eb',
                padding: '12px 0',
                marginBottom: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 32,
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <img src="logo_m.png" alt="solidgate logo" style={{ maxWidth: 120, width: 'auto', height: 'auto' }} />
                <a
                    href="#home"
                    style={{
                        color: hash === "#home" ? '#5ba300' : '#181A20',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '4px 12px',
                        borderRadius: 6,
                        background: hash === "#home" ? '#f7f8fa' : 'transparent',
                        transition: 'background 0.2s'
                    }}
                >
                    Tech Radar
                </a>
                <a
                    href="#interview"
                    style={{
                        color: hash === "#interview" ? '#5ba300' : '#181A20',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '4px 12px',
                        borderRadius: 6,
                        background: hash === "#interview" ? '#f7f8fa' : 'transparent',
                        transition: 'background 0.2s'
                    }}
                >
                    Interview Guide
                </a>
            </nav>

            {/* Page Content */}
            {hash === "#interview" ? (
                <InterviewGuide />
            ) : (
                <>
                    {/* TechRadar Section ONLY */}
                    <section className="card">
                        <div style={{ width: '100%', overflowX: 'auto', margin: '0 auto', padding: '0 40px' }}>
                            <div id="radar-description" style={{ marginBottom: 20 }}>
                                <p><div id="hold" style={{ display: 'inline-block', background: '#e09b96', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 600, marginRight: 8 }}>Hold</div> — in this category, we have expertise, but the mentioned tools are used only to support existing systems — new projects are not launched on them.</p>
                                <p><div id="assess" style={{ display: 'inline-block', background: '#c7ba00', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 600, marginRight: 8 }}>Assess</div> — trial technologies and tools that are currently being evaluated. They are only used for test projects and are not used for real tasks.</p>
                                <p><div id="trial" style={{ display: 'inline-block', background: '#009eb0', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 600, marginRight: 8 }}>Trial</div> — technologies and tools that have already passed the testing phase and are preparing to work in production (or are even already working there).</p>
                                <p><div id="adopt" style={{ display: 'inline-block', background: '#5ba300', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 600, marginRight: 8 }}>Adopt</div> — technologies and tools that are implemented and actively used by teams. Technologies in which Solidgate has expertise.</p>
                            </div>
                        </div>
                        <div style={{ width: '100%', overflowX: 'auto', margin: '32px auto', padding: '0 40px' }}>
                            <TechRadarTabs />
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

function Footer() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            gap: '8px'
        }}>
            <div style={{ fontWeight: 500 }}>Made by backend developer for developers! With love 💚!</div>
            <div><a href="https://jobs.dou.ua/companies/solidgate/vacancies/" style={{ color: '#5ba300', textDecoration: 'none', fontWeight: 500 }}>Solidgate is hiring!</a></div>
        </div>
    );
}

function TechRadarTabs() {
    const [selected, setSelected] = useState("2025");
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 10, width: '100%', maxWidth: 400 }}>
                <button
                    onClick={() => setSelected("2023")}
                    style={{
                        padding: '10px 20px',
                        background: selected === "2023" ? '#5ba300' : '#eee',
                        color: selected === "2023" ? '#fff' : '#333',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: 16,
                        minWidth: 80
                    }}
                >
                    2023
                </button>
                <button
                    onClick={() => setSelected("2025")}
                    style={{
                        padding: '10px 20px',
                        background: selected === "2025" ? '#5ba300' : '#eee',
                        color: selected === "2025" ? '#fff' : '#333',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: 16,
                        minWidth: 80
                    }}
                >
                    2025
                </button>
            </div>
            {selected === "2023" ? <MemoisedTechRadar2023 key="2023" /> : <MemoisedTechRadar2025 key="2025" />}
        </div>
    );
}

export const MemoisedTechRadarTabs = React.memo(TechRadarTabs);
export const MemoisedTechRadar2023 = React.memo(TechRadar2023);
export const MemoisedTechRadar2025 = React.memo(TechRadar2025);
export const MemoisedFooter = React.memo(Footer);
export const MemoisedApp = React.memo(App);
