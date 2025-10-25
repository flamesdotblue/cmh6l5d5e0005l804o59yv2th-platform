import Spline from '@splinetool/react-spline';
import { Rocket, Gift } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[80vh] md:h-[90vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Fortune — Elevate your brand with business goodies
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700">
              We craft memorable corporate gifting, event kits, and branded experiences that delight people and drive results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('#services')} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800">
                <Rocket className="h-4 w-4" /> Explore Services
              </button>
              <button onClick={() => scrollTo('#contact')} className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold border border-slate-300 hover:bg-slate-50">
                <Gift className="h-4 w-4" /> Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
