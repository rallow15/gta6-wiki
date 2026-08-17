"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  image?: string;
  accent?: "pink" | "orange" | "cyan" | "yellow";
  stats?: { label: string; value: string }[];
  // Comment l'image remplit son conteneur. "contain" pour voir toute l'image
  // (pas de rognage), "cover" pour remplir en rognant. Défaut : "cover".
  fit?: "cover" | "contain";
}

const accentMap = {
  pink: {
    nb: "nb-card",
    icon: "text-neon-pink bg-neon-pink/10",
    text: "text-neon-pink",
    gradient: "from-neon-pink/20 via-transparent to-transparent",
  },
  orange: {
    nb: "nb-card-orange",
    icon: "text-sunset-orange bg-sunset-orange/10",
    text: "text-sunset-orange",
    gradient: "from-sunset-orange/20 via-transparent to-transparent",
  },
  cyan: {
    nb: "nb-card-cyan",
    icon: "text-lagoon-cyan bg-lagoon-cyan/10",
    text: "text-lagoon-cyan",
    gradient: "from-lagoon-cyan/20 via-transparent to-transparent",
  },
  yellow: {
    nb: "nb-card-yellow",
    icon: "text-sand-yellow bg-sand-yellow/10",
    text: "text-sand-yellow",
    gradient: "from-sand-yellow/20 via-transparent to-transparent",
  },
};

export default function GameCard({ title, description, href, icon, image, accent = "pink", stats, fit = "cover" }: GameCardProps) {
  const colors = accentMap[accent];
  // Classes entières pour que Tailwind les génère (pas de template literal).
  const objectFitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className={`${colors.nb} nb-press overflow-hidden group block`}
      >
        {/* Image area */}
        {image && (
          <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-deep-bg-light">
            <Image
              src={image}
              alt={title}
              fill
              className={`${objectFitClass} transition-transform duration-700 group-hover:scale-110`}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
        )}
        {!image && icon && (
          <div className={`h-40 sm:h-48 flex items-center justify-center ${colors.icon} transition-colors duration-300`}>
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
          </div>
        )}
        <div className="p-4 sm:p-5">
          <h3 className={`font-display tracking-wide text-text-primary group-hover:${colors.text} transition-colors duration-300`}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-text-muted line-clamp-2">{description}</p>
          {stats && (
            <div className="mt-3 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <span key={stat.label} className="text-xs px-2 py-0.5 rounded-none bg-deep-bg-light border-2 border-night-violet/40 text-text-secondary">
                  {stat.label}: <span className={colors.text}>{stat.value}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}