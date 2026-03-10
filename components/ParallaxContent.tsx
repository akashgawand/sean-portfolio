import AmbitiousOnes from "./AmbitiousOnes";
import Credibility from "./Credibility";
import About from "./About";
import MediaMentions from "./MediaMentions";
import Testimonials from "./Testimonials";
import Offerings from "./Offerings";
import Footer from "./Footer";

export default function ParallaxContent() {
  return (
    <div className="relative w-full bg-background z-10">
      <div className="flex flex-col">
        <AmbitiousOnes />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32">
          <Credibility />
          <About />
          <MediaMentions />
          <Testimonials />
          <Offerings />
        </div>
      </div>
      <Footer />
    </div>
  );
}
