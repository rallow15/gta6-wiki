import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    // Cheat codes
    "/codes": { en: "/en/codes" },
    "/cheat-codes-gta-6": { fr: "/code-triche-gta-6", en: "/en/cheat-codes-gta-6" },
    "/cheat-codes-gta-6-ps5": { fr: "/codes-gta-6-ps5", en: "/en/cheat-codes-gta-6-ps5" },
    "/cheat-codes-gta-6-xbox": { fr: "/codes-gta-6-xbox", en: "/en/cheat-codes-gta-6-xbox" },
    "/cheat-codes-gta-6-pc": { fr: "/codes-gta-6-pc", en: "/en/cheat-codes-gta-6-pc" },
    // Sections
    "/vehicles": { fr: "/vehicules", en: "/en/vehicles" },
    "/vehicles/[slug]": { fr: "/vehicules/[slug]", en: "/en/vehicles/[slug]" },
    "/weapons": { fr: "/armes", en: "/en/weapons" },
    "/weapons-gta-6": { fr: "/armes-gta-6", en: "/en/weapons-gta-6" },
    "/characters": { fr: "/personnages", en: "/en/characters" },
    "/characters/[slug]": { fr: "/personnages/[slug]", en: "/en/characters/[slug]" },
    "/locations": { fr: "/lieux", en: "/en/locations" },
    "/locations/[slug]": { fr: "/lieux/[slug]", en: "/en/locations/[slug]" },
    "/gallery": { fr: "/galerie", en: "/en/gallery" },
    "/news": { fr: "/actualites", en: "/en/news" },
    "/news/[slug]": { fr: "/actualites/[slug]", en: "/en/news/[slug]" },
    // Landing pages
    "/release-date-gta-6": { fr: "/date-de-sortie-gta-6", en: "/en/release-date-gta-6" },
    "/best-cars-gta-6": { fr: "/meilleures-voitures-gta-6", en: "/en/best-cars-gta-6" },
    "/vice-city-map-gta-6": { fr: "/carte-vice-city-gta-6", en: "/en/vice-city-map-gta-6" },
    "/tips-gta-6": { fr: "/astuces-gta-6", en: "/en/tips-gta-6" },
    "/secrets-easter-eggs-gta-6": { fr: "/secrets-easter-eggs-gta-6", en: "/en/secrets-easter-eggs-gta-6" },
    "/gta-6-problems-solutions": { fr: "/problemes-gta-6-solutions", en: "/en/gta-6-problems-solutions" },
    "/gta-6-walkthrough": { fr: "/solution-gta-6-guide-missions", en: "/en/gta-6-walkthrough" },
    "/how-to-make-money-gta-6": { fr: "/comment-gagner-argent-gta-6", en: "/en/how-to-make-money-gta-6" },
    // Placeholder / info pages
    "/animals": { fr: "/animaux", en: "/en/animals" },
    "/npcs": { fr: "/pnj", en: "/en/npcs" },
    "/about": { fr: "/a-propos", en: "/en/about" },
    "/legal-notice": { fr: "/mentions-legales", en: "/en/legal-notice" },
    "/privacy-policy": { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
  },
});