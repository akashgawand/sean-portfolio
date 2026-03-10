"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Huge typography / Bio */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=" text-3xl md:text-5xl font-semibold leading-tight text-white mb-8"
          >
            "I don't just teach theory. I share the exact frameworks I used to
            build and exit three companies."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 text-white/70 text-lg md:text-xl  font-light"
          >
            <p>
              Hi, I'm the entrepreneur you bring in when you're stuck in the
              weeds and need to level up as a CEO.
            </p>
            <p>
              My mission is to help visionary founders reclaim their lives,
              build high-performing executive teams, and scale their MRR without
              sacrificing their health or family. Let's engineer your empire.
            </p>
          </motion.div>
        </div>

        {/* Right: Premium Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 rounded-2xl pointer-events-none" />
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="Professional Portrait"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
