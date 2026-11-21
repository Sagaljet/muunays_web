import { Arrow } from '@/components/Arrow'
import { useSceneProgress } from '@/hooks/useSceneProgress'

export function Banners() {
  const ref = useSceneProgress<HTMLElement>()

  return (
    <section className="scene scene-banners" id="stand-banners" ref={ref}>
      <span id="signage" className="jump" />
      <div className="scene-copy">
        <p className="eyebrow"><span /> 05 / Stand banners</p>
        <h2>A campaign<br /><em>that stands.</em></h2>
        <p>Freestanding LED banners. The face runs the message, on a base that rolls from hall to hall.</p>
        <ul className="uses">
          <li>Lobbies</li>
          <li>Exhibitions</li>
          <li>Retail floors</li>
        </ul>
        <div className="actions">
          <a className="button" href="#contact">Specify a banner <Arrow /></a>
          <a className="scene-link" href="#lightboxes">Next, the lightboxes <Arrow /></a>
        </div>
      </div>
      <div className="banner-stage">
        <figure className="banner-front">
          <img src="/products/banner-front.png?v=6" alt="Tall LED stand banner showing a Hargeisa night concert" width="482" height="1267" />
        </figure>
        <figure className="banner-back">
          <img src="/products/banner-back.png?v=6" alt="Tall LED stand banner showing a Hargeisa cultural evening" width="467" height="1250" />
        </figure>
      </div>
    </section>
  )
}
