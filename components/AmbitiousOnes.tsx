import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AmbitiousOnes() {
  const cards = [
    {
      title: "Retail Investors",
      description:
        "Access advanced, AI-driven algorithmic trading to preserve capital and grow your wealth autonomously.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Tech Innovators",
      description:
        "Build, scale, and optimize your data and technology companies for high-value multi-million dollar exits.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Real Estate Developers",
      description:
        "Generate massive returns through strategic property development, flipping, and systematic portfolio management.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="w-full py-24 md:py-32 relative"
      style={{
        background: "linear-gradient(rgb(0, 54, 83) 0%, rgb(0, 0, 0) 100%)",
      }}
    >
      {/* Top Gradient for subtle transition from Hero if needed */}
      {/* <div className="absolute top-0 w-full h-32 bg-linear-to-b from-[#082f44] to-transparent opacity-50 block" /> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(0,0,0,0.8)_50%,_transparent_100%)] pointer-events-none" />{" "}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider mb-4 text-center">
          FOR THE SYSTEMATIC BUILDERS...
        </h2>
        <p className="text-[#00c3ff] font-bold text-lg md:text-xl tracking-tight mb-16 text-center">
          ...who prioritize capital preservation and aggressive scaling.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative aspect-4/5 md:aspect-3/4 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top: Icon and Title */}
                <div>
                  <div className="w-10 h-10 rounded-full bg-black/50  flex items-center justify-center mb-6">
                    <ArrowUpRight className="text-[#00c3ff] w-5 h-5" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white pr-8 leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom: Description and Button */}
                <div>
                  <p className="text-white text-lg font-bold leading-snug mb-6">
                    {card.description}
                  </p>
                  <button className="bg-white text-black font-bold px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-transform">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
