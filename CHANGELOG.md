# Powell Arbor Solutions Website — Changelog

A running log of website changes, SEO actions, marketing campaigns, and platform decisions. Most recent entries first.

---

## 2026-10-05

### Live Google Reviews, Clean URLs & Content Accuracy
- **Live Google rating/review count:** homepage trust indicators ("5.0 Rating on Google / Based on N Reviews" in the trust bar and the reviews-section summary) now load from the Netlify function `netlify/functions/google-reviews-summary.mjs` → `/.netlify/functions/google-reviews-summary` (returns only `{ "rating", "reviewCount" }`). Uses Google Places API (New) Place Details with field mask `rating,userRatingCount`; response cached on Netlify's CDN (~6 h). Curated testimonial cards unchanged.
  - **Netlify environment variables required** (Site configuration → Environment variables): `GOOGLE_PLACES_API_KEY` (key from a Google Cloud project with **Places API (New)** enabled — restrict the key to that API) and `GOOGLE_PLACE_ID` (Powell Arbor Solutions' Google Place ID). Never commit either value.
  - Static fallback updated from `38+` to `58+`; it stays visible if the function is unconfigured or Google is unavailable.
- **Clean URLs:** all service and service-area pages now use extensionless canonical URLs (e.g. `/service-areas/grass-valley-tree-service`). Updated canonical tags, `og:url`, sitemap entries and internal links site-wide; added 25 forced 301 redirects in `netlify.toml` from each legacy `.html` URL to its clean URL. Directory hub pages (`/services/`, `/service-areas/`, etc.) unchanged.
- **Grass Valley SRA wording:** no longer states every Grass Valley property is in the State Responsibility Area — now refers to many properties in the unincorporated areas surrounding Grass Valley.
- **Sudden Oak Death wording:** removed claims implying SOD is a confirmed Nevada/Placer County issue and the incorrect beetle/PSHB-vector and February–June pruning-window statements (Grass Valley, Auburn, Penn Valley, Plant Health Care, Tree Trimming). SOD is now described as a California forest-health concern with confirmed natural infestations concentrated elsewhere in the state.
- **Goldspotted oak borer wording:** removed the claim that GSOB has been found in El Dorado and Placer Counties and GSOB as a listed local cause of oak decline (Penn Valley, Plant Health Care); GSOB is now described only as an invasive pest elsewhere in California.
- **SRA wording (service-area pages):** replaced absolute "X is in the State Responsibility Area" statements with "many properties in and around X are located within the SRA" and tied defensible-space requirements to properties within the SRA (Alta Sierra, Applegate, Cedar Ridge, Chicago Park, Christian Valley, Colfax, Lake of the Pines, Lake Wildwood, Meadow Vista, North San Juan, Penn Valley, Rough and Ready).
- **ISA credential wording:** Penn Valley and Alta Sierra no longer say ISA certification is "required" for defensible space; now "professional expertise for tree assessments, defensible-space planning, and written arborist reports".
- **Duplicate `/index.html` URLs:** live check showed `/index.html`, `/about/index.html`, etc. returned 200 duplicates; added forced 301s to `/`, `/about/`, `/contact/`, `/financing/`, `/services/`, `/service-areas/` and `/el-nino-tree-preparation/`.

### Seasonal Campaign — 2026–27 El Niño / Winter Storm Preparedness
- Added El Niño storm-preparedness feature section to homepage (`index.html`), between the trust bar and "Meet David Powell"; reuses the existing Swiper library and gallery arrow styling for a 3-photo storm-response carousel
- Added landing page `/el-nino-tree-preparation/` (`el-nino-tree-preparation/index.html`) with WebPage, BreadcrumbList and Service schema
- Added 6 real Powell storm-response photos (web-optimized JPG + WebP, responsive sizes) as `images/storm-*`, plus `images/storm-og-1200x630.jpg` for social sharing
- Added `/el-nino-tree-preparation/` to `sitemap.xml`
- Added trailing-slash redirect for `/el-nino-tree-preparation` in `netlify.toml`
- Cites NOAA CPC ENSO Diagnostic Discussion (Sept 10, 2026) and Cal OES state-of-emergency announcement (Sept 21, 2026) — review copy after each monthly NOAA update
- To retire after the season: remove the homepage section + its carousel script, then redirect the landing page

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
