import Link from 'next/link'

type Item = { name: string; href: string; count?: number }

type Props = {
  items: Item[]
  /** 「すべて」のリンク先。指定すると先頭に表示する。 */
  allHref?: string
  /** 現在選択中のカテゴリ名（未指定なら「すべて」を選択扱い） */
  current?: string
}

/**
 * カテゴリ絞り込みチップ（お知らせ・専門コラムで共通）。
 */
export default function CategoryChips({ items, allHref, current }: Props) {
  if (items.length === 0) return null

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
      active
        ? 'bg-leaf-500 text-white'
        : 'bg-white text-forest-700 ring-1 ring-paper-200 hover:bg-leaf-50 hover:ring-leaf-300'
    }`

  return (
    <ul className="flex flex-wrap gap-2">
      {allHref && (
        <li>
          <Link href={allHref} className={chip(!current)}>
            すべて
          </Link>
        </li>
      )}
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={chip(current === item.name)}>
            {item.name}
            {typeof item.count === 'number' && (
              <span className="ml-1.5 text-[11px] opacity-70">{item.count}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
