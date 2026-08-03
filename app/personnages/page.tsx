import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { characters } from "@/lib/characters";
import { BASE_URL } from "@/lib/site";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = sectionMeta({
  title: "Personnages GTA 6 — Jason, Lucia & tous les personnages",
  description:
    "Tous les personnages de GTA 6 (GTA VI) : Jason Duval et Lucia Caminos (protagonistes jouables), Raul Bautista (antagoniste), Cal Hampton, Boobie Ike, Dre'Quan Priest et Brian Heder. Biographies, stats et relations.",
  path: "/personnages",
  keywords: [
    "personnages GTA 6",
    "personnages GTA VI",
    "Jason Duval",
    "Lucia Caminos",
    "Raul Bautista",
    "protagonistes GTA 6",
    "héros GTA 6",
  ],
});

export default function PersonnagesPage() {
  const protagonists = characters.filter((c) => c.role === "Protagoniste jouable");
  const others = characters.filter((c) => c.role !== "Protagoniste jouable");

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb("Personnages", "/personnages"),
          itemListJsonLd(
            "Personnages GTA 6",
            `${BASE_URL}/personnages`,
            characters.map((c) => ({
              name: c.name,
              url: `${BASE_URL}/personnages/${c.id}`,
              image: `${BASE_URL}${c.image}`,
            })),
          ),
        ]}
      />
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
    </>
  );
}