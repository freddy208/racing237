/* eslint-disable @next/next/no-img-element */
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
      
      {/* Section SEO optimisée pour Google */}
<section className="container-racing py-16 bg-white">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* COLONNE TEXTE */}
    <div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-racing-dark">
        Racing 237 – Grand Prix Moto du Cameroun
      </h1>

      <div className="space-y-4">
        <p className="text-lg text-racing-gray leading-relaxed">
          <strong>Racing 237</strong> est l&apos;événement officiel de 
          <strong> course moto au Cameroun</strong>. Le <strong>Grand Prix Moto</strong> 
          rassemble les meilleurs pilotes et fans de sport mécanique.
        </p>

        <p className="text-lg text-racing-gray leading-relaxed">
          Suivez les actualités, résultats et vidéos en direct du 
          <strong> Grand Prix Moto de Douala</strong> au 
          <strong> Stade Japoma</strong>.
        </p>

        <p className="text-lg text-racing-gray leading-relaxed">
          Première édition le <strong>8 février 2026</strong> 
          en direct sur Canal+ et For You Media Africa.
        </p>
      </div>

      {/* Liste SEO */}
      <ul className="mt-8 space-y-3 text-racing-gray">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-racing-red rounded-full mt-2"></span>
          Premier Grand Prix Moto officiel du Cameroun
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-racing-red rounded-full mt-2"></span>
          Pilotes camerounais & internationaux
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 bg-racing-red rounded-full mt-2"></span>
          Diffusion TV africaine en direct
        </li>
      </ul>
    </div>

    {/* COLONNE IMAGE / FLYER */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770329900/grandPrix_qculsj.jpg"
          alt="Flyer Racing 237 Grand Prix Moto Cameroun"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Badge flottant */}
      <div className="absolute -bottom-6 -left-6 bg-racing-red text-white px-6 py-3 rounded-xl shadow-lg font-bold">
        8 FEV 2026 • JAPOMA
      </div>
    </div>

  </div>
</section>

      <PartnersSection />
    </div>
  );
}