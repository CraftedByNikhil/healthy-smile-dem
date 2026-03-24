export const CLINIC_NAME = "SmileCraft Dental";
export const CLINIC_TAGLINE = "Crafting Smiles, Changing Lives";
export const CLINIC_PHONE = "+91 98765 43210";
export const CLINIC_ADDRESS = "42, Park Street, Connaught Place, New Delhi – 110001";
export const CLINIC_EMAIL = "hello@smilecraftdental.in";

const WA_NUMBER = "919876543210";
const WA_MESSAGE = encodeURIComponent("Hello! I would like to book an appointment at SmileCraft Dental. Please let me know your available slots. Thank you!");

export const WHATSAPP_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: 1,
    icon: "Sparkles",
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing that removes plaque and tartar buildup, leaving your teeth fresh, clean, and brilliantly bright.",
    color: "from-sky-400 to-cyan-300",
    bg: "bg-sky-50",
  },
  {
    id: 2,
    icon: "Smile",
    title: "Braces & Aligners",
    description: "Customised orthodontic solutions — traditional braces or invisible aligners — for perfectly aligned teeth and a confident smile.",
    color: "from-emerald-400 to-teal-300",
    bg: "bg-emerald-50",
  },
  {
    id: 3,
    icon: "Star",
    title: "Teeth Whitening",
    description: "Advanced in-office whitening treatments that lighten your teeth by up to 8 shades in a single session — safely and effectively.",
    color: "from-amber-400 to-yellow-300",
    bg: "bg-amber-50",
  },
  {
    id: 4,
    icon: "Shield",
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements using titanium implants that fuse with your jawbone for a lifetime of strong, beautiful smiles.",
    color: "from-violet-400 to-indigo-300",
    bg: "bg-violet-50",
  },
  {
    id: 5,
    icon: "Heart",
    title: "Root Canal",
    description: "Pain-free root canal therapy using rotary endodontics and advanced anaesthesia, so you leave the chair comfortable and relieved.",
    color: "from-rose-400 to-pink-300",
    bg: "bg-rose-50",
  },
  {
    id: 6,
    icon: "Zap",
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers tailored to your face — because your smile is your most powerful first impression.",
    color: "from-sky-400 to-blue-300",
    bg: "bg-sky-50",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer, Gurugram",
    initials: "PS",
    rating: 5,
    review: "I was terrified of dental visits for years. Dr. Mehta and his team made me feel so comfortable. Got my braces here and the transformation is unreal. I smile in every photo now!",
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: 2,
    name: "Rohan Kapoor",
    role: "Business Owner, Noida",
    initials: "RK",
    rating: 5,
    review: "Had a dental implant procedure done here. The entire process was explained clearly, zero pain during surgery, and the implant looks completely natural. Worth every rupee.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    name: "Ananya Mishra",
    role: "Teacher, Delhi",
    initials: "AM",
    rating: 5,
    review: "Brought my 8-year-old here and was amazed at how gentle the staff was. The clinic is spotless, modern, and the doctor explains everything in simple terms. Our whole family comes here now.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: 4,
    name: "Vikram Nair",
    role: "Marketing Head, Mumbai",
    initials: "VN",
    rating: 5,
    review: "Teeth whitening session was done in under an hour. The results were jaw-dropping — 7 shades lighter! The hygiene standards here are world-class. Highly recommend SmileCraft.",
    color: "bg-rose-100 text-rose-700",
  },
];

export const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "8,000+", label: "Happy Patients" },
  { value: "15", label: "Expert Dentists" },
  { value: "99%", label: "Satisfaction Rate" },
];
