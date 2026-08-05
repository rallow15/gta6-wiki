import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { BASE_URL } from "@/lib/site";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";
import { Info, Star, CheckCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = sectionMeta({
  title: "Véhicules GTA 6 — Voitures, motos, bateaux de GTA VI",
  description:
    "Tous les véhicules officiellement confirmés dans GTA 6 (GTA VI) : sportives, supercars, muscle cars, SUV, motos et bateaux. Fiches détaillées avec inspiration réelle et source officielle.",
  path: "/vehicules",
  keywords: [
    "véhicules GTA 6",
    "voitures GTA 6",
    "voitures GTA VI",
    "meilleures voitures GTA 6",
    "supercars GTA 6",
    "motos GTA 6",
    "bateaux GTA 6",
    "Cheetah GTA 6",
    "véhicules Vice City",
  ],
});

const categoryLabels: Record<string, string> = {
  "Sportive": "Sportives & Supercars",
  "Supercar": "Supercars",
  "Muscle": "Muscle Cars",
  "SUV": "SUV & Tout-terrain",
  "Sport compact": "Sport Compacts",
  "Classique": "Classiques",
  "Moto": "Motos",
  "Bateau": "Bateaux",
};

const categoryOrder = ["Sportive", "Supercar", "Muscle", "SUV", "Sport compact", "Classique", "Moto", "Bateau"];

export default function VehiculesPage() {
  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb("Véhicules", "/vehicules"),
          itemListJsonLd(
            "Véhicules GTA 6",
            `${BASE_URL}/vehicules`,
            vehicles.map((v) => ({
              name: v.name,
              url: `${BASE_URL}/vehicules/${v.id}`,
              image: `${BASE_URL}${v.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title="VEHICULES"
        subtitle="Tous les vehicules officiellement confirmees dans GTA VI. Sources : Trailer 1 & 2, screenshots Rockstar, catalogue officiel."
      >
      <div className="mb-6 glass-card p-4 border-lagoon-cyan/20">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" />
          <p className="text-sm text-text-secondary">
            <strong className="text-lagoon-cyan">Sources officielles uniquement.</strong> Chaque vehicule liste a ete confirme par les trailers officiels, les screenshots Rockstar ou le catalogue GTA VI. Les stats detaillees seront ajoutees apres la sortie du jeu.
          </p>
        </div>
      </div>

      {categoryOrder.map((category) => {
        const categoryVehicles = vehicles.filter((v) => v.category === category);
        if (categoryVehicles.length === 0) return null;
        return (
          <div key={category} className="mb-10">
            <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
              {categoryLabels[category] || category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryVehicles.map((vehicle) => (
                <Link key={vehicle.id} href={`/vehicules/${vehicle.id}`} className="neon-glow-card shimmer-line overflow-hidden group block">
                  {/* Vehicle image */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-deep-bg-light">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
                    {vehicle.edition && (
                      <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-sunset-orange/90 text-white">
                        {vehicle.edition}
                      </span>
                    )}
                  </div>

                  {/* Vehicle info */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                        {vehicle.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                        {vehicle.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-text-muted">{vehicle.description}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-text-muted">
                      <Star className="h-3.5 w-3.5 text-sunset-orange" />
                      <span className="italic">Inspire de : {vehicle.inspired}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                      <CheckCircle className="h-3.5 w-3.5 text-lagoon-cyan" />
                      {vehicle.source}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-10 neon-glow-card-orange p-6">
        <h3 className="font-display text-lg tracking-wider text-sunset-orange mb-2">
          VEHICULES — NOUVEAUTES GTA VI
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
            <span><strong>Inventaire limite</strong> — Systeme de sacoche, impossible de porter toutes les armes et vehicules a la fois</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
            <span><strong>Coffre de vehicule</strong> — Stockez des armes et objets dans le coffre de votre voiture</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
            <span><strong>Personnalisation poussee</strong> — Rideout Customs et One-Eyed Willie&apos;s Mod Shop (Edition Ultime), restauration de voitures classiques</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
            <span><strong>Nouveaux types</strong> — Kayaks, airboats, scooters de mobilite, velos en libre-service (LomBike), donked cars</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
            <span><strong>Navigation expansive</strong> — Bateaux, yachts, jet skis, sous-marins et hydravions confirms</span>
          </li>
        </ul>
      </div>
    </SectionPage>
    </>
  );
}