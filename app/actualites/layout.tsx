import type { Metadata } from "next";
import { sectionMeta } from "@/lib/sectionMeta";

// actualites/page.tsx is a client component ("use client") and cannot export
// metadata itself, so the listing metadata lives in this server layout.
// Article pages (actualites/[slug]) set their own generateMetadata which
// overrides these defaults.
export const metadata: Metadata = sectionMeta({
  title: "Actualités GTA 6 — Toutes les news sur GTA VI",
  description:
    "Toutes les actualités GTA 6 (GTA VI) : annonces, bandes-annonces, dates de sortie, reports, pré-commandes, gameplay et personnages. News vérifiées et sourcées.",
  path: "/actualites",
  keywords: [
    "actualités GTA 6",
    "news GTA 6",
    "news GTA VI",
    "GTA 6 date de sortie",
    "bande-annonce GTA 6",
    "report GTA 6",
    "pré-commande GTA 6",
  ],
});

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return children;
}