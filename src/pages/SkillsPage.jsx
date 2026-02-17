import './SkillsPage.css';

const ICONS = {
    python: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M11.9 2c-1.7 0-3 .3-3 1.5v1.8h3.2v.7H6.5C5 6 3.8 7.3 3.8 9.2c0 2 1.3 3.2 2.8 3.2h1.6v-1.7c0-1.6 1.4-3 3.1-3h3.4c1.3 0 2.3-1.1 2.3-2.4V3.5C17 2.3 14.7 2 11.9 2zm-1.7 1c.5 0 .9.4.9.9s-.4.8-.9.8-.8-.4-.8-.8.4-.9.8-.9z" fill="#3776AB" />
            <path d="M12.1 22c1.7 0 3-.3 3-1.5v-1.8h-3.2v-.7h5.6c1.5 0 2.7-1.3 2.7-3.2 0-2-1.3-3.2-2.8-3.2h-1.6v1.7c0 1.6-1.4 3-3.1 3h-3.4c-1.3 0-2.3 1.1-2.3 2.4v1.8c0 1.2 2.3 1.5 5.1 1.5zm1.7-1c-.5 0-.9-.4-.9-.9s.4-.8.9-.8.8.4.8.8-.4.9-.8.9z" fill="#FFD43B" />
        </svg>
    ),
    javascript: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
            <path d="M13.5 16.5c.3.8 1 1.3 1.8 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5.9c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7c0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.4 2.7-3.2 2.7-1.8 0-2.9-.8-3.5-1.9l1.7-.9zM7 16.7c.2.4.4.8 1 .8.5 0 .8-.2.8-1v-6.2h2v6.3c0 1.6-.9 2.4-2.3 2.4-1.3 0-2-.7-2.4-1.5L7 16.7z" fill="#333" />
        </svg>
    ),
    typescript: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
            <path d="M7 11h6v1.5H11.5V18H10v-5.5H7V11zm7.5 0h2.3c.6 0 1.1.1 1.5.4.4.3.6.7.6 1.3 0 .7-.3 1.2-.9 1.5.7.2 1.1.8 1.1 1.5 0 .7-.2 1.2-.7 1.5-.4.3-1 .5-1.7.5H14.5V11zm1.7 2.7h.6c.3 0 .5-.1.7-.2.1-.2.2-.3.2-.6 0-.2-.1-.4-.2-.5-.2-.1-.4-.2-.7-.2h-.6v1.5zm0 2.8h.7c.3 0 .6-.1.7-.2.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.6-.1-.2-.4-.2-.7-.2h-.7v1.6z" fill="#fff" />
        </svg>
    ),
    sql: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#e48e00" />
            <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="Arial">SQL</text>
        </svg>
    ),
    java: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#007396" />
            <text x="12" y="15" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#fff" fontFamily="Arial">Java</text>
        </svg>
    ),
    html: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 2l1.5 18L12 22l6.5-2L20 2H4z" fill="#E44D26" />
            <path d="M12 4v16l5-1.5L18.2 4H12z" fill="#F16529" />
            <path d="M8.5 7H16l-.3 3H9l.2 2.5h6l-.5 5.5L12 19l-2.7-.8-.2-2.2h2l.1 1.2 .8.2.8-.2.1-2H8.7L8.5 7z" fill="#fff" />
        </svg>
    ),
    css: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 2l1.5 18L12 22l6.5-2L20 2H4z" fill="#1572B6" />
            <path d="M12 4v16l5-1.5L18.2 4H12z" fill="#33A9DC" />
            <path d="M8.5 7H16l-.2 2H9l.2 2h6.3l-.5 6L12 19l-2.8-.8-.2-2.2h2l.1 1 .9.3.9-.3.2-2H8.8L8.5 7z" fill="#fff" />
        </svg>
    ),
    react: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2.5" fill="#61DAFB" stroke="none" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
    ),
    nodejs: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2l9 5.2v10.4L12 22l-9-5.2V7.2L12 2z" fill="#339933" />
            <text x="12" y="14.5" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="Arial">N</text>
        </svg>
    ),
    express: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="2" fill="#333" />
            <text x="12" y="14" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#fff" fontFamily="Arial">EX</text>
        </svg>
    ),
    django: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#092E20" />
            <text x="12" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff" fontFamily="Arial">Dj</text>
        </svg>
    ),
    fastapi: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#009688" />
            <text x="12" y="15" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#fff" fontFamily="Arial">Fast</text>
        </svg>
    ),
    flask: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#333" />
            <path d="M10 6h4l-1 5h3l-5 8 1-5H9l1-8z" fill="#fff" />
        </svg>
    ),
    postgresql: (
        <svg viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="8" rx="7" ry="4" fill="#336791" />
            <path d="M5 8v8c0 2.2 3.1 4 7 4s7-1.8 7-4V8" stroke="#336791" strokeWidth="1.5" fill="none" />
            <ellipse cx="12" cy="12" rx="7" ry="4" fill="none" stroke="#336791" strokeWidth="1" opacity=".5" />
        </svg>
    ),
    mongodb: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2C12 2 8 6 8 12s4 10 4 10 4-4 4-10S12 2 12 2z" fill="#47A248" />
            <path d="M12 2s4 4 4 10-4 10-4 10" fill="#3FA037" />
        </svg>
    ),
    redis: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#DC382D" />
            <text x="12" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#fff" fontFamily="Arial">Re</text>
        </svg>
    ),
    socketio: (
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#010101" />
            <path d="M8 10l6-3-2 4h4l-6 3 2-4H8z" fill="#fff" />
        </svg>
    ),
    docker: (
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="2" y="8" width="20" height="12" rx="2" fill="#2496ED" />
            <rect x="4" y="5" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="8.25" y="5" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="12.5" y="5" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="4" y="10" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="8.25" y="10" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="12.5" y="10" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
            <rect x="8.25" y="14.5" width="3.5" height="3" rx=".5" fill="#2496ED" stroke="#fff" strokeWidth=".3" />
        </svg>
    ),
    kubernetes: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2l9 5.2v10.4L12 22l-9-5.2V7.2L12 2z" fill="#326CE5" />
            <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1" fill="#fff" />
        </svg>
    ),
    github_actions: (
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#2088FF" />
            <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    prometheus: (
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#E6522C" />
            <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="Arial">P</text>
        </svg>
    ),
    grafana: (
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#F46800" />
            <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="Arial">G</text>
        </svg>
    ),
    cicd: (
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#555" />
            <path d="M8 12a4 4 0 0 1 8 0" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M16 12a4 4 0 0 1-8 0" stroke="#aaa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <polygon points="15,9 17,12 15,12" fill="#fff" />
        </svg>
    ),
    git: (
        <svg viewBox="0 0 24 24" fill="none">
            <path d="M21.6 11.2L12.8 2.4a1.4 1.4 0 0 0-1.9 0L9 4.3l2.4 2.4a1.6 1.6 0 0 1 2 2l2.3 2.3a1.6 1.6 0 1 1-1 1l-2.1-2.1v5.6a1.6 1.6 0 1 1-1.3-.2V9.8a1.6 1.6 0 0 1-.9-2.1L8.1 5.4 2.4 11.2a1.4 1.4 0 0 0 0 1.9l8.8 8.8a1.4 1.4 0 0 0 1.9 0l8.5-8.5a1.4 1.4 0 0 0 0-2z" fill="#F05032" />
        </svg>
    ),
};

const CATEGORIES = [
    {
        title: 'Languages',
        color: '#f59e0b',
        skills: [
            { name: 'Python', icon: 'python' },
            { name: 'JavaScript (ES6+)', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'SQL', icon: 'sql' },
            { name: 'Java', icon: 'java' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
        ],
    },
    {
        title: 'Frontend',
        color: '#3b82f6',
        skills: [
            { name: 'React.js', icon: 'react' },
            { name: 'HTML5', icon: 'html' },
            { name: 'CSS3', icon: 'css' },
        ],
    },
    {
        title: 'Backend',
        color: '#22c55e',
        skills: [
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Express.js', icon: 'express' },
            { name: 'Django', icon: 'django' },
            { name: 'FastAPI', icon: 'fastapi' },
            { name: 'Flask', icon: 'flask' },
            { name: 'PostgreSQL', icon: 'postgresql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Redis', icon: 'redis' },
            { name: 'Socket.IO', icon: 'socketio' },
        ],
    },
    {
        title: 'DevOps & Tools',
        color: '#a855f7',
        skills: [
            { name: 'Docker', icon: 'docker' },
            { name: 'Kubernetes', icon: 'kubernetes' },
            { name: 'GitHub Actions', icon: 'github_actions' },
            { name: 'Prometheus', icon: 'prometheus' },
            { name: 'Grafana', icon: 'grafana' },
            { name: 'CI/CD', icon: 'cicd' },
            { name: 'Git', icon: 'git' },
        ],
    },
];

export default function SkillsPage({ isActive }) {
    return (
        <div className="skills-page">
            <div className="skills-page__header">
                <div className="skills-page__tape-label">Skills & Tools</div>
            </div>
            <div className="skills-page__categories">
                {CATEGORIES.map((cat, ci) => (
                    <div key={cat.title} className="skills-cat" style={{ '--cat-color': cat.color }}>
                        <h3 className="skills-cat__title">
                            <span className="skills-cat__dot" />
                            {cat.title}
                        </h3>
                        <div className="skills-cat__grid">
                            {cat.skills.map((skill, si) => (
                                <div key={skill.name} className="skill-chip" style={{ '--chip-delay': `${(ci * 5 + si) * 0.03}s` }}>
                                    <div className="skill-chip__icon">{ICONS[skill.icon]}</div>
                                    <span className="skill-chip__name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
