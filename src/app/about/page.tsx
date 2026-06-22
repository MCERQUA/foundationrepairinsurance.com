import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle2, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { stats } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta'

export const metadata: Metadata = {
  title: 'About Contractors Choice Agency',
  description: 'Contractors Choice Agency was founded by a former contractor with 20+ years of experience insuring specialty trade contractors, including foundation repair operations nationwide.',
  alternates: { canonical: 'https://foundationrepairinsurance.com/about' },
}

export default function About() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">About Us</span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">Insurance built by someone who has done the work</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">Foundation Repair Insurance is a specialty program of Contractors Choice Agency — and we are not a generalist broker who learned about piering from a brochure.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <Image src="/images/inspection.jpg" alt="Structural inspection of a foundation" width={620} height={500} className="rounded-2xl object-cover shadow-lg" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl font-extrabold text-brand-dark">From the job site to your policy</h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-brand-dark/80">
              <p>Josh Cotner spent years as a contractor before founding Contractors Choice Agency in 2005. That background is the whole reason this agency exists — he was tired of buying insurance from people who did not understand the trades they were pricing.</p>
              <p>Today CCA insures nearly 300 specialty trade contractors across the country, with deep focus on the high-liability niches that generalists get wrong: foundation repair, underpinning, waterproofing, and soil stabilization. We know the difference between a helical pier and a push pier, and we know which one changes your underwriting.</p>
              <p>We are licensed in all 50 states, we work only with A-rated carriers, and we guarantee a 2-hour response on claims. Most foundation contractors get a quote from us in about 15 minutes.</p>
            </div>
            <div className="mt-6 space-y-3">
              {['Former contractor founded — insider perspective', 'Licensed in all 50 states', 'A-rated carriers only', '2-hour claims response guarantee'].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark">
                  <CheckCircle2 size={18} className="text-brand-amber" /> {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-stone py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.05} className="text-center">
              <div className="font-heading text-3xl font-extrabold text-brand-blue sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-brand-dark/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-heading text-3xl font-extrabold text-brand-dark">Let&apos;s talk about your coverage</h2>
          <p className="mt-3 text-brand-dark/70">Call us or request a quote — a real specialist reviews every request.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="rounded-md bg-brand-amber px-7 py-3.5 font-heading text-sm font-bold text-white shadow-md transition hover:bg-[#bb6122]">Get Your Free Quote</Link>
            <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 rounded-md border border-brand-blue/30 px-7 py-3.5 font-heading text-sm font-bold text-brand-blue transition hover:bg-brand-stone"><Phone size={17} /> {site.phone}</a>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
