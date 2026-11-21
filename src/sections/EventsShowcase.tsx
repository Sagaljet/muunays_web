import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { eventPhases } from '@/data/site'
import { Arrow } from '@/components/Arrow'

const faces = [
  { id: 'wing-l', ry: -30, kind: 'wing' as const },
  { id: 'copy', ry: -10, kind: 'copy' as const },
  { id: 'visual', ry: 10, kind: 'visual' as const },
  { id: 'wing-r', ry: 30, kind: 'wing' as const },
]

export function EventsShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const [eventSlide, setEventSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const phase = eventPhases[eventSlide]
  const count = eventPhases.length

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      section.style.setProperty('--curve-p', '0.45')
      return
    }
    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const total = rect.height + window.innerHeight
      const seen = window.innerHeight - rect.top
      const progress = Math.min(1, Math.max(0, seen / total))
      section.style.setProperty('--curve-p', progress.toFixed(3))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const autoplay = window.setTimeout(() => setEventSlide((eventSlide + 1) % count), 5200)
    return () => window.clearTimeout(autoplay)
  }, [eventSlide, paused, count])

  const step = (direction: number) => setEventSlide((eventSlide + direction + count) % count)

  return (
    <section
      className="events-showcase"
      id="events-production"
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="curve-viewport">
        <div className="curve-rig">
          {faces.map((face) => (
            <article className={`cabinet cabinet--${face.kind}`} style={{ '--ry': `${face.ry}deg` } as CSSProperties} key={face.id}>
              <div className="cabinet-lip" aria-hidden="true" />
              <div className="cabinet-face">
                {face.kind === 'copy' && (
                  <div className="events-copy">
                    <p className="eyebrow eyebrow--light"><span /> Event production</p>
                    <h2>Every moment.<br /><em>Perfectly timed.</em></h2>
                    <p>From the first cue to the final screen, MUUNAYS connects staging, visuals, branding and event production into one seamless experience.</p>
                    <a className="button" href="#plan-event">Plan your event <Arrow /></a>
                    <div className="carousel-controls" aria-label="Event gallery controls">
                      <button type="button" onClick={() => step(-1)} aria-label="Previous event image">←</button>
                      <span>0{eventSlide + 1} / 0{count}</span>
                      <button type="button" onClick={() => step(1)} aria-label="Next event image">→</button>
                    </div>
                  </div>
                )}
                {face.kind === 'visual' && (
                  <>
                    <img key={phase.n} src={phase.image} alt={`${phase.title}: ${phase.text}`} />
                    <p className="led-status" aria-hidden="true"><i /> LIVE</p>
                    <div className="led-lower">
                      <span>{phase.n}</span>
                      <h3>{phase.title}</h3>
                      <p>{phase.text}</p>
                    </div>
                  </>
                )}
                {face.kind === 'wing' && (
                  <div className="cabinet-wing" style={{ backgroundImage: `url(${phase.image})` }} aria-hidden="true" />
                )}
                <div className="cabinet-pixels" aria-hidden="true" />
              </div>
              <div className="cabinet-depth" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
      <div className="curve-floor" aria-hidden="true" />
    </section>
  )
}
