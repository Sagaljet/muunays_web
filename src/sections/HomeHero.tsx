import type { RefObject } from 'react'
import { contact, eventTicker } from '@/data/site'
import { HeroWheel } from '@/components/HeroWheel'

export function HomeHero({ heroRef }: { heroRef: RefObject<HTMLElement | null> }) {
  const loop = [...eventTicker, ...eventTicker]

  return (
    <section className="home-hero" id="top" ref={heroRef}>
      <div className="home-hero-stage">
        <div className="home-ticker" aria-hidden="true">
          <div className="home-ticker-track">
            {loop.map((item, index) => (
              <span key={`${item}-${index}`}>
                {index === 0 ? <i>*</i> : null}
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroWheel />

        <h1 className="home-hero-title">
          <span className="home-hero-left">We make moments</span>
          <span className="home-hero-right">Happen</span>
        </h1>

        <p className="home-hero-sub">Events management, design &amp; build</p>
      </div>

      <aside className="home-float" aria-label="Quick contact">
        <a className="home-float-phone" href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"/></svg>
        </a>
        <a className="home-float-wa" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp MUUNAYS">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.8-1.2A9 9 0 1 0 12 3zm4.7 12.9c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.2-3.6-.8-3.1-1.3-5.1-4.5-5.2-4.7-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.9-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.7c-.1.2-.2.4-.1.6.4.7 1 1.4 1.7 2 .8.7 1.6 1.2 2.4 1.5.2.1.4 0 .6-.1l.8-.9c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.5 0 .1 0 .5-.2 1z"/></svg>
        </a>
      </aside>
    </section>
  )
}
