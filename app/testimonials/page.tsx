import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00c3ff] selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-[90vh] lg:h-[95vh] flex items-center">
        {/* Background Image - Changed to fixed for parallax/fixed effect */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 md:left-[20%] lg:left-[30%]">
            <Image 
              src="/testimonials.png" 
              alt="Testimonials Banner" 
              layout="fill" 
              objectFit="cover" 
              objectPosition="left center"
              priority
              className="opacity-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent z-10 md:w-[70%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 w-full max-w-[85rem] mx-auto px-6 sm:px-12 lg:px-20 mt-16 md:mt-0">
          <div className="max-w-[32rem]">
            
            <p className="text-[#00c3ff] font-bold text-[18px] md:text-[22px] mb-3 md:mb-5 tracking-tight">
              Our clients are crushing it
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]uppercase text-white drop-shadow-lg mb-6 ">
              TESTIMONIALS
            </h1>
            
            <div className="space-y-4 md:space-y-5 text-[#b0b0b0] font-medium text-[15px] sm:text-[17px] md:text-[19px] leading-[1.5]">
              <p>
                <span className="text-white font-bold">Winning entrepreneurs do business differently:</span> They default to action, take the chance, and bet on themselves.
              </p>
              
              <p>
                You&apos;ll see it in their results below.
              </p>
              
              <p>
                If you&apos;re done playing small, scroll down, and see what your next level could look like.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="relative z-20 w-full bg-[#000000] pt-24 pb-32">
        
        {/* Top Gradient to transition smoothly from the fixed hero if needed */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#000000] -translate-y-full pointer-events-none hidden"></div>

        <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
            
            {/* Header */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-4 text-center">
              BUT DON&apos;T LISTEN TO ME...
            </h2>
            <p className="text-[#00c3ff] font-bold text-[16px] md:text-[18px] mb-12 md:mb-16 tracking-wide text-center">
              Just look at the results.
            </p>

            {/* Video Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
              {[
                { name: "Damian Tenuta", time: "01:57", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
                { name: "Amy Landino", time: "08:49", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
                { name: "Stephan Dyer", time: "03:18", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80" },
                { name: "Charles Mullany", time: "01:43", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
                { name: "Jackie Serviss", time: "00:58", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" },
                { name: "Dan Harrison", time: "00:50", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
              ].map((video, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  
                  {/* Video Thumbnail Wrapper */}
                  <div className="relative w-full aspect-[9/16] bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,195,255,0.2)]">
                    
                    {/* Placeholder Thumbnail */}
                    <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
                       <img src={video.img} alt={video.name} className="w-full h-full object-cover object-top" />
                    </div>

                    {/* Top Right UI Overlay (Fake browser/menu icons from screenshot) */}
                    <div className="absolute top-2 right-2 flex gap-1 z-10 opacity-70">
                       <div className="w-6 h-6 bg-black/50  rounded flex items-center justify-center text-white text-[10px]">::</div>
                    </div>

                    {/* Play Button Center Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-10 bg-black/80  rounded flex items-center justify-center border border-white/10 group-hover:bg-[#00c3ff]/90 group-hover:border-transparent transition-all">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 3L19 12L5 21V3Z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Progress Bar Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-2">
                       <div className="bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded w-max">
                         {video.time}
                       </div>
                       <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden flex items-center justify-between gap-2">
                         <div className="w-[10%] h-full bg-white rounded-full"></div>
                       </div>
                    </div>

                  </div>
                  
                  {/* Name Label */}
                  <span className="mt-4 text-[#00c3ff] font-bold text-[14px] md:text-[15px] text-center group-hover:text-white transition-colors">
                    {video.name}
                  </span>
                </div>
              ))}
            </div>

        </div>
      </section>

    </main>
  );
}
