import Link from 'next/link'
import Icon from '@/components/ui/Icon'

type Props = {
  currentPage: number
  totalPages: number
  /** 例: '/column'。1ページ目は basePath、2ページ目以降は `${basePath}/page/2` */
  basePath: string
}

function href(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}/page/${page}`
}

/** 表示するページ番号（前後2ページ＋先頭・末尾）を組み立てる */
function pageItems(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const set = new Set<number>([1, total, current])
  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) set.add(i)
  }
  const sorted = [...set].sort((a, b) => a - b)
  const out: (number | '…')[] = []
  let prev = 0
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push('…')
    out.push(p)
    prev = p
  }
  return out
}

/**
 * 一覧のページネーション（お知らせ・専門コラムで共通利用）。
 * 記事が1,000本以上に増えても番号が破綻しないよう省略表示にする。
 */
export default function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="ページ送り" className="mt-14 flex justify-center">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          {currentPage > 1 ? (
            <Link
              href={href(basePath, currentPage - 1)}
              rel="prev"
              className="inline-flex h-10 items-center gap-1 rounded-full border border-paper-200 bg-white px-4 text-[13px] font-medium text-forest-700 transition-colors hover:border-leaf-300 hover:bg-leaf-50"
            >
              <Icon name="arrow" size={15} className="rotate-180" />
              前へ
            </Link>
          ) : (
            <span className="inline-flex h-10 items-center gap-1 rounded-full border border-paper-100 px-4 text-[13px] text-ink-400">
              <Icon name="arrow" size={15} className="rotate-180" />
              前へ
            </span>
          )}
        </li>

        {pageItems(currentPage, totalPages).map((p, i) =>
          p === '…' ? (
            <li key={`gap-${i}`} className="px-1 text-ink-400">
              …
            </li>
          ) : (
            <li key={p}>
              {p === currentPage ? (
                <span
                  aria-current="page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-leaf-500 text-[13px] font-semibold text-white"
                >
                  {p}
                </span>
              ) : (
                <Link
                  href={href(basePath, p)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-200 bg-white text-[13px] font-medium text-forest-700 transition-colors hover:border-leaf-300 hover:bg-leaf-50"
                >
                  {p}
                </Link>
              )}
            </li>
          ),
        )}

        <li>
          {currentPage < totalPages ? (
            <Link
              href={href(basePath, currentPage + 1)}
              rel="next"
              className="inline-flex h-10 items-center gap-1 rounded-full border border-paper-200 bg-white px-4 text-[13px] font-medium text-forest-700 transition-colors hover:border-leaf-300 hover:bg-leaf-50"
            >
              次へ
              <Icon name="arrow" size={15} />
            </Link>
          ) : (
            <span className="inline-flex h-10 items-center gap-1 rounded-full border border-paper-100 px-4 text-[13px] text-ink-400">
              次へ
              <Icon name="arrow" size={15} />
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}
