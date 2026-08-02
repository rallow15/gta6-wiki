import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function Home() {
  return (
    <>
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
                      <svg className="h-6 w-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
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
                      <svg className="h-6 w-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
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
                      <svg className="h-6 w-6 text-lagoon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
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

        {/* Discord CTA */}
        <AnimatedContainer animation="fadeInUp" delay={0.1}>
          <section className="py-16 px-4 sm:px-6">
            <div className="mx-auto max-w-3xl glass-card p-8 sm:p-10 text-center border-lagoon-cyan/20">
              <h2 className="font-display text-3xl tracking-wider text-lagoon-cyan neon-text-cyan mb-3">
                COMMUNAUTE DISCORD
              </h2>
              <p className="text-text-secondary mb-6">
                Rejoins des centaines de fans pour discuter de GTA VI, partager tes decouvertes et trouver des coequipiers.
              </p>
              <a
                href="https://discord.gg/PXDdQF4TPr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-lagoon-cyan/10 border border-lagoon-cyan/30 px-6 py-3 font-semibold text-lagoon-cyan transition-all hover:bg-lagoon-cyan/20 hover:border-lagoon-cyan/50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Rejoindre le serveur Discord
              </a>
            </div>
          </section>
        </AnimatedContainer>
      </main>
      <Footer />
    </>
  );
}