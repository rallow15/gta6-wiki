import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";
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

export default function AProposPage() {
  return (
    <>
      <JsonLd data={sectionBreadcrumb("À propos", "/a-propos")} />
      <SectionPage
        title="A PROPOS"
      subtitle="Vice City Tropical — le site fan de reference sur GTA VI."
    >
      <div className="glass-card p-6 sm:p-8 space-y-6">
        {/* Logo badge */}
        <div className="flex justify-center">
          <img src="/images/logo/logo-badge.png" alt="GTA 6 CodeTriche Badge" className="w-48 h-auto rounded-xl" />
        </div>
        <div>
          <h2 className="font-display text-xl tracking-wider text-neon-pink mb-3">QU'EST-CE QUE VICE CITY TROPICAL ?</h2>
          <p className="text-text-secondary leading-relaxed">
            Vice City Tropical est un site fan non officiel dedie a Grand Theft Auto VI. Notre mission est de fournir les informations les plus completes et a jour sur le jeu : codes de triche, fiches vehicules, armes, personnages, lieux et toutes les dernieres actualites.
          </p>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-lagoon-cyan mb-3">NOTRE ENGAGEMENT</h2>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Des informations verifiees et a jour
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Un design unique inspire de l'univers tropical de Vice City
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Une communaute active de fans
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Un site rapide et accessible sur mobile
            </li>
          </ul>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-sunset-orange mb-3">AVERTISSEMENT</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Vice City Tropical est un site fan non affilie a Rockstar Games, Take-Two Interactive ou toute autre societe liee a la franchise Grand Theft Auto. GTA, Grand Theft Auto et tous les noms de personnages, lieux et vehicules sont des marques deposees de Rockstar Games. Ce site est cree par des fans, pour des fans, et ne genere aucun profit direct de la propriete intellectuelle de Rockstar Games.
          </p>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-sand-yellow mb-3">CONTACT</h2>
          <p className="text-text-secondary">
            Pour toute question ou suggestion, envoyez-nous un email a contact@vicecitytropical.fr
          </p>
        </div>
      </div>
    </SectionPage>
    </>
  );
}