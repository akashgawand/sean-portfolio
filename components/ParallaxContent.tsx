"use client";

import React from "react";
import Image from "next/image";
import Blog from "./blog";
 import { motion } from "framer-motion";

export default function ParallaxContent() {
  return (
    <div className="relative w-full bg-black text-white selection:bg-[#0ea5e9] selection:text-white">
      <div className="relative w-full z-0 bg-black">
        {/* =========================================
          1. SINGLE STICKY BACKGROUND 
          Stays fixed while the content below scrolls past
      ========================================= */}
        <div className="sticky top-0 h-screen w-full overflow-hidden group">
          {/* Gradients to ensure text readability for both sections */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/10 z-10 transition-colors duration-500 group-hover:bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
            alt="Whiteboard session"
            fill
            className="object-cover h-full object-center opacity-60 transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        </div>

        {/* =========================================
          2. SCROLLING CONTENT WRAPPER 
          -mt-[100vh] pulls this up to overlap the sticky image
      ========================================= */}
        <div className="relative z-10 w-full -mt-[100vh]">
          {/* --- SECTION A: I'M NO DIFFERENT (Scrolls over image) --- */}
          {/* =========================================
          I'M NO DIFFERENT SECTION
          Has its own sticky background image
      ========================================= */}
          <div className="relative w-full z-0 bg-black">
            {/* Sticky Background */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
              <Image
                src="/seanbeamanNew2.png"
                alt="Family Background"
                fill
                className="object-cover object-center transform scale-105"
                priority
              />
            </div>

            {/* Scrolling Content Container */}
            <div className="relative z-10 w-full -mt-[100vh]">
              {/* YOUR EXACT CONTENT BLOCK */}
              <section className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center py-20">
                {/* Premium Glassmorphism Content Box */}
                <div className="max-w-2xl bg-black/30 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                  <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Sean Beaman
                  </h2>

                  <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    <p>
                      Sean Beaman is a veteran entrepreneur, investor, and the
                      current CEO of Gemalgo, a financial technology company
                      based in Irvine, California.
                    </p>

                    {/* Emphasized Quote Block */}
                    <p className="font-semibold text-white text-xl border-l-4 border-[#0ea5e9] pl-5 py-1 drop-shadow-md">
                      With a career spanning over 30 years, Beaman has a proven
                      track record of building, scaling, and selling companies
                      across the technology, finance, and data sectors.
                    </p>

                    <p>
                      His career is defined by systematic optimization and
                      aggressive scaling, resulting in business exits totaling
                      over{" "}
                      <span className="text-white font-medium italic">
                        $250 million.
                      </span>
                    </p>
                  </div>

                  {/* Upgraded CTA Button */}
                  <button className="mt-10 group flex items-center gap-3 bg-white text-black font-extrabold px-10 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    View Full Profile
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* --- SECTION B: NEWSLETTER TEXT (Scrolls over image right after A) --- */}
          <section className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center pb-24">
            <div className="max-w-xl">
              <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase drop-shadow-md">
                Major Business Ventures
              </p>
              <h3 className="text-4xl md:text-6xl font-bold uppercase leading-tight mt-2 mb-4 drop-shadow-lg">
                Over $250M <span className="text-gray-400">In Exits</span>
              </h3>
              <ul className="text-gray-300 text-lg mb-6 drop-shadow-md space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-white">
                    Suncoast Research Labs:
                  </strong>{" "}
                  $200 million exit.
                </li>
                <li>
                  <strong className="text-white">Android TV Brand:</strong> Sold
                  to Google for $20 million.
                </li>
                <li>
                  <strong className="text-white">Set TV:</strong> Scaled to $6
                  million per month recurring revenue.
                </li>
                <li>
                  <strong className="text-white">
                    Data Depot & EmailList.com:
                  </strong>{" "}
                  Over $30 million in sales.
                </li>
                <li>
                  <strong className="text-white">Real Estate:</strong> Over $50
                  million through strategic development.
                </li>
              </ul>
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                View Portfolio
              </button>
            </div>
          </section>

          {/* --- SECTION C: BOOK SECTION (Solid Black "Curtain" slides up over everything) --- */}
          {/* 2. BOOK SECTION (Forced under 80vh) */}
          <section className="relative z-20 w-full flex items-center bg-black overflow-hidden group h-[80vh] max-h-[800px] ">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
              {/* Text Side */}
              <div className="relative z-20 flex flex-col gap-4 lg:gap-6 w-full">
                <div>
                  <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase">
                    The Pivot to Fintech
                  </p>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mt-1 lg:mt-2">
                    Creation of Gemalgo
                  </h3>
                </div>
                <p className="text-gray-300 text-base md:text-lg">
                  Following a series of high-profile tech and data exits, Beaman
                  faced a new challenge: capital preservation. He needed a place
                  to park his wealth that performed with the same systematic,
                  data-driven efficiency as the businesses he used to build it.
                </p>
                <p className="text-gray-300 text-base md:text-lg mt-2">
                  <span className="font-bold text-white">
                    Refusing to rely on traditional, emotion-driven market
                    trading,
                  </span>{" "}
                  Beaman sought an algorithmic solution that adhered to his
                  number one rule of investing: preserve capital first. This
                  necessity birthed Gemalgo.
                </p>
                <button className="self-start mt-4 bg-white text-black font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:scale-105 transition-transform duration-300">
                  Explore Gemalgo
                </button>
              </div>
              {/* Mock Book Cover Side */}

              <div className="relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0 group">
                {/* Ambient Backlight Glow: Adds depth and separates the card from the background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] bg-sky-500/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-60 group-hover:opacity-100" />

                {/* SCALING WRAPPER */}
                <div className="transform scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center lg:origin-right flex justify-center items-center z-10">
                  {/* Ultra-polished Glass Container */}
                  <div className="relative w-[350px] h-[480px] bg-gradient-to-b from-white/[0.06] to-transparent rounded-2xl flex flex-col justify-center items-center p-8 shadow-2xl border border-white/10 overflow-hidden">
                    {/* Subtle top edge highlight to mimic thick glass reflection */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    {/* SVG Growth Chart */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Faint Inner Grid Lines for a technical aesthetic */}
                      <g
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      >
                        <line x1="10" y1="36.6" x2="90" y2="36.6" />
                        <line x1="10" y1="63.3" x2="90" y2="63.3" />
                        <line x1="36.6" y1="10" x2="36.6" y2="90" />
                        <line x1="63.3" y1="10" x2="63.3" y2="90" />
                      </g>

                      {/* Base X/Y Axes */}
                      <path
                        d="M10 90 L90 90"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 10 L10 90"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />

                      {/* Fading Area Gradient under the line */}
                      <motion.path
                        d="M 10 90 L 30 75 L 45 80 L 65 40 L 75 50 L 90 20 L 90 90 Z"
                        fill="url(#area-gradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />

                      {/* The main stock chart line */}
                      <motion.path
                        d="M 10 90 L 30 75 L 45 80 L 65 40 L 75 50 L 90 20"
                        stroke="url(#chart-gradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                      />

                      {/* Enhanced Glowing Dot */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 1.8,
                          duration: 0.5,
                          type: "spring",
                          bounce: 0.5,
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Outer pulsing ring */}
                        <circle
                          cx="90"
                          cy="20"
                          r="7"
                          fill="#0ea5e9"
                          opacity="0.3"
                          className="animate-pulse"
                        />
                        {/* Inner solid white dot */}
                        <circle
                          cx="90"
                          cy="20"
                          r="3"
                          fill="#ffffff"
                          className="drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                        />
                      </motion.g>

                      <defs>
                        {/* Line Gradient: Sky blue to a slightly cooler indigo tone for luxury */}
                        <linearGradient
                          id="chart-gradient"
                          x1="10"
                          y1="90"
                          x2="90"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>

                        {/* Area Gradient: Fades from semi-transparent blue to fully transparent at the bottom */}
                        <linearGradient
                          id="area-gradient"
                          x1="0"
                          y1="20"
                          x2="0"
                          y2="90"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0%"
                            stopColor="#0ea5e9"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset="100%"
                            stopColor="#0ea5e9"
                            stopOpacity="0.0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 3 & 4. COMBINED KINGS CLUB & MARTELL VENTURES */}
      <div className="relative w-full z-0 bg-black">
        {/* Sticky Background (Stays fixed while both sections below scroll past) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/10  z-10 transition-colors duration-500 group-hover:bg-black/70" />
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="Kings Club Background"
            fill
            className="object-cover h-full object-top opacity-70 transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Scrolling Content Wrapper */}
        <div className="relative z-10 w-full -mt-[100vh]">
          {/* 3. KINGS CLUB CONTENT (Takes up exactly 1 screen height) */}
          <section className="min-h-[80vh] max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center pb-24">
            <div className="max-w-xl">
              <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase">
                Gemalgo&apos;s Mission
              </p>
              <h3 className="text-4xl md:text-6xl font-bold uppercase leading-tight mt-2 mb-4">
                Democratizing Wealth
              </h3>
              <p className="text-gray-300 text-lg mb-6 drop-shadow-md">
                <span className="font-bold text-white">
                  Leveling the playing field.
                </span>{" "}
                The company&apos;s core mission is to shatter the barriers that
                historically kept advanced, low-risk trading algorithms locked
                behind the steep fees of hedge funds and institutional
                investors.
              </p>
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </section>

          {/* 4. MARTELL VENTURES SECTION (Slides directly over the sticky background) */}
          <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-black  group">
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/10 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000&auto=format&fit=crop"
              alt="Martell Ventures Background"
              fill
              className="object-cover object-center opacity-70 "
            />
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6 justify-center h-full">
              <div className="max-w-xl">
                <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase">
                  The Technology & Security
                </p>
                <h3 className="text-4xl md:text-6xl font-bold uppercase leading-tight mt-2 mb-4">
                  Autonomous Trading
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  <span className="font-bold text-white">
                    Gemalgo is an AI-driven trading platform
                  </span>{" "}
                  that analyzes market conditions in real-time, predicts trends,
                  and executes trades autonomously 24/7.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Reflecting Beaman&apos;s strict rules on capital preservation,
                  retail investors retain full ownership of their capital in
                  their personal brokerage accounts, while Gemalgo automates
                  execution.
                </p>
                <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                  See How It Works
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 5. SPEAKING SECTION (Sticky BG, Scrolling Text) */}
      {/* <section className="relative w-full z-0 bg-black">
       
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sean Speaking"
            fill
            className="object-cover object-top"
          />
        </div>

       
        <div className="relative z-10 w-full -mt-[100vh] h-[80vh] max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-2xl bg-black/30 p-10 rounded-3xl border border-white/10 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
            <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase mb-4">
              Speaking
            </p>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider text-white leading-none">
              Get Sean On
              <br />
              Your Stage
            </h2>
            <p className="text-xl text-gray-300 font-light mb-10">
              Share Sean&apos;s 30-year playbook of systematic optimization,
              capital preservation, and building multi-million dollar companies
              with your audience.
            </p>
            <button className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300">
              Book Sean
            </button>
          </div>
        </div>
      </section> */}

      <Blog />
    </div>
  );
}
