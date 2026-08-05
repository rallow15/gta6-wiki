import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cheat Codes GTA 6 — Tous les cheats PS5, Xbox, PC",
  description:
    "Tous les cheat codes GTA 6 (GTA VI) pour PS5, Xbox Series et PC : santé infinie, armes, véhicules, mode invincibilité, police, météo. Cheats avec copier en 1 clic.",
  alternates: { canonical: "/cheat-codes-gta-6" },
  keywords: [
    "cheat codes GTA 6",
    "cheats GTA 6",
    "cheat GTA VI",
    "cheat codes GTA 6 PS5",
    "cheat codes GTA 6 Xbox",
    "cheat codes GTA 6 PC",
    "codes de triche GTA 6",
    "gta 6 cheats",
    "cheat codes Vice City",
    "triche GTA 6",
  ],
  openGraph: {
    title: "Cheat Codes GTA 6 — Tous les cheats PS5, Xbox, PC | CodeTricheGTA6",
    description: "Tous les cheat codes GTA 6 : santé, armes, véhicules, invincibilité, police, météo. PS5, Xbox et PC.",
    url: "/cheat-codes-gta-6",
    type: "website",
  },
};

const cheatCategories = [
  {
    title: "JOUEUR",
    accent: "primary" as const,
    cheats: [
      { name: "Santé infinie", code: "—", desc: "Restaure la santé de Jason ou Lucia au maximum. Combo classique de la série GTA." },
      { name: "Armure complète", code: "—", desc: "Ajoute une armure complète au niveau maximum. Indispensable pour les gunfights intenses." },
      { name: "Invincibilité", code: "—", desc: "Rend le joueur invincible pendant 5 minutes. Désactive les trophées/succès pendant la session." },
      { name: "Super saut", code: "—", desc: "Permet de sauter beaucoup plus haut que la normale. Utile pour l'exploration urbaine." },
      { name: "Super course", code: "—", desc: "Augmente considérablement la vitesse de sprint. Idéal pour fuir les situations délicates." },
    ],
  },
  {
    title: "ARMES & MUNITIONS",
    accent: "sunset" as const,
    cheats: [
      { name: "Toutes les armes", code: "—", desc: "Débloque toutes les armes disponibles avec munitions complètes." },
      { name: "Munitions infinies", code: "—", desc: "Munitions illimitées pour toutes les armes équipées. Plus besoin de recharger." },
      { name: "Explosifs plein poche", code: "—", desc: "Donne le maximum de grenades, C4 et lance-roquettes." },
    ],
  },
  {
    title: "VÉHICULES",
    accent: "teal" as const,
    cheats: [
      { name: "Spawn véhicule", code: "—", desc: "Fait apparaître un véhicule spécifique à côté du joueur. Les codes diffèrent par véhicule." },
      { name: "Véhicule invincible", code: "—", desc: "Rend le véhicule actif invincible (pas de dégâts, pas de pneus crevés)." },
      { name: "Conduite drunk", code: "—", desc: "Simule une conduite en état d'ivresse. Effet visuel et contrôle altéré." },
      { name: "Voler un hélicoptère", code: "—", desc: "Fait apparaître un hélicoptère pour explorer Leonida depuis le ciel." },
    ],
  },
  {
    title: "POLICE & MONDE",
    accent: "gold" as const,
    cheats: [
      { name: "Baisser les étoiles", code: "—", desc: "Réduit le niveau de recherche de la police d'une étoile." },
      { name: "Monter les étoiles", code: "—", desc: "Augmente le niveau de recherche d'une étoile. Pour les amateurs de chaos." },
      { name: "Météo ensoleillée", code: "—", desc: "Change la météo en ciel dégagé. Parfait pour les courses de rue." },
      { name: "Météo orageuse", code: "—", desc: "Déclenche un orage tropical digne de Vice City. Ambiance garantie." },
      { name: "Météo brumeuse", code: "—", desc: "Active le brouillard dans les marais de Grassrivers. Effet atmosphérique." },
    ],
  },
];

const platformInfo = [
  {
    name: "PS5",
    slug: "codes-gta-6-ps5",
    buttons: "X, ○, △, □, L1, L2, R1, R2",
    method: "Tapez la séquence de touches DualSense pendant le jeu. Le code s'active immédiatement.",
  },
  {
    name: "Xbox",
    slug: "codes-gta-6-xbox",
    buttons: "A, B, X, Y, LB, LT, RB, RT",
    method: "Tapez la séquence de touches manette pendant le jeu. Le code s'active immédiatement.",
  },
  {
    name: "PC",
    slug: "codes-gta-6-pc",
    buttons: "Mots-clés (ex. HEALME, GODMODE)",
    method: "Ouvrez le téléphone en jeu ou tapez directement le mot-clé au clavier.",
  },
];

const faqs = [
  {
    question: "Comment utiliser les cheat codes dans GTA 6 ?",
    answer:
      "Sur PS5 et Xbox, tapez la séquence de touches pendant le jeu. Sur PC, entrez le mot-clé via le téléphone en jeu ou directement au clavier. Les codes s'activent immédiatement à l'écran.",
  },
  {
    question: "Les cheat codes GTA 6 désactivent-ils les trophées ?",
    answer:
      "Oui, comme dans les précédents GTA, l'utilisation de cheat codes désactive l'obtention des trophées/succès pendant la session active. Sauvegardez avant d'utiliser des cheats si vous voulez conserver l'accès aux trophées.",
  },
  {
    question: "Les cheat codes sont-ils les mêmes sur PS5, Xbox et PC ?",
    answer:
      "Non. Sur PS5 et Xbox, les cheats utilisent des séquences de touches différentes (boutons manette). Sur PC, les cheats utilisent des mots-clés tapés au clavier. L'effet est identique, seule la saisie diffère.",
  },
  {
    question: "Y a-t-il des cheat codes pour GTA 6 Online ?",
    answer:
      "Non. Les cheat codes ne fonctionnent que en mode histoire (single-player). L'utilisation de cheats ou de modifications en ligne est interdite et peut entraîner un bannissement permanent.",
  },
  {
    question: "Quand les cheat codes GTA 6 seront-ils disponibles ?",
    answer:
      "Les codes de triche seront confirmés et publiés dès la sortie du jeu le 19 novembre 2026. Les codes listés ci-dessus sont basés sur les habitudes des opus précédents et seront vérifiés à la sortie.",
  },
];

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

export default function CheatCodesGTA6Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Cheat Codes GTA 6", url: `${BASE_URL}/cheat-codes-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/cheat-codes-gta-6`),
        ]}
      />
      <SectionPage
        title="CHEAT CODES"
        titleAccent="GTA 6 —"
        subtitle="Tous les cheat codes GTA 6 pour PS5, Xbox Series et PC : santé, armes, véhicules, police et météo."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Les codes seront ajoutés dès la sortie du jeu le 19 novembre 2026.</strong> Les cheats listés ci-dessous sont basés sur les habitudes des opus précédents. Les codes exacts seront vérifiés et mis à jour à la sortie.
            </p>
          </div>
        </div>

        {/* How to enter cheats per platform */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
            COMMENT ENTRER UN CHEAT CODE
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {platformInfo.map((p) => (
              <Link key={p.name} href={`/${p.slug}`} className="card-base p-5 group" data-plate="primary">
                <h3 className="font-display font-bold text-lg tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-text-secondary mb-2">{p.method}</p>
                <p className="text-xs text-text-muted">
                  Touches : <span className="text-text-secondary">{p.buttons}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Cheat categories */}
        {cheatCategories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent]} mb-5 border-b border-border/50 pb-2`}>
              CHEATS — {cat.title}
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
                      Bientôt
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
            <AlertTriangle className="inline h-5 w-5 mr-1 -mt-0.5" /> IMPORTANT
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Trophées désactivés</strong> — L'utilisation de cheat codes désactive l'obtention des trophées/succès pendant la session en cours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Mode histoire uniquement</strong> — Les cheat codes ne fonctionnent pas en mode Online. Toute triche en ligne est passible de bannissement.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Sauvegardez avant</strong> — Certains cheats (invincibilité, munitions infinies) peuvent causer des bugs. Sauvegardez avant utilisation.</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            QUESTIONS FRÉQUENTES
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
          <Link href="/codes" className="text-accent-primary hover:underline">Tous les codes →</Link>
          <Link href="/codes-gta-6-ps5" className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href="/codes-gta-6-xbox" className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href="/codes-gta-6-pc" className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}