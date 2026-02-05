import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programme Grand Prix Moto Cameroun 2026 | Racing 237",
  description: "Découvrez le programme complet du Grand Prix Moto du Cameroun le 8 février 2026 au Stade Japoma de Douala. Courses 125cc, 250cc et 500cc en direct.",
  keywords: [
    "programme grand prix moto cameroun",
    "course moto douala",
    "calendrier racing 237",
    "événement moto cameroun 2026",
    "stade japoma course",
  ],
  openGraph: {
    title: "Programme Grand Prix Moto Cameroun 2026",
    description: "Programme complet des courses du 8 février 2026",
    url: "https://racing237.vercel.app/evenement",
    type: "website",
  },
};

export default function EvenementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}