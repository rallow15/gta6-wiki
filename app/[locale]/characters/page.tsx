import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { characters } from "@/lib/characters";
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
  const path = isEn ? "/en/characters" : "/personnages";

  const title = isEn
    ? "GTA 6 Characters — Jason, Lucia & All Characters"
    : "Personnages GTA 6 — Jason, Lucia & tous les personnages";
  const description = isEn
    ? "All characters in GTA 6 (GTA VI): Jason Duval and Lucia Caminos (playable protagonists), Raul Bautista (antagonist), Cal Hampton, Boobie Ike, Dre'Quan Priest and Brian Heder. Bios, stats and relationships."
    : "Tous les personnages de GTA 6 (GTA VI) : Jason Duval et Lucia Caminos (protagonistes jouables), Raul Bautista (antagoniste), Cal Hampton, Boobie Ike, Dre'Quan Priest et Brian Heder. Biographies, stats et relations.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/personnages", en: "/en/characters" },
    },
    keywords: isEn
      ? ["GTA 6 characters", "GTA VI characters", "Jason Duval", "Lucia Caminos", "Raul Bautista", "GTA 6 protagonists", "GTA 6 heroes"]
      : ["personnages GTA 6", "personnages GTA VI", "Jason Duval", "Lucia Caminos", "Raul Bautista", "protagonistes GTA 6", "héros GTA 6"],
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
  const isEn = locale === "en";
  const linkBase = isEn ? "/characters" : "/personnages";
  const path = isEn ? "/en/characters" : "/personnages";
  const sectionName = isEn ? "Characters" : "Personnages";

  const protagonists = characters.filter((c) => c.role === "Protagoniste jouable");
  const others = characters.filter((c) => c.role !== "Protagoniste jouable");

  const playableLabel = isEn ? "PLAYABLE PROTAGONISTS" : "PROTAGONISTES JOUABLES";
  const otherLabel = isEn ? "OTHER CHARACTERS" : "AUTRES PERSONNAGES";
  const originLabel = isEn ? "Origin" : "Origine";
  const roleLabel = isEn ? "Role" : "Rôle";
  const roleTranslations: Record<string, string> = isEn
    ? { "Protagoniste jouable": "Playable Protagonist", "Antagoniste": "Antagonist", "Allié": "Ally", "Contact": "Contact" }
    : {};

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            isEn ? "GTA 6 Characters" : "Personnages GTA 6",
            `${BASE_URL}${path}`,
            characters.map((c) => ({
              name: c.name,
              url: `${BASE_URL}/${isEn ? "characters" : "personnages"}/${c.id}`,
              image: `${BASE_URL}${c.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title={isEn ? "CHARACTERS" : "PERSONNAGES"}
        subtitle={isEn
          ? "All characters in GTA VI — playable protagonists, antagonists and supporting characters."
          : "Tous les personnages de GTA VI — protagonistes jouables, antagonistes et personnages secondaires."}
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
                  { label: roleLabel, value: isEn ? (roleTranslations[char.role] ?? char.role) : char.role },
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
                  { label: roleLabel, value: isEn ? (roleTranslations[char.role] ?? char.role) : char.role },
                ]}
              />
            ))}
          </div>
        </div>
      </SectionPage>
    </>
  );
}