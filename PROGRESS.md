# OpsVantage Digital Project: Progress Tracker

This document tracks the completion status of the OpsVantage Digital website and client platform, based on the official `Blueprint_and_Workflow.md`.

---

### Phase 1: Foundation & Marketing Site

*This phase focuses on building the public-facing brand presence and establishing the core technical foundation.*

- [x] Setup Next.js project with App Router and TypeScript.
- [x] Configure Tailwind CSS with the brand's design tokens.
- [x] Implement `ThemeProvider` for dark mode.
- [x] Create the `RootLayout` with `Header` and `Footer`.
- [x] Build the `Header` component with primary navigation.
- [x] Build the `Footer` component with a multi-column layout.
- [x] Build the Home Page (`/`) with the defined HERO strategy.
- [x] Build the Services Page (`/services`) with a Bento Grid layout.
- [x] Create dynamic routes and a page template for individual services (`/services/[slug]`).
- [x] Build the Work Page (`/work`) with a grid for case studies.
- [x] Build the Process Page (`/process`) detailing the four-phase methodology.
- [ ] Build the Pricing Page (`/pricing`).
- [x] Build the `/insights` Page with a grid or list layout.
- [x] Create a dynamic route (`/insights/[slug]`) for individual article pages.
- [x] Build the `/contact` Page with a contact form.
- [x] Implement a Next.js API route to handle form submissions.
- [x] Build the `/booking` Page with a third-party scheduling tool.
- [x] Create static pages for `Privacy Policy` (`/privacy`) and `Terms of Service` (`/terms`).
- [x] Create static pages for `Cookie Policy` (`/cookies`), `Disclaimer` (`/disclaimer`), and `Refund Policy` (`/refunds`).
- [x] **Finalize SEO & Performance:**
  - [x] Implement `generateStaticParams` on all dynamic routes.
  - [x] Add dynamic `generateMetadata` functions to all pages.
  - [x] Create `sitemap.xml` and `robots.txt` files.

---

### Phase 2: Client Auth & Platform Shell

*This phase establishes the secure, client-only section of the application.*

- [x] Build the UI for the `/login` page using the `Card` component.
- [ ] **Implement Authentication Strategy:**
  - [ ] Choose and install an authentication library (e.g., NextAuth.js, Clerk).
  - [ ] Configure the chosen provider (e.g., Google, Email/Password).
  - [ ] Create the API routes required for authentication.
- [ ] **Build the `/register` Page**
- [ ] **Implement Client-Side State** (e.g., `AuthContext`).
- [ ] **Secure Client Routes** (e.g., using Next.js Middleware).
- [ ] **Build the Platform Shell** (e.g., `app/(platform)` layout).

---

### Phase 3: CMS & Dynamic Content
- [ ] Set Up Headless CMS (Sanity.io).
- [ ] Integrate Sanity with Next.js.
- [ ] Refactor pages to use CMS data.
- [ ] Implement Live Preview.

---

### Phase 4: Dashboard & Booking
- [ ] Build the `/dashboard` Page.
- [ ] Build the `/hub` Page.

---

### Phase 5: Finalization & Launch
- [ ] Implement a Design System Viewer (Storybook).
- [ ] Implement a Testing Suite (Jest/Playwright).
- [ ] Configure CI/CD Pipeline (GitHub Actions).
- [ ] Final Review & Polish (Accessibility, Performance).