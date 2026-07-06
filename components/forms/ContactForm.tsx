'use client'

import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { INQUIRY_TYPES } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

const TYPE_MAP: Record<string, string> = {
  service: '訪問介護について',
  'private-care': '自費介護について',
  severe: '重度訪問介護について',
  recruit: '採用について',
  'care-manager': 'ケアマネジャーからのご相談',
}

/**
 * お問い合わせフォーム（UIのみ）。
 * 送信処理は未実装。onSubmit の TODO 箇所に API / フォームサービスを接続すれば動く。
 * ?type= クエリで種別を初期選択できる（例: /contact?type=recruit）。
 */
export default function ContactForm() {
  const params = useSearchParams()
  const initialType = TYPE_MAP[params.get('type') ?? ''] ?? ''
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: ここで API / フォームサービス（例: /api/contact）へ送信する。
    // 現状はUIの完成確認のみ。実送信は未実装。
    setSent(true)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-leaf-200 bg-leaf-50 p-8 text-center sm:p-12">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-white">
          <Icon name="check" size={28} />
        </div>
        <h2 className="font-serif text-xl text-forest-800">
          送信内容を受け付けました
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-ink-700">
          お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。
          お急ぎの場合はお電話でもご相談を承っています。
        </p>
        <p className="mt-4 text-[12px] text-ink-500">
          ※こちらはデモ表示です。送信処理は現在準備中のため、実際の送信は行われていません。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field label="お名前" htmlFor="name" required>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="例）横浜 花子"
          className={inputCls}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="電話番号" htmlFor="tel" required>
          <input
            id="tel"
            name="tel"
            type="tel"
            required
            autoComplete="tel"
            placeholder="例）045-000-0000"
            className={inputCls}
          />
        </Field>
        <Field label="メールアドレス" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="例）info@example.com"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="お問い合わせ種別" htmlFor="type" required>
        <div className="relative">
          <select
            id="type"
            name="type"
            required
            defaultValue={initialType}
            className={`${inputCls} appearance-none pr-10`}
          >
            <option value="" disabled>
              選択してください
            </option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-500"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>

      <Field label="お問い合わせ内容" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="ご相談内容やご質問を、分かる範囲でご記入ください。"
          className={`${inputCls} resize-y`}
        />
      </Field>

      <label className="flex items-start gap-3 rounded-2xl bg-paper-50 p-4 text-[13.5px] text-ink-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-paper-200 accent-leaf-600"
        />
        <span>
          <a href="/privacy" className="text-leaf-700 underline underline-offset-2">
            個人情報の取り扱い
          </a>
          に同意します。ご記入いただいた情報は、お問い合わせへの対応の目的にのみ使用します。
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-500 px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-leaf-600 sm:w-auto"
      >
        <Icon name="mail" size={18} />
        この内容で送信する
      </button>
    </form>
  )
}

const inputCls =
  'w-full rounded-2xl border border-paper-200 bg-white px-4 py-3.5 text-[15px] text-ink-800 placeholder:text-ink-400 transition-colors focus:border-leaf-500 focus:outline-none focus:ring-2 focus:ring-leaf-500/25'

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-sm font-semibold text-forest-800">
        {label}
        {required && (
          <span className="rounded bg-leaf-100 px-1.5 py-0.5 text-[10px] font-medium text-forest-600">
            必須
          </span>
        )}
      </label>
      {children}
    </div>
  )
}
