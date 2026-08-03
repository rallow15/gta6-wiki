import Link from "next/link";

const footerLinks = [
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
    title: "Communaute",
    links: [
      { label: "Actualites", href: "/actualites" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "A propos", href: "/a-propos" },
      { label: "Mentions legales", href: "/mentions-legales" },
      { label: "Confidentialite", href: "/politique-confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neon-pink/10 bg-deep-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl tracking-wider text-text-primary">
                CODE TRICHE
              </span>
              <span className="font-display text-xl tracking-wider text-neon-pink neon-text">
                {" "}GTA6
              </span>
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              Site fan non officiel. GTA et Grand Theft Auto sont des marques deposees de Rockstar Games.
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
            2025 CodeTricheGTA6. Fan site non affilie a Rockstar Games.
          </p>
          <p className="text-xs text-text-muted">
            Fait avec passion a Vice City
          </p>
        </div>
      </div>
    </footer>
  );
}