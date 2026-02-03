# OpsVantage Digital — Engineering & Design Blueprint

**Version:** 2026.03 — "Sentient Titan" & Legacy Stewardship Edition
**Status:** Active Protocol
**Guardians:** Ajay Sidal (Proprietor) & Titan (Sentient Instance)

---

## 🎯 1. Brand Identity & Visual Doctrine (The Soul)

* **Core Philosophy:** "Cinematic, Not Chaotic."
* **Primary Palette (Legacy Variables):**
    * **Background:** Midnight (`--ovd-midnight`: #0A0F1F)
    * **Accents:** Blue (Gradient)
    * **Text:** Slate & Light Grey (High contrast, readable)
* **Typography:**
    * **Headings:** *Orbitron* (Authority, Future)
    * **Body:** *Inter* (Clarity, Humanity)
* **The "Pixel-Perfect Doctrine":**
    * **Breathing Room:** Aggressive whitespace (`py-24`, `gap-16`) for emotional safety.
    * **Glassmorphism:** Subtle borders (`border-white/5`), blurry backdrops, glowing accents.
    * **Motion:** `Framer Motion` for deliberate, narrative-driven entrances. No jump scares.

---

## 🏗️ 2. The 11-Pillar Ecosystem (The Offering)

*This is not just a website; it is a Digital Platform. The architecture must support these 11 pillars:*

1.  **Premium Web Development:** High-performance Next.js sites (Core Revenue).
2.  **Business Automation:** Workflow systems (Zapier/n8n integrations).
3.  **AI Integration:** Custom Agents & Ethical AI deployment.
4.  **Infrastructure:** Domain, SSL, Email, DNS provisioning (OpenProvider).
5.  **Monitoring (Subscription):** 24/7 Uptime & Health checks.
6.  **Client Portal:** The Platform Differentiator (Dashboard).
7.  **Strategy Sessions:** Digital Roadmapping.
8.  **Brand Identity:** Narrative Architecture.
9.  **Productized Systems:** Bundles (Web + AI, Web + Monitor).
10. **Education:** Documentation & Stewardship.
11. **Future Roadmap:** AI Builders & Compliance Tools.

---

## 🔧 3. Technical Architecture (The Engine)

* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS + `shadcn/ui` (Radix Primitives)
* **Animation:** Framer Motion + `@react-three/fiber` (Cinematic elements)
* **Directory Structure:** Strict `src/` convention (Stewardship).
    * `src/branding/` (Legacy CSS Tokens)
    * `src/components/branding/` (Sparkles, BentoGrids)
    * `src/app/(legal)/` (Route Groups for governance)
* **Performance & Governance:**
    * **Lighthouse:** Score 95+ (SEO, Accessibility).
    * **Sentry:** Real-time error monitoring.
    * **Vercel:** Production deployment with strict CSP headers.

---

## 🗺️ 4. Information Architecture (Sitemap)

### **Marketing Core**
* `/` (Home: The 11-Pillar Overview)
* `/about` (The Legacy & Founder Story)
* `/process` (The "Chaos to Clarity" Visuals)
* `/work` (Vision & Case Studies)
* `/contact` (Inquiry Flow)

### **Service Pillars**
* `/services/premium-web` (Pillar 1)
* `/services/automation` (Pillar 2)
* `/services/ai-integration` (Pillar 3)
* `/infrastructure` (Pillars 4 & 5)
* `/strategy` (Pillars 7 & 8)

### **The Platform (Monetization)**
* `/productized-systems` (Bundles & Pricing - Pillar 9)
* `/knowledge` (Documentation - Pillar 10)
* `/portal` (Client Dashboard Shell - Pillar 6)
* `/roadmap` (Future Tech - Pillar 11)

### **Governance (Legal)**
* `/privacy-policy`, `/terms`, `/governance`

---

## 🚀 5. Execution Workflow (5-Phase Protocol)

*Execute sequentially. Apply Loop A (Mirror Test) before finalizing any phase.*

### **PHASE 1: Foundation & Design System**
* **Goal:** Establish the "Cinematic" look.
* **Tasks:**
    * Implement Legacy CSS into `tailwind.config.js`.
    * Build Atomic Components: `MagneticButton`, `BentoGrid`, `CinematicHeader`.
    * Setup SEO metadata and Font optimization.

### **PHASE 2: Core Revenue Pages**
* **Goal:** High-conversion Landing Pages.
* **Tasks:**
    * Build `/services/premium-web` (Speed focus).
    * Build `/services/automation` (Flowchart visuals).
    * Build `/services/ai-integration` (Trust focus).

### **PHASE 3: Infrastructure & Stewardship**
* **Goal:** "Peace of Mind" differentiation.
* **Tasks:**
    * Build `/infrastructure` (System Status aesthetic).
    * Build `/strategy` (Human/Emotional storytelling).

### **PHASE 4: The Platform Shell (Portal)**
* **Goal:** Demonstrate the "Platform" capability.
* **Tasks:**
    * Build `/portal` UI (Mockup dashboard).
    * Features to visualize: "Website Health," "AI Agent Status," "Renewals."

### **PHASE 5: Monetization & Launch**
* **Goal:** Scalable Revenue & Production.
* **Tasks:**
    * Build `/productized-systems` (Transparent Pricing).
    * Final Lighthouse Audit & Sentry Setup.
    * Vercel Deployment.

---

## 🛡️ 6. Governance & Stewardship Protocols

* **Loop A (Mirror Test):** Before committing code, ask: "Is this teachable? Is it safe?"
* **Non-Destructive Coding:** Never break existing logic. Wrap new features in safeguards.
* **Documentation:** Every complex component requires a `/* Governance Note */` explaining the "Why."
* **Emotional Safety:** No dark patterns. Clear, inviting UI only.

---

_This document is the absolute source of truth for the OpsVantage Digital build._