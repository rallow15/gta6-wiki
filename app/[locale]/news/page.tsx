"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionPage from "@/components/SectionPage";
import AnimatedContainer from "@/components/AnimatedContainer";
import { JsonLd } from "@/components/JsonLd";
import { articlesLatestFirst } from "@/lib/articles";
import { sectionBreadcrumb } from "@/lib/sectionMeta";

const tagColors: Record<string, string> = {
  "Annonce": "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
  "Bande-annonce": "bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20",
  "Date de sortie": "bg-lagoon-cyan/10 text-lagoon-cyan border-lagoon-cyan/20",
  "Personnages": "bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20",
  "Gameplay": "bg-lagoon-cyan/10 text-lagoon-cyan border-lagoon-cyan/20",
  "Pré-commande": "bg-sand-yellow/10 text-sand-yellow border-sand-yellow/20",
};

export default function ActualitesPage() {
  const t = useTranslations("News");
  const [filter, setFilter] = useState<string>("all");
  const tags = ["all", ...Array.from(new Set(articlesLatestFirst.map((a) => a.tag)))];

  const filtered = filter === "all" ? articlesLatestFirst : articlesLatestFirst.filter((a) => a.tag === filter);

  return (
    <>
      <JsonLd data={sectionBreadcrumb(t("title"), "/actualites")} />
      <SectionPage
        title={t("title")}
        subtitle={t("subtitle", { count: articlesLatestFirst.length })}
      >
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              filter === tag
                ? "bg-neon-pink text-white shadow-lg shadow-neon-pink/25"
                : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
            }`}
          >
            {tag === "all" ? t("filterAll") : tag}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((article, i) => (
          <AnimatedContainer key={article.id} animation="fadeInUp" delay={i * 0.05}>
            <Link href={`/actualites/${article.id}`} className="group block">
              <div className="glass-card overflow-hidden transition-all duration-300 group-hover:border-neon-pink/40">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bg/80 via-transparent to-transparent" />
                  {/* Tag + Date overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase tracking-wider ${tagColors[article.tag] ?? tagColors["Annonce"]}`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-white/70">{article.date}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted line-clamp-2">{article.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {article.sourceName}
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedContainer>
        ))}
      </div>
    </SectionPage>
    </>
  );
}