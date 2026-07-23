/**
 * 専門コラム（/column）を毎日1記事、Claude APIで自動生成し
 * content/column/ にMarkdownで保存する。
 *
 * - デフォルトモデル: claude-haiku-4-5-20251001（コスト重視）
 * - 環境変数 ANTHROPIC_MODEL があればそちらを優先
 * - 必要なSecret: ANTHROPIC_API_KEY のみ
 * - 実行: npx tsx scripts/generate-daily-column.ts
 *
 * お知らせ（/news・WordPress管理）とは完全に分離しており、
 * このスクリプトは content/column/ 以外には一切触れない。
 */
import fs from 'fs'
import path from 'path'

/* ———————————— サイト設定 ———————————— */

const SITE_NAME = '株式会社はるじゅ'
const OFFICE_NAME = '訪問介護ステーションNAE'
const BASE_URL = 'https://haruju-homecare-site.vercel.app'
const AREA_KEYWORD = '横浜市（磯子区を中心とした横浜市内）'
const BUSINESS_TYPE = '訪問介護・自費介護・重度訪問介護'
const MAIN_KEYWORD = '横浜 訪問介護'

const DEFAULT_MODEL = 'claude-haiku-4-5-20251001'
const MODEL = process.env.ANTHROPIC_MODEL?.trim() || DEFAULT_MODEL

const COLUMN_DIR = path.join(process.cwd(), 'content', 'column')

/** 実在する内部リンク先（この中から2〜3本を本文に自然に入れる） */
const INTERNAL_LINKS = [
  { href: '/service/home-care', label: '訪問介護' },
  { href: '/service/private-care', label: '自費介護' },
  { href: '/service/severe-home-care', label: '重度訪問介護' },
  { href: '/flow', label: 'ご利用の流れ' },
  { href: '/care-manager', label: 'ケアマネジャーの方へ' },
  { href: '/family', label: 'ご家族の方へ' },
  { href: '/area/yokohama-home-care', label: '横浜で訪問介護をお探しの方へ' },
  { href: '/faq', label: 'よくあるご質問' },
  { href: '/recruit', label: '求人情報' },
  { href: '/contact', label: 'お問い合わせ' },
]

/* ———————————— トピックプール ———————————— */

type Topic = {
  theme: string
  slugBase: string
  category: string
  tags: string[]
  image: string
}

const TOPICS: Topic[] = [
  // —— サービス系 ——
  { theme: '訪問介護の基礎知識', slugBase: 'home-care-basics', category: '訪問介護', tags: ['横浜 訪問介護', '訪問介護とは'], image: '/images/photo-home-care.webp' },
  { theme: '身体介護でできること', slugBase: 'physical-care', category: '身体介護', tags: ['身体介護', '入浴介助'], image: '/images/illust-bath.webp' },
  { theme: '生活援助でできること', slugBase: 'life-support', category: '生活援助', tags: ['生活援助', '掃除 洗濯 調理'], image: '/images/illust-laundry.webp' },
  { theme: '訪問介護でできないこと', slugBase: 'home-care-limits', category: '訪問介護', tags: ['訪問介護 できないこと', '介護保険 範囲'], image: '/images/photo-home-care.webp' },
  { theme: '自費介護（介護保険外サービス）', slugBase: 'private-care', category: '自費介護', tags: ['横浜 自費介護', '介護保険外サービス'], image: '/images/photo-private-care.webp' },
  { theme: '重度訪問介護のしくみ', slugBase: 'severe-home-care', category: '重度訪問介護', tags: ['重度訪問介護', '障害福祉サービス'], image: '/images/photo-severe-care.webp' },
  { theme: '通院介助・外出の付き添い', slugBase: 'hospital-escort', category: '訪問介護', tags: ['通院介助', '外出 付き添い'], image: '/images/illust-hospital.webp' },
  { theme: '買い物代行・生活のサポート', slugBase: 'shopping-support', category: '生活援助', tags: ['買い物代行', '生活支援'], image: '/images/illust-shopping.webp' },

  // —— 制度系 ——
  { theme: '介護保険のしくみ', slugBase: 'kaigo-insurance', category: '介護保険', tags: ['介護保険', '自己負担'], image: '/images/illust-consultation.webp' },
  { theme: '要介護認定の申請方法', slugBase: 'care-certification', category: '介護保険', tags: ['要介護認定', '介護認定 申請'], image: '/images/illust-consultation.webp' },
  { theme: '要支援と要介護の違い', slugBase: 'youshien-youkaigo', category: '介護保険', tags: ['要支援 要介護 違い', '介護度'], image: '/images/illust-consultation.webp' },
  { theme: 'ケアプランとは', slugBase: 'care-plan', category: 'ケアマネジャー', tags: ['ケアプラン', 'ケアマネジャー'], image: '/images/photo-consultation.webp' },
  { theme: 'ケアマネジャーへの相談の仕方', slugBase: 'care-manager-consult', category: 'ケアマネジャー', tags: ['ケアマネジャー 相談', '訪問介護 依頼'], image: '/images/photo-consultation.webp' },
  { theme: '地域包括支援センターの使い方', slugBase: 'chiiki-houkatsu', category: '介護保険', tags: ['地域包括支援センター', '介護 相談窓口'], image: '/images/illust-consultation.webp' },
  { theme: '障害福祉サービスと介護保険の違い', slugBase: 'shougai-fukushi', category: '重度訪問介護', tags: ['障害福祉サービス', '介護保険 違い'], image: '/images/photo-severe-care.webp' },

  // —— 在宅介護・ご家族 ——
  { theme: '在宅介護を続けるコツ', slugBase: 'home-care-tips', category: '在宅介護', tags: ['在宅介護', '介護 負担軽減'], image: '/images/photo-about-care.webp' },
  { theme: '家族の介護負担を減らす方法', slugBase: 'family-burden', category: '家族介護', tags: ['家族介護', '介護 疲れ'], image: '/images/photo-consultation.webp' },
  { theme: '遠距離介護の進め方', slugBase: 'long-distance-care', category: '家族介護', tags: ['遠距離介護', '離れて暮らす親'], image: '/images/photo-consultation.webp' },
  { theme: '認知症の方への接し方', slugBase: 'dementia-care', category: '認知症', tags: ['認知症 介護', '認知症 対応'], image: '/images/illust-family-consultation.webp' },
  { theme: '退院後の在宅生活の準備', slugBase: 'after-discharge', category: '在宅介護', tags: ['退院後 介護', '在宅復帰'], image: '/images/photo-about-care.webp' },
  { theme: '一人暮らしの高齢者を支える', slugBase: 'living-alone', category: '在宅介護', tags: ['独居高齢者', '見守り'], image: '/images/photo-about-care.webp' },
  { theme: '介護と仕事の両立', slugBase: 'work-life-care', category: '家族介護', tags: ['介護 仕事 両立', '介護離職'], image: '/images/photo-consultation.webp' },

  // —— 横浜ローカル（エリアSEO） ——
  { theme: '横浜市の介護サービス事情', slugBase: 'yokohama-kaigo', category: '横浜の介護', tags: ['横浜 訪問介護', '横浜市 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市磯子区の訪問介護', slugBase: 'isogo-home-care', category: '横浜の介護', tags: ['磯子区 訪問介護', '横浜市 磯子区 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市南区の訪問介護', slugBase: 'minami-home-care', category: '横浜の介護', tags: ['南区 訪問介護', '横浜市 南区 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市港南区の訪問介護', slugBase: 'konan-home-care', category: '横浜の介護', tags: ['港南区 訪問介護', '横浜市 港南区 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市中区の訪問介護', slugBase: 'naka-home-care', category: '横浜の介護', tags: ['中区 訪問介護', '横浜市 中区 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市金沢区の訪問介護', slugBase: 'kanazawa-home-care', category: '横浜の介護', tags: ['金沢区 訪問介護', '横浜市 金沢区 介護'], image: '/images/photo-hero-care.webp' },
  { theme: '横浜市の介護保険の手続き', slugBase: 'yokohama-insurance', category: '横浜の介護', tags: ['横浜市 介護保険', '横浜 要介護認定'], image: '/images/photo-hero-care.webp' },

  // —— 採用・介護職 ——
  { theme: '訪問介護の仕事内容', slugBase: 'helper-job', category: '介護職', tags: ['訪問介護 仕事', 'ホームヘルパー'], image: '/images/photo-staff-team.webp' },
  { theme: '登録ヘルパーという働き方', slugBase: 'registered-helper', category: '介護職', tags: ['登録ヘルパー', '横浜 介護 求人'], image: '/images/photo-staff-team.webp' },
  { theme: '介護の資格の種類と取り方', slugBase: 'care-qualification', category: '介護職', tags: ['介護資格', '介護福祉士'], image: '/images/photo-staff-team.webp' },
  { theme: '未経験から介護職を始める', slugBase: 'beginner-caregiver', category: '介護職', tags: ['介護 未経験', '横浜 訪問介護 求人'], image: '/images/photo-staff-team.webp' },
]

/* ———————————— 既存記事の把握（重複回避） ———————————— */

type ExistingPost = { topic?: string; title?: string; date?: string; slug?: string }

function readExistingPosts(): ExistingPost[] {
  if (!fs.existsSync(COLUMN_DIR)) return []
  const posts: ExistingPost[] = []
  for (const file of fs.readdirSync(COLUMN_DIR)) {
    if (!file.endsWith('.md')) continue
    try {
      const raw = fs.readFileSync(path.join(COLUMN_DIR, file), 'utf8')
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
      if (!fm) continue
      const get = (key: string) =>
        fm[1]
          .match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]
          ?.trim()
          .replace(/^["']|["']$/g, '')
      posts.push({
        topic: get('topic'),
        title: get('title'),
        date: get('date'),
        slug: get('slug'),
      })
    } catch {
      continue
    }
  }
  return posts
}

function pickTopic(existing: ExistingPost[]): { topic: Topic; previousTitles: string[] } {
  const countByTopic = new Map<string, { count: number; latest: string; titles: string[] }>()
  for (const t of TOPICS) countByTopic.set(t.theme, { count: 0, latest: '', titles: [] })
  for (const p of existing) {
    if (!p.topic) continue
    const entry = countByTopic.get(p.topic)
    if (!entry) continue
    entry.count++
    if (p.date && p.date > entry.latest) entry.latest = p.date
    if (p.title) entry.titles.push(p.title)
  }

  // 未使用トピックを優先。全て使用済みなら「本数が最少 → 最終投稿が最も古い」順。
  const unused = TOPICS.filter((t) => countByTopic.get(t.theme)!.count === 0)
  if (unused.length > 0) return { topic: unused[0], previousTitles: [] }

  const sorted = [...TOPICS].sort((a, b) => {
    const ea = countByTopic.get(a.theme)!
    const eb = countByTopic.get(b.theme)!
    if (ea.count !== eb.count) return ea.count - eb.count
    return ea.latest < eb.latest ? -1 : 1
  })
  const topic = sorted[0]
  return { topic, previousTitles: countByTopic.get(topic.theme)!.titles }
}

/* ———————————— Claude API ———————————— */

async function callClaude(
  apiKey: string,
  topic: Topic,
  previousTitles: string[],
): Promise<string> {
  const linkList = INTERNAL_LINKS.map((l) => `- [${l.label}](${l.href})`).join('\n')

  const system = `あなたは${SITE_NAME}が運営する${OFFICE_NAME}（${BUSINESS_TYPE}を行う訪問介護事業所、拠点: 神奈川県横浜市磯子区、対応エリア: ${AREA_KEYWORD}）のオウンドメディア編集者兼ライターです。在宅介護の実務に詳しく、ご利用を検討している高齢者ご本人・ご家族・ケアマネジャーに向けた、検索流入を狙う専門コラムを書きます。

執筆ルール（厳守）:
- 日本語。本文は2,000〜3,000文字程度
- 見出しはMarkdownの ## と ### のみを使う（# は使わない）。表は使わず、箇条書き（- または 1.）を使う
- 構成: 導入文（見出しなし・3〜4文）→ ##見出しの本文セクション3〜5個（必要に応じて###の小見出し）→ 最後に「## まとめ」
- 「いかがでしたか」「〜ではないでしょうか」の乱用など、AIっぽい定型文は禁止。絵文字も禁止
- 介護保険制度・障害福祉制度に関する断定を避ける。「絶対」「必ず対応」「誰でも利用できます」「何でもできます」「医療行為ができます」「格安」「地域最安」といった表現は禁止
- 制度の対象条件・自己負担・利用できる範囲は「要介護度や自治体の支給決定内容によって異なるため、ケアマネジャーや自治体への確認が必要」といった安全な表現にする
- 訪問介護でできることには制度上の範囲がある点（ご家族分の家事や日常生活の範囲を超える作業は対象外、医療行為は行えない等）に触れる場合は正確に書く
- 読者を不安にさせて煽る書き方はしない。やさしく、誠実に、具体的に
- 「${MAIN_KEYWORD}」や「横浜市」「磯子区」などの地域名を、不自然にならない範囲で本文に含める
- 記事の途中または末尾で、次の内部リンクのうち文脈に合う2〜3本をMarkdownリンクとしてそのままのURLで自然に挿入する:
${linkList}
- ${OFFICE_NAME}のサービス実態（訪問介護・自費介護・重度訪問介護の3つ、ケアマネジャーとの連携、横浜市磯子区を拠点に横浜市内対応）と矛盾する記述をしない
- 自社の宣伝は控えめに。読者の役に立つ情報を最優先する

出力形式（この形式以外の文字列を一切含めない）:
TITLE: 記事タイトル（32文字前後、検索キーワードを含む）
DESCRIPTION: メタディスクリプション（100〜120文字）
TAGS: タグ1, タグ2, タグ3
---
（ここから本文Markdown）`

  const user = `テーマ「${topic.theme}」で、${MAIN_KEYWORD} 関連の読者に役立つコラム記事を1本書いてください。カテゴリは「${topic.category}」です。
${
  previousTitles.length > 0
    ? `\n以下の既存記事とタイトル・切り口が重複しないようにしてください:\n${previousTitles
        .map((t) => `- ${t}`)
        .join('\n')}`
    : ''
}`

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Claude API error: ${res.status} ${body.slice(0, 500)}`)
  }

  const json = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
  const text = json.content?.filter((c) => c.type === 'text').map((c) => c.text).join('') ?? ''
  if (!text) throw new Error('Claude API returned empty content')
  return text
}

/* ———————————— パース・保存 ———————————— */

function parseArticle(raw: string): {
  title: string
  description: string
  tags: string[]
  body: string
} {
  const title = raw.match(/^TITLE:\s*(.+)$/m)?.[1]?.trim()
  const description = raw.match(/^DESCRIPTION:\s*(.+)$/m)?.[1]?.trim()
  const tagsLine = raw.match(/^TAGS:\s*(.+)$/m)?.[1]?.trim()
  const bodyIdx = raw.indexOf('\n---')
  const body = bodyIdx !== -1 ? raw.slice(bodyIdx + 4).replace(/^\r?\n/, '').trim() : ''

  if (!title) throw new Error('TITLE が出力に含まれていません')
  if (!description) throw new Error('DESCRIPTION が出力に含まれていません')
  if (body.length < 1200) throw new Error(`本文が短すぎます（${body.length}文字）`)
  if (!/^##\s/m.test(body)) throw new Error('本文に ## 見出しがありません')

  const tags = (tagsLine ?? '').split(',').map((t) => t.trim()).filter(Boolean)
  return { title, description, tags, body }
}

function todayJst(): { iso: string; compact: string } {
  const now = new Date(Date.now() + 9 * 60 * 60 * 1000) // JST
  const iso = now.toISOString().slice(0, 10)
  return { iso, compact: iso.replaceAll('-', '') }
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY が設定されていません')
    process.exit(1)
  }

  console.log(`[daily-column] model: ${MODEL}`)

  const existing = readExistingPosts()
  const { topic, previousTitles } = pickTopic(existing)
  console.log(`[daily-column] topic: ${topic.theme} (category: ${topic.category})`)

  const { iso, compact } = todayJst()
  const slug = `${topic.slugBase}-${compact}`

  if (existing.some((p) => p.slug === slug)) {
    console.log(`[daily-column] 本日分の記事は既に存在します: ${slug}.md — 何もせず終了します`)
    return
  }

  // API呼び出し（1回リトライ）
  let raw: string
  try {
    raw = await callClaude(apiKey, topic, previousTitles)
  } catch (e) {
    console.warn(`[daily-column] 1回目の生成に失敗、リトライします: ${e}`)
    await new Promise((r) => setTimeout(r, 5000))
    raw = await callClaude(apiKey, topic, previousTitles)
  }

  const { title, description, tags, body } = parseArticle(raw)
  const allTags = [...new Set([...tags, ...topic.tags])].slice(0, 6)

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '”')}"`,
    `slug: "${slug}"`,
    `description: "${description.replace(/"/g, '”')}"`,
    `date: "${iso}"`,
    `category: "${topic.category}"`,
    `tags: [${allTags.map((t) => `"${t.replace(/"/g, '”')}"`).join(', ')}]`,
    `image: "${topic.image}"`,
    `topic: "${topic.theme}"`,
    '---',
    '',
  ].join('\n')

  fs.mkdirSync(COLUMN_DIR, { recursive: true })
  const filePath = path.join(COLUMN_DIR, `${slug}.md`)
  fs.writeFileSync(filePath, frontmatter + body + '\n', 'utf8')

  console.log(`[daily-column] generated: content/column/${slug}.md`)
  console.log(`[daily-column] title: ${title}`)
  console.log(`[daily-column] length: ${body.length} chars`)
  console.log(`[daily-column] url: ${BASE_URL}/column/${slug}`)
}

main().catch((e) => {
  console.error('[daily-column] FAILED:', e)
  process.exit(1)
})
