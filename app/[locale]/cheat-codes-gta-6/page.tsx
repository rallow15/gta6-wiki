import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
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
    fr: "Code Triche GTA 6 — Tous les codes PS5, Xbox, PC",
    en: "GTA 6 Cheat Codes — All Cheats for PS5, Xbox, PC",
  };
  const descriptions: Record<string, string> = {
    fr: "Tous les codes de triche GTA 6 (GTA VI) pour PS5, Xbox Series et PC : santé infinie, armes, véhicules, invincibilité, police, météo. Codes à copier en 1 clic.",
    en: "All GTA 6 cheat codes (GTA VI) for PS5, Xbox Series and PC: infinite health, weapons, vehicles, invincibility, police, weather. 1-click copy cheats.",
  };
  const keywords = locale === "en"
    ? [
        "GTA 6 cheat codes",
        "GTA 6 cheats",
        "GTA VI cheats",
        "GTA 6 cheat codes PS5",
        "GTA 6 cheat codes Xbox",
        "GTA 6 cheat codes PC",
        "GTA 6 codes",
        "gta 6 cheats",
        "cheats GTA 6",
        "GTA 6 invincibility",
        "GTA 6 infinite health",
        "GTA 6 weapons cheats",
        "GTA 6 vehicle cheats",
        "GTA 6 police cheats",
        "GTA 6 weather cheats",
      ]
    : [
        "code triche GTA 6",
        "code triche gta 6",
        "codes de triche GTA 6",
        "code triche GTA VI",
        "code triche GTA 6 PS5",
        "code triche GTA 6 Xbox",
        "code triche GTA 6 PC",
        "gta 6 code triche",
        "cheat codes GTA 6",
        "cheats GTA 6",
        "triche GTA 6",
        "astuces GTA 6",
        "code triche Vice City",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: locale === "fr" ? "/code-triche-gta-6" : "/en/cheat-codes-gta-6",
      languages: {
        fr: "/code-triche-gta-6",
        en: "/en/cheat-codes-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: locale === "fr" ? "/code-triche-gta-6" : "/en/cheat-codes-gta-6",
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const cheatCategoriesFr = [
  {
    title: "JOUEUR",
    accent: "primary" as const,
    cheats: [
      { name: "Santé infinie", desc: "Restaure la santé de Jason ou Lucia au maximum. Combo classique de la série GTA." },
      { name: "Armure complète", desc: "Ajoute une armure complète au niveau maximum. Indispensable pour les gunfights intenses." },
      { name: "Invincibilité", desc: "Rend le joueur invincible pendant 5 minutes. Désactive les trophées/succès pendant la session." },
      { name: "Super saut", desc: "Permet de sauter beaucoup plus haut que la normale. Utile pour l'exploration urbaine." },
      { name: "Super course", desc: "Augmente considérablement la vitesse de sprint. Idéal pour fuir les situations délicates." },
    ],
  },
  {
    title: "ARMES & MUNITIONS",
    accent: "sunset" as const,
    cheats: [
      { name: "Toutes les armes", desc: "Débloque toutes les armes disponibles avec munitions complètes." },
      { name: "Munitions infinies", desc: "Munitions illimitées pour toutes les armes équipées. Plus besoin de recharger." },
      { name: "Explosifs plein poche", desc: "Donne le maximum de grenades, C4 et lance-roquettes." },
    ],
  },
  {
    title: "VÉHICULES",
    accent: "teal" as const,
    cheats: [
      { name: "Spawn véhicule", desc: "Fait apparaître un véhicule spécifique à côté du joueur. Les codes diffèrent par véhicule." },
      { name: "Véhicule invincible", desc: "Rend le véhicule actif invincible (pas de dégâts, pas de pneus crevés)." },
      { name: "Conduite drunk", desc: "Simule une conduite en état d'ivresse. Effet visuel et contrôle altéré." },
      { name: "Voler un hélicoptère", desc: "Fait apparaître un hélicoptère pour explorer Leonida depuis le ciel." },
    ],
  },
  {
    title: "POLICE & MONDE",
    accent: "gold" as const,
    cheats: [
      { name: "Baisser les étoiles", desc: "Réduit le niveau de recherche de la police d'une étoile." },
      { name: "Monter les étoiles", desc: "Augmente le niveau de recherche d'une étoile. Pour les amateurs de chaos." },
      { name: "Météo ensoleillée", desc: "Change la météo en ciel dégagé. Parfait pour les courses de rue." },
      { name: "Météo orageuse", desc: "Déclenche un orage tropical digne de Vice City. Ambiance garantie." },
      { name: "Météo brumeuse", desc: "Active le brouillard dans les marais de Grassrivers. Effet atmosphérique." },
    ],
  },
];

const cheatCategoriesEn = [
  {
    title: "PLAYER",
    accent: "primary" as const,
    cheats: [
      { name: "Max Health", desc: "Restores Jason or Lucia's health to maximum. Classic GTA combo." },
      { name: "Full Armor", desc: "Adds full armor at maximum level. Essential for intense gunfights." },
      { name: "Invincibility", desc: "Makes the player invincible for 5 minutes. Disables trophies/achievements during the session." },
      { name: "Super Jump", desc: "Jump much higher than normal. Great for urban exploration." },
      { name: "Super Sprint", desc: "Significantly increases sprint speed. Perfect for escaping tricky situations." },
    ],
  },
  {
    title: "WEAPONS & AMMO",
    accent: "sunset" as const,
    cheats: [
      { name: "All Weapons", desc: "Unlocks all available weapons with full ammo." },
      { name: "Infinite Ammo", desc: "Unlimited ammo for all equipped weapons. No need to reload." },
      { name: "Explosives", desc: "Gives maximum grenades, C4 and rocket launchers." },
    ],
  },
  {
    title: "VEHICLES",
    accent: "teal" as const,
    cheats: [
      { name: "Spawn Vehicle", desc: "Spawns a specific vehicle next to the player. Codes differ by vehicle." },
      { name: "Invincible Vehicle", desc: "Makes the active vehicle invincible (no damage, no tire blowouts)." },
      { name: "Drunk Driving", desc: "Simulates drunk driving. Visual effect and altered controls." },
      { name: "Spawn Helicopter", desc: "Spawns a helicopter to explore Leonida from the sky." },
    ],
  },
  {
    title: "POLICE & WORLD",
    accent: "gold" as const,
    cheats: [
      { name: "Lower Wanted Level", desc: "Reduces police wanted level by one star." },
      { name: "Raise Wanted Level", desc: "Increases wanted level by one star. For chaos lovers." },
      { name: "Sunny Weather", desc: "Changes weather to clear skies. Perfect for street racing." },
      { name: "Stormy Weather", desc: "Triggers a tropical storm worthy of Vice City. Guaranteed atmosphere." },
      { name: "Foggy Weather", desc: "Activates fog in the Grassrivers swamps. Atmospheric effect." },
    ],
  },
];

const platformInfoFr = [
  { name: "PS5", slug: "/codes-gta-6-ps5", buttons: "X, ○, △, □, L1, L2, R1, R2", method: "Tapez la séquence de touches DualSense pendant le jeu. Le code s'active immédiatement." },
  { name: "Xbox", slug: "/codes-gta-6-xbox", buttons: "A, B, X, Y, LB, LT, RB, RT", method: "Tapez la séquence de touches manette pendant le jeu. Le code s'active immédiatement." },
  { name: "PC", slug: "/codes-gta-6-pc", buttons: "Mots-clés (ex. HEALME, GODMODE)", method: "Ouvrez le téléphone en jeu ou tapez directement le mot-clé au clavier." },
];

const platformInfoEn = [
  { name: "PS5", slug: "/cheat-codes-gta-6-ps5", buttons: "X, ○, △, □, L1, L2, R1, R2", method: "Press the DualSense button sequence during gameplay. The code activates immediately." },
  { name: "Xbox", slug: "/cheat-codes-gta-6-xbox", buttons: "A, B, X, Y, LB, LT, RB, RT", method: "Press the Xbox controller button sequence during gameplay. The code activates immediately." },
  { name: "PC", slug: "/cheat-codes-gta-6-pc", buttons: "Keywords (e.g. HEALME, GODMODE)", method: "Open the in-game phone or type the keyword directly on the keyboard." },
];

const faqsFr = [
  { question: "Comment entrer un code de triche dans GTA 6 ?", answer: "Sur PS5 et Xbox, tapez la séquence de touches pendant le jeu. Sur PC, entrez le mot-clé via le téléphone en jeu ou directement au clavier. Les codes s'activent immédiatement à l'écran." },
  { question: "Les codes de triche GTA 6 désactivent-ils les trophées ?", answer: "Oui, comme dans les précédents GTA, l'utilisation de codes de triche désactive l'obtention des trophées/succès pendant la session active. Sauvegardez avant d'utiliser des codes si vous voulez conserver l'accès aux trophées." },
  { question: "Les codes de triche sont-ils les mêmes sur PS5, Xbox et PC ?", answer: "Non. Sur PS5 et Xbox, les codes utilisent des séquences de touches différentes (boutons manette). Sur PC, les codes utilisent des mots-clés tapés au clavier. L'effet est identique, seule la saisie diffère." },
  { question: "Y a-t-il des codes de triche pour GTA 6 Online ?", answer: "Non. Les codes de triche ne fonctionnent qu'en mode histoire (single-player). L'utilisation de cheats ou de modifications en ligne est interdite et peut entraîner un bannissement permanent." },
  { question: "Quand les codes de triche GTA 6 seront-ils disponibles ?", answer: "Les codes de triche seront confirmés et publiés dès la sortie du jeu le 19 novembre 2026. Les codes listés ci-dessous sont basés sur les habitudes des opus précédents et seront vérifiés à la sortie." },
  { question: "Où trouver tous les codes de triche GTA 6 ?", answer: "Tous les codes de triche GTA 6 pour PS5, Xbox et PC sont listés sur cette page. Ils seront mis à jour dès la sortie du jeu le 19 novembre 2026. Consultez aussi nos pages dédiées : codes PS5, codes Xbox et codes PC." },
];

const faqsEn = [
  { question: "How do I enter cheat codes in GTA 6?", answer: "On PS5 and Xbox, press the button sequence during gameplay. On PC, enter the keyword via the in-game phone or type it directly on the keyboard. Codes activate immediately on screen." },
  { question: "Do GTA 6 cheat codes disable trophies?", answer: "Yes, like in previous GTA games, using cheat codes disables trophy/achievement progress during the active session. Save before using cheats if you want to keep access to trophies." },
  { question: "Are cheat codes the same on PS5, Xbox and PC?", answer: "No. On PS5 and Xbox, cheats use different button sequences (controller buttons). On PC, cheats use keywords typed on the keyboard. The effect is the same, only the input method differs." },
  { question: "Are there cheat codes for GTA 6 Online?", answer: "No. Cheat codes only work in story mode (single-player). Using cheats or modifications online is prohibited and can result in a permanent ban." },
  { question: "When will GTA 6 cheat codes be available?", answer: "Cheat codes will be confirmed and published when the game releases on November 19, 2026. The codes listed below are based on previous games and will be verified at launch." },
  { question: "Where can I find all GTA 6 cheat codes?", answer: "All GTA 6 cheat codes for PS5, Xbox and PC are listed on this page. They'll be updated when the game releases on November 19, 2026. Also check our dedicated pages: PS5 cheats, Xbox cheats and PC cheats." },
];

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

export default async function CheatCodesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const cheatCategories = isEn ? cheatCategoriesEn : cheatCategoriesFr;
  const platformInfo = isEn ? platformInfoEn : platformInfoFr;
  const faqs = isEn ? faqsEn : faqsFr;
  const canonicalPath = isEn ? "/en/cheat-codes-gta-6" : "/code-triche-gta-6";
  const breadcrumbName = isEn ? "GTA 6 Cheat Codes" : "Code Triche GTA 6";

  const headingTitle = isEn ? "CHEAT CODES" : "CODES DE TRICHE";
  const headingAccent = "GTA 6 —";
  const subtitle = isEn
    ? "All GTA 6 cheat codes for PS5, Xbox Series and PC: health, weapons, vehicles, police and weather."
    : "Tous les codes de triche GTA 6 pour PS5, Xbox Series et PC : santé, armes, véhicules, police et météo.";
  const noticeText = isEn
    ? "Cheat codes will be added when the game releases on November 19, 2026."
    : "Les codes de triche seront ajoutés dès la sortie du jeu le 19 novembre 2026.";
  const noticeSubtext = isEn
    ? "The codes listed below are based on patterns from previous games. Exact codes will be verified at launch."
    : "Les codes listés ci-dessous sont basés sur les habitudes des opus précédents. Les codes exacts seront vérifiés à la sortie.";
  const howToEnter = isEn ? "HOW TO ENTER A CHEAT CODE" : "COMMENT ENTRER UN CODE DE TRICHE";
  const cheatsLabel = isEn ? "CHEATS" : "CODES DE TRICHE";
  const soonBadge = isEn ? "Soon" : "Bientôt";
  const importantTitle = isEn ? "IMPORTANT" : "IMPORTANT";
  const warnings = isEn
    ? [
        { title: "Trophies disabled", desc: "Using cheat codes disables trophy/achievement progress during the current session." },
        { title: "Story mode only", desc: "Cheat codes don't work in Online mode. Any online cheating results in a permanent ban." },
        { title: "Save before using", desc: "Some cheats (invincibility, infinite ammo) may cause glitches. Save your game first." },
      ]
    : [
        { title: "Trophées désactivés", desc: "L'utilisation de codes de triche désactive l'obtention des trophées/succès pendant la session en cours." },
        { title: "Mode histoire uniquement", desc: "Les codes de triche ne fonctionnent pas en mode Online. Toute triche en ligne est passible de bannissement." },
        { title: "Sauvegardez avant", desc: "Certains codes (invincibilité, munitions infinies) peuvent causer des bugs. Sauvegardez avant utilisation." },
      ];
  const faqTitle = isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES";
  const allCodesLink = isEn ? "All cheat codes" : "Tous les codes de triche";
  const keysLabel = isEn ? "Keys" : "Touches";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: breadcrumbName, url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title={headingTitle}
        titleAccent={headingAccent}
        subtitle={subtitle}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{noticeText}</strong> {noticeSubtext}
            </p>
          </div>
        </div>

        {/* How to enter cheats per platform */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
            {howToEnter}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {platformInfo.map((p) => (
              <Link key={p.name} href={p.slug} className="card-base p-5 group" data-plate="primary">
                <h3 className="font-display font-bold text-lg tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">{p.method}</p>
                <p className="text-xs text-text-muted">
                  {keysLabel}: <span className="text-text-secondary">{p.buttons}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Cheat categories */}
        {cheatCategories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent]} mb-5 border-b border-border/50 pb-2`}>
              {cheatsLabel} — {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.cheats.map((cheat) => (
                <div key={cheat.name} className="card-base p-5" data-plate="primary">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-text-primary">{cheat.name}</h3>
                      <p className="mt-1 text-sm text-text-muted">{cheat.desc}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-surface-muted border border-border/30 text-text-muted shrink-0">
                      {soonBadge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Warning */}
        <div className="mb-10 card-base p-6 border-accent-sunset/20" data-plate="primary">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-sunset mb-3">
            <AlertTriangle className="inline h-5 w-5 mr-1 -mt-0.5" /> {importantTitle}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {warnings.map((w) => (
              <li key={w.title} className="flex items-start gap-2">
                <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
                <span><strong className="text-text-primary">{w.title}</strong> — {w.desc}</span>
              </li>
            ))}
          </ul>
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
          <Link href={isEn ? "/codes" : "/codes"} className="text-accent-primary hover:underline">{allCodesLink} →</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-ps5" : "/codes-gta-6-ps5"} className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-xbox" : "/codes-gta-6-xbox"} className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href={isEn ? "/cheat-codes-gta-6-pc" : "/codes-gta-6-pc"} className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}