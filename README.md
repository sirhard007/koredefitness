# KoredeFitness

A modern fitness website for KoredeFitness and Coach Korede, built around the **Exercise Is Medicine** philosophy.

## Included

- Responsive fitness landing page
- Fixed navigation and animated hero
- Personal training and programme cards
- Coach profile and WhatsApp booking
- Event cards with full-detail viewing
- Image and motion gallery with lightbox navigation
- Fitness guides for nutrition, training, and mindset
- Mobile-friendly interactions and reduced-motion accessibility

## Technology

- Next.js 16
- React 19
- TypeScript
- Vinext and Vite
- Cloudflare-compatible Worker output

## Local setup

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

Run the automated validation with:

```bash
npm test
```

## Main content locations

- `app/page.tsx` — homepage content and sections
- `app/resources/[slug]/page.tsx` — fitness guide pages
- `app/globals.css` — responsive styling and animations
- `public/images/` — gallery, event, coach, hero, and guide media

## Before final business launch

Replace generated training media with approved KoredeFitness photography when available, then confirm the gym address, opening hours, Coach Korede's verified biography, certifications, and social-media links.

## Contact used in the website

WhatsApp: [08069724058](https://wa.me/2348069724058)
