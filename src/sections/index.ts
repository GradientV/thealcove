import { bar } from './bar.ts'
import { favorites } from './favorites.ts'
import { footer } from './footer.ts'
import { head } from './head.ts'
import { header } from './header.ts'
import { hero } from './hero.ts'
import { highlights } from './highlights.ts'
import { menuSection } from './menu.ts'
import { patio } from './patio.ts'
import { visit } from './visit.ts'

const SECTIONS: Record<string, () => string> = {
  head,
  header,
  hero,
  highlights,
  favorites,
  menu: menuSection,
  bar,
  patio,
  visit,
  footer,
}

const MARKER = /<!--\s*@section\s+([\w-]+)\s*-->/g

/** Replaces every `<!-- @section name -->` in index.html with that section's markup. */
export function renderSections(html: string): string {
  return html.replace(MARKER, (_marker, name: string) => {
    const render = SECTIONS[name]
    if (!render) throw new Error(`index.html references an unknown section: "${name}"`)
    return render()
  })
}
