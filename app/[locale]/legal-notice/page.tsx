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

export default function MentionsLegalesPage() {
  return (
    <SectionPage
      title="MENTIONS LEGALES"
      subtitle="Informations legales concernant le site Vice City Tropical."
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">1. EDITEUR DU SITE</h2>
          <p>Vice City Tropical est un site independant edite par des fans, sans but lucratif direct lie a la franchise Grand Theft Auto.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">2. PROPRIETE INTELLECTUELLE</h2>
          <p>Grand Theft Auto, GTA, Rockstar Games et tous les noms de personnages, lieux et vehicules mentions sur ce site sont des marques deposees appartenant a Rockstar Games et Take-Two Interactive. Ce site n&apos;est en aucun cas affilie, autorise ou sponsorise par Rockstar Games.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">3. CONTENU</h2>
          <p>Les informations presentees sur ce site sont fournies a titre indicatif et peuvent contenir des erreurs ou omissions. Les codes de triche sont bases sur des sources publiques et peuvent ne pas etre exhaustifs ou exacts a 100%.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">4. PUBLICITE</h2>
          <p>Ce site peut afficher des publicites fournies par des partenaires publicitaires. Ces publicites ne constituent pas une approbation des produits ou services mentionnes.</p>
        </div>
      </div>
    </SectionPage>
  );
}