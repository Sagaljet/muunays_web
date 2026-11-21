import { useState } from 'react'
import { projectFilters, projects, type Project } from '@/data/site'
import { Arrow } from '@/components/Arrow'
import { ImageFrame } from '@/components/ImageFrame'
import { useReveal } from '@/hooks/useReveal'

export function Work({ onOpen }: { onOpen: (project: Project) => void }) {
  const [filter, setFilter] = useState('All Projects')
  const visible = filter === 'All Projects' ? projects : projects.filter((project) => project.category === filter)
  useReveal(filter)

  return (
    <section className="section work" id="work" data-reveal>
      <div className="section-heading section-heading--work">
        <div>
          <p className="eyebrow"><span /> Selected capabilities</p>
          <h2>Our work speaks<br />for <em>itself.</em></h2>
        </div>
        <p className="intro">LED displays, branding, and events. The work is grouped by how it is used in the room.</p>
      </div>
      <div className="filters" aria-label="Filter projects">
        {projectFilters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}
      </div>
      <div className="project-grid">
        {visible.length ? visible.map((project) => (
          <article className={project.className} key={project.title} data-reveal>
            <ImageFrame
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              className={`project-image ${project.category === 'Events' ? 'frame-polaroid' : project.category === 'LED Displays' ? 'frame-led' : 'frame-corners'}${project.image.includes('.png') ? ' frame-product' : ''}`}
              caption={`${project.title} · View details`}
              badge={project.category === 'Events' ? 'Event' : undefined}
              onClick={() => onOpen(project)}
            />
            <p>{project.category}</p>
            <h3>{project.title}</h3>
            <div className="project-detail">{project.text}</div>
            <button className="quick-button" onClick={() => onOpen(project)}>Quick view <Arrow /></button>
          </article>
        )) : <p className="empty">Work in this category is on the way. Contact us to talk through a project.</p>}
      </div>
    </section>
  )
}
