'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl divide-y divide-brand-warm rounded-xl border border-brand-warm bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-heading text-base font-bold text-brand-dark">{item.q}</span>
            {open === i ? <Minus size={18} className="shrink-0 text-brand-amber" /> : <Plus size={18} className="shrink-0 text-brand-blue" />}
          </button>
          {open === i && (
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-brand-dark/75">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
