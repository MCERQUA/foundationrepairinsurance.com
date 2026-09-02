'use client'
import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function QuoteForm({ formName = 'quote' }: { formName?: string }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    
        {/* complete contractor field set — forms-required-fields.json */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Street address</label>
          <input type="text" name="street_address" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">City</label>
          <input type="text" name="city" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">ZIP code</label>
          <input type="text" name="zip" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year gross sales</label>
          <input type="text" name="prior_year_gross_sales" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year subcontractor expenses</label>
          <input type="text" name="prior_year_subcontractor_expenses" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year employee count</label>
          <input type="number" name="prior_year_employee_count" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior year employee payroll</label>
          <input type="text" name="prior_year_employee_payroll" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated gross sales (next 12 months)</label>
          <input type="text" name="estimated_gross_sales" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated subcontractor expenses (next 12 months)</label>
          <input type="text" name="estimated_subcontractor_expenses" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated employee count (year total)</label>
          <input type="number" name="estimated_employee_count" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated employee annual payroll</label>
          <input type="text" name="estimated_employee_payroll" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Estimated material costs</label>
          <input type="text" name="estimated_material_costs" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Do your subcontractors have insurance?</label>
          <select name="subcontractors_have_insurance" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">What percent of your subcontractors have insurance?</label>
          <input type="number" name="percent_subcontractors_insured" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Do you need coverage for uninsured subcontractors?</label>
          <select name="coverage_for_uninsured_subcontractors" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Coverages requested (checkboxes)</label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="General liability" /><span>General liability</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Commercial auto" /><span>Commercial auto</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Workers compensation" /><span>Workers compensation</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Umbrella / excess" /><span>Umbrella / excess</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Pollution liability" /><span>Pollution liability</span></label>
          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" name="coverage_types" value="Professional liability" /><span>Professional liability</span></label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Year business started</label>
          <input type="number" name="year_business_started" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Description of business</label>
          <textarea name="business_description" rows={3} className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 1 (+ % of operations)</label>
          <input type="text" name="class_code_1" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 2 (+ % of operations)</label>
          <input type="text" name="class_code_2" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 3 (+ % of operations)</label>
          <input type="text" name="class_code_3" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 4 (+ % of operations)</label>
          <input type="text" name="class_code_4" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Class code 5 (+ % of operations)</label>
          <input type="text" name="class_code_5" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Residential vs commercial split</label>
          <input type="text" name="residential_vs_commercial" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">New construction vs existing / remodel</label>
          <input type="text" name="new_vs_existing_construction" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">5 largest projects ever (description + dollar amount)</label>
          <textarea name="largest_projects" rows={3} className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior insurance carrier name</label>
          <input type="text" name="prior_carrier_name" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior policy number</label>
          <input type="text" name="prior_policy_number" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Prior policy expiration date</label>
          <input type="date" name="prior_policy_expiration" className="rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none" />
        </div>
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
