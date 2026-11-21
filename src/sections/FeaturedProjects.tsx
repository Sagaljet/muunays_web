import { useEffect, useRef } from 'react'
import { featuredProjects } from '@/data/site'

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

export function FeaturedProjects({ onOpen }: { onOpen: (slug: string) => void }) {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = listRef.current
    if (!root) return
    const items = [...root.querySelectorAll<HTMLElement>('.home-featured-item')]
    if (!items.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (const el of items) {
        el.style.setProperty('--rise', '1')
        el.style.setProperty('--title', '1')
        el.style.setProperty('--drift', '0')
      }
      return
    }

    let frame = 0
    const update = () => {
      const vh = window.innerHeight
      for (const el of items) {
        const rect = el.getBoundingClientRect()
        const total = rect.height + vh
        const seen = vh - rect.top
        const p = clamp01(seen / total)
        const rise = easeOutCubic(clamp01((p - 0.01) / 0.42))
        const title = easeOutCubic(clamp01((p - 0.14) / 0.38))
        const drift = (p - 0.5) * 2.2
        el.style.setProperty('--rise', rise.toFixed(3))
        el.style.setProperty('--title', title.toFixed(3))
        el.style.setProperty('--drift', drift.toFixed(3))
      }
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

  return (
    <section className="home-featured" id="work">
      <header className="home-featured-head" data-reveal>
        <h2>
          <span>Featured</span> <span><em>Projects</em></span>
        </h2>
      </header>
      <div className="home-featured-list" ref={listRef}>
        {featuredProjects.map((project) => (
          <a
            className="home-featured-item"
            href={`#project-${project.slug}`}
            key={project.slug}
            onClick={(event) => {
              event.preventDefault()
              onOpen(project.slug)
            }}
          >
            <div className="home-featured-media">
              <img src={project.image} alt="" width="1920" height="900" />
              <div className="home-featured-shade" aria-hidden="true" />
            </div>
            <div className="home-featured-copy">
              <p>{project.tag}</p>
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
