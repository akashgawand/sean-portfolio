import Image from "next/image";

export default function Blog() {
  return (
    <section className="relative z-20 w-full bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#0ea5e9] font-bold tracking-wider text-sm uppercase mb-2">
            Read Our Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-4">
            Get The Latest Founder Insights
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-3xl">
            Actionable insights, proven playbooks, and real lessons on AI, fintech, startups, scaling, business, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[#2a2a2a] overflow-hidden rounded-lg cursor-pointer flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/20">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
                alt="Stock Market Trading"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-gray-300 text-xs font-bold px-3 py-1 uppercase rounded-full border border-white/10">
                Business
              </div>
            </div>
            <div className="p-8 flex flex-col grow">
              <h3 className="text-2xl font-bold text-[#0ea5e9] mb-6 leading-tight group-hover:text-white transition-colors duration-300">
                The Systematic Approach to Capital Preservation in Volatile Markets
              </h3>
              <div className="mt-auto">
                <p className="text-white text-sm font-bold uppercase mb-4 flex items-center gap-2 group-hover:text-[#0ea5e9] transition-colors">
                  Read More <span>»</span>
                </p>
                <div className="w-full h-px bg-white/20 mb-4" />
                <p className="text-[#0ea5e9] text-sm">March 3, 2026</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#2a2a2a] overflow-hidden rounded-lg cursor-pointer flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/20">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
                alt="AI Technology"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-gray-300 text-xs font-bold px-3 py-1 uppercase rounded-full border border-white/10">
                AI
              </div>
            </div>
            <div className="p-8 flex flex-col grow">
              <h3 className="text-2xl font-bold text-[#0ea5e9] mb-6 leading-tight group-hover:text-white transition-colors duration-300">
                9 AI Trends for 2026 That Will Reshape Algorithmic Trading
              </h3>
              <div className="mt-auto">
                <p className="text-white text-sm font-bold uppercase mb-4 flex items-center gap-2 group-hover:text-[#0ea5e9] transition-colors">
                  Read More <span>»</span>
                </p>
                <div className="w-full h-px bg-white/20 mb-4" />
                <p className="text-[#0ea5e9] text-sm">March 2, 2026</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#2a2a2a] overflow-hidden rounded-lg cursor-pointer flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/20">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2000&auto=format&fit=crop"
                alt="Business Meeting Focus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-gray-300 text-xs font-bold px-3 py-1 uppercase rounded-full border border-white/10">
                Business
              </div>
            </div>
            <div className="p-8 flex flex-col grow">
              <h3 className="text-2xl font-bold text-[#0ea5e9] mb-6 leading-tight group-hover:text-white transition-colors duration-300">
                How to Stop Waiting and Start Scaling: The Playbook for $100M+ Exits
              </h3>
              <div className="mt-auto">
                <p className="text-white text-sm font-bold uppercase mb-4 flex items-center gap-2 group-hover:text-[#0ea5e9] transition-colors">
                  Read More <span>»</span>
                </p>
                <div className="w-full h-px bg-white/20 mb-4" />
                <p className="text-[#0ea5e9] text-sm">February 24, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
