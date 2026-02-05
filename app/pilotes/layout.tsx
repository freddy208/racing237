import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilotes Grand Prix Moto Cameroun | Racing 237",
  description: "Découvrez tous les pilotes du Grand Prix Moto du Cameroun : Jackson, Derossi, Mbom, Astride, Passy, Narcisse et tous les talents camerounais de la moto.",
  keywords: [
    "pilotes moto cameroun",
    "Jackson pilote racing 237",
    "Derossi racing 237",
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
    type: "website",
  },
};

export default function PilotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}