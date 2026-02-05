/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Tv } from "lucide-react";
import CountdownTimer from "@/components/shared/CountdownTimer";
import Button from "@/components/shared/Button";

// Positions fixes pour les particules (évite l'erreur d'hydratation)
const PARTICLE_POSITIONS = [
  { left: 15, top: 20, duration: 3.2, delay: 0.1 },
  { left: 85, top: 35, duration: 4.1, delay: 0.8 },
  { left: 25, top: 70, duration: 3.7, delay: 1.2 },
  { left: 60, top: 15, duration: 4.5, delay: 0.3 },
  { left: 45, top: 85, duration: 3.3, delay: 1.5 },
  { left: 75, top: 50, duration: 4.0, delay: 0.6 },
  { left: 10, top: 60, duration: 3.9, delay: 1.0 },
  { left: 90, top: 25, duration: 3.5, delay: 0.4 },
  { left: 35, top: 45, duration: 4.3, delay: 1.3 },
  { left: 65, top: 75, duration: 3.6, delay: 0.7 },
  { left: 50, top: 30, duration: 4.2, delay: 0.9 },
  { left: 20, top: 55, duration: 3.8, delay: 1.1 },
  { left: 80, top: 65, duration: 4.4, delay: 0.5 },
  { left: 40, top: 10, duration: 3.4, delay: 1.4 },
  { left: 70, top: 80, duration: 4.6, delay: 0.2 },
  { left: 30, top: 40, duration: 3.1, delay: 1.6 },
  { left: 55, top: 90, duration: 4.7, delay: 0.8 },
  { left: 95, top: 45, duration: 3.9, delay: 1.7 },
  { left: 5, top: 25, duration: 4.1, delay: 0.6 },
  { left: 48, top: 62, duration: 3.7, delay: 1.0 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Background Image avec effet Ken Burns (Zoom lent) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=2000')`,
          }}
        />
        
            {/* Overlay noir léger pour l’effet cinématique */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Overlay cinématique + couleur Racing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* 3. Animated "Embers" */}
        <div className="absolute inset-0 pointer-events-none">
          {PARTICLE_POSITIONS.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-racing-gold rounded-full blur-[0.5px]"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                boxShadow: "0 0 6px 2px rgba(234, 179, 8, 0.4)",
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Texture de bruit subtile */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-racing text-center text-white py-20 md:py-32 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge Premium Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 bg-white/5 backdrop-blur-md rounded-full mb-8 md:mb-10 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-racing-gold"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/90">
              6éme Édition 
            </span>
          </motion.div>

          {/* Main Title - Mobile First Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-1 sm:mb-2 leading-[0.9] tracking-tight sm:tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
              LE GRAND PRIX
            </span>
          </motion.h1>
          
          <motion.h2
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="font-display font-black text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8 leading-[0.95] tracking-tighter italic"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-racing-gold via-yellow-400 to-yellow-700 drop-shadow-lg filter">
              MOTO DU CAMEROUN
            </span>
          </motion.h2>

          {/* Event Details Cards - Stack on Mobile, Row on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12 w-full max-w-2xl mx-auto"
          >
            {[
              { icon: Calendar, text: "8 Février 2026" },
              { icon: MapPin, text: "Stade Japoma, Douala" },
              { icon: Tv, text: "10H00 (GMT+1)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
              >
                <item.icon className="w-4 h-4 text-racing-gold flex-shrink-0" />
                <span className="text-white/90">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Countdown - Zone inchangée et centrée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12 md:mb-16 flex justify-center w-full"
          >
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-white/10 to-transparent w-full max-w-md">
               <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/5">
                 <CountdownTimer />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens if needed, but kept here for minimal aesthetic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
        />
      </motion.div>
    </section>
  );
}