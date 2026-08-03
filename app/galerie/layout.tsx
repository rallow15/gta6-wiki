import type { Metadata } from "next";
import { sectionMeta } from "@/lib/sectionMeta";

// galerie/page.tsx is a client component ("use client"); metadata lives here.
export const metadata: Metadata = sectionMeta({
  title: "Galerie GTA 6 — Captures d'écran officielles GTA VI",
  description:
    "Galerie de captures d'écran officielles de GTA 6 (GTA VI) : personnages, Vice City, Leonida Keys, Grassrivers, Ultimate Edition et Vintage Vice City Pack.",
  path: "/galerie",
  keywords: [
    "galerie GTA 6",
    "screenshots GTA 6",
    "captures GTA VI",
    "images GTA 6",
    "artworks GTA 6",
  ],
});

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}