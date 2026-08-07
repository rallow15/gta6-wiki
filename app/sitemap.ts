import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

// Root sitemap: includes both French (root) and English (/en/) URLs.
// French URLs have no prefix; English URLs use /en/ prefix.
// Dynamic [slug] detail pages live in their own per-section sitemaps.
// Pages marked noindex are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // French pages (root, no locale prefix)
  const frPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/codes`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/code-triche-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/codes-gta-6-ps5`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-xbox`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-pc`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/vehicules`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/personnages`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/lieux`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/actualites`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/date-de-sortie-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/meilleures-voitures-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/carte-vice-city-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/astuces-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/comment-gagner-argent-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/solution-gta-6-guide-missions`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/secrets-easter-eggs-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/problemes-gta-6-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // English pages (/en/ prefix)
  const enPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/en/codes`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-ps5`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-xbox`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-pc`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/vehicles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/weapons`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/weapons-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/characters`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/news`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/en/release-date-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/best-cars-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/vice-city-map-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/tips-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/how-to-make-money-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/gta-6-walkthrough`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/secrets-easter-eggs-gta-6`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/en/gta-6-problems-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/en/about`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...frPages, ...enPages];
}