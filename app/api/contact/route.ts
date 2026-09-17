import { NextResponse } from 'next/server'
import { COMPANY, INQUIRY_TYPES, SITE_NAME } from '@/lib/constants'

/**
 * お問い合わせフォームの送信先。
 * Resend（https://resend.com）の API でメール送信する。
 *   RESEND_API_KEY      … 必須。未設定のあいだは 503 を返し、フォーム側はメールアプリでの送信に切り替える。
 *   CONTACT_FROM_EMAIL  … 必須。Resend でドメイン認証済みの送信元（例: "はるじゅ <form@haruju.net>"）
 *   CONTACT_TO_EMAIL    … 任意。受信先（省略時は会社のメールアドレス）
 */

type Payload = {
  name?: unknown
  tel?: unknown
  email?: unknown
  type?: unknown
  message?: unknown
  consent?: unknown
  /** スパム対策のおとり項目（人間は入力しない） */
  website?: unknown
}

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  let body: Payload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // おとり項目が埋まっていればボットとみなし、成功を装って破棄
  if (str(body.website, 200)) return NextResponse.json({ ok: true })

  const name = str(body.name, 100)
  const tel = str(body.tel, 30)
  const email = str(body.email, 200)
  const type = str(body.type, 50)
  const message = str(body.message, 5000)

  const invalid =
    !name ||
    !/^[0-9０-９+\-‐－ー()（） ]{10,}$/.test(tel) ||
    (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
    !(INQUIRY_TYPES as readonly string[]).includes(type) ||
    !message ||
    body.consent !== true
  if (invalid) return NextResponse.json({ error: 'invalid' }, { status: 400 })

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const text = [
    `${SITE_NAME} のホームページからお問い合わせがありました。`,
    '',
    `■ お名前：${name}`,
    `■ 電話番号：${tel}`,
    `■ メールアドレス：${email || '（未入力）'}`,
    `■ お問い合わせ種別：${type}`,
    '■ お問い合わせ内容：',
    message,
    '',
    `受信日時：${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
  ].join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO_EMAIL || COMPANY.email.value],
      ...(email ? { reply_to: email } : {}),
      subject: `【HPお問い合わせ】${type}（${name} 様）`,
      text,
    }),
  })

  if (!res.ok) {
    console.error('contact: resend failed', res.status, await res.text().catch(() => ''))
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
