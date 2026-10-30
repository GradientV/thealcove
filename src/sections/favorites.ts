import { menu, type MenuItem } from '../data/menu.ts'
import { esc, html } from '../lib/html.ts'
import { img } from '../lib/photo.ts'
import { container, price } from './ui.ts'

function card(item: MenuItem, index: number): string {
  if (!item.feature) return ''
  return html`<li
    class="group w-[78%] max-w-xs shrink-0 snap-start sm:w-auto sm:max-w-none"
    style="transition-delay: ${(index % 3) * 90}ms"
    data-reveal
  >
    <div class="relative overflow-hidden rounded-t-full bg-sand">
      ${img(item.feature.photo, {
        width: 560,
        height: 700,
        sizes: '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 78vw',
        class: 'aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105',
      })}
      ${item.badge &&
      html`<span class="absolute bottom-4 left-4 rounded-full bg-cream px-3 py-1 text-[0.7rem] font-bold tracking-[0.14em] text-ink uppercase shadow-sm">
        ${esc(item.badge)}
      </span>`}
    </div>
    <div class="mt-5 flex items-baseline justify-between gap-4">
      <h3 class="font-display text-2xl font-semibold tracking-tight">${esc(item.name)}</h3>
      <p class="font-display text-xl text-alcove-700">${price(item.price)}</p>
    </div>
    <p class="mt-2 leading-relaxed text-ink/70">${esc(item.feature.blurb)}</p>
  </li>`
}

export function favorites(): string {
  const featured = menu.flatMap((section) => section.items).filter((item) => item.feature)
  return html`<section id="favorites" class="overflow-hidden bg-cream py-20 sm:py-28">
    <div class="${container}">
      <div class="flex flex-wrap items-end justify-between gap-x-10 gap-y-6" data-reveal>
        <div class="max-w-2xl">
          <p class="eyebrow text-alcove-700">House favorites</p>
          <h2 class="section-title mt-5">The plates everyone orders twice.</h2>
        </div>
        <p class="max-w-sm text-lg leading-relaxed text-ink/70">
          Made for sharing, though nobody here will judge you for keeping the truffle fries to yourself.
        </p>
      </div>
      <ul
        role="list"
        class="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
      >
        ${featured.map(card)}
      </ul>
    </div>
  </section>`
}
