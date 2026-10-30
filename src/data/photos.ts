import { unsplash, type Photo } from '../lib/photo.ts'

/**
 * Placeholder photography from Unsplash (free to use under the Unsplash License).
 * TODO: swap each one for The Alcove's own photos before launch — drop the files in
 * public/images and use `local('/images/fries.jpg', 'Chimichurri truffle fries')` from lib/photo.ts.
 */
export const photos = {
  hero: unsplash('photo-1556855810-ac404aa91e85', 'A salt-rimmed margarita with a lime wedge on a softly lit bar'),
  fries: unsplash('photo-1639744091981-2f826321fae6', 'Fries tossed with herbs and Parmesan in a paper boat'),
  skewers: unsplash('photo-1546563730-63db5650a965', 'Two grilled steak skewers with a lemon wedge'),
  wings: unsplash('photo-1567620832903-9fc6debc209f', 'Glazed chicken wings with scallions and a dipping sauce'),
  guacamole: unsplash('photo-1680992071073-cb1696ba8d3e', 'Guacamole in a stone molcajete with tortilla chips'),
  tacos: unsplash('photo-1599974579688-8dbdd335c77f', 'Beef tacos topped with diced onion and cilantro'),
  burger: unsplash('photo-1783099500460-15db4038e4a0', 'Burgers and cocktails on a table at night'),
  cheers: unsplash('photo-1725268093455-061ff2ed6c08', 'Friends clinking cocktail glasses'),
  bloodyMary: unsplash('photo-1741241514686-b7108b66f8bb', 'A Bloody Mary garnished with lemon and greens'),
  patio: unsplash('photo-1759866614095-d867221143f7', 'Outdoor tables under string lights at dusk'),
} satisfies Record<string, Photo>
