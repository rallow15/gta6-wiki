"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({ src, alt, isOpen, onClose, onPrev, onNext, hasPrev, hasNext }: LightboxProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev && onPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, hasPrev, hasNext, onPrev, onNext, onClose]);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = alt.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(src, "_blank");
    }
  }, [src, alt]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute top-4 left-4 z-[110] flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-pink/90 hover:bg-neon-pink text-white font-semibold text-sm transition-colors"
          aria-label="Telecharger"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Telecharger
        </button>

        {/* Navigation arrows */}
        {hasPrev && onPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Precedent"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {hasNext && onNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[95vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-neon-pink/30 border-t-neon-pink rounded-full animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg"
            onLoad={() => setLoading(false)}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>

        {/* Caption */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 bg-black/70 rounded-lg text-white text-sm text-center max-w-[80vw]">
          {alt}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}