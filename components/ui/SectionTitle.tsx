import type { ReactNode } from 'react'

type Props = {
  /** 小見出し（英語や短いラベル） */
  eyebrow?: string
  /** 見出し本体 */
  title: ReactNode
  /** 補足リード文 */
  lead?: ReactNode
  align?: 'left' | 'center'
  /** 見出しの HTML タグ（1ページ1つの h1 を守るため切替可能） */
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  tone?: 'default' | 'light'
}

export default function SectionTitle({
  eyebrow,
  title,
  lead,
  align = 'left',
  as = 'h2',
  className = '',
  tone = 'default',
}: Props) {
  const Heading = as
  const alignCls = align === 'center' ? 'text-center items-center' : 'items-start'
  const light = tone === 'light'

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`rule-accent mb-4 text-sm font-semibold tracking-wider ${
            light ? 'text-leaf-200' : 'text-leaf-700'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={`font-serif text-2xl leading-snug sm:text-3xl md:text-[2.1rem] ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
            light ? 'text-paper-100/90' : 'text-ink-700'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
