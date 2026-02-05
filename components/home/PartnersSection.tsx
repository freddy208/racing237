/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Building2 } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CldImage } from 'next-cloudinary';

const partners = [
  {
    name: "For You Africa",
    logo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770292461/foryou-media-afrique-logo_ow2wo8.png", // Vide : affichera le fallback "F"
    category: "Diffusion officielle",
    tier: "principal",
  },
  {
    name: "Canal+ Sport",
    logo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770293140/canal2_gtuzxt.webp",
    category: "Média TV",
    tier: "principal",
  },
  {
    name: "City Sport",
    logo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770293475/citysport2_gk1fls.jpg",
    category: "Partenaire média",
    tier: "principal",
  },
];

const supporters = [
  "MTN Cameroun",
  "Orange Cameroun",
  "ENEO",
  "Guinness",
  "Total Energies",
  "Yamaha",
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Fond Bleu Nuit avec texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-racing relative z-10">
        
        {/* Header Premium */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Écosystème</span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <SectionTitle subtitle="Ils nous font confiance">
            Partenaires <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Stratégiques</span>
          </SectionTitle>
          
          <p className="text-gray-300 mt-6 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed px-4">
            L&apos;excellence se construit ensemble. Découvrez les marques qui propulsent le Grand Prix Moto du Cameroun.
          </p>
        </motion.div>

        {/* Main Partners - Responsive Grid & Perfect Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-500 overflow-hidden flex flex-col">
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
                  
                  {/* Responsive Logo Area - Aspect Ratio + Object Contain */}
                  <div className="w-full aspect-[3/2] bg-white rounded-xl flex items-center justify-center p-4 md:p-8 shadow-inner mb-4 md:mb-6 group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                    
                    {/* Fond subtil pour le logo */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-50/30" />
                    
                    {/* Condition : Si logo vide, on affiche la première lettre */}
                    {partner.logo ? (
                      <CldImage
                        src={partner.logo}
                        width="600"
                        height="400"
                        quality="auto"
                        format="auto"
                        alt={"Logo partenaire " + partner.name}
                        className="relative z-10 w-full h-full object-contain filter contrast-125" 
                        // object-contain empêche l'étirement (distortion)
                      />
                    ) : (
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full">
                        <span className="font-display font-black text-3xl md:text-5xl text-gray-300">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2 tracking-tight">
                    {partner.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 mt-1 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-black/30 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-racing-gold" />
                    <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-wider">
                      {partner.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporters - Responsive Badge Wall */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 md:pt-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-4">
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">
              Soutiens Officiels
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs hidden md:block" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {supporters.map((supporter, index) => (
              <motion.div
                key={supporter}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.3)" }}
                className="group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/5 rounded-full cursor-default transition-all duration-300"
              >
                <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                  {supporter}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Partenariat - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900/40 to-slate-900 border border-white/10 rounded-2xl md:rounded-3xl p-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-racing-gold/20 opacity-50" />
            
            <div className="relative bg-[#0f172a]/80 backdrop-blur-sm rounded-xl md:rounded-[20px] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 z-10">
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-racing-gold mb-2 md:mb-3">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Contact Partenariat</span>
                </div>
                <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2 leading-tight">
                  Rejoignez l&apos;élite du sport
                </h3>
                <p className="text-blue-200/60 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Associez votre marque à l&apos;événement le plus attendu de l&apos;année.
                </p>
              </div>

              <a
                href="mailto:racing237@gmail.com"
                className="group relative inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Nous contacter
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}