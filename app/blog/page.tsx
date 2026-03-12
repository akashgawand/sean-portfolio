import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const categories = [
    "Fintech", "Algorithmic Trading", "Startup Exits", "Real Estate", "Wealth Preservation", "AI", "Leadership", "Scaling"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "From $0 to a $200M Exit: The Suncoast Research Labs Story",
      excerpt: "Discover the systematic optimization and aggressive scaling strategies that led to one of my biggest acquisitions in the tech space.",
      image: "/seanBuisness.png",
      category: "Startup Exits",
      author: "Sean Beaman",
      date: "March 11, 2026",
      link: "#"
    },
    {
      id: 2,
      title: "Why I Built Gemalgo: The Need for Algorithmic Wealth Preservation",
      excerpt: "After a series of data exits, I needed a way to preserve capital without the emotional rollercoaster of manual trading. Here is how Gemalgo was born.",
      image: "/seanbeamanNew1.png",
      category: "Wealth Preservation",
      author: "Sean Beaman",
      date: "March 3, 2026",
      link: "#"
    },
    {
      id: 3,
      title: "Democratizing Wealth: Shattering the Hedge Fund Gatekeepers",
      excerpt: "Advanced algorithmic trading shouldn't just be for institutions. Learn how we are using AI to bring hedge-fund level technology to retail investors while keeping funds secure.",
      image: "/AboutSean.png",
      category: "Fintech",
      author: "Sean Beaman",
      date: "March 2, 2026",
      link: "#"
    },
    {
      id: 4,
      title: "Scaling Subscriptions: How We Reached $6M/Month with Set TV",
      excerpt: "Building recurring revenue requires ruthless efficiency and data-driven marketing. A look back at the tactics we used to reach scale.",
      image: "/image.png",
      category: "Scaling",
      author: "Sean Beaman",
      date: "February 19, 2026",
      link: "#"
    },
    {
      id: 5,
      title: "The Data-Driven Approach to Real Estate Flipping",
      excerpt: "Translating tech analytics into real world assets. How I applied startup systematic optimization to generate over $50M in my real estate portfolio.",
      image: "/AboutSean1.jpg",
      category: "Real Estate",
      author: "Sean Beaman",
      date: "February 18, 2026",
      link: "#"
    },
    {
      id: 6,
      title: "Selling to Google: Building a Niche Android TV Brand",
      excerpt: "The step-by-step journey of identifying a market gap, developing a proprietary product, and executing a successful $20M acquisition to a tech giant.",
      image: "/seanbeaman.webp",
      category: "Startup Exits",
      author: "Sean Beaman",
      date: "February 10, 2026",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#212529] font-sans selection:bg-[#00c3ff] selection:text-white pb-20 overflow-x-hidden">
      
      {/* Dark Header Area */}
      <section className="w-full bg-[#1a1c23] py-8 md:py-12 flex justify-center items-center">
        <h1 className="mt-12 text-3xl md:text-5xl uppercase text-[#00c3ff] drop-shadow-md">
          RESOURCES & TOOLS
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[70rem] mx-auto px-4 sm:px-8 lg:px-12 pt-8 md:pt-12">
        
        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 mb-10 md:mb-16">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href="#" 
              className="text-[13px] sm:text-[15px] text-[#333] font-medium hover:text-[#00c3ff] transition-colors whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </nav>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              
              {/* Card Image */}
              <Link href={post.link} className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200 block">
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  layout="fill" 
                  objectFit="cover" 
                  objectPosition="top"
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </Link>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                
                {/* Title */}
                <Link href={post.link} className="block group-hover:text-[#00c3ff] transition-colors mb-4">
                  <h2 className="text-[19px] sm:text-[21px] font-bold leading-snug text-black">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-[14px] sm:text-[15px] text-[#4a4a4a] leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link href={post.link} className="text-[13px] font-bold text-black uppercase tracking-wide hover:text-[#00c3ff] transition-colors flex items-center mb-6">
                  READ MORE &raquo;
                </Link>

                {/* Meta Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center text-[12px] sm:text-[13px] text-[#a0a0a0] font-medium mt-auto">
                  <span>{post.author}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{post.date}</span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        {/* <div className="flex justify-center items-center mt-16 md:mt-24 gap-2 md:gap-3 text-[14px] sm:text-[15px] font-medium text-gray-700">
          <Link href="#" className="hover:text-black hover:underline underline-offset-4 mr-2">&laquo; Previous</Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center text-[#00c3ff] font-bold">1</Link>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
             <Link key={num} href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors hidden sm:flex">{num}</Link>
          ))}
          <Link href="#" className="hover:text-black hover:underline underline-offset-4 ml-2">Next &raquo;</Link>
        </div> */}

      </section>
    </main>
  );
}
