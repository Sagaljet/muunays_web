import { Arrow } from '@/components/Arrow'
import { BrandLockup } from '@/components/BrandLockup'
import type { AppView } from '@/lib/views'

export function Header({
  menuOpen,
  view,
  onToggle,
  onClose,
  onHome,
  onProduction,
}: {
  menuOpen: boolean
  view: AppView
  onToggle: () => void
  onClose: () => void
  onHome: (hash?: string) => void
  onProduction: (hash?: string) => void
}) {
  return (
    <header className="nav">
      <a
        className="logo"
        href="#top"
        aria-label="MUUNAYS home"
        onClick={(event) => {
          event.preventDefault()
          onHome('#top')
        }}
      >
        <BrandLockup />
      </a>
      <button className="menu-button" type="button" onClick={onToggle} aria-expanded={menuOpen} aria-label="Toggle menu">
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation" onClick={(event) => { if ((event.target as HTMLElement).closest('a')) onClose() }}>
        <a
          href="#top"
          aria-current={view === 'home' ? 'page' : undefined}
          onClick={(event) => {
            event.preventDefault()
            onHome('#top')
          }}
        >
          Home
        </a>
        <a
          href="#about-events"
          onClick={(event) => {
            event.preventDefault()
            onHome('#about-events')
          }}
        >
          About
        </a>
        <a
          href="#work"
          onClick={(event) => {
            event.preventDefault()
            onHome('#work')
          }}
        >
          Projects
        </a>
        <a
          href="#services"
          onClick={(event) => {
            event.preventDefault()
            onHome('#services')
          }}
        >
          Services
        </a>
        <div className="services-menu">
          <a
            href="#led-screens"
            aria-current={view === 'production' ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault()
              onProduction('#led-screens')
            }}
          >
            Production
          </a>
          <div className="services-dropdown">
            <p>LED production</p>
            <a href="#led-screens" onClick={(event) => { event.preventDefault(); onProduction('#led-screens') }}>Curved LED Screen</a>
            <a href="#podium" onClick={(event) => { event.preventDefault(); onProduction('#podium') }}>LED Podium</a>
            <a href="#runway" onClick={(event) => { event.preventDefault(); onProduction('#runway') }}>LED Runway</a>
            <a href="#counters" onClick={(event) => { event.preventDefault(); onProduction('#counters') }}>LED Counter Table</a>
            <a href="#stand-banners" onClick={(event) => { event.preventDefault(); onProduction('#stand-banners') }}>LED Digital Stand Banners</a>
            <a href="#lightboxes" onClick={(event) => { event.preventDefault(); onProduction('#lightboxes') }}>Stand Lightboxes</a>
          </div>
        </div>
        <a className="button button--small button--nav-contact" href="#contact">
          Contact <Arrow />
        </a>
      </nav>
    </header>
  )
}
