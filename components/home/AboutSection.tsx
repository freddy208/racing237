/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Promouvoir le sport moto au Cameroun et offrir une scène mondiale aux talents locaux.",
    color: "text-racing-red",
    bg: "bg-racing-red/10",
    border: "group-hover:border-racing-red/30",
  },
  {
    icon: Heart,
    title: "Notre Passion",
    description: "Au service de la moto. Créer des moments inoubliables pour les puristes du moteur.",
    color: "text-racing-gold",
    bg: "bg-racing-gold/10",
    border: "group-hover:border-racing-gold/30",
  },
  {
    icon: Zap,
    title: "Notre Ambition",
    description: "Établir le Cameroun comme la capitale incontestée du motorsport africain.",
    color: "text-white",
    bg: "bg-white/10",
    border: "group-hover:border-white/30",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Ambiance de fond (Lueurs rouges et dorées) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-racing-red/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-racing-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="container-racing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Colonne Gauche - Image & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Image Container avec bordure sophistiquée */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200"
                alt="Racing 237"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay dégradé pour la lisibilité et le style */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent" />
              
              {/* Ligne décorative au coin */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
            </div>

           
          </motion.div>

          {/* Colonne Droite - Contenu & Valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label Section */}
            <div className="mb-4 inline-block">
               <span className="px-3 py-1 rounded-full border border-racing-gold/30 bg-racing-gold/10 text-racing-gold text-xs font-bold uppercase tracking-widest">
                 À Propos
               </span>
            </div>

            {/* Titre Principal */}
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Au service de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                vitesse pure.
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10 border-l-2 border-racing-red/50 pl-6">
              Racing 237 est né d&apos;une obsession : révolutionner le motorsport 
              au Cameroun. Nous créons des expériences immersives où l&apos;adrénaline 
              rencontre l&apos;excellence africaine.
            </p>

            {/* Liste des Valeurs - Style "Spec Sheet" */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className={`group flex items-center gap-5 p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-default ${value.border}`}
                  >
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 ${value.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                       <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${value.color} relative z-10`} />
                       {/* Petit effet de brillance interne sur l'icône */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-racing-gold transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-500 leading-snug group-hover:text-gray-400 transition-colors">
                        {value.description}
                      </p>
                    </div>

                    {/* Arrow Indicator (Visible au hover) */}
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 opacity-0 sm:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}