import { services } from '@/data/site'
import { Arrow } from '@/components/Arrow'
import { ImageFrame } from '@/components/ImageFrame'

export function Services({ onQuote }: { onQuote: (service: string) => void }) {
  return (
    <section className="section services" id="services" data-reveal>
      <div className="section-heading">
        <p className="eyebrow"><span /> What we do</p>
        <h2>Big screens. Bold brands.<br /><em>Unforgettable events.</em></h2>
        <p className="intro">Three connected disciplines, one clear standard: creative thinking, technical precision and reliable delivery.</p>
      </div>
      <div className="service-grid service-grid--core">
        {services.map((service) => (
          <article className={service.featured ? 'service-card service-card--featured' : 'service-card'} id={service.n === '01' ? 'led-screens' : service.title.toLowerCase()} key={service.title} data-frame={service.n} data-reveal>
            <ImageFrame
              src={service.image}
              alt={`${service.title} by MUUNAYS`}
              className={`service-image ${service.featured ? 'frame-led' : 'frame-stage'}`}
              caption={`${service.title} · View service`}
              badge={service.featured ? 'Featured' : service.title === 'Events' ? 'Event' : undefined}
            />
            <div className="service-copy">
              <span>{service.n}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#quote" onClick={() => onQuote(service.title)} aria-label={`Request a quote for ${service.title}`}>Explore service <Arrow /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
