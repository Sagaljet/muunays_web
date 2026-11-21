import { useEffect, useRef, type RefObject } from 'react'

export function useSceneProgress<T extends HTMLElement>(external?: RefObject<T | null>) {
  const inner = useRef<T>(null)
  const ref = external ?? inner

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '0.42')
      return
    }
    let frame = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height + window.innerHeight
      const seen = window.innerHeight - rect.top
      const progress = Math.min(1, Math.max(0, seen / total))
      el.style.setProperty('--p', progress.toFixed(3))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}
