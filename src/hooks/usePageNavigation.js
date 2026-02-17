import { useState, useEffect, useCallback } from 'react';

export function usePageNavigation(totalPages) {
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const canGoForward = currentPage < totalPages - 1 && !isAnimating;
    const canGoBackward = currentPage > 0 && !isAnimating;

    const goForward = useCallback(() => {
        if (!canGoForward) return false;
        return true; // Signal that animation should proceed
    }, [canGoForward]);

    const goBackward = useCallback(() => {
        if (!canGoBackward) return false;
        return true;
    }, [canGoBackward]);

    const goToPage = useCallback((pageIndex) => {
        if (isAnimating || pageIndex < 0 || pageIndex >= totalPages || pageIndex === currentPage) return null;
        return pageIndex; // Return target for external handling
    }, [isAnimating, totalPages, currentPage]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                // Dispatch custom event for Notebook to handle
                window.dispatchEvent(new CustomEvent('notebook:flip-forward'));
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('notebook:flip-backward'));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Touch/swipe support
    useEffect(() => {
        let touchStartX = 0;
        let touchStartY = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;

            // Only handle horizontal swipes
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX < 0) {
                    window.dispatchEvent(new CustomEvent('notebook:flip-forward'));
                } else {
                    window.dispatchEvent(new CustomEvent('notebook:flip-backward'));
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return {
        currentPage,
        setCurrentPage,
        isAnimating,
        setIsAnimating,
        canGoForward,
        canGoBackward,
        goForward,
        goBackward,
        goToPage,
        totalPages,
    };
}
