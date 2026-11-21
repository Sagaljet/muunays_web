import { FormEvent, useState } from 'react'
import { Arrow } from '@/components/Arrow'
import { openWhatsApp } from '@/lib/whatsapp'

export function EventPlanner() {
  const [eventStep, setEventStep] = useState(0)
  const submitEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n')
    openWhatsApp('Plan an event with MUUNAYS', body)
  }

  return (
    <section className="event-planner section" id="plan-event" data-reveal>
      <div className="planner-heading">
        <p className="eyebrow"><span /> Three quick steps</p>
        <h2>Plan your <em>event.</em></h2>
        <div className="step-dots">{[0, 1, 2].map((step) => <span className={eventStep === step ? 'active' : ''} key={step}>0{step + 1}</span>)}</div>
      </div>
      <form className="planner-form" onSubmit={submitEvent}>
        <fieldset className={eventStep === 0 ? 'active' : ''}>
          <legend>What are you planning?</legend>
          <label>Event type<select name="Event type"><option>Corporate event</option><option>Conference</option><option>Product launch</option><option>Exhibition</option><option>Other</option></select></label>
          <label>Preferred date<input name="Preferred date" type="date" /></label>
        </fieldset>
        <fieldset className={eventStep === 1 ? 'active' : ''}>
          <legend>Tell us about the scale.</legend>
          <label>Expected guests<input name="Expected guests" type="number" placeholder="Approximate number" /></label>
          <label>Location<input name="Location" placeholder="Venue, city or not decided" /></label>
        </fieldset>
        <fieldset className={eventStep === 2 ? 'active' : ''}>
          <legend>How can we reach you?</legend>
          <label>Full name<input name="Full name" required placeholder="Your name" /></label>
          <label>Phone or WhatsApp<input name="Phone" required placeholder="+252..." /></label>
        </fieldset>
        <div className="planner-actions">
          {eventStep > 0 && <button type="button" className="planner-back" onClick={() => setEventStep(eventStep - 1)}>Back</button>}
          {eventStep < 2
            ? <button type="button" className="button" onClick={() => setEventStep(eventStep + 1)}>Continue <Arrow /></button>
            : <button type="submit" className="button">Send on WhatsApp <Arrow /></button>}
        </div>
      </form>
    </section>
  )
}
