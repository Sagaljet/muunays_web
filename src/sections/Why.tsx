import { reasons } from '@/data/site'
import { Arrow } from '@/components/Arrow'

export function Why() {
  return (
    <section className="why section" data-reveal>
      <div>
        <p className="eyebrow"><span /> Why MUUNAYS</p>
        <h2>One partner.<br />Every <em>touchpoint.</em></h2>
      </div>
      <div className="why-list">
        {reasons.map((item, i) => (
          <div key={item}><span>0{i + 1}</span><p>{item}</p><Arrow /></div>
        ))}
      </div>
    </section>
  )
}
