export function BrandLockup({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <span className="brand brand--light">
        <img src="/muunays-logo-on-dark.png" alt="MUUNAYS — Events, LED Screens, Branding" />
      </span>
    )
  }

  return (
    <span className="brand">
      <img className="brand-for-dark" src="/muunays-logo-on-dark.png" alt="MUUNAYS — Events, LED Screens, Branding" />
      <img className="brand-for-light" src="/muunays-logo.png" alt="" aria-hidden="true" />
    </span>
  )
}
