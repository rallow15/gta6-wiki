"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type { Location } from "@/lib/data";

export default function LocationDetail({ location }: { location: Location }) {
  const accentColor = location.id === "vice-city"
    ? { text: "text-neon-pink", bg: "bg-neon-pink/10", border: "border-neon-pink/30" }
    : location.id === "leonida-keys"
      ? { text: "text-lagoon-cyan", bg: "bg-lagoon-cyan/10", border: "border-lagoon-cyan/30" }
      : { text: "text-sunset-orange", bg: "bg-sunset-orange/10", border: "border-sunset-orange/30" };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden glass-card border-0"
          >
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium uppercase tracking-wider ${accentColor.bg} ${accentColor.text} ${accentColor.border} border`}>
                {location.type}
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl tracking-wider text-text-primary">
                {location.name}
              </h1>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 glass-card p-6"
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              {location.description}
            </p>
          </motion.div>

          {/* Features / Zones */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <h2 className="font-display text-xl tracking-wider text-text-primary mb-4 border-b border-night-violet/50 pb-2">
              ZONES & POINTS D&apos;INTERET
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {location.features.map((feature) => (
                <div key={feature} className="glass-card p-4 text-center">
                  <span className="text-sm font-medium text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/lieux"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-neon-pink transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux lieux
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}