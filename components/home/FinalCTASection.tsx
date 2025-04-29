import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="w-full py-16 bg-white text-center fade-in">
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Ready to elevate your product or career?</h3>
      <Link
        href="/contact"
        className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-700 transition"
      >
        Book a Free Call
      </Link>
    </section>
  );
} 