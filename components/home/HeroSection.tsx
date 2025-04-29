import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center bg-white px-4 fade-in">
      <h1 className="font-bold text-black text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] leading-tight mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Noel Cheung</h1>
      <h2 className="text-lg md:text-2xl text-gray-700 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Design System Consultant | UX Mentor | Product Design Expert</h2>
      <p className="text-base md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">Helping companies and designers build scalable, user-centered digital products.</p>
      <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-700 transition">Book a Free Call</Link>
    </section>
  );
} 