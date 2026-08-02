export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  origin: string;
  voice: string;
  image: string;
  quote: string;
  bio: string[];
  stats: { label: string; value: string }[];
  relationships: { name: string; relation: string; href: string }[];
}

export const characters: Character[] = [
  {
    id: "jason-duval",
    name: "Jason Duval",
    role: "Protagoniste jouable",
    description: "Ancien petit criminel cherchant une nouvelle vie a Leonida. Impulsif, determine, excellent conducteur.",
    origin: "Leonida, Keys",
    voice: "A confirmer",
    image: "/images/characters/jason-duval.jpg",
    quote: "Si quoi que ce soit arrive, je suis juste derriere toi.",
    bio: [
      "Jason Duval a grandi entoure de grifters et de criminels dans les Keys de Leonida. Apres avoir servi dans l'armee, il s'est retrouve a travailler pour des trafiquants de drogue locaux, incapable de se sortir du cycle criminel.",
      "Il vit desormais chez Brian Heder, qui lui offre un toit en echange de services. Mais quand ses affaires deviennent trop dangereuses, Jason se retrouve entraîne dans une spirale de braquages et de trahisons.",
      "Sa rencontre avec Lucia Caminos change tout. Ensemble, ils forment un duo a la Bonnie et Clyde, naviguant dans le monde impitoyable du crime organise de Vice City. Leur relation est le coeur de l'intrigue de GTA VI."
    ],
    stats: [
      { label: "Conduite", value: "95/100" },
      { label: "Tir", value: "80/100" },
      { label: "Force", value: "85/100" },
      { label: "Furtivite", value: "70/100" },
    ],
    relationships: [
      { name: "Lucia Caminos", relation: "Partenaire / Amante", href: "/personnages/lucia-caminos" },
      { name: "Brian Heder", relation: "Employeur / Proprietaire", href: "/personnages/brian-heder" },
      { name: "Cal Hampton", relation: "Ami proche", href: "/personnages/cal-hampton" },
    ],
  },
  {
    id: "lucia-caminos",
    name: "Lucia Caminos",
    role: "Protagoniste jouable",
    description: "Premiere heroine de la serie GTA. Strategie, ambitieuse, manipulatrice quand il le faut.",
    origin: "Liberty City / Vice City",
    voice: "Manni L. Perez (rumore)",
    image: "/images/characters/lucia-caminos.jpg",
    quote: "La seule chose qui compte, c'est qui tu connais et ce que tu as.",
    bio: [
      "Lucia Caminos est la premiere heroine jouable de la serie Grand Theft Auto. D'origine hispanique, elle a grandi a Liberty City avant de s'installer a Vice City. Son pere lui a appris a se battre des son plus jeune age.",
      "Elle a fait de la prison a Leonida pour avoir defendu sa famille, et porte un bracelet electronique en sortie. Cette experience l'a rendue plus determinee que jamais a obtenir la vie que sa mere revait pour elle.",
      "Sa relation avec Jason Duval est le pilier emotionnel de l'histoire. Lucia est la strategie du duo — elle planifie, manipule et obtient ce qu'elle veut. Ne la sous-estimez jamais."
    ],
    stats: [
      { label: "Strategie", value: "95/100" },
      { label: "Agilite", value: "90/100" },
      { label: "Negoce", value: "85/100" },
      { label: "Discression", value: "88/100" },
    ],
    relationships: [
      { name: "Jason Duval", relation: "Partenaire / Amant", href: "/personnages/jason-duval" },
      { name: "Raul Bautista", relation: "Connaissance dangereuse", href: "/personnages/raul-bautista" },
    ],
  },
  {
    id: "raul-bautista",
    name: "Raul Bautista",
    role: "Antagoniste",
    description: "Baron du crime organise de Vice City. Impitoyable, calculateur, controle les reseaux de contrebande.",
    origin: "Vice City, Leonida",
    voice: "A confirmer",
    image: "/images/characters/raul-bautista.jpg",
    quote: "A Vice City, il n'y a qu'une seule regle : la mienne.",
    bio: [
      "Raul Bautista est l'une des figures les plus craintes du crime organise de Vice City. Ce baron de la pepe contole une grande partie du trafic illegal dans la ville — drogues, armes, jeux d'argent clandestins.",
      "Impitoyable et calculateur, Raul a bati son empire depuis les bas-fonds de Vice City. Il connait chaque recoin de la ville, chaque corrompu dans les forces de l'ordre, et chaque dette impayee.",
      "Sa rencontre avec Jason et Lucia n'est pas une coincidence — il a des plans qui les impliquent tous les deux."
    ],
    stats: [
      { label: "Influence", value: "98/100" },
      { label: "Ressources", value: "95/100" },
      { label: "Manipulation", value: "92/100" },
      { label: "Danger", value: "97/100" },
    ],
    relationships: [
      { name: "Jason Duval", relation: "Pion dans ses plans", href: "/personnages/jason-duval" },
      { name: "Lucia Caminos", relation: "Connaissance dangereuse", href: "/personnages/lucia-caminos" },
    ],
  },
  {
    id: "cal-hampton",
    name: "Cal Hampton",
    role: "Allie",
    description: "Ami proche de Jason. Mecanicien et pilote talentueux.",
    origin: "Keys, Leonida",
    voice: "A confirmer",
    image: "/images/characters/cal-hampton.jpg",
    quote: "Je peux te faire rouler plus vite que n'importe qui dans cette ville.",
    bio: [
      "Cal Hampton est le meilleur ami de Jason et un mecanicien de talent. Il travaille dans un garage des Keys et connait chaque vehicule de Leonida par coeur.",
      "Pilote exceptionnel, il est toujours pret a aider Jason quand les choses tournent mal. Sa loyaute est inconditionnelle, meme si ses methodes sont parfois discutables."
    ],
    stats: [
      { label: "Mecanique", value: "95/100" },
      { label: "Pilotage", value: "90/100" },
      { label: "Loyaute", value: "98/100" },
      { label: "Discression", value: "60/100" },
    ],
    relationships: [
      { name: "Jason Duval", relation: "Meilleur ami", href: "/personnages/jason-duval" },
    ],
  },
  {
    id: "boobie-ike",
    name: "Boobie Ike",
    role: "Personnage secondaire",
    description: "Entrepreneur local au charisme debordant. Ses affaires ne sont pas toujours propres.",
    origin: "Vice City, Leonida",
    voice: "A confirmer",
    image: "/images/characters/boobie-ike.jpg",
    quote: "A Vice City, tout a un prix. Il suffit de savoir negocier.",
    bio: [
      "Boobie Ike est un entrepreneur incontournable de Vice City. Proprietaire de plusieurs clubs et entreprises, il a le charisme et les connexions pour ouvrir n'importe quelle porte.",
      "Mais derriere le sourire eclatant et les costumes flamboyants se cache un homme dont les affaires ne sont pas toujours legitimes. Boobie est un allie precieux... tant que vous etes utile."
    ],
    stats: [
      { label: "Charisme", value: "95/100" },
      { label: "Reseau", value: "90/100" },
      { label: "Business", value: "88/100" },
      { label: "Confiance", value: "50/100" },
    ],
    relationships: [
      { name: "Jason Duval", relation: "Contact business", href: "/personnages/jason-duval" },
      { name: "Dre'Quan Priest", relation: "Associe", href: "/personnages/drequan-priest" },
    ],
  },
  {
    id: "drequan-priest",
    name: "Dre'Quan Priest",
    role: "Personnage secondaire",
    description: "Musicien de rue talentueux qui croise le chemin de Jason et Lucia.",
    origin: "Port Gellhorn, Leonida",
    voice: "A confirmer",
    image: "/images/characters/drequan-priest.jpg",
    quote: "La rue a son propre rythme. Il suffit d'ecouter.",
    bio: [
      "Dre'Quan Priest est un musicien de rue talentueux qui vit a Port Gellhorn. Il compose et performe dans les quartiers populaires de Leonida, et ses paroles resonent avec la realite de la vie dans la ville.",
      "Son chemin croise celui de Jason et Lucia de maniere inattendue, et ses connaissances des quartiers populaires s'averent precieuses."
    ],
    stats: [
      { label: "Musique", value: "95/100" },
      { label: "Street knowledge", value: "85/100" },
      { label: "Loyaute", value: "80/100" },
      { label: "Combat", value: "55/100" },
    ],
    relationships: [
      { name: "Boobie Ike", relation: "Associe", href: "/personnages/boobie-ike" },
    ],
  },
  {
    id: "brian-heder",
    name: "Brian Heder",
    role: "Personnage secondaire",
    description: "Homme d'affaires respecte dont les activites cachent des secrets.",
    origin: "Ambrosia, Leonida",
    voice: "A confirmer",
    image: "/images/characters/brian-heder.jpg",
    quote: "L'argent ne dort jamais. Et moi non plus.",
    bio: [
      "Brian Heder est un homme d'affaires respecte d'Ambrosia, le quartier huppe de Vice City. Il est le proprietaire de Jason — littalement, puisqu'il le loge gratuitement en echange de services.",
      "Derriere son image de businessman respectable se cache un homme dont les activites sont loin d'etre propres. Brian a des doigts dans beaucoup de pies, et ses secrets pourraient bien tout faire exploser."
    ],
    stats: [
      { label: "Richesse", value: "95/100" },
      { label: "Influence", value: "85/100" },
      { label: "Manipulation", value: "80/100" },
      { label: "Danger", value: "75/100" },
    ],
    relationships: [
      { name: "Jason Duval", relation: "Employeur / Logeur", href: "/personnages/jason-duval" },
    ],
  },
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id);
}