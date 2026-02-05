/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, Hash } from "lucide-react";
import Link from "next/link"; // Import ajouté pour la navigation
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

// Données temporaires - à remplacer par vraies données
const pilotes = [
  {
    id: 1,
    nom: "Jackson Angelbert Bimila",
    categorie: "250cc",
    equipe: "Racing 237",
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296696/jackson2_m4urk9.jpg",
    palmares: ["Champion 2024", "Champion 2023"],
  },

  {
    id: 2,
    nom: "De Rossi",
    categorie: "500cc",
    equipe: "Racing 237",
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296825/derossi3_qepjwy.jpg",
    palmares: ["Champion 2022", "Meilleur temps 2023"],
  },
    {
    id: 3,
    nom: "Mbom",
    categorie: "125cc",
    equipe: "Racing 237",
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296983/mbom_cj5v3d.jpg",
    palmares: ["Champion 2022", "Top chrono 2024"],
  },
];

export default function PilotesTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Motif de fond subtil (Pointillés) - Opacité réduite pour ne pas gêner */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ backgroundImage: 'radial-gradient(#D4D4D4 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container-racing relative z-10">
        
        {/* En-tête de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-racing-red/20 bg-white text-racing-red text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            Line-up 2026
          </span>
          <SectionTitle subtitle="Les Compétiteurs">
            Les Asphaltes <br className="hidden sm:block" /> <span className="italic text-gray-400">Légendaires</span>
          </SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pilotes.map((pilote, index) => (
            <motion.div
              key={pilote.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Carte Style "Sports Card" - Séparation Nette */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                
                {/* Zone Image - PAS DE DÉGRADÉ BLANC */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 border-b border-gray-50">
                  <motion.img
                    src={pilote.photo}
                    alt={pilote.nom}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Numéro d'index (Style Magazine) - Opacité réduite pour ne pas gêner */}
                  <div className="absolute top-4 left-4 font-display font-black text-7xl text-white/10 select-none pointer-events-none">
                    0{index + 1}
                  </div>

                  {/* Badge Catégorie Flottant */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-white/50 text-racing-dark px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-red" />
                    {pilote.categorie}
                  </div>
                </div>

                {/* Zone de Contenu - Fond Blanc Pur */}
                <div className="p-7 sm:p-8 bg-white relative z-10 flex flex-col flex-grow">
                  {/* Ligne décorative */}
                  <div className="w-12 h-1 bg-gradient-to-r from-racing-red to-racing-gold rounded-full mb-5 group-hover:w-20 transition-all duration-500" />

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-racing-dark mb-1 tracking-tight leading-none">
                    {pilote.nom}
                  </h3>
                  
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    {pilote.equipe}
                  </p>

                  {/* Palmares */}
                  <div className="space-y-3 mt-auto">
                    {pilote.palmares.map((titre, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="flex items-center gap-3 text-sm text-gray-600 transition-colors py-1"
                      >
                        <Trophy className="w-4 h-4 text-racing-gold flex-shrink-0" />
                        <span className="font-medium">{titre}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bordure colorée au hover */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none group-hover:border-racing-red/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/pilotes" className="inline-block">
            <Button 
              variant="outline" 
              size="lg" 
              icon={<ArrowRight className="w-5 h-5" />}
              className="bg-white text-racing-dark border-gray-300 hover:border-racing-dark hover:bg-racing-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              Voir les pilotes
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}