"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "What I Do" },
  { href: "/blog", label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 w-full px-6 py-4 md:px-12 flex justify-between items-center max-w-[1600px] mx-auto pointer-events-auto bg-black/50  border-b border-white/5 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 40L30 15L50 30L80 0L100 25L110 10L120 40H10Z"
              fill="white"
            />
            <path d="M45 40L55 20L65 40H45Z" fill="black" />
            <path d="M85 40L90 25L95 40H85Z" fill="black" />
          </svg>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6 font-bold text-sm tracking-tight text-white/90">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/message">
          <button
            type="button"
            className="bg-[#00c3ff] hover:bg-[#00aadd] text-white px-6 py-2.5 rounded-full font-bold ml-2 transition-colors"
          >
            Work with Me
          </button>
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden relative z-110 text-white p-2 -mr-2 cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <X size={28} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <Menu size={28} strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-90 bg-black/60"
            />

            {/* Slide-in Panel */}
            <motion.nav
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
              className="lg:hidden fixed top-0 right-0 z-100 h-screen w-[82%] max-w-sm bg-black border-l border-white/10 flex flex-col pt-24 pb-10 px-8 overflow-y-auto"
            >
              {/* Bottom glow accent matching site style */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#00a8ff]/20 blur-[100px] rounded-full pointer-events-none" />

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
                className="relative z-10 flex flex-col gap-2"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: 30, opacity: 0 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white font-extrabold uppercase tracking-tight text-3xl py-3 border-b border-white/10 hover:text-[#00c3ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    open: { x: 0, opacity: 1 },
                    closed: { x: 30, opacity: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-8"
                >
                  <Link href="/message" onClick={() => setIsOpen(false)}>
                    <button
                      type="button"
                      className="w-full bg-[#00c3ff] hover:bg-[#00aadd] text-white px-6 py-3.5 rounded-full font-bold transition-colors text-base"
                    >
                      Work with Me
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
