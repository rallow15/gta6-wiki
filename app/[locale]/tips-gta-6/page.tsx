import type { Metadata } from "next";
import Link from "next/link";
import { Target, Home, Backpack, Footprints, Save, Shield, Crosshair, Users, Timer, Building2, TrendingUp, Briefcase, Car, Map, Compass, Ear, RefreshCw, Coins, Search, Gamepad2 } from "lucide-react";
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
    fr: "Astuces GTA 6 — Tips, guides et conseils pour GTA VI",
    en: "GTA 6 Tips — Best tips, guides and strategies for GTA VI",
  };
  const descriptions: Record<string, string> = {
    fr: "Toutes les astuces GTA 6 (tips) : conseils de démarrage, meilleures stratégies, farming, secrets et astuces de gameplay pour maîtriser GTA VI dès le premier jour.",
    en: "All GTA 6 tips: starting advice, best strategies, farming, secrets and gameplay tips to master GTA VI from day one.",
  };
  const keywords = isEn
    ? [
        "GTA 6 tips",
        "GTA 6 guide",
        "GTA 6 beginner tips",
        "best tips GTA 6",
        "GTA 6 strategies",
        "GTA 6 starting guide",
        "GTA VI tips",
        "GTA 6 gameplay tips",
      ]
    : [
        "astuces GTA 6",
        "tips GTA 6",
        "conseils GTA 6",
        "guide GTA 6",
        "astuce GTA VI",
        "tips debutant GTA 6",
        "meilleurs conseils GTA 6",
        "stratégies GTA 6",
        "guide démarrage GTA 6",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/tips-gta-6" : "/astuces-gta-6",
      languages: {
        fr: "/astuces-gta-6",
        en: "/en/tips-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/tips-gta-6" : "/astuces-gta-6",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const accentColor: Record<string, string> = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentCard: Record<string, string> = {
  teal: "card-base",
  primary: "card-base",
  sunset: "card-base",
  gold: "card-base",
};

export default async function AstucesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const codesPath = "/codes";
  const moneyPath = isEn ? "/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6";
  const walkthroughPath = isEn ? "/gta-6-walkthrough" : "/solution-gta-6-guide-missions";
  const secretsPath = "/secrets-easter-eggs-gta-6";
  const cheatsPath = isEn ? "/cheat-codes-gta-6" : "/code-triche-gta-6";

  const faqs = [
    {
      question: isEn
        ? "Where to start in GTA 6?"
        : "Par où commencer dans GTA 6 ?",
      answer: isEn
        ? "Start with the main story missions to unlock core mechanics (driving, combat, heists). Then invest in revenue-generating properties and explore side activities to maximize your earnings."
        : "Commencez par les missions principales de l'histoire pour débloquer les mécaniques de base (conduite, combat, braquages). Ensuite, investissez dans des propriétés génératrices de revenus et explorez les activités secondaires pour maximiser vos gains.",
    },
    {
      question: isEn
        ? "Tips for making money fast?"
        : "Quelles astuces pour gagner de l'argent vite ?",
      answer: isEn
        ? "Prioritize heists for big payouts, invest in the stock market before missions that impact stock prices, and buy businesses as early as possible for passive income. Check our complete money guide for more details."
        : "Priorisez les braquages pour les grosses sommes, investissez en bourse avant les missions qui impactent les cours, et achetez des business le plus tôt possible pour les revenus passifs. Consultez notre guide complet argent pour plus de détails.",
    },
    {
      question: isEn
        ? "Combat tips for GTA 6?"
        : "Y a-t-il des astuces pour les combats dans GTA 6 ?",
      answer: isEn
        ? "Use the cover system, switch between weapons depending on the situation (shotgun for close range, sniper for distance), and leverage the duffel bag system to prepare loadouts tailored to each mission via your vehicle trunk."
        : "Utilisez le système de couverture, alternez entre les armes selon la situation (fusil à pompe au corps-à-corps, sniper à distance), et exploitez le système de sacoche pour préparer des loadouts adaptés à chaque mission via le coffre de véhicule.",
    },
    {
      question: isEn
        ? "How to explore the GTA 6 map effectively?"
        : "Comment bien explorer la carte de GTA 6 ?",
      answer: isEn
        ? "Take the time to explore each region (Vice City, Keys, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga). Use fast vehicles for roads, boats for coastlines and helicopters for mountainous areas. Come back with new abilities to access previously blocked zones."
        : "Prenez le temps d'explorer chaque région (Vice City, Keys, Grassrivers, Port Gellhorn, Ambrosia, Mont Kalaga). Utilisez les véhicules rapides pour les routes, les bateaux pour les côtes et les hélicoptères pour les zones montagneuses. Revenez avec de nouvelles capacités pour accéder aux zones bloquées.",
    },
  ];

  const tipSections = [
    {
      title: isEn ? "GETTING STARTED — THE ESSENTIALS" : "DÉMARRAGE — LES ESSENTIELS",
      accent: "teal",
      tips: [
        { title: isEn ? "Follow the story first" : "Suivez l'histoire d'abord", desc: isEn ? "Main missions unlock key mechanics: driving, combat, heists, customization. Don't spread yourself thin early on." : "Les missions principales débloquent les mécaniques clés : conduite, combat, braquages, customisation. Ne vous éparpillez pas au début.", icon: <Target className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Buy a garage quickly" : "Achetez un garage rapidement", desc: isEn ? "A garage lets you store vehicles and change your weapon loadout via the trunk. It's a priority investment." : "Un garage vous permet de stocker des véhicules et de changer de loadout d'armes via le coffre. C'est un investissement prioritaire.", icon: <Home className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Learn the duffel bag system" : "Apprenez le système de sacoche", desc: isEn ? "You can't carry all weapons at once. Prepare loadouts in your vehicle's trunk before each mission." : "Vous ne pouvez pas porter toutes les armes. Préparez des loadouts dans le coffre de votre véhicule avant chaque mission.", icon: <Backpack className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Explore Vice City on foot" : "Explorez Vice City à pied", desc: isEn ? "Alleys, rooftops and hidden areas are full of collectibles and secrets. Driving past means missing them." : "Les ruelles, les toits et les zones cachées regorgent de collectibles et de secrets. La voiture fait tout rater.", icon: <Footprints className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Save often" : "Sauvegardez souvent", desc: isEn ? "GTA 6 has auto-saves, but make manual saves before heists and important decisions." : "GTA 6 a des sauvegardes automatiques, mais faites aussi des sauvegardes manuelles avant les braquages et les décisions importantes.", icon: <Save className="h-5 w-5 shrink-0" /> },
      ],
    },
    {
      title: isEn ? "COMBAT & STRATEGY" : "COMBAT & STRATÉGIE",
      accent: "primary",
      tips: [
        { title: isEn ? "Use cover" : "Utilisez les couvertures", desc: isEn ? "The cover system is essential. Stay behind an obstacle, aim while peeking out, then duck back down. Never stay exposed." : "Le système de couverture est essentiel. Restez derrière un obstacle, visez en sortant et replongez-vous. Ne restez jamais à découvert.", icon: <Shield className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Prepare your loadout" : "Préparez votre loadout", desc: isEn ? "Before a mission, choose your weapons from the vehicle trunk. An assault rifle + shotgun covers 90% of situations." : "Avant une mission, choisissez vos armes dans le coffre du véhicule. Un fusil d'assaut + un fusil à pompe couvrent 90% des situations.", icon: <Crosshair className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Switch characters wisely" : "Changez de personnage à bon escient", desc: isEn ? "Jason and Lucia have different abilities. Use the best character for each situation." : "Jason et Lucia ont des capacités différentes. Utilisez le meilleur personnage pour chaque situation.", icon: <Users className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Run away when needed" : "Fuyez quand c'est nécessaire", desc: isEn ? "If the police are at 4+ stars, flee rather than fight. Reinforcements are infinite — running is the best strategy." : "Si la police est à 4+ étoiles, fuyez plutôt que de combattre. Les renforts sont infinis — la fuite est la meilleure stratégie.", icon: <Timer className="h-5 w-5 shrink-0" /> },
      ],
    },
    {
      title: isEn ? "MONEY & BUSINESS" : "ARGENT & BUSINESS",
      accent: "sunset",
      tips: [
        { title: isEn ? "Heists = maximum income" : "Braquages = revenus maximum", desc: isEn ? "Main heists pay out the biggest sums. Choose your approach wisely (stealth, aggressive, smart) to maximize profit." : "Les braquages principaux rapportent les plus grosses sommes. Choisissez bien votre approche (furtive, agressive, astucieuse) pour maximiser le gain.", icon: <Building2 className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Invest in the stock market BEFORE missions" : "Investissez en bourse AVANT les missions", desc: isEn ? "Some missions cause stock prices to fluctuate. Buy the affected stocks before starting the mission, then sell after." : "Certaines missions font fluctuer les cours. Achetez les actions concernées avant de lancer la mission, puis vendez après.", icon: <TrendingUp className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Buy businesses early" : "Achetez des business tôt", desc: isEn ? "Revenue-generating properties (nightclubs, garages, etc.) are profitable long-term. Buy them as early as possible." : "Les propriétés génératrices de revenus passifs (nightclubs, garages, etc.) sont rentables sur le long terme. Achetez-en dès que possible.", icon: <Briefcase className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Street races = quick cash" : "Courses de rue = argent rapide", desc: isEn ? "Illegal street races in Vice City are a quick way to earn money between missions." : "Les courses illégales de Vice City sont un moyen rapide de gagner de l'argent entre les missions.", icon: <Car className="h-5 w-5 shrink-0" /> },
      ],
    },
    {
      title: isEn ? "EXPLORATION & SECRETS" : "EXPLORATION & SECRETS",
      accent: "gold",
      tips: [
        { title: isEn ? "Each region has its activities" : "Chaque région a ses activités", desc: isEn ? "Vice City (races), Keys (boats), Grassrivers (hunting/fishing), Port Gellhorn (deliveries), Ambrosia (real estate), Mount Kalaga (climbing)." : "Vice City (courses), Keys (bateaux), Grassrivers (chasse/pêche), Port Gellhorn (livraisons), Ambrosia (immobilier), Mont Kalaga (escalade).", icon: <Map className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Dive underwater" : "Plongez sous l'eau", desc: isEn ? "The speargun unlocks underwater exploration. Shipwrecks and treasures are hidden beneath the surface." : "Le fusil harpon ouvre l'exploration sous-marine. Des épaves et des trésors sont cachés sous la surface.", icon: <Compass className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Listen to NPC conversations" : "Écoutez les conversations PNJ", desc: isEn ? "Pedestrians, vendors and radio broadcasts give clues about secret activities and random events." : "Les passants, les vendeurs et les radiodiffuseurs donnent des indices sur des activités secrètes et des événements aléatoires.", icon: <Ear className="h-5 w-5 shrink-0" /> },
        { title: isEn ? "Come back with new abilities" : "Revenez avec de nouvelles capacités", desc: isEn ? "Some areas are more accessible with equipment unlocked later in the story. Revisit previously explored locations." : "Certaines zones sont plus accessibles avec des équipements débloqués plus tard dans l'histoire. Revisitez les lieux précédents.", icon: <RefreshCw className="h-5 w-5 shrink-0" /> },
      ],
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "GTA 6 Tips" : "Astuces GTA 6", url: `${BASE_URL}${isEn ? "/en/tips-gta-6" : "/astuces-gta-6"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/tips-gta-6" : "/astuces-gta-6"}`),
        ]}
      />
      <SectionPage
        title={isEn ? "TIPS &" : "ASTUCES & TIPS"}
        titleAccent={isEn ? "GTA 6" : "GTA 6 —"}
        subtitle={isEn
          ? "The best tips, advice and strategies to master GTA 6 from day one."
          : "Les meilleures astuces, conseils et stratégies pour maîtriser GTA 6 dès le premier jour."}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              {isEn ? (
                <>
                  <strong className="text-accent-teal">Tips based on trailers and confirmed mechanics.</strong> Details will be refined after the game launches on November 19, 2026.
                </>
              ) : (
                <>
                  <strong className="text-accent-teal">Astuces basées sur les trailers et les mécaniques confirmées.</strong> Les tips seront affinés avec des détails précis après la sortie du jeu le 19 novembre 2026.
                </>
              )}
            </p>
          </div>
        </div>

        {tipSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[section.accent]} mb-5 border-b border-border/50 pb-2`}>
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.tips.map((tip) => (
                <div key={tip.title} className={`${accentCard[section.accent]} p-5`} data-plate="teal">
                  <div className="flex items-start gap-3">
                    {tip.icon}
                    <div>
                      <h3 className="font-semibold text-text-primary">{tip.title}</h3>
                      <p className="mt-1 text-sm text-text-muted">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick links */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="teal">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {isEn ? "COMPLEMENTARY GUIDES" : "GUIDES COMPLEMENTS"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href={codesPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Gamepad2 className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{isEn ? "Cheat Codes" : "Codes de triche"}</h3>
                <p className="text-xs text-text-muted">{isEn ? "All PS5, Xbox, PC cheat codes" : "Tous les cheat codes PS5, Xbox, PC"}</p>
              </div>
            </Link>
            <Link href={moneyPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Coins className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{isEn ? "Make Money" : "Gagner de l'argent"}</h3>
                <p className="text-xs text-text-muted">{isEn ? "Heists, businesses, investments" : "Braquages, business, investissements"}</p>
              </div>
            </Link>
            <Link href={walkthroughPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Map className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{isEn ? "Walkthrough & Guide" : "Solution & Guide"}</h3>
                <p className="text-xs text-text-muted">{isEn ? "Step-by-step mission guide" : "Guide pas à pas des missions"}</p>
              </div>
            </Link>
            <Link href={secretsPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Search className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{isEn ? "Secrets & Easter Eggs" : "Secrets & Easter Eggs"}</h3>
                <p className="text-xs text-text-muted">{isEn ? "Mysteries and hidden references" : "Mystères et références cachées"}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="teal">
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

        <div className="mt-8 text-center space-x-4">
          <Link href={codesPath} className="text-accent-primary hover:underline">{isEn ? "Cheat Codes →" : "Codes de triche →"}</Link>
          <Link href={moneyPath} className="text-accent-primary hover:underline">{isEn ? "Make Money →" : "Gagner argent →"}</Link>
          <Link href={cheatsPath} className="text-accent-primary hover:underline">{isEn ? "Cheats →" : "Code triche →"}</Link>
        </div>
      </SectionPage>
    </>
  );
}