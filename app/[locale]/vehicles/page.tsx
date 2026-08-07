import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";
import { Info, Star, CheckCircle, ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/vehicles" : "/vehicules";

  const title = isEn ? "GTA 6 Vehicles — Cars, Bikes, Boats of GTA VI" : "Véhicules GTA 6 — Voitures, motos, bateaux de GTA VI";
  const description = isEn
    ? "All officially confirmed vehicles in GTA 6 (GTA VI): sports cars, supercars, muscle cars, SUVs, bikes and boats. Detailed specs with real-world inspiration."
    : "Tous les véhicules officiellement confirmés dans GTA 6 (GTA VI) : sportives, supercars, muscle cars, SUV, motos et bateaux. Fiches détaillées avec inspiration réelle et source officielle.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/vehicules", en: "/en/vehicles" },
    },
    keywords: isEn
      ? ["GTA 6 vehicles", "GTA 6 cars", "GTA VI cars", "best cars GTA 6", "supercars GTA 6", "GTA 6 bikes", "GTA 6 boats", "Cheetah GTA 6", "Vice City vehicles"]
      : ["véhicules GTA 6", "voitures GTA 6", "voitures GTA VI", "meilleures voitures GTA 6", "supercars GTA 6", "motos GTA 6", "bateaux GTA 6", "Cheetah GTA 6", "véhicules Vice City"],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: ogLocale,
      siteName,
    },
  };
}

const categoryLabelsFr: Record<string, string> = {
  "Sportive": "Sportives & Supercars",
  "Supercar": "Supercars",
  "Muscle": "Muscle Cars",
  "SUV": "SUV & Tout-terrain",
  "Sport compact": "Sport Compacts",
  "Classique": "Classiques",
  "Moto": "Motos",
  "Bateau": "Bateaux",
};

const categoryLabelsEn: Record<string, string> = {
  "Sportive": "Sports & Supercars",
  "Supercar": "Supercars",
  "Muscle": "Muscle Cars",
  "SUV": "SUVs & Off-road",
  "Sport compact": "Sport Compacts",
  "Classique": "Classics",
  "Moto": "Motorcycles",
  "Bateau": "Boats",
};

const categoryOrder = ["Sportive", "Supercar", "Muscle", "SUV", "Sport compact", "Classique", "Moto", "Bateau"];

export default async function VehiculesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const categoryLabels = isEn ? categoryLabelsEn : categoryLabelsFr;
  const path = isEn ? "/en/vehicles" : "/vehicules";
  const linkBase = isEn ? "/vehicles" : "/vehicules";
  const inspiredLabel = isEn ? "Inspired by:" : "Inspire de :";
  const sectionName = isEn ? "Vehicles" : "Véhicules";

  const pageSubtitle = isEn
    ? "All vehicles officially confirmed in GTA VI. Sources: Trailer 1 & 2, Rockstar screenshots, official catalog."
    : "Tous les véhicules officiellement confirmés dans GTA VI. Sources : Trailer 1 & 2, screenshots Rockstar, catalogue officiel.";

  const noticeStrong = isEn
    ? "Official sources only."
    : "Sources officielles uniquement.";
  const noticeRest = isEn
    ? "Each listed vehicle has been confirmed by official trailers, Rockstar screenshots or the GTA VI catalog. Detailed stats will be added after the game releases."
    : "Chaque véhicule listé a été confirmé par les trailers officiels, les screenshots Rockstar ou le catalogue GTA VI. Les stats détaillées seront ajoutées après la sortie du jeu.";

  const whatsNewTitle = isEn ? "VEHICLES — GTA VI FEATURES" : "VÉHICULES — NOUVEAUTÉS GTA VI";
  const whatsNew = isEn
    ? [
        { title: "Limited inventory", desc: "Bag system — can't carry all weapons and vehicles at once" },
        { title: "Vehicle trunk", desc: "Store weapons and items in your car's trunk" },
        { title: "Deep customization", desc: "Rideout Customs and One-Eyed Willie's Mod Shop (Ultimate Edition), classic car restoration" },
        { title: "New types", desc: "Kayaks, airboats, mobility scooters, rental bikes (LomBike), donked cars" },
        { title: "Expansive navigation", desc: "Boats, yachts, jet skis, submarines and seaplanes confirmed" },
      ]
    : [
        { title: "Inventaire limité", desc: "Système de sacoche, impossible de porter toutes les armes et véhicules à la fois" },
        { title: "Coffre de véhicule", desc: "Stockez des armes et objets dans le coffre de votre voiture" },
        { title: "Personnalisation poussée", desc: "Rideout Customs et One-Eyed Willie's Mod Shop (Édition Ultime), restauration de voitures classiques" },
        { title: "Nouveaux types", desc: "Kayaks, airboats, scooters de mobilité, vélos en libre-service (LomBike), donked cars" },
        { title: "Navigation expansive", desc: "Bateaux, yachts, jet skis, sous-marins et hydravions confirmés" },
      ];

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            isEn ? "GTA 6 Vehicles" : "Véhicules GTA 6",
            `${BASE_URL}${path}`,
            vehicles.map((v) => ({
              name: v.name,
              url: `${BASE_URL}/${isEn ? "vehicles" : "vehicules"}/${v.id}`,
              image: `${BASE_URL}${v.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title={isEn ? "VEHICLES" : "VÉHICULES"}
        subtitle={pageSubtitle}
      >
        <div className="mb-6 glass-card p-4 border-lagoon-cyan/20">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-lagoon-cyan">{noticeStrong}</strong> {noticeRest}
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
                  <Link key={vehicle.id} href={`/${linkBase}/${vehicle.id}`} className="neon-glow-card shimmer-line overflow-hidden group block">
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
                        <span className="italic">{inspiredLabel} {vehicle.inspired}</span>
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