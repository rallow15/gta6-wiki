import { notFound } from "next/navigation";
import { articles, getArticleById } from "@/lib/articles";
import ArticleDetail from "./ArticleDetail";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}