import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for article (news) detail pages.
// Served at /actualites/sitemap.xml (FR) and /en/news/sitemap.xml (EN).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const frEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/actualites/${article.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [article.image],
  }));

  const enEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/en/news/${article.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [article.image],
  }));

  return [...frEntries, ...enEntries];
}