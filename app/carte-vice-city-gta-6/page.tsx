import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/lib/data";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, itemListJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Carte GTA 6 — Vice City & Leonida, carte de GTA VI",
  description:
    "Carte de GTA 6 (GTA VI) : Vice City, les Leonida Keys, les marais de Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga. Explorez toutes les régions de l'état fictif de Leonida.",
  alternates: { canonical: "/carte-vice-city-gta-6" },
  keywords: [
    "carte GTA 6",
    "map GTA 6",
    "carte Vice City GTA 6",
    "carte Leonida GTA 6",
    "régions GTA 6",
    "map GTA VI",
    "Vice City GTA 6",
  ],
  openGraph: {
    title: "Carte GTA 6 — Vice City & Leonida | CodeTricheGTA6",
    description: "Découvrez toutes les régions de Leonida : Vice City, Keys, Grassrivers, Port Gellhorn, Ambrosia, Mont Kalaga.",
    url: "/carte-vice-city-gta-6",
    type: "website",
  },
};

const faqs = [
  {
    question: "Dans quelle ville se déroule GTA 6 ?",
    answer:
      "GTA 6 se déroule principalement à Vice City, inspirée de Miami, au sein de l'état fictif de Leonida inspiré de la Floride.",
  },
  {
    question: "Quelles régions composent la carte de GTA 6 ?",
    answer:
      "La carte de GTA 6 (Leonida) comprend Vice City, les Leonida Keys, les marais de Grassrivers (Everglades), le port industriel de Port Gellhorn, le quartier résidentiel d'Ambrosia et le parc national du Mont Kalaga.",
  },
  {
    question: "La carte de GTA 6 est-elle plus grande que GTA V ?",
    answer:
      "Rockstar décrit Leonida comme la plus grande et la plus immersive évolution de la série. La carte inclut ville, plages, marais, montagnes et archipel tropical.",
  },
];

export default function CarteViceCityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Lieux", url: `${BASE_URL}/lieux` },
            { name: "Carte GTA 6", url: `${BASE_URL}/carte-vice-city-gta-6` },
          ]),
          itemListJsonLd(
            "Régions de la carte GTA 6",
            `${BASE_URL}/carte-vice-city-gta-6`,
            locations.map((l) => ({
              name: l.name,
              url: `${BASE_URL}/lieux/${l.id}`,
              image: `${BASE_URL}${l.image}`,
            })),
          ),
          faqJsonLd(faqs, `${BASE_URL}/carte-vice-city-gta-6`),
        ]}
      />
      <SectionPage
        title="CARTE GTA 6"
        titleAccent="VICE CITY &"
        subtitle="Explorez Vice City et toutes les régions de l'état fictif de Leonida."
      >
        <div className="mb-8 neon-glow-card-cyan p-6 sm:p-8 border-lagoon-cyan/20">
          <h2 className="font-display text-2xl tracking-wider text-lagoon-cyan mb-3">
            L'ÉTAT DE LEONIDA
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            GTA 6 se déroule dans l&apos;état fictif de <strong className="text-lagoon-cyan">Leonida</strong>, inspiré de la Floride. Au cœur se trouve <strong className="text-neon-pink">Vice City</strong>, métropole néon inspirée de Miami. Autour, un archipel tropical, des marais, un port industriel, des quartiers résidentiels huppés et des montagnes sauvages composent une carte vaste et variée.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/lieux/${loc.id}`}
              className="neon-glow-card shimmer-line overflow-hidden group block"
            >
              <div className="relative h-44 w-full overflow-hidden bg-deep-bg-light">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-deep-bg/80 text-lagoon-cyan border border-lagoon-cyan/30">
                  {loc.type}
                </span>
                <h3 className="absolute bottom-3 left-3 font-display text-xl tracking-wider text-white drop-shadow-lg">
                  {loc.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-text-muted">{loc.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {loc.features.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 glass-card p-6 sm:p-8">
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
          <Link href="/lieux" className="text-neon-pink hover:underline">
            Voir tous les lieux GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}