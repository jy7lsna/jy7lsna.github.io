import { useCallback } from 'react';
import './TabNav.css';

// Produce a subtle click sound using Web Audio API
function playClickSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        // Short percussive click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 1800;
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.06);

        // Secondary softer pop
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.value = 800;
        gain2.gain.setValueAtTime(0.04, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(ctx.currentTime + 0.02);
        osc2.stop(ctx.currentTime + 0.12);

        setTimeout(() => ctx.close(), 200);
    } catch (e) {
        // Audio not supported or blocked — fail silently
    }
}

export default function TabNav({ tabs, currentPage, onTabClick }) {
    const handleClick = useCallback((pageIndex) => {
        playClickSound();
        onTabClick(pageIndex);
    }, [onTabClick]);

    return (
        <nav className="tab-nav" aria-label="Page sections">
            {tabs.map((tab, i) => {
                const isActive = currentPage === tab.pageIndex;
                return (
                    <button
                        key={i}
                        className={`tab-nav__tab ${isActive ? 'tab-nav__tab--active' : ''}`}
                        onClick={() => handleClick(tab.pageIndex)}
                        aria-label={`Go to ${tab.label}`}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                            '--tab-delay': `${i * 0.05}s`,
                            '--tab-bg-custom': tab.color,
                        }}
                    >
                        <span className="tab-nav__label">{tab.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
