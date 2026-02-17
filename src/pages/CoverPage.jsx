import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CoverPage.css';

export default function CoverPage({ isActive }) {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const arrowRef = useRef(null);
    const decorRef = useRef(null);
    const lineRef = useRef(null);
    const authorRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    const fullText = 'Creative Designer & Developer';

    // Typing animation
    useEffect(() => {
        if (!isActive || !showCursor) return;
        if (typedText.length >= fullText.length) return;

        const timer = setTimeout(() => {
            setTypedText(fullText.slice(0, typedText.length + 1));
        }, 60 + Math.random() * 40); // Slightly random timing for natural feel

        return () => clearTimeout(timer);
    }, [isActive, typedText, showCursor, fullText]);

    useEffect(() => {
        if (isActive) {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.fromTo(titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
            );
            tl.fromTo(lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.5, ease: 'power3.out', clearProps: 'all' },
                '-=0.3'
            );
            // Start typing after title and line appear
            tl.call(() => setShowCursor(true));
            tl.fromTo(arrowRef.current,
                { y: 0, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', clearProps: 'all' },
                '+=0.8'
            );
            tl.fromTo(authorRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'all' },
                '-=0.3'
            );

            // Floating arrow animation
            gsap.to(arrowRef.current, {
                y: 8,
                duration: 1.2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                delay: 2.5,
            });
        }
    }, [isActive]);

    return (
        <div className="cover-page">
            {/* Decorative tape strip at top */}
            <div className="cover-page__tape" />

            {/* Decorative background elements */}
            <div className="cover-page__decor" ref={decorRef}>
                <div className="cover-page__dot cover-page__dot--1" />
                <div className="cover-page__dot cover-page__dot--2" />
                <div className="cover-page__dot cover-page__dot--3" />
                <div className="cover-page__dot cover-page__dot--4" />
                <div className="cover-page__line cover-page__line--1" />
                <div className="cover-page__line cover-page__line--2" />
                <div className="cover-page__line cover-page__line--3" />
            </div>

            <div className="cover-page__content">
                <div className="cover-page__badge">PORTFOLIO</div>

                <h1 ref={titleRef} className="cover-page__title">
                    <span className="cover-page__at">@</span>MyPortfolio
                </h1>

                <div ref={lineRef} className="cover-page__title-rule" />

                <p ref={subtitleRef} className="cover-page__subtitle">
                    {typedText}
                    {showCursor && <span className="cover-page__cursor">|</span>}
                </p>

                <div className="cover-page__meta">
                    <span className="cover-page__meta-item">2022 — 2026</span>
                    <span className="cover-page__meta-sep">·</span>
                    <span className="cover-page__meta-item">Selected Works</span>
                </div>

                <div ref={authorRef} className="cover-page__author">
                    By Jyolsna Maria Joemon
                </div>

                <div ref={arrowRef} className="cover-page__arrow" aria-hidden="true">
                    <span>Click to flip →</span>
                </div>
            </div>

            {/* Sticker decorations */}
            <div className="cover-page__sticker cover-page__sticker--star">★</div>
            <div className="cover-page__sticker cover-page__sticker--heart">♥</div>
            <div className="cover-page__sticker cover-page__sticker--sparkle">✦</div>

            {/* Paper clip decoration */}
            <div className="cover-page__paperclip" />

            {/* Corner fold */}
            <div className="cover-page__corner-fold" />
        </div>
    );
}
