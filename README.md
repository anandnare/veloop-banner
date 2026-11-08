# VELOOP Rewards – Banner Redesign (Task 08)

## Project Overview
A redesign of five promotional / feature banners for **VELOOP Rewards**, built as reusable React components on the `#161827` app background. Each banner has its own illustration, animation and CTA while sharing one `RewardBanner` shell.

## Banner List
| Banner | Route | Visual |
|---|---|---|
| Refer & Earn | `/refer` (`/how-it-works`) | Two friends, gift box, copyable referral code |
| Swap Center | `/swap` | VE ↔ SVE cards + wallet app |
| Bonus VEs | `/bonus` | Vault with VE coins and gems + activity chips |
| Captcha Tasks | `/captcha` | Laptop with captcha, gems, task → verify → reward flow |
| Exchange Center | `/exchange` | GEM card and VE card, 1 GEM = 100 VE |

## Features
- 100% width, heights clamped per device (Desktop 410–450px, Tablet 380–540px, Mobile 330–520px)
- Optimised PNG illustrations (src/assets) with subtle floating animation; small inline SVG icons for the Gem / Coin / swap steps
- Whole card is clickable; CTA has hover, active and keyboard focus states
- Copy-to-clipboard referral code; whole banner card is clickable
- `prefers-reduced-motion` respected; aria labels and alt text on all visuals
- Reward numbers are **dummy data** – replace with approved values before release

## Technology Stack
React 18, Vite, Bootstrap 5, CSS Modules, React Hooks, React Router, Lucide React, React Icons

## Installation
```bash
npm install
npm run dev        # http://localhost:5173
```

## Development Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |

## Folder Structure
```
src/
├── components/
│   ├── RewardBanner/          reusable shell (layout, sizing, CTA, themes)
│   ├── ReferEarnBanner/
│   ├── SwapCenterBanner/
│   ├── BonusVEsBanner/
│   ├── CaptchaTasksBanner/
│   ├── ExchangeCenterBanner/
│   └── shared/Svg.jsx         Gem, Coin, SwapArrows, gradients
├── hooks/useCountUp.js
├── pages/                     Home, Placeholder routes
├── styles/global.css          shared keyframes
├── assets/  utils/
```

## Responsive Design
- **Desktop (≥1024px):** two columns, height `clamp(410px, 34vw, 450px)`
- **Tablet (768–1023px):** two columns, 440px
- **Mobile (<768px):** illustration on top, then text and CTA; height auto within 330–520px

## Animation Details
Floating illustration (4s), one entrance fade, hover lift and CTA arrow nudge.

## Screenshots
_Add screenshots here (desktop / tablet / mobile)._

## Live Demo
_Add Vercel/Netlify link._

## GitHub Repository
_Add repository link._

## Author
_Your name_

## Deployment
`vercel.json` and `public/_redirects` are included so client-side routes work on Vercel and Netlify.
