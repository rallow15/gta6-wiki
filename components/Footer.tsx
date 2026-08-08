"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const footerColumns = [
  {
    titleKey: "guides" as const,
    links: [
      { labelKey: "cheatCodes" as const, href: "/codes" },
      { labelKey: "codesPS5" as const, href: "/cheat-codes-gta-6-ps5" },
      { labelKey: "codesXbox" as const, href: "/cheat-codes-gta-6-xbox" },
      { labelKey: "codesPC" as const, href: "/cheat-codes-gta-6-pc" },
      { labelKey: "vehicles" as const, href: "/vehicles" },
      { labelKey: "weapons" as const, href: "/weapons" },
      { labelKey: "characters" as const, href: "/characters" },
    ],
  },
  {
    titleKey: "explore" as const,
    links: [
      { labelKey: "locations" as const, href: "/locations" },
      { labelKey: "map" as const, href: "/vice-city-map-gta-6" },
      { labelKey: "bestCars" as const, href: "/best-cars-gta-6" },
      { labelKey: "releaseDate" as const, href: "/release-date-gta-6" },
      { labelKey: "gallery" as const, href: "/gallery" },
    ],
  },
  {
    titleKey: "community" as const,
    links: [
      { labelKey: "news" as const, href: "/news" },
    ],
  },
  {
    titleKey: "legal" as const,
    links: [
      { labelKey: "about" as const, href: "/about" },
      { labelKey: "legalNotice" as const, href: "/legal-notice" },
      { labelKey: "privacy" as const, href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  const logoText = t("logo");
  const disclaimer = t("disclaimer");
  const copyright = t("copyright", { year: new Date().getFullYear() });
  const madeWith = t("tagline");

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
          {footerColumns.map((section) => (
            <nav key={section.titleKey} aria-label={t(section.titleKey)}>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                {t(section.titleKey)}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="text-sm text-text-muted hover:text-neon-pink transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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