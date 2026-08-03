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
      `${BASE_URL}/vehicules/sitemap.xml`,
      `${BASE_URL}/personnages/sitemap.xml`,
      `${BASE_URL}/lieux/sitemap.xml`,
      `${BASE_URL}/actualites/sitemap.xml`,
    ],
    host: BASE_URL,
  };
}