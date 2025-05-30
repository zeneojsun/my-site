import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full py-20 bg-white dark:bg-[#1a1a1c] text-center fade-in"
    >
      <h3 className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight dark:text-white">Ready to elevate your product or career?</h3>
      <Link
        href="/contact"
        className="inline-block px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-200 hover:scale-105 hover:shadow-xl"
      >
        Book a Free Call
      </Link>
    </motion.section>
  );
} 