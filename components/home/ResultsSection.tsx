const testimonials = [
  {
    quote: "Working with Noel improved our product's design efficiency by over 30% in just 3 months.",
    author: "— Former Client, Digital Product Company"
  },
  {
    quote: "Noel's mentorship helped me land my first lead designer role. Highly recommended!",
    author: "— Senior Designer, SaaS Startup"
  }
];

export default function ResultsSection() {
  return (
    <section className="w-full py-20 bg-gray-100 fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">Results</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white rounded-2xl shadow p-10 text-lg text-gray-800 italic flex flex-col justify-between">
              <span>“{t.quote}”</span>
              <span className="mt-4 text-gray-600 not-italic text-base">{t.author}</span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
} 