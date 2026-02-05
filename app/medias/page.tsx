/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Play, Image as ImageIcon, Video, Calendar, ChevronLeft, ChevronRight, FileText, Layers } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

// Types
type MediaType = "all" | "photos" | "videos";

interface MediaItem {
  id: number;
  type: "photo" | "video";
  url: string;
  thumbnail: string;
  thumbnail1?: string; // Pour les vidéos, on peut avoir une miniature spécifique
  title: string;
  date: string;
  category: string;
}

// Données médias
const mediaData: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301543/moto1_cy7qvb.webp",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301543/moto1_cy7qvb.webp",
    title: "Course 500cc - Finale 2024",
    date: "",
    category: "Courses",
  },
  {
    id: 2,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301535/media30_kqsycm.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301535/media30_kqsycm.jpg",
    title: "Pilote en action",
    date: "",
    category: "Pilotes",
  },
  {
    id: 3,
    type: "video",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301536/media31_rwm140.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301536/media31_rwm140.jpg",
    title: "Highlights Grand Prix 2024",
    date: "",
    category: "Événements",
  },
  {
    id: 4,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301527/media24_cwej1d.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301527/media24_cwej1d.jpg",
    title: "Podium 250cc",
    date: "",
    category: "Podiums",
  },
  {
    id: 5,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301531/media27_w904qd.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301531/media27_w904qd.jpg",
    title: "",
    date: "",
    category: "Coulisses",
  },
  {
    id: 6,
    type: "video",
    url: "https://res.cloudinary.com/duqsblvzm/video/upload/v1770302768/videoracing1_tnfqyh.mp4",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770302768/thumbnail_videoracing1_tnfqyh.jpg",
    thumbnail1: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770303696/video_m6jefu.jpg",
    title: "Course",
    date: "",
    category: "Courses",
  },
  {
    id: 7,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301529/media26_fbvzye.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301529/media26_fbvzye.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 8,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301240/media19_rus9gh.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301240/media19_rus9gh.jpg",
    title: "Ambiance public",
    date: "",
    category: "Événements",
  },
    {
    id: 9,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301239/media16_nnprus.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301239/media16_nnprus.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 10,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301225/media7_slm8gl.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301225/media7_slm8gl.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 11,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media13_wgas2m.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media13_wgas2m.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 12,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media14_v2xaan.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media14_v2xaan.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 13,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301239/media18_godqgw.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301239/media18_godqgw.jpg",
    title: "Ambiance public",
    date: "",
    category: "Événements",
  },
    {
    id: 14,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301233/media12_yqhrul.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301233/media12_yqhrul.jpg",
    title: "Ambiance public",
    date: "",
    category: "Événements",
  },
    {
    id: 15,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301227/media9_axj9bb.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301227/media9_axj9bb.jpg",
    title: "Ambiance public",
    date: "",
    category: "Événements",
  },
    {
    id: 16,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301216/media2_atiiry.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301216/media2_atiiry.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 17,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301218/media3_gho8fq.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301218/media3_gho8fq.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 18,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301220/media5_kg6l75.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301220/media5_kg6l75.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 19,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301226/media8_ripnjx.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301226/media8_ripnjx.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 20,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media13_wgas2m.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301234/media14_v2xaan.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 21,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770298520/mediaE_u6pmju.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770298520/mediaE_u6pmju.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 22,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770291387/derossi_zu8zf5.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770291387/derossi_zu8zf5.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 23,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301543/moto1_cy7qvb.webp",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301543/moto1_cy7qvb.webp",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 24,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301540/media34_lmriqt.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301540/media34_lmriqt.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
  {
    id: 25,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770302600/media09_sa4nkk.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770302600/media09_sa4nkk.jpg",
    title: "",
    date: "",
    category: "Courses",
  },
    {
    id: 26,
    type: "photo",
    url: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770302677/grandPrix_bcoyy3.jpg",
    thumbnail: "https://res.cloudinary.com/duqsblvzm/image/upload/v1770301240/media19_rus9gh.jpg",
    title: "Course Japoma",
    date: "",
    category: "Événements",
  },
];

const categories = ["Tous", "Courses", "Pilotes", "Podiums", "Coulisses", "Événements", "Interviews"];

export default function MediasPage() {
  const [selectedType, setSelectedType] = useState<MediaType>("all");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtrage
  const filteredMedia = mediaData.filter((item) => {
    const matchType = selectedType === "all" || 
                     (selectedType === "photos" && item.type === "photo") ||
                     (selectedType === "videos" && item.type === "video");
    const matchCategory = selectedCategory === "Tous" || item.category === selectedCategory;
    return matchType && matchCategory;
  });

  // Navigation lightbox
  const openLightbox = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(filteredMedia[nextIndex]);
  };

  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(filteredMedia[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero Section - Premium Light */}
      <section className="relative pt-32 pb-20 border-b border-slate-100 overflow-hidden">
        {/* Background Subtle */}
       <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/duqsblvzm/image/upload/v1770301548/mediaF_rtlmqc.jpg" 
            alt="Circuit" 
            className="w-full h-full object-cover" 
          />
          {/* Overlay très léger, quasi invisible */}
          <div className="absolute inset-0 bg-black/5" />
        </div>


        
        <div className="container-racing relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Archives & Galerie
            </span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter mb-6 text-slate-900">
              GALERIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-racing-gold">MÉDIAS</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
              Revivez l&apos;adrénaline du Grand Prix Moto du Cameroun à travers notre collection exclusive de photos et vidéos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres - Glassmorphism Sticky */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container-racing">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
            
            {/* Type de média - Clean Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setSelectedType("all")}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedType === "all"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setSelectedType("photos")}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedType === "photos"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <ImageIcon className="w-4 h-4" /> Photos
              </button>
              <button
                onClick={() => setSelectedType("videos")}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedType === "videos"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Video className="w-4 h-4" /> Vidéos
              </button>
            </div>

            {/* Catégories Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 xl:pb-0 w-full xl:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
             <p className="text-sm font-semibold text-slate-400">
               {filteredMedia.length} média{filteredMedia.length > 1 ? "s" : ""} affiché{filteredMedia.length > 1 ? "s" : ""}
             </p>
          </div>
        </div>
      </section>

      {/* Galerie - Masonry Grid Feel */}
      <section className="py-16">
        <div className="container-racing">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openLightbox(media, index)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  {/* Image */}
                  <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-lg mb-1 leading-tight">{media.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(media.date).toLocaleDateString("fr-FR")}</span>
                    </div>
                  </div>

                  {/* Type Icon Badge */}
                 {/* Type Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-slate-900">
                    {media.type === "video" ? (
                      <Play className="w-5 h-5 fill-current" />
                    ) : (
                      <ImageIcon className="w-5 h-5" />
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Message vide */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
              <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-xl font-bold text-slate-900 mb-2">Aucun média trouvé</p>
              <p className="text-slate-500">Essayez de changer les filtres.</p>
            </div>
          )}
        </div>
      </section>

      {/* Kit Média - Premium Resource Cards */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container-racing">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <SectionTitle subtitle="Ressources Officielles">Kit Média</SectionTitle>
            <p className="text-slate-500 text-lg mt-4">
              Accédez aux actifs officiels de la marque Racing 237 pour vos publications et articles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-racing-red">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Logos</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-10">
                Pack complet incluant les versions vectorielles, transparentes et monochromes.
              </p>
              <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-racing-red hover:text-racing-red transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-50">
                <Download className="w-4 h-4" /> Télécharger .ZIP
              </button>
            </div>

            {/* Card 2 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-racing-gold">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Visuels</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-10">
                Affiches officielles et visuels de communication haute résolution (Print & Web).
              </p>
              <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-racing-gold hover:text-racing-gold transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-50">
                <Download className="w-4 h-4" /> Télécharger .ZIP
              </button>
            </div>

            {/* Card 3 */}
            <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Presse</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-10">
                Dossiers de presse, communiqués officiels et fiches techniques pilotes.
              </p>
              <button className="w-full py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 group-hover:bg-slate-50">
                <Download className="w-4 h-4" /> Télécharger .ZIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox - Premium Dark UI */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              
              {/* Header Lightbox */}
<div className="flex-grow bg-black rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center min-h-0">
  {selectedMedia.type === "video" ? (
    <video
      src={selectedMedia.url}
      poster={selectedMedia.thumbnail1}
      controls
      className="w-full h-full object-contain"
    />
  ) : (
    <img
      src={selectedMedia.url}
      alt={selectedMedia.title}
      className="max-w-full max-h-[80vh] object-contain"
    />
  )}
</div>


              {/* Content Container */}
              <div className="flex-grow bg-black rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center min-h-0">
                {selectedMedia.type === "photo" ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="w-full aspect-video max-h-[80vh]">
                    <iframe
                      src={selectedMedia.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {filteredMedia.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/10"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/10"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="text-center mt-4 text-white/50 text-sm font-medium">
                {currentIndex + 1} / {filteredMedia.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}