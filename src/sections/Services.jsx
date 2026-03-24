import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Smile, Star, Shield, Heart, Zap, ArrowRight } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "../utils/constants";

const ICON_MAP = { Sparkles, Smile, Star, Shield, Heart, Zap };

/* Colour palette per service — icon bg, icon color, card hover accent */
const PALETTE = {
  1: { iconBg: "bg-sky-100",    icon: "text-sky-600",    accent: "from-sky-500/8 to-cyan-500/5",    border: "hover:border-sky-200/80",  shadow: "hover:shadow-sky-100/70"   },
  2: { iconBg: "bg-emerald-100",icon: "text-emerald-600",accent: "from-emerald-500/8 to-teal-500/5",border: "hover:border-emerald-200/80",shadow: "hover:shadow-emerald-100/70"},
  3: { iconBg: "bg-amber-100",  icon: "text-amber-600",  accent: "from-amber-500/8 to-yellow-500/5",border: "hover:border-amber-200/80", shadow: "hover:shadow-amber-100/70"  },
  4: { iconBg: "bg-violet-100", icon: "text-violet-600", accent: "from-violet-500/8 to-indigo-500/5",border:"hover:border-violet-200/80",shadow: "hover:shadow-violet-100/70"  },
  5: { iconBg: "bg-rose-100",   icon: "text-rose-500",   accent: "from-rose-500/8 to-pink-500/5",   border: "hover:border-rose-200/80",  shadow: "hover:shadow-rose-100/70"   },
  6: { iconBg: "bg-sky-100",    icon: "text-sky-600",    accent: "from-sky-500/8 to-blue-500/5",    border: "hover:border-sky-200/80",  shadow: "hover:shadow-sky-100/70"   },
};

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="inline-block text-sky-600 font-bold text-sm uppercase tracking-[3px] mb-3"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5 font-display"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Dental Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            From your first cleaning to a complete smile transformation — everything your smile needs, all under one roof.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const pal  = PALETTE[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09 + 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7, transition: { duration: 0.18 } }}
                className={`group relative bg-white rounded-2xl border border-slate-100/90 p-7 shadow-sm hover:shadow-xl ${pal.shadow} ${pal.border} transition-all duration-200 overflow-hidden`}
              >
                {/* Hover colour wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pal.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl pointer-events-none`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${pal.iconBg} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={23} className={pal.icon} />
                  </div>

                  {/* Text */}
                  <h3 className="font-bold text-slate-800 text-[17px] mb-2.5 leading-snug">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

                  {/* Link */}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link ${pal.icon} hover:gap-2.5`}
                  >
                    Book This Service
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-500 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-sky-400/25 overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-14 -right-14 w-56 h-56 bg-white/10 rounded-full pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-16 w-28 h-28 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" aria-hidden="true" />
          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent rounded-3xl pointer-events-none" aria-hidden="true" />

          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Not sure which treatment you need?</h3>
            <p className="text-sky-100 text-sm">Book a free 15-minute consultation — our specialists will guide you.</p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-sky-600 font-bold rounded-xl hover:bg-sky-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm shadow-md whitespace-nowrap"
          >
            <WaIcon />
            Get Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}
