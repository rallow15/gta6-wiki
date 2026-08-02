import SectionPage from "@/components/SectionPage";

export default function AProposPage() {
  return (
    <SectionPage
      title="A PROPOS"
      subtitle="Vice City Tropical — le site fan de reference sur GTA VI."
    >
      <div className="glass-card p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="font-display text-xl tracking-wider text-neon-pink mb-3">QU'EST-CE QUE VICE CITY TROPICAL ?</h2>
          <p className="text-text-secondary leading-relaxed">
            Vice City Tropical est un site fan non officiel dedie a Grand Theft Auto VI. Notre mission est de fournir les informations les plus completes et a jour sur le jeu : codes de triche, fiches vehicules, armes, personnages, lieux et toutes les dernieres actualites.
          </p>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-lagoon-cyan mb-3">NOTRE ENGAGEMENT</h2>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Des informations verifiees et a jour
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Un design unique inspire de l'univers tropical de Vice City
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Une communaute active de fans
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-pink mt-1">&#x25B8;</span>
              Un site rapide et accessible sur mobile
            </li>
          </ul>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-sunset-orange mb-3">AVERTISSEMENT</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Vice City Tropical est un site fan non affilie a Rockstar Games, Take-Two Interactive ou toute autre societe liee a la franchise Grand Theft Auto. GTA, Grand Theft Auto et tous les noms de personnages, lieux et vehicules sont des marques deposees de Rockstar Games. Ce site est cree par des fans, pour des fans, et ne genere aucun profit direct de la propriete intellectuelle de Rockstar Games.
          </p>
        </div>

        <div className="border-t border-night-violet/50 pt-6">
          <h2 className="font-display text-xl tracking-wider text-sand-yellow mb-3">CONTACT</h2>
          <p className="text-text-secondary">
            Pour toute question ou suggestion, envoyez-nous un email a contact@vicecitytropical.fr
          </p>
        </div>
      </div>
    </SectionPage>
  );
}