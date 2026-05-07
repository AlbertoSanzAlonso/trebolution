import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import ExperiencePage from './components/ExperiencePage';
import CostaRicaPage from './components/CostaRicaPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-accent selection:text-white">
        <Routes>
          <Route path="/experience/costa-rica" element={<CostaRicaPage />} />
          <Route path="/experience/:id" element={<ExperiencePage />} />
          <Route path="/" element={<Navigate to="/experience/india" replace />} />
          {/* Fallback for any other route */}
          <Route path="*" element={<Navigate to="/experience/india" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
