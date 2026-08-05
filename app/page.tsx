import type { Metadata } from "next";
import { Code, Map, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnimatedContainer from "@/components/AnimatedContainer";
import { JsonLd } from "@/components/JsonLd";
import { videoGameJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
  description:
    "Tous les codes de triche GTA 6 (PS5, Xbox, PC), fiches personnages, véhicules, armes, lieux de Vice City et actualités. Sortie GTA VI le 19 novembre 2026.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    description:
      "Tous les codes de triche GTA 6, fiches personnages, véhicules, armes et lieux. Sortie GTA VI le 19 novembre 2026.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          videoGameJsonLd(),
          faqJsonLd(
            [
              {
                question: "Quand sort GTA 6 ?",
                answer:
                  "Grand Theft Auto VI (GTA 6) sort le 19 novembre 2026 sur PlayStation 5, Xbox Series X|S et PC, après deux reports officiels annoncés par Rockstar Games.",
              },
              {
                question: "Où trouver les codes de triche GTA 6 ?",
                answer:
                  "Les codes de triche GTA 6 seront disponibles sur CodeTricheGTA6 à la sortie du jeu, classés par plateforme (PS5, Xbox Series, PC) avec copier en 1 clic.",
              },
              {
                question: "Dans quelle ville se déroule GTA 6 ?",
                answer:
                  "GTA 6 se déroule à Vice City et dans tout l'état fictif de Leonida, incluant les Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et le Mont Kalaga.",
              },
              {
                question: "Qui sont les protagonistes de GTA 6 ?",
                answer:
                  "Jason Duval et Lucia Caminos sont les deux protagonistes jouables de GTA 6, formant un duo à la Bonnie et Clyde. Lucia est la première héroïne jouable de la série.",
              },
            ],
            "/",
          ),
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
                <span className="neon-text-cyan text-lagoon-cyan">BANDE-ANNONCE</span>
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
                <span className="text-neon-pink neon-text">TOUT</span> SUR <span className="text-sunset-orange">GTA VI</span>
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <AnimatedContainer animation="scaleIn" delay={0.1}>
                  <div className="glass-card p-6 text-center group">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-neon-pink/10 flex items-center justify-center group-hover:bg-neon-pink/20 transition-colors duration-300">
                      <Code className="h-6 w-6 text-neon-pink" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">Codes de triche</h3>
                    <p className="text-sm text-text-muted">
                      Tous les codes GTA 6 avec copier en 1 clic. Filtrer par plateforme PS5, Xbox et PC.
                    </p>
                  </div>
                </AnimatedContainer>
                <AnimatedContainer animation="scaleIn" delay={0.2}>
                  <div className="glass-card p-6 text-center group">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-sunset-orange/10 flex items-center justify-center group-hover:bg-sunset-orange/20 transition-colors duration-300">
                      <Map className="h-6 w-6 text-sunset-orange" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">Carte interactive</h3>
                    <p className="text-sm text-text-muted">
                      Explorez Vice City et tout Leonida. Quartiers, magasins, garages, secrets.
                    </p>
                  </div>
                </AnimatedContainer>
                <AnimatedContainer animation="scaleIn" delay={0.3}>
                  <div className="glass-card p-6 text-center group">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-lagoon-cyan/10 flex items-center justify-center group-hover:bg-lagoon-cyan/20 transition-colors duration-300">
                      <BookOpen className="h-6 w-6 text-lagoon-cyan" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">Fiches completes</h3>
                    <p className="text-sm text-text-muted">
                      Personnages, vehicules, armes, animaux — toutes les stats et details du jeu.
                    </p>
                  </div>
                </AnimatedContainer>
              </div>
            </div>
          </section>
        </AnimatedContainer>

      </main>
      <Footer />
    </>
  );
}