import Link from 'next/link'
import Illustration from './Illustration'
import Icon from './Icon'
import type { IllustKey } from '@/lib/images'

type Props = {
  illust: IllustKey
  title: string
  body?: string
  /** 指定するとカード全体がリンクになる */
  href?: string
  /** イラストの配置。'top'（中央上）or 'side'（左横） */
  layout?: 'top' | 'side'
  illustTone?: 'white' | 'leaf'
  className?: string
}

/**
 * イラスト＋見出し＋説明のカード。
 * 「訪問介護でできること」「自費介護の利用例」「ご利用の流れ（ケース別）」
 * 「FAQ・相談・求人などの導線」で共有する。1カード＝1イラスト。
 */
export default function IllustCard({
  illust,
  title,
  body,
  href,
  layout = 'top',
  illustTone = 'leaf',
  className = '',
}: Props) {
  const side = layout === 'side'
  const inner = (
    <>
      <Illustration
        name={illust}
        size={side ? 84 : 104}
        tone={illustTone}
        className={side ? 'shrink-0' : ''}
        sizes={side ? '84px' : '104px'}
      />
      <div className={side ? '' : 'mt-5'}>
        <h3 className="font-serif text-[17px] text-forest-800">{title}</h3>
        {body && (
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-700">{body}</p>
        )}
        {href && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-leaf-700">
            詳しく見る
            <Icon name="arrow" size={15} />
          </span>
        )}
      </div>
    </>
  )

  const base = `group flex h-full rounded-3xl border border-paper-200 bg-white p-6 transition-all duration-300 ${
    side ? 'flex-row items-start gap-4' : 'flex-col items-center text-center'
  } ${href ? 'hover:-translate-y-1 hover:border-leaf-300 hover:shadow-[0_16px_40px_-12px_rgba(31,61,43,0.16)]' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    )
  }
  return <div className={base}>{inner}</div>
}
