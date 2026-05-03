# Gauge

The modern way to know what your car is telling you. Built for UTSA students and their families.

This is a Next.js 14 web prototype covering the full Gauge product surface: public landing page, student mobile app, parent Family Loop, and the B2B mechanic partner portal.

## What's inside

```
app/
├── page.tsx             Landing page (hero, waitlist, pricing, CTAs)
├── student/             Student mobile app
│   ├── page.tsx         Dashboard with live DTCs
│   ├── shops/           Nearby vetted mechanics + map
│   ├── learn/           DIY video SOP library
│   └── settings/        Privacy + Family Loop toggles
├── parent/              Parent Family Loop dashboard
└── mechanic/            B2B partner portal (leads, KPIs, listing preview)

components/
├── Logo.tsx             G mark + GAUGE wordmark (reusable SVG)
└── PhoneFrame.tsx       iPhone-style shell with bottom nav

lib/
├── dtc-database.ts      Real OBD-II codes translated to plain English
└── shops.ts             Mock partner shop data
```

## Run locally

You need Node.js 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

That's it. The landing page is the home route, and the nav at the top of each phone preview lets you jump between Student, Parent, and Mechanic views.

## Deploy to Vercel (recommended path)

This is the free, fast way. Takes ~15 minutes end-to-end.

### Step 1: Push to GitHub

```bash
# From inside the gauge-app directory:
git init
git add .
git commit -m "Initial Gauge prototype"

# Create a new repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/gauge-app.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub (free)
2. Click "Add New Project"
3. Import your `gauge-app` repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click "Deploy"

Your site is live at `https://gauge-app.vercel.app` (or whatever name Vercel assigns). Every future `git push` auto-deploys.

### Step 3 (optional): Custom domain

If you want `gauge.app` or `getgauge.com`:
1. Buy the domain from Namecheap / Cloudflare (~$10-15/yr)
2. In Vercel project settings → Domains → add it
3. Vercel gives you DNS records to paste into your registrar
4. Live in ~10 minutes

## Brand system

Tailwind theme tokens (`tailwind.config.js`) match the Gauge brand spec:

- `gauge-black` — `#0F1419` (primary surface, heads)
- `gauge-blue` — `#7DB9E8` (signal color, CTAs, accents)
- `gauge-blueLight` — `#E8F2FB` (subtle fills)
- `gauge-blueDark` — `#2C5F8D` (text on blue backgrounds)
- `gauge-blueBg` — `#F5FAFE` (card highlight backgrounds)
- `gauge-gray` — `#6B7280` (body secondary)
- `gauge-grayLight` — `#F4F6F8` (surface tertiary)
- `gauge-border` — `#E5E7EB` (0.5px borders)

The G logo lives in one place: `components/Logo.tsx`. Edit the SVG path there and it updates everywhere (header, splash, favicon, homescreen icon).

## What's fake vs. real

**Real in this prototype:**
- Full routing across 6 pages
- Tailwind-powered responsive layout
- Interactive state (privacy toggles actually work)
- Real OBD-II DTC database with plain English translations
- Shop data modeled as real objects, ready for backend swap
- TypeScript throughout

**Not yet real (Path 2 scope):**
- Email waitlist doesn't send anywhere — wire to Supabase or Resend
- No user accounts / auth
- No actual OBD-II dongle connection (that's Path 3)
- Shop data is mocked, not queried from a DB

## Next steps if this takes off

Upgrading from Path 1 (this prototype) to Path 2 (real product) means adding:

1. **Supabase** for auth, user data, waitlist storage (free tier fine to start)
2. **Resend** for transactional email when waitlist hits thresholds
3. **Stripe** for the $5/mo subscription and $49.99 device checkout
4. **A real mechanic signup flow** so shops can self-onboard to the partner portal

Everything in the current codebase is structured to make those swaps clean — the DTC database and shop data both sit behind simple `lib/` functions that can swap `MOCK_SHOPS` for a Supabase query without touching the UI.

## Credits

Built by Kevin Avila and Malachi Salas for Enterprise/Commercial Development, Spring 2026.

Prototype developed with Claude (Anthropic).
