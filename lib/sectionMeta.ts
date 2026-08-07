import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/seo";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";

interface SectionMetaOptions {
  title: string; // shown as "%s | CodeTricheGTA6" via the template
  description: string;
  path: string; // canonical path, must start with "/"
  keywords?: string[];
  image?: string; // OG image path, defaults to site neon sign
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
  locale?: string; // "fr" or "en"
  alternates?: { fr: string; en: string }; // hreflang paths
}

// Builds a per-section Metadata object with a unique title/description,
// canonical, OG image and keywords. The root layout's title.template wraps
// `title`, so each section gets "X | CodeTricheGTA6" automatically.
export function sectionMeta(opts: SectionMetaOptions): Metadata {
  const ogImage = opts.image ?? "/images/logo/logo-neon-sign.png";
  const siteName = opts.locale ? getSiteName(opts.locale) : "CodeTricheGTA6";
  const locale = opts.locale ?? "fr";
  const ogLocale = getSiteLocale(locale);

  const metadata: Metadata = {
    title: opts.title,
    description: opts.description,
    alternates: opts.alternates
      ? { canonical: opts.path, languages: opts.alternates }
      : { canonical: opts.path },
    keywords: opts.keywords,
    openGraph: {
      title: `${opts.title} | ${siteName}`,
      description: opts.description,
      url: opts.path,
      type: "website",
      locale: ogLocale,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${siteName}`,
      description: opts.description,
      images: [ogImage],
    },
  };

  return metadata;
}

// Two-level breadcrumb: Accueil/Home > Section. For deeper pages use the explicit
// breadcrumbJsonLd() builder from @/lib/seo.
export function sectionBreadcrumb(sectionName: string, path: string, locale: string = "fr") {
  const homeName = locale === "en" ? "Home" : "Accueil";
  return breadcrumbJsonLd([
    { name: homeName, url: BASE_URL },
    { name: sectionName, url: `${BASE_URL}${path}` },
  ]);
}

export { breadcrumbJsonLd };