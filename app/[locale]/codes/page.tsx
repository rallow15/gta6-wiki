import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteName = getSiteName(locale);

  const titles: Record<string, string> = {
    fr: "Codes de triche GTA 6 — PS5, Xbox, PC",
    en: "GTA 6 Cheat Codes — PS5, Xbox, PC",
  };
  const descriptions: Record<string, string> = {
    fr: "Tous les codes de triche GTA 6 (GTA VI) pour PS5, Xbox Series et PC : santé infinie, armes, véhicules, invincibilité, police, météo. Consultez nos guides par plateforme.",
    en: "All GTA 6 cheat codes (GTA VI) for PS5, Xbox Series and PC: infinite health, weapons, vehicles, invincibility, police, weather. Browse by platform.",
  };
  const keywords = locale === "en"
    ? ["GTA 6 cheat codes", "GTA 6 codes", "GTA 6 cheats PS5", "GTA 6 cheats Xbox", "GTA 6 cheats PC", "GTA VI cheats", "GTA 6 tips", "cheat codes Vice City"]
    : ["codes GTA 6", "codes de triche GTA 6", "code triche GTA 6 PS5", "code triche GTA 6 Xbox", "code triche GTA 6 PC", "codes GTA VI", "astuces GTA 6", "cheats GTA 6", "code triche Vice City"];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: locale === "fr" ? "/codes" : "/en/codes",
      languages: { fr: "/codes", en: "/en/codes" },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: locale === "fr" ? "/codes" : "/en/codes",
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const faqsFr = [
  { question: "Comment entrer un code de triche dans GTA 6 ?", answer: "Sur PS5 et Xbox, tapez la séquence de touches de la manette pendant le jeu. Sur PC, entrez le mot-clé via le téléphone en jeu ou directement au clavier. Les codes s'activent immédiatement." },
  { question: "Les codes de triche GTA 6 désactivent-ils les trophées ?", answer: "Oui, comme dans les précédents GTA, l'utilisation de codes de triche désactive l'obtention des trophées et succès pendant la session active. Sauvegardez avant d'utiliser des codes." },
  { question: "Les codes de triche sont-ils les mêmes sur PS5, Xbox et PC ?", answer: "Non. Sur PS5 et Xbox, les codes utilisent des séquences de boutons différentes. Sur PC, ce sont des mots-clés tapés au clavier. L'effet est identique, seule la saisie diffère." },
  { question: "Quand les codes de triche GTA 6 seront-ils disponibles ?", answer: "Les codes seront confirmés et publiés dès la sortie du jeu le 19 novembre 2026. Les codes listés sont basés sur les opus précédents et seront vérifiés à la sortie." },
];

const faqsEn = [
  { question: "How do I enter cheat codes in GTA 6?", answer: "On PS5 and Xbox, press the button sequence on the controller during gameplay. On PC, enter the keyword via the in-game phone or directly on the keyboard. Codes activate immediately." },
  { question: "Do GTA 6 cheat codes disable trophies?", answer: "Yes, like in previous GTA games, using cheat codes disables trophy and achievement progress during the active session. Save before using codes." },
  { question: "Are cheat codes the same on PS5, Xbox and PC?", answer: "No. On PS5 and Xbox, cheats use different button sequences. On PC, they use keywords typed on the keyboard. The effect is the same, only the input method differs." },
  { question: "When will GTA 6 cheat codes be available?", answer: "Codes will be confirmed and published when the game releases on November 19, 2026. The codes listed are based on previous games and will be verified at launch." },
];

const platformsFr = [
  { name: "PS5", slug: "/codes-gta-6-ps5", desc: "Séquences de touches DualSense pour activer chaque code de triche sur PlayStation 5.", icon: "🎮" },
  { name: "Xbox", slug: "/codes-gta-6-xbox", desc: "Combinaisons de boutons Xbox pour débloquer chaque code de triche sur Xbox Series X|S.", icon: "🟢" },
  { name: "PC", slug: "/codes-gta-6-pc", desc: "Mots-clés à saisir au clavier ou via le téléphone en jeu pour chaque code de triche sur PC.", icon: "⌨️" },
];

const platformsEn = [
  { name: "PS5", slug: "/cheat-codes-gta-6-ps5", desc: "DualSense button sequences to activate each cheat code on PlayStation 5.", icon: "🎮" },
  { name: "Xbox", slug: "/cheat-codes-gta-6-xbox", desc: "Xbox button combinations to unlock each cheat code on Xbox Series X|S.", icon: "🟢" },
  { name: "PC", slug: "/cheat-codes-gta-6-pc", desc: "Keywords to type on the keyboard or via the in-game phone for each cheat code on PC.", icon: "⌨️" },
];

const categoriesFr = [
  { name: "Santé & Armure", desc: "Santé infinie, armure complète, invincibilité", icon: "❤️" },
  { name: "Armes & Munitions", desc: "Toutes les armes, munitions infinies, explosifs", icon: "🔫" },
  { name: "Véhicules", desc: "Spawn véhicule, véhicule invincible, hélicoptère", icon: "🚗" },
  { name: "Police & Monde", desc: "Baisser/monter les étoiles, changer la météo", icon: "🌤️" },
];

const categoriesEn = [
  { name: "Health & Armor", desc: "Max health, full armor, invincibility", icon: "❤️" },
  { name: "Weapons & Ammo", desc: "All weapons, infinite ammo, explosives", icon: "🔫" },
  { name: "Vehicles", desc: "Spawn vehicle, invincible vehicle, helicopter", icon: "🚗" },
  { name: "Police & World", desc: "Lower/raise wanted level, change weather", icon: "🌤️" },
];

export default async function CodesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const faqs = isEn ? faqsEn : faqsFr;
  const platforms = isEn ? platformsEn : platformsFr;
  const categories = isEn ? categoriesEn : categoriesFr;
  const canonicalPath = isEn ? "/en/codes" : "/codes";
  const cheatLink = isEn ? "/cheat-codes-gta-6" : "/code-triche-gta-6";

  const title = isEn ? "CHEAT CODES" : "CODES DE TRICHE";
  const titleAccent = "GTA 6";
  const subtitle = isEn
    ? "All GTA 6 cheat codes for PS5, Xbox Series and PC — health, weapons, vehicles, police and weather."
    : "Tous les codes de triche GTA 6 pour PS5, Xbox Series et PC — santé, armes, véhicules, police et météo.";
  const noticeStrong = isEn
    ? "Cheat codes will be added when the game releases on November 19, 2026."
    : "Les codes de triche seront ajoutés dès la sortie du jeu le 19 novembre 2026.";
  const noticeRest = isEn
    ? "Check the full page for all details and platform-specific codes."
    : "Consultez la page complète pour tous les détails et les codes par plateforme.";
  const viewAllLabel = isEn
    ? "See all GTA 6 cheat codes →"
    : "Voir tous les codes de triche GTA 6 →";
  const viewAllDesc = isEn
    ? "Complete list of cheat codes: health, weapons, vehicles, police, weather. With detailed explanations and FAQ."
    : "Liste complète des codes de triche : santé, armes, véhicules, police, météo. Avec explications détaillées et FAQ.";
  const platformTitle = isEn ? "CHEATS BY PLATFORM" : "CODES PAR PLATEFORME";
  const catTitle = isEn ? "CHEAT CATEGORIES" : "CATÉGORIES DE CODES";
  const faqTitle = isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES";
  const allCodesLink = isEn ? "All cheat codes" : "Tous les codes de triche";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Cheat Codes" : "Codes de triche", url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title={title}
        titleAccent={titleAccent}
        subtitle={subtitle}
      >
        {/* Notice */}
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <svg
              className="h-5 w-5 text-accent-teal shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{noticeStrong}</strong>{" "}
              {noticeRest}
            </p>
          </div>
        </div>

        {/* Link to full cheat codes page */}
        <div className="mb-10">
          <Link
            href={cheatLink}
            className="block card-base p-6 group hover:border-accent-primary/40 transition-colors"
            data-plate="primary"
          >
            <h2 className="font-display font-bold text-xl tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
              {viewAllLabel}
            </h2>
            <p className="text-sm text-text-secondary">{viewAllDesc}</p>
          </Link>
        </div>

        {/* Platform links */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
          {platformTitle}
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {platforms.map((p) => (
            <Link
              key={p.name}
              href={p.slug}
              className="card-base p-5 group hover:border-accent-primary/40 transition-colors"
              data-plate="primary"
            >
              <span className="text-2xl mb-2 block">{p.icon}</span>
              <h3 className="font-display font-bold text-lg tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-text-secondary">{p.desc}</p>
            </Link>
          ))}
        </div>

        {/* Categories preview */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
          {catTitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {categories.map((c) => (
            <div key={c.name} className="card-base p-5" data-plate="primary">
              <span className="text-xl mb-1 block">{c.icon}</span>
              <h3 className="font-semibold text-text-primary">{c.name}</h3>
              <p className="text-sm text-text-muted">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {faqTitle}
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center space-x-4">
          <Link href={cheatLink} className="text-accent-primary hover:underline">{allCodesLink} →</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-ps5" : "/codes-gta-6-ps5"} className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-xbox" : "/codes-gta-6-xbox"} className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-pc" : "/codes-gta-6-pc"} className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}