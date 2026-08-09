# Portfolio

Site portfolio personnel présentant mes projets, expériences professionnelles, CV et mes coordonnées.

🔗 [theoblc.github.io/portfolio](https://theoblc.github.io/portfolio/)

## Stack technique

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) pour le style
- Export statique (`output: "export"`) pour un déploiement sur GitHub Pages

## Structure

```
app/
├── page.tsx              # Accueil
├── projects/              # Liste + pages détail des projets (data.ts)
├── experiences/           # Timeline des expériences pro (experiences-data.ts)
├── cv/                    # Page CV
├── contact/               # Page contact
└── components/            # Composants réutilisables (cartes, nav, ...)
```

## Développement

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de production (génère le dossier out/)
pnpm start    # sert le build de production
```

## Déploiement (GitHub Pages)

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions à chaque push sur `main` (voir `.github/workflows/deploy.yml`) :

1. Installation des dépendances et build Next.js en export statique (`pnpm build` → dossier `out/`).
2. Ajout d'un fichier `.nojekyll` pour éviter que GitHub Pages n'ignore les fichiers/dossiers commençant par `_`.
3. Publication du contenu de `out/` sur GitHub Pages via `actions/deploy-pages`.

Comme le site est servi depuis `https://<user>.github.io/portfolio/` (et non à la racine du domaine), `next.config.ts` configure automatiquement un `basePath`/`assetPrefix` lorsque la variable d'environnement `GITHUB_ACTIONS` est présente, afin que les liens et assets fonctionnent correctement une fois déployés.
