import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Shield, Award, Users } from "lucide-react";
import { WHATSAPP_LINK, CLINIC_PHONE, STATS } from "../utils/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TRUST_PILLS = [
  { icon: CheckCircle2, text: "No-Pain Guarantee" },
  { icon: Shield,       text: "BDS & MDS Certified" },
  { icon: Award,        text: "Same-Day Slots" },
];

const PROOF_ITEMS = [
  { value: "8,000+", label: "Patients Treated" },
  { value: "4.9★",   label: "Google Rating"   },
  { value: "12+",    label: "Years Experience" },
  { value: "99%",    label: "Satisfaction"     },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 45%, #ecfdf5 100%)",
      }}
    >
      {/* ── Layered background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-sky-300/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-20  w-[560px] h-[560px] rounded-full bg-emerald-300/20 blur-[90px]" />
        <div className="absolute top-1/3   left-1/4  w-[400px] h-[400px] rounded-full bg-sky-200/15  blur-[80px]" />
      </div>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.032] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-14 items-center w-full">

        {/* ────────── LEFT ────────── */}
        <div className="flex flex-col">

          {/* Live badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-sm font-semibold mb-7 w-fit shadow-sm shadow-sky-100/50"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Now Accepting New Patients · Delhi NCR
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold text-slate-900 leading-[1.07] tracking-tight mb-6 font-display"
          >
            Your Perfect{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Smile
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: 0.55, ease: "easeOut" }}
                className="absolute bottom-1.5 left-0 right-0 h-3 bg-sky-200/45 rounded origin-left -z-0"
              />
            </span>
            <br />
            Starts Here.
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[17px] text-slate-500 leading-relaxed mb-8 max-w-[480px]"
          >
            World-class dental care in the heart of Connaught Place, New Delhi.
            Advanced technology, zero-pain procedures, and a team that actually
            cares about your comfort.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-2.5 mb-10"
          >
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm"
              >
                <Icon size={14} className="text-emerald-500" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-3.5 mb-12"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/40 transition-all duration-200 text-[15px]"
            >
              <WaIcon size={20} />
              Book Free Consultation
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href={`tel:${CLINIC_PHONE}`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-sky-300 hover:bg-sky-50/60 transition-all duration-200 text-[15px] shadow-sm"
            >
              <Phone size={17} className="text-sky-500" />
              Call Us Now
            </motion.a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-6"
          >
            {PROOF_ITEMS.map((p) => (
              <div key={p.label} className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-none">{p.value}</span>
                <span className="text-xs text-slate-400 font-medium mt-0.5">{p.label}</span>
              </div>
            ))}
            <div className="hidden sm:block w-px h-10 bg-slate-200 mx-1" />
            <div className="flex -space-x-2">
              {["PS","RK","AM","VN"].map((init, i) => (
                <div
                  key={init}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm"
                  style={{ background: ["#bae6fd","#d1fae5","#ede9fe","#fce7f3"][i], color: ["#0369a1","#047857","#6d28d9","#be123c"][i] }}
                >
                  {init}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-700 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                +99
              </div>
            </div>
            <span className="text-xs text-slate-500 font-medium">Happy patients this month</span>
          </motion.div>
        </div>

        {/* ────────── RIGHT ────────── */}
        <div className="hidden lg:flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[400px]"
          >
            {/* Floating top badge */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute -top-5 -left-6 z-20 flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-sky-100/70 border border-sky-100 px-4 py-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">This Month</p>
                <p className="text-sm font-bold text-slate-800">340 Smiles Treated</p>
              </div>
            </motion.div>

            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-sky-200/30 border border-slate-100/80 overflow-hidden">
              {/* Gradient top visual */}
              <div className="relative h-52 bg-gradient-to-br from-sky-500 via-sky-400 to-emerald-400 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute top-3  left-6  w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute bottom-3 right-4 w-36 h-36 bg-white/08 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/05 rounded-full" />
                </div>
                {/* Tooth SVG */}
                <svg width="115" height="118" viewBox="0 0 120 124" fill="none" className="drop-shadow-2xl" role="img" aria-label="Tooth illustration">
                  <ellipse cx="60" cy="30" rx="32" ry="26" fill="white" opacity="0.97"/>
                  <ellipse cx="38" cy="30" rx="13" ry="23" fill="white" opacity="0.97"/>
                  <ellipse cx="82" cy="30" rx="13" ry="23" fill="white" opacity="0.97"/>
                  <path d="M27 36 Q33 88 42 98 Q49 110 55 98 Q59 86 60 76 Q61 86 65 98 Q71 110 78 98 Q87 88 93 36" fill="white" opacity="0.97"/>
                  <ellipse cx="60" cy="30" rx="23" ry="19" fill="white"/>
                  <path d="M37 22 Q60 14 83 22" stroke="#bae6fd" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <ellipse cx="52" cy="27" rx="5" ry="3" fill="#e0f2fe" opacity="0.55"/>
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-slate-800 text-lg leading-snug">SmileCraft Dental Clinic</h3>
                  <span className="flex-shrink-0 px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[11px] font-semibold">Open</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">Connaught Place, New Delhi · 9 AM – 8 PM</p>
                <div className="flex items-center gap-1.5 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-sm text-slate-500 ml-1 font-medium">4.9 <span className="text-slate-400">(2,300+ reviews)</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={13} className="text-slate-400" />
                  <span className="text-xs text-slate-500">15 specialist dentists · Established 2013</span>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-5 -right-5 z-20 bg-gradient-to-br from-sky-500 to-emerald-500 text-white rounded-2xl shadow-lg shadow-sky-300/40 px-4 py-3 text-center"
            >
              <p className="text-[22px] font-black leading-none">4.9★</p>
              <p className="text-[10px] font-semibold opacity-80 mt-0.5">Google Rating</p>
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="grid grid-cols-4 gap-3 w-full max-w-[400px]"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-3.5 shadow-md shadow-sky-100/40 border border-slate-100/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-lg font-black text-slate-900">{s.value}</p>
                <p className="text-[10px] text-slate-400 font-semibold leading-tight mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
