import Image from "next/image";
import Link from "next/link";

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00c3ff] selection:text-white py-12 px-6 sm:px-8 lg:px-12 flex flex-col items-center overflow-x-hidden">
      
      {/* Header Section */}
      <div className="max-w-4xl w-full text-center mb-10 md:mb-16 flex flex-col items-center pt-6 md:pt-10">
        
        {/* Mountain Icon SVG */}
        <div className="mb-6">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2L12 22H36L24 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 12L4 22H20L12 12Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M36 12L28 22H44L36 12Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-[1.3]">
          Learn The Tactics & Mindset To Build a <br className="hidden md:block" /> Million Dollar Business
        </h1>
        
        <h2 className="text-[23px] md:text-3xl font-black text-[#00c3ff] tracking-wide mt-2">
          The Sean Beaman Method
        </h2>
        
        <div className="w-full max-w-[min(100%,52rem)] h-[1px] bg-gray-300 mt-8 mb-4"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-[70rem] w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Copy & Checklist */}
        <div className="space-y-8 md:mt-4">
          <p className="text-lg md:text-[22px] font-medium leading-[1.4] text-gray-100">
            A five minute weekly newsletter to upgrade your identity, get fit, and build a business you don&apos;t grow to hate.
          </p>

          <ul className="space-y-6">
            {[
              "Jumpstart your Mondays with my top story, lesson, and quote for the week",
              "Learn the tactics and mindset I used to build a $100M empire",
              "Access exclusive downloads and offers only available for subscribers",
              "Get opportunities to engage with me and the team",
              "+ Get a FREE Playbook to help you stop drowning in your business (pulled directly from my coaching program)"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c3ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[17px] md:text-lg font-medium leading-snug text-gray-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Form Card */}
        <div className="bg-white text-black p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-2xl mx-auto relative lg:mr-0">
          
          <div className="flex flex-col items-start mb-6">
            <div className="w-25 h-25 rounded-full overflow-hidden border-[3px] border-white shadow-sm mb-4 bg-[#00c3ff]">
              <Image 
                src="/seanbeaman.webp" 
                alt="Sean Beaman" 
                width={80} 
                height={80} 
                className="object-cover w-full h-full object-center" 
              />
            </div>
            <p className="text-gray-600 font-medium text-[15px]">Subscribe Today</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">First Name *</label>
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00c3ff] focus:ring-1 focus:ring-[#00c3ff] placeholder:text-gray-400 font-medium transition-colors" 
                required 
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Email *</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00c3ff] focus:ring-1 focus:ring-[#00c3ff] placeholder:text-gray-400 font-medium transition-colors" 
                required 
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Mobile Phone <span className="text-gray-500 font-normal">(Subscribe to my Text Community)</span>
              </label>
              <div className="flex border border-gray-300 rounded focus-within:border-[#00c3ff] focus-within:ring-1 focus-within:ring-[#00c3ff] bg-white overflow-hidden transition-colors">
                <div className="flex items-center justify-center px-3 bg-[#f8f9fa] border-r border-gray-300">
                   {/* Indian Flag SVG or emoji since the screenshot shows an Indian flag */}
                  <span className="text-base select-none">🇮🇳</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="Mobile Phone" 
                  className="w-full px-3 py-2 text-sm focus:outline-none placeholder:text-gray-400 font-medium" 
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">Are you a Business Owner *</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00c3ff] focus:ring-1 focus:ring-[#00c3ff] bg-white appearance-none text-gray-700 font-medium transition-colors cursor-pointer" required>
                  <option value=""></option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 pb-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-[#00c3ff] checked:border-[#00c3ff] hover:border-[#00c3ff] transition-colors cursor-pointer" required />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[11px] text-gray-700 font-medium">
                  By checking this box, I consent to receive non-marketing text messages from Sean Beaman LLC. DBA Sean Beaman, these may include appointment reminders, order confirmation, among others. Message frequency varies, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-[#00c3ff] checked:border-[#00c3ff] hover:border-[#00c3ff] transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-[11px] text-gray-700 font-medium">
                  By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from Sean Beaman LLC. DBA Sean Beaman at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#00c3ff] text-white font-semibold py-3 mt-4 rounded transition-colors text-[15px] cursor-pointer ">
              Subscribe for Free
            </button>
            
            <div className="text-center mt-8 pt-2 text-xs text-gray-600 font-semibold border-t border-gray-100">
              <Link href="/terms-privacy" className="hover:text-black transition-colors underline underline-offset-2">Privacy Policy</Link>
              <span className="mx-2 opacity-50">|</span>
              <Link href="/terms-and-conditions" className="hover:text-black transition-colors underline underline-offset-2">Terms of Service</Link>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
}
