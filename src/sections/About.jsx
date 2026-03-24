import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Microscope, HeartHandshake, Quote } from "lucide-react";
import { STATS } from "../utils/constants";

/* ── Reusable section header ── */
export function SectionHeader({ eyebrow, title, highlight, subtitle, dark = false, ref: externalRef }) {
  return (
    <div ref={externalRef} className="max-w-2xl mx-auto text-center mb-16">
      <span className={`inline-block text-sm font-bold uppercase tracking-[3px] mb-3 ${dark ? "text-sky-400" : "text-sky-600"}`}>
        {eyebrow}
      </span>
      <h2 className={`text-4xl sm:text-5xl font-extrabold leading-tight mb-5 font-display ${dark ? "text-white" : "text-slate-900"}`}>
        {title}{" "}
        <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className={`text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {subtitle}
      </p>
    </div>
  );
}

/* ── Pillar card icon colors ── */
const PILLARS = [
  {
    icon: Award,
    title: "12+ Years of Excellence",
    desc: "Over a decade of delivering exceptional dental care to thousands of patients across Delhi NCR.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    hoverBorder: "hover:border-sky-200",
    hoverBg: "hover:bg-sky-50/60",
    glow: "hover:shadow-sky-100/60",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "Digital X-rays, 3D scanning, and laser dentistry — we invest in the best so you experience the best.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-200",
    hoverBg: "hover:bg-emerald-50/60",
    glow: "hover:shadow-emerald-100/60",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Philosophy",
    desc: "Your comfort is our top priority. We listen, explain, and make you feel at ease — every single visit.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    hoverBorder: "hover:border-rose-200",
    hoverBg: "hover:bg-rose-50/60",
    glow: "hover:shadow-rose-100/60",
  },
  {
    icon: Users,
    title: "Team of 15 Specialists",
    desc: "Experienced dentists, orthodontists, and cosmetic specialists — all under one roof.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-200",
    hoverBg: "hover:bg-violet-50/60",
    glow: "hover:shadow-violet-100/60",
  },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50/60 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-50/50 rounded-full translate-y-1/3 -translate-x-1/3 blur-[60px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="inline-block text-sky-600 font-bold text-sm uppercase tracking-[3px] mb-3"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5 font-display"
          >
            Delhi's Most Trusted{" "}
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Dental Clinic
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            At SmileCraft Dental, we believe a healthy smile is the foundation of confidence.
            Founded in 2013, we've been making premium dental care accessible, comfortable,
            and — dare we say — enjoyable.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-gradient-to-r from-sky-500 via-sky-500 to-emerald-500 rounded-3xl p-8 sm:p-10 mb-16 grid grid-cols-2 sm:grid-cols-4 gap-8 shadow-2xl shadow-sky-300/30 overflow-hidden"
        >
          {/* Internal shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-3xl" aria-hidden="true" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" aria-hidden="true" />

          {STATS.map((s) => (
            <div key={s.label} className="text-center relative z-10">
              <p className="text-[40px] font-black text-white leading-none mb-1">{s.value}</p>
              <p className="text-sm text-sky-100 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i + 0.2, duration: 0.55 }}
              whileHover={{ y: -6, transition: { duration: 0.18 } }}
              className={`relative p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg ${p.glow} ${p.hoverBorder} ${p.hoverBg} transition-all duration-200 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                <p.icon size={21} className={p.iconColor} />
              </div>
              <h3 className="font-bold text-slate-800 text-[15px] mb-2 leading-snug">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Doctor quote card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-7 overflow-hidden shadow-2xl shadow-slate-900/30"
        >
          {/* Decorative circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-500/10 rounded-full pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full pointer-events-none" aria-hidden="true" />

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-400/30">
              DM
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
              <svg width="9" height="9" viewBox="0 0 12 12" fill="white"><path d="M2 6l3 3 5-5"/></svg>
            </span>
          </div>

          <div className="flex-1 relative z-10">
            <div className="flex items-start gap-2 mb-3">
              <Quote size={18} className="text-sky-400/60 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                I founded SmileCraft because I wanted every patient — regardless of background — to
                have access to world-class dental care. When you walk in here, you're family.
                And we'll make sure you leave smiling.
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-base">Dr. Arjun Mehta, BDS, MDS</p>
              <p className="text-sky-400 text-sm font-medium">Lead Dentist & Founder · 12+ Years Experience</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
