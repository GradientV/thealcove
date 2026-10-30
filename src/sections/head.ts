import { hours } from '../data/hours.ts'
import { photos } from '../data/photos.ts'
import { site } from '../data/site.ts'
import { DAY_NAMES, toIsoTime, WEEK_ORDER } from '../lib/hours.ts'
import { esc, html } from '../lib/html.ts'

const title = `${site.name} | Tapas Bar & Gastropub in Sunnyside, Queens`

/** schema.org Restaurant data, so search engines show the official hours, address and menu. */
function structuredData(): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    url: `${site.url}/`,
    image: photos.hero.url(1200, 1200),
    telephone: site.phoneHref.replace('tel:', ''),
    priceRange: site.priceRange,
    servesCuisine: ['Tapas', 'Latin American', 'Mexican', 'American'],
    hasMenu: `${site.url}/#menu`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', ...site.geo },
    openingHoursSpecification: WEEK_ORDER.flatMap((day) => {
      const open = hours[day]
      return open
        ? [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: `https://schema.org/${DAY_NAMES[day]}`,
              opens: toIsoTime(open.opens),
              closes: toIsoTime(open.closes),
            },
          ]
        : []
    }),
    sameAs: [site.links.instagram, site.links.facebook],
  }
  // Escape "<" so nothing in the data can close the <script> tag early.
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function head(): string {
  const description = esc(site.description)
  const image = esc(photos.hero.url(1200, 630))
  return html`<title>${esc(title)}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${site.url}/" />
    <meta name="theme-color" content="#0f1f1d" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${site.url}/" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${structuredData()}</script>`
}
