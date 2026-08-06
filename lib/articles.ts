export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  tag: string;
  image: string;
  sourceUrl: string;
  sourceName: string;
}

const base = "https://gta.wiki/images";

export const articles: Article[] = [
  {
    id: "gta6-annonce-officielle",
    title: "Rockstar Games annonce Grand Theft Auto VI pour 2025",
    date: "4 Déc 2023",
    excerpt: "Rockstar officially announced GTA VI alongside their 25th anniversary, confirming a return to Vice City within the fictional state of Leonida.",
    content: [
      "Le 4 décembre 2023, Rockstar Games a officiellement annoncé Grand Theft Auto VI, marquant le retour dans Vice City au sein de l'état fictif de Leonida. Sam Houser a déclaré que le jeu serait « la plus grande et la plus immersive évolution de la série Grand Theft Auto ».",
      "L'annonce a été accompagnée d'une fenêtre de sortie pour l'automne 2025 sur PS5 et Xbox Series X|S. La bande-annonce a explosé les records de vues sur YouTube, devenant la bande-annonce de jeu la plus vue en 24 heures.",
      "Ce moment a marqué l'histoire du jeu vidéo : plus de 10 ans après GTA V, les fans découvraient enfin le prochain chapitre de la série mythique."
    ],
    tag: "Annonce",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS1.jpg`,
    sourceUrl: "https://taketwointeractivesoftwareinc.gcs-web.com/news-releases/news-release-details/rockstar-games-announces-grand-theft-auto-vi-coming-2025",
    sourceName: "Take-Two Interactive"
  },
  {
    id: "trailer-1-records-youtube",
    title: "GTA VI : la bande-annonce 1 bat tous les records YouTube",
    date: "5 Déc 2023",
    excerpt: "La première bande-annonce de GTA VI a explosé les records de vues sur YouTube, devenant la trailer de jeu la plus vue en 24 heures.",
    content: [
      "Le 5 décembre 2023, Rockstar a dévoilé la première bande-annonce officielle de GTA VI. En quelques heures, la vidéo a dépassé les 100 millions de vues, pulvérisant tous les records existants pour une bande-annonce de jeu vidéo.",
      "La trailer nous montre Vice City sous les néons, les palmeraies et les ambiances tropicales. On y aperçoit pour la première fois les deux protagonistes : Jason et Lucia, dans une dynamique à la Bonnie & Clyde.",
      "Les fans ont immédiatement remarqué les détails : les clubs néon, les Everglades, les courses de rue, et cette atmosphère unique qui mélange crime et glamour sous le soleil de Floride."
    ],
    tag: "Bande-annonce",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS5.jpg`,
    sourceUrl: "https://www.ign.com/articles/rockstar-confirms-gta-6-trailer-1-release-date",
    sourceName: "IGN"
  },
  {
    id: "premier-report-mai-2026",
    title: "GTA VI reporté : première annonce de retard",
    date: "2 Mai 2025",
    excerpt: "Rockstar annonce un premier report de GTA VI, passant de l'automne 2025 au 26 mai 2026. L'action Take-Two chute de 10%.",
    content: [
      "Le 2 mai 2025, Rockstar Games a annoncé le premier report officiel de GTA VI. Le jeu, initialement prévu pour l'automne 2025, est repoussé au 26 mai 2026.",
      "Le PDG de Take-Two, Strauss Zelnick, a expliqué que l'équipe avait besoin de temps supplémentaire pour atteindre le niveau de qualité attendu par les fans. L'annonce a provoqué une chute d'environ 10% du cours de bourse de Take-Two Interactive.",
      "Malgré la déception des fans, la communauté a globalement salué la décision de Rockstar de privilégier la qualité plutôt que de sortir un jeu inachevé."
    ],
    tag: "Date de sortie",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS2.jpg`,
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g2grmrx4po",
    sourceName: "BBC News"
  },
  {
    id: "trailer-2-vice-city-leonida",
    title: "GTA VI Trailer 2 : Vice City et Leonida révélés",
    date: "6 Mai 2025",
    excerpt: "La deuxième bande-annonce dévoile les protagonistes Jason et Lucia, et les régions de Leonida : Vice City, Grassrivers, Port Gellhorn et plus encore.",
    content: [
      "Le 6 mai 2025, Rockstar a publié la deuxième bande-annonce de GTA VI, capturée sur PS5. Cette trailer révèle les deux protagonistes jouables : Jason Duval et Lucia Caminos, dans une histoire d'amour et de crime à Vice City.",
      "Les fans ont pu découvrir les multiples régions de Leonida : Vice City avec ses néons et ses plages, les Everglades de Grassrivers, les Keys tropicales de Leonida Keys, le port industriel de Port Gellhorn, la zone d'Ambrosia, et le parc national du Mount Kalaga.",
      "Des personnages secondaires ont également été présentés : Raul Bautista le braqueur de banques, Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez et Brian Heder le contrebandier."
    ],
    tag: "Bande-annonce",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS1.jpg`,
    sourceUrl: "https://www.ign.com/articles/gta-6-trailer-2-released-rockstar-tells-fans-to-explore-vice-city-and-beyond",
    sourceName: "IGN"
  },
  {
    id: "personnages-jason-lucia",
    title: "Jason Duval & Lucia Caminos : les protagonistes de GTA VI",
    date: "Mai 2025",
    excerpt: "Rockstar dévoile les profils officiels des deux protagonistes jouables de GTA VI, avec leurs histoires et personnalités uniques.",
    content: [
      "Rockstar a lancé les pages officielles des protagonistes sur rockstargames.com. Lucia Caminos est la première femme protagoniste de la série GTA — une combattante qui a purgé une peine à la prison de Leonida pour avoir protégé sa famille.",
      "Jason Duval a grandi parmi les escrocs, a servi dans l'armée, et a fini par travailler pour des trafiquants de drogue dans les Keys. Leur histoire commence quand « un casse facile tourne mal ».",
      "Leur dynamique à la Bonnie & Clyde promet une narration inédite dans la série, avec la possibilité de basculer entre les deux personnages comme dans GTA V — mais avec une connexion émotionnelle plus profonde entre les protagonistes."
    ],
    tag: "Personnages",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-LuciaCaminos-SS3.jpg`,
    sourceUrl: "https://www.rockstargames.com/VI",
    sourceName: "Rockstar Games"
  },
  {
    id: "deuxieme-report-novembre-2026",
    title: "GTA VI reporté à nouveau : sortie le 19 novembre 2026",
    date: "6 Nov 2025",
    excerpt: "Rockstar annonce un second report. GTA VI passe du 26 mai au 19 novembre 2026 pour un niveau de polish optimal.",
    content: [
      "Le 6 novembre 2025, Rockstar a annoncé un deuxième report officiel de GTA VI. La date de sortie passe du 26 mai 2026 au 19 novembre 2026.",
      "Rockstar a déclaré : « Ces mois supplémentaires nous permettront de finaliser le jeu avec le niveau de polish que vous attendez et méritez. » Le jeu est désormais environ 18 mois en retard par rapport à l'objectif interne initial de printemps 2025.",
      "L'annonce a provoqué une nouvelle baisse d'environ 10% du cours de Take-Two en bourse. Malgré tout, les fans restent confiants que l'attente en vaudra la peine."
    ],
    tag: "Date de sortie",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS7.jpg`,
    sourceUrl: "https://variety.com/2025/gaming/news/gta-6-release-delayed-november-2026-1236571679/",
    sourceName: "Variety"
  },
  {
    id: "pre-commandes-editions",
    title: "Pré-commandes GTA VI ouvertes : Standard à 79,99$, Ultimate à 99,99$",
    date: "24 Juin 2026",
    excerpt: "Rockstar officialise les pré-commandes avec deux éditions. L'Ultimate inclut véhicules exclusifs, boutiques de mods et contenu rétro.",
    content: [
      "Le 24 juin 2026, Rockstar a ouvert les pré-commandes de GTA VI à minuit heure locale. Deux éditions sont proposées : la Standard à 79,99$ et l'Ultimate Edition à 99,99$.",
      "L'Ultimate Edition comprend des véhicules exclusifs (Vapid Dominator Buggy '67, Grotti Cheetah '95), des boutiques de customisation (Rideout Customs, One-Eyed Willie's), une collection de voitures classiques, des armes et tatouages exclusifs par le collectif d'artistes FAILE.",
      "Toutes les pré-commandes reçoivent le Vintage Vice City Pack, incluant la Vapid Stanier '55 et le garage Shore Court. Les pré-commandes digitales incluent également un mois gratuit de GTA+. Les éditions physiques contiennent uniquement un code de téléchargement — pas de disque."
    ],
    tag: "Pré-commande",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-GrottiCheetah01.jpg`,
    sourceUrl: "https://taketwointeractivesoftwareinc.gcs-web.com/news-releases/news-release-details/rockstar-games-announces-pre-orders-grand-theft-auto-vi",
    sourceName: "Take-Two Interactive"
  },
  {
    id: "ps5-exclusif-features",
    title: "GTA VI joue mieux sur PS5 : features DualSense et audio 3D",
    date: "24 Juin 2026",
    excerpt: "Sony confirme des fonctionnalités exclusives PS5 pour GTA VI : retours haptiques, gâchettes adaptatives et audio Tempest 3D.",
    content: [
      "Le PlayStation Blog a confirmé des fonctionnalités exclusives pour la version PS5 de GTA VI : retours haptiques du DualSense, gâchettes adaptatives pour le tir et la conduite, haut-parleur de la manette intégré, et audio spatial Tempest 3D AudioTech.",
      "Le jeu porte également la mention « PS5 Pro Enhanced », ce qui suggère des améliorations visuelles ou de performance sur la PS5 Pro, bien que les détails restent à confirmer.",
      "Sony a clairement positionné la PS5 comme la console de référence pour GTA VI, avec un partenariat marketing similaire à celui qu'ils avaient pour GTA V à l'époque."
    ],
    tag: "Gameplay",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS4.jpg`,
    sourceUrl: "https://blog.playstation.com/2026/06/24/grand-theft-auto-vi-plays-best-on-ps5-november-19/",
    sourceName: "PlayStation Blog"
  },
  {
    id: "nouveaux-details-gameplay",
    title: "10 nouveaux détails gameplay révélés par GTA VI",
    date: "Juin 2026",
    excerpt: "Téléphone en jeu, customisation de véhicules rétro, système d'armes limité, plongée sous-marine et plus encore.",
    content: [
      "Kotaku a analysé la massive diffusion d'informations de juin 2026 et révélé 10 détails inédits sur le gameplay de GTA VI.",
      "Parmi les nouveautés : un téléphone en jeu avec des réseaux sociaux, une customisation de véhicules poussée avec des kits « Retro Build », un système d'armes limité similaire à RDR2, une économie d'objets volés avec recels et cachettes, et une personnalisation profonde des personnages (coiffures, tatouages, ongles).",
      "Le jeu intégrerait également la pêche, la plongée sous-marine, des raids de gangs, et une structure d'histoire en chapitres. Des connexions avec l'univers GTA/RDR ont été confirmées : le domaine Vercetti, Phil Cassidy, et le président Hardin de RDR2."
    ],
    tag: "Gameplay",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-Grassrivers-SS2.jpg`,
    sourceUrl: "https://kotaku.com/10-new-details-we-learned-from-gta-6s-big-info-dump-2000710519",
    sourceName: "Kotaku"
  },
  {
    id: "63-screenshots-details",
    title: "63 captures d'écran officielles et nouveaux détails gameplay",
    date: "Juin 2026",
    excerpt: "GamesRadar analyse les 63 screenshots officiels : pêche, kayak, plongée, raids de gangs et personnalisation poussée.",
    content: [
      "GamesRadar a publié une analyse détaillée des 63 captures d'écran officielles de GTA VI, confirmant des activités variées : pêche, kayak, plongée sous-marine, tout-terrain avec le Mud Club, et des raids de camps de gangs.",
      "La customisation est omniprésente : armes, véhicules avec des garages personnels, et des safehouses avec des casiers d'armes. Le jeu reprend la philosophie de RDR2 avec des chargements limités, une structure en chapitres et des activités secondaires profondes.",
      "Les screenshots montrent également un système de réseaux sociaux en jeu, des courses de rue, et des environnements incroyablement détaillés allant des néons de Vice City aux marécages de Grassrivers."
    ],
    tag: "Gameplay",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-MountKalaga-SS3.jpg`,
    sourceUrl: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-new-gameplay-details-activities-customization-confirmed-63-screenshots/",
    sourceName: "GamesRadar+"
  },
  {
    id: "extended-look-netflix-aout-2026",
    title: "GTA VI : An Extended Look — le showcase gameplay exclusif Netflix annoncé pour le 27 août",
    date: "6 Août 2026",
    excerpt: "Rockstar annonce « Grand Theft Auto VI: An Extended Look », un showcase gameplay exclusif Netflix le 27 août. Première véritable présentation de gameplay de GTA VI.",
    content: [
      "Le 6 août 2026, Rockstar Games a officiellement annoncé « Grand Theft Auto VI: An Extended Look », un événement dédié au gameplay de GTA VI qui sera diffusé en exclusivité sur Netflix le 27 août à 21h00 (heure française). Le showcase sera disponible sur la chaîne YouTube de Rockstar et le site officiel six heures plus tard, à 3h00 du matin heure française.",
      "Contrairement aux deux précédentes bandes-annonces qui utilisaient des séquences cinématiques in-engine, ce showcase promet la première véritable démonstration de gameplay en temps réel de GTA VI. Le titre « An Extended Look » suggère une présentation bien plus longue et détaillée que les trailers précédents.",
      "Le partenariat Netflix s'inscrit dans la continuité de la collaboration entre Rockstar et la plateforme, qui proposait déjà GTA: The Trilogy – The Definitive Edition via Netflix Games sur mobile. Le VP de Netflix Brandon Riegg a déclaré : « Les révélations de Grand Theft Auto sont devenues des moments culturels à part entière. L'anticipation autour de GTA VI est sans précédent. » La date de sortie reste confirmée pour le 19 novembre 2026 sur PS5 et Xbox Series X|S."
    ],
    tag: "Bande-annonce",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS3.jpg`,
    sourceUrl: "https://kotaku.com/gta-6-extended-look-will-premier-exclusively-on-netflix-as-fans-beg-for-trailer-3-2000722148",
    sourceName: "Kotaku"
  }
];

export const articlesLatestFirst: Article[] = [...articles].reverse();

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}