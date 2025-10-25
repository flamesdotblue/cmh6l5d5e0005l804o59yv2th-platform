import { useCallback, useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Posts', href: '#posts' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const onNavClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3" onClick={(e) => onNavClick(e, '#home')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 grid place-items-center text-white font-bold">F</div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight">Fortune</div>
              <div className="text-xs text-slate-500 -mt-0.5">Business Solutions</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => onNavClick(e, n.href)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline underline-offset-8"
              >
                {n.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="mailto:hello@fortune.inc" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
              <Mail className="h-4 w-4" /> hello@fortune.inc
            </a>
            <a href="tel:+11234567890" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
              <Phone className="h-4 w-4" /> +1 (123) 456-7890
            </a>
            <div className="flex items-center gap-3">
              <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <button className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => onNavClick(e, n.href)} className="block text-base font-medium text-slate-800">
                {n.label}
              </a>
            ))}
            <div className="pt-3 flex items-center gap-4">
              <a href="mailto:hello@fortune.inc" className="flex items-center gap-2 text-sm text-slate-700"><Mail className="h-4 w-4" />Email</a>
              <a href="tel:+11234567890" className="flex items-center gap-2 text-sm text-slate-700"><Phone className="h-4 w-4" />Call</a>
              <div className="ml-auto flex items-center gap-3">
                <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-700"><Facebook className="h-5 w-5" /></a>
                <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-700"><Twitter className="h-5 w-5" /></a>
                <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-700"><Linkedin className="h-5 w-5" /></a>
                <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-700"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
