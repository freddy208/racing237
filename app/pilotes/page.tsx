/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Trophy, X, Flag, Award, MapPin, Activity } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { CldImage } from "next-cloudinary";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilotes Grand Prix Moto Cameroun | Racing 237",
  description: "Découvrez tous les pilotes du Grand Prix Moto du Cameroun : Jean Kamdem, Marie Nkotto, Patrick Mbarga et tous les talents camerounais de la moto.",
  keywords: [
    "pilotes moto cameroun",
    "De Rossi pilote",
    "Jackson racing 237",
    "Mbom racing 237",
    "Astride racing 237",
    "Passy racing 237",
    "Narcisse racing 237",
    "pilotes racing 237",
    "champions moto cameroun",
  ],
  openGraph: {
    title: "Pilotes Grand Prix Moto Cameroun",
    description: "Tous les pilotes du Racing 237",
    url: "https://racing237.vercel.app/pilotes",
  },
};

// Ajoute ceci en haut de ton fichier app/pilotes/page.tsx

// Données pilotes
const pilotesData = [
  {
    id: 1,
    nom: "Jackson",
    prenom: "Bimela",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 10,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296580/jackson_voq4zo.jpg",
    pays: "Cameroun",
    age: 28,
    palmares: ["Champion 2024", "Champion 2023", "Top chrono 2024"],
    victoires: 3,
    podiums: 5,
    bio: "Passionné de moto depuis l'enfance, Jackson représente la nouvelle génération de pilotes camerounais.",
  },
  {
    id: 2,
    nom: "Derossi",
    prenom: "Abdoulaye Bertrand",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 7,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296761/derossi2_xmnozg.jpg",
    pays: "Cameroun",
    age: 32,
    palmares: ["Championne 2022", "Record de vitesse 2022", "2x Pole Position"],
    victoires: 1,
    podiums: 4,
    bio: "Vétéran de la discipline, Derossi domine la catégorie 250cc depuis 5 ans.",
  },
  {
    id: 3,
    nom: "Mbom",
    prenom: "Mbom",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 30,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770296983/mbom_cj5v3d.jpg",
    pays: "Cameroun",
    age: 32,
    palmares: [" 2x Pole position", "Meilleur temps 2023"],
    victoires: 0,
    podiums: 3,
    bio: "Vétéran de la discipline, Mbom domine la catégorie 250cc fort de son éxperience.",
  },
  {
    id: 4,
    nom: "Astride",
    prenom: "Ngo-Mbondo",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 11,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770300432/astrid_wos6ud.jpg",
    pays: "Cameroun",
    age: 35,
    palmares: ["Meilleur record feminin"],
    victoires: 0,
    podiums: 1,
    bio: "Seule représentante féminine qualifiée et participante régulière dans les éditions récentes (notamment GP4 et GP5 en 2025), ce qui en fait une figure pionnière et inspirante pour les femmes dans le motocyclisme sportif au Cameroun.",
  },
  {
    id: 5,
    nom: "Passy",
    prenom: "Endeley",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 5,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770300897/passy_zmbyrw.jpg",
    pays: "Cameroun",
    age: 23,
    palmares: ["2éme Vice-championne 2024", "1x Podium"],
    victoires: 0,
    podiums: 1,
    bio: "Jeune pilote prometteur, Passy a rapidement gravi les échelons pour devenir une figure montante du motocyclisme camerounais.",
  },
  {
    id: 6,
    nom: "Narcisse ",
    prenom: "Kounhoua",
    categorie: "250cc",
    equipe: "Racing Team 237",
    numero: 1,
    photo: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770300658/media1_shxtfc.jpg",
    pays: "Cameroun",
    age: 50,
    palmares: ["Vice-champion 2021", "1x Podium"],
    victoires: 0,
    podiums: 1,
    bio: "président GPM Racing 237, ancien pilote et mentor de nombreux talents,SM Kounhoua apporte son expérience inestimable à l'équipe.",
  },
];

const categories = ["Tous", "125cc", "250cc", "500cc"];

export default function PilotesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPilote, setSelectedPilote] = useState<typeof pilotesData[0] | null>(null);

  // Filtrage
  const filteredPilotes = pilotesData.filter((pilote) => {
    const matchCategory = selectedCategory === "Tous" || pilote.categorie === selectedCategory;
    const matchSearch = pilote.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       pilote.equipe.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero Section - Avec Image de Fond Subtile */}
      {/* Hero Section - Avec Image de Fond Subtile */}
      <section className="relative pt-32 pb-20 border-b border-slate-100 overflow-hidden min-h-[80vh]">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <CldImage
            src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770298260/media16_fgpgq5.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            quality="auto"
            format="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/40 to-white/50" />
        </div>

        
        {/* Contenu */}
        <div className="container-racing relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Label */}
            <span className="inline-block py-1 px-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Roster 2026
            </span>

            {/* Titre Principal */}
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter mb-6 text-slate-900 drop-shadow-md">
              L&apos;ÉLITE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-racing-gold">
                PILOTES
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed bg-white/40 inline-block py-2 px-4 rounded-lg backdrop-blur-sm shadow-sm">
              Découvrez les talents qui défendront leurs couleurs sur le circuit du Stade Japoma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filters - Glassmorphism */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container-racing">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Recherche élégante */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-racing-red transition-colors" />
              <input
                type="text"
                placeholder="Rechercher un pilote ou une équipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all font-medium text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Filtres Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Compteur résultats */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
             <p className="text-sm font-semibold text-slate-400">
               {filteredPilotes.length} pilote{filteredPilotes.length > 1 ? "s" : ""} affiché{filteredPilotes.length > 1 ? "s" : ""}
             </p>
          </div>
        </div>
      </section>

      {/* Grid Pilotes - Premium Cards */}
      <section className="py-16">
        <div className="container-racing">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPilotes.map((pilote, index) => (
              <motion.div
                key={pilote.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedPilote(pilote)}
                className="group relative cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-slate-100">
                  
                  {/* Image Area - Clean Cut */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    <img
                      src={pilote.photo}
                      alt={pilote.nom}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay très subtil uniquement en bas pour lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    {/* Numéro Watermark */}
                    <div className="absolute top-4 left-4 font-display font-black text-8xl text-white/10 select-none pointer-events-none -mt-4 -ml-2">
                      {pilote.numero}
                    </div>

                    {/* Badges Flottants */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${
                        pilote.categorie === "125cc"
                          ? "bg-blue-500/90 text-white border border-blue-400"
                          : pilote.categorie === "250cc"
                          ? "bg-racing-gold/90 text-white border border-yellow-400"
                          : "bg-racing-red/90 text-white border border-red-400"
                      }`}>
                        {pilote.categorie}
                      </div>
                    </div>

                    {/* Content Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2 opacity-90">
                        <MapPin className="w-3 h-3 text-racing-gold" />
                        <span className="text-xs font-semibold uppercase tracking-wide">{pilote.pays}</span>
                      </div>
                      <h3 className="font-display font-black text-3xl mb-1 leading-none">
                        {pilote.nom}
                      </h3>
                      <p className="text-racing-gold font-medium text-sm uppercase tracking-wider">
                        {pilote.equipe}
                      </p>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="p-6 border-t border-slate-50 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="text-center px-2">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Victoires</span>
                        <span className="block text-xl font-black text-slate-900">{pilote.victoires}</span>
                      </div>
                      <div className="h-8 w-px bg-slate-100"></div>
                      <div className="text-center px-2">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Podiums</span>
                        <span className="block text-xl font-black text-slate-900">{pilote.podiums}</span>
                      </div>
                      <div className="h-8 w-px bg-slate-100"></div>
                      <div className="text-center px-2">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Âge</span>
                        <span className="block text-xl font-black text-slate-900">{pilote.age}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message vide */}
          {filteredPilotes.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-4">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-xl font-bold text-slate-900 mb-2">Aucun pilote trouvé</p>
              <p className="text-slate-500">Essayez d&apos;ajuster votre recherche ou vos filtres.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Détails - Premium White Card */}
      <AnimatePresence>
        {selectedPilote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPilote(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPilote(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md border border-slate-200 rounded-full flex items-center justify-center hover:bg-white hover:text-racing-red transition-all shadow-sm"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="grid md:grid-cols-12 min-h-[500px]">
                
                {/* Colonne Gauche : Image & Identité Visuelle */}
                <div className="md:col-span-5 relative bg-slate-100">
                  <img
                    src={selectedPilote.photo}
                    alt={selectedPilote.nom}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white" />
                  
                  {/* Grand Numero en arrière plan */}
                  <div className="absolute bottom-0 left-0 font-display font-black text-[10rem] leading-none text-white/10 select-none pointer-events-none">
                    {selectedPilote.numero}
                  </div>
                </div>

                {/* Colonne Droite : Contenu */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border ${
                          selectedPilote.categorie === "125cc"
                            ? "bg-blue-50 text-blue-600 border-blue-200"
                            : selectedPilote.categorie === "250cc"
                            ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                            : "bg-red-50 text-red-600 border-red-200"
                        }`}
                      >
                        {selectedPilote.categorie}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{selectedPilote.pays}</span>
                      </div>
                    </div>

                    <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-2 leading-tight">
                      {selectedPilote.nom}
                    </h2>
                    <p className="text-xl text-racing-gold font-bold mb-6 uppercase tracking-wide">
                      {selectedPilote.equipe}
                    </p>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-4 border-racing-red pl-4">
                      {selectedPilote.bio}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:shadow-md transition-shadow">
                      <Trophy className="w-6 h-6 text-racing-gold mx-auto mb-2" />
                      <span className="block text-3xl font-black text-slate-900">{selectedPilote.victoires}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Victoires</span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:shadow-md transition-shadow">
                      <Award className="w-6 h-6 text-racing-gold mx-auto mb-2" />
                      <span className="block text-3xl font-black text-slate-900">{selectedPilote.podiums}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Podiums</span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:shadow-md transition-shadow">
                      <Activity className="w-6 h-6 text-racing-gold mx-auto mb-2" />
                      <span className="block text-3xl font-black text-slate-900">{selectedPilote.age}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Âge</span>
                    </div>
                  </div>

                  {/* Palmarès List */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <Flag className="w-5 h-5 text-racing-red" />
                      Palmarès
                    </h3>
                    <div className="space-y-3">
                      {selectedPilote.palmares.map((titre, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-racing-red/30 hover:bg-racing-red/5 transition-all group"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-racing-red group-hover:text-white transition-colors">
                            <Trophy className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-slate-700 group-hover:text-slate-900">{titre}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}