import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const path = isEn ? "/en/locations" : "/lieux";

  const title = isEn
    ? "GTA 6 Locations — Vice City, Leonida & GTA VI Maps"
    : "Lieux GTA 6 — Vice City, Leonida & cartes de GTA VI";
  const description = isEn
    ? "All locations in GTA 6 (GTA VI): Vice City, the Leonida Keys, Grassrivers swamps, Port Gellhorn, Ambrosia and Mount Kalaga. Explore the fictional state of Leonida."
    : "Tous les lieux de GTA 6 (GTA VI) : Vice City, les Leonida Keys, les marais de Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga. Explorez l'état fictif de Leonida.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/lieux", en: "/en/locations" },
    },
    keywords: isEn
      ? ["GTA 6 locations", "Vice City GTA 6", "Leonida GTA 6", "GTA 6 map", "Leonida Keys", "Grassrivers", "Port Gellhorn"]
      : ["lieux GTA 6", "Vice City GTA 6", "Leonida GTA 6", "carte GTA 6", "map GTA 6", "Leonida Keys", "Grassrivers", "Port Gellhorn"],
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

export default async function LieuxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const linkBase = isEn ? "/locations" : "/lieux";
  const path = isEn ? "/en/locations" : "/lieux";
  const sectionName = isEn ? "Locations" : "Lieux";

  const typeLabel = isEn ? "Type" : "Type";
  const zonesLabel = isEn ? "Zones" : "Zones";

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            isEn ? "GTA 6 Locations" : "Lieux GTA 6",
            `${BASE_URL}${path}`,
            locations.map((l) => ({
              name: l.name,
              url: `${BASE_URL}/${linkBase}/${l.id}`,
              image: `${BASE_URL}${l.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title={isEn ? "LOCATIONS" : "LIEUX"}
        subtitle={isEn
          ? "Explore Vice City, the Keys, the swamps and every corner of Leonida."
          : "Explorez Vice City, les Keys, les marais et tous les recoins de Leonida."}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <GameCard
              key={loc.id}
              title={loc.name}
              description={loc.description}
              href={`/${linkBase}/${loc.id}`}
              image={loc.image}
              accent={loc.id === "vice-city" ? "pink" : loc.id === "leonida-keys" ? "cyan" : "orange"}
              stats={[
                { label: typeLabel, value: loc.type },
                { label: zonesLabel, value: `${loc.features.length}` },
              ]}
            />
          ))}
        </div>
      </SectionPage>
    </>
  );
}