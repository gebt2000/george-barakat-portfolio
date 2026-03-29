"use client";

import { ConnectBand } from "@/components/ConnectBand";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { SelectedWorks } from "@/components/SelectedWorks";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <SelectedWorks />
      <TestimonialsSection />
      <ConnectBand />
    </>
  );
}
