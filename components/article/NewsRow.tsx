import Link from 'next/link'
import Icon from '@/components/ui/Icon'

type Props = {
  href: string
  title: string
  date: string
  category?: string
}

/**
 * お知らせ1件分の行。
 * 「更新履歴」らしいシンプルな一列表示。専門コラムのカードとは見た目を明確に分ける。
 */
export default function NewsRow({ href, title, date, category }: Props) {
  return (
    <li>
      <Link
        href={href}
        className="group flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-leaf-50 sm:flex-row sm:items-center sm:gap-6"
      >
        <div className="flex items-center gap-4">
          <time dateTime={date} className="text-[13px] tabular-nums text-ink-500">
            {date}
          </time>
          {category && (
            <span className="rounded-full bg-leaf-100 px-2.5 py-0.5 text-[11px] font-medium text-forest-600">
              {category}
            </span>
          )}
        </div>
        <span className="flex-1 text-[14.5px] font-medium text-forest-800 transition-colors group-hover:text-leaf-700">
          {title}
        </span>
        <Icon
          name="arrow"
          size={16}
          className="hidden shrink-0 text-leaf-600 transition-transform group-hover:translate-x-1 sm:block"
        />
      </Link>
    </li>
  )
}
