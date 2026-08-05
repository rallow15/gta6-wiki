import type { Metadata } from "next";
import Link from "next/link";
import { Car, Fish, Package, Compass, Ship, Wrench } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solution GTA 6 — Guide complet des missions GTA VI",
  description:
    "Solution complète de GTA 6 (GTA VI) : guide pas à pas de toutes les missions, braquages, missions secondaires et activités. Walkthrough complet francophone.",
  alternates: { canonical: "/solution-gta-6-guide-missions" },
  keywords: [
    "solution GTA 6",
    "guide GTA 6",
    "walkthrough GTA 6",
    "missions GTA 6",
    "missions secondaires GTA VI",
    "guide complet GTA 6",
    "braquages GTA 6 guide",
    "soluce GTA 6",
  ],
  openGraph: {
    title: "Solution GTA 6 — Guide complet des missions | CodeTricheGTA6",
    description: "Solution et guide complet de GTA 6 : toutes les missions, braquages et activités secondaires.",
    url: "/solution-gta-6-guide-missions",
    type: "article",
  },
};

const faqs = [
  {
    question: "Combien de missions compte GTA 6 ?",
    answer:
      "Le nombre exact de missions n'est pas encore confirmé par Rockstar. GTA V comptait plus de 80 missions principales. GTA 6 devrait proposer au minimum un volume comparable, avec des missions plus longues et plus détaillées, ainsi que de nombreuses missions secondaires.",
  },
  {
    question: "Y a-t-il des missions secondaires dans GTA 6 ?",
    answer:
      "Oui. GTA 6 propose des missions secondaires variées : courses de rue, chasse, pêche, livraisons, missions pour des PNJ, et des activités propres à chaque région de Leonida (Vice City, Grassrivers, Port Gellhorn, etc.).",
  },
  {
    question: "Peut-on choisir l'ordre des missions dans GTA 6 ?",
    answer:
      "GTA 6 offre plus de liberté que ses prédécesseurs. Les missions principales suivent une trame narrative, mais le joueur peut librement explorer et réaliser des activités secondaires entre les missions de l'histoire.",
  },
  {
    question: "Quels braquages sont confirmés dans GTA 6 ?",
    answer:
      "Les trailers officiels montrent des braquages de banque, des vols de bijouterie et des attaques de convois. Le système de braquages propose plusieurs approches (furtive, agressive, astucieuse) affectant le déroulement et la récompense.",
  },
];

const chapters = [
  {
    title: "PROLOGUE — VICE CITY",
    accent: "teal",
    description: "Arrivée à Vice City. Premiers pas dans l'état de Leonida, rencontres clés et prise de contact avec le monde criminel.",
    missions: [
      "Bienvenue à Vice City",
      "Premiers contacts",
      "Le travail de Raul",
      "Impressions",
    ],
  },
  {
    title: "ACTE I — CONNEXIONS",
    accent: "primary",
    description: "Jason et Lucia s'infiltrent dans le milieu criminel de Vice City. Premiers braquages et alliances avec les gangs locaux.",
    missions: [
      "Petits boulots, gros risques",
      "La connexion Bautista",
      "Braquage du magasin de Port Gellhorn",
      "Livraison sous pression",
      "Le réseau de Cal Hampton",
    ],
  },
  {
    title: "ACTE II — ASCENSION",
    accent: "sunset",
    description: "Les braquages s'intensifient. Jason et Lucia montent en puissance et s'attaquent à des cibles plus ambitieuses.",
    missions: [
      "Le casse de la bijouterie",
      "Course poursuite dans les Keys",
      "Opération Grassrivers",
      "Le convoyeur blindé",
      "Négociations à Ambrosia",
    ],
  },
  {
    title: "ACTE III — EMPIRE",
    accent: "gold",
    description: "Construction de l'empire criminel. Acquisition de business, gestion d'équipes et investissements stratégiques.",
    missions: [
      "Propriété et pouvoir",
      "Le grand braquage de banque",
      "Mains sur la bourse",
      "Guerre des gangs",
      "L'héritage de Vice City",
    ],
  },
];

const sideActivities = [
  { name: "Courses de rue", desc: "Compétitions de vitesse illégales à travers Vice City et les Leonida Keys.", icon: <Car className="h-5 w-5" /> },
  { name: "Chasse & pêche", desc: "Expéditions dans les marais de Grassrivers et au Mont Kalaga.", icon: <Fish className="h-5 w-5" /> },
  { name: "Missions de livraison", desc: "Transport de marchandises à travers Leonida pour des PNJ.", icon: <Package className="h-5 w-5" /> },
  { name: "Exploration sous-marine", desc: "Plongée et exploration des épaves avec le fusil harpon.", icon: <Compass className="h-5 w-5" /> },
  { name: "Activités nautiques", desc: "Courses de bateaux, jet ski et exploration des côtes.", icon: <Ship className="h-5 w-5" /> },
  { name: "Customisation", desc: "Personnalisation de véhicules dans les garages spécialisés.", icon: <Wrench className="h-5 w-5" /> },
];

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentBorder = {
  teal: "border-accent-teal/30",
  primary: "border-accent-primary/30",
  sunset: "border-accent-sunset/30",
  gold: "border-yellow-400/30",
};

export default function SolutionGTA6Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Solution GTA 6", url: `${BASE_URL}/solution-gta-6-guide-missions` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/solution-gta-6-guide-missions`),
        ]}
      />
      <SectionPage
        title="GTA 6"
        titleAccent="SOLUTION & GUIDE —"
        subtitle="Guide complet des missions de GTA 6. Solution pas à pas, braquages, missions secondaires et activités."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="sunset">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Guide pré-sortie basé sur les trailers et sources officielles.</strong> Les solutions détaillées pas à pas seront ajoutées après la sortie du jeu le 19 novembre 2026.
            </p>
          </div>
        </div>

        {/* Main chapters */}
        {chapters.map((chapter, i) => (
          <div key={chapter.title} className="mb-8">
            <div className={`card-base p-6 sm:p-8 border ${accentBorder[chapter.accent as keyof typeof accentBorder]}`} data-plate="sunset">
              <div className="flex items-start gap-3 mb-4">
                <span className="font-display text-3xl text-text-muted/30">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[chapter.accent as keyof typeof accentColor]}`}>
                    {chapter.title}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">{chapter.description}</p>
                </div>
              </div>
              <div className="ml-10 space-y-2">
                {chapter.missions.map((mission) => (
                  <div key={mission} className="flex items-center gap-2 py-1.5 border-b border-border/20 last:border-0">
                    <span className="text-accent-primary text-xs">&#x25B8;</span>
                    <span className="text-sm text-text-primary">{mission}</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-surface-muted border border-border/30 text-text-muted">
                      Bientôt
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Side activities */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5 border-b border-border/50 pb-2">
            ACTIVITÉS SECONDAIRES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sideActivities.map((activity) => (
              <div key={activity.name} className="card-base p-5" data-plate="sunset">
                <div className="mb-2">{activity.icon}</div>
                <h3 className="font-semibold text-text-primary mb-1">{activity.name}</h3>
                <p className="text-sm text-text-muted">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="sunset">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            QUESTIONS FRÉQUENTES
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/codes" className="text-accent-primary hover:underline">
            Voir tous les codes GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}