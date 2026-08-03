import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";

interface OfficialWeapon {
  id: string;
  name: string;
  category: string;
  description: string;
  source: string;
  accent: "pink" | "orange" | "cyan" | "yellow";
}

const weapons: OfficialWeapon[] = [
  // Pistolets
  { id: "girardi-es9", name: "Girardi ES9", category: "Pistolet", description: "Pistolet semi-automatique inspire du Beretta 92FS. Arme de preference de Jason. Variante personnalisee dans l'Edition Ultime.", source: "Trailer 2 + Screenshots officiels", accent: "cyan" },
  { id: "klose-k17", name: "Klose K17", category: "Pistolet", description: "Pistolet inspire du Glock 17. Arme principale de Lucia. Peut tirer en mode automatique complet.", source: "Trailer 2 + Screenshots officiels", accent: "cyan" },
  { id: "hawk-little-morgan", name: "Hawk & Little Morgan Revolver", category: "Revolvers", description: "Revolver inspire du Smith & Wesson 629. Version personnalisee pour Jason et Lucia dans l'Edition Ultime.", source: "Screenshots officiels + Site Rockstar", accent: "yellow" },
  { id: "mustang-357", name: "Mustang .357 Revolver", category: "Revolvers", description: "Revolver inspire du Colt Python. Vu en possession d'un gang de motards.", source: "Screenshots officiels", accent: "yellow" },
  { id: "nipper-38", name: "Nipper .38", category: "Pistolet", description: "Petit pistolet compact visible sur l'artwork officiel, tenu par Lucia.", source: "Artwork officiel de couverture", accent: "cyan" },
  { id: "capo-pistol", name: "Capo Pistol", category: "Pistolet", description: "Pistolet inspire du Colt M1911. Vu entre les mains de Jason et Raul Bautista.", source: "Screenshots officiels", accent: "cyan" },

  // Fusils a pompe
  { id: "double-barrel-shotgun", name: "Double-Barreled Shotgun", category: "Fusil a pompe", description: "Fusil a pompe double canon. Vu utilise par un chasseur visant un alligator.", source: "Screenshots officiels", accent: "orange" },
  { id: "pump-action-shotgun", name: "Pump Action Shotgun", category: "Fusil a pompe", description: "Fusil a pompe inspire du Mossberg 590/Remington 870. Plusieurs variantes visibles chez Ammu-Nation.", source: "Trailer 2 + Screenshots officiels", accent: "orange" },

  // SMGs
  { id: "mp5-smg", name: "MP5-inspired SMG", category: "Mitraillette", description: "Mitraillette inspiree du MP5. Utilisee par Jason et Lucia lors du braquage dans le Trailer 2.", source: "Trailer 2", accent: "pink" },
  { id: "mac-10", name: "MAC-10/11 SMG", category: "Mitraillette", description: "Mitraillette compacte inspiree du MAC-10/11. Version avec skin Vice City en precommande.", source: "Screenshots officiels + Precommande", accent: "pink" },

  // Fusils d'assaut
  { id: "duke-carbine", name: "Duke Carbine Rifle", category: "Fusil d'assaut", description: "Fusil d'assaut inspire du M4, avec l'insigne Duke Arms Company (reference Red Dead Redemption). Le fusil le plus visible dans les medias officiels.", source: "Trailer 2 + Screenshots officiels", accent: "orange" },
  { id: "ak47", name: "AK-47-inspired Assault Rifle", category: "Fusil d'assaut", description: "Fusil d'assaut inspire de l'AK-47 avec variantes en bois. Visible sur les etageres d'Ammu-Nation.", source: "Screenshots officiels", accent: "orange" },

  // Snipers
  { id: "duke-assault-sniper", name: "Duke Assault Sniper Rifle", category: "Sniper", description: "Fusil sniper d'assaut de la marque Duke. Vu entre les mains d'un chasseur/braconnier.", source: "Screenshots officiels", accent: "yellow" },
  { id: "bolt-action-sniper", name: "Remington 700-inspired Sniper", category: "Sniper", description: "Fusil sniper a verrou inspire du Remington 700. Utilise par des chasseurs au Mont Kalaga.", source: "Screenshots officiels", accent: "yellow" },

  // Armes lourdes
  { id: "grenade-launcher", name: "Grenade Launcher", category: "Arme lourde", description: "Lance-grenades utilise par Lucia pour faire exploser des voitures de police dans le Trailer 2.", source: "Trailer 2", accent: "pink" },
  { id: "m249-lmg", name: "M249-inspired LMG", category: "Arme lourde", description: "Mitrailleuse legere inspiree du M249. Vue etre ramassee par le proprietaire du Ammu-Nation dans le Trailer 2.", source: "Trailer 2", accent: "pink" },

  // Armes de melee
  { id: "baseball-bat", name: "Baseball Bat", category: "Melee", description: "Batte de baseball vue dans les captures d'ecran de Port Gellhorn.", source: "Screenshots officiels", accent: "orange" },
  { id: "hammer", name: "Hammer", category: "Melee", description: "Marteau vu en dual-wield dans le Trailer 1.", source: "Trailer 1", accent: "orange" },
  { id: "golf-club", name: "Golf Club", category: "Melee", description: "Club de golf tenu par Cal Hampton dans les captures d'ecran officielles.", source: "Screenshots officiels", accent: "orange" },
  { id: "knife", name: "Knife", category: "Melee", description: "Couteau visible sur une table a cote des revolvers personnalises.", source: "Screenshots officiels", accent: "orange" },
  { id: "speargun", name: "Speargun", category: "Special", description: "Fusil harpon confirme pour le combat sous-marin.", source: "Screenshots officiels", accent: "cyan" },
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "Pistolet", label: "Pistolets" },
  { id: "Revolvers", label: "Revolvers" },
  { id: "Fusil a pompe", label: "Fusils a pompe" },
  { id: "Mitraillette", label: "Mitraillettes" },
  { id: "Fusil d'assaut", label: "Fusils d'assaut" },
  { id: "Sniper", label: "Snipers" },
  { id: "Arme lourde", label: "Armes lourdes" },
  { id: "Melee", label: "Melee" },
  { id: "Special", label: "Special" },
];

export const metadata: Metadata = sectionMeta({
  title: "Armes GTA 6 — Arsenal complet de GTA VI",
  description:
    "Toutes les armes officiellement confirmées dans GTA 6 (GTA VI) : pistolets, revolvers, fusils à pompe, mitraillettes, fusils d'assaut, snipers et armes lourdes. Sources officielles Rockstar.",
  path: "/armes",
  keywords: [
    "armes GTA 6",
    "armes GTA VI",
    "arsenal GTA 6",
    "pistolets GTA 6",
    "sniper GTA 6",
    "fusil d'assaut GTA 6",
    "armes Vice City",
  ],
});

export default function ArmesPage() {
  return (
    <>
      <JsonLd data={sectionBreadcrumb("Armes", "/armes")} />
      <SectionPage
        title="ARMES"
        subtitle="Toutes les armes officiellement confirmees dans GTA VI. Sources : Trailer 1 & 2, screenshots officiels Rockstar."
      >
      <div className="mb-6 neon-glow-card-cyan p-4 border-lagoon-cyan/20">
        <div className="flex items-start gap-3">
          <svg className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-sm text-text-secondary">
            <strong className="text-lagoon-cyan">Sources officielles uniquement.</strong> Chaque arme listee ici a ete confirme par les trailers officiels, les screenshots Rockstar ou le site GTA VI. Les stats detaillees seront ajoutees apres la sortie du jeu.
          </p>
        </div>
      </div>

      {categories.filter(c => c.id !== "all").map((category) => {
        const categoryWeapons = weapons.filter(w => w.category === category.id);
        if (categoryWeapons.length === 0) return null;
        return (
          <div key={category.id} className="mb-10">
            <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
              {category.label}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {categoryWeapons.map((weapon) => (
                <div key={weapon.id} className="neon-glow-card shimmer-line p-5 group">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-text-primary">{weapon.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                      {weapon.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{weapon.description}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                    <svg className="h-3.5 w-3.5 text-lagoon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
          SYSTEME D'ARMES — NOUVEAUTES GTA VI
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <span className="text-sunset-orange mt-0.5">&#x25B8;</span>
            <span><strong>Inventaire limite</strong> — Systeme de sacoche, impossible de porter toutes les armes a la fois</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sunset-orange mt-0.5">&#x25B8;</span>
            <span><strong>Coffre de vehicule</strong> — Stockez des armes dans le coffre de votre voiture et changez de loadout entre les missions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sunset-orange mt-0.5">&#x25B8;</span>
            <span><strong>Noms de marques</strong> — Les armes portent des noms de marques fictives (Duke, Girardi, Klose, Hawk & Little, Capo)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sunset-orange mt-0.5">&#x25B8;</span>
            <span><strong>Personnalisation poussee</strong> — Accessoires, optiques, finitions et gravures sur chaque arme (inspire de RDR2)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sunset-orange mt-0.5">&#x25B8;</span>
            <span><strong>Edition Ultime</strong> — Variantes personnalisees exclusives (Girardi ES9, Klose K17, Hawk & Little Morgan Revolver)</span>
          </li>
        </ul>
      </div>
    </SectionPage>
    </>
  );
}