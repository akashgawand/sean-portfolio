import Hero from "@/components/Hero";
import AmbitiousOnes from "@/components/AmbitiousOnes";
import ParallaxContent from "@/components/ParallaxContent";
import Gallary from "@/components/gallary";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-white/30">
      <Hero />
      <AmbitiousOnes />
      <ParallaxContent />
      <Gallary />
    </main>
  );
}
