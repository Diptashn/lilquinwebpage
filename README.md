# LilQuin Kitchen — Artisanal Cake Atelier 🎂

[![Website Status](https://img.shields.io/badge/Status-Active%20Demo-success?style=flat-square)](#)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-F16529?style=flat-square)](#tech-stack)
[![Design](https://img.shields.io/badge/Design-Editorial%20Artisanal-8B4513?style=flat-square)](#design-system--aesthetics)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-blue?style=flat-square)](#responsive-design)
[![Location](https://img.shields.io/badge/Studio-Bekasi%2C%20Indonesia-brightgreen?style=flat-square)](#studio--contact)

> *"Cakes that belong in the memory, not just the photo."*  
> LilQuin Kitchen is an artisanal cake atelier founded by head baker Yusi in Bekasi, West Java. Specializing in small-batch sponges, silky Swiss meringue buttercream, and fresh floral styling for weddings, celebrations, and bespoke events.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Pages & Architecture](#-pages--architecture)
- [Interactive Components](#-interactive-components)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started / Local Development](#-getting-started--local-development)
- [Studio & Contact](#-studio--contact)
- [Author & Credits](#-author--credits)

---

## 🌟 Overview

**LilQuin Kitchen** is a bespoke, multi-page showcase website crafted to provide an elegant, tactile digital experience for clients commissioning artisanal cakes. 

Unlike generic e-commerce templates, the site embraces an editorial, boutique aesthetic reflecting the atelier's craftsmanship: hand-piped details, intentional pacing (focusing on one wedding cake a day or three per week), and a strict "flavour first" philosophy.

---

## ✨ Key Features

- **🍰 Interactive Cake Estimator**: A live builder widget allowing visitors to select tier sizes, signature sponge flavors, and exterior finishes with instant visual feedback and pricing updates.
- **📱 Fully Responsive Design**: Carefully tuned layout breakpoints for desktop monitors, tablets ($\le 980\text{px}$), and mobile devices ($\le 600\text{px}$).
- **🎠 Custom Vanilla JS Carousels**: Lightweight, zero-dependency slide carousels with smooth opacity transitions, pagination indicator dots, touch/click controls, and auto-play.
- **📐 Clean Multi-Page Portfolio**: Dedicated galleries and detail pages for Weddings, Birthdays, and Bespoke sculpted creations.
- **💬 Direct WhatsApp Conversion**: Integrated direct ordering and tasting consultation links targeting WhatsApp (`wa.me`), Instagram, and TikTok.
- **⚡ Ultra-Fast & Lightweight**: Built with pure semantic HTML5, Vanilla CSS3, and modern ES6 JavaScript—zero external bundle weight, zero framework overhead.

---

## 📑 Pages & Architecture

| Page | File | Description |
| :--- | :--- | :--- |
| **Home / Atelier** | [`index.html`](index.html) | Atelier storefront featuring the hero section, collection highlights, live cake price builder, process timeline, masonry gallery, client testimonials, and studio contact. |
| **Wedding Cakes** | [`lilquin-wedding.html`](lilquin-wedding.html) | Showcase for 2-tier and 3-tier heirloom wedding cakes, consultation workflow, floral styling, flavor pairings, and tasting booking. |
| **Celebration / Birthday** | [`lilquin-birthday.html`](lilquin-birthday.html) | 48-hour celebration icons, confetti sponges, hand-piped custom messages, and cake photo carousel. |
| **Bespoke Commissions** | [`lilquin-bespoke.html`](lilquin-bespoke.html) | Sculpted, color-matched, structural cakes for brand launches, press days, and tailored celebrations. |
| **Our Story** | [`lilquin-our-story.html`](lilquin-our-story.html) | Narrative chronicle of LilQuin Kitchen's journey from a humble Bekasi home kitchen with a hand mixer to an intentional studio. |

---

## 🎛️ Interactive Components

### 1. Live Cake Estimator (`index.html`)
Allows customers to preview their custom tier configuration and calculate live estimates:
- **Sizes**: 6" (10 slices), 8" (20 slices), 3-tier wedding stack.
- **Signature Flavours**: Vanilla & Brown Butter, Pistachio & Raspberry, Valrhona Chocolate, Lemon & Elderflower.
- **Finishes**: Silk buttercream, fresh seasonal florals, hand-painted detailing.
- Dynamic DOM updating without page reloads.

### 2. Carousel Component ([`assets/js/carousel.js`](assets/js/carousel.js))
Modular vanilla JavaScript slider:
- Automatically targets any container with the `[data-carousel]` attribute.
- Dynamically generates accessible dot buttons with `aria-label`.
- Auto-advances every 6 seconds, pausing and resetting seamlessly upon manual user interaction.

### 3. Responsive Navigation ([`assets/js/shared.js`](assets/js/shared.js))
- Animated mobile hamburger drawer toggle.
- Outside-click dismiss and menu link auto-closing.
- Initialization guard (`window.__lilquinSharedInit`) preventing accidental duplicate event bindings.

---

## 🎨 Design System & Aesthetics

The design evokes an artisanal French/English bakery with warm tones and editorial typography.

### Typography
- **Headings & Display**: `Fraunces` (Google Fonts) — Soft, high-contrast serif with optical sizing for a luxurious, editorial look.
- **Body & Accents**: `Jost` (Google Fonts) — Clean, geometric sans-serif delivering legibility across screen sizes.

### Color Palette
- **Background Linen**: `#FBF7F0` / `#FFFDF8` (Soft warm cream)
- **Primary Ink**: `#231A12` (Deep espresso charcoal)
- **Muted Text**: `#705E51` (Warm earth tone)
- **Card Fill**: `#F5ECE0` (Subtle sand)
- **Accent Dark**: `#7C3B24` (Terracotta / baked copper)
- **Sage Olive**: `#4A5443` (Natural herb green)
- **Borders & Dividers**: `rgba(74, 55, 37, 0.16)`

---

## 📁 Project Structure

```text
lilquinwebpage/
├── README.md                     # Project documentation & overview
├── index.html                    # Main landing page & cake builder
├── lilquin-wedding.html          # Wedding cakes portfolio & tasting info
├── lilquin-birthday.html         # Birthday & celebration cakes
├── lilquin-bespoke.html          # Bespoke & sculpted commissions
├── lilquin-our-story.html        # Atelier backstory & head baker profile
│
└── assets/
    ├── css/
    │   └── style.css             # Unified CSS design system & global tokens
    ├── js/
    │   ├── shared.js             # Mobile drawer navigation & global scripts
    │   └── carousel.js           # Reusable vanilla JS carousel engine
    └── images/
        └── logo.png              # LilQuin Kitchen atelier insignia
```

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 (W3C compliant, accessible heading structure, ARIA labels).
- **Styling**: Vanilla CSS3 (CSS Custom Properties, Flexbox, Multi-column Masonry, CSS Grid, media queries).
- **Scripting**: Pure ECMAScript (Vanilla JS, DOM APIs, event delegation).
- **Fonts & Assets**: Google Fonts CDN (`Fraunces`, `Jost`), Unsplash photography assets.

---

## 🚀 Getting Started / Local Development

Because this project is built entirely on native web standards, it requires **no installation, build steps, or package managers**.

### Option 1: Direct File Preview
Simply double-click [`index.html`](index.html) or open it directly in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: VS Code Live Server
1. Open the project folder in Visual Studio Code or your IDE.
2. If using VS Code, install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click [`index.html`](index.html) and select **Open with Live Server**.

### Option 3: Local HTTP Server

**Using Python 3:**
```bash
# From the project root:
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

**Using Node (`npx`):**
```bash
# Using serve
npx -y serve .

# Or using http-server
npx -y http-server . -p 8000
```

---

## 📍 Studio & Contact

- **Atelier**: LilQuin Kitchen
- **Location**: Komp. Depnaker, Bekasi, Jawa Barat, Indonesia
- **WhatsApp**: [+62 897-7555-739](https://wa.me/628977555739)
- **Instagram**: [@lilquin_kitchen](https://instagram.com/lilquin_kitchen)
- **TikTok**: [@lilquin_kitchen](https://tiktok.com/@lilquin_kitchen)
- **Email**: lilquinkitchen@gmail.com

---

## 👤 Author & Credits

- **Developer & Maintainer**: Diptashn ([@diptashn](https://github.com/diptashn))
- **Email**: pradiptaspermadi@gmail.com
- **Business Owner & Head Baker**: Yusi (LilQuin Kitchen)

---

*© 2026 LilQuin Kitchen. Hand-crafted with passion & authentic flavour.*
