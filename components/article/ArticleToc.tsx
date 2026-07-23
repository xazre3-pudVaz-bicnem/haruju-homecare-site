import type { TocItem } from '@/lib/column'

/**
 * 目次。専門コラムの「読みやすさ・専門性」を支える要素。
 * 見出し（##）が2つ以上あるときだけ表示する。
 */
export default function ArticleToc({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null

  return (
    <nav
      aria-label="目次"
      className="rounded-3xl border border-leaf-200 bg-leaf-50 p-6 sm:p-7"
    >
      <p className="rule-accent text-sm font-semibold tracking-wider text-leaf-700">
        目次
      </p>
      <ol className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3 text-[14px] leading-relaxed">
            <span className="font-serif text-leaf-600">{String(i + 1).padStart(2, '0')}</span>
            <a
              href={`#${item.id}`}
              className="text-ink-700 underline-offset-4 transition-colors hover:text-leaf-700 hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
