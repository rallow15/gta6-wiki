export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  source: string;
  inspired: string;
  image: string;
  images?: string[];
  edition?: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  origin: string;
  voice: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  image: string;
}

export const vehicles: Vehicle[] = [
  { id: "cheetah", name: "'95 Grotti Cheetah", category: "Sportive", description: "Supercar inspiree de la Ferrari Testarossa. Design retro-futuriste emblematique de Vice City. Livery exclusive Edition Ultime.", source: "Screenshots officiels Rockstar — Edition Ultime", inspired: "Ferrari Testarossa", image: "/images/vehicles/cheetah.jpg", images: ["/images/vehicles/cheetah.jpg", "/images/vehicles/cheetah-02.jpg", "/images/vehicles/cheetah-03.jpg", "/images/vehicles/cheetah-04.jpg", "/images/vehicles/cheetah-05.jpg"], edition: "Edition Ultime" },
  { id: "ganado", name: "Vapid Ganado", category: "SUV", description: "Le vehicule personnel de Jason. SUV robuste et polyvalent, parfait pour les routes de Leonida.", source: "Screenshots officiels Rockstar", inspired: "Ford Bronco", image: "/images/vehicles/ganado.jpg" },
  { id: "enduro", name: "Dinka Enduro", category: "Moto", description: "Moto tout-terrain avec kickstand visible. Rangee a la planque de Jason avec le Kayak.", source: "Screenshots officiels Rockstar — Edition Ultime", inspired: "Dual-sport motorcycle", image: "/images/vehicles/enduro.jpg", edition: "Edition Ultime" },
  { id: "squalo", name: "Shitzu Squalo", category: "Bateau", description: "Speedboat puissant avec equipement de plongee. Parfait pour les courses en mer et les caches en haute mer.", source: "Screenshots officiels Rockstar — Edition Ultime", inspired: "Cigarette Boat", image: "/images/vehicles/squalo.jpg", edition: "Edition Ultime" },
  { id: "dominator-buggy", name: "'67 Vapid Dominator Buggy", category: "Muscle", description: "Version buggy tout-terrain de la Dominator classique. Rangee au Paradise Garage, Watson Bay.", source: "Screenshots officiels Rockstar — Edition Ultime", inspired: "Ford Mustang Buggy", image: "/images/vehicles/dominator-buggy.jpg", edition: "Edition Ultime" },
  { id: "stanier", name: "'55 Vapid Stanier", category: "Classique", description: "Berline vintage des annees 50. Visible devant l'Ocean View Hotel. Pack Vice City Vintage.", source: "Screenshots officiels Rockstar — Precommande", inspired: "1950s American Sedan", image: "/images/vehicles/stanier.jpg", images: ["/images/vehicles/stanier.jpg", "/images/vehicles/stanier-02.jpg", "/images/vehicles/stanier-03.jpg", "/images/vehicles/stanier-04.jpg"], edition: "Vice City Pack" },
];

export const characters: Character[] = [
  { id: "jason-duval", name: "Jason Duval", role: "Protagoniste jouable", description: "Ancien petit criminel cherchant une nouvelle vie a Leonida. Impulsif, determine, excellent conducteur.", origin: "Leonida", voice: "A confirmer", image: "/images/characters/jason-duval.jpg" },
  { id: "lucia-caminos", name: "Lucia Caminos", role: "Protagoniste jouable", description: "Premiere heroine de la serie GTA. Strategie, ambitieuse, manipulatrice quand il le faut.", origin: "Vice City", voice: "A confirmer", image: "/images/characters/lucia-caminos.jpg" },
  { id: "raul-bautista", name: "Raul Bautista", role: "Antagoniste", description: "Baron du crime organise de Vice City. Impitoyable, calculateur, controle les reseaux de contrebande.", origin: "Vice City", voice: "A confirmer", image: "/images/characters/raul-bautista.jpg" },
  { id: "cal-hampton", name: "Cal Hampton", role: "Allie", description: "Ami proche de Jason. Mecanicien et pilote talentueux.", origin: "Leonida", voice: "A confirmer", image: "/images/characters/cal-hampton.jpg" },
  { id: "boobie-ike", name: "Boobie Ike", role: "Personnage secondaire", description: "Entrepreneur local au charisme debordant. Ses affaires ne sont pas toujours propres.", origin: "Vice City", voice: "A confirmer", image: "/images/characters/boobie-ike.jpg" },
  { id: "drequan-priest", name: "Dre'Quan Priest", role: "Personnage secondaire", description: "Musicien de rue talentueux qui croise le chemin de Jason et Lucia.", origin: "Port Gellhorn", voice: "A confirmer", image: "/images/characters/drequan-priest.jpg" },
  { id: "brian-heder", name: "Brian Heder", role: "Personnage secondaire", description: "Homme d'affaires respecte dont les activites cachent des secrets.", origin: "Ambrosia", voice: "A confirmer", image: "/images/characters/brian-heder.jpg" },
];

export const locations: Location[] = [
  { id: "vice-city", name: "Vice City", type: "Metropole", description: "La ville phare de Leonida, inspiree de Miami. Neons, plages, crime et opportunites.", features: ["Downtown", "Ocean Beach", "Little Haiti", "Vice Beach", "Starfish Island"], image: "/images/locations/vice-city.jpg" },
  { id: "leonida-keys", name: "Leonida Keys", type: "Archipel", description: "Archipel tropical au sud de Vice City. Plages paradisiaques et caches de contrebandiers.", features: ["Key Largo", "Islamorada", "Key West"], image: "/images/locations/leonida-keys.jpg" },
  { id: "grassrivers", name: "Grassrivers", type: "Marais", description: "Les Everglades de Leonida. Alligators, mysteres et dangers dans les marais.", features: ["Marais salins", "Mangroves", "Campements caches"], image: "/images/locations/grassrivers.jpg" },
  { id: "port-gellhorn", name: "Port Gellhorn", type: "Port", description: "Port industriel ou se melangent commerce legitime et affaires louches.", features: ["Entrepots", "Conteneurs", "Zone industrielle"], image: "/images/locations/port-gellhorn.jpg" },
  { id: "ambrosia", name: "Ambrosia", type: "Quartier residentiel", description: "Quartier huppe au nord de Vice City. Manoirs, country clubs et secrets bien gardes.", features: ["Manoirs", "Country club", "Residences de luxe"], image: "/images/locations/ambrosia.jpg" },
  { id: "mountains", name: "Mont Kalaga", type: "Nature", description: "Reliefs montagneux et parcs nationaux de Leonida. Randonnees et paysages spectaculaires.", features: ["Sentiers de randonnee", "Lacs", "Cabanes isolees"], image: "/images/locations/mount-kalaga.jpg" },
];