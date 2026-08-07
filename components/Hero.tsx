"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Car, Crosshair, Users, Map, Newspaper } from "lucide-react";
import { useLocale } from "next-intl";
import CountdownTimer from "./CountdownTimer";
import { MagneticButton } from "@/components/magnetic";
import { ParallaxTiltCard } from "@/components/ParallaxTiltCard";
import { TextScramble } from "@/components/TextScramble";
import { NeonBeams } from "@/components/NeonBeams";

const sectionsFr = [
  { href: "/codes", label: "Codes de triche", desc: "PS5, Xbox, PC", icon: Code, color: "neon-pink" },
  { href: "/vehicules", label: "Véhicules", desc: "Voitures, motos, bateaux", icon: Car, color: "sunset-orange" },
  { href: "/armes", label: "Armes", desc: "Arsenal complet", icon: Crosshair, color: "lagoon-cyan" },
  { href: "/personnages", label: "Personnages", desc: "Jason, Lucia & plus", icon: Users, color: "neon-pink" },
  { href: "/lieux", label: "Lieux", desc: "Vice City & Leonida", icon: Map, color: "sand-yellow" },
  { href: "/actualites", label: "Actualités", desc: "Dernières news", icon: Newspaper, color: "lagoon-cyan" },
];

const sectionsEn = [
  { href: "/codes", label: "Cheat Codes", desc: "PS5, Xbox, PC", icon: Code, color: "neon-pink" },
  { href: "/vehicles", label: "Vehicles", desc: "Cars, bikes, boats", icon: Car, color: "sunset-orange" },
  { href: "/weapons", label: "Weapons", desc: "Full arsenal", icon: Crosshair, color: "lagoon-cyan" },
  { href: "/characters", label: "Characters", desc: "Jason, Lucia & more", icon: Users, color: "neon-pink" },
  { href: "/locations", label: "Locations", desc: "Vice City & Leonida", icon: Map, color: "sand-yellow" },
  { href: "/news", label: "News", desc: "Latest updates", icon: Newspaper, color: "lagoon-cyan" },
];

const colorMap: Record<string, { border: string; hover: string; text: string; glow: string }> = {
  "neon-pink": { border: "border-neon-pink/30", hover: "hover:border-neon-pink/60", text: "text-neon-pink", glow: "neon-glow-card" },
  "sunset-orange": { border: "border-sunset-orange/30", hover: "hover:border-sunset-orange/60", text: "text-sunset-orange", glow: "neon-glow-card-orange" },
  "lagoon-cyan": { border: "border-lagoon-cyan/30", hover: "hover:border-lagoon-cyan/60", text: "text-lagoon-cyan", glow: "neon-glow-card-cyan" },
  "sand-yellow": { border: "border-sand-yellow/30", hover: "hover:border-sand-yellow/60", text: "text-sand-yellow", glow: "neon-glow-card" },
};

export default function Hero() {
  const locale = useLocale();
  const sections = locale === "en" ? sectionsEn : sectionsFr;
  const countdownLabel = locale === "en" ? "GTA VI Release — November 19, 2026" : "Sortie GTA VI — 19 Novembre 2026";
  const ctaLabel = locale === "en" ? "See all codes" : "Voir les codes";
  const logoAlt = locale === "en" ? "GTA 6 CheatCodes — Cheats, Info & Guides" : "GTA 6 CodeTriche — Codes de triche, infos et guides";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated neon beams background */}
      <NeonBeams />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-20 sm:pt-24">
        {/* Title — animated logo with spring */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <h1 className="flex flex-col items-center gap-2">
            {/* AI-generated Logo — Neon Sign */}
            <motion.img
              src="/images/logo/logo-neon-sign.png"
              alt={logoAlt}
              className="w-full max-w-[640px] sm:max-w-[780px] h-auto drop-shadow-[0_0_40px_rgba(255,46,154,0.3)] cursor-pointer"
              whileHover={{ scale: 1.02, filter: "drop-shadow(0 0 60px rgba(255,46,154,0.5))" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </h1>
        </motion.div>

        {/* Countdown with TextScramble */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <p className="text-sm uppercase tracking-widest text-text-muted mb-4">
            <TextScramble duration={1.5} delay={0.5} scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#">
              {countdownLabel}
            </TextScramble>
          </p>
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </motion.div>

        {/* Navigation Grid with ParallaxTilt + Neon glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {sections.map((section) => {
            const colors = colorMap[section.color];
            return (
              <ParallaxTiltCard key={section.href} maxTilt={8} shadowIntensity={0.4}>
                <Link
                  href={section.href}
                  className={`neon-glow-card shimmer-line p-4 sm:p-5 text-left group block ${colors.border} ${colors.hover}`}
                >
                  {(() => {
                    const IconComponent = section.icon;
                    return <IconComponent className={`h-6 w-6 ${colors.text} mb-2 transition-transform group-hover:scale-125`} />;
                  })()}
                  <h3 className={`font-semibold text-sm sm:text-base ${colors.text}`}>
                    {section.label}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{section.desc}</p>
                </Link>
              </ParallaxTiltCard>
            );
          })}
        </motion.div>

        {/* CTA with MagneticButton + Neon Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            strength={25}
            className="neon-pulse-btn inline-flex items-center gap-2 rounded-lg bg-neon-pink px-6 py-3 text-sm font-bold text-white shadow-lg shadow-neon-pink/25 transition-all hover:shadow-neon-pink/40 hover:scale-105"
            onClick={() => {}}
          >
            <Link href="/codes" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              {ctaLabel}
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}