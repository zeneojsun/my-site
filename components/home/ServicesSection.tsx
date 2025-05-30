import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="40" height="40" fill="none" className="mx-auto mb-4">
        <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="3" />
        <rect x="14" y="14" width="12" height="12" rx="3" fill="#2563eb" />
      </svg>
    ),
    title: "Design System Consulting",
    desc: "Build scalable, efficient design systems."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" className="mx-auto mb-4">
        <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="3" />
        <path d="M20 12v16M12 20h16" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "UX/UI Product Strategy",
    desc: "Solve complex user problems."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" className="mx-auto mb-4">
        <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="3" />
        <path d="M20 14v12M16 18h8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Design Career Coaching",
    desc: "Support designers from portfolio to leadership."
  }
];

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full py-20 bg-white dark:bg-[#1a1a1c] fade-in"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-tight dark:text-white">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow p-10 text-center flex flex-col items-center hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
              {s.icon}
              <h3 className="font-semibold text-xl mb-2 dark:text-gray-200">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 