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

const faqs = [
  {
    question: "Par où commencer dans GTA 6 ?",
    answer:
      "Commencez par les missions principales de l'histoire pour débloquer les mécaniques de base (conduite, combat, braquages). Ensuite, investissez dans des propriétés génératrices de revenus et explorez les activités secondaires pour maximiser vos gains.",
  },
  {
    question: "Quelles astuces pour gagner de l'argent vite ?",
    answer:
      "Priorisez les braquages pour les grosses sommes, investissez en bourse avant les missions qui impactent les cours, et achetez des business le plus tôt possible pour les revenus passifs. Consultez notre guide complet argent pour plus de détails.",
  },
  {
    question: "Y a-t-il des astuces pour les combats dans GTA 6 ?",
    answer:
      "Utilisez le système de couverture, alternez entre les armes selon la situation (fusil à pompe au corps-à-corps, sniper à distance), et exploitez le système de sacoche pour préparer des loadouts adaptés à chaque mission via le coffre de véhicule.",
  },
  {
    question: "Comment bien explorer la carte de GTA 6 ?",
    answer:
      "Prenez le temps d'explorer chaque région (Vice City, Keys, Grassrivers, Port Gellhorn, Ambrosia, Mont Kalaga). Utilisez les véhicules rapides pour les routes, les bateaux pour les côtes et les hélicoptères pour les zones montagneuses. Revenez avec de nouvelles capacités pour accéder aux zones bloquées.",
  },
];

const tipSections = [
  {
    title: "DÉMARRAGE — LES ESSENTIELS",
    accent: "teal",
    tips: [
      { title: "Suivez l'histoire d'abord", desc: "Les missions principales débloquent les mécaniques clés : conduite, combat, braquages, customisation. Ne vous éparpillez pas au début.", icon: <Target className="h-5 w-5 shrink-0" /> },
      { title: "Achetez un garage rapidement", desc: "Un garage vous permet de stocker des véhicules et de changer de loadout d'armes via le coffre. C'est un investissement prioritaire.", icon: <Home className="h-5 w-5 shrink-0" /> },
      { title: "Apprenez le système de sacoche", desc: "Vous ne pouvez pas porter toutes les armes. Préparez des loadouts dans le coffre de votre véhicule avant chaque mission.", icon: <Backpack className="h-5 w-5 shrink-0" /> },
      { title: "Explorez Vice City à pied", desc: "Les ruelles, les toits et les zones cachées regorgent de collectibles et de secrets. La voiture fait tout rater.", icon: <Footprints className="h-5 w-5 shrink-0" /> },
      { title: "Sauvegardez souvent", desc: "GTA 6 a des sauvegardes automatiques, mais faites aussi des sauvegardes manuelles avant les braquages et les décisions importantes.", icon: <Save className="h-5 w-5 shrink-0" /> },
    ],
  },
  {
    title: "COMBAT & STRATÉGIE",
    accent: "primary",
    tips: [
      { title: "Utilisez les couvertures", desc: "Le système de couverture est essentiel. Restez derrière un obstacle, visez en sortant et replongez-vous. Ne restez jamais à découvert.", icon: <Shield className="h-5 w-5 shrink-0" /> },
      { title: "Préparez votre loadout", desc: "Avant une mission, choisissez vos armes dans le coffre du véhicule. Un fusil d'assaut + un fusil à pompe couvrent 90% des situations.", icon: <Crosshair className="h-5 w-5 shrink-0" /> },
      { title: "Changez de personnage à bon escient", desc: "Jason et Lucia ont des capacités différentes. Utilisez le meilleur personnage pour chaque situation.", icon: <Users className="h-5 w-5 shrink-0" /> },
      { title: "Fuyez quand c'est nécessaire", desc: "Si la police est à 4+ étoiles, fuyez plutôt que de combattre. Les renforts sont infinis — la fuite est la meilleure stratégie.", icon: <Timer className="h-5 w-5 shrink-0" /> },
    ],
  },
  {
    title: "ARGENT & BUSINESS",
    accent: "sunset",
    tips: [
      { title: "Braquages = revenus maximum", desc: "Les braquages principaux rapportent les plus grosses sommes. Choisissez bien votre approche (furtive, agressive, astucieuse) pour maximiser le gain.", icon: <Building2 className="h-5 w-5 shrink-0" /> },
      { title: "Investissez en bourse AVANT les missions", desc: "Certaines missions font fluctuer les cours. Achetez les actions concernées avant de lancer la mission, puis vendez après.", icon: <TrendingUp className="h-5 w-5 shrink-0" /> },
      { title: "Achetez des business tôt", desc: "Les propriétés génératrices de revenus passifs (nightclubs, garages, etc.) sont rentables sur le long terme. Achetez-en dès que possible.", icon: <Briefcase className="h-5 w-5 shrink-0" /> },
      { title: "Courses de rue = argent rapide", desc: "Les courses illégales de Vice City sont un moyen rapide de gagner de l'argent entre les missions.", icon: <Car className="h-5 w-5 shrink-0" /> },
    ],
  },
  {
    title: "EXPLORATION & SECRETS",
    accent: "gold",
    tips: [
      { title: "Chaque région a ses activités", desc: "Vice City (courses), Keys (bateaux), Grassrivers (chasse/pêche), Port Gellhorn (livraisons), Ambrosia (immobilier), Mont Kalaga (escalade).", icon: <Map className="h-5 w-5 shrink-0" /> },
      { title: "Plongez sous l'eau", desc: "Le fusil harpon ouvre l'exploration sous-marine. Des épaves et des trésors sont cachés sous la surface.", icon: <Compass className="h-5 w-5 shrink-0" /> },
      { title: "Écoutez les conversations PNJ", desc: "Les passants, les vendeurs et les radiodiffuseurs donnent des indices sur des activités secrètes et des événements aléatoires.", icon: <Ear className="h-5 w-5 shrink-0" /> },
      { title: "Revenez avec de nouvelles capacités", desc: "Certaines zones sont plus accessibles avec des équipements débloqués plus tard dans l'histoire. Revisitez les lieux précédents.", icon: <RefreshCw className="h-5 w-5 shrink-0" /> },
    ],
  },
];

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentCard = {
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
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Astuces GTA 6", url: `${BASE_URL}/astuces-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/astuces-gta-6`),
        ]}
      />
      <SectionPage
        title="ASTUCES & TIPS"
        titleAccent="GTA 6 —"
        subtitle="Les meilleures astuces, conseils et stratégies pour maîtriser GTA 6 dès le premier jour."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Astuces basées sur les trailers et les mécaniques confirmées.</strong> Les tips seront affinés avec des détails précis après la sortie du jeu le 19 novembre 2026.
            </p>
          </div>
        </div>

        {tipSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[section.accent as keyof typeof accentColor]} mb-5 border-b border-border/50 pb-2`}>
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.tips.map((tip) => (
                <div key={tip.title} className={`${accentCard[section.accent as keyof typeof accentCard]} p-5`} data-plate="teal">
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
            GUIDES COMPLEMENTS
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/codes" className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Gamepad2 className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Codes de triche</h3>
                <p className="text-xs text-text-muted">Tous les cheat codes PS5, Xbox, PC</p>
              </div>
            </Link>
            <Link href="/comment-gagner-argent-gta-6" className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Coins className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Gagner de l'argent</h3>
                <p className="text-xs text-text-muted">Braquages, business, investissements</p>
              </div>
            </Link>
            <Link href="/solution-gta-6-guide-missions" className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Map className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Solution & Guide</h3>
                <p className="text-xs text-text-muted">Guide pas à pas des missions</p>
              </div>
            </Link>
            <Link href="/secrets-easter-eggs-gta-6" className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Search className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">Secrets & Easter Eggs</h3>
                <p className="text-xs text-text-muted">Mystères et références cachées</p>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="teal">
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

        <div className="mt-8 text-center space-x-4">
          <Link href="/codes" className="text-accent-primary hover:underline">Codes de triche →</Link>
          <Link href="/comment-gagner-argent-gta-6" className="text-accent-primary hover:underline">Gagner argent →</Link>
          <Link href="/code-triche-gta-6" className="text-accent-primary hover:underline">Code triche →</Link>
        </div>
      </SectionPage>
    </>
  );
}