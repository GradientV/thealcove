import { hours } from '../data/hours.ts'
import { site } from '../data/site.ts'
import { summarizeWeek } from '../lib/hours.ts'
import { html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'
import { container, external, wordmark } from './ui.ts'

const heading = 'text-xs font-bold tracking-[0.22em] text-alcove-300 uppercase'
const link = 'transition hover:text-cream'

export function footer(): string {
  const { street, locality, region, postalCode } = site.address
  return html`<footer class="relative overflow-hidden bg-ink text-cream">
    <div class="${container} pt-16 pb-10 sm:pt-20">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          ${wordmark(true)}
          <p class="mt-6 max-w-sm leading-relaxed text-cream/65">
            Tapas, tacos, margaritas and weekend brunch on 49th Street in Sunnyside, Queens.
          </p>
          <div class="mt-6 flex gap-3">
            <a class="grid size-11 place-items-center rounded-full border border-cream/20 transition hover:bg-cream/10" href="${site.links.instagram}" ${external} aria-label="The Alcove on Instagram">
              ${icon('instagram', 'size-5')}
            </a>
            <a class="grid size-11 place-items-center rounded-full border border-cream/20 transition hover:bg-cream/10" href="${site.links.facebook}" ${external} aria-label="The Alcove on Facebook">
              ${icon('facebook', 'size-5')}
            </a>
          </div>
        </div>
        <div class="grid gap-10 text-cream/70 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h2 class="${heading}">Visit</h2>
            <address class="mt-4 leading-relaxed not-italic">
              <a class="${link}" href="${site.links.directions}" ${external}>${street}<br />${locality}, ${region} ${postalCode}</a>
            </address>
            <a class="${link} mt-3 inline-block" href="${site.phoneHref}">${site.phone}</a>
          </div>
          <div>
            <h2 class="${heading}">Hours</h2>
            <dl class="mt-4 space-y-2">
              ${summarizeWeek(hours).map(
                (row) => html`<div><dt class="text-cream">${row.days}</dt><dd class="text-sm">${row.hours}</dd></div>`,
              )}
            </dl>
          </div>
          <div>
            <h2 class="${heading}">Explore</h2>
            <ul role="list" class="mt-4 space-y-2.5">
              <li><a class="${link}" href="#menu">Menu</a></li>
              <li><a class="${link}" href="${site.links.order}" ${external}>Order pickup &amp; delivery</a></li>
              <li><a class="${link}" href="${site.links.instagram}" ${external}>Instagram ${site.instagramHandle}</a></li>
              <li><a class="${link}" href="${site.links.google}" ${external}>Reviews on Google</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="pointer-events-none mt-16 font-display text-[23vw] leading-[0.75] font-bold tracking-tight text-cream/[0.04] select-none lg:text-[15rem]" aria-hidden="true">
        Alcove
      </p>
      <div class="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© <span data-year>${new Date().getFullYear()}</span> ${site.name}. All rights reserved.</p>
        <p>Website by <a class="underline-offset-4 ${link} hover:underline" href="https://gradientv.com" ${external}>GradientV</a></p>
      </div>
    </div>
  </footer>`
}
