import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { site } from '@/lib/site'
import {
  services, coverageExtras, stats, trustItems, whyCca, processSteps, testimonials, faqs,
} from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { Faq } from '@/components/faq'
import { CtaBanner } from '@/components/cta'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceService',
  name: 'Foundation Repair Contractor Insurance',
  provider: { '@type': 'InsuranceAgency', name: site.agency },
  areaServed: 'United States',
  serviceType: services.map((s) => s.title),
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-brand-stone">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="Foundation repair crew installing helical piers" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue">
              A program of {site.agency}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] text-brand-dark sm:text-5xl lg:text-6xl">
              Foundation Repair <span className="text-brand-blue">Contractor</span> <span className="text-brand-amber">Insurance</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-dark/75">
              Underpinning, piering, waterproofing, and soil stabilization carry serious liability. We build coverage around the risks foundation contractors actually face — from a former contractor who gets it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-amber px-7 py-3.5 font-heading text-sm font-bold text-white shadow-md transition hover:bg-[#bb6122]">
                Get Your Free Quote <ArrowRight size={17} />
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-blue/30 bg-white px-7 py-3.5 font-heading text-sm font-bold text-brand-blue transition hover:bg-brand-stone">
                <Phone size={17} /> {site.phone}
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-brand-dark/70">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-amber" /> 15-minute quotes</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-amber" /> A-rated carriers</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-amber" /> All 50 states</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-brand-warm bg-brand-blue">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-sm font-bold text-white/90">
          {trustItems.map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="soil-lines py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Coverage Built for Foundation Work</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">The policies foundation contractors actually need</h2>
            <p className="mt-4 text-brand-dark/70">Every coverage line below is shaped around structural, soil, and underground exposure — not generic contractor templates.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-xl border border-brand-warm bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                    <s.icon size={24} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-dark">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/70">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-amber">Learn more <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <Link href="/quote" className="flex h-full flex-col justify-center rounded-xl bg-brand-blue p-7 text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-heading text-lg font-bold">Not sure what you need?</h3>
                <p className="mt-2 text-sm text-white/80">Tell us about your operation and we&apos;ll assemble the right package.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-amber">Get a custom quote <ArrowRight size={15} /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. WHY CCA */}
      <section className="bg-brand-stone py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <Image src="/images/underpinning.jpg" alt="Foundation underpinning with steel piers" width={640} height={520} className="rounded-2xl object-cover shadow-lg" />
          </Reveal>
          <div>
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Why Contractors Choice Agency</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">An insurance partner that has stood on the job site</h2>
            <div className="mt-8 space-y-6">
              {whyCca.map((w, i) => (
                <Reveal key={i} delay={i * 0.05} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-amber" size={22} />
                  <div>
                    <h3 className="font-heading text-base font-bold text-brand-dark">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-dark/70">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COVERAGE BREAKDOWN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Specialty Exposures</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">The risks generic policies leave exposed</h2>
            <p className="mt-4 text-brand-dark/70">Structural defects, soil movement, and property-damage liability are unique to your trade. So is the coverage that responds to them.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {coverageExtras.map((c, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-brand-warm bg-brand-stone p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-amber/15 text-brand-amber">
                    <c.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-brand-dark">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Simple Process</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl">Covered in three steps</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-white/15 bg-white/5 p-8">
                  <span className="font-heading text-4xl font-extrabold text-brand-amber">{p.n}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STATS */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.05} className="text-center">
              <div className="font-heading text-3xl font-extrabold text-brand-blue sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-brand-dark/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-brand-stone py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">What Contractors Say</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">Trusted by foundation repair owners</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border border-brand-warm bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-brand-amber">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-brand-dark/80">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-brand-warm pt-4">
                    <div className="font-heading text-sm font-bold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-brand-dark/55">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Questions, Answered</span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-dark sm:text-4xl">Foundation contractor insurance FAQ</h2>
          </Reveal>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <CtaBanner />
    </>
  )
}
