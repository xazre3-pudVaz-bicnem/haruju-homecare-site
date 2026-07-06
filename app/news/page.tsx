import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section } from '@/components/ui/primitives'
import { NEWS, formatDate } from '@/lib/news'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'お知らせ｜横浜の訪問介護 最新情報',
  description:
    '横浜の訪問介護 株式会社はるじゅからのお知らせ一覧です。サービスに関するご案内、採用情報の更新、その他の最新情報を掲載しています。',
  path: '/news',
  keywords: ['横浜 訪問介護', '株式会社はるじゅ', 'お知らせ'],
})

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="お知らせ"
        lead="サービスや採用に関するご案内など、はるじゅからの最新情報をお届けします。"
        crumbs={[{ name: 'お知らせ', href: '/news' }]}
      />

      <Section tone="white">
        <Reveal>
          <div className="divide-y divide-paper-200 overflow-hidden rounded-3xl border border-paper-200 bg-white">
            {NEWS.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-leaf-50 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex items-center gap-4">
                  <time className="text-[13px] text-ink-500" dateTime={n.date}>
                    {formatDate(n.date)}
                  </time>
                  <span className="rounded-full bg-leaf-100 px-2.5 py-0.5 text-[11px] font-medium text-forest-600">
                    {n.category}
                  </span>
                </div>
                <span className="flex-1 text-[15px] font-medium text-forest-800">
                  {n.title}
                </span>
                <Icon name="arrow" size={16} className="hidden shrink-0 text-leaf-600 sm:block" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
