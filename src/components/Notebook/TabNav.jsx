import { useCallback } from 'react';
import './TabNav.css';

export default function TabNav({ tabs, currentPage, onTabClick }) {
    const handleClick = useCallback((pageIndex) => {
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
