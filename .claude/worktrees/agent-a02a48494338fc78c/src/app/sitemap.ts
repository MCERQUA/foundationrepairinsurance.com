import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { services } from '@/lib/content'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/about', '/contact', '/quote', '/blog'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
  }))
  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
