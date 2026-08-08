import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

// Root sitemap: includes both French (root) and English (/en/) URLs.
// French URLs have no prefix; English URLs use /en/ prefix.
// Dynamic [slug] detail pages live in their own per-section sitemaps.
// Pages marked noindex are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  // Use a static date for lastModified — update when content actually changes.
  // This avoids signalling to Google that every page changed on every deploy.
  const lastUpdated = "2026-08-08";

  // French pages (root, no locale prefix — localized paths from routing.ts)
  const frPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: lastUpdated, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/codes`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/code-triche-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/codes-gta-6-ps5`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-xbox`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/codes-gta-6-pc`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/vehicules`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/armes-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/personnages`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/lieux`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/galerie`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/actualites`, lastModified: lastUpdated, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/date-de-sortie-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/meilleures-voitures-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/carte-vice-city-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/astuces-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/comment-gagner-argent-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/solution-gta-6-guide-missions`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/secrets-easter-eggs-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/problemes-gta-6-solutions`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/animaux`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/pnj`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.2 },
  ];

  // English pages (/en/ prefix)
  const enPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/en`, lastModified: lastUpdated, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/en/codes`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-ps5`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-xbox`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/cheat-codes-gta-6-pc`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/vehicles`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/weapons`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/weapons-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/characters`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/locations`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/gallery`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/en/news`, lastModified: lastUpdated, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/en/release-date-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/en/best-cars-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/vice-city-map-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/tips-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/how-to-make-money-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/gta-6-walkthrough`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/secrets-easter-eggs-gta-6`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/en/gta-6-problems-solutions`, lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/en/about`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/en/animals`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/en/npcs`, lastModified: lastUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/en/legal-notice`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/en/privacy-policy`, lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [...frPages, ...enPages];
}