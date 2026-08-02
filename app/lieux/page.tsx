import SectionPage from "@/components/SectionPage";
import GameCard from "@/components/GameCard";
import { locations } from "@/lib/data";

export default function LieuxPage() {
  return (
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
  );
}