import { useEffect, useRef } from 'react'
import { heroWheel } from '@/data/site'

/** Radial starburst: panels hinged on a shared vertical spine, fanning 360°. */
export function HeroWheel() {
  const stackRef = useRef<HTMLDivElement>(null)
  const faceRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const faces = faceRefs.current.filter(Boolean) as HTMLElement[]
    const count = faces.length
    if (!count) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const step = 360 / count
    const tiltX = 34
    const tiltZ = -12

    const place = (spin: number) => {
      for (let i = 0; i < count; i++) {
        const el = faces[i]
        const angle = i * step + spin
        el.style.transform = `rotateY(${angle}deg) translateZ(0.6px)`
        const facing = Math.cos((angle * Math.PI) / 180)
        el.style.zIndex = String(Math.round(50 + facing * 40))
        el.style.filter = `brightness(${(0.62 + Math.max(0, facing) * 0.38).toFixed(2)})`
      }
      if (stackRef.current) {
        stackRef.current.style.transform = `rotateX(${tiltX}deg) rotateZ(${tiltZ}deg)`
      }
    }

    if (reduce) {
      place(24)
      return
    }

    let frame = 0
    let spin = 24
    const tick = () => {
      spin += 0.11
      if (spin >= 360) spin -= 360
      place(spin)
      frame = requestAnimationFrame(tick)
    }
    place(spin)
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="home-wheel" aria-hidden="true">
      <div className="home-wheel-scene">
        <div className="home-wheel-stack" ref={stackRef}>
          {heroWheel.map((src, index) => (
            <figure
              className="home-wheel-face"
              key={`${src}-${index}`}
              ref={(node) => {
                faceRefs.current[index] = node
              }}
            >
              <img src={src} alt="" width="900" height="520" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
