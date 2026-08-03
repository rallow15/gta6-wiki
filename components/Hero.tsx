"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { MagneticButton } from "@/components/magnetic";
import { ParallaxTiltCard } from "@/components/ParallaxTiltCard";
import { TextScramble } from "@/components/TextScramble";
import { NeonBeams } from "@/components/NeonBeams";

const sections = [
  { href: "/codes", label: "Codes de triche", desc: "PS5, Xbox, PC", icon: "code", color: "neon-pink" },
  { href: "/vehicules", label: "Vehicules", desc: "Voitures, motos, bateaux", icon: "car", color: "sunset-orange" },
  { href: "/armes", label: "Armes", desc: "Arsenal complet", icon: "crosshair", color: "lagoon-cyan" },
  { href: "/personnages", label: "Personnages", desc: "Jason, Lucia & plus", icon: "users", color: "neon-pink" },
  { href: "/lieux", label: "Lieux", desc: "Vice City & Leonida", icon: "map", color: "sand-yellow" },
  { href: "/actualites", label: "Actualites", desc: "Dernieres news", icon: "newspaper", color: "lagoon-cyan" },
];

const iconPaths: Record<string, string> = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  car: "M8 17h8M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM3 11l2-6h14l2 6m-18 0h18M5 11v6m14-6v6",
  crosshair: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v4m0 12v4m10-10h-4M6 12H2",
  users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  newspaper: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6",
};

const colorMap: Record<string, { border: string; hover: string; text: string; glow: string }> = {
  "neon-pink": { border: "border-neon-pink/30", hover: "hover:border-neon-pink/60", text: "text-neon-pink", glow: "neon-glow-card" },
  "sunset-orange": { border: "border-sunset-orange/30", hover: "hover:border-sunset-orange/60", text: "text-sunset-orange", glow: "neon-glow-card-orange" },
  "lagoon-cyan": { border: "border-lagoon-cyan/30", hover: "hover:border-lagoon-cyan/60", text: "text-lagoon-cyan", glow: "neon-glow-card-cyan" },
  "sand-yellow": { border: "border-sand-yellow/30", hover: "hover:border-sand-yellow/60", text: "text-sand-yellow", glow: "neon-glow-card" },
};

export default function Hero() {
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
              alt="GTA 6 CodeTriche — Codes de triche, infos et guides"
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
              Sortie GTA VI — Novembre 2026
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
                  <svg
                    className={`h-6 w-6 ${colors.text} mb-2 transition-transform group-hover:scale-125`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[section.icon]} />
                  </svg>
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
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Voir les codes
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}