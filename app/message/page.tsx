import Image from "next/image";
import Link from "next/link";

export default function MessagePage() {
  return (
    <main className="relative min-h-screen bg-[#050614] text-white font-sans selection:bg-[#00c3ff] selection:text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/seanbeamanNew1.png"
          alt="Sean Beaman"
          fill
          className="object-cover object-left"
          priority
          sizes="80vw"
        />
        {/* Gradient overlay to seamlessly blend the right side for the form */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050614] via-[#050614]/80 to-transparent lg:from-transparent lg:via-[#050614]/90 lg:to-[#050614]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Side Spacer (Keeps face visible on desktop) */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right side: Form Content */}
        <div className="w-full flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 bg-[#050614]/60 lg:bg-transparent min-h-screen">
          <div className="w-full max-w-[28rem] lg:max-w-[35rem]">
            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-2xl xl:text-[2.8rem] font-semibold mt-10 mb-6 uppercase text-white drop-shadow-md ">
                READY TO SCALE YOUR BUSINESS?
              </h1>
              <p className="text-[13px] sm:text-[14px] text-white leading-relaxed mb-4">
                If you&apos;re a business owner who wants to scale your business with
                proven systems, strategies, and tactics, let&apos;s connect!
              </p>
              <p className="text-[13px] sm:text-[14px] text-white leading-relaxed">
                Fill out the form below, and we&apos;ll reach out to see if you&apos;re a fit.
              </p>
            </div>

            <form className="space-y-8">
              <div className="space-y-1">
                <label className="block text-[13px] font-bold text-white tracking-wide">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2.5 rounded bg-white text-black text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00aadd] transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[13px] font-bold text-white tracking-wide">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2.5 rounded bg-white text-black text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e23636] border-2 border-transparent focus-within:border-[#e23636] transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[13px] font-bold text-white tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2.5 rounded bg-white text-black text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00aadd] transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[13px] font-bold text-white tracking-wide">
                  Mobile Phone
                </label>
                <div className="flex shadow-sm rounded">
                  <div className="flex-shrink-0 bg-white border-r border-gray-200 rounded-l px-3 py-2.5 flex items-center justify-center">
                    <span className="text-base leading-none" role="img" aria-label="India flag">🇮🇳</span>
                    <svg className="w-3 h-3 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile Phone"
                    className="w-full px-3 py-2.5 rounded-r bg-white text-black text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00aadd] transition-all placeholder:text-gray-400 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1 relative">
                <label className="block text-[13px] font-bold text-white tracking-wide">
                  Are you a Business Owner *
                </label>
                <div className="relative">
                  <select
                    className="w-full px-3 py-2.5 rounded bg-white text-black text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00aadd] transition-all appearance-none font-medium cursor-pointer"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="relative flex items-start pt-[3px]">
                    <input type="checkbox" className="w-[13px] h-[13px] rounded-sm border-gray-300 text-[#00aadd] focus:ring-[#00aadd] bg-white cursor-pointer" id="consent1" required />
                  </div>
                  <label htmlFor="consent1" className="text-[15px] sm:text-[13px] text-white cursor-pointer select-none">
                    By checking this box, I consent to receive non-marketing text
                    messages from Sean Beaman, these may include appointment reminders, order confirmation, among others. Message frequency varies, message & data rates may apply.
                    Text HELP for assistance, reply STOP to opt out.
                  </label>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="relative flex items-start pt-[3px]">
                    <input type="checkbox" className="w-[13px] h-[13px] rounded-sm border-gray-300 text-[#00aadd] focus:ring-[#00aadd] bg-white cursor-pointer" id="consent2" required />
                  </div>
                  <label htmlFor="consent2" className="text-[15px] sm:text-[13px] text-white cursor-pointer select-none">
                    By checking this box, I consent to receive marketing and promotional
                    messages including special offers, discounts, new product updates
                    among others from Sean Beaman at the phone number provided. Frequency may vary. Message & data
                    rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00aadd] hover:bg-[#0099cc] text-white font-bold text-[13px] sm:text-sm tracking-wide py-3 mt-6 mb-2 rounded transition-all"
              >
                Let&apos;s Chat
              </button>
            </form>

            <div className="text-center mt-6 text-[11px] sm:text-[13px] text-white font-bold">
              <Link href="/terms-privacy" className="underline hover:text-gray-200 transition-colors underline-offset-2">Privacy Policy</Link>
              <span className="mx-1.5 opacity-80">|</span>
              <Link href="/terms-and-conditions" className="underline hover:text-gray-200 transition-colors underline-offset-2">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
