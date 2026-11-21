import { useEffect, useRef } from 'react'
import { Arrow } from '@/components/Arrow'
import { contact, featuredProjectBySlug, nextFeaturedProject } from '@/data/site'

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

function Gallery({ images }: { images: string[] }) {
  if (!images.length) return null
  return (
    <>
      {images.map((image, index) => (
        <figure className="pd-shot" key={`${image}-${index}`}>
          <div className="pd-shot-media">
            <img src={image} alt="" width="1920" height="1080" />
          </div>
        </figure>
      ))}
    </>
  )
}

export function ProjectDetail({
  slug,
  onBack,
  onOpen,
}: {
  slug: string
  onBack: () => void
  onOpen: (nextSlug: string) => void
}) {
  const project = featuredProjectBySlug(slug)
  const next = nextFeaturedProject(slug)
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    const root = stackRef.current
    if (!root) return
    const frames = [...root.querySelectorAll<HTMLElement>('.pd-shot')]
    if (!frames.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frames.forEach((el) => {
        el.style.setProperty('--rise', '1')
        el.style.setProperty('--drift', '0')
      })
      return
    }

    let frame = 0
    const update = () => {
      const vh = window.innerHeight
      for (const el of frames) {
        const rect = el.getBoundingClientRect()
        const total = rect.height + vh
        const seen = vh - rect.top
        const p = clamp01(seen / total)
        const rise = easeOutCubic(clamp01((p - 0.02) / 0.4))
        const drift = (p - 0.5) * 2
        el.style.setProperty('--rise', rise.toFixed(3))
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
  }, [slug])

  if (!project) {
    return (
      <section className="pd">
        <div className="pd-missing">
          <p>Project not found.</p>
          <button type="button" className="text-link" onClick={onBack}>
            Back to projects <Arrow />
          </button>
        </div>
      </section>
    )
  }

  const gallery = project.gallery.length ? project.gallery : [project.image]
  const split = Math.max(1, Math.ceil(gallery.length / 2))
  const beforeResults = gallery.slice(0, split)
  const afterResults = gallery.slice(split)

  return (
    <section className="pd" id={`project-${project.slug}`}>
      <div className="pd-shell">
        <button type="button" className="pd-back" onClick={onBack}>
          <span aria-hidden="true">←</span> All projects
        </button>

        <h1 className="pd-title">{project.title}</h1>
        <p className="pd-lead">{project.text}</p>

        <dl className="pd-meta">
          <div>
            <dt>Service</dt>
            <dd>{project.tag}</dd>
          </div>
          <div>
            <dt>Industry</dt>
            <dd>{project.industry}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>View live</dt>
            <dd>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                {project.title} <Arrow />
              </a>
            </dd>
          </div>
        </dl>

        <article className="pd-block" data-reveal>
          <h2><em>Objective</em>:</h2>
          <p>{project.objective}</p>
        </article>
      </div>

      <div className="pd-stack" ref={stackRef}>
        <Gallery images={beforeResults} />

        <article className="pd-block pd-block--inline" data-reveal>
          <h2><em>Results</em>:</h2>
          <p>{project.results}</p>
        </article>

        <Gallery images={afterResults} />
      </div>

      {next ? (
        <a
          className="pd-next"
          href={`#project-${next.slug}`}
          onClick={(event) => {
            event.preventDefault()
            onOpen(next.slug)
          }}
        >
          <span>Next project</span>
          <strong>{next.title}</strong>
          <em aria-hidden="true">↗</em>
          <img src={next.image} alt="" width="1600" height="900" />
        </a>
      ) : null}
    </section>
  )
}
