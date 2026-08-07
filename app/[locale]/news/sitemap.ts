import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { BASE_URL } from "@/lib/site";

// Per-section sitemap for article (news) detail pages.
// Served at /actualites/sitemap.xml and referenced from robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return articles.map((article) => ({
    url: `${BASE_URL}/actualites/${article.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [article.image],
  }));
}