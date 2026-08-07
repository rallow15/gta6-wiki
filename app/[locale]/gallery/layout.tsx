import type { Metadata } from "next";
import { getSiteName, getSiteLocale } from "@/lib/site";

// galerie/page.tsx is a client component ("use client"); metadata lives here.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/gallery" : "/galerie";

  const title = isEn
    ? "GTA 6 Gallery — Official GTA VI Screenshots"
    : "Galerie GTA 6 — Captures d'écran officielles GTA VI";
  const description = isEn
    ? "Gallery of official GTA 6 (GTA VI) screenshots: characters, Vice City, Leonida Keys, Grassrivers, Ultimate Edition and Vintage Vice City Pack."
    : "Galerie de captures d'écran officielles de GTA 6 (GTA VI) : personnages, Vice City, Leonida Keys, Grassrivers, Ultimate Edition et Vintage Vice City Pack.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/galerie", en: "/en/gallery" },
    },
    keywords: isEn
      ? ["GTA 6 gallery", "GTA 6 screenshots", "GTA VI screenshots", "GTA 6 images", "GTA 6 artworks"]
      : ["galerie GTA 6", "screenshots GTA 6", "captures GTA VI", "images GTA 6", "artworks GTA 6"],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: ogLocale,
      siteName,
    },
  };
}

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}