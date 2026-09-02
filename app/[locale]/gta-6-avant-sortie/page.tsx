import type { Metadata } from "next";
import Link from "next/link";
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
  const t = await getTranslations("PreReleaseHub");
  const siteName = getSiteName(locale);
  const canonicalPath = locale === "en" ? "/en/gta-6-before-release" : "/gta-6-avant-sortie";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/gta-6-avant-sortie",
        en: "/en/gta-6-before-release",
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

export default async function PreReleaseHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("PreReleaseHub");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/gta-6-before-release" : "/gta-6-avant-sortie";

  const faqs = [0, 1, 2, 3].map((i) => ({
    question: t(`faqs.${i}.question`),
    answer: t(`faqs.${i}.answer`),
  }));

  const sectionKeys = ["cheats", "gameplay", "money", "secrets", "story", "tech"] as const;
  const accentMap: Record<string, string> = {
    cheats: "text-neon-pink",
    gameplay: "text-lagoon-cyan",
    money: "text-sand-yellow",
    secrets: "text-sunset-orange",
    story: "text-accent-primary",
    tech: "text-accent-teal",
  };

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
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
        lastUpdated="2026-09-02"
      >
        {/* Editorial notice */}
        <div className="mb-8 nb-card-cyan nb-press p-4">
          <div className="flex items-start gap-3">
            <svg
              className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm text-text-secondary">
              {t.rich("notice", {
                strong: (chunks) => <strong className="text-lagoon-cyan">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-10 nb-card nb-press p-6 sm:p-8">
          <p className="text-text-secondary leading-relaxed">{t("intro")}</p>
        </div>

        {/* Sections */}
        {sectionKeys.map((sectionKey) => {
          const accent = accentMap[sectionKey] ?? "text-text-primary";
          const itemCount = [0, 1, 2, 3, 4].filter((i) => {
            try {
              t(`sections.${sectionKey}.items.${i}.title`);
              return true;
            } catch {
              return false;
            }
          });
          return (
            <div key={sectionKey} className="mb-10">
              <h2 className={`font-display text-2xl tracking-wider ${accent} mb-5 border-b-2 border-night-violet/50 pb-2`}>
                {t(`sections.${sectionKey}.title`)}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">{t(`sections.${sectionKey}.intro`)}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {itemCount.map((i) => (
                  <div key={i} className="nb-card nb-press p-5">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {t(`sections.${sectionKey}.items.${i}.title`)}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`sections.${sectionKey}.items.${i}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Sources & methodology */}
        <div className="mb-10 nb-card nb-press p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-neon-pink mb-5 border-b-2 border-night-violet/50 pb-2">
            {t("methodologyTitle")}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">{t("methodologyText")}</p>
          <ul className="space-y-2 text-sm text-text-secondary">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neon-pink mt-0.5">&#x25B8;</span>
                <span>{t(`sources.${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful links */}
        <div className="mb-10 nb-card-orange nb-press p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
            {t("linksTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4].map((i) => {
              const href = t(`links.${i}.href`);
              return (
                <Link
                  key={i}
                  href={href}
                  className="nb-card nb-press p-4 group flex items-center gap-3 hover:border-neon-pink/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display tracking-wide text-text-primary group-hover:text-neon-pink transition-colors text-sm">
                      {t(`links.${i}.title`)}
                    </h3>
                    <p className="text-xs text-text-muted truncate">{t(`links.${i}.desc`)}</p>
                  </div>
                  <svg className="h-4 w-4 text-text-muted group-hover:text-neon-pink transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="nb-card nb-press p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5 border-b-2 border-night-violet/50 pb-2">
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
      </SectionPage>
    </>
  );
}
