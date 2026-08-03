import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { BASE_URL } from "@/lib/site";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = sectionMeta({
  title: "Lieux GTA 6 — Vice City, Leonida & cartes de GTA VI",
  description:
    "Tous les lieux de GTA 6 (GTA VI) : Vice City, les Leonida Keys, les marais de Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga. Explorez l'état fictif de Leonida.",
  path: "/lieux",
  keywords: [
    "lieux GTA 6",
    "Vice City GTA 6",
    "Leonida GTA 6",
    "carte GTA 6",
    "map GTA 6",
    "Leonida Keys",
    "Grassrivers",
    "Port Gellhorn",
  ],
});

export default function LieuxPage() {
  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb("Lieux", "/lieux"),
          itemListJsonLd(
            "Lieux GTA 6",
            `${BASE_URL}/lieux`,
            locations.map((l) => ({
              name: l.name,
              url: `${BASE_URL}/lieux/${l.id}`,
              image: `${BASE_URL}${l.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title="LIEUX"
        subtitle="Explorez Vice City, les Keys, les marais et tous les recoins de Leonida."
      >
      <div className="grid sm:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <GameCard
            key={loc.id}
            title={loc.name}
            description={loc.description}
            href={`/lieux/${loc.id}`}
            image={loc.image}
            accent={loc.id === "vice-city" ? "pink" : loc.id === "leonida-keys" ? "cyan" : "orange"}
            stats={[
              { label: "Type", value: loc.type },
              { label: "Zones", value: `${loc.features.length}` },
            ]}
          />
        ))}
      </div>
    </SectionPage>
    </>
  );
}