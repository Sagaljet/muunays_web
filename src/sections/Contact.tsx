import { contact } from '@/data/site'

export function Contact() {
  return (
    <section className="cta home-touch" id="contact" data-reveal>
      <a className="home-touch-all" href="#work">All projects <span aria-hidden="true">▪</span></a>

      <p className="home-touch-line" aria-hidden="true">Let’s work together – Let’s work together – Let’s work together –</p>

      <a className="home-touch-title" href={contact.whatsapp} target="_blank" rel="noreferrer">
        <h2>
          <span>Get in</span>
          <span>Touch</span>
        </h2>
        <span className="home-touch-arrow" aria-hidden="true">↗</span>
      </a>

      <div className="home-touch-social">
        <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">W</a>
      </div>

      <p className="home-touch-copy">
        Whether you have a detailed brief or just the beginning of an idea, we want to hear about it.
      </p>

      <div className="home-touch-details">
        <h3>Hargeisa contact</h3>
        <a href={contact.phoneHref}>Office {contact.phoneDisplay}</a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp {contact.phoneDisplay}</a>
        <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook MUUNAYS</a>
        <span>{contact.city}</span>
      </div>
    </section>
  )
}
