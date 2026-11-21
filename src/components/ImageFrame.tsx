import { useState } from 'react'
import { Arrow } from '@/components/Arrow'

export function ImageFrame({
  src,
  alt,
  className,
  caption,
  badge,
  eager = false,
  onClick,
}: {
  src: string
  alt: string
  className: string
  caption?: string
  badge?: string
  eager?: boolean
  onClick?: () => void
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <figure
      className={`media-frame ${className} ${loaded ? 'is-loaded' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      } : undefined}
    >
      <div className="frame-backdrop" aria-hidden="true" />
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} width="1200" height="800" onLoad={() => setLoaded(true)} />
      <span className="frame-scan" aria-hidden="true" />
      <span className="frame-hud" aria-hidden="true"><i /><i /><i /></span>
      {badge && <b className="frame-badge">{badge}</b>}
      {caption && <figcaption>{caption}<Arrow /></figcaption>}
    </figure>
  )
}
