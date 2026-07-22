'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { COMPANY, LINE_URL } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

/**
 * 常時表示のCTA導線。
 * - スマホ: 画面下部に固定バー（電話／LINE／お問い合わせ）
 * - PC: スクロール後に右下へフローティングボタンを表示
 * ヒーローにはCTAを置かない方針だが、こちらはページ全体の補助導線として設置する。
 */
export default function FloatingCTA() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* スマホ: 下部固定バー */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-paper-200 bg-white/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-[1fr_1fr_1.3fr] gap-2 px-3 py-2.5">
          <a
            href={COMPANY.phoneTel}
            className="flex flex-col items-center justify-center rounded-xl bg-leaf-50 py-1.5 text-forest-700"
            aria-label="電話をかける"
          >
            <Icon name="phone" size={20} className="text-leaf-600" />
            <span className="mt-0.5 text-[10px] font-semibold">電話</span>
          </a>
          {LINE_URL ? (
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-xl bg-[#06C755] py-1.5 text-white"
              aria-label="LINEで相談する"
            >
              <Icon name="chat" size={20} />
              <span className="mt-0.5 text-[10px] font-semibold">LINE</span>
            </a>
          ) : (
            <Link
              href="/flow"
              className="flex flex-col items-center justify-center rounded-xl bg-leaf-50 py-1.5 text-forest-700"
              aria-label="ご利用の流れを見る"
            >
              <Icon name="leaf" size={20} className="text-leaf-600" />
              <span className="mt-0.5 text-[10px] font-semibold">ご利用の流れ</span>
            </Link>
          )}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center rounded-xl bg-leaf-500 py-1.5 text-white"
            aria-label="お問い合わせフォームへ"
          >
            <Icon name="mail" size={20} />
            <span className="mt-0.5 text-[10px] font-semibold">無料相談</span>
          </Link>
        </div>
      </div>

      {/* PC: 右下フローティング */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-2.5 transition-all duration-300 lg:flex ${
          shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(124,179,66,0.6)] transition-colors hover:bg-leaf-600"
        >
          <Icon name="mail" size={18} />
          無料相談・お問い合わせ
        </Link>
        <a
          href={COMPANY.phoneTel}
          className="inline-flex items-center gap-2 rounded-full border border-paper-200 bg-white px-6 py-3 text-sm font-semibold text-forest-700 shadow-lg transition-colors hover:bg-leaf-50"
        >
          <Icon name="phone" size={18} className="text-leaf-600" />
          {COMPANY.phone.value}
        </a>
      </div>
    </>
  )
}
