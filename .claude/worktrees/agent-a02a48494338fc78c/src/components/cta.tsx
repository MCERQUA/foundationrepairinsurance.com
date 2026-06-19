import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(/images/cta-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Get foundation contractor insurance that actually fits your work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Talk to a specialist who understands piering, underpinning, and structural liability. Most quotes take 15 minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="rounded-md bg-brand-amber px-7 py-3.5 font-heading text-sm font-bold text-white shadow-lg transition hover:bg-[#bb6122]">
            Get Your Free Quote
          </Link>
          <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-3.5 font-heading text-sm font-bold text-white transition hover:bg-white/10">
            <Phone size={17} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
