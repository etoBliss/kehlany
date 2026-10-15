# Kehlany — Content Writer & Data Analyst

A warm editorial multi-page portfolio for Kehlany, built with React, TypeScript and Vite. It uses her supplied portrait and content, with cream, chocolate, golden and terracotta tones and soft shadows. No Firebase service is connected because the current content is static and there is no dynamic content or submission workflow.

## Run locally

1. Install Node.js (20.19+ or 22.12+).
2. Run `npm install`.
3. Run `npm run dev` and open the local address Vite prints.
4. Run `npm run build` to create the production site in `dist/`.

## Personalize

- Edit `src/site/content.ts` to update biography, skills, project descriptions, ecosystems, and social links.
- Replace `public/hero_profile.jpeg` to change Kehlany's portrait.
- Add project and GitHub URLs in the `analyticsProjects` data when supplied.
- Add writing samples when titles, excerpts, or publication links are ready.
- Update the title, description, and Open Graph metadata in `index.html`.
- The pages are `/`, `/about`, `/analytics`, `/writing`, `/experience`, and `/contact`. Configure static hosting to rewrite unknown paths to `index.html`.
- The mobile menu and all navigation links work; contact uses the supplied email, X, LinkedIn, and Discord details.

## Deployment

Build with `npm run build`, then deploy the contents of `dist/` to any static host. Firebase Hosting can be added at deployment time if desired; this starter does not require Firebase credentials, Firestore, or an admin service.
