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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-racing-dark">
            Racing 237 – Grand Prix Moto du Cameroun
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-racing-gray leading-relaxed">
              <strong>Racing 237</strong> est l&apos;événement officiel de <strong>course moto au Cameroun</strong>. 
              Le <strong>Grand Prix Moto</strong> rassemble les meilleurs pilotes, fans de sport mécanique 
              et partenaires internationaux pour promouvoir le motorsport en Afrique centrale.
            </p>
            <p className="text-lg text-racing-gray leading-relaxed">
              Suivez toutes les actualités, les résultats des courses et les vidéos en direct 
              sur notre site officiel. Découvrez les <strong>pilotes camerounais</strong>, le programme des courses, 
              et ne manquez aucun moment fort du Grand Prix Moto de Douala au <strong>Stade Japoma</strong>.
            </p>
            <p className="text-lg text-racing-gray leading-relaxed">
              <strong>Racing 237</strong> - Au service de la moto. Le rendez-vous incontournable du 
              <strong> motorsport au Cameroun</strong> et en Afrique Centrale. Première édition le 8 février 2026 
              en direct sur Canal+ et For You Media Africa.
            </p>
          </div>

          {/* Mots-clés naturellement intégrés */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-display font-bold mb-4 text-racing-dark">
              Pourquoi Racing 237 ?
            </h2>
            <ul className="space-y-3 text-racing-gray">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-racing-red rounded-full mt-2 flex-shrink-0"></span>
                <span>Premier <strong>Grand Prix Moto officiel du Cameroun</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-racing-red rounded-full mt-2 flex-shrink-0"></span>
                <span>Compétition ouverte aux pilotes camerounais et internationaux</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-racing-red rounded-full mt-2 flex-shrink-0"></span>
                <span>Diffusion en direct sur les principales chaînes TV africaines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-racing-red rounded-full mt-2 flex-shrink-0"></span>
                <span>Événement organisé au Stade Japoma de Douala, plus grand stade du Cameroun</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PartnersSection />
    </div>
  );
}