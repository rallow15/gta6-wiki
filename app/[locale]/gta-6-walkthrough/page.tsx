import type { Metadata } from "next";
import Link from "next/link";
import { Car, Fish, Package, Compass, Ship, Wrench } from "lucide-react";
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
  const t = await getTranslations("Walkthrough");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/solution-gta-6-guide-missions",
        en: "/en/gta-6-walkthrough",
      },
    },
    keywords: t.raw("metaKeywords"),
    openGraph: {
      title: `${t("metaTitle")} | ${siteName}`,
      description: t("metaDescription"),
      url: canonicalPath,
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const chapterAccents = ["teal", "primary", "sunset", "gold"] as const;

const accentColor = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentBorder = {
  teal: "border-accent-teal/30",
  primary: "border-accent-primary/30",
  sunset: "border-accent-sunset/30",
  gold: "border-yellow-400/30",
};

const activityIcons = [<Car className="h-5 w-5" />, <Fish className="h-5 w-5" />, <Package className="h-5 w-5" />, <Compass className="h-5 w-5" />, <Ship className="h-5 w-5" />, <Wrench className="h-5 w-5" />];

export default async function SolutionGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Walkthrough");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-walkthrough" : "/solution-gta-6-guide-missions";

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t("breadcrumbHome"), url: BASE_URL },
            { name: t("breadcrumbName"), url: `${BASE_URL}${canonicalPath}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${canonicalPath}`),
        ]}
      />
      <SectionPage
        title="GTA 6"
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="sunset">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-accent-teal">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {/* Main chapters */}
        {(["0", "1", "2", "3"] as const).map((i) => (
          <div key={i} className="mb-8">
            <div className={`card-base p-6 sm:p-8 border ${accentBorder[chapterAccents[parseInt(i)]]}`} data-plate="sunset">
              <div className="flex items-start gap-3 mb-4">
                <span className="font-display text-3xl text-text-muted/30">{String(parseInt(i) + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[chapterAccents[parseInt(i)]]}`}>
                    {t(`chapters.${i}.title`)}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">{t(`chapters.${i}.description`)}</p>
                </div>
              </div>
              <div className="ml-10 space-y-2">
                {(["0", "1", "2", "3", "4"] as const).filter(j => {
                  try { t(`chapters.${i}.missions.${j}`); return true; } catch { return false; }
                }).map((j) => (
                  <div key={j} className="flex items-center gap-2 py-1.5 border-b border-border/20 last:border-0">
                    <span className="text-accent-primary text-xs">&#x25B8;</span>
                    <span className="text-sm text-text-primary">{t(`chapters.${i}.missions.${j}`)}</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-surface-muted border border-border/30 text-text-muted">
                      {t("comingSoon")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Side activities */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5 border-b border-border/50 pb-2">
            {t("sideActivitiesTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(["0", "1", "2", "3", "4", "5"] as const).map((i) => (
              <div key={i} className="card-base p-5" data-plate="sunset">
                <div className="mb-2">{activityIcons[parseInt(i)]}</div>
                <h3 className="font-semibold text-text-primary mb-1">{t(`sideActivities.${i}.name`)}</h3>
                <p className="text-sm text-text-muted">{t(`sideActivities.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="sunset">
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
          <Link href={isEn ? "/en/cheat-codes-gta-6" : "/codes"} className="text-accent-primary hover:underline">
            {t("cheatsLink")}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}