import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { site } from '@/lib/site'
import { QuoteForm } from '@/components/quote-form'

export const metadata: Metadata = {
  title: 'Contact Contractors Choice Agency',
  description: 'Contact Contractors Choice Agency for foundation repair contractor insurance. Call 844-967-5247 or send a message and a specialist will respond quickly.',
  alternates: { canonical: 'https://foundationrepairinsurance.com/contact' },
}

export default function Contact() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Contact</span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">Talk to a foundation insurance specialist</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">Questions about coverage, claims, or a certificate? Reach out — we respond fast.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Reach us directly</h2>
            <div className="mt-6 space-y-5">
              <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phoneRaw}`} />
              <ContactRow icon={Phone} label="Secondary" value={site.phoneAlt} href="tel:8553367189" />
              <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow icon={MapPin} label="Headquarters" value={site.address} />
              <ContactRow icon={Clock} label="Claims" value="24/7 reporting · 2-hour response" />
            </div>
            <div className="mt-8 rounded-xl border border-brand-warm bg-brand-stone p-6">
              <p className="text-sm leading-relaxed text-brand-dark/75"><span className="font-bold text-brand-dark">Licensed in all 50 states.</span> NPN 8608479. A specialty insurance program of Contractors Choice Agency, serving foundation repair contractors nationwide.</p>
            </div>
          </div>
          <div>
            <h2 className="mb-5 font-heading text-2xl font-extrabold text-brand-dark">Send us a message</h2>
            <QuoteForm formName="contact" />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><Icon size={20} /></span>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide text-brand-dark/50">{label}</div>
        <div className="font-heading text-base font-bold text-brand-dark">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href} className="block transition hover:opacity-80">{inner}</a> : inner
}
