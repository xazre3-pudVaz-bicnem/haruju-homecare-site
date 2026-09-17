'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { COMPANY, NAV_ITEMS, SITE_NAME } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

/** ロゴ。事業所名「訪問介護ステーションNAE」を主役にし、運営会社を添える */
function Logo() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
      aria-label={`${COMPANY.officeName}（運営：${SITE_NAME}） トップ`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-leaf-500 text-white transition-colors group-hover:bg-leaf-600 sm:h-10 sm:w-10">
        <Icon name="leaf" size={20} />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="whitespace-nowrap font-serif text-[15px] font-semibold tracking-tight text-forest-800 min-[380px]:text-[17px] sm:text-xl">
          訪問介護ステーション
          <span className="ml-0.5 font-sans text-[1.15em] font-bold tracking-wide text-leaf-600">NAE</span>
        </span>
        <span className="mt-1 whitespace-nowrap text-[10px] text-ink-500 sm:text-[11px]">
          運営：{SITE_NAME}
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-paper-200 bg-white/90 backdrop-blur-md'
            : 'border-transparent bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-[72px]">
          <Logo />

          {/* PCナビ（1280px 以上）。それ未満はロゴと7項目が1行に収まらないため、ハンバーガーメニューにする */}
          <nav className="hidden items-center gap-1 xl:flex" aria-label="メインナビゲーション">
            {NAV_ITEMS.map((item, idx) => {
              const href: string = item.href
              // 右寄りの項目はドロップダウンを右端基準で開き、画面外にはみ出さないようにする
              const alignRight = idx >= NAV_ITEMS.length - 2
              const active =
                pathname === href || (href !== '/' && pathname.startsWith(href))
              const hasChildren = 'children' in item && item.children
              const grouped = !!item.children?.some((c) => c.group)
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                      active
                        ? 'text-leaf-700'
                        : 'text-forest-700 hover:text-leaf-700'
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {hasChildren && (
                    <div className={`invisible absolute ${alignRight ? 'right-0' : 'left-0'} top-full w-56 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
                      <div className="overflow-hidden rounded-2xl border border-paper-200 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(31,61,43,0.3)]">
                        {item.children!.map((child) => (
                          <Fragment key={child.href}>
                            {child.group && (
                              <p className="mt-2 border-t border-paper-100 px-3.5 pb-1 pt-2.5 text-[11px] font-semibold tracking-wider text-leaf-700">
                                {child.group}
                              </p>
                            )}
                            <Link
                              href={child.href}
                              className={`block rounded-xl px-3.5 text-[13.5px] text-forest-700 transition-colors hover:bg-leaf-50 hover:text-leaf-700 ${grouped ? 'py-2' : 'py-2.5'}`}
                            >
                              {child.label}
                            </Link>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-leaf-500 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-leaf-600"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl text-forest-800 xl:hidden"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <span className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/*
        モバイルメニュー。
        header の backdrop-blur が fixed 要素の基準枠になり、ヘッダーの高さで切れてしまうため header の外に置く。
        z-[45]：下部の固定CTA（z-40）より上、閉じるボタンのある header（z-50）より下。
      */}
      <div
        className={`fixed inset-0 z-[45] xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className={`absolute inset-0 bg-forest-900/30 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white px-5 pb-10 pt-20 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          aria-label="モバイルナビゲーション"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const hasChildren = 'children' in item && item.children
              return (
                <li key={item.href} className="border-b border-paper-100 py-1">
                  <Link
                    href={item.href}
                    className="block py-3 text-[15px] font-semibold text-forest-800"
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-leaf-200 pl-4">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          {child.group && (
                            <p className="mt-2 text-[11px] font-semibold tracking-wider text-leaf-700">
                              {child.group}
                            </p>
                          )}
                          <Link
                            href={child.href}
                            className="block py-2 text-[14px] text-ink-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
          <Link
            href="/contact"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-5 py-3.5 text-sm font-semibold text-white"
          >
            <Icon name="mail" size={18} />
            お問い合わせ
          </Link>
        </nav>
      </div>
    </>
  )
}
