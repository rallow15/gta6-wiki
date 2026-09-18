# Plan : ajouter les nouveautés GTA 6 pour enrichir le contenu et rassurer Google

## Contexte

Le site CodeTricheGTA6 / GTA6CheatCodes s’arrête à l’actualité du 20 août 2026. Depuis, deux événements majeurs ont eu lieu et ne sont pas encore couverts :

1. Le showcase Netflix **« Grand Theft Auto VI: An Extended Look »** du 27 août 2026.
2. La suite des fuites **Cyberleek / Cyberleek** (fin août / début septembre 2026).

Ces manques créent un trou de ~4 semaines dans le calendrier éditorial, ce qui peut alimenter l’impression d’un site « sans nouveauté ». L’objectif est de publier rapidement du contenu original, sourcé et structuré, sans répéter les fuites comme des certitudes.

## Contenu à créer

### 1. Article d’actualité : « GTA VI: An Extended Look — tout ce qu’on a appris »

- Date de publication : 27 août 2026 (date réelle de l’événement).
- Tag : `Gameplay`.
- Sources : Netflix Tudum, VGC, TheGamer, BBC Newsbeat, Rockstar Games.
- Sections :
  - Résumé du showcase (PS5, ~26–30 min, Netflix puis YouTube).
  - Gameplay confirmé : dual protagonists, switch, co-op heists, combat amélioré.
  - Système de recherche (Heat) et évasion.
  - Nouvelles activités : fan boat, kayak, scooter, parachute, sport, clubbing, réseaux sociaux.
  - Mise à jour des personnages : Raul Bautista et Boobie Ike confirmés comme pivots.
  - Pas de date PC, pas de microtransactions, pas d’IA générative, pas de GTA Online au lancement.
- Images : captures officielles du site Rockstar / Netflix si disponibles, sinon screenshots des trailers existants.

### 2. Article d’actualité : « GTA VI — 10 nouvelles mécaniques de gameplay détaillées »

- Date de publication : 28 août 2026 (lendemain du showcase).
- Tag : `Gameplay`.
- Sources : VICE, IGN, GameRant, Red Bull, VGC.
- Sections :
  - Système de Heat (témoins, preuves, vêtements, CCTV, véhicule, apparence).
  - Criminal Profile (Professional → Psycho).
  - Gunplay & Focus (free aim, zones jaunes/rouges, suppression).
  - Véhicules : carburant, Waink, Pay ’n’ Spray, coffres.
  - Braquages : choix loud/stealth, planification.
  - Stats & lifestyle (sport, alimentation, sommeil, coiffure).
  - Monde ouvert : intérieurs, NPCs réactifs, réseaux sociaux in-game.
  - Applications téléphone.
  - Contrôles refondus.
  - Lancement single-player, pas de microtransactions.

### 3. Article d’actualité : « Cyberleek : récapitulatif et réaction officielle »

- Date de publication : 31 août 2026.
- Tag : `Fuite`.
- Sources : Dexerto, NBC News, Tom’s Hardware, PC Gamer.
- Sections :
  - Ce qui a fuité (clips, carte, prologue) — présenté comme non vérifié.
  - Qui est Cyberleek / le memecoin $CYBERLEEK.
  - Réaction de Take-Two / Rockstar (subpoenas, DMCA).
  - Pourquoi nous ne reprenons pas les fuites comme certitudes.
  - Liens vers l’article existant du 20 août.

### 4. Mise à jour du hub pré-sortie (`/gta-6-avant-sortie`)

- Ajouter une section récapitulative du showcase Netflix.
- Mettre à jour la section « Gameplay » avec les nouvelles mécaniques (Heat, Focus, Waink, etc.).
- Mettre à jour la section « Secrets & Easter eggs » avec le Vercetti Estate et les nouvelles zones nommées.
- Vérifier les liens internes vers les nouveaux articles.

### 5. Corrections d’incohérences internes

- `ReleaseDate` et `PreReleaseHub` indiquent une sortie PC le 19 novembre 2026, mais `Gta6PreparationGuide` dit « 6–12 mois plus tard ». **À uniformiser** : GTA VI sort le 19 novembre 2026 sur PS5/Xbox Series X|S ; la date PC n’est pas annoncée.
- Prix : `ReleaseDate` mentionne Standard $79.99 / Ultimate $99.99 ; `Gta6PreparationGuide` mentionne Standard $69.99 / Ultimate $89.99. **À uniformiser** sur $79.99 / $99.99 avec la source Rockstar.

### 6. Mise à jour du sitemap et dates

- `app/sitemap.ts` : mettre à jour `lastModified` au jour du déploiement.
- `lib/site.ts` : mettre à jour `SITE_LAST_UPDATED`.

## Fichiers concernés

- `lib/articles.ts` — ajout des 3 nouveaux articles.
- `messages/fr.json` — ajout des contenus i18n pour le hub pré-sortie.
- `messages/en.json` — traductions correspondantes.
- `app/[locale]/gta-6-avant-sortie/page.tsx` — mise à jour des sections.
- `app/[locale]/release-date-gta-6/page.tsx` — correction de la date PC et des prix si nécessaire.
- `app/[locale]/gta-6-preparation-guide/page.tsx` — correction des prix/date PC.
- `app/sitemap.ts` — mise à jour de la date.
- `lib/site.ts` — mise à jour de `SITE_LAST_UPDATED`.

## Validation

- `npm run build` doit générer les pages statiques sans erreur.
- Vérifier que les articles apparaissent sur `/actualites` et `/en/news`.
- Vérifier que les canonicals/hreflang des nouvelles pages sont corrects.
- Déployer et éventuellement soumettre les nouvelles URL à Search Console.

## Notes SEO / E-E-A-T

- Chaque article cite explicitement ses sources journalistiques/ officielles.
- Les fuites restent encadrées comme « non vérifiées » pour ne pas porter atteinte à la crédibilité.
- Le contenu est structuré avec FAQ, sommaire et liens internes vers les fiches existantes.
