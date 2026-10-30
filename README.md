# The Alcove — official website

Website for [The Alcove](https://www.instagram.com/thealcoveny/), a tapas bar and gastropub at 41-11 49th St, Sunnyside, Queens. Built and maintained by [GradientV](https://gradientv.com).

## Stack

- **Vite 6 + TypeScript + Tailwind CSS v4**, no UI framework.
- Every section is rendered to static HTML at build time: a small plugin in `vite.config.ts` swaps each `<!-- @section name -->` marker in `index.html` for the markup from `src/sections/`. The menu, hours and copy are in the page source, so search engines can read them without running JavaScript.
- The browser only runs about 2 KB (gzipped) of TypeScript, in `src/ui/`: the mobile menu, menu tabs, the live "Open now" status (New York time) and scroll reveals.
- Fonts (Fraunces and DM Sans) are self-hosted through Fontsource.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks, then builds to dist/
npm run preview   # serves dist/
```

Vite is pinned to v6 because it runs on Node 22.9. Vite 8 needs Node 20.19+ or 22.12+, so upgrade Node before bumping it.

## Updating content

| What | Where |
| --- | --- |
| Name, phone, address, links, review counts, awards | `src/data/site.ts` |
| Opening hours | `src/data/hours.ts` |
| Menu items, prices, badges, which dishes appear in "House favorites" | `src/data/menu.ts` |
| Photos | `src/data/photos.ts` |
| Page copy and layout | `src/sections/*.ts` |
| Colors and fonts | `@theme` in `src/styles.css` |

The dev server restarts on its own when files in `src/data` or `src/sections` change.

## Deploying

Vercel picks up `vercel.json` (build command, output folder, caching and security headers). Push a branch to get a preview deployment, then merge to `main` to go live.

## Before launch

- [ ] **Domain.** `thealcoveny.com` is registered to "The Alcove", but it forwards to an address with an invalid security certificate. Confirm it belongs to the client. If it doesn't, `thealcovesunnyside.com` was available on Oct 30, 2026. Then update `site.url`, `public/robots.txt` and `public/sitemap.xml`.
- [ ] **Photos.** Every photo is an Unsplash placeholder. Swap in The Alcove's own photos (`src/data/photos.ts`), including a 1200×630 one for link previews.
- [ ] **Menu.** Items and prices came from The Alcove's DoorDash storefront on Oct 30, 2026. Get the owner to sign off, and fill in the items that have no description.
- [ ] **Copy.** Confirm the drinks lineup, the brunch details and the awards wording (taken from their Instagram bio and from reviews).
- [ ] **Logo.** The arch mark is a stand-in. Use their official logo once we have the file.
- [ ] **Profiles.** Point the Google Business Profile website, Facebook "Website" field and Instagram bio link at the new domain. The current Facebook link (`thealcovesunnyside.cafestation.space`) redirects visitors to a scam page, so it should come down first.
- [ ] Optional: turn on Vercel Web Analytics.
