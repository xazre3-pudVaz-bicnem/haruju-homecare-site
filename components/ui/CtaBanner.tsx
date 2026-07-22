import Link from 'next/link'
import Icon from './Icon'
import { COMPANY, PHONE_NOTE } from '@/lib/constants'

type Props = {
  title?: string
  body?: string
  /** お問い合わせボタンのリンク先（種別プリセット可） */
  contactHref?: string
}

/**
 * ページ途中に置く軽めのCTA。電話とお問い合わせの2導線。
 * フッター前の ContactBlock より控えめで、コーポレート感を保つ。
 */
export default function CtaBanner({
  title = 'まずはお気軽にご相談ください',
  body = 'ご利用のご相談、料金や対応エリアのご確認など、ご質問だけでも歓迎します。ご家族・ケアマネジャーの方からのお問い合わせも承ります。',
  contactHref = '/contact',
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-leaf-200 bg-leaf-50 p-8 sm:p-10">
      <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-serif text-xl text-forest-800 sm:text-2xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-700">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
          <Link
            href={contactHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-600"
          >
            <Icon name="mail" size={18} />
            無料相談・お問い合わせ
          </Link>
          <a
            href={COMPANY.phoneTel}
            className="inline-flex flex-col items-center justify-center rounded-full border border-leaf-400 bg-white px-7 py-2.5 text-forest-700 transition-colors hover:bg-white/60"
          >
            <span className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Icon name="phone" size={18} className="text-leaf-600" />
              {COMPANY.phone.value}
            </span>
            <span className="text-[11px] text-ink-500">{PHONE_NOTE}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
