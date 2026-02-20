import { useState, useEffect } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            // Default to dark theme if no preference is saved
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className="theme-toggle-container">
            <span className="theme-toggle-hint">Toggle for {isDark ? 'light' : 'dark'} mode</span>
            <button
                className="theme-toggle"
                onClick={() => setIsDark(!isDark)}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                title={isDark ? 'Light mode' : 'Dark mode'}
            >
                <div className={`theme-toggle__track ${isDark ? 'theme-toggle__track--dark' : ''}`}>
                    <div className="theme-toggle__thumb">
                        {isDark ? '🌙' : '☀️'}
                    </div>
                </div>
            </button>
        </div>
    );
}
