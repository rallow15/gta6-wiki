import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { characters } from "@/lib/characters";
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
  const t = await getTranslations("Characters");
  const siteName = getSiteName(locale);
  const path = t("path");

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/personnages", en: "/en/characters" },
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

export default async function PersonnagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Characters");

  const linkBase = t("linkBase");
  const path = t("path");
  const sectionName = t("sectionName");

  const protagonists = characters.filter((c) => c.role === "Protagoniste jouable");
  const others = characters.filter((c) => c.role !== "Protagoniste jouable");

  const playableLabel = t("playableLabel");
  const otherLabel = t("otherLabel");
  const originLabel = t("originLabel");
  const roleLabel = t("roleLabel");

  const roleTranslations = t.raw("roleTranslations") as Record<string, string>;

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            t("jsonLdTitle"),
            `${BASE_URL}${path}`,
            characters.map((c) => ({
              name: c.name,
              url: `${BASE_URL}/${linkBase}/${c.id}`,
              image: `${BASE_URL}${c.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      >
        <div className="mb-10">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-4 border-b border-sunset-orange/20 pb-2">
            {playableLabel}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {protagonists.map((char) => (
              <GameCard
                key={char.id}
                title={char.name}
                description={char.description}
                href={`/${linkBase}/${char.id}`}
                image={char.image}
                accent="pink"
                stats={[
                  { label: originLabel, value: char.origin },
                  { label: roleLabel, value: roleTranslations[char.role] ?? char.role },
                ]}
              />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
            {otherLabel}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((char) => (
              <GameCard
                key={char.id}
                title={char.name}
                description={char.description}
                href={`/${linkBase}/${char.id}`}
                image={char.image}
                accent={char.role === "Antagoniste" ? "orange" : "cyan"}
                stats={[
                  { label: originLabel, value: char.origin },
                  { label: roleLabel, value: roleTranslations[char.role] ?? char.role },
                ]}
              />
            ))}
          </div>
        </div>
      </SectionPage>
    </>
  );
}