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

export const metadata = pageMeta({
  title: '専門コラム｜横浜の訪問介護・介護保険の基礎知識',
  description:
    '横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）が発信する専門コラム。訪問介護・身体介護・生活援助・自費介護・重度訪問介護・介護保険・ケアマネジャーとの相談など、在宅介護に役立つ情報をわかりやすく解説します。',
  path: '/column',
  keywords: [
    '横浜 訪問介護',
    '訪問介護 コラム',
    '介護保険 わかりやすく',
    '在宅介護 基礎知識',
    '横浜 介護',
  ],
})

export default function ColumnIndexPage() {
  const all = getColumnSummaries()
  const { items, currentPage, totalPages } = paginate(all, 1, COLUMN_PER_PAGE)
  const categories = getColumnCategories()

  return (
    <>
      <PageHeader
        eyebrow="Column"
        title="専門コラム"
        lead="訪問介護や介護保険のしくみ、ご家族の関わり方、横浜での在宅介護の実際など。現場の視点から、はじめての方にもわかりやすくお伝えします。"
        crumbs={[{ name: '専門コラム', href: '/column' }]}
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
