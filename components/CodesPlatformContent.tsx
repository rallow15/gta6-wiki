import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

type Platform = "PS5" | "Xbox" | "PC";

interface PlatformInfo {
  slug: string;
  slugEn: string;
  label: string;
  heading: string;
  headingEn: string;
  buttons: string;
  enter: string;
  enterEn: string;
  faqs: { question: string; answer: string }[];
  faqsEn: { question: string; answer: string }[];
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  PS5: {
    slug: "codes-gta-6-ps5",
    slugEn: "cheat-codes-gta-6-ps5",
    label: "PS5",
    heading: "Codes GTA 6 PS5",
    headingEn: "GTA 6 PS5 Cheat Codes",
    buttons: "X, Cercle (○), Triangle (△), Carré (□), L1, L2, R1, R2",
    enter:
      "Pendant une partie, saisissez la séquence de touches DualSense indiquée pour chaque code. Le code s'active immédiatement et une notification apparaît à l'écran.",
    enterEn:
      "During gameplay, enter the DualSense button sequence shown for each cheat. The cheat activates immediately and a notification appears on screen.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur PS5 ?",
        answer:
          "Pendant le jeu, tapez rapidement la séquence de touches du DualSense affichée pour chaque code (par exemple X X L1 R1 Triangle Carré). Aucune touche spéciale à presser au préalable.",
      },
      {
        question: "Les codes de triche GTA 6 désactivent-ils les trophées ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes de triche peut désactiver l'obtention des trophées/succès pendant la session. Sauvegardez avant d'utiliser des codes.",
      },
      {
        question: "Les codes GTA 6 PS5 sont-ils confirmés ?",
        answer:
          "Les codes listés ici sont basés sur les habitudes des opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
    faqsEn: [
      {
        question: "How do I enter cheat codes in GTA 6 on PS5?",
        answer:
          "During gameplay, quickly press the DualSense button sequence shown for each cheat (for example X X L1 R1 Triangle Square). No special key needs to be pressed first.",
      },
      {
        question: "Do GTA 6 cheat codes disable trophies?",
        answer:
          "Like in previous GTA games, using cheat codes may disable trophy/achievement progress during the session. Save before using cheats.",
      },
      {
        question: "Are GTA 6 PS5 cheat codes confirmed?",
        answer:
          "The codes listed here are based on previous games and will be verified and updated when the game releases on November 19, 2026.",
      },
    ],
  },
  Xbox: {
    slug: "codes-gta-6-xbox",
    slugEn: "cheat-codes-gta-6-xbox",
    label: "Xbox",
    heading: "Codes GTA 6 Xbox",
    headingEn: "GTA 6 Xbox Cheat Codes",
    buttons: "A, B, X, Y, LB, LT, RB, RT",
    enter:
      "Pendant une partie, saisissez la séquence de touches de la manette Xbox indiquée pour chaque code. Le code s'active immédiatement.",
    enterEn:
      "During gameplay, enter the Xbox controller button sequence shown for each cheat. The cheat activates immediately.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur Xbox Series ?",
        answer:
          "Pendant le jeu, tapez rapidement la séquence de touches de la manette Xbox affichée pour chaque code (par exemple A A LB RB Y X).",
      },
      {
        question: "Les codes désactivent-ils les succès Xbox ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes peut désactiver les succès pendant la session. Pensez à sauvegarder avant.",
      },
      {
        question: "Les codes GTA 6 Xbox sont-ils confirmés ?",
        answer:
          "Les codes listés ici sont basés sur les opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
    faqsEn: [
      {
        question: "How do I enter cheat codes in GTA 6 on Xbox Series?",
        answer:
          "During gameplay, quickly press the Xbox controller button sequence shown for each cheat (for example A A LB RB Y X).",
      },
      {
        question: "Do cheat codes disable Xbox achievements?",
        answer:
          "Like in previous GTA games, using cheat codes may disable achievements during the session. Save before using cheats.",
      },
      {
        question: "Are GTA 6 Xbox cheat codes confirmed?",
        answer:
          "The codes listed here are based on previous games and will be verified and updated when the game releases on November 19, 2026.",
      },
    ],
  },
  PC: {
    slug: "codes-gta-6-pc",
    slugEn: "cheat-codes-gta-6-pc",
    label: "PC",
    heading: "Codes GTA 6 PC",
    headingEn: "GTA 6 PC Cheat Codes",
    buttons: "mots-clés (ex. HEALME, GODMODE)",
    enter:
      "Sur PC, les codes de triche GTA 6 se saisissent via le téléphone en jeu ou directement au clavier. Entrez le mot-clé indiqué pour chaque code.",
    enterEn:
      "On PC, GTA 6 cheat codes are entered via the in-game phone or directly on the keyboard. Type the keyword shown for each cheat.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur PC ?",
        answer:
          "Sur PC, ouvrez le téléphone en jeu ou tapez directement le mot-clé du code au clavier (par exemple HEALME pour restaurer la santé).",
      },
      {
        question: "Les codes GTA 6 PC désactivent-ils les succès ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes peut désactiver les succès pendant la session. Sauvegardez avant d'utiliser des codes.",
      },
      {
        question: "Les codes GTA 6 PC sont-ils confirmés ?",
        answer:
          "Les mots-clés listés ici sont basés sur les opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
    faqsEn: [
      {
        question: "How do I enter cheat codes in GTA 6 on PC?",
        answer:
          "On PC, open the in-game phone or type the cheat keyword directly on the keyboard (for example HEALME to restore health).",
      },
      {
        question: "Do GTA 6 PC cheat codes disable achievements?",
        answer:
          "Like in previous GTA games, using cheats may disable achievements during the session. Save before using cheats.",
      },
      {
        question: "Are GTA 6 PC cheat codes confirmed?",
        answer:
          "The keywords listed here are based on previous games and will be verified and updated when the game releases on November 19, 2026.",
      },
    ],
  },
};

const CANONICAL_PATHS: Record<Platform, { fr: string; en: string }> = {
  PS5: { fr: "/codes-gta-6-ps5", en: "/en/cheat-codes-gta-6-ps5" },
  Xbox: { fr: "/codes-gta-6-xbox", en: "/en/cheat-codes-gta-6-xbox" },
  PC: { fr: "/codes-gta-6-pc", en: "/en/cheat-codes-gta-6-pc" },
};

export function codesPlatformMetadata(platform: Platform, locale: string = "fr"): Metadata {
  const info = PLATFORMS[platform];
  const paths = CANONICAL_PATHS[platform];
  const siteName = getSiteName(locale);
  const isEn = locale === "en";

  const title = isEn
    ? `${info.headingEn} — All Cheats for GTA 6`
    : `${info.heading} — Codes de triche GTA 6`;
  const description = isEn
    ? `All GTA 6 cheat codes for ${info.label}: health, armor, weapons, vehicles, police, weather and gameplay. Available at launch on November 19, 2026.`
    : `Tous les codes de triche GTA 6 ${info.label} : santé, armure, armes, véhicules, police, météo et gameplay. Disponibles dès la sortie du jeu le 19 novembre 2026.`;
  const keywords = isEn
    ? [`GTA 6 cheat codes ${info.label}`, `GTA 6 cheats ${info.label}`, `GTA VI ${info.label} cheats`, `GTA 6 ${info.label} codes`]
    : [`codes GTA 6 ${info.label}`, `code triche GTA 6 ${info.label}`, `cheats GTA 6 ${info.label}`, `codes GTA VI ${info.label}`, `astuces GTA 6 ${info.label}`];

  return {
    title,
    description,
    alternates: {
      canonical: isEn ? paths.en : paths.fr,
      languages: { fr: paths.fr, en: paths.en },
    },
    keywords,
    openGraph: {
      title: `${title} | ${siteName}`,
      description: isEn
        ? `GTA 6 cheat codes for ${info.label} — available at launch on November 19, 2026.`
        : `Codes de triche GTA 6 ${info.label} — disponibles dès la sortie du jeu le 19 novembre 2026.`,
      url: isEn ? paths.en : paths.fr,
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

export function CodesPlatformContent({ platform, locale = "fr" }: { platform: Platform; locale?: string }) {
  const info = PLATFORMS[platform];
  const paths = CANONICAL_PATHS[platform];
  const isEn = locale === "en";

  const heading = isEn ? info.headingEn : info.heading;
  const enter = isEn ? info.enterEn : info.enter;
  const faqs = isEn ? info.faqsEn : info.faqs;
  const canonicalPath = isEn ? paths.en : paths.fr;

  const howToEnter = isEn ? `HOW TO ENTER CHEATS ON ${info.label}` : `COMMENT ENTRER UN CODE ${info.label}`;
  const keysLabel = isEn ? "Keys" : "Touches";
  const soonTitle = isEn ? "COMING SOON" : "ARRIVE PROCHAINEMENT";
  const soonDesc = isEn
    ? `GTA 6 cheat codes for ${info.label} will be published here when the game releases on`
    : `Les codes de triche GTA 6 pour ${info.label} seront publiés ici dès la sortie du jeu, le`;
  const soonDate = "19 novembre 2026";
  const soonDateEn = "November 19, 2026";
  const soonCta = isEn
    ? "Come back soon for all cheat codes with 1-click copy."
    : "Revenez bientôt pour tous les codes avec copier en 1 clic.";
  const faqTitle = isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES";
  const allCodesLink = isEn ? "All cheat codes" : "Tous les codes de triche";

  // Navigation links per locale
  const navLinks = isEn
    ? { all: "/codes", ps5: "/cheat-codes-gta-6-ps5", xbox: "/cheat-codes-gta-6-xbox", pc: "/cheat-codes-gta-6-pc" }
    : { all: "/codes", ps5: "/codes-gta-6-ps5", xbox: "/codes-gta-6-xbox", pc: "/codes-gta-6-pc" };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Cheat Codes" : "Codes de triche", url: `${BASE_URL}${isEn ? "/en/codes" : "/codes"}` },
            { name: heading, url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title={heading.toUpperCase()}
        subtitle={isEn
          ? `All GTA 6 cheat codes for ${info.label} — available at launch.`
          : `Tous les codes de triche GTA 6 pour ${info.label} — disponibles dès la sortie du jeu.`}
      >
        {/* How to enter */}
        <div className="mb-8 glass-card p-5">
          <h2 className="font-display text-lg tracking-wider text-neon-pink mb-2">
            {howToEnter}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">{enter}</p>
          <p className="mt-2 text-xs text-text-muted">
            {keysLabel} {info.label} : <span className="text-text-secondary">{info.buttons}</span>
          </p>
        </div>

        {/* Coming soon */}
        <div className="glass-card p-8 text-center">
          <Gamepad2 className="h-10 w-10 text-neon-pink mx-auto mb-4" />
          <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
            {soonTitle}
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            {soonDesc} <strong className="text-lagoon-cyan">{isEn ? soonDateEn : soonDate}</strong>. {soonCta}
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
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
          <Link href={navLinks.all} className="text-neon-pink hover:underline">{allCodesLink} →</Link>
          <Link href={navLinks.ps5} className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href={navLinks.xbox} className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href={navLinks.pc} className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}