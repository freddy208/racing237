import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Racing 237 – Grand Prix Moto Cameroun Officiel",
  description:
    "Racing 237 est le Grand Prix Moto officiel du Cameroun. Découvrez pilotes, événements, médias et actualités en direct du Grand Prix Moto à Douala.",
  keywords: [
    "Racing 237",
    "Grand Prix Moto Cameroun",
    "Course moto Cameroun",
    "Moto GP Cameroun",
    "Racing Cameroun",
  ],
  authors: [{ name: "Racing 237" }],
  creator: "Racing 237",
  publisher: "Racing 237",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://racing237.vercel.app",
    title: "Racing 237 – Grand Prix Moto Cameroun Officiel",
    description:
      "Site officiel du Grand Prix Moto du Cameroun. Pilotes, actualités et événements en direct.",
    siteName: "Racing 237",
  },
  twitter: {
    card: "summary_large_image",
    title: "Racing 237 – Grand Prix Moto Cameroun Officiel",
    description:
      "Découvrez le Grand Prix Moto du Cameroun : pilotes, événements et actualités officielles.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}