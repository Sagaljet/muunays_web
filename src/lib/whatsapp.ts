import { contact } from '@/data/site'

export function openWhatsApp(subject: string, body: string) {
  const text = `${subject}\n\n${body}`
  window.open(`${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}
