"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Tv, Radio } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    title: "Lieu",
    value: "Stade Japoma",
    detail: "Douala, Cameroun",
    color: "text-racing-red",
    gradient: "from-racing-red/20 to-transparent",
    borderColor: "group-hover:border-racing-red/50",
  },
  {
    icon: Calendar,
    title: "Date",
    value: "8 Février 2026",
    detail: "10H00 - 18H00",
    color: "text-racing-gold",
    gradient: "from-racing-gold/20 to-transparent",
    borderColor: "group-hover:border-racing-gold/50",
  },
  {
    icon: Tv,
    title: "Télévision",
    value: "Canal+ 517",
    detail: "Diffusion nationale",
    color: "text-racing-red",
    gradient: "from-racing-red/20 to-transparent",
    borderColor: "group-hover:border-racing-red/50",
  },
  {
    icon: Radio,
    title: "Streaming",
    value: "For You Media",
    detail: "En direct",
    color: "text-racing-gold",
    gradient: "from-racing-gold/20 to-transparent",
    borderColor: "group-hover:border-racing-gold/50",
  },
];

export default function InfosSection() {
  return (
    <section className="relative py-24 bg-zinc-50 overflow-hidden">
      {/* Background Ambiance (Orbes flous pour la profondeur) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-racing-gold/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container-racing relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative h-full"
              >
                {/* Card Container - Style "Premium Dark" */}
                <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                  
                  {/* Effet de lueur dynamique au survol */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Grille de fond subtile (Texture technique) */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Bordure lumineuse qui apparaît au survol */}
                  <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-colors duration-300 ${info.borderColor}`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Area with Glow */}
                    <div className="mb-8 relative inline-block">
                      <div className={`absolute inset-0 blur-xl opacity-40 bg-gradient-to-br ${info.gradient} rounded-full`} />
                      <div className="relative w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-7 h-7 ${info.color}`} />
                      </div>
                    </div>

                    {/* Content Typography */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                        {info.title}
                      </p>
                      <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 leading-tight tracking-tight">
                        {info.value}
                      </h3>
                      <div className="h-0.5 w-8 bg-white/10 mb-3 group-hover:w-12 group-hover:bg-white/20 transition-all duration-300" />
                      <p className="text-sm text-gray-400 font-medium">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}