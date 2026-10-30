import { site } from '../data/site.ts'
import { esc, html } from '../lib/html.ts'
import { icon } from '../lib/icons.ts'

/**
 * Scrolling ribbon of awards. The list is repeated so the loop never shows a gap on wide
 * screens; only the first copy is read by screen readers, and reduced motion shows it static.
 */
export function highlights(): string {
  const strip = (copy: number) => html`<ul
    class="flex shrink-0 items-center ${copy ? 'motion-reduce:hidden' : 'motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-2'}"
    ${copy > 0 && 'aria-hidden="true"'}
  >
    ${site.accolades.map(
      (text) => html`<li class="flex items-center whitespace-nowrap">
        <span class="px-6 sm:px-8">${esc(text)}</span>${icon('sparkle', 'size-4 text-ink/45')}
      </li>`,
    )}
  </ul>`

  return html`<section aria-label="Awards and reviews" class="overflow-hidden bg-marigold py-4 text-ink sm:py-5">
    <div class="flex w-max font-display text-lg italic sm:text-xl motion-safe:animate-marquee motion-reduce:w-auto">
      ${[0, 1, 2, 3].map(strip)}
    </div>
  </section>`
}
