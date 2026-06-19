import Link from 'next/link'
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-28 text-center">
      <h1 className="font-heading text-6xl font-extrabold text-brand-blue">404</h1>
      <p className="mt-4 text-lg text-brand-dark/70">We couldn&apos;t find that page.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-brand-amber px-6 py-3 font-heading text-sm font-bold text-white">Back to Home</Link>
    </section>
  )
}
