Kairos marketing website built with **Next.js (App Router)** + **Tailwind** + **shadcn/ui**.

## Pages

### Main Pages
- `/` - Homepage (dark theme with glass header + globe hero + feature cards + stats + testimonials + CTA)
- `/solutions` - Solutions page (light/dark "AI knowledge base" layout with animated beams)
- `/contact` - Contact page (form + embedded map)

### Additional Pages
- `/about` - About page (mission, values, timeline, team CTA)
- `/services` - Services page (detailed service offerings with features)
- `/blog` - Blog page (article listings with categories and newsletter signup)

## Components

### Layout Components
- `SiteHeader` - Glassmorphic header with dropdown menus (dark/light variants)
- `SiteFooter` - Complete footer with links, newsletter, social media, contact info

### Homepage Components
- `HeroGlobe` - Animated globe with status cards
- `FeatureGrid` - 4 feature cards (AI, Security, Integration, Performance)
- `StatsSection` - Statistics display (companies, documents, uptime, countries)
- `TestimonialsSection` - Customer testimonials with avatars
- `CTASection` - Call-to-action section with gradient background

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Start editing pages in:
- `src/app/page.tsx`
- `src/app/solutions/page.tsx`
- `src/app/contact/page.tsx`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
