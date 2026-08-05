import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Secrets & Easter Eggs GTA 6 — Tous les mystères de GTA VI",
  description:
    "Tous les secrets et easter eggs confirmés dans GTA 6 (GTA VI) : références Vice City, mystères de Leonida, objets cachés, liens avec GTA V et Red Dead Redemption.",
  alternates: { canonical: "/secrets-easter-eggs-gta-6" },
  keywords: [
    "secrets GTA 6",
    "easter eggs GTA 6",
    "mystères GTA 6",
    "secrets Vice City GTA 6",
    "easter eggs GTA VI",
    "objets cachés GTA 6",
    "références GTA 6",
    "mystères Leonida",
  ],
  openGraph: {
    title: "Secrets & Easter Eggs GTA 6 | CodeTricheGTA6",
    description: "Découvrez tous les secrets et easter eggs confirmés dans GTA 6 : références, mystères et objets cachés.",
    url: "/secrets-easter-eggs-gta-6",
    type: "article",
  },
};

const faqs = [
  {
    question: "Y a-t-il des easter eggs dans GTA 6 ?",
    answer:
      "Oui. Les trailers et screenshots officiels ont déjà révélé plusieurs easter eggs : références à Vice City Stories, logos Rockstar cachés, clins d'œil à Red Dead Redemption et des mystères inexpliqués dans les marais de Grassrivers.",
  },
  {
    question: "GTA 6 a-t-il des liens avec GTA V ?",
    answer:
      "GTA 6 est un univers parallèle. Les marques fictives (Ammu-Nation, Burger Shot, Ponsonbys) reviennent, mais les personnages de GTA V n'apparaissent pas dans l'histoire. Des références visuelles au Los Santos de GTA V sont visibles dans les médias.",
  },
  {
    question: "Quel est le mystère des marais de Grassrivers ?",
    answer:
      "Les marais de Grassrivers (inspirés des Everglades) sont la zone la plus mystérieuse de la carte. Les trailers montrent des alligators, des épaves et une ambiance mystérieuse. Les joueurs s'attendent à des secrets similaires au Mont Chiliad de GTA V.",
  },
  {
    question: "Peut-on trouver des armes secrètes dans GTA 6 ?",
    answer:
      "Les trailers confirment au moins une arme spéciale : le fusil harpon (Speargun) pour l'exploration sous-marine. D'autres armes secrètes et objets cachés seront découverts après la sortie du jeu.",
  },
];

const categories = [
  {
    title: "RÉFÉRENCES VICE CITY",
    accent: "teal",
    items: [
      { name: "Logos néon rétro", desc: "Les enseignes néon de Vice City reprennent le style visuel de GTA: Vice City (2002), avec des polices et couleurs identiques.", status: "Confirmé" },
      { name: "Voodoo Lounge", desc: "Un bar nommé Voodoo Lounge visible dans les screenshots, référence directe à l'ambiance vaudou de Vice City.", status: "Confirmé" },
      { name: "Malibu Club", desc: "Le retour potentiel du mythique Malibu Club de GTA: Vice City, visible en arrière-plan dans les trailers.", status: "Rumeur" },
      { name: "Station radio Emotion 98.3", desc: "Une station radio aux airs nostalgiques faisant écho aux bandes-sons cultes de Vice City.", status: "Rumeur" },
    ],
  },
  {
    title: "LIENS RED DEAD REDEMPTION",
    accent: "sunset",
    items: [
      { name: "Duke Arms Company", desc: "La marque d'armes Duke dans GTA 6 est un clin d'œil direct à la famille Dutch van der Linde dans Red Dead Redemption.", status: "Confirmé" },
      { name: "Rideout Customs", desc: "Le garage de customisation Rideout rappelle les mécaniques de customisation de RDR2.", status: "Confirmé" },
      { name: "Animaux sauvages", desc: "Le système de chasse et d'animaux dans les marais évoque directement les mécaniques de RDR2.", status: "Confirmé" },
    ],
  },
  {
    title: "MYSTÈRES DE LEONIDA",
    accent: "primary",
    items: [
      { name: "Alligators géants", desc: "Des alligators de taille inhabituelle dans les marais de Grassrivers — le début d'un mystère animal ?", status: "Confirmé" },
      { name: "Épaves sous-marines", desc: "Des épaves de navires visibles sous l'eau, suggérant des trésors cachés à explorer en plongée.", status: "Confirmé" },
      { name: "Mont Kalaga", desc: "Le parc national du Mont Kalaga cache potentiellement des secrets en altitude, à l'image du Mont Chiliad.", status: "Rumeur" },
      { name: "Signal radio mystérieux", desc: "Des fréquences radio captées dans des zones reculées pourraient cacher des ARG ou des mystères.", status: "Rumeur" },
    ],
  },
  {
    title: "DÉTAILS CACHÉS",
    accent: "gold",
    items: [
      { name: "Journaux intimes", desc: "Des lettres et documents épars à travers la carte racontant des histoires parallèles.", status: "Rumeur" },
      { name: "Graffiti et messages", desc: "Des graffitis sur les murs de Vice City contenant des indices et références à d'autres jeux Rockstar.", status: "Confirmé" },
      { name: "Costumes cachés", desc: "Des tenues spéciales inspirées de personnages historiques de la série GTA, disséminées dans Leonida.", status: "Rumeur" },
      { name: "Fusil harpon", desc: "Arme spéciale confirmée pour l'exploration sous-marine, permettant de découvrir des zones secrètes.", status: "Confirmé" },
    ],
  },
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

const statusBadge = {
  Confirmé: "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
  Rumeur: "bg-accent-sunset/10 text-accent-sunset border-accent-sunset/30",
};

export default function SecretsEasterEggsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Secrets & Easter Eggs GTA 6", url: `${BASE_URL}/secrets-easter-eggs-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/secrets-easter-eggs-gta-6`),
        ]}
      />
      <SectionPage
        title="SECRETS & EASTER EGGS"
        titleAccent="GTA 6 —"
        subtitle="Tous les secrets, easter eggs et mystères confirmés dans GTA 6. Références Vice City, liens RDR et mystères de Leonida."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="gold">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Sources officielles + analyse communautaire.</strong> Les éléments marqués « Confirmé » sont visibles dans les trailers/screenshots officiels. Les éléments « Rumeur » sont des théories communautaires basées sur des indices visuels.
            </p>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent as keyof typeof accentColor]} mb-5 border-b border-border/50 pb-2`}>
              {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className={`card-base p-5 border ${accentBorder[cat.accent as keyof typeof accentBorder]}`} data-plate="gold">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-text-primary">{item.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border shrink-0 ${statusBadge[item.status as keyof typeof statusBadge]}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Leaks & theories */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="gold">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            THÉORIES DE LA COMMUNAUTÉ
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong className="text-text-primary">Le fantôme de Vice City</strong> — Des joueurs pensent avoir repéré une silhouette fantomatique dans les néons de Vice City, rappelant le fantôme du Mont Gordo dans GTA V.</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong className="text-text-primary">Le monstre des marais</strong> — La zone de Grassrivers pourrait cacher une créature mythique, comme le bigfoot de GTA San Andreas et RDR2.</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong className="text-text-primary">L'île secrète des Keys</strong> — Une petite île inhabitée visible sur la carte des Leonida Keys pourrait renfermer un secret majeur.</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span><strong className="text-text-primary">Le code mural</strong> — Des graffitis dans les ruelles de Vice City pourraient former un code à déchiffrer, à l'image du mystère du Mont Chiliad.</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="gold">
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
          <Link href="/lieux" className="text-accent-primary hover:underline">
            Explorer tous les lieux de GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}