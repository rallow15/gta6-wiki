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

const base = "/images/gta6-screens";

export const articles: Article[] = [
  {
    id: "gta6-annonce-officielle",
    title: "Rockstar Games annonce Grand Theft Auto VI pour 2025",
    date: "4 Déc 2023",
    excerpt: "Rockstar officially announced GTA VI alongside their 25th anniversary, confirming a return to Vice City within the fictional state of Leonida.",
    content: [
      "Le 4 décembre 2023, Rockstar Games a officiellement annoncé Grand Theft Auto VI, marquant le retour dans Vice City au sein de l'état fictif de Leonida. Sam Houser a déclaré que le jeu serait « la plus grande et la plus immersive évolution de la série Grand Theft Auto ».",
      "L'annonce a été accompagnée d'une fenêtre de sortie pour l'automne 2025 sur PS5 et Xbox Series X|S. La bande-annonce a explosé les records de vues sur YouTube, devenant la bande-annonce de jeu la plus vue en 24 heures.",
      "Ce moment a marqué l'histoire du jeu vidéo : plus de 10 ans après GTA V, les fans découvraient enfin le prochain chapitre de la série mythique. L'annonce a également relancé l'intérêt pour les codes de triche, les véhicules et l'univers de Vice City que nous couvrons sur ce site.",
      "Pour CodeTricheGTA6, cette annonce a fixé le cadre de notre couverture : suivre chaque communication officielle, vérifier les sources et proposer des fiches précises sur les personnages, les armes et les lieux confirmés par Rockstar."
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
      "Les fans ont immédiatement remarqué les détails : les clubs néon, les Everglades, les courses de rue, et cette atmosphère unique qui mélange crime et glamour sous le soleil de Floride.",
      "Cette première bande-annonce a permis d'identifier les premiers véhicules, les premières armes et les régions clés de Leonida. Ces éléments ont servi de base pour construire nos fiches détaillées sur le site."
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
      "Malgré la déception des fans, la communauté a globalement salué la décision de Rockstar de privilégier la qualité plutôt que de sortir un jeu inachevé.",
      "Ce premier report a modifié notre calendrier éditorial : les guides de solution, les codes exacts et les astuces chiffrées ne seront possibles qu'après la sortie finale. En attendant, nous avons renforcé les fiches sur les éléments déjà confirmés."
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
      "Les fans ont pu découvrir les multiples régions de Leonida : Vice City avec ses néons et ses plages, les Everglades de Grassrivers, les Keys tropicales de Leonida Keys, le port industriel de Port Gellhorn, la zone d'Ambrosia, et le parc national du Mont Kalaga.",
      "Des personnages secondaires ont également été présentés : Raul Bautista le braqueur de banques, Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez et Brian Heder le contrebandier.",
      "Cette seconde bande-annonce a été décisive pour nos fiches. Nous avons pu confirmer les noms des régions, identifier de nouveaux véhicules et ajouter les personnages secondaires à notre encyclopédie, toujours en croisant les sources officielles."
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
      "Leur dynamique à la Bonnie & Clyde promet une narration inédite dans la série, avec la possibilité de basculer entre les deux personnages comme dans GTA V — mais avec une connexion émotionnelle plus profonde entre les protagonistes.",
      "Ces profils officiels ont permis de structurer nos fiches personnages. Nous distinguons explicitement les informations issues des bios Rockstar (origines, statut de protagonistes) des interprétations narratives qui restent spéculatives."
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
      "L'annonce a provoqué une nouvelle baisse d'environ 10% du cours de Take-Two en bourse. Malgré tout, les fans restent confiants que l'attente en vaudra la peine.",
      "Cette date du 19 novembre 2026 est désormais la référence officielle de toutes nos pages. Elle figure sur notre compte à rebours, nos métadonnées et notre page dédiée, et nous ne publierons de guides définitifs qu'à partir de cette date."
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
      "Toutes les pré-commandes reçoivent le Vintage Vice City Pack, incluant la Vapid Stanier '55 et le garage Shore Court. Les pré-commandes digitales incluent également un mois gratuit de GTA+. Les éditions physiques contiennent uniquement un code de téléchargement — pas de disque.",
      "Cette annonce a enrichi notre page de date de sortie et nos fiches véhicules avec des modèles confirmés. Nous avons également ajouté une section dédiée au contenu de l'Édition Ultime dans notre hub pré-sortie."
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
      "Sony a clairement positionné la PS5 comme la console de référence pour GTA VI, avec un partenariat marketing similaire à celui qu'ils avaient pour GTA V à l'époque.",
      "Cette information a été intégrée à notre page de date de sortie et à notre guide de configuration. Elle illustre aussi pourquoi les codes de triche pourraient être saisis différemment selon la plateforme."
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
      "Le jeu intégrerait également la pêche, la plongée sous-marine, des raids de gangs, et une structure d'histoire en chapitres. Des connexions avec l'univers GTA/RDR ont été confirmées : le domaine Vercetti, Phil Cassidy, et le président Hardin de RDR2.",
      "Ces détails ont directement alimenté nos sections gameplay, argent et secrets du hub pré-sortie. Ils confirment aussi l'importance du système de sacoche d'armes, que nous mentionnons dans nos fiches et guides."
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
      "Les screenshots montrent également un système de réseaux sociaux en jeu, des courses de rue, et des environnements incroyablement détaillés allant des néons de Vice City aux marécages de Grassrivers.",
      "Cette analyse a permis d'ajouter des sources visuelles à nos fiches véhicules, armes et lieux. Chaque capture est désormais référencée avec son origine officielle dans nos pages correspondantes."
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
      "Le partenariat Netflix s'inscrit dans la continuité de la collaboration entre Rockstar et la plateforme, qui proposait déjà GTA: The Trilogy – The Definitive Edition via Netflix Games sur mobile. Le VP de Netflix Brandon Riegg a déclaré : « Les révélations de Grand Theft Auto sont devenues des moments culturels à part entière. L'anticipation autour de GTA VI est sans précédent. » La date de sortie reste confirmée pour le 19 novembre 2026 sur PS5 et Xbox Series X|S.",
      "Pour notre site, cet événement marquera probablement le passage à des contenus plus concrets. Nous mettrons à jour nos fiches et notre hub pré-sortie dès la diffusion pour intégrer les mécaniques officiellement présentées."
    ],
    tag: "Bande-annonce",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS3.jpg`,
    sourceUrl: "https://kotaku.com/gta-6-extended-look-will-premier-exclusively-on-netflix-as-fans-beg-for-trailer-3-2000722148",
    sourceName: "Kotaku"
  },
  {
    id: "fuites-massives-cyberleek-aout-2026",
    title: "Fuites massives de GTA VI : un hacker déverse des heures de gameplay",
    date: "20 Août 2026",
    excerpt: "Un groupe baptisé « Cyberleek » publie des clips de gameplay quasi-final et la carte complète de Leonida. Take-Two subpoena Microsoft et Discord pour identifier la source.",
    content: [
      "À partir du 20 août 2026, un hacker (ou groupe) se faisant appeler « Cyberleek » a commencé à publier quotidiennement des extraits de gameplay de GTA VI, ainsi que ce qui semble être la carte complète de Leonida, l'État fictif inspiré de la Floride. Les vidéos montrent des courses-poursuites, des braquages de commerces et des séquences en quasi-final build.",
      "La présence du titre « Sports Car » de Tate McRae (sorti début 2025) dans certaines bandes suggère que le build leaké est relativement récent. Take-Two Interactive, maison-mère de Rockstar, a déposé des subpoenas devant le tribunal du district sud de New York exigeant que Microsoft et Discord transmettent les identifiants d'appareils Windows et les données des membres de trois serveurs Discord pour identifier la source.",
      "Cyberleek affirme protester contre le virage tout-numérique du jeu (GTA VI sortira pour la première fois sans disque physique, uniquement avec un code de téléchargement). Mais le hacker sollicite des dons en cryptomonnaie et aurait facturé 165 000 $ pour des espaces publicitaires sur d'autres fuites. Le mouvement Stop Killing Games a dénoncé ces fuites comme « destructrices » et appelé à ne pas financer le hacker.",
      "Selon Bloomberg, Rockstar ne prévoit pas de modifier sa stratégie marketing : le showcase Netflix « An Extended Look » du 27 août et la date de sortie du 19 novembre 2026 sont maintenus. D'anciens développeurs et analystes estiment que ces fuites n'affecteront guère le succès du jeu, les fans réservant leur jugement au visionnage officiel ou à la sortie.",
      "Sur CodeTricheGTA6, nous ne reprenons pas les fuites comme des certitudes. Cet article a pour but de documenter l'événement et ses conséquences légales, tout en renvoyant vers les sources journalistiques qui l'analysent."
    ],
    tag: "Fuite",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS8.jpg`,
    sourceUrl: "https://www.bbc.com/news/articles/c07r3183gn3o",
    sourceName: "BBC News"
  },
  {
    id: "gta6-extended-look-netflix-recap-2026",
    title: "GTA VI: An Extended Look — tout ce qu'a révélé le showcase Netflix",
    date: "27 Août 2026",
    excerpt: "Le showcase « An Extended Look » de GTA VI a été diffusé en exclusivité sur Netflix le 27 août 2026. Capturé sur PS5, il a révélé gameplay, nouvelles mécaniques, personnages et la date de sortie maintenue au 19 novembre 2026.",
    content: [
      "Le 27 août 2026, Rockstar Games et Netflix ont diffusé « Grand Theft Auto VI: An Extended Look », un showcase d'environ 26 à 30 minutes consacré au gameplay de GTA VI. Le programme a d'abord été diffusé en exclusivité sur Netflix, six heures avant d'apparaître sur YouTube et les autres plateformes officielles de Rockstar. Toutes les séquences montrées ont été capturées sur une PlayStation 5 de base.",
      "Le showcase a confirmé que Grand Theft Auto VI sortira le 19 novembre 2026 sur PlayStation 5 et Xbox Series X|S. La version PC n'a pas de date annoncée. Rockstar a également précisé que le jeu ne contiendrait pas de microtransactions en mode histoire, qu'aucune IA générative n'était utilisée et que GTA Online n'aurait pas de date de lancement confirmée.",
      "Jason Duval et Lucia Caminos sont présentés comme un couple de criminels à la Bonnie and Clyde, tous deux jouables et interchangeables en monde ouvert. Le gameplay montre un switch rapide entre les deux personnages, des braquages coopératifs, des échanges par téléphone et des activités relationnelles (gym, plage, zoo, kayak). Leur proximité affecte visiblement certains éléments narratifs.",
      "Plusieurs mécaniques inédites ont été détaillées : le système de Heat (recherche policière basée sur les témoins et les preuves), le mode Focus qui ralentit le temps et indique les zones létales/incapacitantes, le vol de véhicules par « slim jim » ou clonage de clés via l'application Waink, et la gestion de l'apparence pour échapper à la police (vêtements, coiffure, barbe, véhicule).",
      "Le monde ouvert de Leonida s'enrichit d'activités variées : fan boats dans les marais de Grassrivers, kayaks, scooters électriques, parachutisme, séances de sport, clubbing/danse, et des interactions PNJ via les réseaux sociaux in-game. Les personnages Raul Bautista et Boobie Ike ont été particulièrement mis en avant comme figures centrales de l'intrigue.",
      "Pour CodeTricheGTA6, ce showcase confirme que le jeu s'oriente vers un open world beaucoup plus systémique que GTA V, avec des mécaniques de survie criminelle (Heat, preuves, argent physique) et une profondeur de personnages inédite dans la série. Nous mettrons à jour nos guides dès la sortie du 19 novembre 2026."
    ],
    tag: "Gameplay",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-JasonDuval-SS4.jpg`,
    sourceUrl: "https://www.netflix.com/tudum/articles/grand-theft-auto-6-extended-first-look",
    sourceName: "Netflix Tudum"
  },
  {
    id: "gta6-nouvelles-mecaniques-gameplay-2026",
    title: "GTA 6 — 10 nouvelles mécaniques de gameplay détaillées",
    date: "28 Août 2026",
    excerpt: "Après le showcase Netflix, voici 10 nouvelles mécaniques de GTA 6 : système Heat, profil criminel, Focus, braquages dynamiques, économie physique et lifestyle des protagonistes.",
    content: [
      "Le showcase « Grand Theft Auto VI: An Extended Look » du 27 août 2026 a révélé une quantité de détails gameplay inédits. Nous en retenons dix mécaniques qui changent profondément l'expérience par rapport à GTA V.",
      "1. Système de Heat — La police n'apparaît plus automatiquement sur la minimap. Les crimes doivent d'abord être vus ou dénoncés. Une fois active, la recherche gère plusieurs preuves : vêtements, apparence, arme, véhicule et images de caméras de surveillance. Le joueur peut éliminer chaque preuve individuellement pour faire tomber les soupçons.",
      "2. Profil criminel — Chaque protagoniste dispose d'un tracker de comportement allant de Professionnel à Violent/Psycho, avec un état possible irréversible. Ce profil influence la façon dont les PNJ et la police réagissent à Jason et Lucia.",
      "3. Gunplay & Focus — Le viseur assisté est désormais optionnel ; le free aim est le mode par défaut. La capacité Focus ralentit le temps et colore les zones létales en rouge et les zones incapacitantes/désarmantes en jaune, permettant des tirs tactiques de suppression ou de désarmement.",
      "4. Véhicules et carburant — Les voitures consomment du carburant et peuvent être ravitaillées/réparées dans les stations-service. L'application Waink scanne les véhicules pour afficher leur valeur, niveau de sécurité, traceur et outil requis (slim jim, clonage, hotwire). Les voitures de luxe disposent de traceurs sensibles à la vitesse.",
      "5. Vol et personnalisation — Le Pay 'n' Spray fait son retour. Les véhicules volés peuvent être enregistrés comme véhicules personnels et leurs coffres servent de stockage d'armes et de vêtements. Le changement d'apparence permet d'éviter la reconnaissance par la police.",
      "6. Braquages dynamiques — Presque chaque commerce peut être braqué. Les plans intérieurs varient, et le joueur choisit entre approche bruyante, discrète, rapide ou maximisant le butin. Les choix de complices et d'équipement influencent le résultat.",
      "7. Économie physique — Trois formes d'argent coexistent : fonds bancaires (via appli), cash physique (perdu à la mort, à déposer aux distributeurs) et butin en sac (revendu aux receleurs). Cette triple monnaie force une gestion réaliste des gains.",
      "8. Lifestyle & stats — Gym, alimentation et sommeil affectent visiblement le corps et le visage des personnages. Le manque de sommeil donne un visage fatigué ; la surconsommation entraîne une prise de poids. Les coiffures et barbes évoluent aux safehouses, les nouveaux styles nécessitant barbiers ou salons.",
      "9. Monde ouvert réactif — Des centaines d'intérieurs sont accessibles, le trafic est plus dense et réactif, et les PNJ publient sur les réseaux sociaux des événements en temps réel. Le téléphone intègre des applications comme BuckMe, RydeMe, Scooter Bros, WhatUp, Waink, Snapmatic et une app fitness.",
      "10. Contrôles refondus — L'accroupissement est séparé de la prise de couverture et permet de se déplacer latéralement. Le changement d'épaule de visée revient, la course se déclenche via une pression sur L2/joystick, et sur PlayStation le frein à main est assigné à la touche X."
    ],
    tag: "Gameplay",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-UltimateEdition-GrottiCheetah01.jpg`,
    sourceUrl: "https://in.ign.com/grand-theft-auto-vi/270362/69-new-gta-6-gameplay-details-we-saw-at-rockstar-hq",
    sourceName: "IGN"
  },
  {
    id: "cyberleek-recapitulatif-reaction-officielle-2026",
    title: "Cyberleek : récapitulatif des fuites et réaction officielle",
    date: "31 Août 2026",
    excerpt: "Fin août 2026, le groupe Cyberleek a diffusé clips, captures et extraits de GTA VI. Take-Two et Rockstar ont réagi par des subpoenas et des retraits DMCA, sans confirmer l'authenticité du contenu.",
    content: [
      "À partir du 18 août 2026, une campagne anonyme baptisée Cyberleek (ou Cyberleek) a commencé à diffuser sur Internet des extraits de gameplay, des images de carte et une cinématique de quatre minutes présentée comme le prologue de Lucia. Le contenu a été largement partagé sur Discord, X/Twitter et des forums avant d'être repris par la presse spécialisée le 20 août.",
      "Le matériel, non vérifié, montrait notamment Jason conduisant, se battant avec des PNJ, jouant au basket, ainsi qu'une cinématique d'introduction centrée sur Lucia. Des images prétendaient représenter la carte complète de Leonida avec des zones non nommées auparavant : Dalton Island, Tequesta Retreat, Gloriana Key, Catalan Key et Catalan Bay.",
      "L'identité de Cyberleek reste inconnue. Le groupe a publié un « édit » se présentant comme une protestation contre les précommandes numériques avant les tests, le contenu payant déjà présent sur disque et la fermeture des serveurs rendant les jeux injouables. En parallèle, il a promu un memecoin Solana ($CYBERLEEK) qui aurait généré environ 11,8 millions de dollars d'échanges le 18 août selon certains trackers, ce qui a valu au groupe d'être accusé de capitaliser sur les fuites.",
      "Rockstar Games n'a pas publiquement confirmé l'authenticité des éléments diffusés. Cependant, Take-Two Interactive, maison mère de Rockstar, a déposé des subpoenas devant des tribunaux pour obtenir des informations de plateformes, et des retraits sous DMCA ont ciblé certains contenus, suggérant qu'une partie du matériel pourrait bien appartenir à Rockstar.",
      "L'impact marketing semble limité : Rockstar et Netflix ont maintenu le showcase « An Extended Look » du 27 août et la date de sortie du 19 novembre 2026. D'anciens développeurs et analystes estiment que ces fuites n'affecteront pas significativement le succès commercial du jeu, les joueurs préférant se baser sur les présentations officielles ou l'expérience de jeu.",
      "Sur CodeTricheGTA6, nous ne reprenons pas les fuites comme des certitudes. Cet article a pour vocation de documenter l'événement, les réponses légales et le contexte médiatique, en renvoyant vers les sources journalistiques qui analysent les fuites. Les informations non confirmées doivent être traitées avec prudence jusqu'à une éventuelle confirmation officielle."
    ],
    tag: "Fuite",
    image: `${base}/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS7.jpg`,
    sourceUrl: "https://www.dexerto.com/gta/who-is-cyberleek-gta-6-leaks-memecoin-explained-3400200/",
    sourceName: "Dexerto"
  }
];

export const articlesLatestFirst: Article[] = [...articles].reverse();

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}
