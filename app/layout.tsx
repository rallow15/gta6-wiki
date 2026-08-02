import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    template: "%s | CodeTricheGTA6",
  },
  description:
    "Tous les codes de triche GTA 6, infos personnages, véhicules, armes et lieux de Vice City. Guide complet francophone pour GTA VI.",
  keywords: [
    "GTA 6 codes",
    "GTA VI codes de triche",
    "code gta 6",
    "code triche GTA 6",
    "GTA 6 date de sortie",
    "GTA 6 véhicules",
    "GTA 6 armes",
    "Vice City",
    "Leonida",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    description: "Tous les codes de triche GTA 6, infos personnages, véhicules et lieux.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-deep-bg text-text-primary">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}