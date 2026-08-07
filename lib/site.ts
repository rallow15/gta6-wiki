// Shared site constants used across metadata, sitemaps and JSON-LD.
export const BASE_URL = "https://gta6codetriche.fr";
export const SITE_NAME_FR = "CodeTricheGTA6";
export const SITE_NAME_EN = "GTA6CheatCodes";
export const SITE_TAGLINE_FR = "Codes GTA 6, Infos & Guides";
export const SITE_TAGLINE_EN = "GTA 6 Cheats, Info & Guides";
export const SITE_LOCALE_FR = "fr_FR";
export const SITE_LOCALE_EN = "en_US";
export const DEFAULT_OG_IMAGE = "/images/logo/logo-neon-sign.png";
export const LOGO_ICON = "/images/logo/logo-icon.png";

// Legacy exports (default to French)
export const SITE_NAME = SITE_NAME_FR;
export const SITE_TAGLINE = SITE_TAGLINE_FR;
export const SITE_LOCALE = SITE_LOCALE_FR;

// Locale-aware helpers
export function getSiteName(locale: string): string {
  return locale === "en" ? SITE_NAME_EN : SITE_NAME_FR;
}

export function getSiteTagline(locale: string): string {
  return locale === "en" ? SITE_TAGLINE_EN : SITE_TAGLINE_FR;
}

export function getSiteLocale(locale: string): string {
  return locale === "en" ? SITE_LOCALE_EN : SITE_LOCALE_FR;
}