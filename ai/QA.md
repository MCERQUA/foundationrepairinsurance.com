# QA — foundationrepairinsurance.com

## Build
- `npm run build` => GREEN. Next.js 15.5.19. 18 routes, all static/SSG. Zero TS/lint errors.
- Compiled in ~28s.

## Pages (18 routes)
- / (homepage, 10 sections)
- /about, /contact, /quote
- /blog + 3 SSG posts
- /services/{general-liability, professional-liability, workers-comp, commercial-auto, equipment-tools}
- /robots.txt, /sitemap.xml, /_not-found

## Images
8 real JPEGs (1024x1024) in public/images, verified with `file`:
hero, underpinning, general-liability, workers-comp, equipment, commercial-building, inspection, cta-banner

## Forms
- Quote form (name=quote) + Contact form (name=contact)
- data-netlify + honeypot; static __forms.html for Netlify detection
- Webhook notifications wired in netlify.toml for both forms

## SEO
- Per-page title/description/canonical
- OG + Twitter cards in layout
- JSON-LD: InsuranceAgency/LocalBusiness (layout), InsuranceService + FAQPage (home), InsuranceService (service pages), Article (blog posts)
- robots.ts + sitemap.ts + public/llms.txt

## Design
- Light/bright corporate. Slate steel #2C4A6E primary, clay amber #D4722A accent.
- White / stone #F5F3EF / warm gray backgrounds. NOT dark.
- Montserrat headings + Source Sans 3 body (next/font)
- motion/react reveals, lenis smooth scroll. Responsive nav with mobile menu.

## Notes
- Blog renders from typed static data in src/lib/posts.ts (reliable); MDX source files also written to src/content/blog/ per spec.
