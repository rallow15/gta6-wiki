import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/seo";
import { BASE_URL } from "@/lib/site";

interface SectionMetaOptions {
  title: string; // shown as "%s | CodeTricheGTA6" via the template
  description: string;
  path: string; // canonical path, must start with "/"
  keywords?: string[];
  image?: string; // OG image path, defaults to site neon sign
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
}

// Builds a per-section Metadata object with a unique title/description,
// canonical, OG image and keywords. The root layout's title.template wraps
// `title`, so each section gets "X | CodeTricheGTA6" automatically.
export function sectionMeta(opts: SectionMetaOptions): Metadata {
  const ogImage = opts.image ?? "/images/logo/logo-neon-sign.png";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    keywords: opts.keywords,
    openGraph: {
      title: `${opts.title} | CodeTricheGTA6`,
      description: opts.description,
      url: opts.path,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | CodeTricheGTA6`,
      description: opts.description,
      images: [ogImage],
    },
  };
}

// Two-level breadcrumb: Accueil > Section. For deeper pages use the explicit
// breadcrumbJsonLd() builder from @/lib/seo.
export function sectionBreadcrumb(sectionName: string, path: string) {
  return breadcrumbJsonLd([
    { name: "Accueil", url: BASE_URL },
    { name: sectionName, url: `${BASE_URL}${path}` },
  ]);
}

export { breadcrumbJsonLd };