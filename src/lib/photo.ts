import { esc } from './html.ts'

export interface Photo {
  alt: string
  /** URL for the photo cropped to width × height pixels. */
  url(width: number, height: number): string
  /** Whether `url` can resize the image, which makes a responsive srcset worthwhile. */
  resizable: boolean
}

/** A photo served and cropped by Unsplash's image CDN. */
export function unsplash(id: string, alt: string): Photo {
  return {
    alt,
    resizable: true,
    url: (width, height) =>
      `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=72`,
  }
}

/** A photo saved under /public, e.g. `local('/images/fries.jpg', 'Chimichurri truffle fries')`. */
export function local(path: string, alt: string): Photo {
  return { alt, resizable: false, url: () => path }
}

export interface ImgOptions {
  /** Size of the default `src`; also reserves the image's space before it loads. */
  width: number
  height: number
  /** The `sizes` attribute, e.g. `(min-width: 1024px) 33vw, 80vw`. */
  sizes: string
  class?: string
  /** Load right away at high priority. Use for the hero image only. */
  priority?: boolean
}

const SRCSET_WIDTHS = [480, 720, 960, 1280, 1600]

export function img(photo: Photo, options: ImgOptions): string {
  const { width, height, sizes, class: className = '', priority = false } = options
  const srcset = photo.resizable
    ? SRCSET_WIDTHS.map((w) => `${photo.url(w, Math.round((w * height) / width))} ${w}w`).join(', ')
    : ''
  const responsive = srcset ? ` srcset="${esc(srcset)}" sizes="${sizes}"` : ''
  const loading = priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'
  return `<img src="${esc(photo.url(width, height))}"${responsive} width="${width}" height="${height}" alt="${esc(photo.alt)}" class="${className}" ${loading}>`
}
