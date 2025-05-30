import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full py-20 bg-white dark:bg-[#18181a] fade-in"
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight dark:text-white">About Me</h2>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
          I'm Noel Cheung, a design system consultant and UX mentor with over 14 years of experience. I've helped startups and enterprises build scalable, user-centered products and mentored hundreds of designers worldwide. My approach blends business goals with design excellence, ensuring every project delivers measurable results and lasting impact.
        </p>
      </div>
    </motion.section>
  );
} 