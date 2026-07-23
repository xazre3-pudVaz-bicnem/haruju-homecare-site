import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getColumnSummaries, getColumnCategories, COLUMN_PER_PAGE } from '@/lib/column'
import { getNewsList } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: {
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }[] = [
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
    { path: '/column', priority: 0.9, changeFrequency: 'daily' },
    { path: '/area/yokohama-home-care', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/care-manager', priority: 0.8, changeFrequency: 'monthly' },
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

  /* ———— 専門コラム（Markdown管理・毎日追加される） ———— */
  const columns = getColumnSummaries()

  const columnEntries: MetadataRoute.Sitemap = columns.map((c) => ({
    url: `${SITE_URL}/column/${c.slug}`,
    lastModified: new Date(c.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // コラム一覧の2ページ目以降
  const columnPageCount = Math.max(1, Math.ceil(columns.length / COLUMN_PER_PAGE))
  const columnPageEntries: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, columnPageCount - 1) },
    (_, i) => ({
      url: `${SITE_URL}/column/page/${i + 2}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    }),
  )

  // コラムのカテゴリ一覧
  const columnCategoryEntries: MetadataRoute.Sitemap = getColumnCategories().map((c) => ({
    url: `${SITE_URL}/column/category/${encodeURIComponent(c.name)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  /* ———— お知らせ（WordPress管理） ———— */
  let newsEntries: MetadataRoute.Sitemap = []
  try {
    const { items } = await getNewsList(1)
    newsEntries = items.map((n) => ({
      url: `${SITE_URL}/news/${n.slug}`,
      lastModified: new Date(n.modified ?? n.date),
      changeFrequency: 'yearly',
      priority: 0.5,
    }))
  } catch {
    newsEntries = []
  }

  return [
    ...staticEntries,
    ...columnEntries,
    ...columnPageEntries,
    ...columnCategoryEntries,
    ...newsEntries,
  ]
}
