import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Noel Cheung</h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
        Design System Consultant | UX Mentor | Product Design Expert
      </h2>
      <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-700 mb-8">
        Helping companies and designers build scalable, user-centered digital products.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Book a Free Call
      </Link>
    </section>
  );
} 