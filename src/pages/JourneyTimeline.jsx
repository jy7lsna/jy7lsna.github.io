import './JourneyTimeline.css';
import './Testimonials.css';

const ICONS = {
    grad: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>,
    bulb: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" /></svg>,
    work: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>,
    globe: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08-2.76-1.91-3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>,
    rocket: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zm9.4 9.19l-1.55-3.62c.31-.13 3.6-1.53 5.89-3.57l.26 1.33c.13.66-.08 1.34-.55 1.81l-4.05 4.05zM11.17 17s-1.08-2.45-2.69-4.06c-1.61-1.61-4.06-2.69-4.06-2.69l-.97.97-1.14-.66c-.28-.16-.35-.52-.13-.76l2.37-2.64 6.18 6.18-2.64 2.37c-.24.22-.6.15-.76-.13l-.66-1.14.5-.44zM19 2l-8.08 5.77 5.31 5.31L22 5c0-1.66-1.34-3-3-3z" /></svg>,
};

const COLORS = ['#FF6B8A', '#FFB347', '#4FC3F7', '#A259FF', '#4DD0A1'];

const MILESTONES = [
    { year: '2020', title: 'Started College', subtitle: 'B.Tech Computer Science', icon: 'grad' },
    { year: '2022', title: 'First Hackathon', subtitle: 'Built a project in 24hrs', icon: 'bulb' },
    { year: '2023', title: 'Internship', subtitle: 'Conversia AI — Full Stack', icon: 'work' },
    { year: '2024', title: 'Freelance Web Designer', subtitle: 'Built custom web solutions', icon: 'globe' },
    { year: '2025', title: 'Graduating', subtitle: 'Ready for what\'s next', icon: 'rocket' },
];

const TESTIMONIALS = [
    {
        quote: 'One of the most dedicated developers I\'ve worked with. Her code quality and attention to detail are exceptional.',
        author: 'Tech Lead',
        role: 'Conversia AI',
        color: '#FFECB3',
        pinColor: '#FF5252',
        rotate: -2.5,
        top: '12%',
        left: '10%'
    },
    {
        quote: 'Jyolsna brings creativity and technical depth to every project. A true full-stack talent.',
        author: 'Professor',
        role: 'Mentor',
        color: '#C8E6C9',
        pinColor: '#388E3C',
        rotate: 1.8,
        top: '15%',
        right: '12%'
    },
    {
        quote: 'Amazing to collaborate with during hackathons. Always pushes beyond expectations.',
        author: 'Teammate',
        role: 'Hack Partner',
        color: '#BBDEFB',
        pinColor: '#1976D2',
        rotate: -1.5,
        top: '42%',
        left: '8%'
    },
    {
        quote: 'Her UI/UX sense is impeccable. Every interface she designs feels polished.',
        author: 'Designer',
        role: 'Collaborator',
        color: '#E1BEE7',
        pinColor: '#7B1FA2',
        rotate: 2.2,
        top: '44%', /* Moved up from 48% */
        right: '10%'
    },
    {
        quote: 'Always eager to learn and take on challenges. A great problem solver.',
        author: 'Senior Dev',
        role: 'Lead',
        color: '#FFCCBC',
        pinColor: '#E64A19',
        rotate: -1.2,
        bottom: '15%',
        left: '12%'
    },
    {
        quote: 'Exceptional communication skills and technical proficiency. Highly recommended!',
        author: 'Manager',
        role: 'Owner',
        color: '#F0F4C3',
        pinColor: '#AFB42B',
        rotate: 1.1,
        bottom: '10%', /* Moved down from 18% */
        right: '10%'
    },
];

export default function JourneyTimeline() {
    return (
        <div className="journey-timeline">
            {/* Background elements */}
            <div className="journey-washi journey-washi--top" />

            {/* Title */}
            <h3 className="journey-timeline__merged-title">journey & kind words</h3>

            {/* Scattered Testimonials */}
            {TESTIMONIALS.map((t, i) => (
                <div
                    className="sticky-note sticky-note--timeline"
                    key={`note-${i}`}
                    style={{
                        '--note-color': t.color,
                        position: 'absolute',
                        top: t.top,
                        bottom: t.bottom,
                        left: t.left,
                        right: t.right,
                        transform: `rotate(${t.rotate}deg)`,
                        width: '135px',
                        zIndex: 3
                    }}
                >
                    <div className="sticky-note__pin">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <defs>
                                <radialGradient id={`pinGrad-merged-${i}`} cx="35%" cy="35%" r="50%">
                                    <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                            </defs>
                            <circle cx="13" cy="9" r="6" fill="rgba(0,0,0,0.2)" />
                            <circle cx="12" cy="8" r="6" fill={t.pinColor} />
                            <circle cx="12" cy="8" r="6" fill={`url(#pinGrad-merged-${i})`} />
                            <rect x="11.5" y="13" width="1" height="5" fill="#999" />
                        </svg>
                    </div>

                    <div className="sticky-note__content">
                        <p className="sticky-note__text" style={{ fontSize: '1rem' }}>{t.quote}</p>
                        <div className="sticky-note__footer">
                            <span className="sticky-note__name" style={{ fontSize: '0.45rem' }}>{t.author}</span>
                            <span className="sticky-note__tag" style={{ fontSize: '0.35rem' }}>{t.role}</span>
                        </div>
                    </div>
                </div>
            ))}

            {/* Timeline (Centered) */}
            <div className="journey-timeline__track journey-timeline__track--merged">
                {MILESTONES.map((m, i) => (
                    <div className="milestone milestone--merged" key={`milestone-${i}`}>
                        <div className="milestone__line-segment">
                            <div className="milestone__dot" style={{ background: COLORS[i], boxShadow: `0 0 0 3px ${COLORS[i]}30` }} />
                            {i < MILESTONES.length - 1 && (
                                <div className="milestone__connector" style={{ background: `linear-gradient(${COLORS[i]}, ${COLORS[i + 1]})` }} />
                            )}
                        </div>
                        <div className="milestone__content">
                            <span className="milestone__year" style={{ color: COLORS[i], background: `${COLORS[i]}18` }}>{m.year}</span>
                            <span className="milestone__icon" style={{ color: COLORS[i] }}>{ICONS[m.icon]}</span>
                            <div className="milestone__text">
                                <div className="milestone__heading">{m.title}</div>
                                <div className="milestone__sub">{m.subtitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative stickers */}
            <div className="journey-sticker journey-sticker--star" style={{ top: '2%', right: '15%' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFD700">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
            <div className="journey-sticker journey-sticker--heart" style={{ bottom: '2%', right: '40%' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF6B8A">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
        </div>
    );
}
