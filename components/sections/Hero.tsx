import Image from 'next/image'
import { PHOTO } from '@/lib/images'

/**
 * トップのヒーロー。写真1枚を全面背景に使う。
 * CTAボタン・タグは置かない（要件）。写真とコピーだけで上品に見せる。
 * 可読性のため、左から白〜淡い黄緑の半透明グラデーションを重ねる（暗くしすぎない）。
 */
export default function Hero() {
  return (
    <section className="relative isolate flex h-[82vh] min-h-[560px] max-h-[860px] items-center overflow-hidden lg:h-[86vh]">
      {/* 背景写真（全面・object-cover） */}
      <Image
        src={PHOTO.hero.src}
        alt={PHOTO.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_28%]"
      />

      {/* オーバーレイ：左側を白っぽくして文字を読みやすく（写真は暗くしない） */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/60 to-white/5"
      />
      {/* スマホ向けに下からも軽く白を足して可読性を確保 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-leaf-50/70 via-transparent to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="rule-accent text-[12.5px] font-semibold tracking-wider text-leaf-700 sm:text-[13px]">
            横浜市内を中心に対応する地域密着の介護事業所
          </span>
          <h1 className="mt-5 font-serif text-[2rem] leading-[1.32] text-forest-800 [text-shadow:0_1px_2px_rgba(255,255,255,0.7)] sm:text-[2.6rem] lg:text-[3.1rem]">
            住み慣れた横浜で、
            <br />
            安心して暮らし続ける
            <br className="hidden sm:block" />
            ために。
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-800 [text-shadow:0_1px_1px_rgba(255,255,255,0.7)] sm:text-base">
            株式会社はるじゅは、横浜エリアで訪問介護・自費介護・重度訪問介護を行う
            地域密着の介護事業所です。ご本人とご家族の暮らしに寄り添い、
            一人ひとりに合わせた在宅生活の支援を行っています。
          </p>
        </div>
      </div>
    </section>
  )
}
