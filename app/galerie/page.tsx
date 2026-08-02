import SectionPage from "@/components/SectionPage";

export default function GaleriePage() {
  return (
    <SectionPage
      title="GALERIE"
      subtitle="Captures d'ecran, artworks et wallpapers de GTA VI."
    >
      <div className="glass-card p-8 text-center">
        <div className="text-4xl mb-4">📸</div>
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          BIENTOT DISPONIBLE
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          La galerie sera enrichie avec les artworks officiels et captures du jeu a sa sortie.
        </p>
      </div>
    </SectionPage>
  );
}