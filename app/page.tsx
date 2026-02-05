"use client";

import HeroSection from "@/components/home/HeroSection";
import InfosSection from "@/components/home/InfosSection";
import AboutSection from "@/components/home/AboutSection";
import PilotesTeaser from "@/components/home/PilotesTeaser";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfosSection />
      <AboutSection />
      <PilotesTeaser />
      <PartnersSection />
    </div>
  );
}