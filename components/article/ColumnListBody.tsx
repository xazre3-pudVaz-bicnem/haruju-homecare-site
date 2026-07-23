import ArticleCard from './ArticleCard'
import Pagination from './Pagination'
import CategoryChips from './CategoryChips'
import Reveal from '@/components/ui/Reveal'
import { formatColumnDate, type ColumnSummary } from '@/lib/column'

type Props = {
  items: ColumnSummary[]
  currentPage: number
  totalPages: number
  /** ページネーションのベースパス（例: '/column' or '/column/category/訪問介護'） */
  basePath: string
  categories: { name: string; count: number }[]
  /** 選択中カテゴリ（カテゴリページのとき） */
  currentCategory?: string
  /** 記事が0件のときの文言 */
  emptyMessage?: string
}

/**
 * 専門コラム一覧の本体（カテゴリ絞り込み＋カード一覧＋ページネーション）。
 * /column、/column/page/[page]、/column/category/[category] で共通利用する。
 */
export default function ColumnListBody({
  items,
  currentPage,
  totalPages,
  basePath,
  categories,
  currentCategory,
  emptyMessage = 'コラムは順次公開予定です。もうしばらくお待ちください。',
}: Props) {
  return (
    <>
      {categories.length > 0 && (
        <Reveal>
          <CategoryChips
            allHref="/column"
            current={currentCategory}
            items={categories.map((c) => ({
              name: c.name,
              href: `/column/category/${encodeURIComponent(c.name)}`,
              count: c.count,
            }))}
          />
        </Reveal>
      )}

      {items.length === 0 ? (
        <p className="mt-12 rounded-3xl border border-paper-200 bg-white px-6 py-14 text-center text-[15px] text-ink-600">
          {emptyMessage}
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 70}>
              <ArticleCard
                href={`/column/${post.slug}`}
                title={post.title}
                description={post.description}
                date={formatColumnDate(post.date)}
                category={post.category}
                image={post.image}
                imageAlt={`${post.title}のイメージ`}
              />
            </Reveal>
          ))}
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />
    </>
  )
}
