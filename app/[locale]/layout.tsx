import type { Metadata } from "next";
import "../globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ScrollProgress from "@/components/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd, organizationJsonLd } from "@/lib/seo";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteName = getSiteName(locale);
  const siteLocale = getSiteLocale(locale);

  const titles: Record<string, string> = {
    fr: "CodeTricheGTA6 — Codes GTA 6, Infos & Guides",
    en: "GTA6CheatCodes — GTA 6 Cheats, Info & Guides",
  };

  const descriptions: Record<string, string> = {
    fr: "Tous les codes de triche GTA 6, infos personnages, véhicules, armes et lieux de Vice City. Guide complet francophone pour GTA VI.",
    en: "All GTA 6 cheat codes, character info, vehicles, weapons and Vice City locations. Complete English guide for GTA VI.",
  };

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: titles[locale] ?? titles.fr,
      template: `%s | ${siteName}`,
    },
    description: descriptions[locale] ?? descriptions.fr,
    applicationName: siteName,
    keywords: locale === "en"
      ? [
          "GTA 6 cheats",
          "GTA VI cheat codes",
          "GTA 6 codes",
          "GTA 6 cheat codes PS5",
          "GTA 6 cheat codes Xbox",
          "GTA 6 cheat codes PC",
          "GTA 6 release date",
          "GTA 6 release",
          "GTA 6 vehicles",
          "best cars GTA 6",
          "GTA 6 weapons",
          "GTA 6 map",
          "Vice City",
          "Leonida",
          "GTA 6 characters",
          "Jason Duval",
          "Lucia Caminos",
        ]
      : [
          "GTA 6 codes",
          "GTA VI codes de triche",
          "code gta 6",
          "code triche GTA 6",
          "codes GTA 6 PS5",
          "codes GTA 6 Xbox",
          "codes GTA 6 PC",
          "GTA 6 date de sortie",
          "sortie GTA 6",
          "GTA 6 véhicules",
          "meilleures voitures GTA 6",
          "GTA 6 armes",
          "carte GTA 6",
          "Vice City",
          "Leonida",
          "personnages GTA 6",
          "Jason Duval",
          "Lucia Caminos",
        ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical: locale === "fr" ? "/" : "/en/",
      languages: {
        fr: "/",
        en: "/en/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/images/logo/logo-icon.png",
      apple: "/images/logo/logo-icon.png",
    },
    openGraph: {
      title: titles[locale] ?? titles.fr,
      description: descriptions[locale] ?? descriptions.fr,
      type: "website",
      locale: siteLocale,
      siteName,
      url: BASE_URL,
      images: [
        {
          url: "/images/logo/logo-neon-sign.png",
          width: 1200,
          height: 630,
          alt: locale === "en" ? "GTA 6 CheatCodes — Cheats, Info & Guides" : "GTA 6 CodeTriche — Codes, Infos & Guides",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] ?? titles.fr,
      description: descriptions[locale] ?? descriptions.fr,
      images: ["/images/logo/logo-neon-sign.png"],
    },
    category: "games",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965679591230669" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-deep-bg text-text-primary">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={[websiteJsonLd(locale), organizationJsonLd(locale)]} />
          <ScrollProgress />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}