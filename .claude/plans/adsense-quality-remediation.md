# Plan de remédiation AdSense — contenu à faible valeur informative

## Diagnostic

Le site est un fan-site GTA 6. Le jeu sort le 19 novembre 2026. AdSense signale un « contenu à faible valeur informative ». Les causes principales identifiées :

1. **Pages prématurées pour un jeu non sorti** : solution de missions, guide argent, astuces, secrets/easter eggs, problèmes/solutions. Elles promettent des guides concrets mais ne contiennent que des suppositions/placeholders, ce qui trompe l'utilisateur et les algorithmes de qualité.
2. **Hub "codes" et "code-triche-gta-6" redondants** : deux pages autour des codes de triche, dont l'une ("/codes") annonce "Tous les codes" alors qu'aucun code GTA 6 n'existe encore. Double écueil : contenu dupliqué interne + promesse non tenue.
3. **Contenu templaté / peu différencié** : les pages de guide utilisent toutes la même structure de cartes, FAQ et bandeau de notice. Peu de substance propre à chaque sujet.
4. **E-E-A-T faible** : pas d'auteur, pas de date de mise à jour visible, pas de sources inline sur les pages fiches (hormis les armes), et la mention "site fan" est reléguée au footer.
5. **Articles d'actualité très courts** : 3 paragraphes par article, ce qui peut être perçu comme du contenu synthétisé/mince.

## Décision stratégique (validée avec l'utilisateur)

**Fusionner les pages pré-sortie les plus faibles en un seul hub riche et clairement encadré** : une page "GTA 6 : ce qu'on sait et ce qu'on attend" (FR + EN). Cette page regroupera :
- Ce qu'on attend des codes de triche / système de triche
- Ce qu'on attend du gameplay / astuces
- Ce qu'on attend pour gagner de l'argent / économie
- Ce qu'on attend des secrets / easter eggs
- Problèmes techniques connus / préparation matérielle

Les anciennes URLs (/solution-gta-6-guide-missions, /comment-gagner-argent-gta-6, /astuces-gta-6, /secrets-easter-eggs-gta-6, /problemes-gta-6-solutions et leurs équivalents /en/...) seront supprimées du site et redirigées via `permanentRedirect` vers le nouveau hub.

## Étapes concrètes

### 1. Créer le hub pré-sortie
- Nouvelle route FR : `/gta-6-avant-sortie` (ou nom équivalent en accord avec l'utilisateur)
- Nouvelle route EN : `/en/gta-6-before-release`
- Page unique, longue et structurée, avec :
  - bandeau d'avertissement éditorial en haut ("Jeu non sorti, informations basées sur les trailers/annonces officielles")
  - sections détaillées couvrant codes, gameplay, argent, secrets, specs, FAQ
  - liens vers les pages fiches concrètes (armes, véhicules, personnages, lieux, date de sortie)
  - date de dernière mise à jour visible
  - mention "site fan non officiel" visible

### 2. Supprimer/rediriger les pages devenues inutiles
- Supprimer les fichiers `page.tsx` de :
  - `app/[locale]/gta-6-walkthrough/`
  - `app/[locale]/how-to-make-money-gta-6/`
  - `app/[locale]/tips-gta-6/`
  - `app/[locale]/secrets-easter-eggs-gta-6/`
  - `app/[locale]/gta-6-problems-solutions/`
- Ajouter des `permanentRedirect` dans `next.config.js` (ou `i18n/routing.ts` selon convention du projet) de chaque ancienne URL vers le hub.
- Supprimer les clés de traduction correspondantes dans `messages/fr.json` et `messages/en.json`.

### 3. Fusionner/rationaliser les pages codes de triche
- Conserver **une seule** page codes : `/code-triche-gta-6` (FR) et `/en/cheat-codes-gta-6` (EN).
- Supprimer `/codes` et `/en/codes` ou la rediriger vers la page guide.
- Renforcer le contenu de la page guide avec : historique, méthodologie de vérification, tableau des attentes par plateforme, FAQ.
- Afficher clairement "Aucun code GTA 6 n'est confirmé avant le 19 novembre 2026".

### 4. Améliorer l'E-E-A-T sur les pages conservées
Sur toutes les pages fiches conservées (date de sortie, comparaison, guide préparation, armes, véhicules, personnages, lieux, news, à propos) :
- Ajouter une date de dernière mise à jour visible (et `dateModified` dans le JSON-LD).
- Ajouter un bandeau éditorial en haut mentionnant la source (Rockstar, trailers officiels).
- Ajouter un bloc "Méthodologie / Sources" en bas de page quand c'est pertinent.
- Ajouter un auteur/publieur dans le JSON-LD (`Organization` déjà présent ; ajouter `author` sur les `Article` / fiches).
- S'assurer que chaque page a au moins 400-600 mots de contenu unique.

### 5. Épaissir les articles d'actualité
- Ajouter 1-2 paragraphes supplémentaires par article.
- Inclure des citations/contexte issus de la source officielle.
- Ajouter un encart "Pourquoi c'est important" ou "Impact sur le jeu".

### 6. Sitemaps et noindex
- Retirer les anciennes URLs supprimées de `app/sitemap.ts`.
- S'assurer que les pages supprimées retournent bien 301 (pas 404).
- Ne pas indexer les pages de redirection elles-mêmes (les routes n'existent plus, c'est `next.config.js` qui gère).
- Mettre à jour `app/robots.ts` si nécessaire.

### 7. AdSense et UX
- Vérifier que `ads.txt` est bien présent (déjà OK : `public/ads.txt`).
- Éviter de placer des blocs AdSense sur le hub pré-sortie pendant la période d'examen, ou les placer en fin de page (après contenu utile).
- S'assurer que le script AdSense est bien via `next/script` (déjà OK dans `app/[locale]/layout.tsx`).

## Fichiers impactés

- `app/[locale]/gta-6-avant-sortie/page.tsx` (nouveau)
- `app/[locale]/gta-6-before-release/page.tsx` (nouveau)
- `app/[locale]/gta-6-walkthrough/page.tsx` (supprimé)
- `app/[locale]/how-to-make-money-gta-6/page.tsx` (supprimé)
- `app/[locale]/tips-gta-6/page.tsx` (supprimé)
- `app/[locale]/secrets-easter-eggs-gta-6/page.tsx` (supprimé)
- `app/[locale]/gta-6-problems-solutions/page.tsx` (supprimé)
- `app/[locale]/codes/page.tsx` (supprimé ou redirigé)
- `app/[locale]/code-triche-gta-6/page.tsx` (renforcé)
- `app/[locale]/cheat-codes-gta-6/page.tsx` (renforcé)
- `app/sitemap.ts` (mise à jour)
- `next.config.js` / `next.config.ts` (redirections 301)
- `messages/fr.json` et `messages/en.json` (nettoyage + nouvelles clés)
- `lib/seo.ts` (helper `dateModified` / `author` si besoin)
- `lib/articles.ts` (contenus épaissis)
- `app/[locale]/about/page.tsx` (ajout date + auteur si pertinent)

## Vérification

- `npm run build` doit passer sans erreur.
- Vérifier les redirections via `next build` + inspection des routes générées.
- Vérifier que les pages supprimées ne sont plus dans `/sitemap.xml`.
- Lancer un crawl rapide (ou `npm run start` + navigation) pour s'assurer qu'aucune 404 interne ne traîne.
- Vérifier dans Search Console / AdSense que les pages signalées sont corrigées avant de demander un nouvel examen.
