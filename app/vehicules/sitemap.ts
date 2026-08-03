import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for vehicle detail pages.
// Served at /vehicules/sitemap.xml and referenced from robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return vehicles.map((vehicle) => ({
    url: `${BASE_URL}/vehicules/${vehicle.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
    images: [`${BASE_URL}${vehicle.image}`],
  }));
}