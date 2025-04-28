import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="w-full py-16 bg-white text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to elevate your product or career?</h3>
      <Link
        href="/contact"
        className="inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Schedule a Free Call
      </Link>
    </section>
  );
} 