import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-6 py-8 md:px-12 flex justify-between items-center max-w-[1600px] mx-auto pointer-events-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
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
        <Link href="#" className="hover:text-white transition-colors">
          What I Do
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Events
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Books
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Careers
        </Link>
        <Link href="/subscribe" className="hover:text-white transition-colors">
          Subscribe
        </Link>
        <Link href="/message">
          <button className="bg-[#00c3ff] hover:bg-[#00aadd] text-white px-6 py-2.5 rounded-full font-bold ml-2 transition-colors">
            Work with Me
          </button>
        </Link>
      </nav>
    </header>
  );
}
