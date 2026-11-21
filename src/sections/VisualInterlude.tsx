import { photos } from '@/data/site'

export function VisualInterlude() {
  return (
    <section className="visual-interlude" aria-label="MUUNAYS visual capabilities" data-reveal>
      <div className="visual-card visual-card--one frame-cutout"><img src={photos.signage} alt="Illuminated architectural signage" loading="lazy" width="900" height="1200" /><span>01 / SIGNAGE</span></div>
      <div className="visual-card visual-card--two frame-tilt"><img src={photos.event} alt="Large audience at a live event" loading="lazy" width="1200" height="900" /><span>02 / EVENTS</span></div>
      <div className="visual-card visual-card--three frame-corners"><img src={photos.led} alt="Large digital event display" loading="lazy" width="1200" height="900" /><span>03 / LED</span></div>
      <p>Built to be seen.<br /><em>Made to be remembered.</em></p>
    </section>
  )
}
