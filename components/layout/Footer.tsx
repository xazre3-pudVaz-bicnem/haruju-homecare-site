import Link from 'next/link'
import { COMPANY, SITE_NAME, PHONE_NOTE } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

const FOOTER_NAV: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'サービス',
    links: [
      { label: 'サービス内容', href: '/service' },
      { label: '訪問介護', href: '/service/home-care' },
      { label: '自費介護', href: '/service/private-care' },
      { label: '重度訪問介護', href: '/service/severe-home-care' },
      { label: 'ご利用の流れ', href: '/flow' },
    ],
  },
  {
    heading: '採用',
    links: [
      { label: '求人情報', href: '/recruit' },
      { label: '働く環境', href: '/recruit/work-style' },
      { label: '採用FAQ', href: '/recruit/faq' },
    ],
  },
  {
    heading: 'ご案内',
    links: [
      { label: 'はるじゅについて', href: '/about' },
      { label: 'ご家族の方へ', href: '/family' },
      { label: 'ケアマネジャーの方へ', href: '/care-manager' },
      { label: 'よくある質問', href: '/faq' },
    ],
  },
  {
    heading: '会社案内',
    links: [
      { label: '会社概要', href: '/company' },
      { label: 'お知らせ', href: '/news' },
      { label: '横浜で訪問介護をお探しの方へ', href: '/area/yokohama-home-care' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-paper-200 bg-paper-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          {/* ブランド */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-500 text-white">
                <Icon name="leaf" size={20} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-forest-800">
                  株式会社はるじゅ
                </span>
                <span className="mt-0.5 text-[12px] text-ink-500">
                  {COMPANY.officeName}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-ink-600">
              横浜市内を中心に、訪問介護・自費介護・重度訪問介護を行う地域密着の介護事業所です。
              住み慣れたご自宅での暮らしを、ご本人とご家族とともに支えます。
            </p>
            <div className="mt-6 space-y-1.5 text-[13.5px] text-ink-600">
              <p className="flex items-start gap-2">
                <Icon name="map" size={16} className="mt-0.5 shrink-0 text-leaf-600" />
                <span>
                  {!COMPANY.postalCode.isDummy && `〒${COMPANY.postalCode.value} `}
                  {COMPANY.address.value}
                  {COMPANY.address.isDummy && (
                    <span className="ml-1 text-[11px] text-ink-400">※仮情報</span>
                  )}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="phone" size={16} className="shrink-0 text-leaf-600" />
                <a href={COMPANY.phoneTel} className="hover:text-leaf-700">
                  {COMPANY.phone.value}
                </a>
                {COMPANY.phone.isDummy && (
                  <span className="text-[11px] text-ink-400">※仮情報</span>
                )}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="clock" size={16} className="shrink-0 text-leaf-600" />
                <span>
                  {COMPANY.hours.value}
                  {COMPANY.hours.isDummy && (
                    <span className="ml-1 text-[11px] text-ink-400">※仮情報</span>
                  )}
                </span>
              </p>
            </div>
            <p className="mt-3 text-[11px] text-ink-400">{PHONE_NOTE}</p>
          </div>

          {/* ナビ */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="text-[13px] font-semibold text-forest-800">
                  {col.heading}
                </h2>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-ink-600 transition-colors hover:text-leaf-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-paper-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-ink-500">
            © {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-[11px] text-ink-400">
            ※住所・電話番号・営業時間などは仮情報です。正式情報が決まり次第、更新します。
          </p>
        </div>
      </div>
    </footer>
  )
}
