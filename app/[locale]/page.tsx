import type { Metadata } from "next";
import { Code, Map, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnimatedContainer from "@/components/AnimatedContainer";
import { JsonLd } from "@/components/JsonLd";
import { videoGameJsonLd, faqJsonLd } from "@/lib/seo";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteName = getSiteName(locale);

  const titles: Record<string, string> = {
    fr: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    en: "GTA6CheatCodes — GTA 6 Cheats, Info & Guides",
  };
  const descriptions: Record<string, string> = {
    fr: "Tous les codes de triche GTA 6 (PS5, Xbox, PC), fiches personnages, véhicules, armes, lieux de Vice City et actualités. Sortie GTA VI le 19 novembre 2026.",
    en: "All GTA 6 cheat codes (PS5, Xbox, PC), character guides, vehicles, weapons, Vice City locations and news. GTA VI releases November 19, 2026.",
  };

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: locale === "fr" ? "/" : "/en/",
      languages: { fr: "/", en: "/en/" },
    },
    openGraph: {
      title: titles[locale] ?? titles.fr,
      description: descriptions[locale] ?? descriptions.fr,
      url: locale === "fr" ? "/" : "/en/",
      type: "website",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const faqs = locale === "en"
    ? [
        {
          question: "When does GTA 6 come out?",
          answer: "Grand Theft Auto VI (GTA 6) releases on November 19, 2026 for PlayStation 5, Xbox Series X|S and PC, following two official delays announced by Rockstar Games.",
        },
        {
          question: "Where to find GTA 6 cheat codes?",
          answer: "GTA 6 cheat codes will be available on GTA6CheatCodes at launch, organized by platform (PS5, Xbox Series, PC) with 1-click copy.",
        },
        {
          question: "What city is GTA 6 set in?",
          answer: "GTA 6 is set in Vice City and the entire fictional state of Leonida, including Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga.",
        },
        {
          question: "Who are the GTA 6 protagonists?",
          answer: "Jason Duval and Lucia Caminos are the two playable protagonists of GTA 6, forming a Bonnie and Clyde duo. Lucia is the first playable female lead in the series.",
        },
      ]
    : [
        {
          question: "Quand sort GTA 6 ?",
          answer: "Grand Theft Auto VI (GTA 6) sort le 19 novembre 2026 sur PlayStation 5, Xbox Series X|S et PC, après deux reports officiels annoncés par Rockstar Games.",
        },
        {
          question: "Où trouver les codes de triche GTA 6 ?",
          answer: "Les codes de triche GTA 6 seront disponibles sur CodeTricheGTA6 à la sortie du jeu, classés par plateforme (PS5, Xbox Series, PC) avec copier en 1 clic.",
        },
        {
          question: "Dans quelle ville se déroule GTA 6 ?",
          answer: "GTA 6 se déroule à Vice City et dans tout l'état fictif de Leonida, incluant les Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga.",
        },
        {
          question: "Qui sont les protagonistes de GTA 6 ?",
          answer: "Jason Duval et Lucia Caminos sont les deux protagonistes jouables de GTA 6, formant un duo à la Bonnie et Clyde. Lucia est la première héroïne jouable de la série.",
        },
      ];

  const features = locale === "en"
    ? [
        { title: "Cheat Codes", desc: "All GTA 6 cheats with 1-click copy. Filter by PS5, Xbox and PC platform." },
        { title: "Interactive Map", desc: "Explore Vice City and all of Leonida. Neighborhoods, shops, garages, secrets." },
        { title: "Complete Guides", desc: "Characters, vehicles, weapons, animals — all stats and game details." },
      ]
    : [
        { title: "Codes de triche", desc: "Tous les codes GTA 6 avec copier en 1 clic. Filtrer par plateforme PS5, Xbox et PC." },
        { title: "Carte interactive", desc: "Explorez Vice City et tout Leonida. Quartiers, magasins, garages, secrets." },
        { title: "Fiches complètes", desc: "Personnages, véhicules, armes, animaux — toutes les stats et détails du jeu." },
      ];

  const trailerLabel = locale === "en" ? "TRAILER" : "BANDE-ANNONCE";
  const sectionTitle = locale === "en"
    ? (<><span className="text-neon-pink neon-text">EVERYTHING</span> ABOUT <span className="text-sunset-orange">GTA VI</span></>)
    : (<><span className="text-neon-pink neon-text">TOUT</span> SUR <span className="text-sunset-orange">GTA VI</span></>);

  const icons = [Code, Map, BookOpen];
  const iconColors = ["neon-pink", "sunset-orange", "lagoon-cyan"];
  const iconBgs = ["bg-neon-pink/10 group-hover:bg-neon-pink/20", "bg-sunset-orange/10 group-hover:bg-sunset-orange/20", "bg-lagoon-cyan/10 group-hover:bg-lagoon-cyan/20"];

  return (
    <>
      <JsonLd
        data={[
          videoGameJsonLd(locale),
          faqJsonLd(faqs, locale === "fr" ? "/" : "/en/"),
        ]}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Trailer section */}
        <AnimatedContainer animation="neonReveal" delay={0.1}>
          <section className="py-16 px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary text-center mb-8">
                <span className="neon-text-cyan text-lagoon-cyan">{trailerLabel}</span>
              </h2>
              <div className="glass-card p-2 sm:p-3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/QdBZY2fkU-0"
                    title="GTA VI Official Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedContainer>

        {/* Features section */}
        <AnimatedContainer animation="fadeInUp" delay={0.15}>
          <section className="py-16 px-4 sm:px-6 border-t border-neon-pink/10">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-3xl sm:text-4xl tracking-wider text-text-primary text-center mb-12">
                {sectionTitle}
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                {features.map((feature, i) => {
                  const IconComponent = icons[i];
                  return (
                    <AnimatedContainer key={i} animation="scaleIn" delay={0.1 + i * 0.1}>
                      <div className="glass-card p-6 text-center group">
                        <div className={`h-12 w-12 mx-auto mb-4 rounded-lg ${iconBgs[i]} flex items-center justify-center transition-colors duration-300`}>
                          <IconComponent className={`h-6 w-6 text-${iconColors[i]}`} />
                        </div>
                        <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
                        <p className="text-sm text-text-muted">{feature.desc}</p>
                      </div>
                    </AnimatedContainer>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedContainer>

      </main>
      <Footer />
    </>
  );
}