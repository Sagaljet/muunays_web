import { processSteps } from '@/data/site'

export function Process() {
  return (
    <section className="process section" data-reveal>
      <div className="section-heading">
        <p className="eyebrow"><span /> How we work</p>
        <h2>From idea to<br /><em>installation.</em></h2>
      </div>
      <div className="timeline">
        {processSteps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  )
}
