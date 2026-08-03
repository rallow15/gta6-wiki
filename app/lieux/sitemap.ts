import type { MetadataRoute } from "next";
import { locations } from "@/lib/data";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for location detail pages.
// Served at /lieux/sitemap.xml and referenced from robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return locations.map((location) => ({
    url: `${BASE_URL}/lieux/${location.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    images: [`${BASE_URL}${location.image}`],
  }));
}