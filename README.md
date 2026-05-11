# Hein Htet Zaw Portfolio

Personal portfolio built with `Next.js` and deployed to `GitHub Pages`.

Live site: `https://mine969.github.io/`

## Stack

- `Next.js 15`
- `React 19`
- `Tailwind CSS`
- `Framer Motion`
- `GitHub Actions` for Pages deployment

## Features

- Multi-language UI: English, Thai, Japanese, Burmese
- Mobile-friendly portfolio layout
- Resume, CV, certificates, and project links
- SEO metadata, `robots.txt`, and `sitemap.xml`
- Static export for reliable GitHub Pages hosting

## Local Development

Install dependencies:

```bash
npm ci
```

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

## Project Structure

```text
app/
  notes/                 Notes page
  resume/                Resume page
  layout.jsx             Site layout and metadata
  page.jsx               Home page entry
  robots.js              Static robots.txt route
  sitemap.js             Static sitemap route

components/
  home-page.jsx          Main homepage composition
  hero.jsx               Hero section
  navbar.jsx             Top navigation
  locale-provider.jsx    Locale state and persistence
  locale-switcher.jsx    Language selector

lib/
  portfolio-data.js            Base portfolio data and links
  portfolio-copy.js            UI text and translations
  portfolio-localized-data.js  Localized lists and labels

public/
  flags/                  Language flag icons
  images/                 Profile and public images

.github/workflows/
  deploy.yml              GitHub Pages deployment workflow
```

## Updating Content

Main places to edit:

- Profile links and image: `lib/portfolio-data.js`
- Homepage text and translations: `lib/portfolio-copy.js`
- Localized project titles, soft skills, certificates: `lib/portfolio-localized-data.js`

Examples:

- Update CV link: `profile.links.cv` in `lib/portfolio-data.js`
- Update certificates folder link: `profile.links.documents`
- Change main profile image: `profile.socialImage`
- Add new project: append to `projects` in `lib/portfolio-data.js`, then add matching translated copy in `lib/portfolio-copy.js` and `lib/portfolio-localized-data.js`

## Deployment

This site deploys through `GitHub Actions`.

On push to `main`:

1. GitHub installs dependencies
2. Runs `npm run build`
3. Exports the static site
4. Publishes to GitHub Pages

Pages workflow file:

- `.github/workflows/deploy.yml`

## Notes

- Generated `out/` files are not tracked in git
- Line endings are normalized with `.gitattributes`
- Locale preference is stored in browser local storage

## Maintenance Guide

See `docs/MAINTENANCE.md` for update workflow and content rules.
