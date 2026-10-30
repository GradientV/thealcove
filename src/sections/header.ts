import { site } from '../data/site.ts'
import { esc, html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'
import { container, external, wordmark } from './ui.ts'

const NAV = [
  { href: '#favorites', label: 'Favorites' },
  { href: '#menu', label: 'Menu' },
  { href: '#bar', label: 'Bar & Brunch' },
  { href: '#visit', label: 'Visit' },
]

export function header(): string {
  return html`<header
    class="fixed inset-x-0 top-0 z-50 text-cream transition-[background-color,box-shadow] duration-300 data-scrolled:bg-ink/90 data-scrolled:shadow-lg data-scrolled:shadow-black/10 data-scrolled:backdrop-blur-md data-menu-open:bg-ink"
    data-header
  >
    <div class="${container} flex h-16 items-center justify-between gap-6 lg:h-20">
      ${wordmark()}
      <nav aria-label="Main" class="hidden lg:block">
        <ul class="flex items-center gap-9 text-[0.95rem] font-medium text-cream/80">
          ${NAV.map((link) => html`<li><a class="transition hover:text-cream" href="${link.href}">${esc(link.label)}</a></li>`)}
        </ul>
      </nav>
      <div class="flex items-center gap-2">
        <a class="btn btn-ghost hidden xl:inline-flex" href="${site.phoneHref}">${icon('phone', 'size-4')} ${site.phone}</a>
        <a class="btn btn-primary hidden sm:inline-flex" href="${site.links.order}" ${external}>Order online</a>
        <button
          type="button"
          class="group grid size-11 cursor-pointer place-items-center rounded-full border border-cream/20 transition hover:bg-cream/10 lg:hidden"
          aria-controls="mobile-nav"
          aria-expanded="false"
          aria-label="Open menu"
          data-nav-toggle
        >
          ${icon('menu', 'size-5 group-aria-expanded:hidden')} ${icon('close', 'hidden size-5 group-aria-expanded:block')}
        </button>
      </div>
    </div>
    <div id="mobile-nav" class="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-cream/10 bg-ink lg:hidden" hidden>
      <nav aria-label="Mobile" class="${container} flex flex-col py-6">
        ${NAV.map((link) => html`<a class="border-b border-cream/10 py-4 font-display text-4xl font-semibold" href="${link.href}">${esc(link.label)}</a>`)}
        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <a class="btn btn-primary" href="${site.links.order}" ${external}>${icon('bag', 'size-4')} Order pickup &amp; delivery</a>
          <a class="btn btn-ghost" href="${site.phoneHref}">${icon('phone', 'size-4')} Call ${site.phone}</a>
        </div>
        <p class="mt-8 text-cream/60">${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}</p>
      </nav>
    </div>
  </header>`
}
