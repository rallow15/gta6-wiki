import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    fr: "Date de sortie GTA 6 : le 19 novembre 2026",
    en: "GTA 6 Release Date: November 19, 2026",
  };
  const descriptions: Record<string, string> = {
    fr: "Date de sortie de GTA 6 (Grand Theft Auto VI) : 19 novembre 2026 sur PS5, Xbox Series X|S et PC. Historique des reports, éditions, prix et plateformes.",
    en: "GTA 6 (Grand Theft Auto VI) release date: November 19, 2026 on PS5, Xbox Series X|S and PC. Delay history, editions, pricing and platforms.",
  };
  const keywords = isEn
    ? [
        "GTA 6 release date",
        "when does GTA 6 come out",
        "GTA 6 launch date",
        "GTA VI release date",
        "GTA 6 November 2026",
        "GTA 6 delay",
        "GTA 6 platforms",
      ]
    : [
        "date de sortie GTA 6",
        "quand sort GTA 6",
        "sortie GTA 6",
        "GTA 6 release date",
        "GTA VI date de sortie",
        "GTA 6 novembre 2026",
        "report GTA 6",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/release-date-gta-6" : "/date-de-sortie-gta-6",
      languages: {
        fr: "/date-de-sortie-gta-6",
        en: "/en/release-date-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/release-date-gta-6" : "/date-de-sortie-gta-6",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const faqs = [
  {
    question: "Quand sort GTA 6 ?",
    answer:
      "Grand Theft Auto VI (GTA 6) sort le 19 novembre 2026 sur PlayStation 5, Xbox Series X|S et PC, comme annoncé par Rockstar Games le 6 novembre 2025.",
  },
  {
    question: "Sur quelles plateformes sort GTA 6 ?",
    answer:
      "GTA 6 sort sur PlayStation 5, Xbox Series X|S et PC. La PS5 bénéficie de fonctionnalités exclusives DualSense (haptique, gâchettes adaptatives, audio Tempest 3D).",
  },
  {
    question: "Pourquoi GTA 6 a-t-il été reporté ?",
    answer:
      "GTA 6 a connu deux reports officiels : d'abord de l'automne 2025 au 26 mai 2026, puis du 26 mai au 19 novembre 2026. Rockstar justifie ces reports par la volonté d'atteindre le niveau de polish attendu par les fans.",
  },
  {
    question: "Quel est le prix de GTA 6 ?",
    answer:
      "GTA 6 est proposé en deux éditions : l'édition Standard à 79,99$ et l'édition Ultime à 99,99$. Les pré-commandes incluent le Vintage Vice City Pack (Vapid Stanier '55 et garage Shore Court).",
  },
];

export default async function DateSortiePage({
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
            { name: "Date de sortie GTA 6", url: `${BASE_URL}/date-de-sortie-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/date-de-sortie-gta-6`),
        ]}
      />
      <SectionPage
        title="DATE DE SORTIE"
        titleAccent="GTA 6 —"
        subtitle="Grand Theft Auto VI sort le 19 novembre 2026 sur PS5, Xbox Series X|S et PC."
      >
        {/* Release date highlight */}
        <div className="mb-8 neon-glow-card-cyan p-6 sm:p-8 text-center">
          <p className="text-sm uppercase tracking-widest text-text-muted mb-2">
            Date de sortie officielle
          </p>
          <p className="font-display text-3xl sm:text-5xl tracking-wider text-lagoon-cyan neon-text-cyan">
            19 NOVEMBRE 2026
          </p>
          <p className="mt-3 text-text-secondary">
            PlayStation 5 · Xbox Series X|S · PC
          </p>
        </div>

        {/* Timeline of delays */}
        <div className="mb-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-neon-pink mb-5">
            HISTORIQUE DES REPORTS
          </h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                Déc. 2023
              </span>
              <div>
                <p className="text-text-primary font-semibold">Annonce initiale</p>
                <p className="text-sm text-text-muted">
                  Rockstar annonce GTA VI pour l&apos;automne 2025, avec la première bande-annonce et le retour à Vice City.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                2 mai 2025
              </span>
              <div>
                <p className="text-text-primary font-semibold">1er report → 26 mai 2026</p>
                <p className="text-sm text-text-muted">
                  Rockstar repousse la sortie à mai 2026. L&apos;action Take-Two chute d&apos;environ 10%.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-24 text-sm font-semibold text-sunset-orange">
                6 nov. 2025
              </span>
              <div>
                <p className="text-text-primary font-semibold">2e report → 19 nov. 2026</p>
                <p className="text-sm text-text-muted">
                  Date finale confirmée pour un niveau de polish optimal. Nouvelle baisse de ~10% du cours Take-Two.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Editions */}
        <div className="mb-10 grid sm:grid-cols-2 gap-4">
          <div className="neon-glow-card p-6">
            <h3 className="font-display text-xl tracking-wider text-neon-pink mb-2">
              ÉDITION STANDARD
            </h3>
            <p className="text-2xl font-bold text-text-primary mb-3">79,99 $</p>
            <ul className="text-sm text-text-secondary space-y-1.5">
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> Jeu de base GTA VI</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> Vintage Vice City Pack (pré-commande)</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-neon-pink shrink-0" /> 1 mois GTA+ (pré-commande digitale)</li>
            </ul>
          </div>
          <div className="neon-glow-card-orange p-6">
            <h3 className="font-display text-xl tracking-wider text-sunset-orange mb-2">
              ÉDITION ULTIME
            </h3>
            <p className="text-2xl font-bold text-text-primary mb-3">99,99 $</p>
            <ul className="text-sm text-text-secondary space-y-1.5">
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> Véhicules exclusifs (Cheetah &apos;95, Dominator Buggy &apos;67)</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> Boutiques de customisation (Rideout Customs, One-Eyed Willie&apos;s)</li>
              <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-sunset-orange shrink-0" /> Collection de voitures classiques & armes FAILE</li>
            </ul>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-10 neon-glow-card-cyan p-6 sm:p-8 border-lagoon-cyan/20">
          <h2 className="font-display text-2xl tracking-wider text-lagoon-cyan mb-4">
            PLATEFORMES & FONCTIONNALITÉS PS5
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span><strong>PS5</strong> — retours haptiques DualSense, gâchettes adaptatives, haut-parleur manette, audio Tempest 3D. Mention « PS5 Pro Enhanced ».</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span><strong>Xbox Series X|S</strong> — optimisations nouvelle génération.</span></li>
            <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-lagoon-cyan mt-0.5 shrink-0" /><span><strong>PC</strong> — sortie confirmée en même temps que les consoles.</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
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
          <Link href="/actualites" className="text-neon-pink hover:underline">
            Voir toutes les actualités GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}