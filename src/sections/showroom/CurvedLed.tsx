import { Arrow } from '@/components/Arrow'
import { useSceneProgress } from '@/hooks/useSceneProgress'

export function CurvedLed() {
  const ref = useSceneProgress<HTMLElement>()

  return (
    <section className="scene scene-screen" id="led-screens" ref={ref}>
      <span id="production" className="jump" />
      <div className="scene-copy">
        <p className="eyebrow"><span /> 01 / Curved LED screen</p>
        <h2>Make your brand<br /><em>impossible to ignore.</em></h2>
        <p>Indoor and outdoor LED screens, video walls, rentals and permanent installations — the production layer behind every live moment.</p>
        <ul className="uses">
          <li>Indoor</li>
          <li>Outdoor</li>
          <li>Rentals</li>
        </ul>
        <div className="actions">
          <a className="button" href="#contact">Specify this screen <Arrow /></a>
          <a className="scene-link" href="#podium">Next, the podium <Arrow /></a>
        </div>
      </div>
      <div className="screen-stage">
        <img
          src="/products/curved-led.jpg?v=5"
          alt="A shorter curved LED wall in a mall atrium, with a wide floor in front"
          width="5120"
          height="2880"
        />
      </div>
    </section>
  )
}
