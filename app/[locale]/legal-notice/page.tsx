import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
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
  const path = isEn ? "/en/legal-notice" : "/mentions-legales";

  const title = isEn
    ? "Legal Notice — GTA6CheatCodes"
    : "Mentions légales — CodeTricheGTA6";
  const description = isEn
    ? "Legal notice for the GTA6CheatCodes (Vice City Tropical) website, an unofficial fan site dedicated to Grand Theft Auto VI."
    : "Mentions légales du site CodeTricheGTA6 (Vice City Tropical), site fan non officiel dédié à Grand Theft Auto VI.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/mentions-legales", en: "/en/legal-notice" },
    },
    robots: { index: false, follow: true },
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

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <SectionPage
      title={isEn ? "LEGAL NOTICE" : "MENTIONS LÉGALES"}
      subtitle={
        isEn
          ? "Legal information about the Vice City Tropical website."
          : "Informations légales concernant le site Vice City Tropical."
      }
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "1. SITE PUBLISHER" : "1. ÉDITEUR DU SITE"}
          </h2>
          <p>
            {isEn
              ? "Vice City Tropical is an independent site published by fans, with no direct profit motive related to the Grand Theft Auto franchise."
              : "Vice City Tropical est un site indépendant édité par des fans, sans but lucratif direct lié à la franchise Grand Theft Auto."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "2. INTELLECTUAL PROPERTY" : "2. PROPRIÉTÉ INTELLECTUELLE"}
          </h2>
          <p>
            {isEn
              ? "Grand Theft Auto, GTA, Rockstar Games and all character, location and vehicle names mentioned on this site are trademarks belonging to Rockstar Games and Take-Two Interactive. This site is in no way affiliated, authorized or sponsored by Rockstar Games."
              : "Grand Theft Auto, GTA, Rockstar Games et tous les noms de personnages, lieux et véhicules mentionnés sur ce site sont des marques déposées appartenant à Rockstar Games et Take-Two Interactive. Ce site n'est en aucun cas affilié, autorisé ou sponsorisé par Rockstar Games."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "3. CONTENT" : "3. CONTENU"}
          </h2>
          <p>
            {isEn
              ? "The information presented on this site is provided for informational purposes and may contain errors or omissions. Cheat codes are based on public sources and may not be exhaustive or 100% accurate."
              : "Les informations présentées sur ce site sont fournies à titre indicatif et peuvent contenir des erreurs ou omissions. Les codes de triche sont basés sur des sources publiques et peuvent ne pas être exhaustifs ou exacts à 100%."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "4. ADVERTISING" : "4. PUBLICITÉ"}
          </h2>
          <p>
            {isEn
              ? "This site may display advertisements provided by advertising partners. These advertisements do not constitute an endorsement of the products or services mentioned."
              : "Ce site peut afficher des publicités fournies par des partenaires publicitaires. Ces publicités ne constituent pas une approbation des produits ou services mentionnés."}
          </p>
        </div>
      </div>
    </SectionPage>
  );
}