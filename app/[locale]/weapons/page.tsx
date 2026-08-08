import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { getSiteName, getSiteLocale } from "@/lib/site";
import { getTranslations } from "next-intl/server";
import { Info, CheckCircle, ChevronRight } from "lucide-react";

interface OfficialWeapon {
  id: string;
  name: string;
  nameEn?: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  source: string;
  accent: "pink" | "orange" | "cyan" | "yellow";
}

const weapons: OfficialWeapon[] = [
  // Pistols
  { id: "girardi-es9", name: "Girardi ES9", category: "Pistolet", categoryEn: "Pistol", description: "Pistolet semi-automatique inspiré du Beretta 92FS. Arme de préférence de Jason. Variante personnalisée dans l'Édition Ultime.", descriptionEn: "Semi-automatic pistol inspired by the Beretta 92FS. Jason's preferred weapon. Custom variant in the Ultimate Edition.", source: "Trailer 2 + Screenshots officiels", accent: "cyan" },
  { id: "klose-k17", name: "Klose K17", category: "Pistolet", categoryEn: "Pistol", description: "Pistolet inspiré du Glock 17. Arme principale de Lucia. Peut tirer en mode automatique complet.", descriptionEn: "Pistol inspired by the Glock 17. Lucia's primary weapon. Can fire in full automatic mode.", source: "Trailer 2 + Screenshots officiels", accent: "cyan" },
  { id: "hawk-little-morgan", name: "Hawk & Little Morgan Revolver", category: "Revolvers", categoryEn: "Revolvers", description: "Revolver inspiré du Smith & Wesson 629. Version personnalisée pour Jason et Lucia dans l'Édition Ultime.", descriptionEn: "Revolver inspired by the Smith & Wesson 629. Custom version for Jason and Lucia in the Ultimate Edition.", source: "Screenshots officiels + Site Rockstar", accent: "yellow" },
  { id: "mustang-357", name: "Mustang .357 Revolver", category: "Revolvers", categoryEn: "Revolvers", description: "Revolver inspiré du Colt Python. Vu en possession d'un gang de motards.", descriptionEn: "Revolver inspired by the Colt Python. Seen in possession of a biker gang.", source: "Screenshots officiels", accent: "yellow" },
  { id: "nipper-38", name: "Nipper .38", category: "Pistolet", categoryEn: "Pistol", description: "Petit pistolet compact visible sur l'artwork officiel, tenu par Lucia.", descriptionEn: "Small compact pistol visible on the official artwork, held by Lucia.", source: "Artwork officiel de couverture", accent: "cyan" },
  { id: "capo-pistol", name: "Capo Pistol", category: "Pistolet", categoryEn: "Pistol", description: "Pistolet inspiré du Colt M1911. Vu entre les mains de Jason et Raul Bautista.", descriptionEn: "Pistol inspired by the Colt M1911. Seen in the hands of Jason and Raul Bautista.", source: "Screenshots officiels", accent: "cyan" },

  // Shotguns
  { id: "double-barrel-shotgun", name: "Double-Barreled Shotgun", category: "Fusil à pompe", categoryEn: "Shotgun", description: "Fusil à pompe double canon. Vu utilisé par un chasseur visant un alligator.", descriptionEn: "Double-barreled shotgun. Seen used by a hunter aiming at an alligator.", source: "Screenshots officiels", accent: "orange" },
  { id: "pump-action-shotgun", name: "Pump Action Shotgun", category: "Fusil à pompe", categoryEn: "Shotgun", description: "Fusil à pompe inspiré du Mossberg 590/Remington 870. Plusieurs variantes visibles chez Ammu-Nation.", descriptionEn: "Pump action shotgun inspired by the Mossberg 590/Remington 870. Multiple variants visible at Ammu-Nation.", source: "Trailer 2 + Screenshots officiels", accent: "orange" },

  // SMGs
  { id: "mp5-smg", name: "MP5-inspired SMG", category: "Mitraillette", categoryEn: "SMG", description: "Mitraillette inspirée du MP5. Utilisée par Jason et Lucia lors du braquage dans le Trailer 2.", descriptionEn: "SMG inspired by the MP5. Used by Jason and Lucia during the heist in Trailer 2.", source: "Trailer 2", accent: "pink" },
  { id: "mac-10", name: "MAC-10/11 SMG", category: "Mitraillette", categoryEn: "SMG", description: "Mitraillette compacte inspirée du MAC-10/11. Version avec skin Vice City en précommande.", descriptionEn: "Compact SMG inspired by the MAC-10/11. Vice City skin version available as pre-order bonus.", source: "Screenshots officiels + Précommande", accent: "pink" },

  // Assault Rifles
  { id: "duke-carbine", name: "Duke Carbine Rifle", category: "Fusil d'assaut", categoryEn: "Assault Rifle", description: "Fusil d'assaut inspiré du M4, avec l'insigne Duke Arms Company (référence Red Dead Redemption). Le fusil le plus visible dans les médias officiels.", descriptionEn: "Assault rifle inspired by the M4, with the Duke Arms Company insignia (Red Dead Redemption reference). The most visible rifle in official media.", source: "Trailer 2 + Screenshots officiels", accent: "orange" },
  { id: "ak47", name: "AK-47-inspired Assault Rifle", category: "Fusil d'assaut", categoryEn: "Assault Rifle", description: "Fusil d'assaut inspiré de l'AK-47 avec variantes en bois. Visible sur les étagères d'Ammu-Nation.", descriptionEn: "Assault rifle inspired by the AK-47 with wooden variants. Visible on Ammu-Nation shelves.", source: "Screenshots officiels", accent: "orange" },

  // Snipers
  { id: "duke-assault-sniper", name: "Duke Assault Sniper Rifle", category: "Sniper", categoryEn: "Sniper", description: "Fusil sniper d'assaut de la marque Duke. Vu entre les mains d'un chasseur/braconnier.", descriptionEn: "Duke brand assault sniper rifle. Seen in the hands of a hunter/poacher.", source: "Screenshots officiels", accent: "yellow" },
  { id: "bolt-action-sniper", name: "Remington 700-inspired Sniper", category: "Sniper", categoryEn: "Sniper", description: "Fusil sniper à verrou inspiré du Remington 700. Utilisé par des chasseurs au Mont Kalaga.", descriptionEn: "Bolt-action sniper rifle inspired by the Remington 700. Used by hunters at Mount Kalaga.", source: "Screenshots officiels", accent: "yellow" },

  // Heavy Weapons
  { id: "grenade-launcher", name: "Grenade Launcher", category: "Arme lourde", categoryEn: "Heavy Weapon", description: "Lance-grenades utilisé par Lucia pour faire exploser des voitures de police dans le Trailer 2.", descriptionEn: "Grenade launcher used by Lucia to blow up police cars in Trailer 2.", source: "Trailer 2", accent: "pink" },
  { id: "m249-lmg", name: "M249-inspired LMG", category: "Arme lourde", categoryEn: "Heavy Weapon", description: "Mitrailleuse légère inspirée du M249. Vue être ramassée par le propriétaire du Ammu-Nation dans le Trailer 2.", descriptionEn: "Light machine gun inspired by the M249. Seen being picked up by the Ammu-Nation owner in Trailer 2.", source: "Trailer 2", accent: "pink" },

  // Melee
  { id: "baseball-bat", name: "Baseball Bat", category: "Melee", categoryEn: "Melee", description: "Batte de baseball vue dans les captures d'écran de Port Gellhorn.", descriptionEn: "Baseball bat seen in Port Gellhorn screenshots.", source: "Screenshots officiels", accent: "orange" },
  { id: "hammer", name: "Hammer", category: "Melee", categoryEn: "Melee", description: "Marteau vu en dual-wield dans le Trailer 1.", descriptionEn: "Hammer seen dual-wielded in Trailer 1.", source: "Trailer 1", accent: "orange" },
  { id: "golf-club", name: "Golf Club", category: "Melee", categoryEn: "Melee", description: "Club de golf tenu par Cal Hampton dans les captures d'écran officielles.", descriptionEn: "Golf club held by Cal Hampton in official screenshots.", source: "Screenshots officiels", accent: "orange" },
  { id: "knife", name: "Knife", category: "Melee", categoryEn: "Melee", description: "Couteau visible sur une table à côté des revolvers personnalisés.", descriptionEn: "Knife visible on a table next to the custom revolvers.", source: "Screenshots officiels", accent: "orange" },
  { id: "speargun", name: "Speargun", category: "Special", categoryEn: "Special", description: "Fusil harpon confirmé pour le combat sous-marin.", descriptionEn: "Speargun confirmed for underwater combat.", source: "Screenshots officiels", accent: "cyan" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Weapons");
  const siteName = getSiteName(locale);
  const path = t("path");

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/armes", en: "/en/weapons" },
    },
    keywords: t.raw("keywords"),
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

export default async function ArmesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Weapons");

  const path = t("path");
  const sectionName = t("sectionName");

  const categoryOrder = t.raw("categoryOrder") as string[];
  const categoryLabels: Record<string, string> = {};
  for (const cat of categoryOrder) {
    categoryLabels[cat] = t(`categories.${cat}`);
  }

  const pageSubtitle = t("pageSubtitle");

  const noticeStrong = t("noticeStrong");
  const noticeRest = t("noticeRest");

  const whatsNewTitle = t("whatsNewTitle");
  const whatsNewKeys = [0, 1, 2, 3, 4] as const;
  const whatsNew = whatsNewKeys.map((i) => ({
    title: t(`whatsNew.${i}.title`),
    desc: t(`whatsNew.${i}.desc`),
  }));

  return (
    <>
      <JsonLd data={sectionBreadcrumb(sectionName, path, locale)} />
      <SectionPage
        title={t("pageTitle")}
        subtitle={pageSubtitle}
      >
        <div className="mb-6 neon-glow-card-cyan p-4 border-lagoon-cyan/20">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-lagoon-cyan">{noticeStrong}</strong> {noticeRest}
            </p>
          </div>
        </div>

        {categoryOrder.map((categoryId) => {
          const categoryWeapons = weapons.filter(w => locale === "en" ? w.categoryEn === categoryId : w.category === categoryId);
          if (categoryWeapons.length === 0) return null;
          return (
            <div key={categoryId} className="mb-10">
              <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
                {categoryLabels[categoryId] || categoryId}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {categoryWeapons.map((weapon) => (
                  <div key={weapon.id} className="neon-glow-card shimmer-line p-5 group">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-text-primary">{weapon.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                        {locale === "en" ? weapon.categoryEn : weapon.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-text-muted">{locale === "en" ? weapon.descriptionEn : weapon.description}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                      <CheckCircle className="h-3.5 w-3.5 text-lagoon-cyan" />
                      {weapon.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-10 neon-glow-card-orange p-6 border-sunset-orange/20">
          <h3 className="font-display text-lg tracking-wider text-sunset-orange mb-2">
            {whatsNewTitle}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {whatsNew.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
                <span><strong>{item.title}</strong> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionPage>
    </>
  );
}