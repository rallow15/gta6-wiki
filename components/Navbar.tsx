"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/codes", label: "Codes" },
  { href: "/vehicules", label: "Véhicules" },
  { href: "/armes", label: "Armes" },
  { href: "/personnages", label: "Personnages" },
  { href: "/lieux", label: "Lieux" },
  { href: "/actualites", label: "Actus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neon-pink/10 bg-deep-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {/* Icon G6 */}
            <svg className="h-9 w-9 shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="40" fill="#1A0533"/>
              <ellipse cx="128" cy="100" rx="80" ry="65" fill="#FF2E9A" fillOpacity="0.1"/>
              <path d="M55 140A80 80 0 01201 140" stroke="#FFC94D" strokeWidth="2.5" strokeOpacity="0.35"/>
              <text x="128" y="168" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontSize="115" fontWeight="bold" letterSpacing="4" fill="url(#g6Grad)" transform="skewX(-10)" filter="url(#g6Glow)">G6</text>
              <defs>
                <linearGradient id="g6Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFC94D"/>
                  <stop offset="40%" stopColor="#FF7A3D"/>
                  <stop offset="75%" stopColor="#FF2E9A"/>
                </linearGradient>
                <filter id="g6Glow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur stdDeviation="6" result="b1"/>
                  <feFlood floodColor="#FF2E9A" floodOpacity="0.6"/>
                  <feComposite in2="b1" operator="in" result="g1"/>
                  <feGaussianBlur stdDeviation="2" result="b2"/>
                  <feFlood floodColor="#FFC94D" floodOpacity="0.3"/>
                  <feComposite in2="b2" operator="in" result="g2"/>
                  <feMerge><feMergeNode in="g1"/><feMergeNode in="g2"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
            </svg>
            <span className="font-display text-lg sm:text-xl tracking-wider text-text-primary transition-all group-hover:text-neon-pink">
              CODE TRICHE
              <span className="text-neon-pink"> GTA6</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-neon-pink rounded-lg hover:bg-neon-pink/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-neon-pink"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neon-pink/10 bg-deep-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-neon-pink hover:bg-neon-pink/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}