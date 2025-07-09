import React, { useState } from "react";

function TechRadar2023() {
    React.useEffect(() => {
        window.radar_visualization({
            svg_id: "radar-2023",
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
            id="radar-2023-container"
            style={{ width: '100%', minWidth: 350, overflowX: 'auto', display: 'block', paddingBottom: 16 }}
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
            width: 1450,
            height: 1000,
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
            style={{ width: '100%', minWidth: 350, overflowX: 'auto', display: 'block', paddingBottom: 16 }}
        >
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <svg id="radar-2025" style={{ display: 'block' }}></svg>
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
            description: "Comprehensive guide to software engineering practices at Google scale"
        },
        {
            title: "Accelerate: The Science of Lean Software and DevOps",
            authors: "Nicole Forsgren PhD, Jez Humble & Gene Kim",
            description: "Research-based insights into high-performing software teams"
        },
        {
            title: "Designing Data-Intensive Applications",
            authors: "Martin Kleppmann",
            description: "Essential guide for building scalable data systems"
        },
        {
            title: "Software Architecture: The Hard Parts",
            authors: "Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani",
            description: "Practical approaches to complex architectural decisions"
        },
        {
            title: "Thinking in Systems: A Primer",
            authors: "Donella H. Meadows",
            description: "Understanding complex systems and their behavior"
        },
        {
            title: "AWS Solutions Architect Course",
            authors: "AWS",
            description: "Comprehensive cloud architecture training"
        },
        {
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            authors: "Robert Martin",
            description: "Principles for creating maintainable software architecture"
        },
        {
            title: "The Phoenix Project",
            authors: "Gene Kim, Kevin Behr & George Spafford",
            description: "Novel about DevOps transformation and IT management"
        },
        {
            title: "SRE by Google",
            authors: "Google",
            description: "Site Reliability Engineering practices and principles"
        },
        {
            title: "Martin Fowler's Practical Testing Pyramid",
            authors: "Martin Fowler",
            description: "Testing strategy for balanced test coverage"
        },
        {
            title: "Testing Pyramids",
            authors: "Various",
            description: "Comprehensive testing strategies and methodologies"
        }
    ];

    const nextBook = () => {
        setCurrentBookIndex((prev) => (prev + 1) % books.length);
    };

    const prevBook = () => {
        setCurrentBookIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    return (
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
            <h1 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>Interview Guide</h1>

            {/* About Solidgate Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>About Solidgate</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                    Solidgate is a fintech company that specializes in payment processing solutions. We focus on delivering high-quality products for our customers rather than just completing tasks. Our engineering culture emphasizes DevOps practices, Lean methodologies, and continuous improvement.
                </p>
            </section>

            {/* Tech Interview Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Tech Interview</h2>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600 }}>Introduction</h3>
                    <p style={{ color: '#444' }}>
                        Our technical interview process is designed to assess both your technical skills and cultural fit. We believe in creating a collaborative environment where candidates can showcase their best work.
                    </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600 }}>Soft Skills Assessment</h3>
                    <p style={{ color: '#444' }}>
                        We evaluate communication skills, problem-solving approach, teamwork, and how you handle challenges. Be prepared to discuss your previous projects, challenges you've faced, and how you've grown as a developer.
                    </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#5ba300', fontWeight: 600 }}>Hard Skills Assessment</h3>
                    <p style={{ color: '#444' }}>
                        Technical evaluation includes coding exercises, system design discussions, and knowledge of relevant technologies. We focus on practical problem-solving rather than memorization.
                    </p>
                </div>
            </section>

            {/* Architecture Interview Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Architecture Interview (Optional)</h2>
                <p style={{ color: '#444' }}>
                    For senior positions, we may conduct an additional architecture-focused interview. This includes discussions about system design, scalability, and architectural decision-making processes.
                </p>
            </section>

            {/* Recommendations Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Our Media & Recommendations</h2>
                <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                    <div style={{ background: '#f7f8fa', borderRadius: 12, padding: 20 }}>
                        <h4 style={{ color: '#181A20', marginBottom: 8 }}>Чи варто деплоїтись у п'ятницю</h4>
                        <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 14 }}>Сергій Сафонов, Tech Lead</p>
                    </div>
                    <div style={{ background: '#f7f8fa', borderRadius: 12, padding: 20 }}>
                        <h4 style={{ color: '#181A20', marginBottom: 8 }}>$10.000 за хвилину даунтайму: архітектура, черги та стрімінг у фінтех</h4>
                        <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 14 }}>Макс Багінський, Head of Engineering</p>
                    </div>
                    <div style={{ background: '#f7f8fa', borderRadius: 12, padding: 20 }}>
                        <h4 style={{ color: '#181A20', marginBottom: 8 }}>Як стати джуном, якого найматимуть</h4>
                        <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 14 }}>Владислав Павленко, Go Engineer</p>
                    </div>
                    <div style={{ background: '#f7f8fa', borderRadius: 12, padding: 20 }}>
                        <h4 style={{ color: '#181A20', marginBottom: 8 }}>Як ми розпилювали моноліт. Наш досвід переходу до мікросервісів</h4>
                        <p style={{ color: '#5ba300', fontWeight: 500, fontSize: 14 }}>Сергій Сафонов, Tech Lead</p>
                    </div>
                </div>
            </section>

            {/* Books Section */}
            <section className="card">
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Books We Love</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                    <button className="button" onClick={prevBook} style={{ minWidth: 48, minHeight: 48, fontSize: 20 }}>&lsaquo;</button>
                    <div style={{ flex: 1, textAlign: 'center', maxWidth: 400 }}>
                        <div style={{ background: '#f7f8fa', borderRadius: 12, padding: 32, minHeight: 180 }}>
                            <h3 style={{ color: '#181A20', marginBottom: 10 }}>{books[currentBookIndex].title}</h3>
                            <p style={{ color: '#5ba300', fontStyle: 'italic', marginBottom: 16 }}>by {books[currentBookIndex].authors}</p>
                            <p style={{ color: '#444' }}>{books[currentBookIndex].description}</p>
                        </div>
                        <div style={{ marginTop: 12, color: '#888', fontSize: 14 }}>{currentBookIndex + 1} of {books.length}</div>
                    </div>
                    <button className="button" onClick={nextBook} style={{ minWidth: 48, minHeight: 48, fontSize: 20 }}>&rsaquo;</button>
                </div>
            </section>

            {/* Quote Section */}
            <section className="card" style={{ background: '#f7f8fa', textAlign: 'center' }}>
                <blockquote style={{
                    margin: 0,
                    fontSize: '1.3rem',
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
    const [currentPage, setCurrentPage] = useState("radar");
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Navigation */}
            <div style={{ width: '100%', background: '#fff', borderBottom: '1px solid #e5e7eb', marginBottom: 32 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: 16 }}>
                    <button
                        className="button"
                        style={{ background: currentPage === "radar" ? '#5ba300' : '#f7f8fa', color: currentPage === "radar" ? '#fff' : '#181A20', border: currentPage === "radar" ? 'none' : '1px solid #e5e7eb' }}
                        onClick={() => setCurrentPage("radar")}
                    >
                        Tech Radar
                    </button>
                    <button
                        className="button"
                        style={{ background: currentPage === "interview" ? '#5ba300' : '#f7f8fa', color: currentPage === "interview" ? '#fff' : '#181A20', border: currentPage === "interview" ? 'none' : '1px solid #e5e7eb' }}
                        onClick={() => setCurrentPage("interview")}
                    >
                        Interview Guide
                    </button>
                </div>
            </div>
            {currentPage === "radar" ? (
                <>
            <div style={{ width: '100%', minWidth: 350, overflowX: 'auto', margin: '0 auto' }}>
                <div className="App App-flex-header" style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                    <img id="logo" src="logo_m.png" alt="solidgate logo" style={{ maxWidth: 300, width: '100%', height: 'auto' }} />
                    <div id="radar-description">
                        <p><div id="hold">Hold</div> — in this category, we have expertise, but the mentioned tools are used only to support existing systems — new projects are not launched on them.</p>
                        <p><div id="assess">Assess</div> — trial technologies and tools that are currently being evaluated. They are only used for test projects and are not used for real tasks.</p>
                        <p><div id="trial">Trial</div> — technologies and tools that have already passed the testing phase and are preparing to work in production (or are even already working there).</p>
                        <p><div id="adopt">Adopt</div> — technologies and tools that are implemented and actively used by teams. Technologies in which Solidgate has expertise.</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', minWidth: 350, overflowX: 'auto', margin: '32px auto' }}>
                <MemoisedTechRadarTabs />
            </div>
                </>
            ) : (
                <InterviewGuide />
            )}
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
