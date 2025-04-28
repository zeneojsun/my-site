export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Services I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Design System Consulting</h3>
            <p className="text-gray-600 text-base">Build scalable, efficient design systems.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">UX/UI Strategy & Product Design</h3>
            <p className="text-gray-600 text-base">Solve complex user problems.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Design Career Mentorship</h3>
            <p className="text-gray-600 text-base">Support designers from portfolio to leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 