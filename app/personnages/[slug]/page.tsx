import { characters, getCharacterById } from "@/lib/characters";
import CharacterDetail from "./CharacterDetail";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.id }));
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

  return <CharacterDetail character={character} />;
}