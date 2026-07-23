import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import NewsListBody from '@/components/article/NewsListBody'
import { Section } from '@/components/ui/primitives'
import { getNewsList } from '@/lib/wordpress'
import { pageMeta } from '@/lib/seo'

type Params = { params: Promise<{ page: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { page } = await params
  return pageMeta({
    title: `お知らせ（${page}ページ目）｜横浜の訪問介護`,
    description:
      '横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）からのお知らせ一覧です。',
    path: `/news/page/${page}`,
  })
}

export default async function NewsPagedPage({ params }: Params) {
  const { page } = await params
  const pageNum = Number(page)
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound()

  const { items, currentPage, totalPages } = await getNewsList(pageNum)
  if (pageNum > totalPages) notFound()

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="お知らせ"
        lead="営業時間や休業のご案内、サービス・採用に関する更新など、当事業所からのお知らせをお届けします。"
        crumbs={[
          { name: 'お知らせ', href: '/news' },
          { name: `${currentPage}ページ目`, href: `/news/page/${currentPage}` },
        ]}
      />

      <Section tone="paper">
        <NewsListBody
          items={items}
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/news"
        />
      </Section>

      <ContactBlock />
    </>
  )
}
