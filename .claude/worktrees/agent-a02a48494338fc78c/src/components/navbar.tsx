'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { site } from '@/lib/site'

const serviceLinks = [
  { href: '/services/general-liability', label: 'General Liability' },
  { href: '/services/professional-liability', label: 'Professional Liability' },
  { href: '/services/workers-comp', label: "Workers' Comp" },
  { href: '/services/commercial-auto', label: 'Commercial Auto' },
  { href: '/services/equipment-tools', label: 'Equipment & Tools' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-brand-warm bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-blue font-heading text-lg font-extrabold text-white">F</span>
          <span className="font-heading text-[15px] font-extrabold leading-tight text-brand-dark sm:text-base">
            Foundation Repair<span className="text-brand-amber"> Insurance</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-blue">
              Coverage <ChevronDown size={15} />
            </button>
            {svcOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border border-brand-warm bg-white p-2 shadow-xl">
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className="block rounded-md px-3 py-2 text-sm font-medium text-brand-dark hover:bg-brand-stone hover:text-brand-blue">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="text-sm font-semibold text-brand-dark hover:text-brand-blue">About</Link>
          <Link href="/blog" className="text-sm font-semibold text-brand-dark hover:text-brand-blue">Resources</Link>
          <Link href="/contact" className="text-sm font-semibold text-brand-dark hover:text-brand-blue">Contact</Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-1.5 text-sm font-bold text-brand-blue">
            <Phone size={16} /> {site.phone}
          </a>
          <Link href="/quote" className="rounded-md bg-brand-amber px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#bb6122]">
            Free Quote
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-warm bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm font-medium text-brand-dark hover:bg-brand-stone">{s.label}</Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm font-semibold text-brand-dark hover:bg-brand-stone">About</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm font-semibold text-brand-dark hover:bg-brand-stone">Resources</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm font-semibold text-brand-dark hover:bg-brand-stone">Contact</Link>
            <a href={`tel:${site.phoneRaw}`} className="mt-2 flex items-center gap-2 px-2 py-2 text-sm font-bold text-brand-blue"><Phone size={16} /> {site.phone}</a>
            <Link href="/quote" onClick={() => setOpen(false)} className="mt-1 rounded-md bg-brand-amber px-4 py-2.5 text-center text-sm font-bold text-white">Get Your Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}
