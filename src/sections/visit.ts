import { hours } from '../data/hours.ts'
import { site } from '../data/site.ts'
import { DAY_NAMES, formatHours, WEEK_ORDER } from '../lib/hours.ts'
import { html } from '../lib/html.ts'
import { icon, type IconName } from '../lib/icons.ts'
import { container, external, openStatus } from './ui.ts'

function detail(iconName: IconName, label: string, content: string): string {
  return html`<div class="flex gap-4">
    <dt class="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-alcove-500/15 text-alcove-700">
      ${icon(iconName, 'size-5')}<span class="sr-only">${label}</span>
    </dt>
    <dd class="text-lg leading-snug">${content}</dd>
  </div>`
}

const hoursTable = html`<table class="mt-5 w-full">
  <caption class="sr-only">Opening hours</caption>
  <tbody>
    ${WEEK_ORDER.map(
      (day) => html`<tr class="group border-t border-ink/10 data-today:font-semibold data-today:text-alcove-700" data-hours-day="${day}">
        <th scope="row" class="py-3 text-left font-medium">
          ${DAY_NAMES[day]}
          <span class="ml-2 hidden rounded-full bg-alcove-500 px-2 py-0.5 align-middle text-[0.65rem] font-bold tracking-wider text-cream uppercase group-data-today:inline">Today</span>
        </th>
        <td class="py-3 text-right tabular-nums">${formatHours(hours[day])}</td>
      </tr>`,
    )}
  </tbody>
</table>`

export function visit(): string {
  const { street, locality, region, postalCode } = site.address
  return html`<section id="visit" class="bg-cream py-20 sm:py-28">
    <div class="${container} grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-6 xl:col-span-5" data-reveal>
        <p class="eyebrow text-alcove-700">Visit</p>
        <h2 class="section-title mt-5">Find your way to the Alcove.</h2>
        <dl class="mt-10 space-y-6">
          ${detail('pin', 'Address', html`<a class="hover:underline" href="${site.links.directions}" ${external}>${street}<br />${locality}, ${region} ${postalCode}</a>`)}
          ${detail('train', 'Subway', site.transit)}
          ${detail('phone', 'Phone', html`<a class="hover:underline" href="${site.phoneHref}">${site.phone}</a>`)}
        </dl>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="btn btn-dark" href="${site.links.directions}" ${external}>${icon('pin', 'size-4')} Get directions</a>
          <a class="btn btn-outline" href="${site.links.order}" ${external}>${icon('bag', 'size-4')} Order online</a>
        </div>
        <div class="mt-12 rounded-[2rem] bg-sand p-6 ring-1 ring-ink/5 sm:p-8">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="font-display text-2xl font-semibold">Hours</h3>
            ${openStatus('bg-cream px-3.5 py-1.5 ring-1 ring-ink/10')}
          </div>
          ${hoursTable}
        </div>
      </div>
      <div class="lg:col-span-6 xl:col-span-7" data-reveal>
        <div class="h-full rounded-[2.5rem] border border-ink/15 p-2 sm:p-3">
          <div class="relative aspect-[4/5] h-full min-h-[26rem] overflow-hidden rounded-[2rem] bg-sand sm:aspect-square lg:aspect-auto">
            <iframe
              class="absolute inset-0 size-full saturate-[0.85]"
              src="${site.links.mapEmbed}"
              title="Map of The Alcove at ${street}, ${locality}, ${region}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>`
}
