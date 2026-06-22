import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Clock } from 'lucide-react'
import { posts } from '@/lib/posts'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta'

export const metadata: Metadata = {
  title: 'Foundation Repair Insurance Resources & Guides',
  description: 'Insurance guides and risk-management resources for foundation repair, underpinning, and structural contractors.',
  alternates: { canonical: 'https://foundationrepairinsurance.com/blog' },
}

export default function BlogIndex() {
  return (
    <>
      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Resources</span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">Insurance guides for foundation contractors</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">Plain-English guidance on the coverage, claims, and liability that define the foundation repair trade.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-xl border border-brand-warm bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex w-fit rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-bold text-brand-amber">{p.category}</span>
                <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-brand-dark group-hover:text-brand-blue">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/70">{p.description}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-brand-dark/55">
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {p.readingTime}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-brand-amber">Read <ArrowRight size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
