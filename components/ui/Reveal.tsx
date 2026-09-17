'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** 出現の遅延（ミリ秒）。連続カードのスタッガーに使う。 */
  delay?: number
}

/**
 * スクロールで下からふわっと現れるラッパー。
 * prefers-reduced-motion では globals.css 側で無効化され、常に表示される。
 * JS 無効時も CSS の初期状態が見えるだけで内容は読める。
 */
export default function Reveal({
  children,
  as,
  className = '',
  delay = 0,
}: Props) {
  const Tag: ElementType = as ?? 'div'
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      // threshold は 0 にする。割合指定だと、スマホで画面の数倍の高さになる要素が永久に表示されない
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
