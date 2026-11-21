import { Arrow } from '@/components/Arrow'
import { useSceneProgress } from '@/hooks/useSceneProgress'

export function Lightboxes() {
  const ref = useSceneProgress<HTMLElement>()

  return (
    <section className="scene scene-lights" id="lightboxes" ref={ref}>
      <span id="digital-printing" className="jump" />
      <div className="scene-copy">
        <p className="eyebrow eyebrow--light"><span /> 06 / Stand lightboxes</p>
        <h2>Still graphics.<br /><em>Lit edges.</em></h2>
        <p>Illuminated frames for a campaign that should glow without a video wall. A slim stand, a diffused face, a graphic that reads across the room.</p>
        <div className="actions">
          <a className="button" href="#contact">Specify a lightbox <Arrow /></a>
          <a className="text-link" href="#contact">Talk to MUUNAYS <Arrow /></a>
        </div>
      </div>
      <div className="light-stage">
        <img className="light-frame" src="/products/lightbox-frame.png?v=8" alt="A-frame lightbox displaying a photograph of camels" width="390" height="764" />
        <img className="light-floor" src="/products/lightbox-floor.png?v=8" alt="Freestanding lightbox displaying a woman and child with a loaded camel" width="346" height="582" />
        <img className="light-stands" src="/products/lightbox-stands.png?v=8" alt="Two lightbox stands, one displaying drinks and one displaying an exhibition" width="684" height="486" />
      </div>
    </section>
  )
}
