import type { Metadata } from "next";
import { Bug } from "lucide-react";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Animaux GTA 6 — Faune de Leonida",
  description:
    "La faune de GTA 6 : alligators, poissons tropicaux et toute la vie sauvage de Leonida. Bientôt disponible après la sortie du jeu.",
  alternates: { canonical: "/animaux" },
  robots: { index: false, follow: true },
};

export default function AnimauxPage() {
  return (
    <SectionPage
      title="ANIMAUX"
      subtitle="La faune de Leonida — alligators, poissons tropicaux et plus encore."
    >
      <div className="glass-card p-8 text-center">
        <Bug className="h-10 w-10 text-lagoon-cyan mx-auto mb-4" />
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          BIENTOT DISPONIBLE
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          La faune complete de Leonida sera documentee apres la sortie du jeu. Chasse, peche et observations !
        </p>
      </div>
    </SectionPage>
  );
}