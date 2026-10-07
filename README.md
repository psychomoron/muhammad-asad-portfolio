# Muhammad Asad Portfolio

Starter structure for the portfolio build.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- GSAP + ScrollTrigger later for the animation layer
- Netlify for hosting

No framework is required.

## Structure

```text
muhammad-asad-portfolio/
├── index.html
├── README.md
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── animations.js
│   └── projects.js
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── muhammad-asad.jpg
    │   └── projects/
    │       ├── legacare/
    │       ├── parmint/
    │       ├── mydermadream/
    │       ├── purelia/
    │       └── pelsbarn/
    ├── icons/
    ├── video/
    └── fonts/
```

## Where to put screenshots

Put original/high-resolution project files into the matching folder:

- `assets/images/projects/legacare/`
- `assets/images/projects/parmint/`
- `assets/images/projects/mydermadream/`
- `assets/images/projects/purelia/`
- `assets/images/projects/pelsbarn/`

Use clear filenames, for example:

```text
legacare-pdp-desktop.webp
legacare-cart-drawer.webp
legacare-offer-mobile.webp
legacare-funnel-map.webp

parmint-pdp.webp
parmint-offer-selector-mobile.webp
parmint-funnel-map.webp
parmint-integrations.webp
parmint-webhooks.webp
parmint-performance-dashboard.webp
```

## Local preview

The simplest option in VS Code is the Live Server extension.

Open this folder and launch `index.html` with Live Server.

## Before launch

Replace the placeholder email in `index.html`:

```html
mailto:hello@example.com
```

We'll also add:
- real screenshots
- GSAP
- full hero animation
- project transitions
- case-study interactions
- SEO/social metadata
- favicon
- Netlify config if needed

## Asset mapping currently used

- **Legacare**
  - `legacare-cart-desktop.png` — main storefront / cart visual
  - `legacare.menu.png` — best-sellers storefront visual
  - `legacare-offer-mobile.png` — mobile offer / subscription UI
  - `legacare-funnel-map.png` — funnel architecture
- **Parmint**
  - `parmint-gamified-popup.png` — main frontend visual
  - `parmint-offer-mobile.png` — mobile subscription selector
  - `parmint-integrations.png` — integration stack
  - `parmint-webhooks.png` — webhook/postback configuration
  - `parmint-funnel-map.png` — full funnel architecture
- **MyDermaDream**
  - `mdd-funnel-map.png` — affiliate funnel architecture
- **Purelia**
  - `purelia-funnel-map.png` — funnel architecture
  - `purelia-performance-dashboard.png` — performance dashboard
- **Pelsbarn**
  - `pelsbarn-custom-variants-pdp.png` — custom PDP / offer variant UI

The images above are now wired into `index.html`; you do not need to add them manually.
