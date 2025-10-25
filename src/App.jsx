import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}
