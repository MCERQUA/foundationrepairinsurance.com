'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function QuoteForm({ formName = 'quote' }: { formName?: string }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: Record<string, string> = {}
    new FormData(e.currentTarget).forEach((value, key) => {
      data[key] = value.toString()
    })
    // Deliver lead directly to the leads webhook (SSR Netlify form capture is unreliable).
    try {
      const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=foundationrepairinsurance.com`
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form_name: formName, source: 'foundationrepairinsurance.com', ...data }),
      })
    } catch {
      // lead webhook failed — do not block submission UX
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-green-600" size={40} />
        <h3 className="font-heading text-xl font-bold text-brand-dark">Request received</h3>
        <p className="mt-2 text-brand-dark/70">
          Thanks — a CCA specialist will reach out shortly, usually within one business hour.
          Need it faster? Call <a href="tel:8449675247" className="font-bold text-brand-blue">844-967-5247</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border border-brand-warm bg-white p-6 shadow-sm sm:p-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Business Name" name="businessName" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="State" name="state" required />
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-brand-dark">Contractor Type</label>
          <select name="contractorType" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none">
            <option>Foundation Repair</option>
            <option>Underpinning / Piering</option>
            <option>Basement Waterproofing</option>
            <option>Soil Stabilization</option>
            <option>All of the Above</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Years in Business" name="yearsInBusiness" />
        <Field label="Annual Revenue (approx.)" name="annualRevenue" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-brand-dark">Anything else we should know?</label>
        <textarea name="message" rows={4} className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
      </div>
      <button type="submit" className="mt-1 rounded-md bg-brand-amber px-6 py-3 font-heading text-sm font-bold text-white shadow-sm transition hover:bg-[#bb6122]">
        Get My Free Quote
      </button>
      <p className="text-center text-xs text-brand-dark/50">No spam. No obligation. A real specialist reviews every request.</p>
    </form>
  )
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-brand-dark">{label}{required && <span className="text-brand-amber"> *</span>}</label>
      <input type={type} name={name} required={required} className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
    </div>
  )
}
