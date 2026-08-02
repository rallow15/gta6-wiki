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
      {/* Background gradient */}
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
            {/* Logo horizontal SVG */}
            <svg className="w-full max-w-[640px] sm:max-w-[780px]" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="heroSunGlow" cx="50%" cy="45%" r="45%">
                  <stop offset="0%" stopColor="#FFC94D" stopOpacity="0.9"/>
                  <stop offset="35%" stopColor="#FF7A3D" stopOpacity="0.7"/>
                  <stop offset="65%" stopColor="#FF2E9A" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#3B0A5C" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="heroTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFC94D"/>
                  <stop offset="40%" stopColor="#FF7A3D"/>
                  <stop offset="70%" stopColor="#FF2E9A"/>
                  <stop offset="100%" stopColor="#FF2E9A"/>
                </linearGradient>
                <linearGradient id="heroCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE"/>
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6"/>
                </linearGradient>
                <filter id="heroNeon" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="b1"/>
                  <feFlood floodColor="#FF2E9A" floodOpacity="0.7"/>
                  <feComposite in2="b1" operator="in" result="g1"/>
                  <feGaussianBlur stdDeviation="3" result="b2"/>
                  <feFlood floodColor="#FFC94D" floodOpacity="0.4"/>
                  <feComposite in2="b2" operator="in" result="g2"/>
                  <feMerge><feMergeNode in="g1"/><feMergeNode in="g2"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="heroCyanF" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feFlood floodColor="#22D3EE" floodOpacity="0.6"/>
                  <feComposite in2="b" operator="in" result="g"/>
                  <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <ellipse cx="450" cy="160" rx="320" ry="220" fill="url(#heroSunGlow)"/>
              <circle cx="450" cy="155" r="90" fill="#FFC94D" fillOpacity="0.1"/>
              <circle cx="450" cy="155" r="55" fill="#FF7A3D" fillOpacity="0.12"/>
              <path d="M80,360 C77,340 72,310 75,280 C76,290 82,305 78,315 C84,295 92,280 88,265 C90,285 86,310 80,330Z" fill="#0B0221" fillOpacity="0.8"/>
              <path d="M50,360 C48,345 45,320 48,300 C49,308 52,315 50,320 C54,308 60,298 57,290 C59,305 56,325 52,340Z" fill="#0B0221" fillOpacity="0.6"/>
              <path d="M820,360 C823,340 828,310 825,280 C824,290 818,305 822,315 C816,295 808,280 812,265 C810,285 814,310 820,330Z" fill="#0B0221" fillOpacity="0.8"/>
              <path d="M850,360 C852,345 855,320 852,300 C851,308 848,315 850,320 C846,308 840,298 843,290 C841,305 844,325 848,340Z" fill="#0B0221" fillOpacity="0.6"/>
              <line x1="120" y1="200" x2="340" y2="200" stroke="#FF2E9A" strokeWidth="0.5" strokeOpacity="0.35"/>
              <line x1="560" y1="200" x2="780" y2="200" stroke="#FF2E9A" strokeWidth="0.5" strokeOpacity="0.35"/>
              <text x="450" y="112" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontSize="32" fontWeight="bold" letterSpacing="16" fill="url(#heroCyanGrad)" filter="url(#heroCyanF)" transform="skewX(-8)">CODE TRICHE</text>
              <text x="450" y="200" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontSize="115" fontWeight="bold" letterSpacing="8" fill="url(#heroTextGrad)" filter="url(#heroNeon)" transform="skewX(-10)">GTA 6</text>
              <text x="450" y="255" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" letterSpacing="5" fill="#FFC94D" fillOpacity="0.8" filter="url(#heroNeon)">TOUS LES CODES &amp; INFOS</text>
              <rect x="310" y="275" width="280" height="2" rx="1" fill="url(#heroTextGrad)" fillOpacity="0.4"/>
            </svg>
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