"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionPage from "@/components/SectionPage";
import Lightbox from "@/components/Lightbox";
import { JsonLd } from "@/components/JsonLd";
import { galleryCategories, type GalleryImage } from "@/lib/gallery";
import {
  User, UserCircle, Bird, Gem, Music, Mic, Crosshair, Handshake,
  TreePalm, Anchor, Building2, Bug, Mountain, Diamond, Gamepad2,
  ZoomIn, type LucideProps,
} from "lucide-react";
import { sectionBreadcrumb } from "@/lib/sectionMeta";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  User, UserCircle, Bird, Gem, Music, Mic, Crosshair, Handshake,
  TreePalm, Anchor, Building2, Bug, Mountain, Diamond, Gamepad2,
};

function GalleryIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState<string>(galleryCategories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeCat = galleryCategories.find((c) => c.id === activeCategory) ?? galleryCategories[0];
  const filteredImages: GalleryImage[] = activeCat.images;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  }, [filteredImages.length]);

  return (
    <>
      <JsonLd data={sectionBreadcrumb("Galerie", "/galerie")} />
      <SectionPage
        title="GALERIE"
        subtitle={`${activeCat.label} — ${activeCat.images.length} captures d'écran`}
      >
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === cat.id
                ? "bg-neon-pink text-white shadow-lg shadow-neon-pink/25"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
            } flex items-center gap-1.5`}
          >
            <GalleryIcon name={cat.icon} className="h-4 w-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {filteredImages.map((img, index) => (
            <div
              key={img.src}
              className="group relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer bg-white/5"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium line-clamp-2">{img.alt}</span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <Lightbox
          src={filteredImages[lightboxIndex].src}
          alt={filteredImages[lightboxIndex].alt}
          isOpen={true}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredImages.length - 1}
        />
      )}
    </SectionPage>
    </>
  );
}