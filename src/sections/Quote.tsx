import { FormEvent } from 'react'
import { contact, quoteServices } from '@/data/site'
import { Arrow } from '@/components/Arrow'
import { openWhatsApp } from '@/lib/whatsapp'

export function Quote({
  service,
  onService,
}: {
  service: string
  onService: (service: string) => void
}) {
  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join('\n')
    openWhatsApp(`Quote request — ${service}`, body)
  }

  return (
    <section className="quote section" id="quote" data-reveal>
      <div className="quote-intro">
        <p className="eyebrow"><span /> Request a quote</p>
        <h2>Tell us what<br />you want to <em>make.</em></h2>
        <p>Choose an event service or a production product. Your request opens in WhatsApp so the MUUNAYS team in {contact.city} can reply directly.</p>
      </div>
      <form className="quote-form" onSubmit={submitQuote}>
        <label>Full name<input name="Full name" required placeholder="Your name" /></label>
        <label>Company name <span>Optional</span><input name="Company" placeholder="Company name" /></label>
        <label>Phone or WhatsApp<input name="Phone or WhatsApp" required placeholder="+252 6X XXX XXXX" /></label>
        <label>Email<input name="Email" type="email" required placeholder="you@company.com" /></label>
        <label className="field-wide">Service required
          <select name="Service" value={service} onChange={(event) => onService(event.target.value)}>
            {quoteServices.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        {service.includes('LED') && (
          <div className="led-options field-wide">
            <label>Display type<select name="Display type"><option>Indoor</option><option>Outdoor</option><option>Not sure</option></select></label>
            <label>Requirement<select name="Requirement"><option>Rental</option><option>Permanent installation</option><option>Not sure</option></select></label>
            <label>Use<select name="Use"><option>Event use</option><option>Permanent use</option><option>Not sure</option></select></label>
            <label>Screen size<input name="Screen size" placeholder="Approximate dimensions or not sure" /></label>
          </div>
        )}
        <label className="field-wide">Project description<textarea name="Project description" required rows={5} placeholder="Tell us about the project, location, timing and what you need." /></label>
        <button className="button quote-submit" type="submit">Send on WhatsApp <Arrow /></button>
      </form>
    </section>
  )
}
