import { codesPlatformMetadata, CodesPlatformContent } from "@/components/CodesPlatformContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return codesPlatformMetadata("PS5", locale);
}

export default async function CodesGta6PS5Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CodesPlatformContent platform="PS5" locale={locale} />;
}