import type { Metadata } from "next";
import { Bug } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { getSiteName, getSiteLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);
  const ogLocale = getSiteLocale(locale);
  const path = isEn ? "/en/animals" : "/animaux";

  const title = isEn
    ? "GTA 6 Animals — Wildlife of Leonida"
    : "Animaux GTA 6 — Faune de Leonida";
  const description = isEn
    ? "The wildlife of GTA 6: alligators, tropical fish and all the wild animals of Leonida. Coming after game release."
    : "La faune de GTA 6 : alligators, poissons tropicaux et toute la vie sauvage de Leonida. Bientôt disponible après la sortie du jeu.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/animaux", en: "/en/animals" },
    },
    robots: { index: false, follow: true },
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

export default async function AnimauxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <SectionPage
      title={isEn ? "ANIMALS" : "ANIMAUX"}
      subtitle={
        isEn
          ? "The wildlife of Leonida — alligators, tropical fish and more."
          : "La faune de Leonida — alligators, poissons tropicaux et plus encore."
      }
    >
      <div className="glass-card p-8 text-center">
        <Bug className="h-10 w-10 text-lagoon-cyan mx-auto mb-4" />
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          {isEn ? "COMING SOON" : "BIENTÔT DISPONIBLE"}
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          {isEn
            ? "The complete wildlife of Leonida will be documented after the game's release. Hunting, fishing and observations!"
            : "La faune complète de Leonida sera documentée après la sortie du jeu. Chasse, pêche et observations !"}
        </p>
      </div>
    </SectionPage>
  );
}