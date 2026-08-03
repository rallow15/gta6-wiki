import type { Metadata } from "next";
import { characters, getCharacterById } from "@/lib/characters";
import CharacterDetail from "./CharacterDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterById(slug);
  if (!character) return { title: "Personnage introuvable" };

  const url = `/personnages/${character.id}`;
  const title = `${character.name} — Personnage GTA 6`;
  const description = `${character.description} Rôle : ${character.role}. Origine : ${character.origin}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      character.name,
      `${character.name} GTA 6`,
      `${character.name} GTA VI`,
      `${character.name} personnage`,
      character.role,
      "personnages GTA 6",
    ],
    openGraph: {
      title: `${title} | CodeTricheGTA6`,
      description,
      url,
      type: "article",
      images: [{ url: character.image, width: 1200, height: 630, alt: character.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CodeTricheGTA6`,
      description,
      images: [character.image],
    },
  };
}

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const character = getCharacterById(slug);

  if (!character) {
    return (
      <div className="pt-20 text-center">
        <h1 className="font-display text-4xl text-neon-pink neon-text">404</h1>
        <p className="text-text-muted mt-4">Personnage non trouve</p>
      </div>
    );
  }

  const url = `${BASE_URL}/personnages/${character.id}`;
  return (
    <>
      <JsonLd
        data={[
          personJsonLd(character, url),
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Personnages", url: `${BASE_URL}/personnages` },
            { name: character.name, url },
          ]),
        ]}
      />
      <CharacterDetail character={character} />
    </>
  );
}