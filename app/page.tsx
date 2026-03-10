import Hero from "@/components/Hero";
import ParallaxContent from "@/components/ParallaxContent";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-white/30">
      <Hero />
      <ParallaxContent />
    </main>
  );
}
