import { useEffect } from 'react'

export function useReveal(revision: unknown) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((node) => revealObserver.observe(node))
    return () => revealObserver.disconnect()
  }, [revision])
}
