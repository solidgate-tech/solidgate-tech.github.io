import React from "react";
function TechRadar() {
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
        title: "Tech radar",
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
                label: "Redux",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
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
                label: "AWS(Fargate, Aurora, ECS)",
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
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Yarn",
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
                label: "Amazon MSK(Apache Kafka)",
                quadrant: 2,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
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
                ring: 3,              // 0,1,2,3 (starting from inside)
                moved: -1             // -1 = moved out (triangle pointing down)
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
                label: "Elastic",
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
                label: "GRPC",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
                moved: 1             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Buf",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
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
        ]
    })

    return (
        <div className="App">
            <img src="logo_m.png" alt="solidgate logo" />
            <br/>
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

export const MemoisedTechRadar = React.memo(TechRadar);
export const MemoisedFooter = React.memo(Footer);
