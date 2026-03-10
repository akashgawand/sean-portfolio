"use client";

import { motion } from "framer-motion";

const logos = [
  "FORBES",
  "TECHCRUNCH",
  "WALL STREET JOURNAL",
  "ENTREPRENEUR",
  "FAST COMPANY",
  "INC.",
  "WIRED",
];

export default function MediaMentions() {
  return (
    <section className="w-full overflow-hidden py-12 border-y border-white/5 bg-white/5 rounded-2xl">
      <p className="text-center text-sm uppercase tracking-widest font-semibold text-white/40 mb-8">
        As Featured In
      </p>

      <div className="relative flex overflow-hidden w-full">
        <motion.div
          className="flex gap-16 whitespace-nowrap min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Duplicate list for seamless infinite marquee scroll */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <h3
              key={index}
              className="text-3xl md:text-4xl  font-bold text-white/20 whitespace-nowrap"
            >
              {logo}
            </h3>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
