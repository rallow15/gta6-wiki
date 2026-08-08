import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Locations");
  const siteName = getSiteName(locale);
  const path = t("path");

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/lieux", en: "/en/locations" },
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

export default async function LieuxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Locations");

  const linkBase = t("linkBase");
  const path = t("path");
  const sectionName = t("sectionName");

  const typeLabel = t("typeLabel");
  const zonesLabel = t("zonesLabel");

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            t("jsonLdTitle"),
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
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
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