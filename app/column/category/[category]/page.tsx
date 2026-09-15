import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import ColumnListBody from '@/components/article/ColumnListBody'
import { Section } from '@/components/ui/primitives'
import {
  getColumnsByCategory,
  getColumnCategories,
  getColumnCategoryBySlug,
  categoryHref,
  paginate,
  COLUMN_PER_PAGE,
} from '@/lib/column'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return getColumnCategories().map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params
  const cat = getColumnCategoryBySlug(category)
  if (!cat) return {}
  return pageMeta({
    title: `${cat.name}のコラム一覧｜横浜の訪問介護`,
    description: `「${cat.name}」に関する専門コラムの一覧です。横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）が、在宅介護に役立つ情報をわかりやすくお届けします。`,
    path: `/column/category/${cat.slug}`,
    keywords: [cat.name, '横浜 訪問介護', '在宅介護'],
  })
}

export default async function ColumnCategoryPage({ params }: Params) {
  const { category } = await params
  const cat = getColumnCategoryBySlug(category)

  if (!cat) {
    // 旧URL（日本語カテゴリ名）でのアクセスは新URLへ恒久リダイレクト
    let legacyName = category
    try {
      legacyName = decodeURIComponent(category)
    } catch {}
    if (getColumnsByCategory(legacyName).length > 0) permanentRedirect(categoryHref(legacyName))
    notFound()
  }

  const all = getColumnsByCategory(cat.name)
  const { items, currentPage, totalPages } = paginate(all, 1, COLUMN_PER_PAGE)
  const categories = getColumnCategories()

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title={`${cat.name}のコラム`}
        lead={`「${cat.name}」に関する記事をまとめました。横浜での在宅介護に役立つ情報をお届けします。`}
        crumbs={[
          { name: '専門コラム', href: '/column' },
          { name: cat.name, href: `/column/category/${cat.slug}` },
        ]}
      />

      <Section tone="paper">
        <ColumnListBody
          items={items}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/column/category/${cat.slug}`}
          categories={categories}
          currentCategory={cat.name}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
