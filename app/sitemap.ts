import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

// Root sitemap: top-level static pages, section listing pages and the
// keyword-targeted landing pages. Dynamic [slug] detail pages live in their
// own per-section sitemaps (see app/vehicules/sitemap.ts etc.) and are
// referenced from robots.ts. Pages marked noindex (pnj, animaux, legal) are
// intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/codes`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/vehicules`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/personnages`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/lieux`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/actualites`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Keyword-targeted landing pages (real content, high search volume).
  const landingPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/code-triche-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/date-de-sortie-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-ps5`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-xbox`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-pc`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/astuces-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/meilleures-voitures-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/carte-vice-city-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/comment-gagner-argent-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/solution-gta-6-guide-missions`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/secrets-easter-eggs-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/problemes-gta-6-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  return [...staticPages, ...landingPages];
}