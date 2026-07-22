import Icon from '@/components/ui/Icon'
import { REASONS_TO_CHOOSE } from '@/lib/constants'

/**
 * 「はるじゅが選ばれる理由」のカードグリッド。
 * 番号＋線画アイコンで、サービス紹介のイラストとは差別化した見せ方にする。
 */
export default function ReasonsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {REASONS_TO_CHOOSE.map((r, i) => (
        <div
          key={r.title}
          className="group relative flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-[0_16px_40px_-12px_rgba(31,61,43,0.16)]"
        >
          <span
            className="absolute right-6 top-5 font-serif text-4xl font-semibold text-leaf-100"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
            <Icon name={r.icon} size={24} />
          </div>
          <h3 className="font-serif text-lg text-forest-800">{r.title}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-700">{r.body}</p>
        </div>
      ))}
    </div>
  )
}
