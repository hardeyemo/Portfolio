# Adebiyi Idris, portfolio

Next.js (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion + GSAP + Resend + Zod.

## Run it
```bash
npm install
cp .env.example .env.local   # add your RESEND_API_KEY
npm run dev
```

## What to fill in
1. `src/data/portfolio.ts`: all content lives here. Add your RA Homes `repo` URL to show the "View code" button.
2. Screenshots: save 4 images to `public/projects/ra-homes/` as `home.png`, `listings.png`, `property.png`, `submit.png` (16:10 works best). Until then a placeholder shows.
3. `.env.local`: `RESEND_API_KEY`, and a verified sender in `CONTACT_FROM_EMAIL` for production.
4. `public/Adebiyi_Idris_Resume.pdf` is your uploaded résumé. It includes your phone number. Replace it with a version without one if you don't want it public.

## Adding to an existing project instead
Copy `src/components`, `src/data`, `src/app/api/contact`, the CSS variables and `@keyframes rise` block from `globals.css`, and the `colors`/`fontFamily` entries from `tailwind.config.ts`. Add `framer-motion gsap resend zod`.
