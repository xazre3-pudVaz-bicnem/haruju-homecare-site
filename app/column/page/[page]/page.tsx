import { notFound } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import ColumnListBody from '@/components/article/ColumnListBody'
import { Section } from '@/components/ui/primitives'
import {
  getColumnSummaries,
  getColumnCategories,
  paginate,
  COLUMN_PER_PAGE,
} from '@/lib/column'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ page: string }> }

/** 2ページ目以降を静的生成する（記事が増えても自動で追従する） */
export function generateStaticParams() {
  const total = Math.max(1, Math.ceil(getColumnSummaries().length / COLUMN_PER_PAGE))
  // 1ページ目は /column が担当するため 2 ページ目以降のみ
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params }: Params) {
  const { page } = await params
  return pageMeta({
    title: `専門コラム（${page}ページ目）｜横浜の訪問介護`,
    description:
      '横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）の専門コラム一覧です。訪問介護・介護保険・在宅介護に役立つ情報をお届けします。',
    path: `/column/page/${page}`,
  })
}

export default async function ColumnPagedPage({ params }: Params) {
  const { page } = await params
  const pageNum = Number(page)
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound()

  const all = getColumnSummaries()
  const { items, currentPage, totalPages } = paginate(all, pageNum, COLUMN_PER_PAGE)
  if (pageNum > totalPages) notFound()

  const categories = getColumnCategories()

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title="専門コラム"
        lead="訪問介護や介護保険のしくみ、ご家族の関わり方、横浜での在宅介護の実際など。現場の視点から、はじめての方にもわかりやすくお伝えします。"
        crumbs={[
          { name: '専門コラム', href: '/column' },
          { name: `${currentPage}ページ目`, href: `/column/page/${currentPage}` },
        ]}
      />

      <Section tone="paper">
        <ColumnListBody
          items={items}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/column"
          categories={categories}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
