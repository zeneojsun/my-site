import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="w-full py-20 bg-white text-center fade-in">
      <h3 className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight">Ready to elevate your product or career?</h3>
      <Link
        href="/contact"
        className="inline-block px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Book a Free Call
      </Link>
    </section>
  );
} 