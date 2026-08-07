import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
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
    fr: "Carte GTA 6 — Vice City & Leonida, carte de GTA VI",
    en: "GTA 6 Map — Vice City & Leonida Map",
  };
  const descriptions: Record<string, string> = {
    fr: "Carte de GTA 6 (GTA VI) : Vice City, les Leonida Keys, les marais de Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga. Explorez toutes les régions de l'état fictif de Leonida.",
    en: "GTA 6 (GTA VI) map: Vice City, the Leonida Keys, Grassrivers swamps, Port Gellhorn, Ambrosia and Mount Kalaga. Explore every region of the fictional state of Leonida.",
  };
  const keywords = isEn
    ? [
        "GTA 6 map",
        "GTA 6 map locations",
        "Vice City GTA 6 map",
        "Leonida GTA 6 map",
        "GTA 6 regions",
        "GTA VI map",
        "Vice City GTA 6",
      ]
    : [
        "carte GTA 6",
        "map GTA 6",
        "carte Vice City GTA 6",
        "carte Leonida GTA 6",
        "régions GTA 6",
        "map GTA VI",
        "Vice City GTA 6",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6",
      languages: {
        fr: "/carte-vice-city-gta-6",
        en: "/en/vice-city-map-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6",
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const typeMap: Record<string, string> = {
  Metropole: "Metropolis",
  Archipel: "Archipelago",
  Marais: "Swamps",
  Port: "Port",
  "Quartier residentiel": "Residential District",
  Nature: "Nature",
};

const featureMap: Record<string, string> = {
  "Marais salins": "Salt marshes",
  Mangroves: "Mangroves",
  "Campements caches": "Hidden camps",
  Entrepots: "Warehouses",
  Conteneurs: "Containers",
  "Zone industrielle": "Industrial zone",
  Manoirs: "Mansions",
  "Country club": "Country club",
  "Residences de luxe": "Luxury residences",
  "Sentiers de randonnee": "Hiking trails",
  Lacs: "Lakes",
  "Cabanes isolees": "Isolated cabins",
};

export default async function CarteViceCityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const lieuxPath = isEn ? "/locations" : "/lieux";

  const faqs = [
    {
      question: isEn
        ? "What city is GTA 6 set in?"
        : "Dans quelle ville se déroule GTA 6 ?",
      answer: isEn
        ? "GTA 6 is set primarily in Vice City, inspired by Miami, within the fictional state of Leonida inspired by Florida."
        : "GTA 6 se déroule principalement à Vice City, inspirée de Miami, au sein de l'état fictif de Leonida inspiré de la Floride.",
    },
    {
      question: isEn
        ? "What regions make up the GTA 6 map?"
        : "Quelles régions composent la carte de GTA 6 ?",
      answer: isEn
        ? "The GTA 6 map (Leonida) includes Vice City, the Leonida Keys, the Grassrivers swamps (Everglades), the industrial port of Port Gellhorn, the upscale residential area of Ambrosia, and the Mount Kalaga national park."
        : "La carte de GTA 6 (Leonida) comprend Vice City, les Leonida Keys, les marais de Grassrivers (Everglades), le port industriel de Port Gellhorn, le quartier résidentiel d'Ambrosia et le parc national du Mont Kalaga.",
    },
    {
      question: isEn
        ? "Is the GTA 6 map bigger than GTA V?"
        : "La carte de GTA 6 est-elle plus grande que GTA V ?",
      answer: isEn
        ? "Rockstar describes Leonida as the biggest and most immersive evolution in the series. The map includes city, beaches, swamps, mountains and a tropical archipelago."
        : "Rockstar décrit Leonida comme la plus grande et la plus immersive évolution de la série. La carte inclut ville, plages, marais, montagnes et archipel tropical.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Locations" : "Lieux", url: `${BASE_URL}${lieuxPath}` },
            { name: isEn ? "GTA 6 Map" : "Carte GTA 6", url: `${BASE_URL}${isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6"}` },
          ]),
          itemListJsonLd(
            isEn ? "GTA 6 Map Regions" : "Régions de la carte GTA 6",
            `${BASE_URL}${isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6"}`,
            locations.map((l) => ({
              name: l.name,
              url: `${BASE_URL}${lieuxPath}/${l.id}`,
              image: `${BASE_URL}${l.image}`,
            })),
          ),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/vice-city-map-gta-6" : "/carte-vice-city-gta-6"}`),
        ]}
      />
      <SectionPage
        title={isEn ? "GTA 6 MAP" : "CARTE GTA 6"}
        titleAccent={isEn ? "VICE CITY &" : "VICE CITY &"}
        subtitle={isEn
          ? "Explore Vice City and all the regions of the fictional state of Leonida."
          : "Explorez Vice City et toutes les régions de l'état fictif de Leonida."}
      >
        <div className="mb-8 neon-glow-card-cyan p-6 sm:p-8 border-lagoon-cyan/20">
          <h2 className="font-display text-2xl tracking-wider text-lagoon-cyan mb-3">
            {isEn ? "THE STATE OF LEONIDA" : "L'ÉTAT DE LEONIDA"}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            {isEn ? (
              <>
                GTA 6 takes place in the fictional state of <strong className="text-lagoon-cyan">Leonida</strong>, inspired by Florida. At its heart lies <strong className="text-neon-pink">Vice City</strong>, a neon-lit metropolis inspired by Miami. Surrounding it, a tropical archipelago, swamps, an industrial port, upscale residential neighborhoods and wild mountains make up a vast and varied map.
              </>
            ) : (
              <>
                GTA 6 se déroule dans l&apos;état fictif de <strong className="text-lagoon-cyan">Leonida</strong>, inspiré de la Floride. Au cœur se trouve <strong className="text-neon-pink">Vice City</strong>, métropole néon inspirée de Miami. Autour, un archipel tropical, des marais, un port industriel, des quartiers résidentiels huppés et des montagnes sauvages composent une carte vaste et variée.
              </>
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`${lieuxPath}/${loc.id}`}
              className="neon-glow-card shimmer-line overflow-hidden group block"
            >
              <div className="relative h-44 w-full overflow-hidden bg-deep-bg-light">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-deep-bg/80 text-lagoon-cyan border border-lagoon-cyan/30">
                  {isEn ? (typeMap[loc.type] ?? loc.type) : loc.type}
                </span>
                <h3 className="absolute bottom-3 left-3 font-display text-xl tracking-wider text-white drop-shadow-lg">
                  {loc.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-text-muted">{loc.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {loc.features.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                      {isEn ? (featureMap[f] ?? f) : f}
                    </span>
                  ))}
                </div>
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
          <Link href={lieuxPath} className="text-neon-pink hover:underline">
            {isEn ? "See all GTA 6 locations →" : "Voir tous les lieux GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}