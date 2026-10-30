import { photos } from '../data/photos.ts'
import { esc, html } from '../lib/html.ts'
import { icon, type IconName } from '../lib/icons.ts'
import { img, type Photo } from '../lib/photo.ts'
import { container } from './ui.ts'

interface Feature {
  icon: IconName
  kicker: string
  title: string
  body: string
  tags: string[]
  photo: Photo
}

// TODO: confirm the drink lineup and brunch details with the owner (from reviews and their own posts).
const FEATURES: Feature[] = [
  {
    icon: 'martini',
    kicker: 'The bar',
    title: 'Margaritas, mojitos & flights',
    body: 'Can’t pick a flavor? Don’t. Margarita and mojito flights let the whole table taste around, and there’s always a cold beer for the purists.',
    tags: ['Margarita flights', 'Mojito flights', 'Cold beer'],
    photo: photos.cheers,
  },
  {
    icon: 'sun',
    kicker: 'Saturday & Sunday from 11 AM',
    title: 'Weekend brunch',
    body: 'Voted Best Brunch in NYC two years running. Bring the crew, order a round of Bloody Marys, and settle in for the afternoon.',
    tags: ['Best Brunch in NYC ’19 & ’20', 'Bloody Marys', 'Open at 11 AM'],
    photo: photos.bloodyMary,
  },
]

function featureCard(feature: Feature, index: number): string {
  return html`<article
    class="group relative overflow-hidden rounded-[2rem] bg-ink-800 ring-1 ring-cream/10"
    style="transition-delay: ${index * 120}ms"
    data-reveal
  >
    <div class="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
      ${img(feature.photo, {
        width: 960,
        height: 600,
        sizes: '(min-width: 1024px) 40vw, 92vw',
        class: 'size-full object-cover transition duration-700 group-hover:scale-105',
      })}
      <div class="absolute inset-0 bg-linear-to-t from-ink-800 via-ink-800/20 to-transparent"></div>
    </div>
    <div class="relative -mt-20 p-7 sm:p-10">
      <p class="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-marigold uppercase">
        ${icon(feature.icon, 'size-4')} ${esc(feature.kicker)}
      </p>
      <h3 class="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">${esc(feature.title)}</h3>
      <p class="mt-4 max-w-lg leading-relaxed text-cream/75">${esc(feature.body)}</p>
      <ul role="list" class="mt-7 flex flex-wrap gap-2">
        ${feature.tags.map((tag) => html`<li class="rounded-full border border-cream/15 px-3.5 py-1.5 text-sm text-cream/80">${esc(tag)}</li>`)}
      </ul>
    </div>
  </article>`
}

export function bar(): string {
  return html`<section id="bar" class="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-28">
    <div class="pointer-events-none absolute top-1/3 -left-40 -z-10 size-[36rem] rounded-full bg-alcove-500/15 blur-[120px]" aria-hidden="true"></div>
    <div class="${container}">
      <div class="max-w-3xl" data-reveal>
        <p class="eyebrow text-alcove-300">Bar &amp; brunch</p>
        <h2 class="section-title mt-5">Come for the fries. Stay for the flights.</h2>
      </div>
      <div class="mt-14 grid gap-6 lg:grid-cols-2">${FEATURES.map(featureCard)}</div>
    </div>
  </section>`
}
