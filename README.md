# Hein Htet Zaw Portfolio

Personal portfolio built with `Next.js` and deployed to `GitHub Pages`.

Live site: `https://mine969.github.io/`

Routes:

- Main portfolio: `/`
- Resume snapshot: `/resume`
- Collection Hub (cybersecurity/IT link collection): `/hub`
- Certification Roadmap (cybersecurity certs by domain/tier): `/certs`
- Classic backup version: `/classic`
- Beta review route: `/new-ver`

## Stack

- `Next.js 15`
- `React 19`
- `Tailwind CSS`
- `Framer Motion`
- `GitHub Actions` for Pages deployment

## Features

- Multi-language UI: English, Thai, Japanese, Burmese
- Mobile-friendly portfolio layout
- Locale-based CV links for general and Japanese audiences
- Resume, CV, certificates, and project links
- Leadership & Community section with event proof photos
- SEO metadata, `robots.txt`, and `sitemap.xml`
- Static export for reliable GitHub Pages hosting
- Collection Hub (`/hub`): searchable, categorized library of cybersecurity/IT/DFIR/OSINT tools, cheatsheets, sandboxes, and reading lists — each externally-sourced section credits and links back to its original author
- Certification Roadmap (`/certs`): 144 hands-on cybersecurity certifications across 13 technical domains and 5 difficulty tiers, filterable by domain/issuing body, with cost, exam format, and renewal info — data sourced and credited to PHK Knowledge Sharing's open cert-roadmap dataset

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
  classic/               Previous homepage backup route
  new-ver/               Review route for promoted minimal version
  notes/                 Notes page
  resume/                Resume page
  hub/                   Collection Hub route (link + resource collection)
  certs/                 Certification Roadmap route
  layout.jsx             Site layout and metadata
  page.jsx               Current main homepage entry
  robots.js              Static robots.txt route
  sitemap.js             Static sitemap route

components/
  beta-home-page.jsx     Current promoted main homepage
  leadership-community-section.jsx  Event leadership section
  home-page.jsx          Classic homepage composition
  hero.jsx               Hero section
  navbar.jsx             Top navigation
  locale-provider.jsx    Locale state and persistence
  locale-switcher.jsx    Language selector
  resume-page-content.jsx  Resume snapshot page content
  hub-page-content.jsx     Collection Hub page content (search + category grid)
  certs-page-content.jsx   Certification Roadmap page content (filters + tiers)

lib/
  portfolio-data.js            Base portfolio data and links
  portfolio-copy.js            UI text and translations
  portfolio-localized-data.js  Localized lists and labels
  hub-data.js                  Collection Hub categories, links, credits
  certs-data.js                Certification roadmap data, sourced and credited

public/
  community/              Leadership & community event photos
  flags/                  Language flag icons
  favicon.png             Browser tab icon
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
- Update Japanese CV link: `profile.links.cvJapan`
- Update certificates folder link: `profile.links.documents`
- Change main profile image: `profile.socialImage`
- Add new project: append to `projects` in `lib/portfolio-data.js`, then add matching translated copy in `lib/portfolio-copy.js` and `lib/portfolio-localized-data.js`
- Add leadership/community events: update `leadershipCommunity` in `lib/portfolio-data.js`

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
- Japanese locale uses a dedicated CV link through `getCvLink(locale)`
- Main homepage uses the promoted minimal layout; classic version remains available at `/classic`

## Maintenance Guide

See `docs/MAINTENANCE.md` for update workflow and content rules.
