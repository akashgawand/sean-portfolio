"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { value: "3+", label: "Exits", suffix: "" },
  { value: "50", label: "Companies Scaled", suffix: "+" },
  { value: "$100M", label: "Value Created", suffix: "+" },
  { value: "10k", label: "Founders Trained", suffix: "+" },
];

export default function Credibility() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-y border-white/10 py-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center group"
          >
            <div className="flex items-baseline gap-1 overflow-hidden">
              <span className="text-5xl md:text-7xl font-bold  tracking-tighter text-white">
                {metric.value}
              </span>
              <span className="text-3xl md:text-5xl font-bold  text-white/50">
                {metric.suffix}
              </span>
            </div>
            <span className="text-sm md:text-base text-white/60 font-medium uppercase tracking-widest mt-4">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
