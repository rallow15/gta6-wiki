"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Car, Crosshair, Users, Map, Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import CountdownTimer from "./CountdownTimer";
import { MagneticButton } from "@/components/magnetic";
import { ParallaxTiltCard } from "@/components/ParallaxTiltCard";
import { TextScramble } from "@/components/TextScramble";
import { NeonBeams } from "@/components/NeonBeams";

const sections = [
  { key: "codes", href: "/codes", icon: Code, color: "neon-pink" },
  { key: "vehicles", href: "/vehicles", icon: Car, color: "sunset-orange" },
  { key: "weapons", href: "/weapons", icon: Crosshair, color: "lagoon-cyan" },
  { key: "characters", href: "/characters", icon: Users, color: "neon-pink" },
  { key: "locations", href: "/locations", icon: Map, color: "sand-yellow" },
  { key: "news", href: "/news", icon: Newspaper, color: "lagoon-cyan" },
];

const colorMap: Record<string, { card: string; text: string }> = {
  "neon-pink": { card: "nb-card", text: "text-neon-pink" },
  "sunset-orange": { card: "nb-card-orange", text: "text-sunset-orange" },
  "lagoon-cyan": { card: "nb-card-cyan", text: "text-lagoon-cyan" },
  "sand-yellow": { card: "nb-card-yellow", text: "text-sand-yellow" },
};

export default function Hero() {
  const t = useTranslations("Hero");
  const sections_data = sections;
  const countdownLabel = t("countdownLabel");
  const ctaLabel = t("cta");
  const logoAlt = t("logoAlt");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center sm:object-top"
        sizes="100vw"
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
            <motion.div
              whileHover={{ scale: 1.02, filter: "drop-shadow(0 0 60px rgba(255,46,154,0.5))" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-pointer"
            >
              <Image
                src="/images/logo/logo-neon-sign.webp"
                alt={logoAlt}
                width={800}
                height={533}
                priority
                style={{ height: "auto" }}
                className="w-full max-w-[640px] sm:max-w-[780px] drop-shadow-[0_0_40px_rgba(255,46,154,0.3)]"
              />
            </motion.div>
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
          {sections_data.map((section) => {
            const colors = colorMap[section.color];
            return (
              <ParallaxTiltCard key={section.key} maxTilt={6} shadowIntensity={0}>
                <Link
                  href={section.href as any}
                  className={`${colors.card} nb-press p-4 sm:p-5 text-left group block`}
                >
                  {(() => {
                    const IconComponent = section.icon;
                    return <IconComponent className={`h-6 w-6 ${colors.text} mb-2 transition-transform group-hover:scale-125`} />;
                  })()}
                  <h3 className={`font-display tracking-wider text-sm sm:text-base ${colors.text}`}>
                    {t(`sections.${section.key}.label`)}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{t(`sections.${section.key}.desc`)}</p>
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
            className="nb-btn"
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