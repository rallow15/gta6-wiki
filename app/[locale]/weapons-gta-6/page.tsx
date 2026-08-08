import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("WeaponsGTA6");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const path = isEn ? "/en/weapons-gta-6" : "/armes-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: path,
      languages: { fr: "/armes-gta-6", en: "/en/weapons-gta-6" },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: path,
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

export default async function ArmesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("WeaponsGTA6");
  const isEn = locale === "en";

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
  ];

  const weaponCategories = ["0", "1", "2", "3"] as const;
  const categoryAccents = ["teal", "primary", "sunset", "gold"] as const;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t("breadcrumbHome"), url: BASE_URL },
            { name: t("breadcrumbName"), url: `${BASE_URL}${isEn ? "/en/weapons-gta-6" : "/armes-gta-6"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/weapons-gta-6" : "/armes-gta-6"}`),
        ]}
      />
      <SectionPage
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {weaponCategories.map((catIdx, i) => {
          const accent = categoryAccents[i];
          const weaponIndices = ["0", "1", "2", "3", "4", "5", "6"] as const;
          return (
            <div key={catIdx} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[accent]} mb-5 border-b border-border/50 pb-2`}>
                {t(`categories.${catIdx}.title`)}
              </h2>
              <div className="space-y-3">
                {weaponIndices.filter(j => {
                  try { t(`categories.${catIdx}.weapons.${j}.name`); return true; } catch { return false; }
                }).map((j) => (
                  <div key={j} className="card-base p-5" data-plate="teal">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-text-primary">{t(`categories.${catIdx}.weapons.${j}.name`)}</h3>
                      {t(`categories.${catIdx}.weapons.${j}.edition`) === "true" && (
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-accent-sunset/90 text-white shrink-0">
                          {t("editionLabel")}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-text-muted">{t(`categories.${catIdx}.weapons.${j}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Weapon system */}
        <div className="mb-10 card-base p-6 border-accent-sunset/20" data-plate="teal">
          <h3 className="font-display font-bold text-lg tracking-tight text-accent-sunset mb-3">
            {t("weaponSystemTitle")}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {(["0", "1", "2", "3"] as const).map((i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
                <span><strong>{t(`weaponSystem.${i}.title`)}</strong> — {t(`weaponSystem.${i}.desc`)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="teal">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("faqTitle")}
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href={isEn ? "/en/weapons" : "/armes"} className="text-accent-primary hover:underline">
            {t("allWeaponsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}