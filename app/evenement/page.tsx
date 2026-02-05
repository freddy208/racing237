/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Info, Flame, Activity } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CldImage } from "next-cloudinary";

// Données du programme
const programme = [
  {
    heure: "09:00",
    titre: "Ouverture des portes",
    description: "Accueil du public et accréditation presse",
    categorie: "Général",
  },
  {
    heure: "10:00",
    titre: "Qualifications 125cc",
    description: "Séances de qualification - Catégorie débutants",
    categorie: "125cc",
    duree: "45 min",
  },
  {
    heure: "11:00",
    titre: "Qualifications 250cc",
    description: "Séances de qualification - Catégorie intermédiaire",
    categorie: "250cc",
    duree: "45 min",
  },
  {
    heure: "12:00",
    titre: "Pause déjeuner",
    description: "Restauration et animations",
    categorie: "Général",
  },
  {
    heure: "13:30",
    titre: "Qualifications 500cc",
    description: "Séances de qualification - Catégorie professionnelle",
    categorie: "500cc",
    duree: "45 min",
  },
  {
    heure: "14:30",
    titre: "Course 125cc",
    description: "Course principale - 20 tours",
    categorie: "125cc",
    duree: "30 min",
  },
  {
    heure: "15:15",
    titre: "Course 250cc",
    description: "Course principale - 25 tours",
    categorie: "250cc",
    duree: "40 min",
  },
  {
    heure: "16:15",
    titre: "Course 500cc - FINALE",
    description: "Grande finale - 30 tours",
    categorie: "500cc",
    duree: "50 min",
    highlight: true,
  },
  {
    heure: "17:30",
    titre: "Cérémonie de remise des prix",
    description: "Podiums et célébrations",
    categorie: "Général",
  },
];

const infos = [
  {
    icon: MapPin,
    titre: "Accès",
    details: ["Stade Japoma, Douala", "Parking gratuit VIP & Public", "Navettes depuis le centre-ville"],
  },
  {
    icon: Info,
    titre: "Capacité",
    details: ["50,000 places assises", "Zones Premium & Loges", "Accessibilité PMR totale"],
  },
  {
    icon: Activity,
    titre: "Services",
    details: ["Food Court & Restauration", "Boutique Officielle Racing 237", "Postes de secours médicalisés"],
  },
];

export default function EvenementPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
      
      {/* Hero Section - On garde le foncé pour l'impact de l'image, mais le reste sera blanc */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white border-b border-white/10">
     <div className="absolute inset-0 z-0">
      <CldImage
        src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770298520/mediaE_u6pmju.jpg"
        alt="Circuit"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/60" /> {/* overlay plus subtil */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
    </div>


        <div className="container-racing relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
            >
              <Calendar className="w-4 h-4 text-racing-gold" />
              <span className="text-sm font-bold uppercase tracking-wider">Samedi 8 Février 2026</span>
            </motion.div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tighter text-white">
              PROGRAMME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-racing-gold">DE LA JOURNÉE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Plongez au cœur de l&apos;action. Une journée complète d&apos;adrénaline, de vitesse et de passion au Stade Japoma.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-slate-300">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-racing-gold" />
                <span className="text-white">09:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-racing-gold" />
                <span className="text-white">Stade Japoma</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme Timeline - Mode Clair */}
      <section className="py-20 relative bg-[#FAFAFA]">
        <div className="container-racing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionTitle subtitle="Planning Officiel">Horaires des Courses</SectionTitle>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-5">
            {programme.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  item.highlight 
                    ? "bg-red-50 border-2 border-racing-red shadow-lg scale-[1.02]" 
                    : "bg-white border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 relative z-10">
                  
                  {/* Time Block */}
                  <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1 md:w-32">
                    <span className={`font-display font-black text-3xl md:text-4xl tracking-tighter ${
                      item.highlight ? "text-racing-red" : "text-gray-900"
                    }`}>
                      {item.heure}
                    </span>
                    {item.duree && (
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.duree}
                      </span>
                    )}
                  </div>
                  
                  <div className="hidden md:block w-px h-12 bg-gray-200" />
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                      <h3 className={`font-display font-bold text-xl md:text-2xl ${item.highlight ? "text-racing-red" : "text-gray-900"}`}>
                        {item.titre}
                      </h3>
                      
                      {/* Category Tags - Version Light (Pastel) */}
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit border ${
                        item.categorie === "125cc"
                          ? "bg-blue-50 text-blue-700 border-blue-100"
                          : item.categorie === "250cc"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                          : item.categorie === "500cc"
                          ? "bg-red-50 text-red-700 border-red-100"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                      }`}>
                        {item.categorie === "500cc" && item.highlight && <Flame className="w-3 h-3" />}
                        {item.categorie}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION: La Piste (2 Images) - Fond Blanc */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container-racing">
          <div className="mb-12">
            <SectionTitle subtitle="Infrastructure">Le Circuit</SectionTitle>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Un tracé technique conçu pour favoriser les dépassements et mettre à l&apos;épreuve la maîtrise des pilotes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"
            >
              <CldImage
                src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770295698/cricuit_wkfcqx.png"
                width="800"
                height="600"
                quality="auto"
                format="auto" alt={"Vue du circuit"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-3">
                  <MapPin className="w-3 h-3 text-racing-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Tracé Technique</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Virages Serrés</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"
            >
               <CldImage
                src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770295827/circuit2_zwhq7e.png"
                width="800"
                height="600"
                quality="auto"
                format="auto" alt={"Détail piste"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-3">
                  <Activity className="w-3 h-3 text-racing-red" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Haute Adhérence</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Ligne Droite</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infos Pratiques - Fond Gris Clair pour contraste */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container-racing">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <SectionTitle subtitle="Planifiez votre venue" align="left">
                Informations <br /> Pratiques
              </SectionTitle>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Tout ce que vous devez savoir pour profiter pleinement de l&apos;événement dans les meilleures conditions.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {infos.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.titre}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5 text-racing-red" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-4">{info.titre}</h3>
                    <ul className="space-y-3">
                      {info.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1 h-1 bg-racing-gold rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}