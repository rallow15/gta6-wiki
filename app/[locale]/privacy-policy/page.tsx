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
  const path = isEn ? "/en/privacy-policy" : "/politique-confidentialite";

  const title = isEn
    ? "Privacy Policy — GTA6CheatCodes"
    : "Politique de confidentialité — CodeTricheGTA6";
  const description = isEn
    ? "Privacy policy and data protection for the GTA6CheatCodes (Vice City Tropical) website."
    : "Politique de confidentialité et protection des données du site CodeTricheGTA6 (Vice City Tropical).";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
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

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <SectionPage
      title={isEn ? "PRIVACY" : "CONFIDENTIALITÉ"}
      subtitle={
        isEn
          ? "Privacy policy and data protection."
          : "Politique de confidentialité et protection des données."
      }
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "1. DATA COLLECTION" : "1. COLLECTE DES DONNÉES"}
          </h2>
          <p>
            {isEn
              ? "We only collect data necessary for the proper functioning of the site: browsing logs (IP addresses, pages visited, browser) via technical cookies. No personal data is collected without your consent."
              : "Nous collectons uniquement les données nécessaires au bon fonctionnement du site : logs de navigation (adresses IP, pages visitées, navigateur) via des cookies techniques. Aucune donnée personnelle n'est collectée sans votre consentement."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "2. COOKIES" : "2. COOKIES"}
          </h2>
          <p>
            {isEn
              ? "This site uses technical cookies necessary for its operation and analytical cookies (anonymized) to understand site usage. You can disable cookies in your browser settings."
              : "Ce site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques (anonymisés) pour comprendre l'utilisation du site. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "3. ANALYTICS" : "3. ANALYTICS"}
          </h2>
          <p>
            {isEn
              ? "We use privacy-friendly analytics tools (no cross-site tracking, no advertising profiling). Data is anonymized and aggregated."
              : "Nous utilisons des outils d'analyse respectueux de la vie privée (pas de suivi inter-site, pas de profilage publicitaire). Les données sont anonymisées et agrégées."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "4. EXTERNAL LINKS" : "4. LIENS EXTERNES"}
          </h2>
          <p>
            {isEn
              ? "Our site contains links to third-party sites (YouTube). We are not responsible for the privacy practices of those sites."
              : "Notre site contient des liens vers des sites tiers (YouTube). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites."}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">
            {isEn ? "5. CONTACT" : "5. CONTACT"}
          </h2>
          <p>
            {isEn
              ? "For any questions regarding this policy, contact us at privacy@vicecitytropical.fr"
              : "Pour toute question concernant cette politique, contactez-nous à privacy@vicecitytropical.fr"}
          </p>
        </div>
        <div className="border-t border-night-violet/50 pt-4 text-text-muted text-xs">
          {isEn ? "Last updated: January 2025" : "Dernière mise à jour : Janvier 2025"}
        </div>
      </div>
    </SectionPage>
  );
}