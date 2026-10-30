import { photos } from '../data/photos.ts'
import { site } from '../data/site.ts'
import { html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'
import { img } from '../lib/photo.ts'
import { container, external, logoMark, openStatus, stars } from './ui.ts'

/** Spinning sticker on the hero photo. textLength matches the ring's circumference (2π × 45). */
const badge = html`<div
  class="absolute -bottom-6 -left-2 grid size-28 place-items-center rounded-full bg-marigold text-ink shadow-2xl shadow-black/40 sm:-left-8 sm:size-36"
  aria-hidden="true"
>
  <svg viewBox="0 0 120 120" class="absolute inset-0 size-full motion-safe:animate-[spin_30s_linear_infinite]">
    <defs><path id="badge-ring" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" /></defs>
    <text class="fill-current text-[9.5px] font-bold uppercase tracking-[0.18em]">
      <textPath href="#badge-ring" textLength="282">Voted best fries &amp; brunch in NYC ·</textPath>
    </text>
  </svg>
  ${logoMark('relative size-10 text-ink sm:size-12', 'fill-ink/25')}
</div>`

/** Faint concentric arches behind the hero copy. */
const arches = html`<svg
  class="pointer-events-none absolute -bottom-32 -left-40 -z-10 w-[46rem] text-cream/[0.05]"
  viewBox="0 0 400 400"
  fill="none"
  stroke="currentColor"
  aria-hidden="true"
>
  <path d="M20 400V200a180 180 0 0 1 360 0v200" />
  <path d="M60 400V200a140 140 0 0 1 280 0v200" />
  <path d="M100 400V200a100 100 0 0 1 200 0v200" />
  <path d="M140 400V200a60 60 0 0 1 120 0v200" />
</svg>`

export function hero(): string {
  return html`<section id="top" class="grain relative isolate overflow-hidden bg-ink text-cream">
    <div class="pointer-events-none absolute -top-56 left-1/4 -z-10 size-[48rem] rounded-full bg-alcove-500/20 blur-[120px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -right-32 -bottom-48 -z-10 size-[32rem] rounded-full bg-marigold/15 blur-[120px]" aria-hidden="true"></div>
    ${arches}
    <div class="${container} grid items-center gap-16 pt-28 pb-24 sm:pt-36 lg:grid-cols-12 lg:gap-12 lg:pt-40 lg:pb-32">
      <div class="lg:col-span-7">
        <p class="eyebrow text-alcove-300">Tapas bar &amp; gastropub · Sunnyside, Queens</p>
        <h1 class="mt-6 font-display text-[2.75rem] leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Tapas, tacos &amp; margaritas, <em class="font-normal text-alcove-300">tucked away</em> in Sunnyside.
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
          A cozy neighborhood spot on 49th Street for chimichurri truffle fries, skirt steak lollipops, weekend brunch and
          one more round on the patio.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="btn btn-primary" href="#menu">See the menu ${icon('arrow-right', 'size-4')}</a>
          <a class="btn btn-ghost" href="${site.links.order}" ${external}>Order pickup &amp; delivery ${icon('arrow-up-right', 'size-4')}</a>
        </div>
        <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
          ${openStatus('border border-cream/15 bg-cream/5 px-4 py-2')}
          ${site.reviews.map(
            (review) => html`<a class="inline-flex items-center gap-2 text-cream/70 transition hover:text-cream" href="${review.href}" ${external}>
              <span class="font-display text-lg font-semibold text-cream">${review.score}</span>
              ${review.stars && stars('size-3.5')}
              <span>${review.label}</span>
            </a>`,
          )}
        </div>
      </div>
      <div class="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none">
        <div class="rounded-t-full border border-cream/20 p-2 sm:p-3">
          <div class="overflow-hidden rounded-t-full bg-ink-800">
            ${img(photos.hero, {
              width: 720,
              height: 900,
              sizes: '(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 90vw',
              class: 'aspect-[4/5] w-full object-cover',
              priority: true,
            })}
          </div>
        </div>
        ${badge}
      </div>
    </div>
  </section>`
}
