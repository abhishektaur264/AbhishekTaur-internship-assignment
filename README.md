# Dr. Maya Reynolds, PsyD — Clinical Psychology Practice Website

> **Cloning & Creative Redesign Assignment** for Grow My Therapy  
> **Original Reference Site Cloned:** [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
> **Client Persona / Profile:** Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist (Santa Monica, CA)

---

## 🌟 Executive Summary

This project is a high-accuracy structural clone and creative redesign of the Conejo Valley Family Counseling homepage. While strictly preserving the original 12-section layout hierarchy, responsive grid systems, and rhythmic spacing of the reference template, the website has been completely reimagined with:
1. **A New Visual Identity**: An organic, grounding palette consisting of **Deep Sage**, **Warm Ivory**, **Muted Terracotta**, and **Warm Sand**.
2. **Profile-Derived Copywriting**: 100% extracted from Dr. Maya Reynolds' clinical profile, speaking directly to high-achieving adults, professionals, and creatives struggling quietly with anxiety, trauma, and burnout.
3. **Authentic Imagery**: Real headshot photography and Santa Monica office imagery provided in the client profile.
4. **An Exclusive Custom Section**: **"Our Office: A Calm Space for Healing"**, spotlighting the physical practice at 123th Street 45 W in Santa Monica, CA alongside California statewide telehealth options.
5. **Local SEO Integration**: Intentional headings, geo-targeted terms, and structured JSON-LD schema markup for high visibility in Santa Monica and West Los Angeles.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19, App Router architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native design tokens and CSS variables
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Typography**: `Playfair Display` (editorial serif headings) & `Plus Jakarta Sans` (clean, accessible sans-serif body) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Optimization**: `next/image` with responsive `sizes` attributes and WebP/AVIF compression
- **Structured Data**: Schema.org `PsychologicalClinic` JSON-LD

---

## 🎨 Visual Identity & Color System

The original cool-toned Squarespace palette was replaced with a curated, psychologically soothing palette designed to evoke calm, grounding, and safety:

| Role | Name | Hex Code | Purpose & Feel |
|---|---|---|---|
| **Primary** | Deep Sage | `#24402E` / `#2C4F39` | Grounded, calming, stable. Represents nervous system regulation. |
| **Secondary** | Warm Ivory / Linen | `#FAF7F2` / `#FDFBF7` | Light, spacious, uncluttered. Replaces harsh clinical white. |
| **Accent** | Muted Terracotta | `#C36B4F` / `#B0573C` | Warm, human, empathetic. Drives conversion on consultation buttons. |
| **Supporting Neutral** | Warm Sand | `#E7DFD5` / `#D8CEBF` | Subtle card borders, dividers, and pill tag backgrounds. |
| **Text Primary** | Dark Charcoal | `#1C2421` | High contrast (WCAG AA/AAA compliant) for effortless readability. |
| **Text Muted** | Slate Forest | `#515C56` | Secondary body text and subtitles. |

---

## 📐 Layout Mapping: Clone vs. Redesign

The homepage strictly follows the structural rhythm of `conejovalleycounseling.com`:

| # | Reference Section | Dr. Maya Reynolds Redesign | Layout Structure |
|---|---|---|---|
| **1** | Sticky Header & Navigation | Dr. Maya Reynolds Identity + Consultation CTA + Mobile Drawer | Fixed full-width flex container |
| **2** | Hero Section | Overline pill + SEO H1 + Subtitle + Dual CTAs + Arched Sanctuary Visual | 2-Column Split (`lg:grid-cols-12`) |
| **3** | Empathy & Hope | "You don't have to carry the quiet weight of overthinking alone" | Centered heading + 2-Column narrative |
| **4** | Who We Help | High-Achieving Adults, Trauma Survivors, Burnout & Chronic Stress | 3-Card Grid with iconography |
| **5** | Quote Callout Banner | Dr. Maya Reynolds' philosophy on resilience and collaborative depth | Full-bleed Deep Sage (`bg-sage-900`) |
| **6** | Areas of Expertise | Interactive pill cloud: CBT, EMDR, Mindfulness, Somatic, etc. | Centered badge cloud |
| **7** | How We Work / About | Dr. Maya's Authentic Headshot + Credentials Box + Integrative Bio | 2-Column (`lg:grid-cols-12`) |
| **8** | Visual Break Banner | "Honoring where you’ve been & helping shape where you’re headed" | Full-bleed coastal landscape with text overlay |
| **9** | Core Specialties Grid | 1. Anxiety & Panic, 2. Trauma & EMDR, 3. Burnout & Perfectionism | 3-Column Card Grid with expandable detail |
| **10**| **New Custom Section** | **"Our Office: A Calm Space for Healing"** (Authentic Photos) | 2-Column Office Gallery + 3 Feature pillars |
| **11**| FAQ Accordion | 5 interactive FAQs derived strictly from profile facts | Smooth accordion container |
| **12**| Schedule / Final CTA | "Find a therapist who is the right fit for you" + Quick Contact | Centered CTA with consultation modal trigger |
| **13**| Comprehensive Footer | Address, phone, email, CA telehealth notice, legal disclaimers | 3-Column Footer + sub-footer |

---

## 🌿 The Custom "Our Office" Section (Part 3)

As required by the assignment rubric, a completely new section was designed to showcase Dr. Reynolds' physical practice space:
- **Title**: *"A Calm Space for Healing"*
- **Address**: `123th Street 45 W, Santa Monica, CA 90401`
- **Authentic Assets**: Real office photography (`office-1.jpeg` and `office-2.jpeg`) displaying the comfortable seating corner and uncluttered reading library.
- **Narrative Pillars**:
  1. *Quiet & Confidential Sanctuary*: Complete privacy for depth-oriented therapy.
  2. *Natural Light & Grounding Atmosphere*: Soft California coastal daylight and clean architectural lines.
  3. *In-Person & Telehealth Synergy*: Ease of in-person Santa Monica sessions plus encrypted California telehealth.

---

## 🔍 SEO Strategy

- **H1**: *"Therapy for Anxiety, Trauma, and Burnout in Santa Monica"* (Targets core clinical specialties and location).
- **Secondary Headings**: Incorporate *Santa Monica Practice*, *California Telehealth*, and *Integrative Clinical Modalities*.
- **Copy Natural Integration**: Keywords like *high-achieving adults*, *EMDR therapy*, *CBT*, *autonomic nervous system regulation*, and *West Los Angeles* are woven into compassionate, human copy without keyword stuffing.
- **JSON-LD Schema**: Embedded `PsychologicalClinic` schema with geo-coordinates (`34.0195, -118.4912`), accepted modalities, and contact info.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/<your-username>/maya-reynolds-therapy.git

# Navigate to project directory
cd maya-reynolds-therapy

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the application (or port 3000 if not in use).

### Production Build & Verification
```bash
# Verify static generation and TypeScript compilation
npm run build

# Start production server
npm run start
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to a public GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and import the repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Click **Deploy**. Your site will be live within 60 seconds with SSL enabled.

---

## 📹 Video Walkthrough

A comprehensive 5-minute video walkthrough demo script addressed directly to Dr. Maya Reynolds is included in [`video-script.md`](./video-script.md).
