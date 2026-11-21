export type AppView = 'home' | 'production' | 'project'

export const productionHashes = new Set([
  'production',
  'led-screens',
  'podium',
  'runway',
  'events',
  'counters',
  'branding',
  'stand-banners',
  'signage',
  'lightboxes',
  'digital-printing',
  'more-services',
])

export function projectSlugFromHash(hash = typeof window === 'undefined' ? '' : window.location.hash) {
  const id = hash.replace(/^#/, '')
  if (!id.startsWith('project-')) return null
  return id.slice('project-'.length) || null
}

export function viewFromHash(hash = typeof window === 'undefined' ? '' : window.location.hash): AppView {
  const id = hash.replace(/^#/, '')
  if (id.startsWith('project-')) return 'project'
  return id && productionHashes.has(id) ? 'production' : 'home'
}

export function scrollToHash(hash: string, fallback = 'top') {
  const id = hash.replace(/^#/, '') || fallback
  window.requestAnimationFrame(() => {
    try {
      const target = document.getElementById(id)
      if (target) target.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'auto' })
    } catch {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  })
}
