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

export default function PolitiqueConfidentialitePage() {
  return (
    <SectionPage
      title="CONFIDENTIALITE"
      subtitle="Politique de confidentialite et protection des donnees."
    >
      <div className="glass-card p-6 sm:p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">1. COLLECTE DES DONNEES</h2>
          <p>Nous collectons uniquement les donnees necessaires au bon fonctionnement du site : logs de navigation (adresses IP, pages visitees, navigateur) via des cookies techniques. Aucune donnee personnelle n&apos;est collectee sans votre consentement.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">2. COOKIES</h2>
          <p>Ce site utilise des cookies techniques necessaires a son fonctionnement et des cookies analytiques (anonymises) pour comprendre l&apos;utilisation du site. Vous pouvez desactiver les cookies dans les parametres de votre navigateur.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">3. ANALYTICS</h2>
          <p>Nous utilisons des outils d&apos;analyse respectueux de la vie privee (pas de suivi inter-site, pas de profilage publicitaire). Les donnees sont anonymisees et aggregees.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">4. LIENS EXTERNES</h2>
          <p>Notre site contient des liens vers des sites tiers (YouTube). Nous ne sommes pas responsables des pratiques de confidentialite de ces sites.</p>
        </div>
        <div>
          <h2 className="font-display text-lg tracking-wider text-text-primary mb-2">5. CONTACT</h2>
          <p>Pour toute question concernant cette politique, contactez-nous a privacy@vicecitytropical.fr</p>
        </div>
        <div className="border-t border-night-violet/50 pt-4 text-text-muted text-xs">
          Derniere mise a jour : Janvier 2025
        </div>
      </div>
    </SectionPage>
  );
}