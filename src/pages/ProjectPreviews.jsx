import './ProjectPreviews.css';

const PREVIEWS = [
    { name: 'InsightDashboard', type: 'Full Stack', hue: 210, link: 'https://github.com/username/insightdashboard' },
    { name: 'Argus', type: 'Cybersecurity', hue: 145, link: 'https://github.com/username/argus' },
    { name: 'RateMyPG', type: 'Web Platform', hue: 25, link: 'https://github.com/username/ratemypg' },
    { name: 'PaletteAI', type: 'AI / Design', hue: 290, link: 'https://github.com/username/paletteai' },
    { name: 'Echelon', type: 'Mobile App', hue: 340, link: 'https://github.com/username/echelon' },
    { name: 'MarkdownHQ', type: 'Dev Tools', hue: 170, link: 'https://github.com/username/markdownhq' },
];

export default function ProjectPreviews() {
    return (
        <div className="project-previews">
            <h3 className="project-previews__title">projects</h3>
            <div className="project-previews__grid">
                {PREVIEWS.map((project, i) => (
                    <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-card"
                    >
                        {/* Browser Chrome */}
                        <div className="preview-card__chrome">
                            <div className="preview-card__dots">
                                <span className="preview-card__dot preview-card__dot--red" />
                                <span className="preview-card__dot preview-card__dot--yellow" />
                                <span className="preview-card__dot preview-card__dot--green" />
                            </div>
                            <div className="preview-card__url">
                                <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor" style={{ opacity: 0.4 }}>
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                                <span>{project.name.toLowerCase()}.app</span>
                            </div>
                        </div>

                        {/* Website Preview Area */}
                        <div
                            className="preview-card__viewport"
                            style={{ background: `linear-gradient(135deg, hsl(${project.hue}, 60%, 92%), hsl(${project.hue}, 50%, 85%))` }}
                        >
                            {/* Fake UI skeleton elements */}
                            <div className="preview-card__skeleton">
                                <div className="skeleton__nav" style={{ background: `hsl(${project.hue}, 40%, 80%)` }} />
                                <div className="skeleton__hero" style={{ background: `hsl(${project.hue}, 45%, 82%)` }} />
                                <div className="skeleton__cols">
                                    <div className="skeleton__col" style={{ background: `hsl(${project.hue}, 35%, 87%)` }} />
                                    <div className="skeleton__col" style={{ background: `hsl(${project.hue}, 35%, 87%)` }} />
                                    <div className="skeleton__col" style={{ background: `hsl(${project.hue}, 35%, 87%)` }} />
                                </div>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="preview-card__label">
                            <span className="preview-card__name">{project.name}</span>
                            <span className="preview-card__type">{project.type}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
