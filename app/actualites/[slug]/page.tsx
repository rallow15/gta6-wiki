import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleById } from "@/lib/articles";
import ArticleDetail from "./ArticleDetail";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, newsArticleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleById(slug);
  if (!article) return { title: "Article introuvable" };

  const url = `/actualites/${article.id}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    keywords: [
      article.title,
      "GTA 6",
      "GTA VI",
      article.tag,
      "actualité GTA 6",
    ],
    openGraph: {
      title: `${article.title} | CodeTricheGTA6`,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | CodeTricheGTA6`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  const url = `${BASE_URL}/actualites/${article.id}`;
  return (
    <>
      <JsonLd
        data={[
          newsArticleJsonLd(article, url),
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Actualités", url: `${BASE_URL}/actualites` },
            { name: article.title, url },
          ]),
        ]}
      />
      <ArticleDetail article={article} />
    </>
  );
}