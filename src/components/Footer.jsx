import { Stethoscope, Heart, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { WHATSAPP_LINK, CLINIC_NAME, NAV_LINKS, CLINIC_PHONE, CLINIC_ADDRESS, CLINIC_EMAIL } from "../utils/constants";

const SOCIAL = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook"  },
  { icon: Twitter,   href: "#", label: "Twitter"   },
];

const SERVICES_LINKS = [
  "Teeth Cleaning", "Braces & Aligners", "Teeth Whitening",
  "Dental Implants", "Root Canal", "Cosmetic Dentistry",
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Subtle gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-900/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.08]">

          {/* ── Brand col ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Stethoscope size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white font-display">
                Smile<span className="text-sky-400">Craft</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] mb-6">
              Premium dental care at the heart of New Delhi. Trusted by 8,000+
              patients since 2013. Your smile is our life's work.
            </p>

            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] rounded-xl border border-white/10 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-slate-300 font-semibold">4.9 / 5 · 2,300 Google Reviews</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.08] hover:bg-sky-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 border border-white/[0.08] hover:border-sky-500"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[2px]">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-sky-400 group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors duration-150"
                >
                  Book Appointment
                  <span className="text-xs">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[2px]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${CLINIC_PHONE}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-150 leading-snug">
                  {CLINIC_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CLINIC_EMAIL}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-150 break-all leading-snug">
                  {CLINIC_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-sky-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">{CLINIC_ADDRESS}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            Made with{" "}
            <Heart size={10} className="text-rose-500 fill-rose-500" />{" "}
            for beautiful smiles in New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
