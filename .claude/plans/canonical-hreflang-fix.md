# Plan : corriger les balises canoniques et hreflang (Search Console "Autre page avec balise canonique correcte")

## Diagnostic

Le message Search Console "Autre page avec balise canonique correcte" signifie que Google a choisi une URL canonique différente de celle déclarée par le site. Deux problèmes principaux ont été identifiés dans le code :

1. **Layout `[locale]/layout.tsx` fournit un canonical par défaut erroné** : il déclare `alternates.canonical: "/"` pour toutes les pages FR et `"/en/"` pour toutes les pages EN, quelle que soit l'URL réelle. Même si les pages filles qui redéfinissent `alternates` écrasent cet objet (shallow merge Next.js), ce fallback est dangereux et envoie un signal de duplication massive à Google pour toute page qui n'aurait pas de metadata propre.

2. **Pages de détail `[slug]` sans prise en compte de la locale** :
   - `app/[locale]/characters/[slug]/page.tsx` ne reçoit pas `locale` dans `params` et déclare toujours `canonical: "/personnages/${id}"`, même sur `/en/characters/${id}`.
   - `app/[locale]/news/[slug]/page.tsx` fait de même avec `/actualites/${id}`.
   - Ces canonicals français sur des pages anglaises sont directement contradictoires et entraînent le rejet de la canonical utilisateur par Google.

## Objectifs

- Retirer le canonical/hreflang global du layout parent pour ne plus envoyer de signal de duplication.
- Corriger les pages de détail personnages et actualités pour qu'elles génèrent le bon canonical et les bons `hreflang` en fonction de la locale.
- Uniformiser la génération des `alternates` via un helper réutilisable, en s'appuyant sur les pathnames localisés de `i18n/routing.ts`.
- S'assurer que toutes les pages indexées ont un canonical et des `hreflang` cohérents.
- Valider avec `next build` et `eslint`.

## Approche choisie

### Option A : corriger manuellement page par page (retenue en partie)
- Avantage : contrôle total, pas de dépendance supplémentaire.
- Inconvénient : répétitif et source d'erreurs futures.
- On retient cette approche pour les cas spéciaux (home, pages légales, etc.) mais on factorise la logique commune.

### Option B : helper centralisé `buildAlternates(pathKey, slug?)` (retenue)
- Avantage : un seul endroit où définir les mappings FR/EN, réduction des oublis.
- Inconvénient : nécessite de bien mapper toutes les routes.
- On créera un helper dans `lib/seo.ts` qui, pour une route donnée, retourne `{ canonical, languages }`. Les pages de section l'utiliseront ; les pages spéciales conserveront leur logique explicite si nécessaire.

## Fichiers à modifier

1. `app/[locale]/layout.tsx`
   - Supprimer `alternates` du `Metadata` retourné.
   - Conserver `metadataBase`, title template, robots, icons, OG/Twitter globaux.

2. `app/[locale]/page.tsx` (home)
   - Garder son propre `alternates` correct (`/` / `/en/`).

3. `app/[locale]/characters/[slug]/page.tsx`
   - Ajouter `locale` dans `params`.
   - Calculer canonical EN/FR et languages.
   - Traduire title, description, keywords selon la locale.
   - Propager `locale` à `personJsonLd` pour `inLanguage`.

4. `app/[locale]/news/[slug]/page.tsx`
   - Ajouter `locale` dans `params`.
   - Calculer canonical EN/FR et languages.
   - Traduire title, description, keywords selon la locale.
   - Propager `locale` à `newsArticleJsonLd` pour `inLanguage`.

5. `lib/seo.ts`
   - Ajouter `locale` à `personJsonLd` et `newsArticleJsonLd`.
   - Ajouter un helper `buildAlternates` (optionnel mais recommandé) pour factoriser canonical + languages.

6. Pages de section (optionnel, si helper adopté)
   - `vehicles/page.tsx`, `characters/page.tsx`, `locations/page.tsx`, `weapons/page.tsx`, `gallery/layout.tsx`, `news/layout.tsx` : vérifier que `canonical` + `languages` sont cohérents ; migrer vers le helper si pertinent.

7. `app/sitemap.ts` / `app/robots.ts`
   - Vérifier que les URLs listées correspondent aux canonicals finaux.
   - Pas de changement structurel attendu, juste une relecture.

## Étapes d'implémentation

1. Modifier `app/[locale]/layout.tsx` pour retirer `alternates`.
2. Modifier `lib/seo.ts` : ajouter `locale` aux JSON-LD concernés, créer le helper `buildAlternates`.
3. Modifier `characters/[slug]/page.tsx` pour la locale et les métadonnées i18n.
4. Modifier `news/[slug]/page.tsx` pour la locale et les métadonnées i18n.
5. Vérifier/ajuster les pages de section si elles adoptent le helper.
6. Lancer `npm run lint` et corriger les erreurs.
7. Lancer `npm run build` pour vérifier que toutes les pages statiques génèrent les bonnes balises `<link rel="canonical">` et `<link rel="alternate" hreflang="...">`.
8. Mettre à jour le sitemap principal avec une `lastModified` récente pour signaler le changement à Google.
9. Déployer sur Vercel et, si possible, demander une validation Search Console.

## Validation

- S'assurer que chaque URL indexée possède une balise `<link rel="canonical" href="https://gta6codetriche.fr/<chemin-localisé>">`.
- S'assurer que chaque page a deux balises `hreflang` : `fr` et `en` (plus l'`x-default` si l'on décide d'en ajouter un).
- S'assurer que le canonical de la version EN pointe vers `/en/...` et celui de la version FR vers `/...`.
- S'assurer que les pages de détail personnages/actualités EN ne pointent plus vers les URLs FR.

## Notes

- Les pages légales (`mentions-legales`, `politique-confidentialite`, `legal-notice`, `privacy-policy`) sont en `robots: { index: false }` ; elles n'impactent pas l'indexation.
- Le sitemap dynamique des personnages importe `characters` depuis `lib/data` au lieu de `lib/characters` ; cela fonctionne car `lib/data` exporte probablement `characters` aussi, mais on en profitera pour vérifier la cohérence des imports.
- Aucune nouvelle dépendance n'est requise.
