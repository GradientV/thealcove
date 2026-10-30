const links = {
  order: 'https://order.online/store/the-alcove-restaurant-sunnyside-1387541',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=The+Alcove%2C+41-11+49th+St%2C+Sunnyside%2C+NY+11104',
  mapEmbed:
    'https://maps.google.com/maps?q=The%20Alcove%2C%2041-11%2049th%20St%2C%20Sunnyside%2C%20NY%2011104&z=16&output=embed',
  google: 'https://maps.google.com/?cid=15985440061536727629',
  instagram: 'https://www.instagram.com/thealcoveny/',
  facebook: 'https://www.facebook.com/thealcoveny/',
} as const

/**
 * Business details shared by the sections, the <head> tags and the structured data.
 * Checked Oct 30, 2026 against Google Maps, Facebook, Instagram and The Alcove's DoorDash storefront.
 */
export const site = {
  name: 'The Alcove',
  // TODO: confirm the launch domain. thealcoveny.com is registered to "The Alcove" (via Google Domains,
  // now Squarespace) — check it's theirs; if not, thealcovesunnyside.com was unregistered as of Oct 2026.
  url: 'https://www.thealcoveny.com',
  description:
    'Cozy tapas bar & gastropub in Sunnyside, Queens. Chimichurri truffle fries, skirt steak lollipops, tacos, margarita flights, weekend brunch and open-air seating.',
  phone: '(347) 813-4159',
  phoneHref: 'tel:+13478134159',
  address: {
    street: '41-11 49th St',
    locality: 'Sunnyside',
    region: 'NY',
    postalCode: '11104',
  },
  geo: { latitude: 40.745889, longitude: -73.9151262 },
  transit: '7 train to 46 St–Bliss St or 52 St–Lincoln Av',
  priceRange: '$$',
  instagramHandle: '@thealcoveny',
  links,
  /** Snapshot from Oct 30, 2026; refresh now and then. */
  reviews: [
    { score: '4.8', label: 'on Google · 1,300+ reviews', stars: true, href: links.google },
    { score: '100%', label: 'recommend on Facebook', stars: false, href: links.facebook },
  ],
  /** From The Alcove's Instagram bio. TODO: confirm the wording with the owner. */
  accolades: [
    'Twice named one of Yelp’s Top 100 Places to Eat in America',
    'Voted Best Brunch in NYC, 2019 & 2020',
    'Voted Best Fries in NYC, 2020',
    '4.8 stars from 1,300+ Google reviews',
  ],
} as const
