import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://racing237.vercel.app";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily", // ✅ Changé de weekly à daily (page d'accueil change souvent)
      priority: 1.0,
    },
    {
      url: `${baseUrl}/evenement`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9, // ✅ Augmenté de 0.8 à 0.9 (page très importante)
    },
    {
      url: `${baseUrl}/pilotes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/medias`,
      lastModified: new Date(),
      changeFrequency: "daily", // ✅ Changé de weekly à daily (galerie mise à jour souvent)
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6, // ✅ Réduit de 0.7 à 0.6 (moins prioritaire pour SEO)
    },
  ];
}