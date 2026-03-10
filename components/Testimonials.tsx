"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "He completely rewired how I view growth. Our MRR tripled in 12 months.",
    author: "Sarah J.",
    role: "CEO, SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The only person I trust when my operations are breaking under scale.",
    author: "Michael T.",
    role: "Founder, Enterprise AI",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent relative"
          >
            <div className="absolute top-6 left-6 text-white/10 text-6xl font-serif">
              "
            </div>
            <p className="text-xl md:text-2xl  font-medium text-white/90 italic leading-relaxed z-10 pt-4">
              {item.quote}
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-white/50 text-sm tracking-wide">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
