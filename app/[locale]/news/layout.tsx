import type { Metadata } from "next";
import { getSiteName, getSiteLocale } from "@/lib/site";

// actualites/page.tsx is a client component ("use client") and cannot export
// metadata itself, so the listing metadata lives in this server layout.
// Article pages (actualites/[slug]) set their own generateMetadata which
// overrides these defaults.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/news" : "/actualites";

  const title = isEn
    ? "GTA 6 News — All GTA VI Updates"
    : "Actualités GTA 6 — Toutes les news sur GTA VI";
  const description = isEn
    ? "All GTA 6 (GTA VI) news: announcements, trailers, release dates, delays, pre-orders, gameplay and characters. Verified and sourced."
    : "Toutes les actualités GTA 6 (GTA VI) : annonces, bandes-annonces, dates de sortie, reports, pré-commandes, gameplay et personnages. News vérifiées et sourcées.";
  const keywords = isEn
    ? ["GTA 6 news", "GTA 6 updates", "GTA VI news", "GTA 6 release date", "GTA 6 trailer", "GTA 6 delay", "GTA 6 pre-order", "GTA 6 gameplay"]
    : ["actualités GTA 6", "news GTA 6", "news GTA VI", "GTA 6 date de sortie", "bande-annonce GTA 6", "report GTA 6", "pré-commande GTA 6", "gameplay GTA 6"];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/actualites", en: "/en/news" },
    },
    keywords,
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

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return children;
}