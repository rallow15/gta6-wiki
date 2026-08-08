import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for vehicle detail pages.
// Served at /vehicles/sitemap.xml (FR) and /en/vehicles/sitemap.xml (EN).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const frEntries: MetadataRoute.Sitemap = vehicles.map((v) => ({
    url: `${BASE_URL}/vehicules/${v.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [v.image],
  }));

  const enEntries: MetadataRoute.Sitemap = vehicles.map((v) => ({
    url: `${BASE_URL}/en/vehicles/${v.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [v.image],
  }));

  return [...frEntries, ...enEntries];
}