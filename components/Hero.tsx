"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div className="absolute right-0 w-full md:w-[75%] lg:w-[60%] h-full z-0">
        <Image
          src="/seanbeaman.webp"
          alt="Entrepreneur Portrait"
          fill
          priority
          className="object-cover object-right grayscale-10 opacity-70 border-none"
        />
        {/* Gradient overlays to blend the left side into black */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/10 to-transparent w-full z-10" />
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent h-1/3 bottom-0 top-auto z-10" /> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[#00c3ff] font-bold text-xl md:text-2xl mb-4  tracking-tight">
            Author, entrepreneur, coach and...
          </p>

          <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-black uppercase  text-white leading-[0.9] mb-6 ">
            HUMANITY'S BIGGEST
            <br />
            CHEERLEADER.
          </h1>

          <p className="text-xl md:text-2xl text-white font-bold max-w-xl leading-snug ">
            You have what it takes. Stop playing small and start building your
            dream empire.
          </p>
        </motion.div>
      </div>

      {/* Bottom dark blue strip matches the design */}
      <div className="absolute bottom-0 w-full h-16 bg-[#003653] z-20" />
    </section>
  );
}
