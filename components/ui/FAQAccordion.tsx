'use client'

import { useState } from 'react'
import Icon from './Icon'

type QA = { q: string; a: string }

/**
 * アコーディオン形式のFAQ。
 * details/summary ベースではなく状態管理で開閉し、アニメーションを付ける。
 * 構造化データ（FAQPage）は各ページ側で faqSchema を出力する。
 */
export default function FAQAccordion({ items }: { items: readonly QA[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="divide-y divide-paper-200 overflow-hidden rounded-3xl border border-paper-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-leaf-50 sm:px-7"
            >
              <span
                className="mt-0.5 font-serif text-lg font-semibold text-leaf-600"
                aria-hidden="true"
              >
                Q
              </span>
              <span className="flex-1 font-medium text-forest-800">{item.q}</span>
              <Icon
                name="arrow"
                size={18}
                className={`mt-1 shrink-0 text-leaf-600 transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex gap-4 px-5 pb-6 sm:px-7">
                  <span
                    className="font-serif text-lg font-semibold text-ink-400"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <p className="flex-1 text-[14px] leading-relaxed text-ink-700">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
