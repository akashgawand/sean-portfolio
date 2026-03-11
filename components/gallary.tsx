"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/seanbeamanNew1.png", alt: "Sean Beaman Portrait" },
  {
    src: "/seanBuisness.png",
    alt: "Business Meeting",
  },
  { src: "/seanbeaman.webp", alt: "Sean Beaman Speaking" },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    alt: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    alt: "Entrepreneurship",
  },
  {
    src: "/image.png",
    alt: "City Overview",
  },
];

export default function Gallary() {
  return (
    <section className="relative w-full min-h-[80vh] py-20 bg-background flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 w-full h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-bebas tracking-wider uppercase mb-4">
            Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-roboto text-lg space-y-2">
            Moments, milestones, and the ambition that drives the vision
            forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto grow w-full h-full min-h-[50vh]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Swapped scale for a cleaner vertical slide
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }} // Triggers slightly before scrolling into view
              className="relative overflow-hidden group w-full h-full min-h-[200px] md:min-h-[300px]" // Removed rounded-xl here
            >
              {/* Slightly darker initial overlay to make the hover reveal pop more */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

              <Image
                src={img.src}
                alt={img.alt}
                fill
                // Increased the scale slightly and adjusted the easing for a smoother zoom
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
