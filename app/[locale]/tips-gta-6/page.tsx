import type { Metadata } from "next";
import Link from "next/link";
import { Target, Home, Backpack, Footprints, Save, Shield, Crosshair, Users, Timer, Building2, TrendingUp, Briefcase, Car, Map, Compass, Ear, RefreshCw, Coins, Search, Gamepad2 } from "lucide-react";
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
  const t = await getTranslations("Tips");
  const siteName = getSiteName(locale);
  const isEn = locale === "en";
  const canonicalPath = isEn ? "/en/tips-gta-6" : "/astuces-gta-6";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/astuces-gta-6",
        en: "/en/tips-gta-6",
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

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="h-5 w-5 shrink-0" />,
  home: <Home className="h-5 w-5 shrink-0" />,
  backpack: <Backpack className="h-5 w-5 shrink-0" />,
  footprints: <Footprints className="h-5 w-5 shrink-0" />,
  save: <Save className="h-5 w-5 shrink-0" />,
  shield: <Shield className="h-5 w-5 shrink-0" />,
  crosshair: <Crosshair className="h-5 w-5 shrink-0" />,
  users: <Users className="h-5 w-5 shrink-0" />,
  timer: <Timer className="h-5 w-5 shrink-0" />,
  building2: <Building2 className="h-5 w-5 shrink-0" />,
  trendingUp: <TrendingUp className="h-5 w-5 shrink-0" />,
  briefcase: <Briefcase className="h-5 w-5 shrink-0" />,
  car: <Car className="h-5 w-5 shrink-0" />,
  map: <Map className="h-5 w-5 shrink-0" />,
  compass: <Compass className="h-5 w-5 shrink-0" />,
  ear: <Ear className="h-5 w-5 shrink-0" />,
  refreshCw: <RefreshCw className="h-5 w-5 shrink-0" />,
};

const sectionIcons: Record<string, string[]> = {
  "0": ["target", "home", "backpack", "footprints", "save"],
  "1": ["shield", "crosshair", "users", "timer"],
  "2": ["building2", "trendingUp", "briefcase", "car"],
  "3": ["map", "compass", "ear", "refreshCw"],
};

const accentColor: Record<string, string> = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentCard: Record<string, string> = {
  teal: "card-base",
  primary: "card-base",
  sunset: "card-base",
  gold: "card-base",
};

const sectionAccents = ["teal", "primary", "sunset", "gold"];

export default async function AstucesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Tips");
  const isEn = locale === "en";

  const codesPath = "/codes";
  const moneyPath = isEn ? "/how-to-make-money-gta-6" : "/comment-gagner-argent-gta-6";
  const walkthroughPath = isEn ? "/gta-6-walkthrough" : "/solution-gta-6-guide-missions";
  const secretsPath = "/secrets-easter-eggs-gta-6";
  const cheatsPath = isEn ? "/cheat-codes-gta-6" : "/code-triche-gta-6";

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
            { name: t("breadcrumbName"), url: `${BASE_URL}${isEn ? "/en/tips-gta-6" : "/astuces-gta-6"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/tips-gta-6" : "/astuces-gta-6"}`),
        ]}
      />
      <SectionPage
        title={t("title")}
        titleAccent={t("titleAccent")}
        subtitle={t("subtitle")}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="teal">
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

        {(["0", "1", "2", "3"] as const).map((sectionIdx, i) => (
          <div key={sectionIdx} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[sectionAccents[i]]} mb-5 border-b border-border/50 pb-2`}>
              {t(`sections.${sectionIdx}.title`)}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(["0", "1", "2", "3", "4"] as const).filter(j => {
                try { t(`sections.${sectionIdx}.tips.${j}.title`); return true; } catch { return false; }
              }).map((tipIdx) => (
                <div key={tipIdx} className={`${accentCard[sectionAccents[i]]} p-5`} data-plate="teal">
                  <div className="flex items-start gap-3">
                    {iconMap[sectionIcons[sectionIdx]?.[parseInt(tipIdx)] ?? "target"] ?? <Target className="h-5 w-5 shrink-0" />}
                    <div>
                      <h3 className="font-semibold text-text-primary">{t(`sections.${sectionIdx}.tips.${tipIdx}.title`)}</h3>
                      <p className="mt-1 text-sm text-text-muted">{t(`sections.${sectionIdx}.tips.${tipIdx}.desc`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick links */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="teal">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {t("guidesTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href={codesPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Gamepad2 className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("guides.cheatCodes.title")}</h3>
                <p className="text-xs text-text-muted">{t("guides.cheatCodes.desc")}</p>
              </div>
            </Link>
            <Link href={moneyPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Coins className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("guides.makeMoney.title")}</h3>
                <p className="text-xs text-text-muted">{t("guides.makeMoney.desc")}</p>
              </div>
            </Link>
            <Link href={walkthroughPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Map className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("guides.walkthrough.title")}</h3>
                <p className="text-xs text-text-muted">{t("guides.walkthrough.desc")}</p>
              </div>
            </Link>
            <Link href={secretsPath} className="card-base p-4 group flex items-center gap-3" data-plate="teal">
              <Search className="h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{t("guides.secrets.title")}</h3>
                <p className="text-xs text-text-muted">{t("guides.secrets.desc")}</p>
              </div>
            </Link>
          </div>
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

        <div className="mt-8 text-center space-x-4">
          <Link href={codesPath} className="text-accent-primary hover:underline">{t("links.cheatCodes")}</Link>
          <Link href={moneyPath} className="text-accent-primary hover:underline">{t("links.makeMoney")}</Link>
          <Link href={cheatsPath} className="text-accent-primary hover:underline">{t("links.cheats")}</Link>
        </div>
      </SectionPage>
    </>
  );
}