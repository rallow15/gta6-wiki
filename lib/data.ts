export interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  descriptionEn: string;
  source: string;
  inspired: string;
  inspiredEn: string;
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
  descriptionEn: string;
  features: string[];
  featuresEn?: string[];
  image: string;
}

export const vehicles: Vehicle[] = [
  { id: "cheetah", name: "'95 Grotti Cheetah", category: "Sportive", description: "Supercar inspirée de la Ferrari Testarossa. Design rétro-futuriste emblématique de Vice City. Livery exclusive Édition Ultime.", descriptionEn: "Supercar inspired by the Ferrari Testarossa. Iconic retro-futuristic design synonymous with Vice City. Ultimate Edition exclusive livery.", source: "Screenshots officiels Rockstar — Édition Ultime", inspired: "Ferrari Testarossa", inspiredEn: "Ferrari Testarossa", image: "/images/vehicles/cheetah.jpg", images: ["/images/vehicles/cheetah.jpg", "/images/vehicles/cheetah-02.jpg", "/images/vehicles/cheetah-03.jpg", "/images/vehicles/cheetah-04.jpg", "/images/vehicles/cheetah-05.jpg"], edition: "Édition Ultime" },
  { id: "ganado", name: "Vapid Ganado", category: "SUV", description: "Le véhicule personnel de Jason. SUV robuste et polyvalent, parfait pour les routes de Leonida.", descriptionEn: "Jason's personal vehicle. Rugged and versatile SUV, perfect for the roads of Leonida.", source: "Screenshots officiels Rockstar", inspired: "Ford Bronco", inspiredEn: "Ford Bronco", image: "/images/vehicles/ganado.jpg" },
  { id: "enduro", name: "Dinka Enduro", category: "Moto", description: "Moto tout-terrain avec kickstand visible. Rangée à la planque de Jason avec le Kayak.", descriptionEn: "Dual-sport motorcycle with visible kickstand. Parked at Jason's stash house alongside the kayak.", source: "Screenshots officiels Rockstar — Édition Ultime", inspired: "Dual-sport motorcycle", inspiredEn: "Dual-sport motorcycle", image: "/images/vehicles/enduro.jpg", edition: "Édition Ultime" },
  { id: "squalo", name: "Shitzu Squalo", category: "Bateau", description: "Speedboat puissant avec équipement de plongée. Parfait pour les courses en mer et les caches en haute mer.", descriptionEn: "Powerful speedboat with diving equipment. Perfect for offshore racing and deep-sea hideouts.", source: "Screenshots officiels Rockstar — Édition Ultime", inspired: "Cigarette Boat", inspiredEn: "Cigarette Boat", image: "/images/vehicles/squalo.jpg", edition: "Édition Ultime" },
  { id: "dominator-buggy", name: "'67 Vapid Dominator Buggy", category: "Muscle", description: "Version buggy tout-terrain de la Dominator classique. Rangée au Paradise Garage, Watson Bay.", descriptionEn: "Off-road buggy version of the classic Dominator. Parked at Paradise Garage, Watson Bay.", source: "Screenshots officiels Rockstar — Édition Ultime", inspired: "Ford Mustang Buggy", inspiredEn: "Ford Mustang Buggy", image: "/images/vehicles/dominator-buggy.jpg", edition: "Édition Ultime" },
  { id: "stanier", name: "'55 Vapid Stanier", category: "Classique", description: "Berline vintage des années 50. Visible devant l'Ocean View Hotel. Pack Vice City Vintage.", descriptionEn: "Vintage 1950s sedan. Seen outside the Ocean View Hotel. Vice City Pack exclusive.", source: "Screenshots officiels Rockstar — Précommande", inspired: "1950s American Sedan", inspiredEn: "1950s American Sedan", image: "/images/vehicles/stanier.jpg", images: ["/images/vehicles/stanier.jpg", "/images/vehicles/stanier-02.jpg", "/images/vehicles/stanier-03.jpg", "/images/vehicles/stanier-04.jpg"], edition: "Vice City Pack" },
];

export const characters: Character[] = [
  { id: "jason-duval", name: "Jason Duval", role: "Protagoniste jouable", description: "Ancien petit criminel cherchant une nouvelle vie à Leonida. Impulsif, déterminé, excellent conducteur.", origin: "Leonida", voice: "À confirmer", image: "/images/characters/jason-duval.jpg" },
  { id: "lucia-caminos", name: "Lucia Caminos", role: "Protagoniste jouable", description: "Première héroïne de la série GTA. Stratégique, ambitieuse, manipulatrice quand il le faut.", origin: "Vice City", voice: "À confirmer", image: "/images/characters/lucia-caminos.jpg" },
  { id: "raul-bautista", name: "Raul Bautista", role: "Antagoniste", description: "Baron du crime organisé de Vice City. Impitoyable, calculateur, contrôle les réseaux de contrebande.", origin: "Vice City", voice: "À confirmer", image: "/images/characters/raul-bautista.jpg" },
  { id: "cal-hampton", name: "Cal Hampton", role: "Allié", description: "Ami proche de Jason. Mécanicien et pilote talentueux.", origin: "Leonida", voice: "À confirmer", image: "/images/characters/cal-hampton.jpg" },
  { id: "boobie-ike", name: "Boobie Ike", role: "Personnage secondaire", description: "Entrepreneur local au charisme débordant. Ses affaires ne sont pas toujours propres.", origin: "Vice City", voice: "À confirmer", image: "/images/characters/boobie-ike.jpg" },
  { id: "drequan-priest", name: "Dre'Quan Priest", role: "Personnage secondaire", description: "Musicien de rue talentueux qui croise le chemin de Jason et Lucia.", origin: "Port Gellhorn", voice: "À confirmer", image: "/images/characters/drequan-priest.jpg" },
  { id: "brian-heder", name: "Brian Heder", role: "Personnage secondaire", description: "Homme d'affaires respecté dont les activités cachent des secrets.", origin: "Ambrosia", voice: "À confirmer", image: "/images/characters/brian-heder.jpg" },
];

export const locations: Location[] = [
  { id: "vice-city", name: "Vice City", type: "Métropole", description: "La ville phare de Leonida, inspirée de Miami. Néons, plages, crime et opportunités.", descriptionEn: "The flagship city of Leonida, inspired by Miami. Neon lights, beaches, crime and opportunity.", features: ["Downtown", "Ocean Beach", "Little Haiti", "Vice Beach", "Starfish Island"], featuresEn: ["Downtown", "Ocean Beach", "Little Haiti", "Vice Beach", "Starfish Island"], image: "/images/locations/vice-city.jpg" },
  { id: "leonida-keys", name: "Leonida Keys", type: "Archipel", description: "Archipel tropical au sud de Vice City. Plages paradisiaques et caches de contrebandiers.", descriptionEn: "Tropical archipelago south of Vice City. Pristine beaches and smuggler hideouts.", features: ["Key Largo", "Islamorada", "Key West"], featuresEn: ["Key Largo", "Islamorada", "Key West"], image: "/images/locations/leonida-keys.jpg" },
  { id: "grassrivers", name: "Grassrivers", type: "Marais", description: "Les Everglades de Leonida. Alligators, mystères et dangers dans les marais.", descriptionEn: "The Everglades of Leonida. Alligators, mysteries and danger in the swamps.", features: ["Marais salins", "Mangroves", "Campements cachés"], featuresEn: ["Salt marshes", "Mangroves", "Hidden camps"], image: "/images/locations/grassrivers.jpg" },
  { id: "port-gellhorn", name: "Port Gellhorn", type: "Port", description: "Port industriel où se mêlent commerce légitime et affaires louches.", descriptionEn: "Industrial port where legitimate commerce and shady business mix.", features: ["Entrepôts", "Conteneurs", "Zone industrielle"], featuresEn: ["Warehouses", "Containers", "Industrial zone"], image: "/images/locations/port-gellhorn.jpg" },
  { id: "ambrosia", name: "Ambrosia", type: "Quartier résidentiel", description: "Quartier huppé au nord de Vice City. Manoirs, country clubs et secrets bien gardés.", descriptionEn: "Upscale neighborhood north of Vice City. Mansions, country clubs and well-kept secrets.", features: ["Manoirs", "Country club", "Résidences de luxe"], featuresEn: ["Mansions", "Country club", "Luxury residences"], image: "/images/locations/ambrosia.jpg" },
  { id: "mountains", name: "Mont Kalaga", type: "Nature", description: "Reliefs montagneux et parcs nationaux de Leonida. Randonnées et paysages spectaculaires.", descriptionEn: "Mountain ranges and national parks of Leonida. Hiking trails and spectacular scenery.", features: ["Sentiers de randonnée", "Lacs", "Cabanes isolées"], featuresEn: ["Hiking trails", "Lakes", "Isolated cabins"], image: "/images/locations/mount-kalaga.jpg" },
];