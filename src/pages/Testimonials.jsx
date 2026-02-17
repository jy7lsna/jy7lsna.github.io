import './Testimonials.css';

const TESTIMONIALS = [
    {
        quote: 'One of the most dedicated developers I\'ve worked with. Her code quality and attention to detail are exceptional.',
        author: 'Tech Lead',
        role: 'Conversia AI',
        color: '#FFECB3', // Pastel yellow/peach
        pinColor: '#FF5252',
        rotate: -1.5,
    },
    {
        quote: 'Jyolsna brings creativity and technical depth to every project. A true full-stack talent.',
        author: 'Professor',
        role: 'University Mentor',
        color: '#C8E6C9', // Pastel mint
        pinColor: '#388E3C',
        rotate: 1.2,
    },
    {
        quote: 'Amazing to collaborate with during hackathons. Always pushes the team to deliver beyond expectations.',
        author: 'Teammate',
        role: 'Hackathon Partner',
        color: '#BBDEFB', // Pastel blue
        pinColor: '#1976D2',
        rotate: -0.8,
    },
    {
        quote: 'Her UI/UX sense is impeccable. Every interface she designs feels polished and intuitive.',
        author: 'Designer',
        role: 'Project Collaborator',
        color: '#E1BEE7', // Pastel lavender
        pinColor: '#7B1FA2',
        rotate: 1.5,
    },
    {
        quote: 'Always eager to learn and take on challenges. A great problem solver and team player.',
        author: 'Senior Dev',
        role: 'Project Lead',
        color: '#FFCCBC', // Pastel orange/peach
        pinColor: '#E64A19',
        rotate: -1.2,
    },
    {
        quote: 'Exceptional communication skills and technical proficiency. Highly recommended!',
        author: 'Manager',
        role: 'Product Owner',
        color: '#F0F4C3', // Pastel lime
        pinColor: '#AFB42B',
        rotate: 1.1,
    },
];

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h3 className="testimonials__title">kind words</h3>
            <div className="testimonials__grid">
                {TESTIMONIALS.map((t, i) => (
                    <div
                        className="sticky-note"
                        key={i}
                        style={{
                            '--note-color': t.color,
                            transform: `rotate(${t.rotate}deg)`,
                        }}
                    >
                        {/* 3D Push Pin */}
                        <div className="sticky-note__pin">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <defs>
                                    <radialGradient id={`pinGrad-${i}`} cx="35%" cy="35%" r="50%">
                                        <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>
                                </defs>
                                <circle cx="13" cy="9" r="6" fill="rgba(0,0,0,0.2)" />
                                <circle cx="12" cy="8" r="6" fill={t.pinColor} />
                                <circle cx="12" cy="8" r="6" fill={`url(#pinGrad-${i})`} />
                                <rect x="11.5" y="13" width="1" height="5" fill="#999" />
                            </svg>
                        </div>

                        <div className="sticky-note__content">
                            <p className="sticky-note__text">{t.quote}</p>

                            <div className="sticky-note__footer">
                                <div className="sticky-note__author-info">
                                    <span className="sticky-note__name">{t.author}</span>
                                    <span className="sticky-note__tag">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
