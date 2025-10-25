import { useMemo, useState } from 'react';
import { ShieldCheck, Star, Gift, Users, Mail, Phone, MapPin, Send } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function MainSections() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const posts = useMemo(() => [
    { id: 1, title: 'Top 10 Welcome Kit Ideas', img: 'https://images.unsplash.com/photo-1510017803434-a899398421b1?q=80&w=1200&auto=format&fit=crop', tag: 'Ideas' },
    { id: 2, title: 'Sustainable Merch 2025', img: 'https://images.unsplash.com/photo-1520975764748-692d3fcf1f24?q=80&w=1200&auto=format&fit=crop', tag: 'Sustainability' },
    { id: 3, title: 'Boost Event ROI with Swag', img: 'https://images.unsplash.com/photo-1512427691650-1f1c3b63a3af?q=80&w=1200&auto=format&fit=crop', tag: 'Events' },
  ], []);

  const clients = useMemo(() => [
    'https://dummyimage.com/100x100/111827/ffffff&text=A',
    'https://dummyimage.com/100x100/111827/ffffff&text=B',
    'https://dummyimage.com/100x100/111827/ffffff&text=C',
    'https://dummyimage.com/100x100/111827/ffffff&text=D',
    'https://dummyimage.com/100x100/111827/ffffff&text=E',
    'https://dummyimage.com/100x100/111827/ffffff&text=F',
  ], []);

  const services = useMemo(() => [
    { id: 'welcome-kits', icon: Gift, title: 'Employee Welcome Kits', desc: 'Curated first-day kits that spark belonging from day one.', price: 'From $39' },
    { id: 'event-swag', icon: Star, title: 'Event Swag & Booth Packs', desc: 'High-impact merchandise and booth-ready packs for events.', price: 'From $29' },
    { id: 'vip-gifting', icon: ShieldCheck, title: 'VIP & Client Gifting', desc: 'Premium, personalized presents that strengthen partnerships.', price: 'From $59' },
  ], []);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    const subject = encodeURIComponent('Newsletter Subscription Request');
    const body = encodeURIComponent(`Please subscribe this email to Fortune newsletter: ${newsletterEmail}`);
    window.location.href = `mailto:hello@fortune.inc?subject=${subject}&body=${body}`;
    setNewsletterEmail('');
  };

  const handleBook = (service) => {
    const subject = encodeURIComponent(`Booking Inquiry — ${service.title}`);
    const body = encodeURIComponent(
      `Hello Fortune Team,%0D%0A%0D%0AI'd like to book the service: ${service.title}.%0D%0A%0D%0AQuantity/Notes:%0D%0A%0D%0AName:%0D%0ACompany:%0D%0APhone:`
    );
    window.location.href = `mailto:hello@fortune.inc?subject=${subject}&body=${body}`;
  };

  const handleContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@fortune.inc?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div>
      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="About the Company" title="We turn branded moments into lasting relationships" subtitle="Fortune is a business solutions studio specializing in corporate gifting, event kits, and custom merchandise logistics." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center"><ShieldCheck className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold text-lg">Trusted, end-to-end</h3>
              <p className="mt-2 text-slate-600">From design to delivery, we manage every step so you don’t have to.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center"><Star className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold text-lg">Quality that delights</h3>
              <p className="mt-2 text-slate-600">Premium materials, sustainable options, and meticulous packaging.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="h-10 w-10 rounded-lg bg-cyan-600 text-white grid place-items-center"><Users className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold text-lg">People-first approach</h3>
              <p className="mt-2 text-slate-600">We tailor experiences to your audience, culture, and goals.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="Happy Clients" value="1,200+" />
            <Stat label="Kits Shipped" value="85k" />
            <Stat label="On-time Delivery" value="99.6%" />
            <Stat label="Countries Served" value="27" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Why Choose Us" title="Reliable partner for modern, scalable gifting" subtitle="Flexible MOQs, warehousing, global shipping, and a design team that cares." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Design & Sourcing</h3>
              <p className="mt-2 text-slate-600">We prototype, source sustainably, and ensure brand consistency across SKUs.</p>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li>Brand guardianship and QA</li>
                <li>Eco-friendly options</li>
                <li>Fast sampling and approvals</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Logistics & Fulfillment</h3>
              <p className="mt-2 text-slate-600">From kitting to last-mile — we handle storage, customs, and tracking.</p>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li>Warehouse & on-demand shipping</li>
                <li>Global coverage and customs clearance</li>
                <li>Live tracking and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section id="posts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Company Posts" title="Insights and ideas" subtitle="Thoughts on swag, culture, and building unforgettable experiences." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">{p.tag}</span>
                  <h3 className="mt-2 font-semibold text-lg group-hover:underline decoration-2 underline-offset-4">{p.title}</h3>
                  <p className="mt-2 text-slate-600">Discover practical tips and templates to kickstart your next campaign.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Client Section" title="Trusted by teams of all sizes" subtitle="We partner with startups, scale-ups, and global enterprises." />
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {clients.map((src, i) => (
              <div key={i} className="flex items-center justify-center">
                <img src={src} alt={`Client ${i + 1}`} className="h-14 w-14 rounded-full object-cover opacity-80 hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Services" title="All-in-one corporate gifting services" subtitle="Choose a category to get started. Book and receive confirmation instantly via email." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white grid place-items-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600 flex-1">{s.desc}</p>
                <div className="mt-4 text-sm text-slate-500">{s.price}</div>
                <div className="mt-6">
                  <button onClick={() => handleBook(s)} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Contact Us" title="Let’s build something people love" subtitle="Reach out for quotes, timelines, or a quick brainstorm." />
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Company Details</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-slate-500 mt-0.5" /><span>hello@fortune.inc</span></li>
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-slate-500 mt-0.5" /><span>+1 (123) 456-7890</span></li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-slate-500 mt-0.5" /><span>100 Market Street, Suite 200, San Francisco, CA</span></li>
              </ul>
              <div className="mt-6">
                <iframe title="Fortune Location" className="w-full rounded-xl border border-slate-200" height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=San%20Francisco&output=embed"></iframe>
              </div>
            </div>

            <form onSubmit={handleContact} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Send an Inquiry</h3>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input name="phone" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Optional" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea name="message" required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Tell us about your project"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
                  <Send className="h-4 w-4" /> Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Subscribe to updates</h3>
              <p className="mt-1 text-slate-600">Get product launches, guides, and exclusive offers.</p>
            </div>
            <form onSubmit={handleNewsletter} className="w-full md:w-auto flex gap-3">
              <input value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} type="email" required placeholder="you@company.com" className="w-full md:w-80 rounded-lg border border-slate-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <button type="submit" className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
