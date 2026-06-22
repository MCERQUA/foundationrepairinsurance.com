import {
  ShieldCheck, FileWarning, HardHat, Truck, Wrench, Droplets,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  short: string
  icon: typeof ShieldCheck
  image: string
  blurb: string
}

export const services: Service[] = [
  {
    slug: 'general-liability',
    title: 'General Liability Insurance',
    short: 'Protection against third-party property damage and bodily injury claims from soil movement and structural work.',
    icon: ShieldCheck,
    image: '/images/general-liability.jpg',
    blurb: 'The foundation of every foundation contractor’s coverage. Defends you when a repair triggers a soil-movement or structural-damage claim.',
  },
  {
    slug: 'professional-liability',
    title: 'Professional Liability (E&O)',
    short: 'Errors & omissions coverage for faulty design recommendations and failed repair engineering.',
    icon: FileWarning,
    image: '/images/inspection.jpg',
    blurb: 'Covers the financial fallout when your engineering judgment or repair recommendation is alleged to have failed.',
  },
  {
    slug: 'workers-comp',
    title: 'Workers’ Compensation',
    short: 'Medical and wage coverage for crews doing underground, confined-space, and heavy-equipment work.',
    icon: HardHat,
    image: '/images/workers-comp.jpg',
    blurb: 'Foundation work is among the most physically hazardous in construction. Protect your crew and your business.',
  },
  {
    slug: 'commercial-auto',
    title: 'Commercial Auto Insurance',
    short: 'Fleet coverage for work trucks and trailers hauling piers, jacks, and excavation equipment.',
    icon: Truck,
    image: '/images/commercial-building.jpg',
    blurb: 'Your trucks and trailers are rolling job sites. Cover the vehicles, the cargo, and the liability on the road.',
  },
  {
    slug: 'equipment-tools',
    title: 'Equipment & Tools Coverage',
    short: 'Inland marine protection for hydraulic piers, concrete drills, and excavation equipment.',
    icon: Wrench,
    image: '/images/equipment.jpg',
    blurb: 'Replace stolen or damaged hydraulic jacks, drills, and excavation gear fast so jobs stay on schedule.',
  },
]

export const coverageExtras = [
  {
    title: 'Contractor’s Pollution Liability',
    icon: Droplets,
    text: 'Soil and groundwater contamination from excavation, drilling fluids, or disturbed materials is a real exposure on foundation jobs — standard GL excludes it.',
  },
  {
    title: 'Umbrella / Excess Liability',
    icon: ShieldCheck,
    text: 'A single catastrophic structural failure can exceed your primary limits. Umbrella coverage adds millions in protection above GL and auto.',
  },
  {
    title: 'Surety & License Bonds',
    icon: FileWarning,
    text: 'Most states require contractor license bonds, and many projects require performance and payment bonds. We place both.',
  },
]

export const stats = [
  { value: '298+', label: 'Contractors Insured' },
  { value: '20+', label: 'Years in Business' },
  { value: '50', label: 'States Licensed' },
  { value: '15 min', label: 'Quote Turnaround' },
  { value: 'A-rated', label: 'Carriers Only' },
]

export const trustItems = [
  '20+ Years Experience',
  'Licensed in All 50 States',
  'A-Rated Carriers',
  '2-Hour Claims Response',
  'Former Contractor Founded',
]

export const whyCca = [
  {
    title: 'Founded by a Former Contractor',
    text: 'Josh Cotner spent years on job sites before building Contractors Choice Agency. We understand piering, underpinning, and the liability that comes with structural work — because we’ve lived it.',
  },
  {
    title: 'We Understand Your Liability',
    text: 'Foundation work carries unique exposure: soil movement, structural defects, and property-damage claims that surface years later. We build policies around the risks that actually apply to you.',
  },
  {
    title: 'Fast, Honest Quotes',
    text: 'Most foundation contractors get a quote in 15 minutes. No jargon, no runaround — just the coverage you need at a price that makes sense.',
  },
  {
    title: 'Specialists, Not Generalists',
    text: 'We focus on trade contractors. That specialization means better carrier relationships, sharper pricing, and policies that hold up when you file a claim.',
  },
]

export const processSteps = [
  { n: '01', title: 'Tell Us About Your Business', text: 'Share your trade focus, crew size, and the work you do — piering, underpinning, waterproofing, or soil stabilization.' },
  { n: '02', title: 'We Find the Right Coverage', text: 'We match you with A-rated carriers that understand foundation work and price it fairly.' },
  { n: '03', title: 'You Get Covered in 15 Minutes', text: 'Review your quote, ask questions, and bind coverage the same day. We handle the paperwork.' },
]

export const testimonials = [
  {
    quote: 'CCA actually understood what underpinning and helical pier work involves. My old broker priced me like a generic GC — Josh’s team cut my premium and improved my coverage.',
    name: 'Marcus D.',
    role: 'Owner, Foundation & Pier Specialists',
  },
  {
    quote: 'We had a soil-movement claim two years after a job. Their team had us covered and the response was fast. That’s the whole reason you carry insurance.',
    name: 'Tanya R.',
    role: 'President, Structural Repair Co.',
  },
  {
    quote: 'Fifteen-minute quote, no exaggeration. They knew exactly what a foundation repair operation needs and didn’t try to sell me junk I’d never use.',
    name: 'Derek S.',
    role: 'Owner, Crawl Space & Waterproofing',
  },
]

export const faqs = [
  {
    q: 'What insurance do foundation repair contractors actually need?',
    a: 'At minimum, general liability and workers’ compensation. Most foundation contractors also need professional liability (E&O) because they make engineering and design recommendations, commercial auto for their trucks and trailers, and equipment coverage for hydraulic piers and drilling gear. Many also carry contractor’s pollution liability and an umbrella policy.',
  },
  {
    q: 'Why is professional liability so important for foundation work?',
    a: 'Foundation contractors don’t just install — they diagnose. When you recommend a piering plan or specify a repair method, you take on professional risk. If that recommendation is alleged to have failed or caused further damage, general liability often won’t respond. Professional liability (errors & omissions) fills that gap.',
  },
  {
    q: 'How much does foundation repair contractor insurance cost?',
    a: 'It depends on your revenue, crew size, claims history, and the states you work in. Because foundation work is higher-risk than light trades, premiums run higher than a painter or finish carpenter — but specialty placement with the right carrier keeps it competitive. Request a quote for an exact number.',
  },
  {
    q: 'Do you cover soil movement and structural damage claims?',
    a: 'Yes — these are core exposures we build coverage around. Soil movement, settlement, and structural-damage allegations are the most common and most expensive claims foundation contractors face. We make sure your general liability and excess limits are structured to respond.',
  },
  {
    q: 'Are you licensed in my state?',
    a: 'Contractors Choice Agency is licensed in all 50 states. Whether you operate in one state or work across regions, we can place coverage that meets each state’s requirements.',
  },
  {
    q: 'How fast can I get a quote and bind coverage?',
    a: 'Most foundation contractors get a quote in about 15 minutes and can bind the same day. Submit the quote form or call 844-967-5247 and we’ll get started immediately.',
  },
]
