import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK, CLINIC_PHONE, CLINIC_EMAIL } from "../utils/constants";

/* ── Reusable contact card ── */
function ContactCard({ icon: Icon, label, value, href, iconColor, iconBg, delay, inView }) {
  const inner = (
    <div className="flex gap-4 items-start">
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex-shrink-0 flex items-center justify-center shadow-sm`}>
        <Icon size={18} className={iconColor} />
      </div>
      <div>
        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide mb-1">{label}</p>
        <p className="text-slate-700 text-sm font-semibold leading-snug">{value}</p>
      </div>
    </div>
  );

  const cls = `block p-5 rounded-2xl border transition-all duration-200 ${
    href
      ? "border-slate-100 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
      : "border-slate-100 cursor-default"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <div className={cls}>{inner}</div>
      )}
    </motion.div>
  );
}

const CONTACT_ITEMS = [
  {
    icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210",
    iconColor: "text-sky-600",    iconBg: "bg-sky-50",
  },
  {
    icon: Mail,  label: "Email", value: "hello@smilecraftdental.in", href: "mailto:hello@smilecraftdental.in",
    iconColor: "text-emerald-600",iconBg: "bg-emerald-50",
  },
  {
    icon: MapPin,label: "Address",value: "42, Park Street, Connaught Place, New Delhi – 110001",
    href: "https://maps.google.com/?q=Connaught+Place+New+Delhi",
    iconColor: "text-rose-500",   iconBg: "bg-rose-50",
  },
  {
    icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 8 PM  |  Sun: 10 AM – 4 PM",
    href: null,
    iconColor: "text-violet-600", iconBg: "bg-violet-50",
  },
];

const WaIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/40 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mx-auto text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="inline-block text-sky-600 font-bold text-sm uppercase tracking-[3px] mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5 font-display"
          >
            We're Just a{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Message Away
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Reach us on WhatsApp, phone, or email — or walk into our Connaught
            Place clinic any day. We'd love to meet you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: info + WA CTA ── */}
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {CONTACT_ITEMS.map((item, i) => (
                <ContactCard key={item.label} {...item} delay={i * 0.09 + 0.2} inView={inView} />
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-5 p-6 bg-gradient-to-r from-[#25D366] via-[#20bd5b] to-[#128C7E] rounded-2xl shadow-lg shadow-emerald-400/25 hover:shadow-xl hover:shadow-emerald-400/35 transition-all duration-200 overflow-hidden"
            >
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none" aria-hidden="true" />
              {/* Pulse ring on icon */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center z-10 relative">
                  <WaIcon />
                </div>
                <span className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-30" aria-hidden="true" />
              </div>

              <div className="flex-1 relative z-10">
                <p className="text-white font-bold text-base mb-0.5">Book Appointment on WhatsApp</p>
                <p className="text-white/80 text-sm">Instant confirmation · Available 24 / 7</p>
              </div>

              <ArrowRight size={18} className="text-white/60 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </motion.a>

            {/* Reassurance strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 px-1"
            >
              {["Free first consultation","No hidden charges","EMI options available"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#10b981" strokeWidth="2"><path d="M2 6l3 3 5-5"/></svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-[440px] lg:h-full min-h-[380px]"
          >
            <iframe
              title="SmileCraft Dental Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.892!2d77.218!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f3!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
