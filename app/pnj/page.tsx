import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "PNJ GTA 6 — Personnages non jouables",
  description:
    "Base de données des personnages non jouables (PNJ) de GTA 6. Bientôt disponible après la sortie du jeu.",
  alternates: { canonical: "/pnj" },
  // Placeholder page with no real content yet — keep it out of the index.
  robots: { index: false, follow: true },
};

export default function PnjPage() {
  return (
    <SectionPage
      title="PNJ"
      subtitle="Les personnages non jouables qui peuplent les rues de Leonida."
    >
      <div className="glass-card p-8 text-center">
        <div className="text-4xl mb-4">🧑‍🤝‍🧑</div>
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          BIENTOT DISPONIBLE
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          La base de donnees des PNJ sera disponible apres la sortie du jeu. Restez connectes !
        </p>
      </div>
    </SectionPage>
  );
}