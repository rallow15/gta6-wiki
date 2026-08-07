import type { Metadata } from "next";
import Link from "next/link";
import { Car, Fish, Package, Compass, Ship, Wrench } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);

  const titles: Record<string, string> = {
    fr: "Solution GTA 6 — Guide complet des missions GTA VI",
    en: "GTA 6 Walkthrough — Complete mission guide for GTA VI",
  };
  const descriptions: Record<string, string> = {
    fr: "Solution complète de GTA 6 (GTA VI) : guide pas à pas de toutes les missions, braquages, missions secondaires et activités. Walkthrough complet francophone.",
    en: "Complete GTA 6 (GTA VI) walkthrough: step-by-step guide for all missions, heists, side missions and activities.",
  };
  const keywords = isEn
    ? [
        "GTA 6 walkthrough",
        "GTA 6 guide",
        "GTA 6 missions guide",
        "GTA 6 missions",
        "GTA VI side missions",
        "complete GTA 6 guide",
        "GTA 6 heists guide",
        "GTA 6 walkthrough missions",
      ]
    : [
        "solution GTA 6",
        "guide GTA 6",
        "walkthrough GTA 6",
        "missions GTA 6",
        "missions secondaires GTA VI",
        "guide complet GTA 6",
        "braquages GTA 6 guide",
        "soluce GTA 6",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions",
      languages: {
        fr: "/solution-gta-6-guide-missions",
        en: "/en/gta-6-walkthrough",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const getFaqs = (isEn: boolean) => [
  {
    question: isEn ? "How many missions does GTA 6 have?" : "Combien de missions compte GTA 6 ?",
    answer: isEn
      ? "The exact number of missions has not been confirmed by Rockstar yet. GTA V had over 80 main missions. GTA 6 should offer at least a comparable volume, with longer and more detailed missions, as well as numerous side missions."
      : "Le nombre exact de missions n'est pas encore confirmé par Rockstar. GTA V comptait plus de 80 missions principales. GTA 6 devrait proposer au minimum un volume comparable, avec des missions plus longues et plus détaillées, ainsi que de nombreuses missions secondaires.",
  },
  {
    question: isEn ? "Are there side missions in GTA 6?" : "Y a-t-il des missions secondaires dans GTA 6 ?",
    answer: isEn
      ? "Yes. GTA 6 features varied side missions: street races, hunting, fishing, deliveries, NPC missions, and activities unique to each region of Leonida (Vice City, Grassrivers, Port Gellhorn, etc.)."
      : "Oui. GTA 6 propose des missions secondaires variées : courses de rue, chasse, pêche, livraisons, missions pour des PNJ, et des activités propres à chaque région de Leonida (Vice City, Grassrivers, Port Gellhorn, etc.).",
  },
  {
    question: isEn ? "Can you choose the order of missions in GTA 6?" : "Peut-on choisir l'ordre des missions dans GTA 6 ?",
    answer: isEn
      ? "GTA 6 offers more freedom than its predecessors. Main missions follow a narrative storyline, but the player can freely explore and complete side activities between story missions."
      : "GTA 6 offre plus de liberté que ses prédécesseurs. Les missions principales suivent une trame narrative, mais le joueur peut librement explorer et réaliser des activités secondaires entre les missions de l'histoire.",
  },
  {
    question: isEn ? "Which heists are confirmed in GTA 6?" : "Quels braquages sont confirmés dans GTA 6 ?",
    answer: isEn
      ? "Official trailers show bank heists, jewelry store robberies, and convoy attacks. The heist system offers multiple approaches (stealth, aggressive, clever) affecting the progression and reward."
      : "Les trailers officiels montrent des braquages de banque, des vols de bijouterie et des attaques de convois. Le système de braquages propose plusieurs approches (furtive, agressive, astucieuse) affectant le déroulement et la récompense.",
  },
];

const getChapters = (isEn: boolean) => [
  {
    title: isEn ? "PROLOGUE — VICE CITY" : "PROLOGUE — VICE CITY",
    accent: "teal",
    description: isEn
      ? "Arrival in Vice City. First steps in the state of Leonida, key encounters and making contact with the criminal underworld."
      : "Arrivée à Vice City. Premiers pas dans l'état de Leonida, rencontres clés et prise de contact avec le monde criminel.",
    missions: isEn
      ? ["Welcome to Vice City", "First Contacts", "Raul's Job", "Impressions"]
      : ["Bienvenue à Vice City", "Premiers contacts", "Le travail de Raul", "Impressions"],
  },
  {
    title: isEn ? "ACT I — CONNECTIONS" : "ACTE I — CONNEXIONS",
    accent: "primary",
    description: isEn
      ? "Jason and Lucia infiltrate Vice City's criminal underworld. First heists and alliances with local gangs."
      : "Jason et Lucia s'infiltrent dans le milieu criminel de Vice City. Premiers braquages et alliances avec les gangs locaux.",
    missions: isEn
      ? ["Small Jobs, Big Risks", "The Bautista Connection", "Port Gellhorn Store Heist", "Delivery Under Pressure", "Cal Hampton's Network"]
      : ["Petits boulots, gros risques", "La connexion Bautista", "Braquage du magasin de Port Gellhorn", "Livraison sous pression", "Le réseau de Cal Hampton"],
  },
  {
    title: isEn ? "ACT II — RISING" : "ACTE II — ASCENSION",
    accent: "sunset",
    description: isEn
      ? "The heists intensify. Jason and Lucia step up and target more ambitious objectives."
      : "Les braquages s'intensifient. Jason et Lucia montent en puissance et s'attaquent à des cibles plus ambitieuses.",
    missions: isEn
      ? ["The Jewelry Store Heist", "Chase Through the Keys", "Grassrivers Operation", "The Armored Truck", "Ambrosia Negotiations"]
      : ["Le casse de la bijouterie", "Course poursuite dans les Keys", "Opération Grassrivers", "Le convoyeur blindé", "Négociations à Ambrosia"],
  },
  {
    title: isEn ? "ACT III — EMPIRE" : "ACTE III — EMPIRE",
    accent: "gold",
    description: isEn
      ? "Building the criminal empire. Acquiring businesses, managing teams and strategic investments."
      : "Construction de l'empire criminel. Acquisition de business, gestion d'équipes et investissements stratégiques.",
    missions: isEn
      ? ["Property and Power", "The Great Bank Heist", "Hands on the Exchange", "Gang War", "The Vice City Legacy"]
      : ["Propriété et pouvoir", "Le grand braquage de banque", "Mains sur la bourse", "Guerre des gangs", "L'héritage de Vice City"],
  },
];

const getSideActivities = (isEn: boolean) => [
  { name: isEn ? "Street Races" : "Courses de rue", desc: isEn ? "Illegal speed competitions across Vice City and the Leonida Keys." : "Compétitions de vitesse illégales à travers Vice City et les Leonida Keys.", icon: <Car className="h-5 w-5" /> },
  { name: isEn ? "Hunting & Fishing" : "Chasse & pêche", desc: isEn ? "Expeditions in the Grassrivers swamps and at Mount Kalaga." : "Expéditions dans les marais de Grassrivers et au Mont Kalaga.", icon: <Fish className="h-5 w-5" /> },
  { name: isEn ? "Delivery Missions" : "Missions de livraison", desc: isEn ? "Transport goods across Leonida for NPCs." : "Transport de marchandises à travers Leonida pour des PNJ.", icon: <Package className="h-5 w-5" /> },
  { name: isEn ? "Underwater Exploration" : "Exploration sous-marine", desc: isEn ? "Diving and exploring shipwrecks with the speargun." : "Plongée et exploration des épaves avec le fusil harpon.", icon: <Compass className="h-5 w-5" /> },
  { name: isEn ? "Water Activities" : "Activités nautiques", desc: isEn ? "Boat races, jet ski and coastal exploration." : "Courses de bateaux, jet ski et exploration des côtes.", icon: <Ship className="h-5 w-5" /> },
  { name: isEn ? "Customization" : "Customisation", desc: isEn ? "Vehicle customization in specialized garages." : "Personnalisation de véhicules dans les garages spécialisés.", icon: <Wrench className="h-5 w-5" /> },
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

export default async function SolutionGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const faqs = getFaqs(isEn);
  const chapters = getChapters(isEn);
  const sideActivities = getSideActivities(isEn);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "GTA 6 Walkthrough" : "Solution GTA 6", url: `${BASE_URL}${isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions"}`),
        ]}
      />
      <SectionPage
        title="GTA 6"
        titleAccent={isEn ? "WALKTHROUGH & GUIDE —" : "SOLUTION & GUIDE —"}
        subtitle={isEn
          ? "Complete mission guide for GTA 6. Step-by-step walkthrough, heists, side missions and activities."
          : "Guide complet des missions de GTA 6. Solution pas à pas, braquages, missions secondaires et activités."
        }
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="sunset">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{isEn ? "Pre-release guide based on trailers and official sources." : "Guide pré-sortie basé sur les trailers et sources officielles."}</strong>{" "}
              {isEn
                ? "Detailed step-by-step walkthroughs will be added after the game releases on November 19, 2026."
                : "Les solutions détaillées pas à pas seront ajoutées après la sortie du jeu le 19 novembre 2026."
              }
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
                      {isEn ? "Coming soon" : "Bientôt"}
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
            {isEn ? "SIDE ACTIVITIES" : "ACTIVITÉS SECONDAIRES"}
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
            {isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES"}
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
          <Link href={isEn ? "/en/cheat-codes-gta-6" : "/codes"} className="text-accent-primary hover:underline">
            {isEn ? "See all GTA 6 cheat codes →" : "Voir tous les codes GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}