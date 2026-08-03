import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ScrollProgress from "@/components/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd, organizationJsonLd } from "@/lib/seo";
import { BASE_URL } from "@/lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    template: "%s | CodeTricheGTA6",
  },
  description:
    "Tous les codes de triche GTA 6, infos personnages, véhicules, armes et lieux de Vice City. Guide complet francophone pour GTA VI.",
  applicationName: "CodeTricheGTA6",
  keywords: [
    "GTA 6 codes",
    "GTA VI codes de triche",
    "code gta 6",
    "code triche GTA 6",
    "codes GTA 6 PS5",
    "codes GTA 6 Xbox",
    "codes GTA 6 PC",
    "GTA 6 date de sortie",
    "sortie GTA 6",
    "GTA 6 véhicules",
    "meilleures voitures GTA 6",
    "GTA 6 armes",
    "carte GTA 6",
    "Vice City",
    "Leonida",
    "personnages GTA 6",
    "Jason Duval",
    "Lucia Caminos",
  ],
  authors: [{ name: "CodeTricheGTA6" }],
  creator: "CodeTricheGTA6",
  publisher: "CodeTricheGTA6",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo/logo-icon.png",
    apple: "/images/logo/logo-icon.png",
  },
  openGraph: {
    title: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    description: "Tous les codes de triche GTA 6, infos personnages, véhicules et lieux.",
    type: "website",
    locale: "fr_FR",
    siteName: "CodeTricheGTA6",
    url: BASE_URL,
    images: [
      {
        url: "/images/logo/logo-neon-sign.png",
        width: 1200,
        height: 630,
        alt: "GTA 6 CodeTriche — Codes, Infos & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    description: "Tous les codes de triche GTA 6, infos personnages, véhicules et lieux.",
    images: ["/images/logo/logo-neon-sign.png"],
  },
  category: "games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965679591230669" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-deep-bg text-text-primary">
        <JsonLd data={[websiteJsonLd(), organizationJsonLd()]} />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}