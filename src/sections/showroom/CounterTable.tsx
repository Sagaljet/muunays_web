import { Arrow } from '@/components/Arrow'
import { useSceneProgress } from '@/hooks/useSceneProgress'

export function CounterTable() {
  const ref = useSceneProgress<HTMLElement>()

  return (
    <section className="scene scene-counter" id="counters" ref={ref}>
      <span id="branding" className="jump" />
      <div className="scene-copy">
        <p className="eyebrow"><span /> 04 / LED counter</p>
        <h2>Reception,<br /><em>fully lit.</em></h2>
        <p>A curved counter table. The front face is the screen: welcomes, menus, sponsors, and the brand someone meets first.</p>
        <ul className="uses">
          <li>Reception</li>
          <li>Exhibitions</li>
          <li>Retail</li>
        </ul>
        <div className="actions">
          <a className="button" href="#contact">Specify a counter <Arrow /></a>
          <a className="scene-link" href="#stand-banners">Next, the banners <Arrow /></a>
        </div>
      </div>
      <div className="counter-stage">
        <img src="/products/counter.png?v=4" alt="Curved LED counter promoting a night in Hargeisa" width="1023" height="985" />
      </div>
    </section>
  )
}
