import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Codes de triche GTA 6 — PS5, Xbox, PC",
  description:
    "Tous les codes de triche GTA 6 (GTA VI) pour PS5, Xbox Series et PC : santé infinie, armes, véhicules, invincibilité, police, météo. Consultez nos guides par plateforme.",
  alternates: { canonical: "/codes" },
  keywords: [
    "codes GTA 6",
    "codes de triche GTA 6",
    "code triche GTA 6 PS5",
    "code triche GTA 6 Xbox",
    "code triche GTA 6 PC",
    "codes GTA VI",
    "astuces GTA 6",
    "cheats GTA 6",
    "code triche Vice City",
  ],
  openGraph: {
    title: "Codes de triche GTA 6 — PS5, Xbox, PC | CodeTricheGTA6",
    description:
      "Tous les codes de triche GTA 6 pour PS5, Xbox Series et PC. Santé, armes, véhicules, invincibilité, police, météo.",
    url: "/codes",
    type: "website",
  },
};

const faqs = [
  {
    question: "Comment entrer un code de triche dans GTA 6 ?",
    answer:
      "Sur PS5 et Xbox, tapez la séquence de touches de la manette pendant le jeu. Sur PC, entrez le mot-clé via le téléphone en jeu ou directement au clavier. Les codes s'activent immédiatement.",
  },
  {
    question: "Les codes de triche GTA 6 désactivent-ils les trophées ?",
    answer:
      "Oui, comme dans les précédents GTA, l'utilisation de codes de triche désactive l'obtention des trophées et succès pendant la session active. Sauvegardez avant d'utiliser des codes.",
  },
  {
    question: "Les codes de triche sont-ils les mêmes sur PS5, Xbox et PC ?",
    answer:
      "Non. Sur PS5 et Xbox, les codes utilisent des séquences de boutons différentes. Sur PC, ce sont des mots-clés tapés au clavier. L'effet est identique, seule la saisie diffère.",
  },
  {
    question: "Quand les codes de triche GTA 6 seront-ils disponibles ?",
    answer:
      "Les codes seront confirmés et publiés dès la sortie du jeu le 19 novembre 2026. Les codes listés sont basés sur les opus précédents et seront vérifiés à la sortie.",
  },
];

const platforms = [
  {
    name: "PS5",
    slug: "codes-gta-6-ps5",
    desc: "Séquences de touches DualSense pour activer chaque code de triche sur PlayStation 5.",
    icon: "🎮",
  },
  {
    name: "Xbox",
    slug: "codes-gta-6-xbox",
    desc: "Combinaisons de boutons Xbox pour débloquer chaque code de triche sur Xbox Series X|S.",
    icon: "🟢",
  },
  {
    name: "PC",
    slug: "codes-gta-6-pc",
    desc: "Mots-clés à saisir au clavier ou via le téléphone en jeu pour chaque code de triche sur PC.",
    icon: "⌨️",
  },
];

const categories = [
  { name: "Santé & Armure", desc: "Santé infinie, armure complète, invincibilité", icon: "❤️" },
  { name: "Armes & Munitions", desc: "Toutes les armes, munitions infinies, explosifs", icon: "🔫" },
  { name: "Véhicules", desc: "Spawn véhicule, véhicule invincible, hélicoptère", icon: "🚗" },
  { name: "Police & Monde", desc: "Baisser/monter les étoiles, changer la météo", icon: "🌤️" },
];

export default function CodesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Codes de triche", url: `${BASE_URL}/codes` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/codes`),
        ]}
      />
      <SectionPage
        title="CODES DE TRICHE"
        titleAccent="GTA 6"
        subtitle="Tous les codes de triche GTA 6 pour PS5, Xbox Series et PC — santé, armes, véhicules, police et météo."
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
              <strong className="text-accent-teal">
                Les codes de triche seront ajoutés dès la sortie du jeu le 19 novembre 2026.
              </strong>{" "}
              Consultez la page complète pour tous les détails et les codes par plateforme.
            </p>
          </div>
        </div>

        {/* Link to full cheat codes page */}
        <div className="mb-10">
          <Link
            href="/code-triche-gta-6"
            className="block card-base p-6 group hover:border-accent-primary/40 transition-colors"
            data-plate="primary"
          >
            <h2 className="font-display font-bold text-xl tracking-tight text-accent-primary group-hover:text-accent-teal transition-colors mb-2">
              Voir tous les codes de triche GTA 6 →
            </h2>
            <p className="text-sm text-text-secondary">
              Liste complète des codes de triche : santé, armes, véhicules, police, météo. Avec explications détaillées et FAQ.
            </p>
          </Link>
        </div>

        {/* Platform links */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5 border-b border-border/50 pb-2">
          CODES PAR PLATEFORME
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {platforms.map((p) => (
            <Link
              key={p.name}
              href={`/${p.slug}`}
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
          CATÉGORIES DE CODES
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
          <Link href="/code-triche-gta-6" className="text-accent-primary hover:underline">
            Tous les codes de triche →
          </Link>
          <Link href="/codes-gta-6-ps5" className="text-text-muted hover:text-text-primary">
            PS5
          </Link>
          <Link href="/codes-gta-6-xbox" className="text-text-muted hover:text-text-primary">
            Xbox
          </Link>
          <Link href="/codes-gta-6-pc" className="text-text-muted hover:text-text-primary">
            PC
          </Link>
        </div>
      </SectionPage>
    </>
  );
}