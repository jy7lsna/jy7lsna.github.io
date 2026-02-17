import { useState, useEffect, useRef, useCallback } from 'react';
import './AboutPage.css';

/* --- Clock macOS Widget --- */
function ClockWidget() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className="mac-widget mac-widget--clock">
            <div className="mac-widget__header">
                <svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                <span className="mac-widget__label">Clock</span>
            </div>
            <div className="mac-widget__time">
                <span className="mac-widget__digits">{hours}:{minutes}</span>
                <span className="mac-widget__seconds">:{seconds}</span>
            </div>
            <div className="mac-widget__date">
                {time.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </div>
        </div>
    );
}

/* --- Weather macOS Widget --- */
function WeatherWidget() {
    return (
        <a
            href="https://www.accuweather.com/en/gb/london/ec4y/weather-forecast/328328"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-widget mac-widget--weather mac-widget--link"
        >
            <div className="mac-widget__header">
                <svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41z" /></svg>
                <span className="mac-widget__label">Weather</span>
            </div>
            <div className="mac-widget__weather-body">
                <div className="mac-widget__temp">26°</div>
                <div className="mac-widget__weather-details">
                    <div className="mac-widget__weather-condition">Partly Cloudy</div>
                    <div className="mac-widget__weather-range">H:31° L:22°</div>
                </div>
            </div>
        </a>
    );
}

/* --- VS Code macOS Widget --- */
function VSCodeWidget() {
    return (
        <a
            href="https://github.com/jy7lsna"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-widget mac-widget--vscode mac-widget--link"
        >
            <div className="mac-widget__header">
                <svg className="mac-widget__logo" viewBox="0 0 24 24" fill="#007ACC">
                    <path d="M17.583 2.247l-5.27 4.928L7.643 3.57 3 5.845v12.31l4.643 2.275 4.67-3.605 5.27 4.928L21 19.478V4.522l-3.417-2.275zM7.66 14.92l-2.66-2.01v-1.82l2.66 2.01v1.82zm9.923-1.01l-4.82 3.718V10.37l4.82-3.718v7.258z" />
                </svg>
                <span className="mac-widget__label">VS Code</span>
            </div>
            <div className="mac-widget__vscode-files">
                <div className="mac-widget__file">
                    <span className="mac-widget__file-icon mac-widget__file-icon--jsx">JS</span>
                    <span className="mac-widget__file-name">App.jsx</span>
                </div>
                <div className="mac-widget__file">
                    <span className="mac-widget__file-icon mac-widget__file-icon--css">CS</span>
                    <span className="mac-widget__file-name">index.css</span>
                </div>
                <div className="mac-widget__file mac-widget__file--active">
                    <span className="mac-widget__file-icon mac-widget__file-icon--jsx">JS</span>
                    <span className="mac-widget__file-name">AboutPage.jsx</span>
                </div>
            </div>
            <div className="mac-widget__vscode-status">
                <span className="mac-widget__status-dot" />
                <span>coding...</span>
            </div>
        </a>
    );
}

/* --- GitHub Streak Widget --- */
function GitHubWidget() {
    const weeks = [
        [1, 0, 2, 1, 3, 0, 0],
        [2, 3, 1, 2, 1, 0, 1],
        [0, 1, 3, 3, 2, 1, 0],
        [1, 2, 1, 0, 3, 2, 1],
        [3, 1, 2, 2, 1, 0, 2],
    ];

    return (
        <a
            href="https://github.com/jy7lsna"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-widget mac-widget--github mac-widget--link"
        >
            <div className="mac-widget__header">
                <svg className="mac-widget__logo" viewBox="0 0 24 24" fill="#333">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span className="mac-widget__label">GitHub</span>
            </div>
            <div className="mac-widget__github-grid">
                {weeks.map((week, wi) => (
                    <div className="mac-widget__github-week" key={wi}>
                        {week.map((level, di) => (
                            <div className={`mac-widget__github-cell mac-widget__github-cell--${level}`} key={di} />
                        ))}
                    </div>
                ))}
            </div>
            <div className="mac-widget__github-stats">
                <span><svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="12" height="12" fill="#ff6b35" style={{ verticalAlign: 'middle', marginRight: '2px' }}><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" /></svg> 12 day streak</span>
            </div>
        </a>
    );
}

/* --- Habit Tracker Widget --- */
function HabitTrackerWidget({ habits, onToggle, onOpen }) {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <div className="mac-widget mac-widget--habits">
            <div className="mac-widget__header">
                <svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22 5.18L10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39l-1.61 1.61z" /></svg>
                <span className="mac-widget__label">Habit Tracker</span>
                <span className="mac-widget__expand mac-widget--clickable" onClick={onOpen}>↗</span>
            </div>
            <div className="habit__days-row">
                <div className="habit__name-spacer" />
                {days.map((d, i) => (
                    <div className="habit__day-label" key={i}>{d}</div>
                ))}
            </div>
            {habits.map((habit, hi) => (
                <div className="habit__row" key={hi}>
                    <div className="habit__name">{habit.emoji} {habit.name}</div>
                    {habit.done.map((done, di) => (
                        <div
                            className={`habit__cell ${done ? 'habit__cell--done' : ''} mac-widget--clickable`}
                            key={di}
                            onClick={() => onToggle(hi, di)}
                        >
                            {done ? '✓' : ''}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

/* --- Screen Time Widget --- */
function ScreenTimeWidget() {
    const apps = [
        { name: 'VS Code', time: '4h 23m', pct: 55, color: '#007ACC' },
        { name: 'Chrome', time: '2h 10m', pct: 27, color: '#4285F4' },
        { name: 'Figma', time: '1h 05m', pct: 13, color: '#A259FF' },
        { name: 'Other', time: '0h 22m', pct: 5, color: '#aaa' },
    ];

    return (
        <div className="mac-widget mac-widget--screentime">
            <div className="mac-widget__header">
                <svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
                <span className="mac-widget__label">Screen Time</span>
            </div>
            <div className="screentime__bar">
                {apps.map((app, i) => (
                    <div
                        key={i}
                        className="screentime__segment"
                        style={{ width: `${app.pct}%`, background: app.color }}
                        title={`${app.name}: ${app.time}`}
                    />
                ))}
            </div>
            <div className="screentime__list">
                {apps.map((app, i) => (
                    <div className="screentime__item" key={i}>
                        <span className="screentime__dot" style={{ background: app.color }} />
                        <span className="screentime__app">{app.name}</span>
                        <span className="screentime__time">{app.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* --- Spotify Mini Player (Theme-Aware) --- */
function SpotifyWidget() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(35);

    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = 0.3;
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) { audioRef.current.pause(); }
        else { audioRef.current.play().catch(() => { }); }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current && audioRef.current.duration) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
    };

    return (
        <div className="spotify-mini">
            <audio
                ref={audioRef}
                src="https://citytrend.com.ng/wp-content/uploads/2025/10/Dave-Tems-Raindance.mp3"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => { setIsPlaying(false); setProgress(0); }}
                preload="auto"
            />
            <div className="spotify-mini__album" onClick={togglePlay}>
                <div className={`spotify-mini__art ${isPlaying ? 'spotify-mini__art--playing' : ''}`}>
                    <img
                        src="https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fecaa7826bb0cbe139a8cb83"
                        alt="Raindance Album Art"
                        className="spotify-mini__img"
                    />
                </div>
            </div>
            <div className="spotify-mini__info">
                <div className="spotify-mini__song">Raindance</div>
                <div className="spotify-mini__artist">Dave ft. Tems</div>
                <div className="spotify-mini__bar-track">
                    <div
                        className={`spotify-mini__bar-fill ${isPlaying ? 'spotify-mini__bar-fill--active' : ''}`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <div className="spotify-mini__controls" onClick={togglePlay}>
                <svg className="spotify-mini__play" viewBox="0 0 24 24" width="24" height="24" fill="#000">
                    {isPlaying
                        ? <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        : <path d="M8 5v14l11-7z" />
                    }
                </svg>
            </div>
        </div>
    );
}

/* --- Goodreads macOS Widget --- */
function GoodreadsWidget() {
    return (
        <a
            href="https://www.goodreads.com/user/show/137409984-jayyy"
            target="_blank"
            rel="noopener noreferrer"
            className="mac-widget mac-widget--books mac-widget--link"
        >
            <div className="mac-widget__header">
                <svg className="mac-widget__icon-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
                <span className="mac-widget__label">Currently Reading</span>
            </div>
            <div className="mac-widget__body">
                <div className="mac-widget__book-cover">
                    <img
                        src="https://images.randomhouse.com/cover/9780593652886"
                        alt="The Creative Act Book Cover"
                        className="mac-widget__cover-img"
                    />
                </div>
                <div className="mac-widget__meta">
                    <div className="mac-widget__song">The Creative Act</div>
                    <div className="mac-widget__artist">Rick Rubin</div>
                </div>
            </div>
            <div className="mac-widget__progress-track">
                <div className="mac-widget__progress-fill mac-widget__progress-fill--amber" style={{ width: '42%' }} />
            </div>
            <div className="mac-widget__footer">42% completed</div>
        </a>
    );
}

export default function AboutPage({ isActive }) {
    const [isHabitTrackerOpen, setIsHabitTrackerOpen] = useState(false);

    // Default habit data
    const initialHabits = [
        { name: 'Code', emoji: '💻', done: [true, true, true, false, true, false, false] },
        { name: 'Read', emoji: '📖', done: [true, false, true, true, false, true, false] },
        { name: 'Workout', emoji: '🏋️', done: [false, true, false, true, true, false, false] },
    ];

    const [habits, setHabits] = useState(() => {
        const saved = localStorage.getItem('portfolio-habits');
        return saved ? JSON.parse(saved) : initialHabits;
    });

    useEffect(() => {
        localStorage.setItem('portfolio-habits', JSON.stringify(habits));
    }, [habits]);

    const toggleHabit = (habitIndex, dayIndex) => {
        setHabits(prev => {
            const newHabits = [...prev];
            const newDone = [...newHabits[habitIndex].done];
            newDone[dayIndex] = !newDone[dayIndex];
            newHabits[habitIndex] = { ...newHabits[habitIndex], done: newDone };
            return newHabits;
        });
    };

    // Calculate stats for the modal
    const stats = habits.map(h => {
        const completed = h.done.filter(Boolean).length;
        const total = h.done.length;
        return {
            name: h.name,
            emoji: h.emoji,
            pct: Math.round((completed / total) * 100)
        };
    });

    const averageCompletion = Math.round(stats.reduce((acc, s) => acc + s.pct, 0) / stats.length);

    return (
        <div className="about-page">
            <div className="about-page__header">
                <div className="about-page__tape-label">About Me</div>
            </div>

            <div className="about-page__content">
                {/* Left Column: Photo & Bio */}
                <div className="about-page__left">
                    <div className="about-page__photo-container">
                        <div className="about-page__polaroid">
                            <div className="about-page__img-placeholder">
                                <div className="about-page__avatar">
                                    <span>👩‍💻</span>
                                </div>
                            </div>
                            <div className="about-page__caption handwritten">It's me, Hi! 👋</div>
                        </div>
                        <div className="about-page__washi-tape-1" />
                    </div>

                    <div className="about-page__intro">
                        <h2 className="about-page__name handwritten">Jyolsna Maria Joemon</h2>
                        <div className="about-page__role">Developer & Designer</div>
                        <div className="about-page__divider" />
                    </div>

                    <div className="about-page__bio">
                        <p>
                            I am a multidisciplinary creator who thrives at the intersection of
                            <strong> logic</strong> and <strong>imagination</strong>. With a passion for building
                            digital experiences that feel as good as they look — from pixel-perfect
                            interfaces to robust backend architectures.
                        </p>
                        <p>
                            I specialize in <strong>full-stack development</strong>, <strong>UI/UX design</strong>,
                            and <strong>cybersecurity</strong>. Whether it's crafting a seamless user flow,
                            designing a brand identity, or writing efficient code —
                            I'm always exploring the space where technology meets creativity.
                        </p>
                        <p>
                            When I'm not coding, I'm curating playlists, getting lost in books,
                            or exploring the world through my camera lens. ✨
                        </p>
                    </div>

                    <a href="https://drive.google.com/file/d/1ZgnKKMLQRFEuUDvKkkgVQdTmfloMwUG1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="about-page__resume-btn">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                        Download CV
                    </a>
                </div>

                {/* Right Column: macOS Widgets */}
                <div className="about-page__right">
                    <div className="about-page__widgets">
                        <SpotifyWidget />
                        <div className="about-page__widget-row">
                            <ClockWidget />
                            <WeatherWidget />
                        </div>
                        <HabitTrackerWidget
                            habits={habits}
                            onToggle={toggleHabit}
                            onOpen={() => setIsHabitTrackerOpen(true)}
                        />
                        <div className="about-page__widget-row">
                            <VSCodeWidget />
                            <GitHubWidget />
                        </div>
                        <div className="about-page__widget-row">
                            <GoodreadsWidget />
                            <ScreenTimeWidget />
                        </div>
                    </div>
                </div>
            </div>

            {/* Habit Tracker Expanded View */}
            {isHabitTrackerOpen && (
                <div className="habit-modal" onClick={() => setIsHabitTrackerOpen(false)}>
                    <div className="habit-modal__content" onClick={e => e.stopPropagation()}>
                        <button className="habit-modal__close" onClick={() => setIsHabitTrackerOpen(false)}>✕</button>
                        <div className="habit-modal__header">
                            <h3 className="handwritten">My Habit Tracker 📈</h3>
                            <p className="mac-widget__label">Keep growing, keep building.</p>
                        </div>
                        <div className="habit-modal__grid">
                            <div className="habit-modal__placeholder">
                                <div className="habit-modal__streak">🔥 Overall {averageCompletion}% Completion</div>
                                <div className="habit-modal__stats">
                                    {stats.map((s, i) => (
                                        <div className="habit-modal__stat" key={i}>
                                            <span>{s.emoji} {s.name}</span>
                                            <strong>{s.pct}%</strong>
                                        </div>
                                    ))}
                                </div>
                                <div className="habit-modal__mini-grid">
                                    {habits.map((h, hi) => (
                                        <div className="habit-modal__mini-row" key={hi}>
                                            {h.done.map((done, di) => (
                                                <div
                                                    key={di}
                                                    className={`habit__cell habit__cell--mini ${done ? 'habit__cell--done' : ''}`}
                                                    onClick={() => toggleHabit(hi, di)}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <p className="habit-modal__hint">"Consistency is better than perfection."</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
