"use client";

import Link from "next/link";
import { Facebook, Youtube, Instagram, Mail, Phone } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Événement", href: "/evenement" },
    { label: "Pilotes", href: "/pilotes" },
    { label: "Médias", href: "/medias" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/" },
    { label: "Politique de confidentialité", href: "/" },
    { label: "CGU", href: "/" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/p/Racing-Cameroun-R-237-100064000690914/", icon: Facebook },
    { label: "YouTube", href: "https://www.youtube.com/@racing2374", icon: Youtube },
    { label: "Instagram", href: "https://www.instagram.com/237.racing/", icon: Instagram },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-racing-dark text-white">
      <div className="container-racing py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-racing-red rounded-full flex items-center justify-center">
                <span className="text-white font-display font-black text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl leading-none">RACING</span>
                <span className="font-display font-black text-racing-gold text-xl leading-none">237</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Au service de la moto. Le Grand Prix Moto du Cameroun, l&apos;événement motor sport qui révolutionne l&apos;Afrique Centrale.
            </p>
            <div className="flex items-center space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-racing-red rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-racing-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-racing-gold" />
                <a href="mailto:racing237@gmail.com" className="hover:text-racing-gold transition-colors">
                  racing237@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-racing-gold" />
                <a href="tel:+237 696 509 305" className="hover:text-racing-gold transition-colors">
                  +237 696 509 305
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Presse & Médias</h4>
              <a href="mailto:racing237@gmail.com" className="text-racing-gold hover:text-racing-red transition-colors text-sm">
                racing237@gmail.com
              </a>
            </div>
          </div>

          {/* Partenaires */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Partenaires</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                <p className="text-sm font-semibold">For You Africa</p>
                <p className="text-xs text-gray-400">Diffusion officielle</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                <p className="text-sm font-semibold">Canal+ Sport</p>
                <p className="text-xs text-gray-400">Canal+ 517</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                <p className="text-sm font-semibold">City Sport</p>
                <p className="text-xs text-gray-400">Partenaire média</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-racing py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Racing 237. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
            {footerLinks.legal.map((link) => (
                <Link
                  key={link.label} // <-- unique
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-racing-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}