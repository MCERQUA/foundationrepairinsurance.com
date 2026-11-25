'use client'
import { QuoteForm, type LegacyQuestion } from '@/components/quote/QuoteForm'

const WEBHOOK_URL = 'https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=foundationrepairinsurance.com'

const TRADES = ['Foundation Repair', 'Underpinning / Piering', 'Basement Waterproofing', 'Soil Stabilization', 'Other']

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: 'yearsInBusiness', label: 'Years in business' },
  { name: 'annualRevenue', label: 'Annual revenue (approx.)' },
  { name: 'prior_year_employee_count', label: 'Prior year employee count', type: 'number' },
  { name: 'prior_year_employee_payroll', label: 'Prior year employee payroll' },
  { name: 'estimated_gross_sales', label: 'Estimated gross sales (next 12 months)' },
  { name: 'estimated_subcontractor_expenses', label: 'Estimated subcontractor expenses (next 12 months)' },
  { name: 'estimated_employee_count', label: 'Estimated employee count (year total)', type: 'number' },
  { name: 'estimated_employee_payroll', label: 'Estimated employee annual payroll' },
  { name: 'estimated_material_costs', label: 'Estimated material costs' },
  { name: 'percent_subcontractors_insured', label: 'Percent of subcontractors with insurance', type: 'number' },
  { name: 'coverage_for_uninsured_subcontractors', label: 'Need coverage for uninsured subcontractors?', type: 'select', options: ['Yes', 'No'] },
  { name: 'class_code_1', label: 'Class code 1 (+ % of operations)' },
  { name: 'class_code_2', label: 'Class code 2 (+ % of operations)' },
  { name: 'class_code_3', label: 'Class code 3 (+ % of operations)' },
  { name: 'class_code_4', label: 'Class code 4 (+ % of operations)' },
  { name: 'class_code_5', label: 'Class code 5 (+ % of operations)' },
  { name: 'residential_vs_commercial', label: 'Residential vs commercial split' },
  { name: 'new_vs_existing_construction', label: 'New construction vs existing / remodel' },
  { name: 'largest_projects', label: '5 largest projects ever (description + dollar amount)', type: 'textarea' },
]

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  name: [d.firstName, d.lastName].filter(Boolean).join(' '),
  contractorType: d.tradeType ?? '',
  message: d.notes ?? '',
  street_address: d.address ?? '',
  business_description: d.businessDescription ?? '',
  year_business_started: d.yearBusinessStarted ?? '',
  prior_year_gross_sales: d.lastGrossSales ?? '',
  prior_year_subcontractor_expenses: d.lastSubcontractingCosts ?? '',
  subcontractors_have_insurance: d.subsCarryInsurance ?? '',
  coverage_types: d.coverageTypes ?? '',
  prior_carrier_name: d.currentCarrier ?? '',
  prior_policy_expiration: d.currentPolicyExpiration ?? '',
})

export function FoundationQuote() {
  return (
    <div className="rounded-xl border border-brand-warm bg-white p-6 shadow-sm sm:p-8">
      <QuoteForm
        formName="quote"
        tradeName="Foundation Repair"
        endpoint={WEBHOOK_URL}
        format="json"
        netlifyFallback="/__forms.html"
        extraFields={{ form_name: 'quote', source: 'foundationrepairinsurance.com' }}
        options={{ yn: true, feinRequired: false }}
        tradeTypeOptions={TRADES}
        defaults={{ coverageTypes: 'General Liability' }}
        legacyQuestions={LEGACY}
        deriveLegacy={deriveLegacy}
        classes={{
          input: 'w-full rounded-md border border-brand-warm bg-white px-3.5 py-2.5 text-sm focus:border-brand-blue focus:outline-none',
          label: 'block text-sm font-semibold text-brand-dark mb-1.5',
          legend: 'block text-sm font-semibold text-brand-dark mb-1.5',
          heading: 'font-heading text-lg font-bold text-brand-dark border-b border-brand-warm pb-2',
          button: 'w-full rounded-md bg-brand-amber px-6 py-3 font-heading text-sm font-bold text-white shadow-sm transition hover:bg-[#bb6122] disabled:opacity-60',
        }}
      />
    </div>
  )
}
