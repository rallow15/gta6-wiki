import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Store, Target, Briefcase, Home, Wrench, TrendingUp, BarChart3, Brain, Fish, Car, Package } from "lucide-react";
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
  const t = await getTranslations("MakeMoney");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/comment-gagner-argent-gta-6",
        en: "/en/how-to-make-money-gta-6",
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

const methodIcons: Record<string, React.ReactNode> = {
  "0.0": <Building2 className="h-5 w-5" />,
  "0.1": <Store className="h-5 w-5" />,
  "0.2": <Target className="h-5 w-5" />,
  "1.0": <Briefcase className="h-5 w-5" />,
  "1.1": <Home className="h-5 w-5" />,
  "1.2": <Wrench className="h-5 w-5" />,
  "2.0": <TrendingUp className="h-5 w-5" />,
  "2.1": <BarChart3 className="h-5 w-5" />,
  "2.2": <Brain className="h-5 w-5" />,
  "3.0": <Fish className="h-5 w-5" />,
  "3.1": <Car className="h-5 w-5" />,
  "3.2": <Package className="h-5 w-5" />,
};

const accentClasses = {
  primary: { card: "card-base", text: "text-accent-primary", border: "border-accent-primary/20" },
  sunset: { card: "card-base", text: "text-accent-sunset", border: "border-accent-sunset/20" },
  teal: { card: "card-base", text: "text-accent-teal", border: "border-accent-teal/20" },
  gold: { card: "card-base", text: "text-yellow-400", border: "border-yellow-400/20" },
};

const methodAccents = ["primary", "sunset", "teal", "gold"] as const;

export default async function CommentGagnerArgentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("MakeMoney");
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6";

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
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
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

        {(["0", "1", "2", "3"] as const).map((sectionIdx, i) => {
          const accent = methodAccents[i];
          const colors = accentClasses[accent];
          return (
            <div key={sectionIdx} className="mb-10">
              <h2 className={`font-display font-bold text-2xl tracking-tight ${colors.text} mb-5 border-b border-border/50 pb-2`}>
                {t(`methods.${sectionIdx}.title`)}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(["0", "1", "2"] as const).map((itemIdx) => (
                  <div key={itemIdx} className={`${colors.card} p-5`} data-plate="primary">
                    <div className="mb-2">{methodIcons[`${sectionIdx}.${itemIdx}`] ?? <Target className="h-5 w-5" />}</div>
                    <h3 className="font-semibold text-text-primary mb-1">{t(`methods.${sectionIdx}.items.${itemIdx}.name`)}</h3>
                    <p className="text-sm text-text-muted">{t(`methods.${sectionIdx}.items.${itemIdx}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Tips section */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("farmingTipsTitle")}
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            {(["0", "1", "2", "3", "4"] as const).map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-sunset mt-0.5">&#x25B8;</span>
                <span><strong className="text-text-primary">{t(`farmingTips.${i}.title`)}</strong> — {t(`farmingTips.${i}.desc`)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
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