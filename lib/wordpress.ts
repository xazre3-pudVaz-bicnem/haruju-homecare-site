import { FALLBACK_NEWS, type FallbackNews } from './news'

/**
 * お知らせ（/news）を WordPress REST API から取得する。
 *
 * - 記事の管理はすべて WordPress 側（管理者が手動投稿）
 * - 専門コラム（/column）とは完全に分離している
 * - 環境変数 `NEXT_PUBLIC_WP_API_BASE_URL` に
 *   例）https://wp.example.com/wp-json/wp/v2 を設定すると有効になる
 * - 未設定・接続エラー時は同梱のフォールバック記事を表示し、
 *   サイトが空にならない・ビルドが落ちないようにしている
 */

const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE_URL?.trim() || ''

/** WordPressが設定済みか */
export const isWordPressEnabled = WP_API_BASE.length > 0

/** 一覧の1ページあたり件数 */
export const NEWS_PER_PAGE = 10

/** 再検証間隔（秒）。管理者の投稿が1時間以内に反映される。 */
const REVALIDATE = 600

export type WPPost = {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  modified?: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
}

/** 画面で扱う共通の形（WordPress / フォールバック のどちらでも同じ形にそろえる） */
export type NewsItem = {
  slug: string
  title: string
  /** 本文HTML（WordPressのrenderedをそのまま利用） */
  contentHtml: string
  /** 抜粋（プレーンテキスト） */
  excerpt: string
  date: string // ISO or YYYY-MM-DD
  modified?: string
  category: string
  image: string | null
}

export type NewsListResult = {
  items: NewsItem[]
  currentPage: number
  totalPages: number
  totalItems: number
  /** WordPressから取得できたか（false = フォールバック表示） */
  fromWordPress: boolean
}

/* ———————————— 変換ユーティリティ ———————————— */

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8230;/g, '…')
    .replace(/\s+/g, ' ')
    .trim()
}

function toNewsItem(post: WPPost): NewsItem {
  const media = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'お知らせ'
  return {
    slug: post.slug,
    title: stripHtml(post.title?.rendered ?? ''),
    contentHtml: post.content?.rendered ?? '',
    excerpt: stripHtml(post.excerpt?.rendered ?? '').slice(0, 120),
    date: post.date,
    modified: post.modified,
    category,
    image: media,
  }
}

function fallbackToNewsItem(n: FallbackNews): NewsItem {
  return {
    slug: n.slug,
    title: n.title,
    contentHtml: n.body.map((p) => `<p>${p}</p>`).join('\n'),
    excerpt: n.body[0]?.slice(0, 120) ?? '',
    date: n.date,
    category: n.category,
    image: null,
  }
}

function paginateFallback(page: number): NewsListResult {
  const all = FALLBACK_NEWS.map(fallbackToNewsItem)
  const totalPages = Math.max(1, Math.ceil(all.length / NEWS_PER_PAGE))
  const current = Math.min(Math.max(1, page), totalPages)
  const start = (current - 1) * NEWS_PER_PAGE
  return {
    items: all.slice(start, start + NEWS_PER_PAGE),
    currentPage: current,
    totalPages,
    totalItems: all.length,
    fromWordPress: false,
  }
}

/* ———————————— 取得API ———————————— */

/** お知らせ一覧（ページネーション対応） */
export async function getNewsList(page = 1, category?: string): Promise<NewsListResult> {
  if (!isWordPressEnabled) return paginateFallback(page)

  try {
    const params = new URLSearchParams({
      _embed: '1',
      per_page: String(NEWS_PER_PAGE),
      page: String(Math.max(1, page)),
    })
    if (category) params.set('categories_slug', category)

    const res = await fetch(`${WP_API_BASE}/posts?${params.toString()}`, {
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) return paginateFallback(page)

    const posts: WPPost[] = await res.json()
    const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? '1') || 1
    const totalItems = Number(res.headers.get('X-WP-Total') ?? posts.length) || posts.length

    if (posts.length === 0 && page === 1) return paginateFallback(page)

    return {
      items: posts.map(toNewsItem),
      currentPage: Math.max(1, page),
      totalPages,
      totalItems,
      fromWordPress: true,
    }
  } catch {
    return paginateFallback(page)
  }
}

/** 最新のお知らせ（トップページ用） */
export async function getLatestNews(limit = 3): Promise<NewsItem[]> {
  const { items } = await getNewsList(1)
  return items.slice(0, limit)
}

/** お知らせ詳細 */
export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  if (isWordPressEnabled) {
    try {
      const res = await fetch(
        `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
        { next: { revalidate: REVALIDATE } },
      )
      if (res.ok) {
        const posts: WPPost[] = await res.json()
        if (posts[0]) return toNewsItem(posts[0])
      }
    } catch {
      // フォールバックへ
    }
  }
  const hit = FALLBACK_NEWS.find((n) => n.slug === slug)
  return hit ? fallbackToNewsItem(hit) : null
}

/** 静的生成用のスラッグ一覧（WP未設定時はフォールバック分） */
export async function getAllNewsSlugs(): Promise<string[]> {
  if (!isWordPressEnabled) return FALLBACK_NEWS.map((n) => n.slug)
  try {
    const res = await fetch(`${WP_API_BASE}/posts?per_page=100&_fields=slug`, {
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) return FALLBACK_NEWS.map((n) => n.slug)
    const posts: Array<{ slug: string }> = await res.json()
    return posts.map((p) => p.slug)
  } catch {
    return FALLBACK_NEWS.map((n) => n.slug)
  }
}

/** カテゴリ一覧（絞り込み用） */
export async function getNewsCategories(): Promise<{ name: string; slug: string }[]> {
  if (!isWordPressEnabled) {
    return [...new Set(FALLBACK_NEWS.map((n) => n.category))].map((name) => ({
      name,
      slug: encodeURIComponent(name),
    }))
  }
  try {
    const res = await fetch(`${WP_API_BASE}/categories?per_page=100&hide_empty=1`, {
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) return []
    const cats: Array<{ name: string; slug: string; count: number }> = await res.json()
    return cats.map((c) => ({ name: c.name, slug: c.slug }))
  } catch {
    return []
  }
}

/** 日付を日本語表記に整形 */
export function formatNewsDate(date: string): string {
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
