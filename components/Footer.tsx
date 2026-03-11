"use client";

import { Instagram, Youtube, Facebook, Linkedin, MessageCircle } from "lucide-react";

const SocialItem = ({ icon: Icon, title, subtitle, customIcon }: { icon?: any, title: string, subtitle: string, customIcon?: React.ReactNode }) => (
  <div className="flex items-center gap-4 group cursor-pointer w-[200px]">
    <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300 shadow-lg">
      {customIcon ? customIcon : Icon && <Icon size={20} strokeWidth={2} />}
    </div>
    <div className="flex flex-col">
      <span className="text-white font-bold text-lg leading-tight">{title}</span>
      <span className="text-gray-400 text-sm">{subtitle}</span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-24 pb-12 overflow-hidden border-white/10">
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00a8ff]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-8 w-full">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 w-full lg:w-auto items-center lg:items-start">
            <SocialItem icon={Instagram} title="Instagram" subtitle="2.1M Followers" />
            <SocialItem icon={Youtube} title="Youtube" subtitle="2.2M Followers" />
            <SocialItem 
              title="X" 
              subtitle="97K Followers" 
              customIcon={<svg role="img" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>} 
            />
            <SocialItem icon={MessageCircle} title="Blog" subtitle="Read Now" />
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center text-center w-full max-w-md mx-auto shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-bebas tracking-widest text-white uppercase mb-2">
              THE SEAN BEAMAN   
            </h2>
            <p className="text-[#00a8ff] font-bold text-sm md:text-base mb-8">
              The 5 minute email that could save you 5 years.
            </p>
            
            <form className="w-full flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="First Name*" 
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]"
                required
              />
              <input 
                type="email" 
                placeholder="Email*" 
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8ff]"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#00a8ff] hover:bg-[#0090ff] text-white font-bold py-3 pt-3.5 rounded-md transition-colors mt-2"
              >
                Subscribe for Free
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 w-full lg:w-auto items-center lg:items-start">
            <SocialItem 
              title="Tiktok" 
              subtitle="1.5M Followers" 
              customIcon={<svg fill="currentColor" viewBox="0 0 448 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>} 
            />
            <SocialItem icon={Facebook} title="Facebook" subtitle="1.8M Followers" />
            <SocialItem icon={Linkedin} title="LinkedIn" subtitle="149K Followers" />
            <SocialItem 
              title="Spotify" 
              subtitle="The Sean Beaman Method" 
              customIcon={<svg fill="currentColor" viewBox="0 0 496 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-72.5-47-157.9-56.1-230.1-39.6-9.4 2.3-15.2-3.9-15.2-12.3s6.8-15.5 14.5-17.8c83.5-22.3 176.4-11.3 255.6 40 4.8 3.2 10.3 8.7 10.3 16.2 0 10.6-9.7 17.7-22.8 17.7zm28.2-70.6c-92.4-53.1-228.9-61.9-307.7-34.9-11 3.9-20.7-4.5-20.7-14.8 0-9.4 6.8-15.5 15.8-18.7 89.4-30.7 240.3-21.3 343.9 38.8 9.7 5.5 16.2 13.9 16.2 24.5 0 11.9-11.7 20.3-25.2 20.3-4.5 0-9.7-1.3-22.3-5.2z"/></svg>} 
            />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center mt-32 text-center w-full">
          <div className="mb-4 opacity-100 flex justify-center">
            <h3 
              className="text-white text-5xl tracking-widest"
              style={{ fontFamily: "'Priestacy', 'Brush Script MT', 'Dancing Script', cursive" }}
            >
              Sean Beaman
            </h3>
          </div>
          <p className="text-[#00a8ff] text-base mb-2 font-medium">
            © {new Date().getFullYear()} Sean Beaman. All Rights Reserved
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="font-bold text-white hover:text-gray-300 transition-colors">Careers</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
