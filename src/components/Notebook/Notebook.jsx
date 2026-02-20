import { useState, useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import SpiralBinding from './SpiralBinding';
import TabNav from './TabNav';
import CoverPage from '../../pages/CoverPage';
import AboutPage from '../../pages/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage';
import ExperiencePage from '../../pages/ExperiencePage';
import ContactPage from '../../pages/ContactPage';
import PolaroidGallery from '../../pages/PolaroidGallery';
import ProjectPreviews from '../../pages/ProjectPreviews';
import CurrentlyLearning from '../../pages/CurrentlyLearning';
import JourneyTimeline from '../../pages/JourneyTimeline';
import Testimonials from '../../pages/Testimonials';
import MeetingCalendar from '../../pages/MeetingCalendar';
import './Notebook.css';

const PAGES = [
    { component: CoverPage, label: 'Cover', tab: null, backContent: PolaroidGallery },
    { component: AboutPage, label: 'About', tab: 'About', color: 'var(--tab-pink)', backContent: ProjectPreviews },
    { component: ProjectsPage, label: 'Projects', tab: 'Projects', color: 'var(--tab-blue)', backContent: CurrentlyLearning },
    { component: SkillsPage, label: 'Skills', tab: 'Skills', color: 'var(--tab-green)', backContent: JourneyTimeline },
    { component: ExperiencePage, label: 'Experience', tab: 'Exp', color: 'var(--tab-orange)', backContent: MeetingCalendar },
    { component: ContactPage, label: 'Contact', tab: 'Contact', color: 'var(--tab-yellow)' },
];

const TABS = PAGES.filter(p => p.tab).map((p, i) => ({
    label: p.tab,
    pageIndex: PAGES.findIndex(pg => pg.tab === p.tab),
    color: p.color,
}));

export default function Notebook() {
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredSide, setHoveredSide] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const pageRefs = useRef([]);
    const shadowRef = useRef(null);
    const totalPages = PAGES.length;

    const getPageZIndex = useCallback((index) => {
        if (index < currentPage) {
            return index + 1;
        }
        return totalPages - (index - currentPage) + totalPages;
    }, [currentPage, totalPages]);

    const flipForward = useCallback(() => {
        if (isAnimating || currentPage >= totalPages - 1) return;
        setIsAnimating(true);

        const pageEl = pageRefs.current[currentPage];
        if (!pageEl) return;

        // Temporarily boost z-index during flip
        pageEl.style.zIndex = totalPages * 3;

        // Animate shadow overlay
        const shadow = shadowRef.current;
        const tl = gsap.timeline({
            onComplete: () => {
                // Ensure state updates before clearing the inline zIndex
                setCurrentPage(prev => prev + 1);
                setIsAnimating(false);
                setTimeout(() => {
                    if (pageEl) pageEl.style.zIndex = '';
                }, 0);
            }
        });

        tl.to(shadow, {
            opacity: 0.4,
            duration: 0.35,
            ease: 'power3.in',
            force3D: true
        }, 0);
        tl.to(shadow, {
            opacity: 0,
            duration: 0.35,
            ease: 'power3.out',
            force3D: true
        }, 0.35);
        tl.to(pageEl, {
            rotateY: -180,
            z: 80,
            duration: 0.35,
            ease: 'power3.in',
            force3D: true
        }, 0);
        tl.to(pageEl, {
            z: 0,
            duration: 0.35,
            ease: 'power3.out',
            force3D: true
        }, 0.35);
    }, [isAnimating, currentPage, totalPages]);

    const flipBackward = useCallback(() => {
        if (isAnimating || currentPage <= 0) return;
        setIsAnimating(true);

        const prevPageIndex = currentPage - 1;
        const pageEl = pageRefs.current[prevPageIndex];
        if (!pageEl) return;

        pageEl.style.zIndex = totalPages * 3;

        const shadow = shadowRef.current;
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentPage(prev => prev - 1);
                setIsAnimating(false);
                setTimeout(() => {
                    if (pageEl) pageEl.style.zIndex = '';
                }, 0);
            }
        });

        tl.to(shadow, {
            opacity: 0.4,
            duration: 0.35,
            ease: 'power3.in',
            force3D: true
        }, 0);
        tl.to(shadow, {
            opacity: 0,
            duration: 0.35,
            ease: 'power3.out',
            force3D: true
        }, 0.35);
        tl.to(pageEl, {
            rotateY: 0,
            z: 80,
            duration: 0.35,
            ease: 'power3.in',
            force3D: true
        }, 0);
        tl.to(pageEl, {
            z: 0,
            duration: 0.35,
            ease: 'power3.out',
            force3D: true
        }, 0.35);
    }, [isAnimating, currentPage, totalPages]);

    const goToPage = useCallback((targetIndex) => {
        if (isAnimating || targetIndex === currentPage || targetIndex < 0 || targetIndex >= totalPages) return;
        setIsAnimating(true);

        const direction = targetIndex > currentPage ? 'forward' : 'backward';
        const pagesToFlip = [];

        if (direction === 'forward') {
            for (let i = currentPage; i < targetIndex; i++) {
                pagesToFlip.push(i);
            }
        } else {
            for (let i = currentPage - 1; i >= targetIndex; i--) {
                pagesToFlip.push(i);
            }
        }

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentPage(targetIndex);
                setIsAnimating(false);
            }
        });

        pagesToFlip.forEach((pageIndex, i) => {
            const pageEl = pageRefs.current[pageIndex];
            if (!pageEl) return;

            pageEl.style.zIndex = totalPages * 3 + (direction === 'forward' ? -i : i);

            tl.to(pageEl, {
                rotateY: direction === 'forward' ? -180 : 0,
                z: 40,
                duration: 0.25,
                ease: 'power3.in',
                force3D: true
            }, i * 0.15);

            tl.to(pageEl, {
                z: 0,
                duration: 0.25,
                ease: 'power3.out',
                force3D: true
            }, (i * 0.15) + 0.25);
        });

        // Shadow pulse
        const shadow = shadowRef.current;
        tl.to(shadow, {
            opacity: 0.3,
            duration: 0.2,
            ease: 'power2.in',
        }, 0);
        tl.to(shadow, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
        }, (pagesToFlip.length * 0.12) + 0.2);
    }, [isAnimating, currentPage, totalPages]);

    // Listen for keyboard/swipe events from the hook
    useEffect(() => {
        const handleForward = () => flipForward();
        const handleBackward = () => flipBackward();

        window.addEventListener('notebook:flip-forward', handleForward);
        window.addEventListener('notebook:flip-backward', handleBackward);
        return () => {
            window.removeEventListener('notebook:flip-forward', handleForward);
            window.removeEventListener('notebook:flip-backward', handleBackward);
        };
    }, [flipForward, flipBackward]);

    // Keyboard navigation (direct)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                flipForward();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                flipBackward();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [flipForward, flipBackward]);

    // Touch/swipe
    useEffect(() => {
        let startX = 0;
        let startY = 0;
        const onStart = (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        };
        const onEnd = (e) => {
            const dx = e.changedTouches[0].clientX - startX;
            const dy = e.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
                if (dx < 0) flipForward();
                else flipBackward();
            }
        };
        window.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('touchend', onEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', onStart);
            window.removeEventListener('touchend', onEnd);
        };
    }, [flipForward, flipBackward]);

    return (
        <div className="notebook-container" role="main" aria-label="Interactive Portfolio notebook">

            <div className={`notebook ${currentPage > 0 ? 'notebook--open' : ''}`}>
                <SpiralBinding />

                <div className="pages-container">
                    {PAGES.map((page, index) => {
                        const PageComponent = page.component;
                        const isFlipped = index < currentPage;
                        return (
                            <div
                                key={index}
                                ref={el => pageRefs.current[index] = el}
                                className={`page ${isFlipped ? 'page--flipped' : ''}`}
                                style={{
                                    zIndex: getPageZIndex(index),
                                    transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                                }}
                                aria-hidden={index !== currentPage}
                            >
                                <div className="page__front paper-texture">
                                    <PageComponent isActive={index === currentPage} pageIndex={index} />
                                </div>
                                <div className="page__back paper-texture">
                                    {page.backContent && (() => {
                                        const BackComponent = page.backContent;
                                        return <BackComponent />;
                                    })()}
                                </div>
                            </div>
                        );
                    })}

                    {/* Shadow overlay during flip */}
                    <div
                        ref={shadowRef}
                        className="page__flip-shadow"
                        style={{ opacity: 0 }}
                    />


                </div>

                <TabNav
                    tabs={TABS}
                    currentPage={currentPage}
                    onTabClick={goToPage}
                />

                {/* Page indicator */}
                <div className="page-indicator">
                    <span className="page-indicator__current">{currentPage + 1}</span>
                    <span className="page-indicator__sep">/</span>
                    <span className="page-indicator__total">{totalPages}</span>
                </div>
            </div>
        </div>
    );
}
