import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import SectionPage from "@/components/SectionPage";
import { JsonLd } from "@/components/JsonLd";
import { BASE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Problèmes GTA 6 — Solutions, bugs et corrections GTA VI",
  description:
    "Problèmes connus et solutions pour GTA 6 (GTA VI) : bugs, problèmes de lancement, performances, crashes et corrections. Guide de dépannage complet.",
  alternates: { canonical: "/problemes-gta-6-solutions" },
  keywords: [
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
  ],
  openGraph: {
    title: "Problèmes GTA 6 — Solutions & corrections | CodeTricheGTA6",
    description: "Solutions aux problèmes courants de GTA 6 : bugs, crashes, problèmes de performance et corrections.",
    url: "/problemes-gta-6-solutions",
    type: "article",
  },
};

const faqs = [
  {
    question: "GTA 6 ne se lance pas, que faire ?",
    answer:
      "Vérifiez que votre console ou PC répond aux configurations minimales. Sur PS5/Xbox, essayez de réinstaller le jeu ou de vider le cache. Sur PC, mettez à jour vos pilotes GPU et vérifiez l'intégrité des fichiers via le launcher Rockstar ou Steam.",
  },
  {
    question: "GTA 6 a des chutes de FPS, comment optimiser ?",
    answer:
      "Réduisez les paramètres graphiques (ombres, rayons, résolution). Fermez les applications en arrière-plan. Sur PC, mettez à jour vos pilotes GPU. Sur PS5, activez le mode Performance dans les paramètres du jeu.",
  },
  {
    question: "GTA 6 crash pendant une mission, que faire ?",
    answer:
      "Sauvegardez régulièrement. Si un crash persiste à un point précis, essayez de recharger une sauvegarde antérieure. Sur console, réinstallez le jeu si le problème continue. Sur PC, vérifiez la RAM et la température du GPU.",
  },
  {
    question: "Y a-t-il des mises à jour pour corriger les bugs ?",
    answer:
      "Rockstar publie régulièrement des patchs correctifs après la sortie d'un GTA. Activez les mises à jour automatiques sur votre plateforme pour recevoir les corrections dès qu'elles sont disponibles.",
  },
];

const problemCategories = [
  {
    title: "PROBLÈMES DE LANCEMENT",
    accent: "primary",
    problems: [
      {
        name: "Écran noir au démarrage",
        cause: "Pilotes GPU obsolètes ou conflit de résolution.",
        fix: "Mettez à jour vos pilotes graphiques. Sur PC, lancez le jeu en mode fenêtré puis passez en plein écran. Sur console, redémarrez en mode sans échec et reconstruisez la base de données.",
      },
      {
        name: "Erreur de connexion aux serveurs Rockstar",
        cause: "Serveurs surchargés le jour de lancement ou problème de connexion.",
        fix: "Vérifiez le statut des serveurs Rockstar (support.rockstargames.com). Attendez quelques minutes et réessayez. Désactivez le VPN si vous en utilisez un.",
      },
      {
        name: "Espace de stockage insuffisant",
        cause: "GTA 6 nécessite un espace de stockage important (estimé 150+ Go).",
        fix: "Libérez de l'espace en supprimant des jeux ou applications inutilisés. Sur PS5, déplacez des jeux sur le stockage externe SSD compatible.",
      },
    ],
  },
  {
    title: "PROBLÈMES DE PERFORMANCE",
    accent: "sunset",
    problems: [
      {
        name: "Chutes de FPS en ville",
        cause: "Vice City est très chargé en détails — les néons, les PNJ et les véhicules sollicitent le GPU.",
        fix: "Réduisez les paramètres de densité de population et de qualité des ombres. Activez le mode Performance (30 FPS stable) plutôt que Fidélité si vous préférez la fluidité.",
      },
      {
        name: "Textures qui ne se chargent pas",
        cause: "Stockage trop lent ou mémoire VRAM insuffisante.",
        fix: "Installez le jeu sur un SSD (indispensable sur PC). Augmentez le budget texture dans les paramètres si votre VRAM le permet. Sur PS5 Standard, envisagez un SSD M.2 externe.",
      },
      {
        name: "Saccades pendant les courses de véhicules",
        cause: "Streaming de monde ouvert trop lent lors des déplacements rapides.",
        fix: "Réduisez la distance de dessin. Fermez les applications en arrière-plan. Sur PC, vérifiez que le jeu est installé sur un SSD NVMe.",
      },
    ],
  },
  {
    title: "CRASHES & GEL",
    accent: "teal",
    problems: [
      {
        name: "Crash aléatoire en partie",
        cause: "Bug du jeu ou surchauffe matérielle.",
        fix: "Mettez à jour le jeu vers la dernière version. Sur console, assurez-vous que la ventilation n'est pas obstruée. Sur PC, surveillez la température du GPU avec MSI Afterburner.",
      },
      {
        name: "Gel pendant les cinématiques",
        cause: "Bug de synchronisation audio/vidéo ou surcharge mémoire.",
        fix: "Redémarrez le jeu. Si le problème persiste, désactivez le mode cinématique et passez en mode fenêtré. Vérifiez que vos pilotes audio sont à jour.",
      },
      {
        name: "Corruption de sauvegarde",
        cause: "Crash pendant la sauvegarde ou problème de stockage.",
        fix: "Activez la sauvegarde cloud (PS Plus / Xbox Cloud). Effectuez des sauvegardes manuelles régulières. Ne pas éteindre la console pendant une sauvegarde auto.",
      },
    ],
  },
  {
    title: "PROBLÈMES AUDIO & AFFICHAGE",
    accent: "gold",
    problems: [
      {
        name: "Son qui grésille ou se coupe",
        cause: "Conflit de périphérique audio ou pilote obsolète.",
        fix: "Sur PS5, vérifiez les paramètres audio (PCM vs Bitstream). Sur PC, mettez à jour les pilotes audio et désactivez l'audio spatial tiers. Réglez sur Stéréo si le 5.1 pose problème.",
      },
      {
        name: "Écran qui tremble (screen tearing)",
        cause: "Désynchronisation entre le GPU et l'écran.",
        fix: "Activez le VSync ou la technologie adaptative (G-Sync / FreeSync). Sur PS5/Xbox, activez le VRR si votre écran le supporte.",
      },
      {
        name: "Problèmes de HDR",
        cause: "Mauvaise calibration HDR ou moniteur incompatible.",
        fix: "Désactivez le HDR si les couleurs semblent incorrectes. Calibrez le HDR dans les paramètres du jeu et de la console. Vérifiez que votre écran supporte bien le HDR10.",
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

export default function ProblemesGTA6Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", url: BASE_URL },
            { name: "Problèmes GTA 6", url: `${BASE_URL}/problemes-gta-6-solutions` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/problemes-gta-6-solutions`),
        ]}
      />
      <SectionPage
        title="PROBLÈMES & SOLUTIONS"
        titleAccent="GTA 6 —"
        subtitle="Solutions aux problèmes courants de GTA 6 : bugs, crashes, performances et erreurs de lancement."
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="primary">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              <strong className="text-accent-teal">Cette page sera mise à jour le jour de la sortie.</strong> Les solutions listées sont basées sur les problèmes courants des jeux AAA et les retours des versions précédentes de GTA. Des solutions spécifiques seront ajoutées après le lancement le 19 novembre 2026.
            </p>
          </div>
        </div>

        {/* Configuration minimale */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="primary">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-primary mb-5">
            CONFIGURATIONS REQUises
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Minimum (PC)</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> OS : Windows 10/11 64-bit</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> CPU : Intel i5-11600K / AMD Ryzen 5 5600X</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> GPU : NVIDIA RTX 3070 / AMD RX 6800 XT</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> RAM : 16 Go</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-primary shrink-0" /> Stockage : 150 Go SSD</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Recommandée (PC)</h3>
              <ul className="text-sm text-text-secondary space-y-1.5">
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> OS : Windows 11 64-bit</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> CPU : Intel i7-12700K / AMD Ryzen 7 7800X3D</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> GPU : NVIDIA RTX 4070 Ti / AMD RX 7800 XT</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> RAM : 32 Go</li>
                <li className="flex gap-2"><ChevronRight className="h-4 w-4 text-accent-sunset shrink-0" /> Stockage : 150 Go SSD NVMe</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-surface-muted rounded text-xs text-text-muted">
            <strong className="text-accent-teal">Consoles :</strong> PS5, PS5 Pro et Xbox Series X|S. Le SSD interne est requis. Pas de support PS4 ou Xbox One.
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
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Cause</p>
                      <p className="text-sm text-text-secondary">{problem.cause}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-1">Solution</p>
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
            QUESTIONS FRÉQUENTES
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
          <Link href="/actualites" className="text-accent-primary hover:underline">
            Voir les actualités GTA 6 →
          </Link>
        </div>
      </SectionPage>
    </>
  );
}