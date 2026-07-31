# Powell Arbor Solutions Website — Changelog

A running log of website changes, SEO actions, marketing campaigns, and platform decisions. Most recent entries first.

---

## 2026-07-31

### Promotion Removal — America's 250
- Removed America's 250 promo banner, CSS, and JS from homepage (`index.html`)
- Deleted `/americas-250/` landing page entirely
- Removed `/americas-250/` entry from `sitemap.xml`
- Added 301 redirects in `netlify.toml` for `/americas-250` and `/americas-250/` → `/`

---

## 2026-07-08

### Repository & Infrastructure
- Confirmed `powellarborsolutions` GitHub repository as the single source of truth for the production website
- Confirmed Netlify deploys automatically from the `main` branch of this repository
- Archived the old `Powell Arbor Solutions Website` working folder (created April 30, 2026); added README.md warning inside it
- Established workflow: all future edits must be made in this repository, committed, and pushed to GitHub

### Analytics & Tracking
- Confirmed GA4 tracking (Measurement ID: `G-CD44Y4C4GR`) is present on all pages
- Confirmed Google Analytics is receiving live traffic
- Linked Google Analytics to Google Ads
- Verified Google Search Console ownership
- Submitted sitemap to Google Search Console (`/sitemap.xml`)

---

## 2026-06-24

### UX & Navigation
- Polished website UX sitewide; standardized all service pages
- Added Financing nav link to desktop and mobile navigation on all pages
- Fixed homepage carousel and standardized service pages

### SEO — Structured Data
- Added FAQ schema (`FAQPage` + `Question`/`Answer`) to all service pages:
  - `services/tree-removal.html`
  - `services/tree-trimming.html`
  - `services/emergency-tree-service.html`
  - (and all remaining service pages)
- Added FAQ schema to primary city pages:
  - `service-areas/grass-valley-tree-service.html`
  - `service-areas/auburn-tree-service.html`
  - `service-areas/nevada-city-tree-service.html`
  - (and all remaining city pages)
- Expanded homepage `areaServed` schema from 7 to 14+ cities/counties

### SEO — Content
- Updated homepage `<title>` to: "Nevada County Tree Service | Powell Arbor Solutions — ISA Certified Arborist"
- Updated homepage meta description with phone number and expanded service list
- Added Nevada County and Placer County as `AdministrativeArea` entries in schema

---

## 2026-06-24 (earlier)

### New Pages
- Added Service Areas hub page (`/service-areas/index.html`)
- Added Services hub page (`/services/index.html`)
- Added additional city/service area pages:
  - Alta Sierra, Applegate, Cedar Ridge, Chicago Park, Christian Valley, Colfax
  - Lake of the Pines, Lake Wildwood, Meadow Vista, North San Juan, Penn Valley
  - Rough and Ready, Truckee

---

## 2026-06-24 (earlier)

### New Pages
- Added Financing page (`/financing/`)
- Added additional service pages:
  - Arborist Reports, Defensible Space, Plant Health Care, Storm Damage Cleanup
  - Stump Grinding, Tree Planting

---

## Earlier — May/June 2026

### Analytics
- Added Google Analytics 4 tracking code (GA4 Measurement ID: `G-CD44Y4C4GR`) sitewide across all pages

### New Pages (initial buildout)
- `about/index.html`
- `contact/index.html`
- `services/tree-removal.html`
- `services/tree-trimming.html`
- `services/emergency-tree-service.html`
- `service-areas/grass-valley-tree-service.html`
- `service-areas/auburn-tree-service.html`
- `service-areas/nevada-city-tree-service.html`

### Platform
- Established Netlify deployment from `powellarborsolutions` GitHub repository
- Added `netlify.toml` with trailing-slash redirect rules

---

## 2026-04-30

### Initial Launch
- Initial website deployed to Netlify from GitHub repository
- Homepage, core service pages, and primary city pages created
- ISA Certified Arborist credential, licensing, and trust signals added
- Jobber estimate form embedded on contact page
- Google Fonts, Swiper.js gallery, and responsive navigation implemented
