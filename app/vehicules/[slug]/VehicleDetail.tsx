"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Vehicle } from "@/lib/data";

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "Sportive": { text: "text-lagoon-cyan", bg: "bg-lagoon-cyan/10", border: "border-lagoon-cyan/30" },
  "Supercar": { text: "text-neon-pink", bg: "bg-neon-pink/10", border: "border-neon-pink/30" },
  "Muscle": { text: "text-sunset-orange", bg: "bg-sunset-orange/10", border: "border-sunset-orange/30" },
  "SUV": { text: "text-sand-yellow", bg: "bg-sand-yellow/10", border: "border-sand-yellow/30" },
  "Sport compact": { text: "text-lagoon-cyan", bg: "bg-lagoon-cyan/10", border: "border-lagoon-cyan/30" },
  "Classique": { text: "text-sand-yellow", bg: "bg-sand-yellow/10", border: "border-sand-yellow/30" },
  "Moto": { text: "text-sunset-orange", bg: "bg-sunset-orange/10", border: "border-sunset-orange/30" },
  "Bateau": { text: "text-lagoon-cyan", bg: "bg-lagoon-cyan/10", border: "border-lagoon-cyan/30" },
};

export default function VehicleDetail({ vehicle }: { vehicle: Vehicle }) {
  const colors = categoryColors[vehicle.category] || categoryColors["Sportive"];
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState(vehicle.image);
  const allImages = vehicle.images || [vehicle.image];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = `${vehicle.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            className="relative h-72 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden neon-glow-card border-0"
          >
            <Image
              src={selectedImage}
              alt={vehicle.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium uppercase tracking-wider ${colors.bg} ${colors.text} ${colors.border} border`}>
                  {vehicle.category}
                </span>
                {vehicle.edition && (
                  <span className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-sunset-orange/90 text-white">
                    {vehicle.edition}
                  </span>
                )}
              </div>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-text-primary">
                {vehicle.name}
              </h1>
            </div>
          </motion.div>

          {/* Image gallery thumbnails */}
          {allImages.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-3 flex gap-2 overflow-x-auto pb-2"
            >
              {allImages.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 w-32 sm:h-24 sm:w-40 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? "border-neon-pink shadow-lg shadow-neon-pink/30" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${vehicle.name} - vue ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </button>
              ))}
            </motion.div>
          )}

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-3"
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-neon-pink px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-neon-pink/25 transition-all hover:shadow-neon-pink/40 hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Telecharger l&apos;image
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-lg border border-lagoon-cyan/30 px-5 py-2.5 text-sm font-semibold text-lagoon-cyan transition-all hover:border-lagoon-cyan/60 hover:bg-lagoon-cyan/5"
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Lien copie !
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-6.364-6.364L4.32 8.688" />
                  </svg>
                  Partager
                </>
              )}
            </button>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 glass-card p-6"
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              {vehicle.description}
            </p>
          </motion.div>

          {/* Details grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <h2 className="font-display text-xl tracking-wider text-text-primary mb-4 border-b border-night-violet/50 pb-2">
              DETAILS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="neon-glow-card p-4 text-center">
                <div className={`font-display text-lg sm:text-xl ${colors.text}`}>
                  {vehicle.category}
                </div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                  Categorie
                </div>
              </div>
              <div className="neon-glow-card p-4 text-center">
                <div className="font-display text-lg sm:text-xl text-sunset-orange">
                  {vehicle.inspired}
                </div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                  Inspire de
                </div>
              </div>
              <div className="neon-glow-card p-4 text-center">
                <div className={`font-display text-sm sm:text-base ${vehicle.edition ? "text-sunset-orange" : colors.text}`}>
                  {vehicle.edition || "Jeu de base"}
                </div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                  Disponibilite
                </div>
              </div>
            </div>
          </motion.div>

          {/* Source */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 glass-card p-4 border-lagoon-cyan/20"
          >
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-text-secondary">
                <strong className="text-lagoon-cyan">Source officielle :</strong> {vehicle.source}
              </p>
            </div>
          </motion.div>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/vehicules"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-neon-pink transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux vehicules
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}