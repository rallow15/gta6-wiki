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

          {/* Discord CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/PXDdQF4TPr"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-neon-pink/10 px-4 py-2 text-sm font-semibold text-neon-pink border border-neon-pink/20 transition-all hover:bg-neon-pink/20 hover:border-neon-pink/40"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Discord
            </a>
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
              <a
                href="https://discord.gg/PXDdQF4TPr"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2.5 text-sm font-semibold text-neon-pink hover:bg-neon-pink/10 rounded-lg transition-colors"
              >
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}