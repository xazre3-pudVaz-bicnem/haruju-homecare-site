import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { NEWS } from '@/lib/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/service', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/service/home-care', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/service/private-care', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/service/severe-home-care', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/flow', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/recruit', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/recruit/work-style', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/recruit/faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/company', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/news', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/area/yokohama-home-care', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/care-manager', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/family', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const newsEntries: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${SITE_URL}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticEntries, ...newsEntries]
}
