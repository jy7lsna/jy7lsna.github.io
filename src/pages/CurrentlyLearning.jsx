import './CurrentlyLearning.css';

const ICONS = {
    rust: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
    threejs: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94z" /></svg>,
    aws: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" /></svg>,
    ml: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /></svg>,
    go: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" /></svg>,
};

const LEARNING_ITEMS = [
    {
        name: 'Rust',
        icon: 'rust',
        progress: 30,
        color: '#DE4507',
        note: 'Systems programming',
    },
    {
        name: 'Three.js',
        icon: 'threejs',
        progress: 45,
        color: '#049EF4',
        note: '3D web graphics',
    },
    {
        name: 'AWS',
        icon: 'aws',
        progress: 55,
        color: '#FF9900',
        note: 'Cloud architecture',
    },
    {
        name: 'Machine Learning',
        icon: 'ml',
        progress: 35,
        color: '#A259FF',
        note: 'Neural networks & NLP',
    },
    {
        name: 'Go',
        icon: 'go',
        progress: 20,
        color: '#00ADD8',
        note: 'Backend services',
    },
];

export default function CurrentlyLearning() {
    return (
        <div className="currently-learning">
            <h3 className="currently-learning__title">currently learning</h3>
            <div className="currently-learning__list">
                {LEARNING_ITEMS.map((item, i) => (
                    <div className="learning-item" key={i}>
                        <div className="learning-item__header">
                            <span className="learning-item__icon" style={{ color: item.color }}>{ICONS[item.icon]}</span>
                            <span className="learning-item__name handwritten">{item.name}</span>
                        </div>
                        <div className="learning-item__bar">
                            <div
                                className="learning-item__fill"
                                style={{ width: `${item.progress}%`, background: item.color }}
                            />
                        </div>
                        <div className="learning-item__note">{item.note}</div>
                    </div>
                ))}
            </div>

            {/* Decorative Doodle */}
            <div className="learning-sticker learning-sticker--bulb">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="var(--accent-yellow)">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C8.48 12.52 7 10.84 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.84-1.48 3.52-3.15 4.1zM9 19h6v2H9z" />
                </svg>
            </div>
        </div>
    );
}
