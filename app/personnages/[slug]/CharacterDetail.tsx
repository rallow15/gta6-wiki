"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type { Character } from "@/lib/characters";

export default function CharacterDetail({ character }: { character: Character }) {
  const accentColor = character.role === "Protagoniste jouable"
    ? { text: "text-neon-pink", bg: "bg-neon-pink/10", border: "border-neon-pink/30" }
    : character.role === "Antagoniste"
      ? { text: "text-sunset-orange", bg: "bg-sunset-orange/10", border: "border-sunset-orange/30" }
      : { text: "text-lagoon-cyan", bg: "bg-lagoon-cyan/10", border: "border-lagoon-cyan/30" };

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
              src={character.image}
              alt={character.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium uppercase tracking-wider ${accentColor.bg} ${accentColor.text} ${accentColor.border} border`}>
                {character.role}
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl tracking-wider text-text-primary">
                {character.name}
              </h1>
              <p className="mt-1 text-text-secondary">Origine : {character.origin}</p>
            </div>
          </motion.div>

          {/* Quote */}
          {character.quote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 glass-card p-5 border-lagoon-cyan/20"
            >
              <blockquote className={`text-lg italic ${accentColor.text}`}>
                &ldquo;{character.quote}&rdquo;
              </blockquote>
              <cite className="mt-2 block text-sm text-text-muted">— {character.name}</cite>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <h2 className="font-display text-xl tracking-wider text-text-primary mb-4 border-b border-night-violet/50 pb-2">
              COMPETENCES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {character.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-3 text-center">
                  <div className={`font-display text-2xl ${accentColor.text}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <h2 className="font-display text-xl tracking-wider text-text-primary mb-4 border-b border-night-violet/50 pb-2">
              BIOGRAPHIE
            </h2>
            <div className="glass-card p-6 space-y-4">
              {character.bio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Relationships */}
          {character.relationships.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
            >
              <h2 className="font-display text-xl tracking-wider text-text-primary mb-4 border-b border-night-violet/50 pb-2">
                RELATIONS
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {character.relationships.map((rel) => (
                  <Link
                    key={rel.name}
                    href={rel.href}
                    className="glass-card p-4 flex items-center gap-3 group"
                  >
                    <svg className="h-5 w-5 text-text-muted group-hover:text-neon-pink transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-text-primary group-hover:text-neon-pink transition-colors">
                        {rel.name}
                      </div>
                      <div className="text-xs text-text-muted">{rel.relation}</div>
                    </div>
                    <svg className="h-4 w-4 text-text-muted group-hover:text-neon-pink transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/personnages"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-neon-pink transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux personnages
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}