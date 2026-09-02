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
    "/cheat-codes-gta-6": { fr: "/code-triche-gta-6", en: "/cheat-codes-gta-6" },
    // Sections
    "/vehicles": { fr: "/vehicules", en: "/vehicles" },
    "/vehicles/[slug]": { fr: "/vehicules/[slug]", en: "/vehicles/[slug]" },
    "/weapons": { fr: "/armes", en: "/weapons" },
    "/characters": { fr: "/personnages", en: "/characters" },
    "/characters/[slug]": { fr: "/personnages/[slug]", en: "/characters/[slug]" },
    "/locations": { fr: "/lieux", en: "/locations" },
    "/locations/[slug]": { fr: "/lieux/[slug]", en: "/locations/[slug]" },
    "/gallery": { fr: "/galerie", en: "/gallery" },
    "/news": { fr: "/actualites", en: "/news" },
    "/news/[slug]": { fr: "/actualites/[slug]", en: "/news/[slug]" },
    // Landing pages
    "/release-date-gta-6": { fr: "/date-de-sortie-gta-6", en: "/release-date-gta-6" },
    "/best-cars-gta-6": { fr: "/meilleures-voitures-gta-6", en: "/best-cars-gta-6" },
    "/vice-city-map-gta-6": { fr: "/carte-vice-city-gta-6", en: "/vice-city-map-gta-6" },
    "/gta-5-vs-gta-6-comparison": { fr: "/comparaison-gta-5-gta-6", en: "/gta-5-vs-gta-6-comparison" },
    "/gta-6-preparation-guide": { fr: "/guide-preparation-gta-6", en: "/gta-6-preparation-guide" },
    "/gta-6-avant-sortie": { fr: "/gta-6-avant-sortie", en: "/gta-6-before-release" },
    // Info pages
    "/about": { fr: "/a-propos", en: "/about" },
    "/legal-notice": { fr: "/mentions-legales", en: "/legal-notice" },
    "/privacy-policy": { fr: "/politique-confidentialite", en: "/privacy-policy" },
  },
});
