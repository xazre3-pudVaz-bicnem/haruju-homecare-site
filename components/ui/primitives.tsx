import Link from 'next/link'
import type { ReactNode } from 'react'
import Icon from './Icon'

/** セクション背景トーン */
type Tone = 'white' | 'paper' | 'leaf' | 'forest'
const TONE_BG: Record<Tone, string> = {
  white: 'bg-white',
  paper: 'bg-paper-50',
  leaf: 'bg-leaf-50',
  forest: 'bg-forest-800 text-paper-100',
}

export function Section({
  children,
  tone = 'white',
  className = '',
  id,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`${TONE_BG[tone]} py-16 sm:py-22 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  )
}

/** チェックマーク付きリスト（身体介護・生活援助・利用例などで共有） */
export function CheckList({
  items,
  columns = 2,
  className = '',
}: {
  items: readonly string[]
  columns?: 1 | 2 | 3
  className?: string
}) {
  const cols =
    columns === 3
      ? 'sm:grid-cols-3'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'grid-cols-1'
  return (
    <ul className={`grid gap-3 ${cols} ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-paper-200 bg-white px-4 py-3.5"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-500 text-white">
            <Icon name="check" size={13} />
          </span>
          <span className="text-[14.5px] text-ink-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** リンクボタン */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors'
  const styles = {
    primary: 'bg-leaf-500 text-white hover:bg-leaf-600',
    outline:
      'border border-leaf-400 text-forest-700 hover:bg-leaf-50',
    ghost: 'text-leaf-700 hover:text-leaf-800',
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <Icon name="arrow" size={16} />
    </Link>
  )
}

/** 注意書き・補足（制度に関わる断定を避ける一文などに使用） */
export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-leaf-200 bg-leaf-50 px-5 py-4">
      <Icon name="shield" size={20} className="mt-0.5 shrink-0 text-leaf-600" />
      <p className="text-[13.5px] leading-relaxed text-ink-700">{children}</p>
    </div>
  )
}

/** 関連ページへの内部リンクカード群 */
export function RelatedLinks({
  title = '関連ページ',
  links,
}: {
  title?: string
  links: { label: string; href: string; desc?: string }[]
}) {
  return (
    <div>
      <h2 className="rule-accent text-sm font-semibold tracking-wider text-leaf-700">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-paper-200 bg-white px-5 py-4 transition-colors hover:border-leaf-300 hover:bg-leaf-50"
          >
            <span>
              <span className="block text-[14.5px] font-semibold text-forest-800">
                {link.label}
              </span>
              {link.desc && (
                <span className="mt-0.5 block text-[12.5px] text-ink-500">
                  {link.desc}
                </span>
              )}
            </span>
            <Icon
              name="arrow"
              size={16}
              className="shrink-0 text-leaf-600 transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

/** FAQ の見出し + アコーディオンをまとめる簡易ラッパで使う小見出し */
export function LeadParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-ink-700">
          {p}
        </p>
      ))}
    </div>
  )
}
