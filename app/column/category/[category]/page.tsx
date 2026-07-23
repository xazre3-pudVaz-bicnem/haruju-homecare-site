import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import ColumnListBody from '@/components/article/ColumnListBody'
import { Section } from '@/components/ui/primitives'
import {
  getColumnsByCategory,
  getColumnCategories,
  paginate,
  COLUMN_PER_PAGE,
} from '@/lib/column'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return getColumnCategories().map((c) => ({ category: encodeURIComponent(c.name) }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params
  const name = decodeURIComponent(category)
  return pageMeta({
    title: `${name}のコラム一覧｜横浜の訪問介護`,
    description: `「${name}」に関する専門コラムの一覧です。横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）が、在宅介護に役立つ情報をわかりやすくお届けします。`,
    path: `/column/category/${category}`,
    keywords: [name, '横浜 訪問介護', '在宅介護'],
  })
}

export default async function ColumnCategoryPage({ params }: Params) {
  const { category } = await params
  const name = decodeURIComponent(category)

  const all = getColumnsByCategory(name)
  if (all.length === 0) notFound()

  const { items, currentPage, totalPages } = paginate(all, 1, COLUMN_PER_PAGE)
  const categories = getColumnCategories()

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title={`${name}のコラム`}
        lead={`「${name}」に関する記事をまとめました。横浜での在宅介護に役立つ情報をお届けします。`}
        crumbs={[
          { name: '専門コラム', href: '/column' },
          { name, href: `/column/category/${category}` },
        ]}
      />

      <Section tone="paper">
        <ColumnListBody
          items={items}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/column/category/${category}`}
          categories={categories}
          currentCategory={name}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
