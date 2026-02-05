import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Racing 237 | Grand Prix Moto Cameroun",
  description: "Contactez l'équipe Racing 237 pour toute demande d'information, partenariat, presse ou participation au Grand Prix Moto du Cameroun.",
  keywords: [
    "contact racing 237",
    "partenariat moto cameroun",
    "presse grand prix moto",
    "contact stade japoma",
  ],
  openGraph: {
    title: "Contact Racing 237",
    description: "Contactez l'équipe du Grand Prix Moto",
    url: "https://racing237.vercel.app/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}