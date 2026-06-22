import type { Metadata } from 'next'
import { Phone, Clock, ShieldCheck, Award } from 'lucide-react'
import { site } from '@/lib/site'
import { QuoteForm } from '@/components/quote-form'

export const metadata: Metadata = {
  title: 'Get a Free Foundation Repair Insurance Quote',
  description: 'Request a free, no-obligation insurance quote for your foundation repair business. General liability, professional liability, workers comp, and more. Quote in 15 minutes.',
  alternates: { canonical: 'https://foundationrepairinsurance.com/quote' },
}

export default function Quote() {
  return (
    <section className="bg-brand-stone py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Free Quote</span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl">Get your foundation contractor insurance quote</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-dark/75">Tell us about your operation and a CCA specialist will build the right coverage package — usually within one business hour. Most quotes take about 15 minutes.</p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Clock, t: '15-minute quotes', d: 'Fast turnaround from a real specialist.' },
              { icon: ShieldCheck, t: 'A-rated carriers only', d: 'Coverage that holds up when you file a claim.' },
              { icon: Award, t: 'Former contractor founded', d: 'We understand foundation and structural work.' },
            ].map((f) => (
              <div key={f.t} className="flex gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><f.icon size={20} /></span>
                <div>
                  <div className="font-heading text-base font-bold text-brand-dark">{f.t}</div>
                  <div className="text-sm text-brand-dark/65">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-brand-warm bg-white p-5">
            <p className="text-sm font-semibold text-brand-dark">Prefer to talk?</p>
            <a href={`tel:${site.phoneRaw}`} className="mt-1 flex items-center gap-2 font-heading text-2xl font-extrabold text-brand-blue"><Phone size={22} /> {site.phone}</a>
          </div>
        </div>
        <div>
          <QuoteForm formName="quote" />
        </div>
      </div>
    </section>
  )
}
