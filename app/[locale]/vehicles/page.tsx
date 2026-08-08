import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { sectionBreadcrumb } from "@/lib/sectionMeta";
import { itemListJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { Info, Star, CheckCircle, ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Vehicles");
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = t("path");

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/vehicules", en: "/en/vehicles" },
    },
    keywords: t.raw("keywords"),
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      type: "website",
      locale: ogLocale,
      siteName,
    },
  };
}

export default async function VehiculesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Vehicles");

  const path = t("path");
  const linkBase = t("linkBase");
  const sectionName = t("sectionName");

  const categoryOrder = t.raw("categoryOrder") as string[];
  const categoryLabels: Record<string, string> = {};
  for (const cat of categoryOrder) {
    categoryLabels[cat] = t(`categories.${cat}`);
  }

  const pageSubtitle = t("pageSubtitle");

  const noticeStrong = t("noticeStrong");
  const noticeRest = t("noticeRest");

  const whatsNewTitle = t("whatsNewTitle");
  const whatsNewKeys = [0, 1, 2, 3, 4] as const;
  const whatsNew = whatsNewKeys.map((i) => ({
    title: t(`whatsNew.${i}.title`),
    desc: t(`whatsNew.${i}.desc`),
  }));

  return (
    <>
      <JsonLd
        data={[
          sectionBreadcrumb(sectionName, path, locale),
          itemListJsonLd(
            t("jsonLdTitle"),
            `${BASE_URL}${path}`,
            vehicles.map((v) => ({
              name: v.name,
              url: `${BASE_URL}/${linkBase}/${v.id}`,
              image: `${BASE_URL}${v.image}`,
            })),
          ),
        ]}
      />
      <SectionPage
        title={t("pageTitle")}
        subtitle={pageSubtitle}
      >
        <div className="mb-6 glass-card p-4 border-lagoon-cyan/20">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-lagoon-cyan shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-lagoon-cyan">{noticeStrong}</strong> {noticeRest}
            </p>
          </div>
        </div>

        {categoryOrder.map((category) => {
          const categoryVehicles = vehicles.filter((v) => v.category === category);
          if (categoryVehicles.length === 0) return null;
          return (
            <div key={category} className="mb-10">
              <h2 className="font-display text-2xl tracking-wider text-text-secondary mb-4 border-b border-night-violet/50 pb-2">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryVehicles.map((vehicle) => (
                  <Link key={vehicle.id} href={`/${linkBase}/${vehicle.id}`} className="neon-glow-card shimmer-line overflow-hidden group block">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-deep-bg-light">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent" />
                      {vehicle.edition && (
                        <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-sunset-orange/90 text-white">
                          {vehicle.edition}
                        </span>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                          {vehicle.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-deep-bg-light border border-night-violet/30 text-text-muted shrink-0">
                          {vehicle.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-text-muted">{vehicle.description}</p>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-text-muted">
                        <Star className="h-3.5 w-3.5 text-sunset-orange" />
                        <span className="italic">{t("inspiredLabel")} {vehicle.inspired}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                        <CheckCircle className="h-3.5 w-3.5 text-lagoon-cyan" />
                        {vehicle.source}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-10 neon-glow-card-orange p-6">
          <h3 className="font-display text-lg tracking-wider text-sunset-orange mb-2">
            {whatsNewTitle}
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {whatsNew.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-sunset-orange mt-0.5 shrink-0" />
                <span><strong>{item.title}</strong> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionPage>
    </>
  );
}