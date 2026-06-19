import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { posts, getPost } from '@/lib/posts'
import { CtaBanner } from '@/components/cta'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://foundationrepairinsurance.com/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: 'article' },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Contractors Choice Agency' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-amber">
          <ArrowLeft size={15} /> All Resources
        </Link>
        <span className="mt-6 inline-flex rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-bold text-brand-amber">{post.category}</span>
        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-brand-dark/60">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> June 19, 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime}</span>
          <span>By {post.author}</span>
        </div>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-brand-dark/85">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="!mt-10 font-heading text-2xl font-bold text-brand-dark">{block.text}</h2>
            if (block.type === 'h3') return <h3 key={i} className="!mt-8 font-heading text-xl font-bold text-brand-dark">{block.text}</h3>
            if (block.type === 'ul') return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand-amber">
                {block.items?.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            )
            return <p key={i}>{block.text}</p>
          })}
        </div>
      </article>
      <CtaBanner />
    </>
  )
}
