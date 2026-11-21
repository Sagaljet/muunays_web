import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Arrow } from '@/components/Arrow'

const beats = [
  { id: 'wide', at: 0, name: 'Wide', line: 'Open the floor into a low platform for a reception.' },
  { id: 'long', at: 0.34, name: 'Long', line: 'Draw the same panels into a narrow runway.' },
  { id: 'steps', at: 0.67, name: 'Raised', line: 'Lift the far end into a short flight of stairs.' },
  { id: 'stage', at: 1, name: 'Stage', line: 'Set a small stage just past the last step.' },
]

function Stair({ rise = 0, children }: { rise?: number; children: ReactNode }) {
  return <div className="stair" style={{ '--rise': rise } as CSSProperties}>{children}</div>
}

function LedTiles({ count }: { count: number }) {
  return Array.from({ length: count }, (_, index) => (
    <span className="led-tile" key={index} style={{ animationDelay: `${(index % 7) * -0.55}s` }} />
  ))
}

export function Runway() {
  const ref = useRef<HTMLElement>(null)
  const [beat, setBeat] = useState(0)
  const beatRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      if (media.matches) {
        el.style.setProperty('--p', '1')
        return
      }
      const rect = el.getBoundingClientRect()
      const travel = Math.max(1, rect.height - window.innerHeight)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      el.style.setProperty('--p', progress.toFixed(4))
      const nearest = beats.reduce((best, item, index) => (Math.abs(item.at - progress) < Math.abs(beats[best].at - progress) ? index : best), 0)
      if (nearest !== beatRef.current) {
        beatRef.current = nearest
        setBeat(nearest)
      }
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    media.addEventListener('change', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      media.removeEventListener('change', onScroll)
    }
  }, [])

  const showBeat = (at: number) => {
    const el = ref.current
    if (!el) return
    const top = window.scrollY + el.getBoundingClientRect().top
    const travel = Math.max(0, el.offsetHeight - window.innerHeight)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: top + travel * at, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="scene scene-runway" id="runway" ref={ref} aria-label="LED runway arrangements">
      <span id="events" className="jump" />
      <div className="runway-pin">
        <div className="runway-stage">
          <div className="runway-room" aria-hidden="true" />
          <div className="runway-glow" aria-hidden="true" />
          {beats.map((item) => (
            <div className={`runway-look runway-look--${item.id}`} key={item.id} style={{ '--at': item.at } as CSSProperties} aria-hidden="true">
              <div className="floor-pivot">
                {item.id === 'wide' && (
                  <div className="led-floor led-floor--wide">
                    <LedTiles count={18} />
                  </div>
                )}
                {item.id === 'long' && (
                  <div className="led-floor led-floor--long">
                    <LedTiles count={20} />
                  </div>
                )}
                {item.id === 'steps' && (
                  <div className="led-floor led-floor--steps">
                    <Stair rise={3}><div className="led-row"><LedTiles count={4} /></div></Stair>
                    <Stair rise={2}><div className="led-row"><LedTiles count={3} /></div></Stair>
                    <Stair rise={1}><div className="led-row"><LedTiles count={2} /></div></Stair>
                    <Stair><div className="led-row"><LedTiles count={2} /></div></Stair>
                    <Stair><div className="led-row"><LedTiles count={2} /></div></Stair>
                  </div>
                )}
                {item.id === 'stage' && (
                  <div className="led-floor led-floor--stage">
                    <Stair rise={4}><div className="led-deck led-deck--stage"><LedTiles count={8} /></div></Stair>
                    <Stair rise={2}><div className="led-row"><LedTiles count={3} /></div></Stair>
                    <Stair rise={1}><div className="led-row"><LedTiles count={2} /></div></Stair>
                    <div className="led-deck led-deck--path"><LedTiles count={8} /></div>
                    <div className="led-deck led-deck--wide"><LedTiles count={10} /></div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="runway-sheen" aria-hidden="true" />
        </div>
        <div className="scene-copy">
          <p className="eyebrow eyebrow--light"><span /> 03 / LED runway</p>
          <h2>The floor<br /><em>is the show.</em></h2>
          <div className="runway-lines">
            {beats.map((item) => (
              <p key={item.id} style={{ '--at': item.at } as CSSProperties}>{item.line}</p>
            ))}
          </div>
          <p className="runway-live" aria-live="polite">{beats[beat].line}</p>
          <ol className="runway-beats">
            {beats.map((item, index) => (
              <li key={item.id} style={{ '--at': item.at } as CSSProperties}>
                <button type="button" aria-current={beat === index ? 'true' : undefined} onClick={() => showBeat(item.at)}>
                  <span>0{index + 1}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ol>
          <div className="actions">
            <a className="button" href="#contact">Specify a runway <Arrow /></a>
            <a className="text-link" href="#contact">Talk to MUUNAYS <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
