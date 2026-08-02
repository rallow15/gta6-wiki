import SectionPage from "@/components/SectionPage";
import Link from "next/link";

const articles = [
  {
    id: "gta6-trailer-2",
    title: "GTA VI : La bande-annonce officielle enfin devoilee",
    date: "5 Dec 2023",
    excerpt: "Rockstar Games a devoile la toute premiere bande-annonce de GTA VI, montrant Vice City, les deux protagonistes et l'ambiance tropicale tant attendue.",
    tag: "Annonce",
  },
  {
    id: "release-date-confirmed",
    title: "Date de sortie confirme : Novembre 2026",
    date: "18 Nov 2024",
    excerpt: "Apres des mois de speculation, Rockstar confirme officiellement la date de sortie de GTA VI pour novembre 2026 sur PS5, Xbox Series et PC.",
    tag: "Date de sortie",
  },
  {
    id: "vice-city-details",
    title: "Vice City dans GTA VI : tout ce qu'on sait",
    date: "10 Jan 2025",
    excerpt: "Vice City sera plus grande que jamais dans GTA VI. Decouvrez les quartiers, les activites et les secrets de la metropole neonnee de Leonida.",
    tag: "Gameplay",
  },
  {
    id: "dual-protagonists",
    title: "Jason et Lucia : le systeme a deux protagonistes",
    date: "22 Fev 2025",
    excerpt: "GTA VI introduit Jason Duval et Lucia Caminos comme protagonistes jouables. Un systeme inedit qui permet de basculer entre les deux personnages.",
    tag: "Personnages",
  },
];

export default function ActualitesPage() {
  return (
    <SectionPage
      title="ACTUALITES"
      subtitle="Les dernieres news et rumeurs sur GTA VI."
    >
      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.id} className="glass-card p-5 sm:p-6 group">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20 font-medium uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-xs text-text-muted">{article.date}</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted line-clamp-2">{article.excerpt}</p>
              </div>
              <svg className="h-5 w-5 text-text-muted group-hover:text-neon-pink transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}