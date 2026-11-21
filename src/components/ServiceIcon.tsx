type IconName =
  | 'squares'
  | 'triangles'
  | 'bolt'
  | 'steps'
  | 'circle'
  | 'pinwheel'
  | 'facing'
  | 'pedestal'

export function ServiceIcon({ name }: { name: IconName }) {
  switch (name) {
    case 'squares':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="6" y="10" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="20" y="18" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )
    case 'triangles':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 6 L38 28 H10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 18 L34 36 H14 Z" fill="currentColor" />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M26 4 L12 26 H22 L18 44 L38 20 H26 Z" fill="currentColor" />
        </svg>
      )
    case 'steps':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="8" y="24" width="14" height="14" fill="currentColor" />
          <rect x="26" y="10" width="14" height="14" fill="currentColor" />
        </svg>
      )
    case 'circle':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="12" fill="currentColor" />
        </svg>
      )
    case 'pinwheel':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 8 L28 22 L24 24 L20 22 Z M40 24 L26 28 L24 24 L26 20 Z M24 40 L20 26 L24 24 L28 26 Z M8 24 L22 20 L24 24 L22 28 Z" fill="currentColor" />
        </svg>
      )
    case 'facing':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M4 24 L20 12 V36 Z" fill="currentColor" />
          <path d="M44 24 L28 12 V36 Z" fill="currentColor" />
        </svg>
      )
    case 'pedestal':
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M16 10 H32 V16 H16 Z M14 16 H34 V22 H14 Z M12 22 H36 V28 H12 Z M10 28 H38 V34 H10 Z" fill="currentColor" />
        </svg>
      )
  }
}
