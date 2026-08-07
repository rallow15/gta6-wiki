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
    fr: "Secrets & Easter Eggs GTA 6 — Tous les mystères de GTA VI",
    en: "GTA 6 Secrets & Easter Eggs — All mysteries in GTA VI",
  };
  const descriptions: Record<string, string> = {
    fr: "Tous les secrets et easter eggs confirmés dans GTA 6 (GTA VI) : références Vice City, mystères de Leonida, objets cachés, liens avec GTA V et Red Dead Redemption.",
    en: "All confirmed secrets and easter eggs in GTA 6 (GTA VI): Vice City references, Leonida mysteries, hidden items, connections to GTA V and Red Dead Redemption.",
  };
  const keywords = isEn
    ? [
        "GTA 6 secrets",
        "GTA 6 easter eggs",
        "GTA 6 mysteries",
        "Vice City secrets GTA 6",
        "GTA VI easter eggs",
        "hidden items GTA 6",
        "GTA 6 references",
        "Leonida mysteries",
      ]
    : [
        "secrets GTA 6",
        "easter eggs GTA 6",
        "mystères GTA 6",
        "secrets Vice City GTA 6",
        "easter eggs GTA VI",
        "objets cachés GTA 6",
        "références GTA 6",
        "mystères Leonida",
      ];

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    alternates: {
      canonical: isEn ? "/en/secrets-easter-eggs-gta-6" : "/secrets-easter-eggs-gta-6",
      languages: {
        fr: "/secrets-easter-eggs-gta-6",
        en: "/en/secrets-easter-eggs-gta-6",
      },
    },
    keywords,
    openGraph: {
      title: `${titles[locale] ?? titles.fr} | ${siteName}`,
      description: descriptions[locale] ?? descriptions.fr,
      url: isEn ? "/en/secrets-easter-eggs-gta-6" : "/secrets-easter-eggs-gta-6",
      type: "article",
      locale: getSiteLocale(locale),
      siteName,
    },
  };
}

const accentColor: Record<string, string> = {
  teal: "text-accent-teal",
  primary: "text-accent-primary",
  sunset: "text-accent-sunset",
  gold: "text-yellow-400",
};

const accentBorder: Record<string, string> = {
  teal: "border-accent-teal/30",
  primary: "border-accent-primary/30",
  sunset: "border-accent-sunset/30",
  gold: "border-yellow-400/30",
};

export default async function SecretsEasterEggsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const lieuxPath = isEn ? "/locations" : "/lieux";

  const faqs = [
    {
      question: isEn
        ? "Are there easter eggs in GTA 6?"
        : "Y a-t-il des easter eggs dans GTA 6 ?",
      answer: isEn
        ? "Yes. Official trailers and screenshots have already revealed several easter eggs: references to Vice City Stories, hidden Rockstar logos, nods to Red Dead Redemption and unexplained mysteries in the Grassrivers swamps."
        : "Oui. Les trailers et screenshots officiels ont déjà révélé plusieurs easter eggs : références à Vice City Stories, logos Rockstar cachés, clins d'œil à Red Dead Redemption et des mystères inexpliqués dans les marais de Grassrivers.",
    },
    {
      question: isEn
        ? "Does GTA 6 have connections to GTA V?"
        : "GTA 6 a-t-il des liens avec GTA V ?",
      answer: isEn
        ? "GTA 6 is a parallel universe. Fictional brands (Ammu-Nation, Burger Shot, Ponsonbys) return, but GTA V characters don't appear in the story. Visual references to GTA V's Los Santos can be seen in in-game media."
        : "GTA 6 est un univers parallèle. Les marques fictives (Ammu-Nation, Burger Shot, Ponsonbys) reviennent, mais les personnages de GTA V n'apparaissent pas dans l'histoire. Des références visuelles au Los Santos de GTA V sont visibles dans les médias.",
    },
    {
      question: isEn
        ? "What is the mystery of the Grassrivers swamps?"
        : "Quel est le mystère des marais de Grassrivers ?",
      answer: isEn
        ? "The Grassrivers swamps (inspired by the Everglades) are the most mysterious area on the map. Trailers show alligators, shipwrecks and a mysterious atmosphere. Players expect secrets similar to Mount Chiliad in GTA V."
        : "Les marais de Grassrivers (inspirés des Everglades) sont la zone la plus mystérieuse de la carte. Les trailers montrent des alligators, des épaves et une ambiance mystérieuse. Les joueurs s'attendent à des secrets similaires au Mont Chiliad de GTA V.",
    },
    {
      question: isEn
        ? "Can you find secret weapons in GTA 6?"
        : "Peut-on trouver des armes secrètes dans GTA 6 ?",
      answer: isEn
        ? "Trailers confirm at least one special weapon: the Speargun for underwater exploration. Other secret weapons and hidden items will be discovered after the game's release."
        : "Les trailers confirment au moins une arme spéciale : le fusil harpon (Speargun) pour l'exploration sous-marine. D'autres armes secrètes et objets cachés seront découverts après la sortie du jeu.",
    },
  ];

  const categories = [
    {
      title: isEn ? "VICE CITY REFERENCES" : "RÉFÉRENCES VICE CITY",
      accent: "teal",
      items: [
        { name: isEn ? "Retro neon logos" : "Logos néon rétro", desc: isEn ? "Vice City's neon signs recreate the visual style of GTA: Vice City (2002), with identical fonts and colors." : "Les enseignes néon de Vice City reprennent le style visuel de GTA: Vice City (2002), avec des polices et couleurs identiques.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: "Voodoo Lounge", desc: isEn ? "A bar named Voodoo Lounge visible in screenshots, a direct reference to the voodoo atmosphere of Vice City." : "Un bar nommé Voodoo Lounge visible dans les screenshots, référence directe à l'ambiance vaudou de Vice City.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: "Malibu Club", desc: isEn ? "The potential return of the legendary Malibu Club from GTA: Vice City, visible in the background of trailers." : "Le retour potentiel du mythique Malibu Club de GTA: Vice City, visible en arrière-plan dans les trailers.", status: isEn ? "Rumor" : "Rumeur" },
        { name: isEn ? "Emotion 98.3 radio station" : "Station radio Emotion 98.3", desc: isEn ? "A nostalgic-sounding radio station echoing the iconic soundtracks of Vice City." : "Une station radio aux airs nostalgiques faisant écho aux bandes-sons cultes de Vice City.", status: isEn ? "Rumor" : "Rumeur" },
      ],
    },
    {
      title: isEn ? "RED DEAD REDEMPTION LINKS" : "LIENS RED DEAD REDEMPTION",
      accent: "sunset",
      items: [
        { name: "Duke Arms Company", desc: isEn ? "The Duke weapon brand in GTA 6 is a direct nod to the Dutch van der Linde family in Red Dead Redemption." : "La marque d'armes Duke dans GTA 6 est un clin d'œil direct à la famille Dutch van der Linde dans Red Dead Redemption.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: "Rideout Customs", desc: isEn ? "The Rideout customization garage echoes the customization mechanics from RDR2." : "Le garage de customisation Rideout rappelle les mécaniques de customisation de RDR2.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: isEn ? "Wild animals" : "Animaux sauvages", desc: isEn ? "The hunting and animal system in the swamps directly evokes RDR2's mechanics." : "Le système de chasse et d'animaux dans les marais évoque directement les mécaniques de RDR2.", status: isEn ? "Confirmed" : "Confirmé" },
      ],
    },
    {
      title: isEn ? "LEONIDA MYSTERIES" : "MYSTÈRES DE LEONIDA",
      accent: "primary",
      items: [
        { name: isEn ? "Giant alligators" : "Alligators géants", desc: isEn ? "Unusually large alligators in the Grassrivers swamps — the start of an animal mystery?" : "Des alligators de taille inhabituelle dans les marais de Grassrivers — le début d'un mystère animal ?", status: isEn ? "Confirmed" : "Confirmé" },
        { name: isEn ? "Underwater shipwrecks" : "Épaves sous-marines", desc: isEn ? "Visible shipwrecks underwater, suggesting hidden treasures to explore while diving." : "Des épaves de navires visibles sous l'eau, suggérant des trésors cachés à explorer en plongée.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: isEn ? "Mount Kalaga" : "Mont Kalaga", desc: isEn ? "Mount Kalaga's national park potentially hides high-altitude secrets, similar to Mount Chiliad." : "Le parc national du Mont Kalaga cache potentiellement des secrets en altitude, à l'image du Mont Chiliad.", status: isEn ? "Rumor" : "Rumeur" },
        { name: isEn ? "Mysterious radio signal" : "Signal radio mystérieux", desc: isEn ? "Radio frequencies picked up in remote areas could hide ARGs or mysteries." : "Des fréquences radio captées dans des zones reculées pourraient cacher des ARG ou des mystères.", status: isEn ? "Rumor" : "Rumeur" },
      ],
    },
    {
      title: isEn ? "HIDDEN DETAILS" : "DÉTAILS CACHÉS",
      accent: "gold",
      items: [
        { name: isEn ? "Personal diaries" : "Journaux intimes", desc: isEn ? "Letters and documents scattered across the map telling parallel stories." : "Des lettres et documents épars à travers la carte racontant des histoires parallèles.", status: isEn ? "Rumor" : "Rumeur" },
        { name: isEn ? "Graffiti and messages" : "Graffiti et messages", desc: isEn ? "Graffiti on Vice City walls containing clues and references to other Rockstar games." : "Des graffitis sur les murs de Vice City contenant des indices et références à d'autres jeux Rockstar.", status: isEn ? "Confirmed" : "Confirmé" },
        { name: isEn ? "Hidden outfits" : "Costumes cachés", desc: isEn ? "Special outfits inspired by historical characters from the GTA series, scattered throughout Leonida." : "Des tenues spéciales inspirées de personnages historiques de la série GTA, disséminées dans Leonida.", status: isEn ? "Rumor" : "Rumeur" },
        { name: isEn ? "Speargun" : "Fusil harpon", desc: isEn ? "Special weapon confirmed for underwater exploration, allowing access to secret areas." : "Arme spéciale confirmée pour l'exploration sous-marine, permettant de découvrir des zones secrètes.", status: isEn ? "Confirmed" : "Confirmé" },
      ],
    },
  ];

  const statusBadge: Record<string, string> = isEn
    ? {
        Confirmed: "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
        Rumor: "bg-accent-sunset/10 text-accent-sunset border-accent-sunset/30",
      }
    : {
        Confirmé: "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
        Rumeur: "bg-accent-sunset/10 text-accent-sunset border-accent-sunset/30",
      };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: isEn ? "Home" : "Accueil", url: BASE_URL },
            { name: isEn ? "GTA 6 Secrets & Easter Eggs" : "Secrets & Easter Eggs GTA 6", url: `${BASE_URL}/secrets-easter-eggs-gta-6` },
          ]),
          faqJsonLd(faqs, `${BASE_URL}/secrets-easter-eggs-gta-6`),
        ]}
      />
      <SectionPage
        title="SECRETS & EASTER EGGS"
        titleAccent="GTA 6 —"
        subtitle={isEn
          ? "All confirmed secrets, easter eggs and mysteries in GTA 6. Vice City references, RDR links and Leonida mysteries."
          : "Tous les secrets, easter eggs et mystères confirmés dans GTA 6. Références Vice City, liens RDR et mystères de Leonida."}
      >
        <div className="mb-8 card-base p-4 border-accent-teal/20" data-plate="gold">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-teal shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              {isEn ? (
                <>
                  <strong className="text-accent-teal">Official sources + community analysis.</strong> Items marked "Confirmed" are visible in official trailers/screenshots. "Rumor" items are community theories based on visual clues.
                </>
              ) : (
                <>
                  <strong className="text-accent-teal">Sources officielles + analyse communautaire.</strong> Les éléments marqués « Confirmé » sont visibles dans les trailers/screenshots officiels. Les éléments « Rumeur » sont des théories communautaires basées sur des indices visuels.
                </>
              )}
            </p>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className={`font-display font-bold text-2xl tracking-tight ${accentColor[cat.accent]} mb-5 border-b border-border/50 pb-2`}>
              {cat.title}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className={`card-base p-5 border ${accentBorder[cat.accent]}`} data-plate="gold">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-text-primary">{item.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border shrink-0 ${statusBadge[item.status] ?? ""}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Leaks & theories */}
        <div className="mb-10 card-base p-6 sm:p-8" data-plate="gold">
          <h2 className="font-display font-bold text-2xl tracking-tight text-accent-sunset mb-5">
            {isEn ? "COMMUNITY THEORIES" : "THÉORIES DE LA COMMUNAUTÉ"}
          </h2>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span>{isEn ? (
                <><strong className="text-text-primary">The Ghost of Vice City</strong> — Players think they've spotted a ghostly silhouette in Vice City's neon lights, reminiscent of the Mount Gordo ghost in GTA V.</>
              ) : (
                <><strong className="text-text-primary">Le fantôme de Vice City</strong> — Des joueurs pensent avoir repéré une silhouette fantomatique dans les néons de Vice City, rappelant le fantôme du Mont Gordo dans GTA V.</>
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span>{isEn ? (
                <><strong className="text-text-primary">The Swamp Monster</strong> — The Grassrivers area could hide a mythical creature, like the bigfoot in GTA San Andreas and RDR2.</>
              ) : (
                <><strong className="text-text-primary">Le monstre des marais</strong> — La zone de Grassrivers pourrait cacher une créature mythique, comme le bigfoot de GTA San Andreas et RDR2.</>
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span>{isEn ? (
                <><strong className="text-text-primary">The Secret Island of the Keys</strong> — A small uninhabited island visible on the Leonida Keys map could hold a major secret.</>
              ) : (
                <><strong className="text-text-primary">L'île secrète des Keys</strong> — Une petite île inhabitée visible sur la carte des Leonida Keys pourrait renfermer un secret majeur.</>
              )}</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 text-accent-sunset mt-0.5 shrink-0" />
              <span>{isEn ? (
                <><strong className="text-text-primary">The Mural Code</strong> — Graffiti in Vice City's alleys could form a code to decipher, similar to the Mount Chiliad mystery.</>
              ) : (
                <><strong className="text-text-primary">Le code mural</strong> — Des graffitis dans les ruelles de Vice City pourraient former un code à déchiffrer, à l'image du mystère du Mont Chiliad.</>
              )}</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card-base p-6 sm:p-8" data-plate="gold">
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
          <Link href={lieuxPath} className="text-accent-primary hover:underline">
            {isEn ? "Explore all GTA 6 locations →" : "Explorer tous les lieux de GTA 6 →"}
          </Link>
        </div>
      </SectionPage>
    </>
  );
}