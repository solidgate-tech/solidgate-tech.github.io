import './App.css';

function App() {
    window.radar_visualization({
        svg_id: "radar",
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
                label: "React",
                quadrant: 0,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
                moved: 0             // -1 = moved out (triangle pointing down)
                //  0 = not moved (circle)
                //  1 = moved in  (triangle pointing up)
            },
            {
                label: "Typescript",
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
                label: "Terraform",
                quadrant: 1,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 1,              // 0,1,2,3 (starting from inside)
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
                label: "Kafka",
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
                label: "Memcashed",
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
                label: "Scrum",
                quadrant: 3,          // 0,1,2,3 (counting clockwise, starting from bottom right)
                ring: 0,              // 0,1,2,3 (starting from inside)
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
        ]
    });

    return (
        <div className="App">
            <img src="logo_m.png" alt="solidgate logo" />
            <svg id="radar"></svg>
            <div>Made by developers and for developers! With love 💚!</div>
            <div><a href="https://jobs.dou.ua/companies/solidgate/vacancies/">Solidgate is hiring!</a></div>
        </div>
    );
}

export default App;
