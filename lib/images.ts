/**
 * サイトで使う写真・イラストのパスとalt文言を一元管理する。
 * 画像を差し替えるときは public/images/ に同名ファイルを置くか、ここのパスを変更するだけでよい。
 *
 * 方針:
 *  - 写真(photo-*.webp)   … 信頼感・安心感。ヒーロー/理念/求人/ページ冒頭など「人の温度」を伝える場所。
 *  - イラスト(illust-*.webp)… 分かりやすさ。サービス内容/できること/利用の流れ/相談導線など「内容の説明」を補助する場所。
 * 写真とイラストは役割を分け、混ぜすぎない。
 */

type Img = { src: string; alt: string }

const p = (file: string, alt: string): Img => ({ src: `/images/${file}`, alt })

/** 写真（landscape / 実写トーン） */
export const PHOTO = {
  hero: p('photo-hero-care.webp', '横浜の自宅で利用者様とやさしく会話する訪問介護スタッフ'),
  about: p('photo-about-care.webp', '利用者様の話に耳を傾ける訪問介護スタッフ'),
  homeCare: p('photo-home-care.webp', '訪問介護スタッフによる食事介助の様子'),
  lifeSupport: p('photo-life-support.webp', '利用者様と一緒に洗濯物をたたむ訪問介護スタッフ'),
  walking: p('photo-walking-support.webp', '室内の手すり沿いで歩行を介助する訪問介護スタッフ'),
  privateCare: p('photo-private-care.webp', '自費介護で外出に付き添う訪問介護スタッフ'),
  outingPrep: p('photo-outing-prep.webp', '玄関で外出の準備を手伝う訪問介護スタッフ'),
  severeCare: p('photo-severe-care.webp', '車椅子の利用者様に寄り添う訪問介護スタッフ'),
  staffTeam: p('photo-staff-team.webp', '明るい表情で並ぶ株式会社はるじゅのスタッフたち'),
  consultation: p('photo-consultation.webp', 'ご家族を交えて相談を受ける訪問介護スタッフ'),
} as const

/** イラスト（portrait / 黄緑の丸枠アイコン調） */
export const ILLUST = {
  meal: p('illust-meal.webp', '食事介助を表すイラスト'),
  bath: p('illust-bath.webp', '入浴介助を表すイラスト'),
  mobility: p('illust-mobility.webp', '移動・歩行介助を表すイラスト'),
  hospital: p('illust-hospital.webp', '通院の付き添いを表すイラスト'),
  laundry: p('illust-laundry.webp', '洗濯など生活援助を表すイラスト'),
  shopping: p('illust-shopping.webp', '買い物支援を表すイラスト'),
  outing: p('illust-outing.webp', '外出の付き添いを表すイラスト'),
  severeCare: p('illust-severe-care.webp', '車椅子での外出支援を表すイラスト'),
  consultation: p('illust-consultation.webp', 'ご自宅での相談の様子を表すイラスト'),
  family: p('illust-family-consultation.webp', 'ご家族・ケアマネジャーとの相談を表すイラスト'),
} as const

export type PhotoKey = keyof typeof PHOTO
export type IllustKey = keyof typeof ILLUST
