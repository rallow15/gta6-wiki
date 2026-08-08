import type { MetadataRoute } from "next";
import { characters } from "@/lib/data";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for character detail pages.
// Served at /characters/sitemap.xml (FR) and /en/characters/sitemap.xml (EN).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const frEntries: MetadataRoute.Sitemap = characters.map((c) => ({
    url: `${BASE_URL}/personnages/${c.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [c.image],
  }));

  const enEntries: MetadataRoute.Sitemap = characters.map((c) => ({
    url: `${BASE_URL}/en/characters/${c.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [c.image],
  }));

  return [...frEntries, ...enEntries];
}