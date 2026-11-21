import { contact } from '@/data/site'
import { BrandLockup } from '@/components/BrandLockup'

export function Footer({
  onHome,
  onProduction,
}: {
  onHome: (hash?: string) => void
  onProduction: (hash?: string) => void
}) {
  return (
    <footer>
      <div className="footer-brand">
        <BrandLockup light />
        <span>Event management, design and build — from first brief to the final cue in Hargeisa.</span>
      </div>
      <div className="footer-links">
        <p>Navigate</p>
        <a href="#top" onClick={(event) => { event.preventDefault(); onHome('#top') }}>Home</a>
        <a href="#services" onClick={(event) => { event.preventDefault(); onHome('#services') }}>Services</a>
        <a href="#led-screens" onClick={(event) => { event.preventDefault(); onProduction('#led-screens') }}>Production</a>
        <a href="#work" onClick={(event) => { event.preventDefault(); onHome('#work') }}>Projects</a>
        <a href="#about" onClick={(event) => { event.preventDefault(); onHome('#about') }}>About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-links">
        <p>Services</p>
        <a href="#services" onClick={(event) => { event.preventDefault(); onHome('#services') }}>Event management</a>
        <a href="#plan-event" onClick={(event) => { event.preventDefault(); onHome('#plan-event') }}>Event planner</a>
        <a href="#led-screens" onClick={(event) => { event.preventDefault(); onProduction('#led-screens') }}>LED production</a>
        <a href="#quote">Request a quote</a>
      </div>
      <div className="footer-links"><p>Contact</p><a href={contact.phoneHref}>{contact.phoneDisplay}</a><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a><span>{contact.city}</span></div>
      <div className="copyright"><span>© 2026 MUUNAYS. All rights reserved.</span><span>We make moments happen.</span></div>
    </footer>
  )
}
