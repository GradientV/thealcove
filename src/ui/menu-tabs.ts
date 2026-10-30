/**
 * Turns the stacked menu panels into tabs (WAI-ARIA tabs pattern: arrow keys, Home and End).
 * Without JavaScript the tab list stays hidden and every panel shows.
 */
export function initMenuTabs(): void {
  const root = document.querySelector<HTMLElement>('[data-menu-tabs]')
  const tablist = root?.querySelector<HTMLElement>('[role="tablist"]')
  if (!root || !tablist) return

  const tabs = [...tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]')]
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls') ?? ''))

  const select = (index: number, focus = false) => {
    tabs.forEach((tab, i) => {
      const selected = i === index
      tab.setAttribute('aria-selected', String(selected))
      tab.tabIndex = selected ? 0 : -1
      const panel = panels[i]
      if (panel) panel.hidden = !selected
    })
    if (focus) {
      tabs[index].focus()
      tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest' })
    }
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i))
    tab.addEventListener('keydown', (event) => {
      const last = tabs.length - 1
      const keys: Partial<Record<string, number>> = {
        ArrowRight: i === last ? 0 : i + 1,
        ArrowLeft: i === 0 ? last : i - 1,
        Home: 0,
        End: last,
      }
      const next = keys[event.key]
      if (next === undefined) return
      event.preventDefault()
      select(next, true)
    })
  })

  tablist.hidden = false
  select(0)
}
