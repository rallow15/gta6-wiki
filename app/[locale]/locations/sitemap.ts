import type { MetadataRoute } from "next";
import { locations } from "@/lib/data";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for location detail pages.
// Served at /locations/sitemap.xml (FR) and /en/locations/sitemap.xml (EN).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const frEntries: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE_URL}/lieux/${l.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [l.image],
  }));

  const enEntries: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE_URL}/en/locations/${l.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [l.image],
  }));

  return [...frEntries, ...enEntries];
}