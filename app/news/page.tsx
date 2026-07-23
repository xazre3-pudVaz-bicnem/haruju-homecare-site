import PageHeader from '@/components/ui/PageHeader'
import ContactBlock from '@/components/ui/ContactBlock'
import NewsListBody from '@/components/article/NewsListBody'
import { Section } from '@/components/ui/primitives'
import { getNewsList } from '@/lib/wordpress'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'お知らせ｜横浜の訪問介護 最新情報',
  description:
    '横浜の訪問介護 訪問介護ステーションNAE（株式会社はるじゅ）からのお知らせです。営業時間の変更、休業のご案内、サービス開始、採用情報の更新、地域での活動などをお伝えします。',
  path: '/news',
  keywords: ['横浜 訪問介護', 'お知らせ', '休業案内', '営業時間'],
})

export default async function NewsIndexPage() {
  const { items, currentPage, totalPages } = await getNewsList(1)

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="お知らせ"
        lead="営業時間や休業のご案内、サービス・採用に関する更新など、当事業所からのお知らせをお届けします。"
        crumbs={[{ name: 'お知らせ', href: '/news' }]}
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
