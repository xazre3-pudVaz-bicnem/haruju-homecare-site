import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { PHOTO } from '@/lib/images'

const TAGS = ['訪問介護', '自費介護', '重度訪問介護', '採用情報']

/**
 * トップのヒーロー。CTAボタンは置かない（要件）。
 * 下部にサービスのタグ（ボタンではない）を並べる。
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-leaf-50">
      {/* 背景の装飾 */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-leaf-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-leaf-300/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf-300 bg-white/70 px-4 py-1.5 text-[12.5px] font-medium text-forest-700">
            横浜市内を中心に対応する地域密着の介護事業所
          </span>
          <h1 className="mt-6 font-serif text-[2rem] leading-[1.35] text-forest-800 sm:text-[2.6rem] lg:text-[3rem]">
            住み慣れた横浜で、
            <br />
            安心して暮らし続ける
            <br className="hidden sm:block" />
            ために。
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-700 sm:text-base">
            株式会社はるじゅは、横浜エリアで訪問介護・自費介護・重度訪問介護を行う
            地域密着の介護事業所です。ご本人とご家族の暮らしに寄り添い、
            一人ひとりに合わせた在宅生活の支援を行っています。
          </p>

          {/* タグ（ボタンではない） */}
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-forest-700 shadow-[0_1px_2px_rgba(31,61,43,0.06)] ring-1 ring-paper-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* ビジュアル */}
        <div className="relative">
          <PlaceholderImage
            src={PHOTO.hero.src}
            alt={PHOTO.hero.alt}
            label="ヒーロー写真"
            ratio="4 / 3.4"
            rounded="rounded-[2rem]"
            priority
            objectPosition="center 30%"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="shadow-[0_30px_70px_-30px_rgba(31,61,43,0.4)]"
          />
          {/* 明るさを足す白の透過レイヤー */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-white/10 to-transparent" aria-hidden="true" />
          {/* 小さな信頼バッジ */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-paper-200 sm:block">
            <p className="text-[11px] text-ink-500">対応エリア</p>
            <p className="font-serif text-lg font-semibold text-forest-800">横浜市内</p>
          </div>
        </div>
      </div>
    </section>
  )
}
