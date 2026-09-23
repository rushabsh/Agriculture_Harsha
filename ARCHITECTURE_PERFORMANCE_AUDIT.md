# Senior React & Next.js Architecture & Performance Audit

**Date:** September 20, 2026  
**Auditor:** Senior React & Next.js Systems Architect  
**Target:** GreenGlobe Agrochemical Industries Web Application (`my-app`)  
**Stack:** Next.js 16.2.10 (Turbopack, App Router), React 19.2.4, Tailwind CSS v4, Lucide React  

---

# Executive Summary

Following the safe removal of dead files and obsolete code in Phase 2, this independent Phase 3 audit evaluates the live architecture, rendering strategies, component design, performance profiles, accessibility (a11y), and search engine optimization (SEO) of the entire application.

The application is functioning with zero compilation or linting errors across 5 static routes (`/`, `/about`, `/contact`, `/industries`, `/products`). However, the audit reveals several architectural anti-patterns, critical SEO metadata gaps, accessibility regressions, and performance opportunities:

1. **Critical SEO Defect (P0):** The root metadata in `app/layout.js` retains leftover template copy (*"VerdaAgro - Sustainable Agriculture... Replication of VerdaAgro website"*), while none of the 4 subpages (`/about`, `/contact`, `/industries`, `/products`) export page-specific metadata. Furthermore, `/` and `/about` contain duplicate `<h1>` tags violating core heading hierarchy rules.
2. **Accessibility/UX Flaw (P1):** The CSS class `select-none` (`user-select: none`) is globally applied across `<main>` and major sections on almost every page. This prevents farmers, dealers, and commercial clients from selecting and copying vital technical specifications, license numbers, phone numbers, and addresses.
3. **Broken Interactive Affordances (P1):** Multiple CTA buttons across `Hero.jsx`, `About.jsx`, and `Features.jsx` render the text inside an `<a>` tag while placing the adjacent diagonal arrow icon inside an unclickable `<div>`. Clicking the arrow icon does nothing.
4. **Client Component Boundary (P2):** `Footer.jsx` marks 148 lines of static HTML as `"use client"` solely to support an isolated "Scroll to Top" button. Similarly, `app/products/page.jsx` is a 1,365-line monolith containing over 800 lines of static data embedded directly within client state logic.
5. **Missing Standard Route Primitives (P2):** Missing `sitemap.js`, `robots.js`, and `app/error.jsx`.

---

# React Architecture

### 1. Monolithic Client State & Embedded Static Data
- **File:** `app/products/page.jsx`
- **Component:** `ProductsPage`
- **Problem:** Over 800 lines of static technical product data (`categoryDetails` and `productsData`) are hardcoded directly into the client-side page component.
- **Why it is unnecessary:** Client components bundle all embedded object literals into the client JavaScript chunk downloaded by every visitor. Because this data is completely static, embedding it in the component file bloats the bundle and complicates code maintainability.
- **Current implementation:** `categoryDetails` and `productsData` are declared in module scope inside the client component file.
- **Recommended implementation:** Extract `categoryDetails` and `productsData` into a standalone data file (`data/productsData.js`). The component then imports only what is needed, or the page can be refactored to consume search params cleanly.
- **Risk:** Low.
- **Priority:** P2 (Medium)

### 2. Full Component Re-render on High-Frequency Mouse Events
- **File:** `components/MouseTracker.jsx`
- **Component:** `MouseTracker`
- **Problem:** `setPosition({ x: e.clientX, y: e.clientY })` triggers React state updates on every native `mousemove` event (up to 120+ times per second on high-refresh displays).
- **Why it is unnecessary:** React reconciliation on every frame for mouse tracking causes continuous render cycles. While the DOM footprint is small (3 divs), it consumes unnecessary CPU on battery-constrained mobile/laptop devices.
- **Current implementation:** React `useState` for cursor coordinates.
- **Recommended implementation:** Update DOM elements directly via `useRef` and `requestAnimationFrame`, or write CSS custom properties (`--cursor-x`, `--cursor-y`) onto document root.
- **Risk:** Low.
- **Priority:** P3 (Low)

### 3. All Accordion Images Mounted Concurrently
- **File:** `components/WhyChooseUs.jsx`
- **Component:** `WhyChooseUs`
- **Problem:** All 6 feature images are rendered into the DOM simultaneously inside `principles.map()`, with 5 of them hidden using `opacity-0 pointer-events-none`.
- **Why it is unnecessary:** While cross-fading requires pre-loading or opacity transitions, mounting 6 full-resolution images inside absolute frames forces the browser to decode all images on initial page view.
- **Current implementation:** Maps all 6 images with dynamic opacity classes.
- **Recommended implementation:** Keep active image and pre-render adjacent image on hover/interaction rather than decoding all simultaneously.
- **Risk:** Low.
- **Priority:** P3 (Low)

---

# Next.js Architecture

### 1. Inappropriate Client Component Scope
- **File:** `components/Footer.jsx`
- **Component:** `Footer`
- **Problem:** Entire footer (148 lines) is marked `"use client"` solely because of lines 9–11 (`scrollToTop` function on the back-to-top floating button).
- **Why it matters:** The footer contains heavy static content: addresses, phone numbers, copyright, emails, and links. Forcing this entire tree into client bundle increases hydration overhead.
- **Current implementation:** `"use client"` at top of `Footer.jsx`.
- **Recommended implementation:** Convert `Footer.jsx` into a Server Component. Extract the 15-line floating back-to-top button into an isolated `<ScrollToTopButton />` client component.
- **Risk:** Low.
- **Priority:** P2 (Medium)

### 2. Missing Next.js Error Boundary
- **File:** `app/`
- **Problem:** Missing `app/error.jsx` and `app/global-error.jsx`.
- **Why it matters:** If an uncaught runtime exception occurs in any client component or route transition, Next.js will fall back to its generic unstyled framework error screen instead of a branded, user-friendly recovery UI with a retry button.
- **Current implementation:** Only `app/not-found.jsx` exists; no error boundary.
- **Recommended implementation:** Add standard `app/error.jsx` with a retry button and fallback layout matching site branding.
- **Risk:** Zero.
- **Priority:** P2 (Medium)

### 3. Duplicate Layout Inclusions
- **Files:** `app/page.js`, `app/about/page.jsx`, `app/contact/page.jsx`, `app/industries/page.jsx`, `app/products/page.jsx`, `app/not-found.jsx`
- **Problem:** `<Header />` and `<Footer />` are manually imported and rendered in every single page file rather than in `app/layout.js`.
- **Why it matters:** In Next.js App Router, global headers and footers should live in the root layout so that client-side page navigation only re-renders the changed page content inside `<main>`, preserving header state across transitions.
- **Risk:** Needs Review (Header currently uses absolute positioning overlaying breadcrumb heroes with different heights).
- **Priority:** P3 (Low)

---

# Performance

### 1. Raw CSS Background Images Skipping Next.js Image Optimization
- **Files:**
  - `app/about/page.jsx` (line 17)
  - `app/contact/page.jsx` (line 68)
  - `app/industries/page.jsx` (line 81)
  - `app/products/page.jsx` (line 935)
- **Problem:** Breadcrumb headers load `/breadcum-1.jpg` via inline style: `style={{ backgroundImage: "url('/breadcum-1.jpg')" }}`.
- **Why it matters:**
  - `/breadcum-1.jpg` is a 237 KB uncompressed JPEG.
  - Using inline CSS background bypasses Next.js automatic WebP/AVIF compression, responsive srcset generation, and blur placeholder generation.
  - This 237 KB asset is loaded on every subpage.
- **Recommended implementation:** Replace inline background with Next.js `<Image src="/breadcum-1.jpg" alt="Header background" fill priority sizes="100vw" className="object-cover" quality={80} />`.
- **Risk:** Zero risk.
- **Priority:** P1 (High)

### 2. Oversized Unused Public Assets
- **Directory:** `public/`
- **Problem:** Several unused megabyte-scale files reside in `public/`:
  - `golden-wheat-bg.png` (1,011 KB / 1.01 MB)
  - `golden-wheat-spike.png` (592 KB)
  - `hero-maha-farmer-bg.webp` (331 KB)
- **Why it matters:** Although not directly imported by active routes, keeping large dead assets in `public/` unnecessarily increases deployment artifact sizes and repository bloat.
- **Recommended implementation:** Audit and remove unreferenced large media files from `public/`.
- **Risk:** Zero risk.
- **Priority:** P3 (Low)

---

# Component Structure

### 1. Split Button / Fragmented Link Affordance
- **Files:**
  - `components/Hero.jsx` (lines 23–34)
  - `components/About.jsx` (lines 48–59)
  - `components/Features.jsx` (lines 33–44)
  - `components/About/AboutAgrigo.jsx` (lines 79–92)
- **Problem:** The CTA buttons render the text label in an `<a>` or `<Link>` tag, but place the adjacent arrow icon inside an independent `<div>` or a second separate `<Link>`!
- **Why it matters:**
  - In `Hero`, `About`, and `Features`: Hovering or clicking the green arrow box does nothing! Only the text box is clickable.
  - In `AboutAgrigo`: Two adjacent `<Link>` tags with different contents link to the same destination (`/contact`), creating redundant tab stops for keyboard users and confusing screen readers.
- **Recommended implementation:** Wrap both label and arrow inside a single unified `<Link href="/...">` container with group-hover styling.
- **Risk:** Zero risk (improves UX and a11y).
- **Priority:** P1 (High)

---

# Tailwind / CSS

### 1. Global `select-none` Disabling User Text Selection
- **Files:**
  - `app/contact/page.jsx` (line 90: `<main className="... select-none">`)
  - `app/products/page.jsx` (line 1006: `<main className="... select-none">`)
  - `app/industries/page.jsx` (line 102: `<main className="... select-none">`)
  - `components/About.jsx` (line 7: `<section className="... select-none">`)
  - `components/Services.jsx` (line 56: `<section className="... select-none">`)
  - `components/Features.jsx` (line 7: `<section className="... select-none">`)
  - `components/WhyChooseUs.jsx` (line 49: `<section className="... select-none">`)
  - `components/Testimonials.jsx` (line 41: `<section className="... select-none">`)
  - `components/About/AboutAgrigo.jsx` (line 35: `<section className="... select-none">`)
- **Problem:** The Tailwind utility `select-none` (`user-select: none;`) is applied to top-level container elements across almost all pages and sections.
- **Why it matters:**
  - Users are completely unable to select, copy, or quote text.
  - On the Contact page: Users cannot copy the phone numbers (+91 93254 66881), email (greenglobeimports@gmail.com), or Pune office address.
  - On the Products page: Commercial buyers cannot copy technical chemical names, grades, or the mandatory wholesale fertilizer license number (`LCFWD2023100392`).
- **Recommended implementation:** Remove `select-none` from all informational and content containers. Reserve `select-none` strictly for decorative icons, carousels, or drag handles.
- **Risk:** Zero risk (pure UX improvement).
- **Priority:** P1 (High)

---

# Accessibility (A11y)

### 1. Missing Form Input Accessible Labels
- **Files:**
  - `app/products/page.jsx` (line 1243): Search input has a `placeholder` but no `<label>` or `aria-label`.
  - `components/Footer.jsx` (line 114): Newsletter email input has a `placeholder` but no `<label>` or `aria-label`.
- **Why it matters:** WCAG 2.1 Success Criterion 3.3.2 (Labels or Instructions) and 4.1.2 (Name, Role, Value) require interactive inputs to have programmatic labels. Screen reader users hearing only an unlabeled edit box cannot determine its purpose.
- **Recommended implementation:** Add `aria-label="Search technical grades and products"` and `aria-label="Email address for newsletter updates"`.
- **Risk:** Zero.
- **Priority:** P1 (High)

### 2. Missing Dialog & Keyboard Semantics on Mobile Drawer
- **File:** `components/Header.jsx` (lines 89–152)
- **Problem:** The mobile menu drawer is rendered as a plain `<div>` without `role="dialog"`, `aria-modal="true"`, or `aria-expanded` on the trigger.
- **Why it matters:** Screen reader users are not notified that a modal dialog has opened, and keyboard navigation does not trap focus inside the drawer.
- **Recommended implementation:** Add `aria-expanded={isMobileMenuOpen}` to the menu trigger button and `role="dialog"` with `aria-modal="true"` to the drawer container.
- **Risk:** Low.
- **Priority:** P2 (Medium)

---

# SEO

### 1. Critical Leftover Template Metadata & Missing Page Titles
- **File:** `app/layout.js` (lines 18–21)
- **Problem:**
  ```javascript
  export const metadata = {
    title: "VerdaAgro - Sustainable Agriculture & Modern Farming Solutions",
    description: "Replication of VerdaAgro website homepage focusing on sustainable agriculture, crop planning, soil testing, and modern farming solutions.",
  };
  ```
  - The website title and description state "VerdaAgro" and "Replication of VerdaAgro website homepage".
  - The actual company is **GreenGlobe Agrochemical Industries**.
  - None of the sub-pages (`/about`, `/contact`, `/industries`, `/products`) export their own metadata.
- **Why it matters:**
  - Search engines index the homepage as "VerdaAgro replication".
  - All 4 subpages display the exact same misleading title and description in Google search results.
  - Social media shares (WhatsApp, LinkedIn, Twitter) show "VerdaAgro replication".
- **Recommended implementation:**
  - Update `app/layout.js` default title template: `title: { default: "GreenGlobe Agrochemical Industries | Sustainable Agriculture & Bulk Fertilizers", template: "%s | GreenGlobe" }`.
  - Add page-specific `metadata` exports to `/about`, `/contact`, `/industries`, and `/products`.
- **Risk:** Zero.
- **Priority:** P0 (Critical)

### 2. Duplicate `<h1>` Heading Tags on Single Routes
- **Route `/` (Homepage):**
  - `components/Hero.jsx` (line 13): `<h1>Empowering Modern Farming</h1>`
  - `components/Statistics.jsx` (line 44): `<h1 className="text-[11vw] ...">Statistics</h1>`
- **Route `/about` (About Page):**
  - `app/about/page.jsx` (line 27): `<h1>About GreenGlobe</h1>`
  - `components/About/AboutAgrigo.jsx` (line 64): `<h1>Reliable Sourcing for India&apos;s Fertilizer Industry</h1>`
- **Why it matters:** HTML5 and search engine ranking guidelines mandate exactly one `<h1>` per document. Multiple `<h1>` elements confuse search engine crawlers regarding the primary page topic.
- **Recommended implementation:**
  - On Homepage: Change `Statistics.jsx` from `<h1>Statistics</h1>` to `<h2 className="text-[11vw] ...">Statistics</h2>`.
  - On About Page: Change `AboutAgrigo.jsx` from `<h1>` to `<h2>`.
- **Risk:** Zero (visual styling remains 100% identical since styling is controlled by utility classes).
- **Priority:** P1 (High)

### 3. Missing `robots.txt` and `sitemap.xml`
- **Directory:** `app/`
- **Problem:** The application has no `app/robots.js` (or `robots.txt`) and no `app/sitemap.js` (or `sitemap.xml`).
- **Why it matters:** Search engine crawlers have no explicit indexation manifest to discover all 5 core routes.
- **Recommended implementation:** Add native Next.js `app/sitemap.js` and `app/robots.js` exporting valid configuration for the production domain.
- **Risk:** Zero.
- **Priority:** P1 (High)

---

# Security

### 1. Insecure Remote Patterns in Configuration
- **File:** `next.config.mjs` (lines 5–8)
- **Problem:** `next.config.mjs` allows remote image loading from `wgl-dsites.net`.
- **Why it matters:** `wgl-dsites.net` was an external WordPress demo host used by the deleted `Brands.jsx` component. Permitting arbitrary third-party image domains in `remotePatterns` leaves an open proxy endpoint on the Next.js image optimization API.
- **Recommended implementation:** Remove `wgl-dsites.net` from `remotePatterns`.
- **Risk:** Zero (no active components load images from this domain).
- **Priority:** P2 (Medium)

---

# Code Complexity

### 1. Simplification Candidates
1. **Unified Button + Icon Pattern:**
   In `Hero.jsx`, `About.jsx`, and `Features.jsx`, 12 lines of fragmented markup (`<a>` followed by separate `<div>` with inline SVG) can become 5 lines of semantic, accessible `<Link>` with an embedded icon.
2. **Products Data Extraction:**
   In `app/products/page.jsx`, moving `categoryDetails` and `productsData` into `data/productsData.js` reduces component file length from 1,365 lines to under 450 lines without changing any logic or rendering.
3. **Floating Scroll Button Separation:**
   Extracting the 15-line floating button from `Footer.jsx` converts the remaining 135 lines of `Footer.jsx` into a clean, zero-bundle Server Component.

---

# Prioritized Recommendations

| Item | File | Description | Priority | Classification |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `app/layout.js` | Replace template "VerdaAgro replication" metadata with authentic GreenGlobe SEO metadata & OpenGraph | **P0** | **SAFE TO FIX** |
| **2** | Subpages (`/about`, `/contact`, etc.) | Export page-specific `<title>` and `<description>` metadata for all routes | **P0** | **SAFE TO FIX** |
| **3** | Multiple files | Remove anti-user `select-none` class from content containers (allow copying addresses, phone numbers, specs) | **P1** | **SAFE TO FIX** |
| **4** | `components/Statistics.jsx`, `AboutAgrigo.jsx` | Fix duplicate `<h1>` tags on `/` and `/about` by changing secondary headers to `<h2>` | **P1** | **SAFE TO FIX** |
| **5** | Breadcrumb headers (4 pages) | Replace raw 237 KB CSS `url('/breadcum-1.jpg')` with optimized Next.js `<Image>` component | **P1** | **SAFE TO FIX** |
| **6** | `Hero.jsx`, `About.jsx`, `Features.jsx` | Wrap text and adjacent arrow icon inside a single unified `<Link>` element | **P1** | **SAFE TO FIX** |
| **7** | `app/products/page.jsx`, `Footer.jsx` | Add accessible `aria-label` to search input and newsletter input | **P1** | **SAFE TO FIX** |
| **8** | `app/` | Add native Next.js `app/sitemap.js` and `app/robots.js` | **P1** | **SAFE TO FIX** |
| **9** | `components/Footer.jsx` | Convert to Server Component by extracting floating back-to-top button to `<ScrollToTopButton />` | **P2** | **SAFE TO FIX** |
| **10** | `next.config.mjs` | Remove obsolete `wgl-dsites.net` domain from `remotePatterns` | **P2** | **SAFE TO FIX** |
| **11** | `app/` | Add branded `app/error.jsx` error boundary fallback | **P2** | **SAFE TO FIX** |
| **12** | `components/Header.jsx` | Add `aria-expanded` and `role="dialog"` to mobile navigation drawer | **P2** | **SAFE TO FIX** |
| **13** | `app/products/page.jsx` | Extract 800+ lines of static data into `data/productsData.js` | **P2** | **NEEDS REVIEW** |
| **14** | `components/MouseTracker.jsx` | Refactor mouse event updates to direct DOM refs or CSS vars | **P3** | **NEEDS REVIEW** |
| **15** | `app/layout.js` vs individual pages | Relocate duplicated `<Header />` and `<Footer />` into root layout | **P3** | **NEEDS REVIEW** |
| **16** | `public/` | Delete unused megabyte-scale graphic files (`golden-wheat-bg.png`, etc.) | **P3** | **KEEP AS IS** |

---

# Classification Lists

### Safe-to-Fix Items
- Updating root and per-page metadata (title, description, OpenGraph).
- Removing `select-none` from text bodies.
- Correcting duplicate `<h1>` hierarchy to `<h2>`.
- Unifying split button + arrow icons into single clickable `<Link>` elements.
- Adding `aria-label` to search and newsletter inputs.
- Converting breadcrumb CSS backgrounds to Next.js `<Image>`.
- Adding `sitemap.js` and `robots.js`.
- Removing dead `wgl-dsites.net` from `next.config.mjs`.
- Adding `app/error.jsx`.
- Extracting `<ScrollToTopButton />` so `Footer.jsx` becomes a Server Component.

### Needs-Review Items
- **Extracting static data to `data/productsData.js`:** Clean architectural win, but modifies file structure of `app/products/page.jsx`.
- **MouseTracker Direct DOM Refactoring:** Replaces React state with direct DOM mutation. Behavior must be tested across mobile and desktop.
- **Relocating Header/Footer to `layout.js`:** Requires verifying that absolute overlay header positioning correctly aligns with all page heroes.

### Keep-As-Is Items
- **Public image assets in `public/`:** Large images not referenced do not impact web bundle performance unless requested by a client.
- **Tailwind v4 `@theme` configuration in `globals.css`:** Working as expected with PostCSS.
- **Core dependencies in `package.json`:** Lean and fully utilized.
