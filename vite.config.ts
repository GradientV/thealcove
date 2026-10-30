import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { renderSections } from './src/sections/index.ts'

/**
 * Swaps each `<!-- @section name -->` marker in index.html for the markup
 * rendered from src/sections, so the menu, hours and copy ship as plain HTML
 * that search engines can read without running any JavaScript.
 */
function staticSections(): Plugin {
  return {
    name: 'alcove:static-sections',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => renderSections(html),
    },
  }
}

export default defineConfig({
  plugins: [staticSections(), tailwindcss()],
})
