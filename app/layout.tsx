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
  title: "Racing 237 | Le Grand Prix Moto du Cameroun",
  description:
    "Découvrez le Grand Prix Moto du Cameroun, l'événement motorsport de l'année. 8 février 2026 au Stade Japoma de Douala. En direct sur Canal+ et For You Media Africa.",
  keywords: [
    "racing",
    "moto",
    "Cameroun",
    "grand prix",
    "motorsport",
    "Douala",
    "Japoma",
    "Canal+",
  ],
  authors: [{ name: "Racing 237" }],
  creator: "Racing 237",
  publisher: "Racing 237",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://racing237.vercel.app",
    title: "Racing 237 | Le Grand Prix Moto du Cameroun",
    description:
      "Le Grand Prix Moto du Cameroun - 8 février 2026 au Stade Japoma de Douala",
    siteName: "Racing 237",
  },
  twitter: {
    card: "summary_large_image",
    title: "Racing 237 | Le Grand Prix Moto du Cameroun",
    description:
      "Le Grand Prix Moto du Cameroun - 8 février 2026 au Stade Japoma de Douala",
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