"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "SaaS Academy",
    description:
      "The premier coaching program for B2B SaaS founders looking to scale past $10M ARR.",
    link: "Join the Academy",
  },
  {
    title: "Private Equity",
    description:
      "Strategic capital and operational expertise for high-growth software companies.",
    link: "Partner With Us",
  },
];

export default function Offerings() {
  return (
    <section className="w-full py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl  font-bold text-white mb-16 text-center"
      >
        How We Work Together
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            className="group relative p-10 md:p-14 border border-white/10 rounded-2xl bg-gradient-to-b from-white/5 to-transparent overflow-hidden hover:border-white/30 transition-all duration-300"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <h3 className="text-3xl font-bold  text-white mb-4 relative z-10">
              {prog.title}
            </h3>
            <p className="text-white/60  mb-10 text-lg relative z-10">
              {prog.description}
            </p>

            <button className="text-white font-semibold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
              {prog.link} <span className="text-xl leading-none">→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
