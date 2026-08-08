import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      // FR section sitemaps (localized paths)
      `${BASE_URL}/vehicules/sitemap.xml`,
      `${BASE_URL}/personnages/sitemap.xml`,
      `${BASE_URL}/lieux/sitemap.xml`,
      `${BASE_URL}/actualites/sitemap.xml`,
      // EN section sitemaps
      `${BASE_URL}/en/vehicles/sitemap.xml`,
      `${BASE_URL}/en/characters/sitemap.xml`,
      `${BASE_URL}/en/locations/sitemap.xml`,
      `${BASE_URL}/en/news/sitemap.xml`,
    ],
    host: BASE_URL,
  };
}