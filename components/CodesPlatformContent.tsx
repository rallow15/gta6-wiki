import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { BASE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

type Platform = "PS5" | "Xbox" | "PC";

interface PlatformInfo {
  slug: string;
  label: string;
  heading: string;
  buttons: string;
  enter: string;
  faqs: { question: string; answer: string }[];
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  PS5: {
    slug: "codes-gta-6-ps5",
    label: "PS5",
    heading: "Codes GTA 6 PS5",
    buttons: "X, Cercle (○), Triangle (△), Carré (□), L1, L2, R1, R2",
    enter:
      "Pendant une partie, saisissez la séquence de touches DualSense indiquée pour chaque code. Le code s'active immédiatement et une notification apparaît à l'écran.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur PS5 ?",
        answer:
          "Pendant le jeu, tapez rapidement la séquence de touches du DualSense affichée pour chaque code (par exemple X X L1 R1 Triangle Carré). Aucune touche spéciale à presser au préalable.",
      },
      {
        question: "Les codes de triche GTA 6 désactivent-ils les trophées ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes de triche peut désactiver l'obtention des trophées/succès pendant la session. Sauvegardez avant d'utiliser des codes.",
      },
      {
        question: "Les codes GTA 6 PS5 sont-ils confirmés ?",
        answer:
          "Les codes listés ici sont basés sur les habitudes des opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
  },
  Xbox: {
    slug: "codes-gta-6-xbox",
    label: "Xbox",
    heading: "Codes GTA 6 Xbox",
    buttons: "A, B, X, Y, LB, LT, RB, RT",
    enter:
      "Pendant une partie, saisissez la séquence de touches de la manette Xbox indiquée pour chaque code. Le code s'active immédiatement.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur Xbox Series ?",
        answer:
          "Pendant le jeu, tapez rapidement la séquence de touches de la manette Xbox affichée pour chaque code (par exemple A A LB RB Y X).",
      },
      {
        question: "Les codes désactivent-ils les succès Xbox ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes peut désactiver les succès pendant la session. Pensez à sauvegarder avant.",
      },
      {
        question: "Les codes GTA 6 Xbox sont-ils confirmés ?",
        answer:
          "Les codes listés ici sont basés sur les opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
  },
  PC: {
    slug: "codes-gta-6-pc",
    label: "PC",
    heading: "Codes GTA 6 PC",
    buttons: "mots-clés (ex. HEALME, GODMODE)",
    enter:
      "Sur PC, les codes de triche GTA 6 se saisissent via le téléphone en jeu ou directement au clavier. Entrez le mot-clé indiqué pour chaque code.",
    faqs: [
      {
        question: "Comment entrer un code de triche GTA 6 sur PC ?",
        answer:
          "Sur PC, ouvrez le téléphone en jeu ou tapez directement le mot-clé du code au clavier (par exemple HEALME pour restaurer la santé).",
      },
      {
        question: "Les codes GTA 6 PC désactivent-ils les succès ?",
        answer:
          "Comme dans les précédents GTA, l'utilisation de codes peut désactiver les succès pendant la session. Sauvegardez avant d'utiliser des codes.",
      },
      {
        question: "Les codes GTA 6 PC sont-ils confirmés ?",
        answer:
          "Les mots-clés listés ici sont basés sur les opus précédents et seront vérifiés et mis à jour dès la sortie du jeu le 19 novembre 2026.",
      },
    ],
  },
};

export function codesPlatformMetadata(platform: Platform): Metadata {
  const info = PLATFORMS[platform];
  return {
    title: `${info.heading} — Codes de triche GTA 6`,
    description: `Tous les codes de triche GTA 6 ${info.label} : santé, armure, armes, véhicules, police, météo et gameplay. Disponibles dès la sortie du jeu le 19 novembre 2026.`,
    alternates: { canonical: `/${info.slug}` },
    keywords: [
      `codes GTA 6 ${info.label}`,
      `code triche GTA 6 ${info.label}`,
      `cheats GTA 6 ${info.label}`,
      `codes GTA VI ${info.label}`,
      `astuces GTA 6 ${info.label}`,
    ],
    openGraph: {
      title: `${info.heading} | CodeTricheGTA6`,
      description: `Codes de triche GTA 6 ${info.label} — disponibles dès la sortie du jeu le 19 novembre 2026.`,
      url: `/${info.slug}`,
      type: "website",
    },
  };
}

export function CodesPlatformContent({ platform }: { platform: Platform }) {
  const info = PLATFORMS[platform];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Codes de triche", url: `${BASE_URL}/codes` },
            { name: info.heading, url: `${BASE_URL}/${info.slug}` },
          ]),
          faqJsonLd(info.faqs, `${BASE_URL}/${info.slug}`),
        ]}
      />
      <SectionPage
        title={info.heading.toUpperCase()}
        subtitle={`Tous les codes de triche GTA 6 pour ${info.label} — disponibles dès la sortie du jeu.`}
      >
        {/* How to enter */}
        <div className="mb-8 glass-card p-5">
          <h2 className="font-display text-lg tracking-wider text-neon-pink mb-2">
            COMMENT ENTRER UN CODE {info.label}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">{info.enter}</p>
          <p className="mt-2 text-xs text-text-muted">
            Touches {info.label} : <span className="text-text-secondary">{info.buttons}</span>
          </p>
        </div>

        {/* Coming soon */}
        <div className="glass-card p-8 text-center">
          <Gamepad2 className="h-10 w-10 text-neon-pink mx-auto mb-4" />
          <h3 className="font-display text-2xl tracking-wider text-text-primary mb-2">
            ARRIVE PROCHAINEMENT
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            Les codes de triche GTA 6 pour {info.label} seront publiés ici dès la sortie du jeu, le <strong className="text-lagoon-cyan">19 novembre 2026</strong>. Revenez bientôt pour tous les codes avec copier en 1 clic.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10 glass-card p-6 sm:p-8">
          <h2 className="font-display text-2xl tracking-wider text-sunset-orange mb-5">
            QUESTIONS FRÉQUENTES
          </h2>
          <div className="space-y-5">
            {info.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center space-x-4">
          <Link href="/codes" className="text-neon-pink hover:underline">Tous les codes →</Link>
          <Link href="/codes-gta-6-ps5" className="text-text-muted hover:text-text-primary">PS5</Link>
          <Link href="/codes-gta-6-xbox" className="text-text-muted hover:text-text-primary">Xbox</Link>
          <Link href="/codes-gta-6-pc" className="text-text-muted hover:text-text-primary">PC</Link>
        </div>
      </SectionPage>
    </>
  );
}