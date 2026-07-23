import fs from 'fs'
import path from 'path'

/**
 * 専門コラム（/column）の読み込みユーティリティ。
 *
 * - 記事の実体は `content/column/*.md`（frontmatter + Markdown）
 * - GitHub Actions（.github/workflows/daily-column.yml）が毎日1本追加する
 * - WordPressは一切使わない。お知らせ（/news）とは完全に分離している
 * - 外部依存なし：frontmatterパーサーとMarkdown→HTML変換を内蔵し、
 *   記事が1,000本以上に増えてもビルドが壊れない構成にしている
 */

export type TocItem = { id: string; text: string }

export type ColumnPost = {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  category: string
  tags: string[]
  image: string
  topic?: string
  html: string
  toc: TocItem[]
}

/** 一覧カード用の軽量な型（本文HTMLを含まない） */
export type ColumnSummary = Omit<ColumnPost, 'html' | 'toc'>

const COLUMN_DIR = path.join(process.cwd(), 'content', 'column')

/** 1ページあたりの表示件数 */
export const COLUMN_PER_PAGE = 12

/** カテゴリごとの既定カバー画像（frontmatterにimageが無い場合のフォールバック） */
const CATEGORY_IMAGES: Record<string, string> = {
  訪問介護: '/images/photo-home-care.webp',
  身体介護: '/images/illust-bath.webp',
  生活援助: '/images/illust-laundry.webp',
  自費介護: '/images/photo-private-care.webp',
  重度訪問介護: '/images/photo-severe-care.webp',
  介護保険: '/images/illust-consultation.webp',
  ケアマネジャー: '/images/photo-consultation.webp',
  在宅介護: '/images/photo-about-care.webp',
  認知症: '/images/illust-family-consultation.webp',
  家族介護: '/images/photo-consultation.webp',
  横浜の介護: '/images/photo-hero-care.webp',
  介護職: '/images/photo-staff-team.webp',
}

const DEFAULT_IMAGE = '/images/photo-hero-care.webp'

/* ———————————— frontmatter ———————————— */

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2] }
}

function parseTags(value: string | undefined): string[] {
  if (!value) return []
  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((t) => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

/* ———————————— Markdown → HTML（生成記事の書式に限定） ———————————— */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function inline(s: string): string {
  let out = escapeHtml(s)
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text, href) => {
    const h = String(href)
    const safeHref =
      h.startsWith('/') || h.startsWith('https://') || h.startsWith('http://') ? h : '#'
    return `<a href="${safeHref}">${text}</a>`
  })
  return out
}

export function markdownToHtml(md: string): { html: string; toc: TocItem[] } {
  const lines = md.split(/\r?\n/)
  const html: string[] = []
  const toc: TocItem[] = []
  let h2Index = 0
  let listType: 'ul' | 'ol' | null = null
  let paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${paragraph.map(inline).join('<br />')}</p>`)
      paragraph = []
    }
  }
  const flushList = () => {
    if (listType) {
      html.push(`</${listType}>`)
      listType = null
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.trim() === '') {
      flushParagraph()
      flushList()
      continue
    }

    const h3 = line.match(/^###\s+(.+)$/)
    const h2 = line.match(/^##\s+(.+)$/)
    const h1 = line.match(/^#\s+(.+)$/)
    const ul = line.match(/^[-*]\s+(.+)$/)
    const ol = line.match(/^\d+[.)]\s+(.+)$/)

    if (h3) {
      flushParagraph()
      flushList()
      html.push(`<h3>${inline(h3[1])}</h3>`)
    } else if (h2 || h1) {
      // 本文中のh1はh2へ降格（ページのh1は記事タイトルが担う）
      flushParagraph()
      flushList()
      const text = (h2 ? h2[1] : h1![1]).trim()
      const id = `sec-${h2Index++}`
      toc.push({ id, text })
      html.push(`<h2 id="${id}">${inline(text)}</h2>`)
    } else if (ul) {
      flushParagraph()
      if (listType !== 'ul') {
        flushList()
        html.push('<ul>')
        listType = 'ul'
      }
      html.push(`<li>${inline(ul[1])}</li>`)
    } else if (ol) {
      flushParagraph()
      if (listType !== 'ol') {
        flushList()
        html.push('<ol>')
        listType = 'ol'
      }
      html.push(`<li>${inline(ol[1])}</li>`)
    } else {
      flushList()
      paragraph.push(line)
    }
  }
  flushParagraph()
  flushList()

  return { html: html.join('\n'), toc }
}

/* ———————————— 読み込みAPI ———————————— */

/** 全記事を新しい順で取得（本文HTML込み） */
export function getColumnPosts(): ColumnPost[] {
  if (!fs.existsSync(COLUMN_DIR)) return []

  const files = fs.readdirSync(COLUMN_DIR).filter((f) => f.endsWith('.md'))
  const posts: ColumnPost[] = []

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(COLUMN_DIR, file), 'utf8')
      const { data, body } = parseFrontmatter(raw)
      const slug = data.slug || file.replace(/\.md$/, '')
      if (!data.title || !slug) continue

      const { html, toc } = markdownToHtml(body)
      posts.push({
        slug,
        title: data.title,
        description: data.description || '',
        date: data.date || '1970-01-01',
        category: data.category || 'コラム',
        tags: parseTags(data.tags),
        image: data.image || CATEGORY_IMAGES[data.category || ''] || DEFAULT_IMAGE,
        topic: data.topic,
        html,
        toc,
      })
    } catch {
      // 壊れたファイルはスキップしてビルドを止めない
      continue
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** 一覧用の軽量サマリー（本文を落とす） */
export function getColumnSummaries(): ColumnSummary[] {
  return getColumnPosts().map(({ html: _html, toc: _toc, ...rest }) => rest)
}

export function getColumnPost(slug: string): ColumnPost | undefined {
  return getColumnPosts().find((p) => p.slug === slug)
}

/** カテゴリ一覧（記事数つき・多い順） */
export function getColumnCategories(): { name: string; count: number }[] {
  const map = new Map<string, number>()
  for (const p of getColumnSummaries()) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1)
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
}

export function getColumnsByCategory(category: string): ColumnSummary[] {
  return getColumnSummaries().filter((p) => p.category === category)
}

/** ページネーション。1,000本以上でも一覧が重くならないよう分割する。 */
export function paginate<T>(items: T[], page: number, perPage = COLUMN_PER_PAGE) {
  const totalItems = items.length
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage))
  const current = Math.min(Math.max(1, page), totalPages)
  const start = (current - 1) * perPage
  return {
    items: items.slice(start, start + perPage),
    currentPage: current,
    totalPages,
    totalItems,
  }
}

/** 関連記事（同カテゴリ優先） */
export function getRelatedColumns(post: ColumnPost, limit = 3): ColumnSummary[] {
  const all = getColumnSummaries().filter((p) => p.slug !== post.slug)
  const sameCategory = all.filter((p) => p.category === post.category)
  return [...sameCategory, ...all.filter((p) => p.category !== post.category)].slice(0, limit)
}

/** 日付を日本語表記に整形（YYYY-MM-DD → YYYY年M月D日） */
export function formatColumnDate(date: string): string {
  const [y, m, d] = date.split('-')
  if (!y || !m || !d) return date
  return `${y}年${Number(m)}月${Number(d)}日`
}
