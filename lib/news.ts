export type NewsCategory = 'お知らせ' | '採用' | 'サービス'

export type NewsItem = {
  slug: string
  date: string // YYYY-MM-DD
  category: NewsCategory
  title: string
  /** 本文。段落ごとに配列で保持する。 */
  body: string[]
}

/**
 * お知らせのダミーデータ。
 * 実運用時はこの配列を編集するか、CMS/API に差し替える。
 */
export const NEWS: NewsItem[] = [
  {
    slug: 'website-open',
    date: '2026-07-01',
    category: 'お知らせ',
    title: 'ホームページを公開しました',
    body: [
      '株式会社はるじゅの公式ホームページを公開しました。',
      '当社は横浜市内を中心に、訪問介護・自費介護・重度訪問介護を行う地域密着の介護事業所です。ご本人とご家族が、住み慣れたご自宅で安心して暮らし続けられるよう、一人ひとりの生活に合わせた支援を行っています。',
      'サービス内容やご利用の流れ、採用情報などを掲載しています。ご不明な点がありましたら、お問い合わせページよりお気軽にご連絡ください。',
    ],
  },
  {
    slug: 'consultation-start',
    date: '2026-06-20',
    category: 'サービス',
    title: '訪問介護サービスのご相談を受け付けています',
    body: [
      '訪問介護のご利用に関するご相談を受け付けています。',
      '「何から始めればよいか分からない」「担当のケアマネジャーに相談したい」といった段階からのご相談も歓迎しています。ご家族の方からのお問い合わせも承っています。',
      '介護保険では届きにくい部分を補う自費介護や、重度訪問介護についてもご相談いただけます。まずはお困りごとをお聞かせください。',
    ],
  },
  {
    slug: 'recruit-update',
    date: '2026-06-05',
    category: '採用',
    title: '採用情報を更新しました',
    body: [
      '訪問介護スタッフ・登録ヘルパーをはじめとした募集情報を更新しました。',
      '未経験の方、ブランクのある方も歓迎しています。資格を活かして働きたい方、地域の在宅生活を支える仕事に関心のある方のご応募をお待ちしています。',
      '募集要項の詳細や働き方については、面談の際に個別にご案内します。まずはお気軽にお問い合わせください。',
    ],
  },
]

export function getNews(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug)
}

/** 日付を日本語表記に整形（YYYY-MM-DD → YYYY年M月D日） */
export function formatDate(date: string): string {
  const [y, m, d] = date.split('-')
  return `${y}年${Number(m)}月${Number(d)}日`
}
