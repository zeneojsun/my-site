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
    <section className="w-full py-20 bg-white fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl shadow p-10 text-center flex flex-col items-center hover:shadow-xl transition">
              {s.icon}
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600 text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 