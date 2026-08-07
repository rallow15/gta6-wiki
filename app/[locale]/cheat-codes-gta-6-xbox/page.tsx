import { codesPlatformMetadata, CodesPlatformContent } from "@/components/CodesPlatformContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return codesPlatformMetadata("Xbox", locale);
}

export default async function CodesGta6XboxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CodesPlatformContent platform="Xbox" locale={locale} />;
}