import { useState } from 'react'
import { Arrow } from '@/components/Arrow'
import { useSceneProgress } from '@/hooks/useSceneProgress'

const spots = [
  { id: 'face', label: 'Curved LED face', text: 'The talk, the launch film, or the title sits on the curved front, readable from the room.', x: '42%', y: '42%' },
  { id: 'top', label: 'Lectern top', text: 'A solid reading surface stays above the display, for notes and a glass of water.', x: '52%', y: '7%' },
  { id: 'base', label: 'Rolling base', text: 'A weighted plinth on casters, so the podium moves from hall to stage.', x: '38%', y: '93%' },
]

export function Podium() {
  const ref = useSceneProgress<HTMLElement>()
  const [spot, setSpot] = useState(spots[0])

  return (
    <section className="scene scene-podium" id="podium" ref={ref}>
      <div className="scene-copy">
        <p className="eyebrow"><span /> 02 / LED podium</p>
        <h2>The lectern<br /><em>is the screen.</em></h2>
        <p>A conference podium with a curved LED face. Built for product launches, keynotes, and exhibitions where one person has to hold the room.</p>
        <ul className="uses">
          <li>Conferences</li>
          <li>Launches</li>
          <li>Exhibitions</li>
        </ul>
        <p className="spot-note" role="status">{spot.label}. {spot.text}</p>
        <div className="actions">
          <a className="button" href="#contact">Specify a podium <Arrow /></a>
          <a className="text-link" href="#runway">Next, the runway <Arrow /></a>
        </div>
      </div>
      <div className="podium-stage">
        <div className="podium-figure">
          <img src="/products/podium.png?v=9" alt="LED podium whose screen shows a speaker at a microphone in Hargeisa" width="741" height="1114" />
          {spots.map((item) => (
            <button
              className="hotspot"
              type="button"
              key={item.id}
              style={{ left: item.x, top: item.y }}
              aria-pressed={spot.id === item.id}
              aria-label={item.label}
              onClick={() => setSpot(item)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
