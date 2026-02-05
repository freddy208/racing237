"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Youtube, Instagram } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  type: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["racing237@gmail.com"],
    color: "text-racing-red",
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+237 696 509 305", "+237 696 509 305"],
    color: "text-racing-gold",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Douala, Cameroun", "Bonamoussadi Fist-T"],
    color: "text-racing-red",
  },
];

const typesDemande = [
  "Informations générales",
  "Demande presse",
  "Partenariat",
  "Billetterie",
  "Participation pilote",
  "Autre",
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/racing237", color: "hover:text-blue-600" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@racing237", color: "hover:text-red-600" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/racing237", color: "hover:text-pink-600" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    type: typesDemande[0],
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est requis";
    }

    if (!formData.sujet.trim()) {
      newErrors.sujet = "Le sujet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par vraie API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
        type: typesDemande[0],
      });

      // Reset success après 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-racing-red to-racing-gold text-white py-24">
        <div className="container-racing">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-black text-5xl md:text-6xl mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90">
              Une question ? Un projet de partenariat ? Notre équipe est à votre écoute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infos de Contact */}
      <section className="py-20 bg-white">
        <div className="container-racing">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-racing-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-racing-dark mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-racing-gray">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Réseaux sociaux */}
          <div className="text-center mb-20">
            <h3 className="font-display font-bold text-2xl text-racing-dark mb-6">
              Suivez-nous
            </h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-racing-gray transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + Map */}
      <section className="py-20 bg-gray-50">
        <div className="container-racing">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle align="left" subtitle="Écrivez-nous">
                Envoyez un message
              </SectionTitle>

              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                {/* Type de demande */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Type de demande *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-racing-red transition-colors"
                  >
                    {typesDemande.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nom */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors ${
                      errors.nom ? "border-red-500" : "border-gray-200 focus:border-racing-red"
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-200 focus:border-racing-red"
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors ${
                      errors.telephone ? "border-red-500" : "border-gray-200 focus:border-racing-red"
                    }`}
                    placeholder="+237 6 00 00 00 00"
                  />
                  {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors ${
                      errors.sujet ? "border-red-500" : "border-gray-200 focus:border-racing-red"
                    }`}
                    placeholder="Objet de votre message"
                  />
                  {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-racing-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200 focus:border-racing-red"
                    }`}
                    placeholder="Votre message..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-racing-red text-white font-bold rounded-full hover:bg-racing-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              {/* Message de succès */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Message envoyé avec succès !</p>
                    <p className="text-sm text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Map + Horaires */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Google Maps */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d9.73937!3d4.09435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0be1c4c6b7:0x923991898!2sBonamoussadi%2C%20Douala!5e0!3m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-display font-bold text-2xl text-racing-dark mb-6">
                  Horaires de bureau
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3">
                    <span className="font-semibold text-racing-dark">Dimanche</span>
                    <span className="text-red-600 font-semibold">15h - 18h</span>
                  </div>
                </div>
              </div>

              {/* Info supplémentaire */}
              <div className="bg-racing-red/10 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-racing-dark mb-2">
                  Réponse rapide
                </h4>
                <p className="text-racing-gray">
                  Nous nous engageons à répondre à toutes les demandes dans un délai de 48 heures ouvrées.
                  Pour les urgences, contactez-nous par téléphone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}