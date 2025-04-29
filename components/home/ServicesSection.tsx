const services = [
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
        <span className="text-blue-600 text-2xl">💡</span>
      </div>
    ),
    title: "Design System Consulting",
    desc: "Build scalable, efficient design systems."
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
        <span className="text-blue-600 text-2xl">📐</span>
      </div>
    ),
    title: "UX/UI Product Strategy",
    desc: "Solve complex user problems."
  },
  {
    icon: (
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
        <span className="text-blue-600 text-2xl">🎓</span>
      </div>
    ),
    title: "Design Career Coaching",
    desc: "Support designers from portfolio to leadership."
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-gray-50 fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-8 text-center flex flex-col items-center hover:shadow-lg transition">
              {s.icon}
              <h3 className="font-semibold text-lg mb-2" style={{fontFamily: 'Inter, sans-serif'}}>{s.title}</h3>
              <p className="text-gray-600 text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 