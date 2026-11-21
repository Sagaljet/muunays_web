import { moreServices } from '@/data/site'
import { Arrow } from '@/components/Arrow'

export function MoreServices({ onQuote }: { onQuote: (service: string) => void }) {
  return (
    <section className="more-services section" id="more-services" data-reveal>
      <div className="more-services-heading">
        <p className="eyebrow"><span /> Supporting capabilities</p>
        <h2>More visual <em>solutions.</em></h2>
      </div>
      <div className="more-services-grid">
        {moreServices.map((service) => (
          <article id={service.id} key={service.title}>
            <span>{service.n}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#quote" onClick={() => onQuote(service.title)}>Discuss this service <Arrow /></a>
          </article>
        ))}
      </div>
    </section>
  )
}
