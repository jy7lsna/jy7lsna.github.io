import { useState, useEffect } from 'react';
import Notebook from './components/Notebook/Notebook';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';

function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=enter, 1=show, 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`loader ${phase >= 2 ? 'loader--exit' : ''}`}>
      <div className={`loader__content ${phase >= 1 ? 'loader__content--visible' : ''}`}>
        <div className="loader__icon">📓</div>
        <div className="loader__title">
          <span className="loader__at">@</span>
          <span className="loader__name">MyPortfolio</span>
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
      <div className={`app ${loaded ? 'app--loaded' : ''}`} style={{ opacity: loading ? 0 : 1 }}>
        <div className="app__background">
          <div className="app__grain" />
        </div>
        <ThemeToggle />
        <Notebook />
      </div>
    </>
  );
}

export default App;
