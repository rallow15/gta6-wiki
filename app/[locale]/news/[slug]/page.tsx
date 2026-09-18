import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleById } from "@/lib/articles";
import ArticleDetail from "./ArticleDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName } from "@/lib/site";
import { breadcrumbJsonLd, buildAlternates, newsArticleJsonLd } from "@/lib/seo";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articles.map((article) =>
      locale === routing.defaultLocale
        ? { slug: article.id }
        : { locale, slug: article.id }
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleById(slug);
  if (!article) return { title: "Article introuvable" };

  const isEn = locale === "en";
  const frPath = `/actualites/${article.id}`;
  const enPath = `/en/news/${article.id}`;
  const url = isEn ? enPath : frPath;
  const siteName = getSiteName(locale);

  return {
    title: article.title,
    description: article.excerpt,
    alternates: buildAlternates(locale, frPath, enPath),
    keywords: [
      article.title,
      "GTA 6",
      "GTA VI",
      article.tag,
      isEn ? "GTA 6 news" : "actualité GTA 6",
    ],
    openGraph: {
      title: `${article.title} | ${siteName}`,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.date,
      locale: isEn ? "en_US" : "fr_FR",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteName}`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  const isEn = locale === "en";
  const url = `${BASE_URL}${isEn ? `/en/news/${article.id}` : `/actualites/${article.id}`}`;
  return (
    <>
      <JsonLd
        data={[
          newsArticleJsonLd(article, url, locale),
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "News" : "Actualités", url: `${BASE_URL}${isEn ? "/en/news" : "/actualites"}` },
            { name: article.title, url },
          ]),
        ]}
      />
      <ArticleDetail article={article} />
    </>
  );
}