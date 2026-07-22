import Icon from '@/components/ui/Icon'
import { COMPANY, SERVICE_AREAS, SERVICE_AREA_NOTE } from '@/lib/constants'

/**
 * 対応地域を目立たせて表示する。横浜市内を大きく見せ、区名は「相談できるエリアの例」として
 * チップ表示。空き状況・対応可否は要確認である旨を必ず添える。
 */
export default function AreaHighlight() {
  return (
    <div className="grid gap-8 rounded-3xl border border-paper-200 bg-white p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
      <div>
        <span className="rule-accent text-sm font-semibold tracking-wider text-leaf-700">
          Service Area
        </span>
        <p className="mt-4 flex items-baseline gap-2">
          <span className="font-serif text-4xl font-semibold text-forest-800 sm:text-5xl">
            横浜市
          </span>
          <span className="text-base text-ink-700">内を中心に対応</span>
        </p>
        <p className="mt-4 flex items-center gap-2 text-[14px] text-ink-700">
          <Icon name="map" size={18} className="shrink-0 text-leaf-600" />
          {COMPANY.officeName}が、ご自宅までうかがいます。
        </p>
      </div>
      <div>
        <p className="mb-3 text-[13px] font-semibold text-forest-700">
          ご相談を承るエリアの例（横浜市内）
        </p>
        <ul className="flex flex-wrap gap-2">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full bg-leaf-50 px-3.5 py-1.5 text-[13px] font-medium text-forest-700 ring-1 ring-leaf-200"
            >
              {area}
            </li>
          ))}
          <li className="rounded-full px-2 py-1.5 text-[13px] text-ink-500">など</li>
        </ul>
        <p className="mt-4 text-[12.5px] leading-relaxed text-ink-500">{SERVICE_AREA_NOTE}</p>
      </div>
    </div>
  )
}
