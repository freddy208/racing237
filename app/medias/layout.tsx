import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos & Vidéos Grand Prix Moto Cameroun | Racing 237",
  description: "Découvrez les photos et vidéos officielles du Grand Prix Moto du Cameroun. Courses, pilotes, podiums et moments forts en images.",
  keywords: [
    "photos grand prix moto cameroun",
    "vidéos racing 237",
    "galerie moto cameroun",
    "images course moto douala",
  ],
  openGraph: {
    title: "Galerie Médias Racing 237",
    description: "Photos et vidéos du Grand Prix Moto du Cameroun",
    url: "https://racing237.vercel.app/medias",
    type: "website",
  },
};

export default function MediasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}