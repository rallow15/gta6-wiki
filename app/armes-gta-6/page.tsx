import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Armes GTA 6 — Toutes les armes confirmées de GTA VI",
  description:
    "Guide complet des armes de GTA 6 (GTA VI) : pistolets, fusils d'assaut, snipers, armes lourdes, armes de mêlée et armes spéciales. Liste officielle avec sources Rockstar.",
  alternates: { canonical: "/armes-gta-6" },
  keywords: [
    "armes GTA 6",
    "armes GTA VI",
    "toutes les armes GTA 6",
    "liste armes GTA 6",
    "meilleures armes GTA 6",
    "pistolets GTA 6",
    "fusil d'assaut GTA 6",
    "sniper GTA 6",
    "armes lourdes GTA 6",
  ],
  openGraph: {
    title: "Armes GTA 6 — Toutes les armes confirmées | CodeTricheGTA6",
    description: "Guide complet des armes de GTA 6 : pistolets, fusils, snipers, armes lourdes et de mêlée confirmées par Rockstar.",
    url: "/armes-gta-6",
    type: "article",
  },
};

const faqs = [
  {
    question: "Combien d'armes y a-t-il dans GTA 6 ?",
    answer:
      "D'après les trailers et screenshots officiels, plus de 20 armes ont été identifiées : pistolets, revolvers, fusils à pompe, mitraillettes, fusils d'assaut, snipers, armes lourdes et armes de mêlée. La liste complète sera connue après la sortie du jeu le 19 novembre 2026.",
  },
  {
    question: "Peut-on personnaliser les armes dans GTA 6 ?",
    answer:
      "Oui. GTA 6 intègre un système de personnalisation poussé inspiré de Red Dead Redemption 2 : accessoires, optiques, finitions et gravures sur chaque arme. L'édition Ultime inclut des variantes personnalisées exclusives.",
  },
  {
    question: "Quel est le système d'inventaire d'armes dans GTA 6 ?",
    answer:
      "GTA 6 utilise un système de sacoche limitée — impossible de porter toutes les armes en même temps. Les armes excédentaires peuvent être stockées dans le coffre de votre véhicule et changées entre les missions.",
  },
  {
    question: "Y a-t-il des armes exclusives dans l'édition Ultime ?",
    answer:
      "Oui. L'édition Ultime de GTA 6 inclut des variantes personnalisées exclusives : le Girardi ES9 personnalisé, le Klose K17 personnalisé, et le Hawk & Little Morgan Revolver personnalisé.",
  },
];

const weaponCategories = [
  {
    title: "PISTOLETS & REVOLVERS",
    accent: "teal",
    weapons: [
      { name: "Girardi ES9", desc: "Pistolet semi-automatique inspiré du Beretta 92FS. Arme de Jason.", edition: false },
      { name: "Klose K17", desc: "Pistolet inspiré du Glock 17. Arme principale de Lucia. Mode automatique complet.", edition: false },
      { name: "Capo Pistol", desc: "Pistolet inspiré du Colt M1911. Vu entre les mains de Jason et Raul Bautista.", edition: false },
      { name: "Nipper .38", desc: "Pistolet compact visible sur l'artwork officiel, tenu par Lucia.", edition: false },
      { name: "Hawk & Little Morgan Revolver", desc: "Revolver inspiré du Smith & Wesson 629. Version personnalisée Ultime.", edition: true },
      { name: "Mustang .357 Revolver", desc: "Revolver inspiré du Colt Python. Vu entre les mains d'un gang de motards.", edition: false },
    ],
  },
  {
    title: "FUSILS À POMPE & MITRAILLETTES",
    accent: "primary",
    weapons: [
      { name: "Double-Barreled Shotgun", desc: "Fusil à pompe double canon. Vu utilisé par un chasseur visant un alligator.", edition: false },
      { name: "Pump Action Shotgun", desc: "Fusil à pompe inspiré du Mossberg 590/Remington 870. Plusieurs variantes chez Ammu-Nation.", edition: false },
      { name: "MP5-inspired SMG", desc: "Mitraillette inspirée du MP5. Utilisée par Jason et Lucia lors du braquage.", edition: false },
      { name: "MAC-10/11 SMG", desc: "Mitraillette compacte avec skin Vice City en précommande.", edition: false },
    ],
  },
  {
    title: "FUSILS D'ASSAUT & SNIPERS",
    accent: "sunset",
    weapons: [
      { name: "Duke Carbine Rifle", desc: "Fusil d'assaut inspiré du M4 avec insigne Duke Arms. Le plus visible dans les médias officiels.", edition: false },
      { name: "AK-47-inspired Assault Rifle", desc: "Fusil d'assaut inspiré de l'AK-47 avec variantes en bois. Visible chez Ammu-Nation.", edition: false },
      { name: "Duke Assault Sniper Rifle", desc: "Fusil sniper d'assaut de la marque Duke. Vu entre les mains d'un chasseur/braconnier.", edition: false },
      { name: "Remington 700-inspired Sniper", desc: "Fusil sniper à verrou inspiré du Remington 700. Utilisé au Mont Kalaga.", edition: false },
    ],
  },
  {
    title: "ARMES LOURDES, MÊLÉE & SPÉCIALES",
    accent: "gold",
    weapons: [
      { name: "Grenade Launcher", desc: "Lance-grenades utilisé par Lucia dans le Trailer 2.", edition: false },
      { name: "M249-inspired LMG", desc: "Mitrailleuse légère inspirée du M249. Ramassée chez Ammu-Nation.", edition: false },
      { name: "Baseball Bat", desc: "Batte de baseball visible dans les screenshots de Port Gellhorn.", edition: false },
      { name: "Hammer", desc: "Marteau vu en dual-wield dans le Trailer 1.", edition: false },
      { name: "Golf Club", desc: "Club de golf tenu par Cal Hampton dans les screenshots officiels.", edition: false },
      { name: "Knife", desc: "Couteau visible près des revolvers personnalisés.", edition: false },
      { name: "Speargun", desc: "Fusil harpon confirmé pour le combat sous-marin.", edition: false },
    ],
  },
];

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

export default function ArmesGTA6Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Armes GTA 6", url: `${BASE_URL}/armes-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/armes-gta-6`),
        ]}
      />
      <SectionPage
        title="ARMES GTA 6"
        titleAccent="TOUTES LES —"
        subtitle="Guide complet des armes officiellement confirmées dans GTA 6 : pistolets, fusils, snipers, armes lourdes et spéciales. Sources Rockstar."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Sources officielles uniquement.</strong> Chaque arme listée a été identifiée dans les trailers officiels, les screenshots Rockstar ou le site GTA VI. Les stats détaillées seront ajoutées après la sortie du jeu.
            </p>
          </div>
        </div>

        {weaponCategories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent as keyof typeof accentColor]} mb-5 border-b border-border/50 pb-2`}>
              {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.weapons.map((weapon) => (
                <div key={weapon.name} className="card-base p-5" data-plate="teal">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-text-primary">{weapon.name}</h3>
                    {weapon.edition && (
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-accent-sunset/90 text-white shrink-0">
                        Édition Ultime
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{weapon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Système d'armes */}
        <div className="mb-10 card-base p-6 border-accent-sunset/20" data-plate="teal">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-sunset mb-3">
            SYSTÈME D'ARMES — NOUVEAUTÉS GTA VI
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>Inventaire limité</strong> — Système de sacoche : impossible de porter toutes les armes à la fois</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>Coffre de véhicule</strong> — Stockez des armes dans le coffre et changez de loadout entre les missions</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>Personnalisation poussée</strong> — Accessoires, optiques, finitions et gravures inspirées de RDR2</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>Marques fictives</strong> — Duke, Girardi, Klose, Hawk & Little, Capo</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="teal">
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

        <div className="mt-8 text-center">
          <Link href="/armes" className="text-accent-primary hover:underline">
            Voir toutes les armes GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}