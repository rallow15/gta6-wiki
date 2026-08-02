import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { characters } from "@/lib/characters";

export default function PersonnagesPage() {
  const protagonists = characters.filter((c) => c.role === "Protagoniste jouable");
  const others = characters.filter((c) => c.role !== "Protagoniste jouable");

  return (
    <SectionPage
      title="PERSONNAGES"
      subtitle="Tous les personnages de GTA VI — protagonistes jouables, antagonistes et personnages secondaires."
    >
      <div className="mb-10">
        <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-4 border-b border-sunset-orange/20 pb-2">
          PROTAGONISTES JOUABLES
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {protagonists.map((char) => (
            <GameCard
              key={char.id}
              title={char.name}
              description={char.description}
              href={`/personnages/${char.id}`}
              image={char.image}
              accent="pink"
              stats={[
                { label: "Origine", value: char.origin },
                { label: "Role", value: char.role },
              ]}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
          AUTRES PERSONNAGES
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((char) => (
            <GameCard
              key={char.id}
              title={char.name}
              description={char.description}
              href={`/personnages/${char.id}`}
              image={char.image}
              accent={char.role === "Antagoniste" ? "orange" : "cyan"}
              stats={[
                { label: "Origine", value: char.origin },
                { label: "Role", value: char.role },
              ]}
            />
          ))}
        </div>
      </div>
    </SectionPage>
  );
}