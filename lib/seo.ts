// JSON-LD structured-data builders for SEO (schema.org).
// All functions return plain objects, ready to be serialized by <JsonLd />.

import { BASE_URL, SITE_NAME, SITE_TAGLINE, getSiteName, getSiteTagline, getSiteLocale } from "@/lib/site";
import type { Article } from "@/lib/articles";
import type { Character } from "@/lib/characters";
import type { Location, Vehicle } from "@/lib/data";

export function websiteJsonLd(locale: string = "fr") {
  const siteName = getSiteName(locale);
  const tagline = getSiteTagline(locale);
  const lang = getSiteLocale(locale);
  const descriptions: Record<string, string> = {
    fr: "Tous les codes de triche GTA 6, infos personnages, véhicules, armes et lieux de Vice City. Guide complet francophone pour GTA VI.",
    en: "All GTA 6 cheat codes, character info, vehicles, weapons and Vice City locations. Complete English guide for GTA VI.",
  };
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteName} — ${tagline}`,
    alternateName: siteName,
    url: BASE_URL,
    inLanguage: lang,
    description: descriptions[locale] ?? descriptions.fr,
    publisher: { "@id": `${BASE_URL}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd(locale: string = "fr") {
  const siteName = getSiteName(locale);
  const descriptions: Record<string, string> = {
    fr: "Site fan francophone dédié à Grand Theft Auto VI : codes de triche, fiches personnages, véhicules, armes, lieux et actualités.",
    en: "English fan site dedicated to Grand Theft Auto VI: cheat codes, character guides, vehicles, weapons, locations and news.",
  };
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}#organization`,
    name: siteName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo/logo-neon-sign.png`,
      width: 1200,
      height: 630,
    },
    description: descriptions[locale] ?? descriptions.fr,
  };
}

export function videoGameJsonLd(locale: string = "fr") {
  const isEn = locale === "en";
  const descriptions: Record<string, string> = {
    fr: "Grand Theft Auto VI est un jeu d'action-aventure développé par Rockstar Games, sortant le 19 novembre 2026 sur PS5, Xbox Series X|S et PC. Action à Vice City, dans l'état fictif de Leonida.",
    en: "Grand Theft Auto VI is an action-adventure game developed by Rockstar Games, releasing November 19, 2026 on PS5, Xbox Series X|S and PC. Set in Vice City, in the fictional state of Leonida.",
  };
  const genres: Record<string, string[]> = {
    fr: ["Action-aventure", "Monde ouvert"],
    en: ["Action-adventure", "Open world"],
  };
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Grand Theft Auto VI",
    alternateName: "GTA 6 / GTA VI",
    description: descriptions[locale] ?? descriptions.fr,
    url: BASE_URL,
    image: `${BASE_URL}/images/logo/logo-neon-sign.png`,
    inLanguage: isEn ? "en-US" : "fr-FR",
    genre: genres[locale] ?? genres.fr,
    gamePlatform: ["PlayStation 5", "Xbox Series X|S", "PC"],
    playMode: ["SinglePlayer", "MultiPlayer"],
    datePublished: "2026-11-19",
    developer: { "@type": "Organization", name: "Rockstar Games" },
    publisher: { "@type": "Organization", name: "Rockstar Games" },
    contentRating: "PEGI 18",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function newsArticleJsonLd(article: Article, url: string) {
  // Best-effort ISO date: articles store human French dates like "5 Déc 2023".
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.tag,
    author: { "@type": "Organization", name: article.sourceName },
    publisher: { "@id": `${BASE_URL}#organization` },
    sourceOrganization: article.sourceName,
    citation: article.sourceUrl,
  };
}

export function personJsonLd(character: Character, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: character.name,
    description: character.description,
    url,
    image: `${BASE_URL}${character.image}`,
    jobTitle: character.role,
    knowsAbout: [character.origin],
    subjectOf: {
      "@type": "CreativeWork",
      name: "Grand Theft Auto VI",
    },
  };
}

export function placeJsonLd(location: Location, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: location.name,
    description: location.description,
    url,
    image: `${BASE_URL}${location.image}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Leonida",
    },
    subjectOf: { "@type": "CreativeWork", name: "Grand Theft Auto VI" },
  };
}

// ItemList for a listing page (vehicles, etc.)
export function itemListJsonLd(
  name: string,
  url: string,
  items: { name: string; url: string; image?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.image ? { image: item.image } : {}),
    })),
  };
}

// Product-like schema for an individual vehicle (no price yet — game unreleased).
export function vehicleJsonLd(vehicle: Vehicle, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.description,
    url,
    image: `${BASE_URL}${vehicle.image}`,
    category: vehicle.category,
    brand: vehicle.inspired ? { "@type": "Brand", name: vehicle.inspired } : undefined,
    isRelatedTo: { "@type": "VideoGame", name: "Grand Theft Auto VI" },
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}