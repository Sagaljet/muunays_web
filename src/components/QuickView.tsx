import { useEffect, useRef, useState } from 'react'
import { type Project } from '@/data/site'
import { Arrow } from '@/components/Arrow'

export function QuickView({ project, onClose }: { project: Project; onClose: () => void }) {
  const [image, setImage] = useState(project.image)
  const [zoom, setZoom] = useState(false)
  const swipeStartRef = useRef<number | null>(null)
  const galleryImages = project.gallery
  const cycleGallery = (direction: number) => {
    const current = galleryImages.indexOf(image)
    setImage(galleryImages[(current + direction + galleryImages.length) % galleryImages.length])
    setZoom(false)
  }

  useEffect(() => {
    setImage(project.image)
    setZoom(false)
  }, [project])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const images = project.gallery
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setImage((currentImage) => {
          const current = images.indexOf(currentImage)
          const direction = event.key === 'ArrowLeft' ? -1 : 1
          return images[(current + direction + images.length) % images.length]
        })
        setZoom(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [project, onClose])

  return (
    <div
      className="quick-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close quick view">×</button>
      <div
        className={`modal-image frame-neon ${zoom ? 'is-zoomed' : ''} ${image.includes('.png') ? 'is-cutout' : ''}`}
        onTouchStart={(event) => { swipeStartRef.current = event.touches[0].clientX }}
        onTouchEnd={(event) => {
          if (swipeStartRef.current === null) return
          const distance = event.changedTouches[0].clientX - swipeStartRef.current
          if (Math.abs(distance) > 45) cycleGallery(distance > 0 ? -1 : 1)
          swipeStartRef.current = null
        }}
      >
        <img src={image} alt={`${project.title} gallery view`} width="1400" height="1000" onClick={() => setZoom(!zoom)} />
        {galleryImages.length > 1 && <button className="modal-prev" onClick={() => cycleGallery(-1)} aria-label="Previous image">←</button>}
        {galleryImages.length > 1 && <button className="modal-next" onClick={() => cycleGallery(1)} aria-label="Next image">→</button>}
        <span className="zoom-hint">{zoom ? 'Tap to fit' : 'Tap to zoom'}</span>
        <span className="modal-count">{String(Math.max(galleryImages.indexOf(image), 0) + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}</span>
      </div>
      <div className="modal-copy">
        <p>{project.category}</p>
        <h2>{project.title}</h2>
        <span>{project.text}</span>
        <div className="modal-thumbs">
          {galleryImages.map((item, index) => (
            <button className={`${image === item ? 'active' : ''} ${item.includes('.png') ? 'is-cutout' : ''}`} onClick={() => { setImage(item); setZoom(false) }} key={`${item}-${index}`} aria-label={`View image ${index + 1}`}>
              <img src={item} alt="" />
            </button>
          ))}
        </div>
        <a className="button" href="#quote" onClick={onClose}>Start a similar project <Arrow /></a>
      </div>
    </div>
  )
}
