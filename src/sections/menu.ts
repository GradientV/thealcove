import { menu, type MenuItem, type MenuSection } from '../data/menu.ts'
import { site } from '../data/site.ts'
import { esc, html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'
import { container, external, price } from './ui.ts'

function menuItem(item: MenuItem): string {
  return html`<li>
    <div class="flex items-baseline gap-3">
      <div class="min-w-0">
        <h4 class="inline text-[1.05rem] font-semibold">${esc(item.name)}</h4>
        ${item.badge &&
        html`<span class="ml-1.5 inline-block -translate-y-px rounded-full bg-alcove-500/15 px-2 py-0.5 align-middle text-[0.65rem] font-bold tracking-wider whitespace-nowrap text-alcove-700 uppercase">
          ${esc(item.badge)}
        </span>`}
      </div>
      <span class="min-w-4 flex-1 translate-y-[-0.3em] border-b border-dotted border-ink/25" aria-hidden="true"></span>
      <span class="font-display text-lg font-semibold tabular-nums">${price(item.price)}</span>
    </div>
    ${item.description && html`<p class="mt-1.5 max-w-prose text-[0.95rem] leading-relaxed text-ink/65">${esc(item.description)}</p>`}
  </li>`
}

/** Every panel is in the HTML (and visible without JavaScript); ui/menu-tabs.ts turns them into tabs. */
function panel(section: MenuSection): string {
  return html`<div
    id="menu-panel-${section.id}"
    role="tabpanel"
    aria-labelledby="menu-tab-${section.id}"
    tabindex="0"
    class="mt-14 first:mt-0 focus-visible:outline-offset-8"
  >
    <h3 class="font-display text-3xl font-semibold tracking-tight">${esc(section.title)}</h3>
    ${section.note && html`<p class="mt-2 text-ink/60">${esc(section.note)}</p>`}
    <ul role="list" class="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      ${section.items.map(menuItem)}
    </ul>
  </div>`
}

export function menuSection(): string {
  return html`<section id="menu" class="bg-sand py-20 sm:py-28">
    <div class="${container} grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div class="lg:col-span-4" data-reveal>
        <div class="lg:sticky lg:top-28">
          <p class="eyebrow text-alcove-700">The menu</p>
          <h2 class="section-title mt-5">Small plates, big appetites.</h2>
          <p class="mt-6 text-lg leading-relaxed text-ink/70">
            Latin flavors, bar-food classics and plenty to share. Every burger and sandwich comes with fries — upgrade to
            chimichurri truffle Parmesan, you won’t regret it.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a class="btn btn-dark" href="${site.links.order}" ${external}>${icon('bag', 'size-4')} Order online</a>
            <a class="btn btn-outline" href="${site.phoneHref}">${icon('phone', 'size-4')} Call to order</a>
          </div>
          <p class="mt-8 text-sm text-ink/55">
            Prices and availability can change. Please tell your server about any allergies.
          </p>
        </div>
      </div>
      <div class="min-w-0 lg:col-span-8" data-menu-tabs>
        <div
          role="tablist"
          aria-label="Menu sections"
          class="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          hidden
        >
          ${menu.map(
            (section, i) => html`<button
              type="button"
              role="tab"
              id="menu-tab-${section.id}"
              aria-controls="menu-panel-${section.id}"
              aria-selected="${String(i === 0)}"
              tabindex="${i === 0 ? 0 : -1}"
              class="shrink-0 cursor-pointer rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink/70 transition hover:border-ink/40 hover:text-ink aria-selected:border-ink aria-selected:bg-ink aria-selected:text-cream"
            >
              ${esc(section.title)}
            </button>`,
          )}
        </div>
        <div class="mt-6 rounded-[2rem] bg-cream p-6 shadow-sm ring-1 ring-ink/5 sm:p-10">
          ${menu.map(panel)}
        </div>
      </div>
    </div>
  </section>`
}
