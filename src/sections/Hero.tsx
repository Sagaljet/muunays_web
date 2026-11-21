import type { Ref } from 'react'
import { photos } from '@/data/site'
import { Arrow } from '@/components/Arrow'

export function Hero({ heroRef }: { heroRef: Ref<HTMLElement> }) {
  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-media frame-neon">
        <img className="hero-image" src={photos.hero} alt="Illuminated contemporary commercial architecture at night" width="1920" height="1080" />
      </div>
      <div className="hero-shade" />
      <div className="led-wall" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-edition" aria-hidden="true">MUUNAYS / VISUAL IMPACT / 2026</div>
      <div className="hero-content">
        <p className="eyebrow eyebrow--light"><span /> Visual solutions, made visible</p>
        <h1><span>Make your brand</span><br /><span>impossible to <br className="hero-break" /><em>ignore.</em></span></h1>
        <div className="hero-bottom">
          <p>We create high-impact LED displays, bold brand experiences and unforgettable events—from first idea to final delivery.</p>
          <div className="actions">
            <a className="button" href="#work">Explore Our Work <Arrow /></a>
            <a className="text-link" href="#contact">Start Your Project <Arrow /></a>
          </div>
        </div>
      </div>
      <a className="scroll" href="#services"><span /> Scroll to discover</a>
    </section>
  )
}
