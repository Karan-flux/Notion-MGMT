# NOTION MGMT — Website Redesign Concept

> **"Attention is temporary. Community creates demand."**  
> An unsolicited, world-class digital flagship redesign concept for **NOTION MGMT** (London, UK) — the creator marketing, music, live entertainment, and digital culture agency.

[![Built with React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

---

## ⚡ Overview

NOTION MGMT is a London-based digital marketing agency operating across the UK, Europe, and global entertainment circuits. They specialize in high-impact creator campaigns, electronic music releases, club culture, and live festival moments.

This concept redesign elevates their digital presence with:
- **Bold Editorial Art Direction**: High-impact typography paired with nocturnal obsidian dark tones and high-voltage **Electric Lime (`#AAE41B`)** accents.
- **Dynamic Interaction Design**: Dual counter-scrolling marquees, interactive desktop hover stage previewer, filterable asymmetric work grids, and in-app modal reading readers.
- **Grounded Authenticity**: All case study metrics, services, and founder bios reflect real operations (*Franky Rizardo, Alan Fitzpatrick, Temper City, Eastern Electrics, Superman Soundtrack, Lauren Good, Ben Good, Sam Good*).

---

## 🎨 Design System

| Token | Value | Description |
| :--- | :--- | :--- |
| **Accent Electric Lime** | `#AAE41B` | High-voltage neon green accent |
| **Background Base** | `#09090B` | Deep nocturnal obsidian |
| **Surface Dark** | `#0C0C0F` / `#121216` | Layered cards & stage backdrops |
| **Typography Display** | `Antonio`, `Syne` | Ultra-punchy, editorial headings |
| **Typography Sans** | `Plus Jakarta Sans` | Clean, modern geometric body text |

---

## 🚀 Key Sections & Architecture

- **Navbar**: Sticky glassmorphic header, live London time beacon, full-screen mobile drawer, and CTA trigger.
- **Hero**: Dynamic visual showcases with electronic festival imagery, live London GMT clock, and primary action buttons.
- **Brand Manifesto**: High-energy dual counter-scrolling marquees (*"DON'T FOLLOW THE FEED. INTERRUPT IT."*) and 3 strategic agency pillars.
- **7 Core Capabilities**: Interactive desktop split hover stage and mobile accordion detailing *Creator Campaigns, Artist & Music Campaigns, Event Campaigns, Social Media Management, Content Production, Influencer Gifting, and Paid Amplification*.
- **Selected Work**: Filterable asymmetric portfolio grid with verified statistics (e.g. *27M+ reach, 1M+ shares, 23M+ views, 32M+ views*) and rich case study modals.
- **Strategic Approach**: 4-stage pipeline sequencer (*Understand $\to$ Create $\to$ Distribute $\to$ Amplify*).
- **Industry Experience**: 6 cross-sector pillars and verified label/festival partner cards.
- **The Editorial Desk**: Cultural insights and articles with an in-app full reading experience modal.
- **Final CTA**: High-impact *"LET'S MAKE IT MOVE"* conversion section.
- **Accessible Contact Suite**: Client inquiry form with budget tiers, project type selector, London address, and email fallbacks.
- **Footer**: Vector brand wordmark, quick directory, verified socials, and back-to-top trigger.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Karan-flux/Notion-MGMT.git

# Navigate into the project directory
cd Notion-MGMT

# Install dependencies
npm install
```

### Local Development
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
Notion-MGMT/
├── index.html                   # HTML entrypoint, SEO meta, Google Fonts
├── src/
│   ├── assets/                  # Icons and images
│   ├── components/
│   │   ├── BrandManifesto.tsx    # Dual marquee & manifesto pillars
│   │   ├── BrandWordmark.tsx     # Authentic vector SVG wordmark
│   │   ├── ContactSection.tsx    # Accessible contact inquiry form
│   │   ├── EditorialInsights.tsx # Editorial desk & article modal
│   │   ├── FinalCTA.tsx          # Conversion display section
│   │   ├── Footer.tsx            # Comprehensive footer with address
│   │   ├── Hero.tsx              # Hero centerpiece with London clock
│   │   ├── IndustryExperience.tsx# Partner sectors & festival cards
│   │   ├── Navbar.tsx            # Sticky navigation & mobile drawer
│   │   ├── SelectedWork.tsx      # Portfolio grid & case study modals
│   │   ├── ServicesSection.tsx   # 7 core capabilities & hover stage
│   │   └── StrategicApproach.tsx # 4-stage workflow sequencer
│   ├── data/
│   │   └── notionData.ts         # Verified agency data & case studies
│   ├── App.tsx                   # Main layout coordinator
│   ├── index.css                 # Tailwind CSS v4 design tokens & theme
│   └── main.tsx                  # Application mount point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License & Attribution

Concept redesign created for **NOTION MGMT** (London, UK).  
All brand trademarks, artist names, and campaign references belong to their respective copyright holders.
