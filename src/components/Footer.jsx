import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 grid place-items-center text-white font-bold">F</div>
              <div className="leading-tight">
                <div className="text-lg font-extrabold tracking-tight">Fortune</div>
                <div className="text-xs text-slate-500 -mt-0.5">Business Solutions</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Corporate gifting and branded experiences that make an impact.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:underline underline-offset-4">About Us</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Services</a></li>
              <li><a href="#posts" className="hover:underline underline-offset-4">Posts</a></li>
              <li><a href="#clients" className="hover:underline underline-offset-4">Clients</a></li>
              <li><a href="#contact" className="hover:underline underline-offset-4">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#newsletter" className="hover:underline underline-offset-4">Newsletter</a></li>
              <li><a href="#services" className="hover:underline underline-offset-4">Pricing</a></li>
              <li><a href="#posts" className="hover:underline underline-offset-4">Blog</a></li>
              <li><a href="#home" className="hover:underline underline-offset-4">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-slate-500 mt-0.5" /> hello@fortune.inc</li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-slate-500 mt-0.5" /> +1 (123) 456-7890</li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-slate-500 mt-0.5" /> 100 Market Street, Suite 200, San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Fortune, Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline underline-offset-4">Home</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#services" className="hover:underline underline-offset-4">Services</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
