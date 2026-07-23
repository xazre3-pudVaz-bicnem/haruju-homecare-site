import NewsRow from './NewsRow'
import Pagination from './Pagination'
import Reveal from '@/components/ui/Reveal'
import { formatNewsDate, type NewsItem } from '@/lib/wordpress'

type Props = {
  items: NewsItem[]
  currentPage: number
  totalPages: number
  /** ページネーションのベースパス（例: '/news'） */
  basePath: string
}

/**
 * お知らせ一覧の本体。
 * 会社からのお知らせらしく、「更新履歴」風のシンプルな一覧にする。
 */
export default function NewsListBody({ items, currentPage, totalPages, basePath }: Props) {
  if (items.length === 0) {
    return (
      <p className="rounded-3xl border border-paper-200 bg-white px-6 py-14 text-center text-[15px] text-ink-600">
        現在お知らせはありません。
      </p>
    )
  }

  return (
    <>
      <Reveal>
        <ul className="divide-y divide-paper-200 overflow-hidden rounded-3xl border border-paper-200 bg-white">
          {items.map((item) => (
            <NewsRow
              key={item.slug}
              href={`/news/${item.slug}`}
              title={item.title}
              date={formatNewsDate(item.date)}
              category={item.category}
            />
          ))}
        </ul>
      </Reveal>

      <Pagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />
    </>
  )
}
