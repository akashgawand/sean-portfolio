import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00c3ff] selection:text-white pb-20">
      
      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh]">
        <Image 
          src="/seanbeamanNew.png" 
          alt="Sean Beaman" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center"
          priority
          className="opacity-90"
        />
        {/* Gradient overlay to smoothly transition the image into the black background below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#050614]/10 mix-blend-overlay"></div>
      </section>

      {/* Story Section */}
      <section className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-20 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Heading & Dark Image */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-14">
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase leading-[1.05]  text-white drop-shadow-md">
              HEY, I&apos;M SEAN. <br />
              <span className="text-gray-500 font-bold opacity-80">CEO OF GEMALGO.</span>
            </h1>

            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-md grayscale opacity-90 mix-blend-luminosity">
              {/* Use the existing portrait as a dark, intense profile picture stand-in */}
              <Image 
                src="/seanbeaman.webp" 
                alt="Sean Beaman Profile" 
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Story Content */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 lg:space-y-5 text-[15px] sm:text-[17px] text-[#b0b0b0] leading-relaxed font-medium lg:mt-2 pb-20 justify-center">
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">
              Entrepreneur. Investor. Innovator.
            </p>
            <p>
              I am a veteran entrepreneur and the current CEO of <span className="text-white font-bold">Gemalgo</span>, a financial technology company based in Irvine, California.
            </p>
            <p>
              With a career spanning over 30 years, I have built, scaled, and sold companies across the technology, finance, and data sectors.
            </p>
            <p>
              My approach isn&apos;t about guessing it&apos;s about <span className="text-white font-bold">systematic optimization and aggressive scaling.</span> I look for inefficiencies in markets, build the right teams, and leverage data to ruthlessly execute on a vision.
            </p>
            <p>
              Over the last three decades, those exact principles have driven my ventures to generate massive revenue streams, resulting in business exits totaling <span className="text-[#00c3ff] font-bold">over $250 million</span>.
            </p>
            <p>
              I&apos;ve experienced the entire entrepreneurial lifecycle from the early sleepless nights dialing in product-market fit, to navigating the scaling pains of rapid growth, all the way to high-stakes acquisition negotiations.
            </p>
            <p>
              I know what it takes to take an idea from zero and turn it into something extraordinary, because I&apos;ve done it. Repeatedly.
            </p>
            <p className="mt-6 md:mt-8">But success was never just about the exits...</p>
            <p className="text-white font-bold text-lg sm:text-2xl mt-1">
              It was about solving complex problems.
            </p>
          </div>

        </div>

        {/* FROM STARTUPS TO MASSIVE EXITS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 md:mt-24 border-t border-gray-800 pt-16 md:pt-24 mb-12">
          
          {/* Left Column - Heading & Story Content */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6 text-[15px] sm:text-[17px] text-[#b0b0b0] leading-relaxed font-medium">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase text-[#e0e0e0] drop-shadow-md mb-4 leading-none">
              <span className="text-gray-500 opacity-80">FROM STARTUPS TO</span> MASSIVE EXITS
            </h2>
            
            <p className="mb-4">
              My portfolio highlights my ability to scale companies for high-value acquisitions. Here are a few notable milestones:
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-white font-bold block mb-1">Suncoast Research Labs</span>
                <p>Led the company to a massive $200 million exit.</p>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Proprietary Android TV Brand</span>
                <p>Built and successfully sold directly to Google for $20 million.</p>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Set TV</span>
                <p>Scaled the company&apos;s recurring revenue to an impressive $6 million per month.</p>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">Data Depot & EmailList.com</span>
                <p>Driven by data and marketing analytics, generated over $30 million in sales.</p>
              </div>
              <div>
                <span className="text-[#00c3ff] font-bold block mb-1">Real Estate Portfolio</span>
                <p>Generated over $50 million through strategic real estate development and property flipping.</p>
              </div>
            </div>

            <p className="text-white font-bold text-lg sm:text-xl py-4 border-t border-gray-800 mt-6 pt-6">
              Building wealth was step one. Protecting it became the true challenge.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-6 flex flex-col gap-6 pt-4">
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
               <Image 
                src="/seanbeaman.webp" 
                alt="Early Days" 
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              <Image 
                src="/AboutSean.png" 
                alt="Scaling Up" 
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHITE BACKGROUND SECTIONS */}
      <section className="w-full bg-white text-black py-20 lg:py-32 flex flex-col gap-24 lg:gap-32">
        
        {/* PIVOT TO FINTECH */}
        <div className="max-w-[85rem] mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column - Images */}
            <div className="lg:col-span-5 xl:col-span-6 flex flex-col gap-4 sm:gap-6">
              <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
                <Image src="/seanBuisness.png" alt="Fintech Pivot" layout="fill" objectFit="cover" objectPosition="center" />
              </div>
              <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
                 <Image src="/seanbeamanNew12.png" alt="Gemalgo Creation" layout="fill" objectFit="cover" objectPosition="center" />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col space-y-5 text-[16px] sm:text-[18px] text-[#4b4b4b] leading-relaxed font-medium">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold uppercase text-black mb-4 leading-none">
                <span className="text-gray-400">THE PIVOT TO<br/>FINTECH:</span> <span className="font-bold"><br/>THE CREATION<br/>OF GEMALGO</span>
              </h2>
              <p>Following my series of high-profile tech and data exits, I faced a new challenge: <strong className="text-black">capital preservation.</strong></p>
              <p>I needed a place to park my wealth that performed with the same systematic, data-driven efficiency as the businesses I used to build it.</p>
              <p>Refusing to rely on traditional, emotion-driven market trading, I sought an algorithmic solution that adhered to my number one rule of investing: <strong className="text-black">preserve capital first.</strong></p>
              <p>This necessity birthed Gemalgo.</p>
              <p>Initially developed as my personal algorithmic wealth engine to provide consistent performance with minimal drawdowns, the technology eventually evolved into a public-facing company.</p>
              <p>I officially launched Gemalgo as an LLC in late 2024, serving as its CEO alongside co-founder Sam Hubbard.</p>
            </div>
          </div>
        </div>

        {/* DEMOCRATIZING WEALTH */}
        <div className="max-w-[85rem] mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col space-y-6 text-[16px] sm:text-[18px] text-[#4b4b4b] leading-relaxed font-medium order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold uppercase text-black mb-4 leading-[0.95]">
                <span className="text-gray-400">DEMOCRATIZING<br/>WEALTH </span> <span className="font-bold">&<br/>SHATTERING<br/>BARRIERS</span>
              </h2>
              <div>
                <h3 className="text-black font-bold text-xl uppercase mb-2">The Platform</h3>
                <p>Gemalgo is an AI-driven trading platform that analyzes market conditions in real-time, predicts trends, and executes trades autonomously 24/7.</p>
              </div>
              <div>
                <h3 className="text-black font-bold text-xl uppercase mb-2">The Mission</h3>
                <p>My team and I launched Gemalgo to <strong className="text-black">&quot;level the playing field.&quot;</strong></p>
                <p className="mt-2">Our core mission is to shatter the barriers that have historically kept advanced, low-risk trading algorithms locked behind the steep fees of hedge funds and institutional investors.</p>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="lg:col-span-5 xl:col-span-6 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
                <Image src="/image.png" alt="Platform UI" layout="fill" objectFit="cover" objectPosition="center" />
              </div>
              <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200">
                <Image src="/AboutSean.png" alt="Mission Vision" layout="fill" objectFit="cover" objectPosition="top" />
              </div>
            </div>
          </div>
        </div>

        {/* USER SECURITY */}
        <div className="max-w-[85rem] mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image */}
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                 <Image src="/AboutSean1.jpg" alt="Security" layout="fill" objectFit="cover" objectPosition="top" />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col space-y-6 text-[16px] sm:text-[18px] text-[#4b4b4b] leading-relaxed font-medium">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold uppercase text-black mb-6 leading-none flex flex-row flex-wrap gap-x-3">
                <span className="text-gray-400">UNCOMPROMISING</span> <span className="font-bold">USER</span> <span className="font-bold">SECURITY</span>
              </h2>
              <p>Reflecting my strict rules on capital preservation, Gemalgo is designed entirely around your security.</p>
              <p>We built this system so that <strong className="text-black">retail investors retain full ownership of their capital at all times.</strong></p>
              <p>The funds remain securely in your personal brokerage account, while the Gemalgo software simply automates the trading execution.</p>
              <p>You never lose access. You never lose control.</p>
              <p className="font-bold text-[#00a3d9] text-[20px] lg:text-[22px] mt-4 pt-4 border-t-2 border-transparent">
                You keep the control. The algorithm does the work.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
