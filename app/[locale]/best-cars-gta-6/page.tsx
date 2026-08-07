import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);

  const titles: Record<string, string> = {
    fr: "Meilleures voitures GTA 6 — Classement des véhicules GTA VI",
    en: "Best Cars in GTA 6 — Top Vehicles Ranked",
  };
  const descriptions: Record<string, string> = {
    fr: "Classement des meilleures voitures de GTA 6 (GTA VI) : sportives, supercars, muscle cars et SUV confirmés. Fiches détaillées, inspiration réelle et source officielle.",
    en: "Ranking of the best cars in GTA 6 (GTA VI): sports cars, supercars, muscle cars and confirmed SUVs. Detailed specs, real-world inspiration and official sources.",
  };
  const keywords = isEn
    ? [
        "best cars GTA 6",
        "fastest cars GTA 6",
        "GTA 6 vehicles",
        "GTA 6 supercars",
        "GTA 6 car ranking",
        "Cheetah GTA 6",
        "Vice City cars",
      ]
    : [
        "meilleures voitures GTA 6",
        "voitures rapides GTA 6",
        "voitures GTA VI",
        "supercars GTA 6",
        "classement voitures GTA 6",
        "Cheetah GTA 6",
        "voitures Vice City",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6",
      languages: {
        fr: "/meilleures-voitures-gta-6",
        en: "/en/best-cars-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6",
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

// Editorial ranking (sportives/supercars first, then the rest by category).
const ranking = [
  ...vehicles.filter((v) => v.category === "Sportive"),
  ...vehicles.filter((v) => v.category === "Muscle"),
  ...vehicles.filter((v) => v.category === "SUV"),
  ...vehicles.filter((v) => v.category === "Classique"),
  ...vehicles.filter((v) => v.category === "Moto"),
  ...vehicles.filter((v) => v.category === "Bateau"),
];

const categoryMap: Record<string, string> = {
  Sportive: "Sports",
  Muscle: "Muscle",
  SUV: "SUV",
  Classique: "Classic",
  Moto: "Motorcycle",
  Bateau: "Boat",
};

export default async function MeilleuresVoituresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const vehicleBasePath = isEn ? "/vehicles" : "/vehicules";

  const faqs = [
    {
      question: isEn
        ? "What is the best car in GTA 6?"
        : "Quelle est la meilleure voiture de GTA 6 ?",
      answer: isEn
        ? "The Grotti Cheetah '95 (Ultimate edition), inspired by the Ferrari Testarossa, is one of the most iconic sports cars confirmed in GTA 6. Exact performance specs will be known when the game releases on November 19, 2026."
        : "La Grotti Cheetah '95 (édition Ultime), inspirée de la Ferrari Testarossa, est l'une des sportives les plus emblématiques confirmées dans GTA 6. Les performances exactes seront connues à la sortie du jeu le 19 novembre 2026.",
    },
    {
      question: isEn
        ? "Can you customize cars in GTA 6?"
        : "Peut-on personnaliser les voitures dans GTA 6 ?",
      answer: isEn
        ? "Yes. GTA 6 features customization shops like Rideout Customs and One-Eyed Willie's Mod Shop (Ultimate edition), as well as classic car restoration."
        : "Oui. GTA 6 intègre des boutiques de customisation comme Rideout Customs et One-Eyed Willie's Mod Shop (édition Ultime), ainsi que la restauration de voitures classiques.",
    },
    {
      question: isEn
        ? "Are there boats in GTA 6?"
        : "Y a-t-il des bateaux dans GTA 6 ?",
      answer: isEn
        ? "Yes. GTA 6 confirms boats, yachts, jet skis, submarines and seaplanes for exploring the waters of Leonida, like the Shitzu Squalo."
        : "Oui. GTA 6 confirme bateaux, yachts, jet skis, sous-marins et hydravions pour explorer les eaux de Leonida, comme le Shitzu Squalo.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Vehicles" : "Véhicules", url: `${BASE_URL}${vehicleBasePath}` },
            { name: isEn ? "Best Cars in GTA 6" : "Meilleures voitures GTA 6", url: `${BASE_URL}${isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6"}` },
          ]),
          itemListJsonLd(
            isEn ? "Best Cars in GTA 6" : "Meilleures voitures GTA 6",
            `${BASE_URL}${isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6"}`,
            ranking.map((v) => ({
              name: v.name,
              url: `${BASE_URL}${vehicleBasePath}/${v.id}`,
              image: `${BASE_URL}${v.image}`,
            })),
          ),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/best-cars-gta-6" : "/meilleures-voitures-gta-6"}`),
        ]}
      />
      <SectionPage
        title="GTA 6"
        titleAccent={isEn ? "BEST CARS" : "MEILLEURES VOITURES"}
        subtitle={isEn
          ? "Ranking of the best vehicles officially confirmed in GTA VI. Official Rockstar sources."
          : "Classement des meilleurs véhicules officiellement confirmés dans GTA VI. Sources officielles Rockstar."}
      >
        <div className="space-y-4">
          {ranking.map((vehicle, i) => (
            <Link
              key={vehicle.id}
              href={`${vehicleBasePath}/${vehicle.id}`}
              className="neon-glow-card shimmer-line overflow-hidden group block flex flex-col sm:flex-row"
            >
              <div className="relative h-40 sm:h-32 sm:w-56 w-full shrink-0 overflow-hidden bg-deep-bg-light">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 224px"
                />
                <span className="absolute top-3 left-3 font-display text-2xl font-bold text-white drop-shadow-lg">
                  #{i + 1}
                </span>
                {vehicle.edition && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-sunset-orange/90 text-white">
                    {vehicle.edition}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                    {vehicle.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                    {isEn ? (categoryMap[vehicle.category] ?? vehicle.category) : vehicle.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-text-muted">{vehicle.description}</p>
                <p className="mt-2 text-xs italic text-sunset-orange">
                  {isEn ? `Inspired by: ${vehicle.inspired}` : `Inspiré de : ${vehicle.inspired}`}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
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
          <Link href={vehicleBasePath} className="text-neon-pink hover:underline">
            {isEn ? "See all GTA 6 vehicles →" : "Voir tous les véhicules GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}