import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AmbitiousOnes from "@/components/AmbitiousOnes";
import ParallaxContent from "@/components/ParallaxContent";
import Gallary from "@/components/gallary";

export const metadata: Metadata = {
  title: "What I Do",
  description:
    "Entrepreneur, investor, and CEO Sean Beaman shares his vision for systematic business building, capital preservation, and the future of algorithmic fintech.",
  openGraph: {
    url: "https://www.seanbeaman.com",
  },
};

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
