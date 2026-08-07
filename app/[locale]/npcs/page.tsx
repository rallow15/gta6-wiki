import type { Metadata } from "next";
import { Users } from "lucide-react";
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
  const path = isEn ? "/en/npcs" : "/pnj";

  const title = isEn
    ? "GTA 6 NPCs — Non-Playable Characters"
    : "PNJ GTA 6 — Personnages non jouables";
  const description = isEn
    ? "Database of non-playable characters (NPCs) in GTA 6. Coming after game release."
    : "Base de données des personnages non jouables (PNJ) de GTA 6. Bientôt disponible après la sortie du jeu.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: "/pnj", en: "/en/npcs" },
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

export default function PnjPage() {
  return (
    <SectionPage
      title="PNJ"
      subtitle="Les personnages non jouables qui peuplent les rues de Leonida."
    >
      <div className="glass-card p-8 text-center">
        <Users className="h-10 w-10 text-neon-pink mx-auto mb-4" />
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
          BIENTOT DISPONIBLE
        </h3>
        <p className="text-text-muted max-w-md mx-auto">
          La base de donnees des PNJ sera disponible apres la sortie du jeu. Restez connectes !
        </p>
      </div>
    </SectionPage>
  );
}