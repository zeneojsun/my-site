import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center bg-white px-4 fade-in overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-white opacity-80" />
      </div>
      <h1 className="relative z-10 font-extrabold text-black text-[3rem] md:text-[5rem] lg:text-[6rem] leading-tight mb-6 tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>
        Noel Cheung
      </h1>
      <h2 className="relative z-10 text-xl md:text-2xl text-gray-700 mb-6 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
        Design System Consultant | UX Mentor | Product Design Expert
      </h2>
      <p className="relative z-10 text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Helping companies and designers build scalable, user-centered digital products.
      </p>
      <Link
        href="/contact"
        className="relative z-10 inline-block px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Book a Free Call
      </Link>
    </section>
  );
} 