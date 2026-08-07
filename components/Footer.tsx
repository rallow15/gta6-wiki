"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

const footerLinksFr = [
  {
    title: "Guides",
    links: [
      { label: "Codes de triche", href: "/codes" },
      { label: "Codes GTA 6 PS5", href: "/codes-gta-6-ps5" },
      { label: "Codes GTA 6 Xbox", href: "/codes-gta-6-xbox" },
      { label: "Codes GTA 6 PC", href: "/codes-gta-6-pc" },
      { label: "Véhicules", href: "/vehicules" },
      { label: "Armes", href: "/armes" },
      { label: "Personnages", href: "/personnages" },
    ],
  },
  {
    title: "Explorer",
    links: [
      { label: "Lieux", href: "/lieux" },
      { label: "Carte GTA 6", href: "/carte-vice-city-gta-6" },
      { label: "Meilleures voitures", href: "/meilleures-voitures-gta-6" },
      { label: "Date de sortie", href: "/date-de-sortie-gta-6" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "Actualités", href: "/actualites" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/politique-confidentialite" },
    ],
  },
];

const footerLinksEn = [
  {
    title: "Guides",
    links: [
      { label: "Cheat Codes", href: "/codes" },
      { label: "GTA 6 Cheats PS5", href: "/cheat-codes-gta-6-ps5" },
      { label: "GTA 6 Cheats Xbox", href: "/cheat-codes-gta-6-xbox" },
      { label: "GTA 6 Cheats PC", href: "/cheat-codes-gta-6-pc" },
      { label: "Vehicles", href: "/vehicles" },
      { label: "Weapons", href: "/weapons" },
      { label: "Characters", href: "/characters" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Locations", href: "/locations" },
      { label: "GTA 6 Map", href: "/vice-city-map-gta-6" },
      { label: "Best Cars", href: "/best-cars-gta-6" },
      { label: "Release Date", href: "/release-date-gta-6" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "About", href: "/about" },
      { label: "Legal Notice", href: "/legal-notice" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  const locale = useLocale();
  const footerLinks = locale === "en" ? footerLinksEn : footerLinksFr;

  const logoText = locale === "en" ? "CHEAT CODES" : "CODE TRICHE";
  const disclaimer = locale === "en"
    ? "Unofficial fan site. GTA and Grand Theft Auto are registered trademarks of Rockstar Games."
    : "Site fan non officiel. GTA et Grand Theft Auto sont des marques déposées de Rockstar Games.";
  const copyright = locale === "en"
    ? "2025 GTA6CheatCodes. Fan site not affiliated with Rockstar Games."
    : "2025 CodeTricheGTA6. Fan site non affilié à Rockstar Games.";
  const madeWith = locale === "en" ? "Made with passion in Vice City" : "Fait avec passion à Vice City";

  return (
    <footer className="border-t border-neon-pink/10 bg-deep-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl tracking-wider text-text-primary">
                {logoText}
              </span>
              <span className="font-display text-xl tracking-wider text-neon-pink neon-text">
                {" "}GTA6
              </span>
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              {disclaimer}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted hover:text-neon-pink transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-neon-pink transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-night-violet/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            {copyright}
          </p>
          <p className="text-xs text-text-muted">
            {madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}