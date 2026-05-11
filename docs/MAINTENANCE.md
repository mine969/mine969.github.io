# Maintenance Guide

This document explains how to maintain and scale the portfolio without turning content updates into code cleanup work.

## Core Rule

Keep content in data files and keep components focused on layout.

Main files:

- `lib/portfolio-data.js`: global profile data, links, projects, timeline
- `lib/portfolio-copy.js`: translated UI copy and section text
- `lib/portfolio-localized-data.js`: localized lists such as project titles, certificates, skills, and timeline summaries

## How To Update Common Items

### 1. Change profile image

1. Put new image in `public/images/`
2. Update `profile.socialImage` in `lib/portfolio-data.js`

### 2. Change CV, certificates, or document links

Edit in `lib/portfolio-data.js`:

- `profile.links.cv`
- `profile.links.documents`
- `profile.links.github`
- `profile.links.linkedin`

### 3. Add a new project

Update all three places:

1. `lib/portfolio-data.js`
2. `lib/portfolio-copy.js`
3. `lib/portfolio-localized-data.js`

Why:

- `portfolio-data.js` holds shared project metadata and links
- `portfolio-copy.js` holds section-level translated descriptions and button labels
- `portfolio-localized-data.js` holds localized titles for each language

Keep project order aligned across files.

### 4. Update certificates

Certificate cards are driven from:

- `certifications` in `lib/portfolio-data.js`
- matching names in `lib/portfolio-localized-data.js`
- translated issuer/status labels in `lib/portfolio-copy.js`

If certificate links need to become individual links later, replace the shared `profile.links.documents` usage in `components/home-page.jsx` with per-item URLs.

### 5. Update translations

Languages currently supported:

- `en`
- `th`
- `ja`
- `my`

When adding or editing text:

1. Update English first in `lib/portfolio-copy.js`
2. Update the same key for Thai, Japanese, and Burmese
3. If the item is in a list, keep indexes aligned

## Deployment Rules

This project uses static export and GitHub Pages.

Important files:

- `next.config.mjs`
- `.github/workflows/deploy.yml`

Important rules:

- Do not reintroduce a repo subpath like `/Mine-Porfolio-Website`
- Do not commit generated `out/` files
- Keep Pages source set to `GitHub Actions`

## Scalability Guidance

If the site grows, follow this order:

1. Add new data in `lib/`
2. Add or extend components
3. Keep pages thin
4. Avoid hardcoding repeated content inside JSX

Good future split if content grows more:

- `lib/projects.js`
- `lib/certifications.js`
- `lib/timeline.js`
- `lib/translations/`

## Recommended Update Workflow

For normal content updates:

1. Edit data files in `lib/`
2. Run `npm run build`
3. Review UI locally
4. Commit and push to `main`

## Verification Commands

Install dependencies:

```bash
npm ci
```

Run local dev server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

## Current Important Assets

- Main profile photo: `public/images/profile-main.jpg`
- Flag icons: `public/flags/`

## Current Important Pages

- Home: `app/page.jsx`
- Resume: `app/resume/page.jsx`
- Notes: `app/notes/page.jsx`

## Content Style Guidance

English copy should be:

- clear
- direct
- technical but readable
- understandable by non-technical recruiters

Avoid:

- buzzword-heavy text
- long abstract claims without proof
- overly complex English when simpler wording works better
