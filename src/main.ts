import '@fontsource-variable/fraunces/standard.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource-variable/dm-sans'
import './styles.css'
import { initHeader } from './ui/header.ts'
import { initMenuTabs } from './ui/menu-tabs.ts'
import { initOpenStatus } from './ui/open-status.ts'
import { initReveal } from './ui/reveal.ts'

initHeader()
initMenuTabs()
initOpenStatus()
initReveal()

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear())
})
