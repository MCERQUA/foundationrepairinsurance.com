import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, AlertTriangle, ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { services } from '@/lib/content'
import { serviceDetails, type ServiceDetail } from '@/lib/service-content'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta'

export function ServicePage({ data }: { data: ServiceDetail }) {
  const others = services.filter((s) => s.slug !== data.slug).slice(0, 3)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceService',
    name: `${data.title} for Foundation Repair Contractors`,
    provider: { '@type': 'InsuranceAgency', name: site.agency },
    areaServed: 'United States',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative overflow-hidden bg-brand-stone">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Link href="/quote" className="inline-flex rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue">Foundation Contractor Coverage</Link>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl">{data.title}</h1>
            <p className="mt-3 font-heading text-lg font-semibold text-brand-amber">{data.hero}</p>
            <div className="mt-5 space-y-3 text-[16px] leading-relaxed text-brand-dark/80">
              {data.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-amber px-6 py-3 font-heading text-sm font-bold text-white shadow-md transition hover:bg-[#bb6122]">Get a Quote <ArrowRight size={16} /></Link>
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-blue/30 bg-white px-6 py-3 font-heading text-sm font-bold text-brand-blue transition hover:bg-white"><Phone size={16} /> {site.phone}</a>
            </div>
          </div>
          <Reveal delay={0.1}>
            <Image src={data.image} alt={data.title} width={620} height={480} className="rounded-2xl object-cover shadow-lg" />
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark">What this coverage includes</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {data.whatItCovers.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-brand-warm bg-white p-7 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-brand-dark">{c.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-stone py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Real-world claim scenarios</h2>
            <div className="mt-6 space-y-4">
              {data.scenarios.map((s, i) => (
                <Reveal key={i} delay={i * 0.05} className="flex gap-3 rounded-xl border border-brand-warm bg-white p-5">
                  <AlertTriangle className="mt-0.5 shrink-0 text-brand-amber" size={20} />
                  <p className="text-sm leading-relaxed text-brand-dark/80">{s}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Why it matters for foundation work</h2>
            <div className="mt-6 space-y-4">
              {data.whyMatters.map((w, i) => (
                <Reveal key={i} delay={i * 0.05} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-blue" size={20} />
                  <p className="text-[15px] leading-relaxed text-brand-dark/80">{w}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-brand-blue p-6 text-white">
              <p className="font-heading text-lg font-bold">Bundle and save</p>
              <p className="mt-2 text-sm text-white/80">Most foundation contractors combine this with general liability, workers’ comp, and equipment coverage in one program. We’ll build the full stack in about 15 minutes.</p>
              <Link href="/quote" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-amber px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#bb6122]">Get My Quote <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-heading text-2xl font-extrabold text-brand-dark">Related coverage</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col rounded-xl border border-brand-warm bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"><s.icon size={22} /></span>
                <h3 className="mt-4 font-heading text-base font-bold text-brand-dark">{s.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-amber">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}

export { serviceDetails }
