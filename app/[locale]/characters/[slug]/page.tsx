import type { Metadata } from "next";
import { characters, getCharacterById } from "@/lib/characters";
import CharacterDetail from "./CharacterDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName } from "@/lib/site";
import { breadcrumbJsonLd, buildAlternates, personJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const character = getCharacterById(slug);
  if (!character) return { title: "Personnage introuvable" };

  const isEn = locale === "en";
  const frPath = `/personnages/${character.id}`;
  const enPath = `/en/characters/${character.id}`;
  const url = isEn ? enPath : frPath;
  const title = isEn ? `${character.name} — GTA 6 Character` : `${character.name} — Personnage GTA 6`;
  const description = isEn
    ? `${character.description} Role: ${character.role}. Origin: ${character.origin}.`
    : `${character.description} Rôle : ${character.role}. Origine : ${character.origin}.`;
  const siteName = getSiteName(locale);

  return {
    title,
    description,
    alternates: buildAlternates(locale, frPath, enPath),
    keywords: [
      character.name,
      `${character.name} GTA 6`,
      `${character.name} GTA VI`,
      isEn ? `${character.name} character` : `${character.name} personnage`,
      character.role,
      isEn ? "GTA 6 characters" : "personnages GTA 6",
    ],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      type: "article",
      locale: isEn ? "en_US" : "fr_FR",
      images: [{ url: character.image, width: 1200, height: 630, alt: character.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [character.image],
    },
  };
}

export default async function CharacterPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const character = getCharacterById(slug);
  const t = await getTranslations("Characters");

  if (!character) {
    return (
      <div className="pt-20 text-center">
        <h1 className="font-display text-4xl text-neon-pink neon-text">404</h1>
        <p className="text-text-muted mt-4">Personnage non trouve</p>
      </div>
    );
  }

  const isEn = locale === "en";
  const url = `${BASE_URL}${isEn ? `/en/characters/${character.id}` : `/personnages/${character.id}`}`;
  const notice = {
    strong: t("noticeStrong"),
    rest: t("noticeRest"),
  };
  return (
    <>
      <JsonLd
        data={[
          personJsonLd(character, url, locale),
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "Characters" : "Personnages", url: `${BASE_URL}${isEn ? "/en/characters" : "/personnages"}` },
            { name: character.name, url },
          ]),
        ]}
      />
      <CharacterDetail character={character} notice={notice} />
    </>
  );
}