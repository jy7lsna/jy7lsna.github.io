import './ExperiencePage.css';

export default function ExperiencePage({ isActive }) {
    const experiences = [
        {
            company: 'Conversia AI',
            role: 'Front End Developer Intern',
            period: 'Jan 2025 — Apr 2025',
            description: [
                'Developed a real-time engagement dashboard using React.js and Chart.js, transforming complex API data into interactive visualizations for faster decision-making.',
                'Revamped critical user journeys based on drop-off analytics, implementing responsive React interfaces that improved user retention by 30%.',
                'Optimized frontend workflows and information architecture, raising task completion rates from 60% to 75% through improved UX design.'
            ]
        },
        {
            company: 'Freelance',
            role: 'Web Designer & Developer',
            period: 'Jun 2024 — Dec 2024',
            description: [
                'Designed and developed custom responsive websites for local businesses, focusing on clean aesthetics and user-centric navigation.',
                'Crafted brand identities and visual assets using Figma and Adobe Suite, ensuring a cohesive look across all digital platforms.',
                'Collaborated directly with clients to translate business requirements into functional, high-converting landing pages.'
            ],
            behance: 'https://www.behance.net/jyolsnajoemon'
        }
    ];

    return (
        <div className={`experience-page ${isActive ? 'experience-page--active' : ''}`}>
            <div className="experience-page__header">
                <div className="experience-page__tape-label">Experience</div>
            </div>

            <div className="experience-page__content">
                <div className="experience-page__logs">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="experience-log">
                            <div className="experience-log__header">
                                <h3 className="experience-log__company">{exp.company}</h3>
                                <span className="experience-log__period">{exp.period}</span>
                            </div>
                            <div className="experience-log__role">{exp.role}</div>
                            <ul className="experience-log__list">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="experience-log__item">{item}</li>
                                ))}
                            </ul>
                            {exp.behance && (
                                <a href={exp.behance} target="_blank" rel="noopener noreferrer" className="experience-log__behance">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <path d="M8.228 15.01h-2.203v-2.013h2.203c.609 0 1.077.13 1.404.39.327.26.49.62.49 1.016 0 .396-.163.742-.49 1.016-.327.26-.795.391-1.404.391zm-.437-3.722h-1.766v-1.733h1.766c.551 0 .973.116 1.267.348.294.232.441.52.441.865 0 .33-.141.606-.421.826-.281.22-.68.33-1.198.33h-.09zm15.151 1.764h-5.264c.057.945.41 1.393 1.058 1.393.396 0 .765-.119 1.107-.358l.783 1.343c-.636.566-1.43.849-2.38.849-1.045 0-1.85-.306-2.413-.918-.564-.612-.845-1.503-.845-2.673 0-1.127.288-2.022.863-2.686.574-.663 1.341-.995 2.301-.995.918 0 1.637.288 2.155.865.519.577.778 1.41.778 2.5zm-5.207-1.157h3.313c-.042-.69-.297-1.034-.764-1.034-.511 0-.825.344-.94 1.034h-1.609zm-10.02 5.115h-4.329v-7.01h4.329c1.082 0 1.933.243 2.553.729.62.486.93 1.161.93 2.023 0 .54-.127.994-.38 1.362-.254.368-.614.653-1.08.855.594.208 1.049.526 1.366.953.317.427.476.956.476 1.586 0 .92-.321 1.644-.963 2.17-.643.526-1.611.789-2.902.789zm4.286-10.375h5.5v1.275h-5.5v-1.275z" />
                                    </svg>
                                    View on Behance
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="experience-page__decoration">
                    <div className="experience-page__stamp">REVIEWED</div>
                    <div className="experience-page__coffee-ring"></div>
                </div>
            </div>
        </div>
    );
}
