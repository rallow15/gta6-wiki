import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Store, Target, Briefcase, Home, Wrench, TrendingUp, BarChart3, Brain, Fish, Car, Package } from "lucide-react";
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
    fr: "Comment gagner argent GTA 6 — Guide farming & astuces GTA VI",
    en: "How to Make Money in GTA 6 — Farming guide & tips for GTA VI",
  };
  const descriptions: Record<string, string> = {
    fr: "Toutes les méthodes pour gagner de l'argent dans GTA 6 (GTA VI) : missions, braquages, business, investments, astuces farming. Guide complet francophone.",
    en: "All methods to make money in GTA 6 (GTA VI): missions, heists, businesses, investments, farming tips. Complete guide.",
  };
  const keywords = isEn
    ? [
        "how to make money GTA 6",
        "GTA 6 money guide",
        "GTA 6 money farming",
        "GTA 6 money tips",
        "GTA 6 heists money",
        "GTA 6 business",
        "make money Vice City",
        "GTA 6 wealth guide",
      ]
    : [
        "comment gagner argent GTA 6",
        "argent GTA 6",
        "farm argent GTA 6",
        "astuces argent GTA VI",
        "braquages GTA 6",
        "business GTA 6",
        "gagner argent Vice City",
        "guide richesse GTA 6",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6",
      languages: {
        fr: "/comment-gagner-argent-gta-6",
        en: "/en/how-to-make-money-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const getFaqs = (isEn: boolean) => [
  {
    question: isEn ? "How to make money fast in GTA 6?" : "Comment gagner de l'argent rapidement dans GTA 6 ?",
    answer: isEn
      ? "The main confirmed methods in GTA 6 include heists, story missions, business management (purchasable establishments), in-game stock market investments, and side activities like hunting and fishing. Heists are expected to be the most lucrative source of income."
      : "Les méthodes principales confirmées dans GTA 6 incluent les braquages (heists), les missions de l'histoire, la gestion de business (établissements achetables), les investissements en bourse in-game et les activités secondaires comme la chasse et la pêche. Les braquages seraient la source de revenus la plus lucrative.",
  },
  {
    question: isEn ? "Is there a stock market in GTA 6?" : "Y a-t-il une bourse dans GTA 6 ?",
    answer: isEn
      ? "Based on official trailers and screenshots, GTA 6 includes an investment system on Vice City's financial markets (BAWSAQ and LCN), similar to GTA V but with more depth. Prices would fluctuate based on player actions."
      : "D'après les trailers et screenshots officiels, GTA 6 inclut un système d'investissement sur les marchés financiers de Vice City (BAWSAQ et LCN), similaire à GTA V mais avec davantage de profondeur. Les prix fluctueraient en fonction des actions du joueur.",
  },
  {
    question: isEn ? "Can you buy properties in GTA 6?" : "Peut-on acheter des propriétés dans GTA 6 ?",
    answer: isEn
      ? "Yes. GTA 6 allows purchasing and managing properties, including businesses that generate passive income. The system is inspired by GTA V Online but with more depth and customization."
      : "Oui. GTA 6 permet l'achat et la gestion de propriétés, y compris des businesses générant des revenus passifs. Le système est inspiré de GTA V Online mais avec davantage de profondeur et de personnalisation.",
  },
  {
    question: isEn ? "Do heists pay well in GTA 6?" : "Les braquages rapportent-ils beaucoup d'argent dans GTA 6 ?",
    answer: isEn
      ? "Heists are at the core of GTA 6's gameplay and are expected to be the most important source of income, as in all GTA games. Rockstar has confirmed a more elaborate heist system with multiple possible approaches."
      : "Les braquages (heists) sont le cœur du gameplay de GTA 6 et devraient être la source de revenus la plus importante, comme dans tous les GTA. Rockstar a confirmé un système de braquages plus élaboré avec plusieurs approches possibles.",
  },
];

const getMethods = (isEn: boolean) => [
  {
    title: isEn ? "HEISTS" : "BRAQUAGES (HEISTS)",
    accent: "primary" as const,
    items: [
      { name: isEn ? "Main Heists" : "Braquages principaux", desc: isEn ? "Multi-stage scripted missions, the most lucrative source of income confirmed in trailers." : "Missions scénarisées à plusieurs étapes, la source de revenus la plus lucrative confirmée dans les trailers.", icon: <Building2 className="h-5 w-5" /> },
      { name: isEn ? "Side Heists" : "Braquages secondaires", desc: isEn ? "Store robberies, burglaries and convoy attacks yielding smaller sums." : "Vols de magasins, cambriolages et attaques de convois rapportant des sommes plus modestes.", icon: <Store className="h-5 w-5" /> },
      { name: isEn ? "Multiple Approaches" : "Approches multiples", desc: isEn ? "Each heist offers multiple strategies (stealth, brute force, clever) affecting the final payout." : "Chaque braquage offre plusieurs stratégies (silencieuse, brute, astucieuse) affectant le gain final.", icon: <Target className="h-5 w-5" /> },
    ],
  },
  {
    title: isEn ? "BUSINESSES & PROPERTIES" : "BUSINESS & PROPRIÉTÉS",
    accent: "sunset" as const,
    items: [
      { name: isEn ? "Purchasable Businesses" : "Entreprises achetables", desc: isEn ? "Buy and manage businesses in Vice City generating regular passive income." : "Achetez et gérez des businesses à Vice City générant des revenus passifs réguliers.", icon: <Briefcase className="h-5 w-5" /> },
      { name: isEn ? "Real Estate" : "Immobilier", desc: isEn ? "Multiple properties available for purchase, from studios to mansions, with rental income." : "Plusieurs propriétés disponibles à l'achat, du studio au manoir, avec revenus locatifs.", icon: <Home className="h-5 w-5" /> },
      { name: isEn ? "Business Customization" : "Customisation de business", desc: isEn ? "Customize your establishments to increase revenue (decor, staff, stock)." : "Personnalisez vos établissements pour augmenter leurs revenus (déco, personnel, stock).", icon: <Wrench className="h-5 w-5" /> },
    ],
  },
  {
    title: isEn ? "INVESTMENTS" : "INVESTISSEMENTS",
    accent: "teal" as const,
    items: [
      { name: isEn ? "BAWSAQ Stock Market" : "Bourse BAWSAQ", desc: isEn ? "Market influenced by online player actions. Buy low, sell high." : "Marché influencé par les actions des joueurs en ligne. Achetez bas, vendez haut.", icon: <TrendingUp className="h-5 w-5" /> },
      { name: isEn ? "LCN Stock Market" : "Bourse LCN", desc: isEn ? "Vice City local market, more predictable but less volatile than BAWSAQ." : "Marché local de Vice City, plus prévisible mais moins volatil que BAWSAQ.", icon: <BarChart3 className="h-5 w-5" /> },
      { name: isEn ? "Manipulation Missions" : "Missions de manipulation", desc: isEn ? "Certain missions influence stock prices — plan your investments ahead of time." : "Certaines missions influencent les cours de bourse — planifiez vos investissements en amont.", icon: <Brain className="h-5 w-5" /> },
    ],
  },
  {
    title: isEn ? "SIDE ACTIVITIES" : "ACTIVITÉS SECONDAIRES",
    accent: "gold" as const,
    items: [
      { name: isEn ? "Hunting & Fishing" : "Chasse & pêche", desc: isEn ? "Sell your catches at the Port Gellhorn market and in the Grassrivers swamps." : "Vendez vos prises au marché de Port Gellhorn et dans les marais de Grassrivers.", icon: <Fish className="h-5 w-5" /> },
      { name: isEn ? "Street Races" : "Courses de rue", desc: isEn ? "Compete in illegal races across Vice City to win prizes and vehicles." : "Participez aux courses illégales de Vice City pour gagner des prix et des véhicules.", icon: <Car className="h-5 w-5" /> },
      { name: isEn ? "Delivery Missions" : "Missions de livraison", desc: isEn ? "Work for NPCs delivering goods across Leonida." : "Travaillez pour des PNJ en livrant des marchandises à travers Leonida.", icon: <Package className="h-5 w-5" /> },
    ],
  },
];

const accentClasses = {
  primary: { card: "card-base", text: "text-accent-primary", border: "border-accent-primary/20" },
  sunset: { card: "card-base", text: "text-accent-sunset", border: "border-accent-sunset/20" },
  teal: { card: "card-base", text: "text-accent-teal", border: "border-accent-teal/20" },
  gold: { card: "card-base", text: "text-yellow-400", border: "border-yellow-400/20" },
};

export default async function CommentGagnerArgentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const faqs = getFaqs(isEn);
  const methods = getMethods(isEn);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "How to Make Money GTA 6" : "Comment gagner argent GTA 6", url: `${BASE_URL}${isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6"}`),
        ]}
      />
      <SectionPage
        title={isEn ? "MONEY" : "ARGENT"}
        titleAccent={isEn ? "HOW TO MAKE —" : "COMMENT GAGNER DE L'—"}
        subtitle={isEn
          ? "All confirmed methods to make money in GTA 6 — heists, businesses, investments and side activities."
          : "Toutes les méthodes confirmées pour gagner de l'argent dans GTA 6 — braquages, business, investissements et activités secondaires."
        }
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{isEn ? "Information based on trailers and official sources." : "Informations basées sur les trailers et sources officielles."}</strong>{" "}
              {isEn
                ? "Detailed figures (exact amounts, profitability) will be added after the game releases on November 19, 2026."
                : "Les détails chiffrés (montants exacts, rentabilité) seront ajoutés après la sortie du jeu le 19 novembre 2026."
              }
            </p>
          </div>
        </div>

        {methods.map((section) => {
          const colors = accentClasses[section.accent];
          return (
            <div key={section.title} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${colors.text} mb-5 border-b border-border/50 pb-2`}>
                {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <div key={item.name} className={`${colors.card} p-5`} data-plate="primary">
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.name}</h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Tips section */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {isEn ? "FARMING TIPS" : "ASTUCES DE FARMING"}
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">{isEn ? "Prioritize heists" : "Priorité aux braquages"}</strong> — {isEn ? "Main heists offer the biggest rewards. Prepare your team and equipment before diving in." : "Les braquages principaux offrent les plus grosses récompenses. Préparez votre équipe et votre équipement avant de vous lancer."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">{isEn ? "Invest early" : "Investissez tôt"}</strong> — {isEn ? "Buy properties and businesses as soon as possible to maximize passive income throughout the story." : "Achetez des propriétés et des business dès que possible pour maximiser les revenus passifs tout au long de l'histoire."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">{isEn ? "Watch the stock market" : "Surveillez la bourse"}</strong> — {isEn ? "Story missions influence stock prices. Invest before missions that will shake up the market." : "Les missions de l'histoire influencent les cours. Investissez avant les missions qui vont faire fluctuer le marché."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">{isEn ? "Vehicle trunk" : "Coffre de véhicule"}</strong> — {isEn ? "Store your weapons and valuables in your car trunk to recover them for free after a mission." : "Stockez vos armes et objets de valeur dans le coffre de votre voiture pour les récupérer gratuitement après une mission."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">{isEn ? "Side activities" : "Activités secondaires"}</strong> — {isEn ? "Street races, hunting and delivery missions are regular income sources between heists." : "Les courses de rue, la chasse et les missions de livraison sont des sources de revenus régulières entre les braquages."}</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
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