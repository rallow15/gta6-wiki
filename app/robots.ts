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
      // Section sitemaps are emitted by next-intl only at the prefixed EN path
      // (localePrefix "as-needed" + localized pathnames skip the prefixless FR path,
      // so /vehicules/sitemap.xml etc. 404). Each EN sitemap below already contains
      // BOTH the FR (/vehicules/...) and EN (/en/vehicles/...) detail URLs, so
      // Google discovers every page from these alone.
      `${BASE_URL}/en/vehicles/sitemap.xml`,
      `${BASE_URL}/en/characters/sitemap.xml`,
      `${BASE_URL}/en/locations/sitemap.xml`,
      `${BASE_URL}/en/news/sitemap.xml`,
    ],
    host: BASE_URL,
  };
}