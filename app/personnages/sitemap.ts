import type { MetadataRoute } from "next";
import { characters } from "@/lib/characters";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for character detail pages.
// Served at /personnages/sitemap.xml and referenced from robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return characters.map((character) => ({
    url: `${BASE_URL}/personnages/${character.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    images: [`${BASE_URL}${character.image}`],
  }));
}