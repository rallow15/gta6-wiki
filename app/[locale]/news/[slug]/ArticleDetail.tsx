"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { Article } from "@/lib/articles";

const tagColors: Record<string, string> = {
  "Annonce": "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
  "Bande-annonce": "bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20",
  "Date de sortie": "bg-lagoon-cyan/10 text-lagoon-cyan border-lagoon-cyan/20",
  "Personnages": "bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20",
  "Gameplay": "bg-lagoon-cyan/10 text-lagoon-cyan border-lagoon-cyan/20",
  "Pré-commande": "bg-sand-yellow/10 text-sand-yellow border-sand-yellow/20",
};

export default function ArticleDetail({ article }: { article: Article }) {
  const t = useTranslations("ArticleDetail");
  const tagClass = tagColors[article.tag] ?? tagColors["Annonce"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neon-pink/10 bg-deep-bg/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex h-16 items-center">
          <Link href="/news" className="flex items-center gap-2 text-text-secondary hover:text-neon-pink transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t("backToNews")}
          </Link>
        </div>
      </nav>

      <main className="pt-20 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[2/1] rounded-xl overflow-hidden glass-card border-0"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase tracking-wider ${tagClass}`}>
                  {article.tag}
                </span>
                <span className="text-xs text-white/70">{article.date}</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6"
          >
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wider text-text-primary leading-tight">
              {article.title}
            </h1>
          </motion.div>

          {/* Source link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 flex items-center gap-2 text-sm text-text-muted"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span>{t("source")}</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-pink hover:underline"
            >
              {article.sourceName}
              <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6H10" />
              </svg>
            </a>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            {article.content.map((paragraph, i) => (
              <div key={i} className="glass-card p-6">
                <p className="text-text-secondary leading-relaxed">{paragraph}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA: Read original */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-pulse-btn inline-flex items-center gap-2 rounded-lg bg-neon-pink px-6 py-3 text-sm font-bold text-white shadow-lg shadow-neon-pink/25 transition-all hover:shadow-neon-pink/40 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6H10" />
              </svg>
              {t("readOriginal", { source: article.sourceName })}
            </a>
          </motion.div>

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-night-violet/50">
            <Link href="/news" className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-pink transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {t("backToNews")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}