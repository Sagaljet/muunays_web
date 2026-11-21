import { useEffect, useRef, useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useReveal } from '@/hooks/useReveal'
import { HomeHero } from '@/sections/HomeHero'
import { Experiences } from '@/sections/Experiences'
import { EventServices } from '@/sections/EventServices'
import { FeaturedProjects } from '@/sections/FeaturedProjects'
import { ProjectDetail } from '@/sections/ProjectDetail'
import { CurvedLed } from '@/sections/showroom/CurvedLed'
import { Podium } from '@/sections/showroom/Podium'
import { Runway } from '@/sections/showroom/Runway'
import { CounterTable } from '@/sections/showroom/CounterTable'
import { Banners } from '@/sections/showroom/Banners'
import { Lightboxes } from '@/sections/showroom/Lightboxes'
import { Contact } from '@/sections/Contact'
import { projectSlugFromHash, scrollToHash, viewFromHash, type AppView } from '@/lib/views'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [view, setView] = useState<AppView>(() => (typeof window === 'undefined' ? 'home' : viewFromHash()))
  const [projectSlug, setProjectSlug] = useState(() => projectSlugFromHash() ?? '')
  const heroRef = useRef<HTMLElement>(null)
  useReveal(`${loading}-${view}-${projectSlug}`)

  const goHome = (hash = '#top') => {
    setView('home')
    setProjectSlug('')
    setMenuOpen(false)
    const next = hash.startsWith('#') ? hash : `#${hash}`
    window.history.pushState(null, '', next === '#top' ? `${window.location.pathname}${window.location.search}` : next)
    window.setTimeout(() => scrollToHash(next, 'top'), 40)
  }

  const goProduction = (hash = '#led-screens') => {
    setView('production')
    setProjectSlug('')
    setMenuOpen(false)
    const next = hash.startsWith('#') ? hash : `#${hash}`
    window.history.pushState(null, '', next)
    window.setTimeout(() => scrollToHash(next, 'led-screens'), 40)
  }

  const goProject = (slug: string) => {
    setView('project')
    setProjectSlug(slug)
    setMenuOpen(false)
    window.history.pushState(null, '', `#project-${slug}`)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  useEffect(() => {
    const loader = window.setTimeout(() => setLoading(false), 950)
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', `${max ? (window.scrollY / max) * 100 : 0}%`)
      const nav = document.querySelector('.nav')
      const dataView = document.querySelector('main')?.getAttribute('data-view')
      const forceScrolled = dataView === 'production' || dataView === 'project'
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? window.innerHeight - window.scrollY
      const navBottom = nav?.getBoundingClientRect().bottom ?? 84
      nav?.classList.toggle('is-scrolled', forceScrolled || heroBottom <= navBottom + 12)
    }
    const moveCursor = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    const ripple = (event: MouseEvent) => {
      const button = (event.target as HTMLElement).closest('.button')
      if (!button) return
      const dot = document.createElement('span')
      dot.className = 'ripple'
      const rect = button.getBoundingClientRect()
      dot.style.left = `${event.clientX - rect.left}px`
      dot.style.top = `${event.clientY - rect.top}px`
      button.appendChild(dot)
      window.setTimeout(() => dot.remove(), 650)
    }
    const syncHash = () => {
      const nextView = viewFromHash()
      setView(nextView)
      setProjectSlug(projectSlugFromHash() ?? '')
      if (nextView === 'project') {
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }
      window.setTimeout(() => scrollToHash(window.location.hash || (nextView === 'production' ? '#led-screens' : '#top')), 40)
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('pointermove', moveCursor, { passive: true })
    window.addEventListener('popstate', syncHash)
    window.addEventListener('hashchange', syncHash)
    document.addEventListener('click', ripple)
    updateScroll()
    return () => {
      window.clearTimeout(loader)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('popstate', syncHash)
      window.removeEventListener('hashchange', syncHash)
      document.removeEventListener('click', ripple)
    }
  }, [])

  useEffect(() => {
    if (loading) return
    if (view === 'project') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    const id = window.location.hash
    if (!id || id === '#') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    window.setTimeout(() => scrollToHash(id), 60)
  }, [loading, view])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [menuOpen])

  return (
    <main data-view={view}>
      <div className={loading ? 'loader' : 'loader is-hidden'} aria-hidden={!loading} aria-label="Loading MUUNAYS">
        <img src="/muunays-logo.png" alt="" />
        <div><span /></div>
      </div>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <Header
        menuOpen={menuOpen}
        view={view}
        onToggle={() => setMenuOpen(!menuOpen)}
        onClose={() => setMenuOpen(false)}
        onHome={goHome}
        onProduction={goProduction}
      />
      {view === 'home' ? (
        <>
          <HomeHero heroRef={heroRef} />
          <Experiences />
          <EventServices />
          <FeaturedProjects onOpen={goProject} />
          <Contact />
        </>
      ) : view === 'project' ? (
        <ProjectDetail slug={projectSlug} onBack={() => goHome('#work')} onOpen={goProject} />
      ) : (
        <>
          <CurvedLed />
          <Podium />
          <Runway />
          <CounterTable />
          <Banners />
          <Lightboxes />
          <Contact />
        </>
      )}
      <Footer onHome={goHome} onProduction={goProduction} />
    </main>
  )
}
