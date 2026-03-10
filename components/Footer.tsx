export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 mt-12 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className=" text-2xl font-bold text-white tracking-tighter">
          EMPIRE BUILDER.
        </p>
        <div className="flex gap-8 text-sm text-white/50  font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            YouTube
          </a>
        </div>
        <p className="text-white/30 text-xs text-center md:text-right">
          © {new Date().getFullYear()} Empire Builder Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
