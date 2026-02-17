import { useState } from 'react';
import './ProjectsPage.css';

const PROJECTS = [
    {
        name: 'InsightDashboard',
        type: 'Full Stack',
        hue: 210,
        tech: 'MERN, PostgreSQL, REST API, Docker, Kubernetes, CI/CD',
        link: 'https://github.com/username/insightdashboard',
        subtitle: 'AI-Powered Analytics Dashboard',
        overview: 'A full-stack analytics platform that transforms raw data into actionable insights using AI and natural language processing.',
        details: [
            'Developed an AI-powered analytics dashboard reducing manual data analysis by 70% through automated data visualization and insights.',
            'Integrated GPT-4 for natural language queries, enabling 90% accurate auto-generated SQL responses and predictive analytics.',
            'Built interactive charts and graphs with real-time data streaming via WebSockets for live dashboard updates.',
            'Designed a role-based access control system with JWT authentication and OAuth2 integration.',
            'Boosted release efficiency by 60% using containerized microservices orchestrated with Docker, Kubernetes, and automated CI/CD pipelines.',
        ],
    },
    {
        name: 'Argus',
        type: 'Cybersecurity',
        hue: 145,
        tech: 'Python, Flask, React.js, Shodan API, AWS',
        link: 'https://github.com/username/argus',
        subtitle: 'Digital Footprint Scanner Tool',
        overview: 'An automated cybersecurity tool that scans and assesses an organization\'s public digital assets for risk exposure and vulnerabilities.',
        details: [
            'Built an automated scanner to assess public digital assets — subdomains, ports, DNS records, and cloud configurations — for risk exposure.',
            'Designed and implemented a scoring model for SSL, SPF/DKIM, and subdomain takeover vulnerabilities to prioritize threat mitigation.',
            'Integrated Shodan API for passive reconnaissance and real-time threat intelligence gathering.',
            'Deployed interactive dashboards with exportable PDF reports, enabling SMBs to monitor external attack surface risks.',
            'Hosted on AWS with auto-scaling EC2 instances and S3 for secure report storage.',
        ],
    },
    {
        name: 'RateMyPG',
        type: 'Web Platform',
        hue: 25,
        tech: 'Node.js, PostgreSQL, Redis, Docker, Google Maps API',
        link: 'https://github.com/username/ratemypg',
        subtitle: 'PG/Hostel Rating & Discovery Platform',
        overview: 'A location-based platform for students to rate, review, and discover verified PGs and hostels across India with smart recommendations.',
        details: [
            'Developed a location-based platform for rating and discovering verified PGs/hostels across India with sentiment-driven rankings.',
            'Built a smart recommendation engine using budget, safety, proximity, and food preferences to match students with ideal housing.',
            'Integrated Google Maps API for interactive location browsing and proximity-based search.',
            'Implemented secure authentication, image uploads, and landlord-tenant communication via scalable REST APIs.',
            'Optimized performance with Redis caching and Docker containerization for consistent deployments.',
        ],
    },
    {
        name: 'PaletteAI',
        type: 'AI / Design',
        hue: 290,
        tech: 'Python, TensorFlow, React, Figma API',
        link: 'https://github.com/username/paletteai',
        subtitle: 'AI Color Palette Generator',
        overview: 'An AI-driven tool that generates harmonious color palettes from images, text descriptions, or mood keywords for designers.',
        details: [
            'Trained a deep learning model on 50K+ curated palettes to generate color harmonies from natural language descriptions.',
            'Built a drag-and-drop image uploader that extracts dominant colors using k-means clustering and color theory rules.',
            'Integrated Figma API to export palettes directly into design files with one click.',
            'Designed an accessible UI with WCAG contrast checking built into every generated palette.',
        ],
    },
    {
        name: 'Echelon',
        type: 'Mobile App',
        hue: 340,
        tech: 'React Native, Firebase, Stripe, Node.js',
        link: 'https://github.com/username/echelon',
        subtitle: 'Event Management Platform',
        overview: 'A cross-platform mobile app for organizing, discovering, and managing events with real-time ticketing and social features.',
        details: [
            'Built a cross-platform event management app serving 5K+ users with real-time RSVP tracking and push notifications.',
            'Implemented Stripe payment integration for seamless ticket purchases with automated receipt generation.',
            'Designed a social feed with event sharing, photo galleries, and attendee networking features.',
            'Used Firebase for real-time database sync, authentication, and cloud functions for backend automation.',
        ],
    },
    {
        name: 'MarkdownHQ',
        type: 'Dev Tools',
        hue: 170,
        tech: 'Next.js, TypeScript, Monaco Editor, Vercel',
        link: 'https://github.com/username/markdownhq',
        subtitle: 'Collaborative Markdown Editor',
        overview: 'A real-time collaborative Markdown editor with live preview, syntax highlighting, and GitHub-flavored Markdown support.',
        details: [
            'Built a real-time collaborative editor using WebSockets and CRDTs for conflict-free concurrent editing.',
            'Integrated Monaco Editor for VS Code-like editing experience with custom syntax highlighting.',
            'Added export options for PDF, HTML, and GitHub-flavored Markdown with customizable themes.',
            'Deployed on Vercel with edge functions for sub-100ms response times globally.',
        ],
    },
];

/* Text file modal */
function ProjectDetail({ project, onClose }) {
    return (
        <div className="proj-detail-overlay" onClick={onClose}>
            <div className="proj-detail" onClick={e => e.stopPropagation()}>
                {/* Title bar */}
                <div className="proj-detail__titlebar">
                    <div className="proj-detail__dots">
                        <span className="proj-detail__dot proj-detail__dot--red" onClick={onClose} />
                        <span className="proj-detail__dot proj-detail__dot--yellow" />
                        <span className="proj-detail__dot proj-detail__dot--green" />
                    </div>
                    <span className="proj-detail__filename mono">{project.name}.txt</span>
                    <div style={{ width: 48 }} />
                </div>

                {/* File content */}
                <div className="proj-detail__content">
                    {(() => {
                        let ln = 1;
                        return (
                            <>
                                <div className="proj-detail__line proj-detail__line--header">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text">
                                        <strong>{project.name}</strong> — <em>{project.type}</em>
                                    </span>
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text proj-detail__subtitle">
                                        {project.subtitle}
                                    </span>
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text proj-detail__tech mono">
                                        Stack: {project.tech}
                                    </span>
                                </div>
                                <div className="proj-detail__line proj-detail__line--empty">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text" />
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text proj-detail__section"># Overview</span>
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text">{project.overview}</span>
                                </div>
                                <div className="proj-detail__line proj-detail__line--empty">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text" />
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text proj-detail__section"># Key Features</span>
                                </div>
                                {project.details.map((detail, i) => (
                                    <div className="proj-detail__line" key={i}>
                                        <span className="proj-detail__line-num mono">{ln++}</span>
                                        <span className="proj-detail__line-text">  • {detail}</span>
                                    </div>
                                ))}
                                <div className="proj-detail__line proj-detail__line--empty">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text" />
                                </div>
                                <div className="proj-detail__line">
                                    <span className="proj-detail__line-num mono">{ln++}</span>
                                    <span className="proj-detail__line-text">
                                        🔗 <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-detail__link">{project.link}</a>
                                    </span>
                                </div>
                            </>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}

function MacFolder({ project, index, onOpen }) {
    return (
        <div
            className="mac-folder"
            style={{ '--folder-delay': `${index * 0.08}s`, '--hue': project.hue }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${project.name} project`}
            onClick={() => onOpen(project)}
            onKeyDown={e => e.key === 'Enter' && onOpen(project)}
        >
            <div className="mac-folder__back">
                <div className="mac-folder__tab" />
                <div className="mac-folder__back-panel" />
            </div>
            <div className="mac-folder__docs">
                <div className="mac-folder__doc mac-folder__doc--3">
                    <div className="mac-folder__doc-line" />
                    <div className="mac-folder__doc-line mac-folder__doc-line--short" />
                </div>
                <div className="mac-folder__doc mac-folder__doc--2">
                    <div className="mac-folder__doc-line" />
                    <div className="mac-folder__doc-line mac-folder__doc-line--mid" />
                    <div className="mac-folder__doc-line mac-folder__doc-line--short" />
                </div>
                <div className="mac-folder__doc mac-folder__doc--1">
                    <div className="mac-folder__doc-header mono">{project.type}</div>
                    <div className="mac-folder__doc-title">{project.name}</div>
                    <div className="mac-folder__doc-line" />
                    <div className="mac-folder__doc-line mac-folder__doc-line--short" />
                </div>
            </div>
            <div className="mac-folder__front">
                <div className="mac-folder__shine" />
            </div>
            <div className="mac-folder__label">
                <span className="mac-folder__name">{project.name}</span>
                <span className="mac-folder__type mono">{project.type}</span>
            </div>
        </div>
    );
}

export default function ProjectsPage({ isActive }) {
    const [openProject, setOpenProject] = useState(null);

    return (
        <div className="projects-page">
            <div className="projects-page__header">
                <div className="projects-page__tape-label">My Projects</div>
            </div>
            <div className="projects-page__grid">
                {PROJECTS.map((project, i) => (
                    <MacFolder key={project.name} project={project} index={i} onOpen={setOpenProject} />
                ))}
            </div>
            <div className="projects-page__note handwritten">Click a folder to view details! 📂</div>

            {openProject && (
                <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />
            )}
        </div>
    );
}
