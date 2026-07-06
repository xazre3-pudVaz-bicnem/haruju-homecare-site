import Link from 'next/link'
import Illustration from './Illustration'
import Icon from './Icon'
import type { IllustKey } from '@/lib/images'

type Props = {
  name: string
  href: string
  lead: string
  /** カード上部に丸く配置するイラスト */
  illust: IllustKey
  tags?: readonly string[]
}

/**
 * サービス紹介カード。上部に黄緑の丸枠イラストを配置する（クローバー調）。
 * 余白を広めにとり、法人サイトとして高品質に見せる。
 */
export default function ServiceCard({ name, href, lead, illust, tags }: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col items-center rounded-3xl border border-paper-200 bg-white p-6 text-center shadow-[0_1px_2px_rgba(31,61,43,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-[0_16px_40px_-12px_rgba(31,61,43,0.18)] sm:p-8">
      <Illustration
        name={illust}
        size={132}
        tone="leaf"
        className="transition-transform duration-300 group-hover:scale-[1.03]"
        sizes="132px"
      />
      <h3 className="mt-6 font-serif text-lg text-forest-800 sm:text-xl">{name}</h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">{lead}</p>
      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-leaf-100 px-2.5 py-1 text-[11px] font-medium text-forest-600"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700">
        詳しく見る
        <Icon
          name="arrow"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  )
}
