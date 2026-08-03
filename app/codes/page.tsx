import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { sectionMeta, sectionBreadcrumb } from "@/lib/sectionMeta";

export const metadata: Metadata = sectionMeta({
  title: "Codes de triche GTA 6 — PS5, Xbox, PC",
  description:
    "Tous les codes de triche GTA 6 (GTA VI) pour PlayStation 5, Xbox Series et PC : santé, armure, armes, véhicules, police, météo et gameplay. Copier en 1 clic.",
  path: "/codes",
  keywords: [
    "codes GTA 6",
    "codes de triche GTA 6",
    "code triche GTA 6 PS5",
    "code triche GTA 6 Xbox",
    "code triche GTA 6 PC",
    "codes GTA VI",
    "astuces GTA 6",
    "cheats GTA 6",
  ],
});

export default function CodesPage() {
  return (
    <>
      <JsonLd data={sectionBreadcrumb("Codes de triche", "/codes")} />
      <SectionPage
        title="CODES DE TRICHE"
        subtitle="Tous les codes GTA 6 pour PS5, Xbox Series et PC."
      >
      <div className="glass-card p-8 text-center">
        <div className="text-4xl mb-4">🎮</div>
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          ARRIVE PROCHAINEMENT
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          Les codes de triche seront disponibles apres la sortie du jeu. Restez connectes !
        </p>
      </div>
    </SectionPage>
    </>
  );
}