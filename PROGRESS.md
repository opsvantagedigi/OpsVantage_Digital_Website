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
- [x] Create static pages for `Privacy Policy` and `Terms of Service` with SEO-rich content.
- [x] Establish a centralized data file (`lib/data.ts`) for shared content.
- [x] **Build the `/insights` Page:**
  - [x] Design a grid or list layout to display articles.
  - [x] Create a dynamic route (`/insights/[slug]`) for individual article pages.
- [x] **Build the `/contact` Page:**
  - [x] Create a contact form component with fields for name, email, company, and message.
  - [x] Implement a Next.js API route to handle form submissions.
- [ ] **Build the `/booking` Page:**
  - [ ] Integrate a third-party scheduling tool (like a Calendly embed) for seamless booking.
- [ ] **Create Dynamic Case Study Pages (`/work/[slug]`):**
  - [ ] Design a compelling template to detail the problem, solution, and results for each case study.
- [ ] **Finalize SEO & Performance:**
  - [ ] Implement `generateStaticParams` on all dynamic routes to pre-build pages.
  - [ ] Add dynamic `generateMetadata` functions to all pages for optimal SEO.
  - [ ] Create `sitemap.xml` and `robots.txt` files.

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