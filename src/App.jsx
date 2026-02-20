import { useState, useEffect } from 'react';
import Notebook from './components/Notebook/Notebook';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';

const LOADING_TIPS = [
  "Loading components...",
  "Preparing assets...",
  "Initializing workspace...",
  "Powering up..."
];

function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=enter, 1=show, 2=exit
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 2000); // 2s drawing animation
    const t3 = setTimeout(() => onComplete(), 2800); // 2.8s total sequence

    // Cycle tips at a snappy pace
    const tipInterval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % LOADING_TIPS.length);
    }, 1000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearInterval(tipInterval);
    };
  }, [onComplete]);

  return (
    <div className={`loader ${phase >= 2 ? 'loader--exit' : ''}`}>
      <div className="loader__doodles">
        <div className="loader__doodle loader__doodle--star">⭐</div>
        <div className="loader__doodle loader__doodle--heart">❤️</div>
        <div className="loader__doodle loader__doodle--plane">✈️</div>
        <div className="loader__doodle loader__doodle--pencil">✏️</div>
      </div>

      <div className={`loader__content ${phase >= 1 ? 'loader__content--visible' : ''}`}>
        <div className="loader__icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="loader__svg-book">
            <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="draw-path" />
            <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="draw-path" />
            <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="draw-path" />
            <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="draw-path" />
            <path d="M8 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="draw-path" />
          </svg>
        </div>
        <div className="loader__suggestion handwritten">
          {LOADING_TIPS[tipIndex]}
        </div>
        <div className="loader__bar">
          <div className={`loader__fill ${phase >= 1 ? 'loader__fill--active' : ''}`} />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`app ${loaded ? 'app--loaded' : ''}`} style={{ opacity: 1 }}>
        <div className="app__background">
          <div className="app__grain" />
        </div>

        {/* Procedural Crumpled Paper Filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
          <filter id="crumpled-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="2" result="diffuse">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
            <feComposite in="diffuse" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
          </filter>
        </svg>

        <ThemeToggle />
        <Notebook />
      </div>
    </>
  );
}

export default App;
