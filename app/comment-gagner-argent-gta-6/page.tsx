import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Store, Target, Briefcase, Home, Wrench, TrendingUp, BarChart3, Brain, Fish, Car, Package } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comment gagner argent GTA 6 — Guide farming & astuces GTA VI",
  description:
    "Toutes les méthodes pour gagner de l'argent dans GTA 6 (GTA VI) : missions, braquages, business, investments, astuces farming. Guide complet francophone.",
  alternates: { canonical: "/comment-gagner-argent-gta-6" },
  keywords: [
    "comment gagner argent GTA 6",
    "argent GTA 6",
    "farm argent GTA 6",
    "astuces argent GTA VI",
    "braquages GTA 6",
    "business GTA 6",
    "gagner argent Vice City",
    "guide richesse GTA 6",
  ],
  openGraph: {
    title: "Comment gagner argent GTA 6 | CodeTricheGTA6",
    description: "Guide complet pour gagner de l'argent dans GTA 6 : missions, braquages, business et astuces farming.",
    url: "/comment-gagner-argent-gta-6",
    type: "article",
  },
};

const faqs = [
  {
    question: "Comment gagner de l'argent rapidement dans GTA 6 ?",
    answer:
      "Les méthodes principales confirmées dans GTA 6 incluent les braquages (heists), les missions de l'histoire, la gestion de business (établissements achetables), les investissements en bourse in-game et les activités secondaires comme la chasse et la pêche. Les braquages seraient la source de revenus la plus lucrative.",
  },
  {
    question: "Y a-t-il une bourse dans GTA 6 ?",
    answer:
      "D'après les trailers et screenshots officiels, GTA 6 inclut un système d'investissement sur les marchés financiers de Vice City (BAWSAQ et LCN), similaire à GTA V mais avec davantage de profondeur. Les prix fluctueraient en fonction des actions du joueur.",
  },
  {
    question: "Peut-on acheter des propriétés dans GTA 6 ?",
    answer:
      "Oui. GTA 6 permet l'achat et la gestion de propriétés, y compris des businesses générant des revenus passifs. Le système est inspiré de GTA V Online mais avec davantage de profondeur et de personnalisation.",
  },
  {
    question: "Les braquages rapportent-ils beaucoup d'argent dans GTA 6 ?",
    answer:
      "Les braquages (heists) sont le cœur du gameplay de GTA 6 et devraient être la source de revenus la plus importante, comme dans tous les GTA. Rockstar a confirmé un système de braquages plus élaboré avec plusieurs approches possibles.",
  },
];

const methods = [
  {
    title: "BRAQUAGES (HEISTS)",
    accent: "primary" as const,
    items: [
      { name: "Braquages principaux", desc: "Missions scénarisées à plusieurs étapes, la source de revenus la plus lucrative confirmée dans les trailers.", icon: <Building2 className="h-5 w-5" /> },
      { name: "Braquages secondaires", desc: "Vols de magasins, cambriolages et attaques de convois rapportant des sommes plus modestes.", icon: <Store className="h-5 w-5" /> },
      { name: "Approches multiples", desc: "Chaque braquage offre plusieurs stratégies (silencieuse, brute, astucieuse) affectant le gain final.", icon: <Target className="h-5 w-5" /> },
    ],
  },
  {
    title: "BUSINESS & PROPRIÉTÉS",
    accent: "sunset" as const,
    items: [
      { name: "Entreprises achetables", desc: "Achetez et gérez des businesses à Vice City générant des revenus passifs réguliers.", icon: <Briefcase className="h-5 w-5" /> },
      { name: "Immobilier", desc: "Plusieurs propriétés disponibles à l'achat, du studio au manoir, avec revenus locatifs.", icon: <Home className="h-5 w-5" /> },
      { name: "Customisation de business", desc: "Personnalisez vos établissements pour augmenter leurs revenus (déco, personnel, stock).", icon: <Wrench className="h-5 w-5" /> },
    ],
  },
  {
    title: "INVESTISSEMENTS",
    accent: "teal" as const,
    items: [
      { name: "Bourse BAWSAQ", desc: "Marché influencé par les actions des joueurs en ligne. Achetez bas, vendez haut.", icon: <TrendingUp className="h-5 w-5" /> },
      { name: "Bourse LCN", desc: "Marché local de Vice City, plus prévisible mais moins volatil que BAWSAQ.", icon: <BarChart3 className="h-5 w-5" /> },
      { name: "Missions de manipulation", desc: "Certaines missions influencent les cours de bourse — planifiez vos investissements en amont.", icon: <Brain className="h-5 w-5" /> },
    ],
  },
  {
    title: "ACTIVITÉS SECONDAIRES",
    accent: "gold" as const,
    items: [
      { name: "Chasse & pêche", desc: "Vendez vos prises au marché de Port Gellhorn et dans les marais de Grassrivers.", icon: <Fish className="h-5 w-5" /> },
      { name: "Courses de rue", desc: "Participez aux courses illégales de Vice City pour gagner des prix et des véhicules.", icon: <Car className="h-5 w-5" /> },
      { name: "Missions de livraison", desc: "Travaillez pour des PNJ en livrant des marchandises à travers Leonida.", icon: <Package className="h-5 w-5" /> },
    ],
  },
];

const accentClasses = {
  primary: { card: "card-base", text: "text-accent-primary", border: "border-accent-primary/20" },
  sunset: { card: "card-base", text: "text-accent-sunset", border: "border-accent-sunset/20" },
  teal: { card: "card-base", text: "text-accent-teal", border: "border-accent-teal/20" },
  gold: { card: "card-base", text: "text-yellow-400", border: "border-yellow-400/20" },
};

export default function CommentGagnerArgentPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Comment gagner argent GTA 6", url: `${BASE_URL}/comment-gagner-argent-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/comment-gagner-argent-gta-6`),
        ]}
      />
      <SectionPage
        title="ARGENT"
        titleAccent="COMMENT GAGNER DE L'—"
        subtitle="Toutes les méthodes confirmées pour gagner de l'argent dans GTA 6 — braquages, business, investissements et activités secondaires."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Informations basées sur les trailers et sources officielles.</strong> Les détails chiffrés (montants exacts, rentabilité) seront ajoutés après la sortie du jeu le 19 novembre 2026.
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
            ASTUCES DE FARMING
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Priorité aux braquages</strong> — Les braquages principaux offrent les plus grosses récompenses. Préparez votre équipe et votre équipement avant de vous lancer.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Investissez tôt</strong> — Achetez des propriétés et des business dès que possible pour maximiser les revenus passifs tout au long de l'histoire.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Surveillez la bourse</strong> — Les missions de l'histoire influencent les cours. Investissez avant les missions qui vont faire fluctuer le marché.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Coffre de véhicule</strong> — Stockez vos armes et objets de valeur dans le coffre de votre voiture pour les récupérer gratuitement après une mission.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
              <span><strong className="text-text-primary">Activités secondaires</strong> — Les courses de rue, la chasse et les missions de livraison sont des sources de revenus régulières entre les braquages.</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
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