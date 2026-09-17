import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import ColumnListBody from '@/components/article/ColumnListBody'
import { Section } from '@/components/ui/primitives'
import {
  getColumnsByCategory,
  getColumnCategories,
  getColumnCategoryBySlug,
  paginate,
  COLUMN_PER_PAGE,
} from '@/lib/column'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ category: string; page: string }> }

/** カテゴリ一覧の2ページ目以降（1ページ目は /column/category/[category] が担当） */
export function generateStaticParams() {
  return getColumnCategories().flatMap((c) => {
    const total = Math.ceil(c.count / COLUMN_PER_PAGE)
    return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
      category: c.slug,
      page: String(i + 2),
    }))
  })
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, page } = await params
  const cat = getColumnCategoryBySlug(category)
  if (!cat) return {}
  return pageMeta({
    title: `${cat.name}のコラム一覧（${page}ページ目）｜横浜の訪問介護`,
    description: `「${cat.name}」に関する専門コラムの一覧（${page}ページ目）です。横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）が、在宅介護に役立つ情報をお届けします。`,
    path: `/column/category/${cat.slug}/page/${page}`,
    keywords: [cat.name, '横浜 訪問介護', '在宅介護'],
  })
}

export default async function ColumnCategoryPagedPage({ params }: Params) {
  const { category, page } = await params
  const cat = getColumnCategoryBySlug(category)
  const pageNum = Number(page)
  if (!cat || !Number.isInteger(pageNum) || pageNum < 2) notFound()

  const { items, currentPage, totalPages } = paginate(
    getColumnsByCategory(cat.name),
    pageNum,
    COLUMN_PER_PAGE,
  )
  if (pageNum > totalPages) notFound()

  const basePath = `/column/category/${cat.slug}`

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title={`${cat.name}のコラム`}
        lead={`「${cat.name}」に関する記事をまとめました。横浜での在宅介護に役立つ情報をお届けします。`}
        crumbs={[
          { name: '専門コラム', href: '/column' },
          { name: cat.name, href: basePath },
          { name: `${currentPage}ページ目`, href: `${basePath}/page/${currentPage}` },
        ]}
      />

      <Section tone="paper">
        <ColumnListBody
          items={items}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={basePath}
          categories={getColumnCategories()}
          currentCategory={cat.name}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
