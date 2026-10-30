import { photos } from '../data/photos.ts'
import { site } from '../data/site.ts'
import { html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'
import { img } from '../lib/photo.ts'
import { container } from './ui.ts'

export function patio(): string {
  return html`<section id="patio" class="relative isolate overflow-hidden text-cream">
    <div class="absolute inset-0 -z-10">
      ${img(photos.patio, { width: 1600, height: 1000, sizes: '100vw', class: 'size-full object-cover' })}
      <div class="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/70 to-ink/20"></div>
    </div>
    <div class="${container} py-24 sm:py-36">
      <div class="max-w-xl" data-reveal>
        <p class="eyebrow text-alcove-300">Open-air seating</p>
        <h2 class="section-title mt-5">Pull up a chair outside.</h2>
        <p class="mt-6 text-lg leading-relaxed text-cream/80">
          When the weather plays nice, our outdoor tables are the best seats on 49th Street. Margarita in hand, the
          neighborhood strolling by.
        </p>
        <div class="mt-10 rounded-3xl bg-ink/50 p-6 ring-1 ring-cream/15 backdrop-blur-md sm:p-8">
          <p class="flex items-center gap-3 font-display text-2xl font-semibold">${icon('users', 'size-6 text-marigold')} Coming with a crew?</p>
          <p class="mt-3 leading-relaxed text-cream/75">
            Birthdays, team nights, the whole group chat. Call ahead and we’ll do our best to fit everyone in.
          </p>
          <a class="btn btn-primary mt-6" href="${site.phoneHref}">${icon('phone', 'size-4')} ${site.phone}</a>
        </div>
      </div>
    </div>
  </section>`
}
