import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL, getSiteName, getSiteLocale } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const siteName = getSiteName(locale);

  const titles: Record<string, string> = {
    fr: "Problèmes GTA 6 — Solutions, bugs et corrections GTA VI",
    en: "GTA 6 Problems & Solutions — Bugs, crashes and fixes for GTA VI",
  };
  const descriptions: Record<string, string> = {
    fr: "Problèmes connus et solutions pour GTA 6 (GTA VI) : bugs, problèmes de lancement, performances, crashes et corrections. Guide de dépannage complet.",
    en: "Known issues and solutions for GTA 6 (GTA VI): bugs, launch problems, performance, crashes and fixes. Complete troubleshooting guide.",
  };
  const keywords = isEn
    ? [
        "GTA 6 problems",
        "GTA 6 bugs",
        "GTA 6 crash",
        "GTA 6 won't launch",
        "GTA 6 lag",
        "GTA 6 fixes",
        "GTA 6 troubleshooting",
        "GTA VI problems",
        "GTA 6 FPS drop",
        "GTA 6 error",
      ]
    : [
        "problèmes GTA 6",
        "bug GTA 6",
        "crash GTA 6",
        "GTA 6 ne se lance pas",
        "lag GTA 6",
        "corrections GTA 6",
        "dépannage GTA 6",
        "GTA VI problème",
        "GTA 6 FPS drop",
        "GTA 6 erreur",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions",
      languages: {
        fr: "/problemes-gta-6-solutions",
        en: "/en/gta-6-problems-solutions",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const getFaqs = (isEn: boolean) => [
  {
    question: isEn
      ? "GTA 6 won't launch, what should I do?"
      : "GTA 6 ne se lance pas, que faire ?",
    answer: isEn
      ? "Check that your console or PC meets the minimum requirements. On PS5/Xbox, try reinstalling the game or clearing the cache. On PC, update your GPU drivers and verify file integrity via the Rockstar launcher or Steam."
      : "Vérifiez que votre console ou PC répond aux configurations minimales. Sur PS5/Xbox, essayez de réinstaller le jeu ou de vider le cache. Sur PC, mettez à jour vos pilotes GPU et vérifiez l'intégrité des fichiers via le launcher Rockstar ou Steam.",
  },
  {
    question: isEn
      ? "GTA 6 has FPS drops, how to optimize?"
      : "GTA 6 a des chutes de FPS, comment optimiser ?",
    answer: isEn
      ? "Lower graphics settings (shadows, rays, resolution). Close background applications. On PC, update your GPU drivers. On PS5, enable Performance mode in game settings."
      : "Réduisez les paramètres graphiques (ombres, rayons, résolution). Fermez les applications en arrière-plan. Sur PC, mettez à jour vos pilotes GPU. Sur PS5, activez le mode Performance dans les paramètres du jeu.",
  },
  {
    question: isEn
      ? "GTA 6 crashes during a mission, what should I do?"
      : "GTA 6 crash pendant une mission, que faire ?",
    answer: isEn
      ? "Save regularly. If a crash persists at a specific point, try loading an earlier save. On console, reinstall the game if the problem continues. On PC, check RAM and GPU temperature."
      : "Sauvegardez régulièrement. Si un crash persiste à un point précis, essayez de recharger une sauvegarde antérieure. Sur console, réinstallez le jeu si le problème continue. Sur PC, vérifiez la RAM et la température du GPU.",
  },
  {
    question: isEn
      ? "Are there updates to fix bugs?"
      : "Y a-t-il des mises à jour pour corriger les bugs ?",
    answer: isEn
      ? "Rockstar regularly releases patch updates after a GTA launch. Enable automatic updates on your platform to receive fixes as soon as they are available."
      : "Rockstar publie régulièrement des patchs correctifs après la sortie d'un GTA. Activez les mises à jour automatiques sur votre plateforme pour recevoir les corrections dès qu'elles sont disponibles.",
  },
];

const getProblemCategories = (isEn: boolean) => [
  {
    title: isEn ? "LAUNCH PROBLEMS" : "PROBLÈMES DE LANCEMENT",
    accent: "primary",
    problems: [
      {
        name: isEn ? "Black screen on startup" : "Écran noir au démarrage",
        cause: isEn
          ? "Outdated GPU drivers or resolution conflict."
          : "Pilotes GPU obsolètes ou conflit de résolution.",
        fix: isEn
          ? "Update your graphics drivers. On PC, launch the game in windowed mode then switch to fullscreen. On console, restart in safe mode and rebuild the database."
          : "Mettez à jour vos pilotes graphiques. Sur PC, lancez le jeu en mode fenêtré puis passez en plein écran. Sur console, redémarrez en mode sans échec et reconstruisez la base de données.",
      },
      {
        name: isEn ? "Rockstar server connection error" : "Erreur de connexion aux serveurs Rockstar",
        cause: isEn
          ? "Overloaded servers on launch day or connection issue."
          : "Serveurs surchargés le jour de lancement ou problème de connexion.",
        fix: isEn
          ? "Check Rockstar server status (support.rockstargames.com). Wait a few minutes and retry. Disable VPN if you're using one."
          : "Vérifiez le statut des serveurs Rockstar (support.rockstargames.com). Attendez quelques minutes et réessayez. Désactivez le VPN si vous en utilisez un.",
      },
      {
        name: isEn ? "Insufficient storage space" : "Espace de stockage insuffisant",
        cause: isEn
          ? "GTA 6 requires significant storage space (estimated 150+ GB)."
          : "GTA 6 nécessite un espace de stockage important (estimé 150+ Go).",
        fix: isEn
          ? "Free up space by deleting unused games or apps. On PS5, move games to compatible external SSD storage."
          : "Libérez de l'espace en supprimant des jeux ou applications inutilisés. Sur PS5, déplacez des jeux sur le stockage externe SSD compatible.",
      },
    ],
  },
  {
    title: isEn ? "PERFORMANCE PROBLEMS" : "PROBLÈMES DE PERFORMANCE",
    accent: "sunset",
    problems: [
      {
        name: isEn ? "FPS drops in the city" : "Chutes de FPS en ville",
        cause: isEn
          ? "Vice City is very detail-heavy — neon lights, NPCs and vehicles tax the GPU."
          : "Vice City est très chargé en détails — les néons, les PNJ et les véhicules sollicitent le GPU.",
        fix: isEn
          ? "Reduce population density and shadow quality settings. Enable Performance mode (stable 30 FPS) instead of Fidelity if you prefer smoothness."
          : "Réduisez les paramètres de densité de population et de qualité des ombres. Activez le mode Performance (30 FPS stable) plutôt que Fidélité si vous préférez la fluidité.",
      },
      {
        name: isEn ? "Textures not loading" : "Textures qui ne se chargent pas",
        cause: isEn
          ? "Storage too slow or insufficient VRAM."
          : "Stockage trop lent ou mémoire VRAM insuffisante.",
        fix: isEn
          ? "Install the game on an SSD (essential on PC). Increase texture budget in settings if your VRAM allows. On PS5 Standard, consider an external M.2 SSD."
          : "Installez le jeu sur un SSD (indispensable sur PC). Augmentez le budget texture dans les paramètres si votre VRAM le permet. Sur PS5 Standard, envisagez un SSD M.2 externe.",
      },
      {
        name: isEn ? "Stuttering during vehicle races" : "Saccades pendant les courses de véhicules",
        cause: isEn
          ? "Open world streaming too slow during fast travel."
          : "Streaming de monde ouvert trop lent lors des déplacements rapides.",
        fix: isEn
          ? "Reduce draw distance. Close background applications. On PC, make sure the game is installed on an NVMe SSD."
          : "Réduisez la distance de dessin. Fermez les applications en arrière-plan. Sur PC, vérifiez que le jeu est installé sur un SSD NVMe.",
      },
    ],
  },
  {
    title: isEn ? "CRASHES & FREEZES" : "CRASHES & GEL",
    accent: "teal",
    problems: [
      {
        name: isEn ? "Random crash during gameplay" : "Crash aléatoire en partie",
        cause: isEn
          ? "Game bug or hardware overheating."
          : "Bug du jeu ou surchauffe matérielle.",
        fix: isEn
          ? "Update the game to the latest version. On console, make sure ventilation isn't obstructed. On PC, monitor GPU temperature with MSI Afterburner."
          : "Mettez à jour le jeu vers la dernière version. Sur console, assurez-vous que la ventilation n'est pas obstruée. Sur PC, surveillez la température du GPU avec MSI Afterburner.",
      },
      {
        name: isEn ? "Freeze during cutscenes" : "Gel pendant les cinématiques",
        cause: isEn
          ? "Audio/video sync bug or memory overload."
          : "Bug de synchronisation audio/vidéo ou surcharge mémoire.",
        fix: isEn
          ? "Restart the game. If the problem persists, disable cinematic mode and switch to windowed mode. Check that your audio drivers are up to date."
          : "Redémarrez le jeu. Si le problème persiste, désactivez le mode cinématique et passez en mode fenêtré. Vérifiez que vos pilotes audio sont à jour.",
      },
      {
        name: isEn ? "Save file corruption" : "Corruption de sauvegarde",
        cause: isEn
          ? "Crash during save or storage issue."
          : "Crash pendant la sauvegarde ou problème de stockage.",
        fix: isEn
          ? "Enable cloud saving (PS Plus / Xbox Cloud). Make regular manual saves. Do not turn off the console during an auto-save."
          : "Activez la sauvegarde cloud (PS Plus / Xbox Cloud). Effectuez des sauvegardes manuelles régulières. Ne pas éteindre la console pendant une sauvegarde auto.",
      },
    ],
  },
  {
    title: isEn ? "AUDIO & DISPLAY PROBLEMS" : "PROBLÈMES AUDIO & AFFICHAGE",
    accent: "gold",
    problems: [
      {
        name: isEn ? "Crackling or cutting sound" : "Son qui grésille ou se coupe",
        cause: isEn
          ? "Audio device conflict or outdated driver."
          : "Conflit de périphérique audio ou pilote obsolète.",
        fix: isEn
          ? "On PS5, check audio settings (PCM vs Bitstream). On PC, update audio drivers and disable third-party spatial audio. Set to Stereo if 5.1 causes issues."
          : "Sur PS5, vérifiez les paramètres audio (PCM vs Bitstream). Sur PC, mettez à jour les pilotes audio et désactivez l'audio spatial tiers. Réglez sur Stéréo si le 5.1 pose problème.",
      },
      {
        name: isEn ? "Screen tearing" : "Écran qui tremble (screen tearing)",
        cause: isEn
          ? "Desynchronization between GPU and display."
          : "Désynchronisation entre le GPU et l'écran.",
        fix: isEn
          ? "Enable VSync or adaptive sync (G-Sync / FreeSync). On PS5/Xbox, enable VRR if your display supports it."
          : "Activez le VSync ou la technologie adaptative (G-Sync / FreeSync). Sur PS5/Xbox, activez le VRR si votre écran le supporte.",
      },
      {
        name: isEn ? "HDR problems" : "Problèmes de HDR",
        cause: isEn
          ? "Bad HDR calibration or incompatible monitor."
          : "Mauvaise calibration HDR ou moniteur incompatible.",
        fix: isEn
          ? "Disable HDR if colors look incorrect. Calibrate HDR in the game and console settings. Make sure your display supports HDR10."
          : "Désactivez le HDR si les couleurs semblent incorrectes. Calibrez le HDR dans les paramètres du jeu et de la console. Vérifiez que votre écran supporte bien le HDR10.",
      },
    ],
  },
];

const accentColor = {
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  teal: "text-accent-teal",
  gold: "text-yellow-400",
};

const accentBorder = {
  primary: "border-accent-primary/20",
  sunset: "border-accent-sunset/20",
  teal: "border-accent-teal/20",
  gold: "border-yellow-400/20",
};

const accentBg = {
  primary: "card-base",
  sunset: "card-base",
  teal: "card-base",
  gold: "card-base",
};

export default async function ProblemesGTA6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const faqs = getFaqs(isEn);
  const problemCategories = getProblemCategories(isEn);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "GTA 6 Problems" : "Problèmes GTA 6", url: `${BASE_URL}${isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions"}` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}${isEn ? "/en/gta-6-problems-solutions" : "/problemes-gta-6-solutions"}`),
        ]}
      />
      <SectionPage
        title={isEn ? "GTA 6 —" : "GTA 6 —"}
        titleAccent={isEn ? "PROBLEMS & SOLUTIONS" : "PROBLÈMES & SOLUTIONS"}
        subtitle={isEn
          ? "Solutions to common GTA 6 problems: bugs, crashes, performance and launch errors."
          : "Solutions aux problèmes courants de GTA 6 : bugs, crashes, performances et erreurs de lancement."
        }
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">{isEn ? "This page will be updated on release day." : "Cette page sera mise à jour le jour de la sortie."}</strong>{" "}
              {isEn
                ? "The solutions listed are based on common AAA game problems and feedback from previous GTA versions. Specific solutions will be added after launch on November 19, 2026."
                : "Les solutions listées sont basées sur les problèmes courants des jeux AAA et les retours des versions précédentes de GTA. Des solutions spécifiques seront ajoutées après le lancement le 19 novembre 2026."
              }
            </p>
          </div>
        </div>

        {/* Minimum requirements */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5">
            {isEn ? "REQUIRED SPECIFICATIONS" : "CONFIGURATIONS REQUISES"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">{isEn ? "Minimum (PC)" : "Minimum (PC)"}</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> OS : Windows 10/11 64-bit</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> CPU : Intel i5-11600K / AMD Ryzen 5 5600X</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> GPU : NVIDIA RTX 3070 / AMD RX 6800 XT</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> {isEn ? "RAM: 16 GB" : "RAM : 16 Go"}</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> {isEn ? "Storage: 150 GB SSD" : "Stockage : 150 Go SSD"}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">{isEn ? "Recommended (PC)" : "Recommandée (PC)"}</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> OS : Windows 11 64-bit</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> CPU : Intel i7-12700K / AMD Ryzen 7 7800X3D</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> GPU : NVIDIA RTX 4070 Ti / AMD RX 7800 XT</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> {isEn ? "RAM: 32 GB" : "RAM : 32 Go"}</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> {isEn ? "Storage: 150 GB NVMe SSD" : "Stockage : 150 Go SSD NVMe"}</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-surface-muted rounded text-xs text-text-muted">
            <strong className="text-accent-teal">{isEn ? "Consoles:" : "Consoles :"}</strong>{" "}
            {isEn
              ? "PS5, PS5 Pro and Xbox Series X|S. Internal SSD is required. No PS4 or Xbox One support."
              : "PS5, PS5 Pro et Xbox Series X|S. Le SSD interne est requis. Pas de support PS4 ou Xbox One."
            }
          </div>
        </div>

        {/* Problem categories */}
        {problemCategories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent as keyof typeof accentColor]} mb-5 border-b border-border/50 pb-2`}>
              {cat.title}
            </h2>
            <div className="space-y-4">
              {cat.problems.map((problem) => (
                <div key={problem.name} className={`${accentBg[cat.accent as keyof typeof accentBg]} p-5 ${cat.accent !== 'gold' ? '' : ''} border ${accentBorder[cat.accent as keyof typeof accentBorder]}`} data-plate="primary">
                  <h3 className="font-semibold text-text-primary mb-2">{problem.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{isEn ? "Cause" : "Cause"}</p>
                      <p className="text-sm text-text-secondary">{problem.cause}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-1">{isEn ? "Solution" : "Solution"}</p>
                      <p className="text-sm text-text-secondary">{problem.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {isEn ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUENTES"}
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-text-primary mb-1">{f.question}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href={isEn ? "/en/news" : "/actualites"} className="text-accent-primary hover:underline">
            {isEn ? "See GTA 6 news →" : "Voir les actualités GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}