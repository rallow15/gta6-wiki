import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
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
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/weapons-gta-6" : "/armes-gta-6";

  const title = isEn
    ? "GTA 6 Weapons — All Confirmed Weapons in GTA VI"
    : "Armes GTA 6 — Toutes les armes confirmées de GTA VI";
  const description = isEn
    ? "Complete guide to GTA 6 (GTA VI) weapons: pistols, assault rifles, snipers, heavy weapons, melee and special weapons. Official list with Rockstar sources."
    : "Guide complet des armes de GTA 6 (GTA VI) : pistolets, fusils d'assaut, snipers, armes lourdes, armes de mêlée et armes spéciales. Liste officielle avec sources Rockstar.";
  const keywords = isEn
    ? ["GTA 6 weapons", "GTA VI weapons", "all GTA 6 weapons", "GTA 6 weapons list", "best GTA 6 weapons", "GTA 6 pistols", "GTA 6 assault rifle", "GTA 6 sniper", "GTA 6 heavy weapons"]
    : ["armes GTA 6", "armes GTA VI", "toutes les armes GTA 6", "liste armes GTA 6", "meilleures armes GTA 6", "pistolets GTA 6", "fusil d'assaut GTA 6", "sniper GTA 6", "armes lourdes GTA 6"];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/armes-gta-6", en: "/en/weapons-gta-6" },
    },
    keywords,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "article",
      locale: ogLocale,
      siteName,
    },
  };
}

const getFaqs = (isEn: boolean) => [
  {
    question: isEn ? "How many weapons are in GTA 6?" : "Combien d'armes y a-t-il dans GTA 6 ?",
    answer: isEn
      ? "Based on official trailers and screenshots, over 20 weapons have been identified: pistols, revolvers, shotguns, SMGs, assault rifles, snipers, heavy weapons and melee weapons. The complete list will be known after the game releases on November 19, 2026."
      : "D'après les trailers et screenshots officiels, plus de 20 armes ont été identifiées : pistolets, revolvers, fusils à pompe, mitraillettes, fusils d'assaut, snipers, armes lourdes et armes de mêlée. La liste complète sera connue après la sortie du jeu le 19 novembre 2026.",
  },
  {
    question: isEn ? "Can you customize weapons in GTA 6?" : "Peut-on personnaliser les armes dans GTA 6 ?",
    answer: isEn
      ? "Yes. GTA 6 features a deep customization system inspired by Red Dead Redemption 2: accessories, optics, finishes and engravings on each weapon. The Ultimate Edition includes exclusive custom variants."
      : "Oui. GTA 6 intègre un système de personnalisation poussé inspiré de Red Dead Redemption 2 : accessoires, optiques, finitions et gravures sur chaque arme. L'édition Ultime inclut des variantes personnalisées exclusives.",
  },
  {
    question: isEn ? "What is the weapon inventory system in GTA 6?" : "Quel est le système d'inventaire d'armes dans GTA 6 ?",
    answer: isEn
      ? "GTA 6 uses a limited satchel system — you can't carry all weapons at once. Excess weapons can be stored in your vehicle trunk and swapped between missions."
      : "GTA 6 utilise un système de sacoche limitée — impossible de porter toutes les armes en même temps. Les armes excédentaires peuvent être stockées dans le coffre de votre véhicule et changées entre les missions.",
  },
  {
    question: isEn ? "Are there exclusive weapons in the Ultimate Edition?" : "Y a-t-il des armes exclusives dans l'édition Ultime ?",
    answer: isEn
      ? "Yes. The GTA 6 Ultimate Edition includes exclusive custom variants: the customized Girardi ES9, the customized Klose K17, and the customized Hawk & Little Morgan Revolver."
      : "Oui. L'édition Ultime de GTA 6 inclut des variantes personnalisées exclusives : le Girardi ES9 personnalisé, le Klose K17 personnalisé, et le Hawk & Little Morgan Revolver personnalisé.",
  },
];

const getWeaponCategories = (isEn: boolean) => [
  {
    title: isEn ? "PISTOLS & REVOLVERS" : "PISTOLETS & REVOLVERS",
    accent: "teal",
    weapons: [
      { name: "Girardi ES9", desc: isEn ? "Semi-automatic pistol inspired by the Beretta 92FS. Jason's weapon." : "Pistolet semi-automatique inspiré du Beretta 92FS. Arme de Jason.", edition: false },
      { name: "Klose K17", desc: isEn ? "Pistol inspired by the Glock 17. Lucia's main weapon. Full automatic mode." : "Pistolet inspiré du Glock 17. Arme principale de Lucia. Mode automatique complet.", edition: false },
      { name: "Capo Pistol", desc: isEn ? "Pistol inspired by the Colt M1911. Seen in the hands of Jason and Raul Bautista." : "Pistolet inspiré du Colt M1911. Vu entre les mains de Jason et Raul Bautista.", edition: false },
      { name: "Nipper .38", desc: isEn ? "Compact pistol visible on official artwork, held by Lucia." : "Pistolet compact visible sur l'artwork officiel, tenu par Lucia.", edition: false },
      { name: "Hawk & Little Morgan Revolver", desc: isEn ? "Revolver inspired by the Smith & Wesson 629. Ultimate Edition custom variant." : "Revolver inspiré du Smith & Wesson 629. Version personnalisée Ultime.", edition: true },
      { name: "Mustang .357 Revolver", desc: isEn ? "Revolver inspired by the Colt Python. Seen in the hands of a biker gang." : "Revolver inspiré du Colt Python. Vu entre les mains d'un gang de motards.", edition: false },
    ],
  },
  {
    title: isEn ? "SHOTGUNS & SMGS" : "FUSILS À POMPE & MITRAILLETTES",
    accent: "primary",
    weapons: [
      { name: "Double-Barreled Shotgun", desc: isEn ? "Double-barreled shotgun. Seen used by a hunter aiming at an alligator." : "Fusil à pompe double canon. Vu utilisé par un chasseur visant un alligator.", edition: false },
      { name: "Pump Action Shotgun", desc: isEn ? "Shotgun inspired by the Mossberg 590/Remington 870. Multiple variants at Ammu-Nation." : "Fusil à pompe inspiré du Mossberg 590/Remington 870. Plusieurs variantes chez Ammu-Nation.", edition: false },
      { name: "MP5-inspired SMG", desc: isEn ? "SMG inspired by the MP5. Used by Jason and Lucia during the heist." : "Mitraillette inspirée du MP5. Utilisée par Jason et Lucia lors du braquage.", edition: false },
      { name: "MAC-10/11 SMG", desc: isEn ? "Compact SMG with Vice City skin in pre-order." : "Mitraillette compacte avec skin Vice City en précommande.", edition: false },
    ],
  },
  {
    title: isEn ? "ASSAULT RIFLES & SNIPERS" : "FUSILS D'ASSAUT & SNIPERS",
    accent: "sunset",
    weapons: [
      { name: "Duke Carbine Rifle", desc: isEn ? "Assault rifle inspired by the M4 with Duke Arms insignia. The most visible in official media." : "Fusil d'assaut inspiré du M4 avec insigne Duke Arms. Le plus visible dans les médias officiels.", edition: false },
      { name: "AK-47-inspired Assault Rifle", desc: isEn ? "Assault rifle inspired by the AK-47 with wooden variants. Visible at Ammu-Nation." : "Fusil d'assaut inspiré de l'AK-47 avec variantes en bois. Visible chez Ammu-Nation.", edition: false },
      { name: "Duke Assault Sniper Rifle", desc: isEn ? "Duke brand assault sniper rifle. Seen in the hands of a hunter/poacher." : "Fusil sniper d'assaut de la marque Duke. Vu entre les mains d'un chasseur/braconnier.", edition: false },
      { name: "Remington 700-inspired Sniper", desc: isEn ? "Bolt-action sniper inspired by the Remington 700. Used at Mount Kalaga." : "Fusil sniper à verrou inspiré du Remington 700. Utilisé au Mont Kalaga.", edition: false },
    ],
  },
  {
    title: isEn ? "HEAVY, MELEE & SPECIAL WEAPONS" : "ARMES LOURDES, MÊLÉE & SPÉCIALES",
    accent: "gold",
    weapons: [
      { name: "Grenade Launcher", desc: isEn ? "Grenade launcher used by Lucia in Trailer 2." : "Lance-grenades utilisé par Lucia dans le Trailer 2.", edition: false },
      { name: "M249-inspired LMG", desc: isEn ? "Light machine gun inspired by the M249. Picked up at Ammu-Nation." : "Mitrailleuse légère inspirée du M249. Ramassée chez Ammu-Nation.", edition: false },
      { name: "Baseball Bat", desc: isEn ? "Baseball bat visible in Port Gellhorn screenshots." : "Batte de baseball visible dans les screenshots de Port Gellhorn.", edition: false },
      { name: "Hammer", desc: isEn ? "Hammer seen in dual-wield in Trailer 1." : "Marteau vu en dual-wield dans le Trailer 1.", edition: false },
      { name: "Golf Club", desc: isEn ? "Golf club held by Cal Hampton in official screenshots." : "Club de golf tenu par Cal Hampton dans les screenshots officiels.", edition: false },
      { name: "Knife", desc: isEn ? "Knife visible near the custom revolvers." : "Couteau visible près des revolvers personnalisés.", edition: false },
      { name: "Speargun", desc: isEn ? "Speargun confirmed for underwater combat." : "Fusil harpon confirmé pour le combat sous-marin.", edition: false },
    ],
  },
];

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

export default async function ArmesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const faqs = getFaqs(isEn);
  const weaponCategories = getWeaponCategories(isEn);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "GTA 6 Weapons" : "Armes GTA 6", url: `${BASE_URL}${isEn ? "/en/weapons-gta-6" : "/armes-gta-6"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/weapons-gta-6" : "/armes-gta-6"}`),
        ]}
      />
      <SectionPage
        title={isEn ? "GTA 6 WEAPONS" : "ARMES GTA 6"}
        titleAccent={isEn ? "ALL THE —" : "TOUTES LES —"}
        subtitle={isEn
          ? "Complete guide to all officially confirmed weapons in GTA 6: pistols, rifles, snipers, heavy and special weapons. Rockstar sources."
          : "Guide complet des armes officiellement confirmées dans GTA 6 : pistolets, fusils, snipers, armes lourdes et spéciales. Sources Rockstar."
        }
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{isEn ? "Official sources only." : "Sources officielles uniquement."}</strong>{" "}
              {isEn
                ? "Each listed weapon has been identified in official trailers, Rockstar screenshots or the GTA VI website. Detailed stats will be added after the game releases."
                : "Chaque arme listée a été identifiée dans les trailers officiels, les screenshots Rockstar ou le site GTA VI. Les stats détaillées seront ajoutées après la sortie du jeu."
              }
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
                        {isEn ? "Ultimate Edition" : "Édition Ultime"}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{weapon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Weapon system */}
        <div className="mb-10 card-base p-6 border-accent-sunset/20" data-plate="teal">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-sunset mb-3">
            {isEn ? "WEAPON SYSTEM — GTA VI NEW FEATURES" : "SYSTÈME D'ARMES — NOUVEAUTÉS GTA VI"}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>{isEn ? "Limited inventory" : "Inventaire limité"}</strong> — {isEn ? "Satchel system: you can't carry all weapons at once" : "Système de sacoche : impossible de porter toutes les armes à la fois"}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>{isEn ? "Vehicle trunk" : "Coffre de véhicule"}</strong> — {isEn ? "Store weapons in the trunk and swap loadouts between missions" : "Stockez des armes dans le coffre et changez de loadout entre les missions"}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>{isEn ? "Deep customization" : "Personnalisation poussée"}</strong> — {isEn ? "Accessories, optics, finishes and engravings inspired by RDR2" : "Accessoires, optiques, finitions et gravures inspirées de RDR2"}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong>{isEn ? "Fictional brands" : "Marques fictives"}</strong> — {isEn ? "Duke, Girardi, Klose, Hawk & Little, Capo" : "Duke, Girardi, Klose, Hawk & Little, Capo"}</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="teal">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES"}
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
          <Link href={isEn ? "/en/weapons" : "/armes"} className="text-accent-primary hover:underline">
            {isEn ? "See all GTA 6 weapons →" : "Voir toutes les armes GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}