"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TextScramble } from "@/components/TextScramble";

export default function NotFound() {
  const [scrambleKey, setScrambleKey] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 px-4 flex items-center justify-center min-h-screen relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lagoon-cyan/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <h1 className="font-display text-[10rem] sm:text-[14rem] leading-none tracking-wider">
              <span className="neon-text text-neon-pink">4</span>
              <span className="neon-text-cyan text-lagoon-cyan">0</span>
              <span className="neon-text text-neon-pink">4</span>
            </h1>
          </motion.div>

          {/* Scramble text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setScrambleKey(k => k + 1)}
            className="cursor-pointer mb-6"
          >
            <p className="font-display text-2xl sm:text-3xl tracking-wider text-text-primary">
              <TextScramble key={scrambleKey} duration={1.2} scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%">
                PAGE NON TROUVEE
              </TextScramble>
            </p>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-text-secondary text-lg mb-10 max-w-md mx-auto"
          >
            Tu as du prendre un mauvais virage a Vice City. Cette page n&apos;existe pas ou a ete deplacee.
          </motion.p>

          {/* Glitch lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-3 justify-center mb-10"
          >
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-neon-pink/50" />
            <svg className="h-5 w-5 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-lagoon-cyan/50" />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="neon-pulse-btn inline-flex items-center gap-2 rounded-lg bg-neon-pink px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-neon-pink/25 transition-all hover:shadow-neon-pink/40 hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Retour a l&apos;accueil
            </Link>
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 rounded-lg border border-lagoon-cyan/30 px-8 py-3.5 text-sm font-semibold text-lagoon-cyan transition-all hover:border-lagoon-cyan/60 hover:bg-lagoon-cyan/5"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Voir les codes
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}