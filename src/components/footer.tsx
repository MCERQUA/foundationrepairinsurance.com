import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-brand-warm bg-brand-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-amber font-heading text-lg font-extrabold text-white">F</span>
            <span className="font-heading text-base font-extrabold">Foundation Repair Insurance</span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Specialized insurance for foundation repair, underpinning, piering, and structural repair contractors. A program of {site.agency}.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Coverage</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/services/general-liability" className="hover:text-white">General Liability</Link></li>
            <li><Link href="/services/professional-liability" className="hover:text-white">Professional Liability</Link></li>
            <li><Link href="/services/workers-comp" className="hover:text-white">Workers&apos; Comp</Link></li>
            <li><Link href="/services/commercial-auto" className="hover:text-white">Commercial Auto</Link></li>
            <li><Link href="/services/equipment-tools" className="hover:text-white">Equipment &amp; Tools</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Company</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/about" className="hover:text-white">About CCA</Link></li>
            <li><Link href="/blog" className="hover:text-white">Resources &amp; Blog</Link></li>
            <li><Link href="/quote" className="hover:text-white">Get a Quote</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-amber">Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li className="flex items-center gap-2"><Phone size={15} /> <a href={`tel:${site.phoneRaw}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex items-center gap-2"><Mail size={15} /> <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5" /> <span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.agency}. Licensed in all 50 states. NPN 8608479.</p>
          <p>Coverage examples are illustrative; actual coverage is subject to policy terms.</p>
        </div>
      </div>
    </footer>
  )
}
