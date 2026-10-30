import { hours } from '../data/hours.ts'
import { site } from '../data/site.ts'
import { DAY_NAMES, WEEK_ORDER } from '../lib/hours.ts'
import { html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'

export const container = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener"'

export function price(dollars: number): string {
  return `$${Number.isInteger(dollars) ? dollars : dollars.toFixed(2)}`
}

/** The arch mark: an alcove with a warm light inside. Also used for the favicon. */
export function logoMark(className: string, glow = 'fill-marigold'): string {
  return html`<svg class="${className}" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M7 37V19a13 13 0 0 1 26 0v18" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    <path class="${glow}" d="M14 37V21a6 6 0 0 1 12 0v16Z" />
  </svg>`
}

export function wordmark(large = false): string {
  return html`<a href="#top" class="inline-flex items-center gap-3" aria-label="${site.name}, back to top">
    ${logoMark(large ? 'size-12 text-alcove-400' : 'size-9 text-alcove-400')}
    <span class="leading-none">
      <span class="block font-display italic text-cream/70 ${large ? 'text-sm' : 'text-xs'}">The</span>
      <span class="block font-display font-bold uppercase tracking-[0.18em] ${large ? 'text-3xl' : 'text-xl'}">Alcove</span>
    </span>
  </a>`
}

const closedDays = WEEK_ORDER.filter((day) => !hours[day]).map((day) => `${DAY_NAMES[day]}s`)

/** Shown until main.ts swaps in the live "Open now · until 11 PM" label. */
const statusFallback = closedDays.length
  ? `Open ${7 - closedDays.length} days a week · closed ${closedDays.join(' & ')}`
  : 'Open 7 days a week'

/** Live open/closed chip; ui/open-status.ts keeps it current in New York time. */
export function openStatus(className = ''): string {
  return html`<p class="group inline-flex items-center gap-2.5 rounded-full text-sm font-medium ${className}" data-open-status>
    <span class="relative flex size-2.5 shrink-0">
      <span class="absolute hidden size-full rounded-full bg-alcove-400 opacity-70 group-data-[state=open]:inline-flex motion-safe:animate-ping"></span>
      <span class="relative inline-flex size-2.5 rounded-full bg-alcove-400 group-data-[state=closed]:bg-chili group-data-[state=closing]:bg-marigold"></span>
    </span>
    <span data-open-status-label>${statusFallback}</span>
  </p>`
}

export function stars(className = 'size-4'): string {
  return html`<span class="inline-flex gap-0.5 text-marigold" aria-hidden="true">${[1, 2, 3, 4, 5].map(() => icon('star', className))}</span>`
}
