import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../utils/constants";

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-slate-600"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const SOCIAL_PROOF = [
  { value: "4.9/5", label: "Google Reviews", sub: "2,300+ reviews" },
  { value: "99%",   label: "Recommend Us",   sub: "Based on surveys"  },
  { value: "8k+",   label: "Patients Treated",sub: "Since 2013"       },
];

/* Avatar ring colors per testimonial */
const AVATAR_STYLES = {
  "bg-sky-100 text-sky-700":       { ring: "ring-sky-300/40",    dot: "bg-sky-400"    },
  "bg-emerald-100 text-emerald-700":{ ring: "ring-emerald-300/40",dot: "bg-emerald-400" },
  "bg-violet-100 text-violet-700": { ring: "ring-violet-300/40", dot: "bg-violet-400"  },
  "bg-rose-100 text-rose-700":     { ring: "ring-rose-300/40",   dot: "bg-rose-400"   },
};

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0f172a 0%, #0c1a2e 60%, #0f172a 100%)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-500/12 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mx-auto text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="inline-block text-sky-400 font-bold text-sm uppercase tracking-[3px] mb-3"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 font-display"
          >
            Real Smiles,{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Real Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Don't take our word for it — hear from thousands of patients whose
            smiles we've had the privilege to transform.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {TESTIMONIALS.map((t, i) => {
            const avatarStyle = AVATAR_STYLES[t.color] ?? { ring: "ring-sky-300/40", dot: "bg-sky-400" };
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -7, transition: { duration: 0.18 } }}
                className="group flex flex-col bg-white/[0.06] border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.10] hover:border-white/18 transition-all duration-200"
              >
                {/* Top row: quote icon + stars */}
                <div className="flex items-center justify-between mb-4">
                  <Quote size={22} className="text-sky-400/50" />
                  <StarRating count={t.rating} />
                </div>

                {/* Review text */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.review}"
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative flex-shrink-0">
                    <div className={`w-11 h-11 rounded-full ${t.color} ring-2 ${avatarStyle.ring} flex items-center justify-center font-bold text-sm`}>
                      {t.initials}
                    </div>
                    {/* Online dot */}
                    <span className={`absolute bottom-0 right-0 w-3 h-3 ${avatarStyle.dot} rounded-full border-2 border-slate-900`} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto flex-shrink-0 flex items-center gap-1 px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/20 rounded-full">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="#34d399"><path d="M2 6l3 3 5-5"/></svg>
                    <span className="text-[10px] text-emerald-400 font-semibold">Verified</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {SOCIAL_PROOF.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-[34px] font-black text-white leading-none mb-1">{item.value}</span>
              <span className="text-sky-400 font-semibold text-sm mb-0.5">{item.label}</span>
              <span className="text-slate-600 text-xs">{item.sub}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
