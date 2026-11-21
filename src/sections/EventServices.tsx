import { eventServices } from '@/data/site'
import { ServiceIcon } from '@/components/ServiceIcon'

export function EventServices() {
  return (
    <section className="home-services" id="services" data-reveal>
      <h2 className="home-services-title">
        <span>Our</span> <span><em>Services</em></span>
      </h2>

      <ul className="home-services-grid">
        {eventServices.map((service) => (
          <li key={service.n}>
            <article className="svc-card" tabIndex={0}>
              <div className="svc-card-inner">
                <div className="svc-card-face svc-card-front">
                  <span className="svc-card-icon">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <span className="svc-card-flip" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 6V3L8 7l4 4V8c2.8 0 5 2.2 5 5a5 5 0 0 1-8.9 3.1l-1.5 1.5A7 7 0 0 0 19 13c0-3.9-3.1-7-7-7zm0 14v-3c-2.8 0-5-2.2-5-5a5 5 0 0 1 8.9-3.1l1.5-1.5A7 7 0 0 0 5 13c0 3.9 3.1 7 7 7z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="svc-card-face svc-card-back">
                  <p className="svc-card-n">#{service.n}</p>
                  <p>{service.text}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
