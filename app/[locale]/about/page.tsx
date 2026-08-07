import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { getSiteName, getSiteLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/about" : "/a-propos";

  const title = isEn
    ? "About — GTA6CheatCodes, GTA VI fan site"
    : "À propos — CodeTricheGTA6, site fan GTA VI";
  const description = isEn
    ? "GTA6CheatCodes (Vice City Tropical) is an unofficial fan site dedicated to Grand Theft Auto VI: cheat codes, vehicles, weapons, characters, locations and news."
    : "CodeTricheGTA6 (Vice City Tropical) est un site fan francophone non officiel dédié à Grand Theft Auto VI : codes de triche, véhicules, armes, personnages, lieux et actualités.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/a-propos", en: "/en/about" },
    },
    keywords: isEn
      ? ["GTA6CheatCodes", "Vice City Tropical", "GTA 6 fan site", "about GTA VI"]
      : ["CodeTricheGTA6", "Vice City Tropical", "site fan GTA 6", "à propos GTA VI"],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: ogLocale,
      siteName,
    },
  };
}

export default async function AProposPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <>
      <JsonLd
        data={sectionBreadcrumb(
          isEn ? "About" : "À propos",
          isEn ? "/en/about" : "/a-propos",
          locale
        )}
      />
      <SectionPage
        title={isEn ? "ABOUT" : "À PROPOS"}
        subtitle={
          isEn
            ? "Vice City Tropical — the ultimate GTA VI fan site."
            : "Vice City Tropical — le site fan de référence sur GTA VI."
        }
      >
        <div className="glass-card p-6 sm:p-8 space-y-6">
          {/* Logo badge */}
          <div className="flex justify-center">
            <img
              src="/images/logo/logo-badge.png"
              alt={isEn ? "GTA6CheatCodes Badge" : "GTA 6 CodeTriche Badge"}
              className="w-48 h-auto rounded-xl"
            />
          </div>
          <div>
            <h2 className="font-display text-xl tracking-wider text-neon-pink mb-3">
              {isEn
                ? "WHAT IS VICE CITY TROPICAL?"
                : "QU'EST-CE QUE VICE CITY TROPICAL ?"}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {isEn
                ? "Vice City Tropical is an unofficial fan site dedicated to Grand Theft Auto VI. Our mission is to provide the most complete and up-to-date information about the game: cheat codes, vehicle sheets, weapons, characters, locations and all the latest news."
                : "Vice City Tropical est un site fan non officiel dédié à Grand Theft Auto VI. Notre mission est de fournir les informations les plus complètes et à jour sur le jeu : codes de triche, fiches véhicules, armes, personnages, lieux et toutes les dernières actualités."}
            </p>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-lagoon-cyan mb-3">
              {isEn ? "OUR COMMITMENT" : "NOTRE ENGAGEMENT"}
            </h2>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-neon-pink mt-1">&#x25B8;</span>
                {isEn
                  ? "Verified and up-to-date information"
                  : "Des informations vérifiées et à jour"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-pink mt-1">&#x25B8;</span>
                {isEn
                  ? "A unique design inspired by the tropical universe of Vice City"
                  : "Un design unique inspiré de l'univers tropical de Vice City"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-pink mt-1">&#x25B8;</span>
                {isEn
                  ? "An active community of fans"
                  : "Une communauté active de fans"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-pink mt-1">&#x25B8;</span>
                {isEn
                  ? "A fast and mobile-friendly site"
                  : "Un site rapide et accessible sur mobile"}
              </li>
            </ul>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-sunset-orange mb-3">
              {isEn ? "DISCLAIMER" : "AVERTISSEMENT"}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              {isEn
                ? "Vice City Tropical is a fan site not affiliated with Rockstar Games, Take-Two Interactive or any other company related to the Grand Theft Auto franchise. GTA, Grand Theft Auto and all character, location and vehicle names are trademarks of Rockstar Games. This site is created by fans, for fans, and does not generate any direct profit from Rockstar Games' intellectual property."
                : "Vice City Tropical est un site fan non affilié à Rockstar Games, Take-Two Interactive ou toute autre société liée à la franchise Grand Theft Auto. GTA, Grand Theft Auto et tous les noms de personnages, lieux et véhicules sont des marques déposées de Rockstar Games. Ce site est créé par des fans, pour des fans, et ne génère aucun profit direct de la propriété intellectuelle de Rockstar Games."}
            </p>
          </div>

          <div className="border-t border-night-violet/50 pt-6">
            <h2 className="font-display text-xl tracking-wider text-sand-yellow mb-3">
              {isEn ? "CONTACT" : "CONTACT"}
            </h2>
            <p className="text-text-secondary">
              {isEn
                ? "For any questions or suggestions, send us an email at contact@vicecitytropical.fr"
                : "Pour toute question ou suggestion, envoyez-nous un email à contact@vicecitytropical.fr"}
            </p>
          </div>
        </div>
      </SectionPage>
    </>
  );
}