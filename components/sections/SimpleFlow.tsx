import Icon from '@/components/ui/Icon'
import { SIMPLE_FLOW } from '@/lib/constants'

/**
 * ご利用開始までのかんたんな流れ（お問い合わせ→訪問相談→契約→開始）。
 * 番号・アイコン・矢印で、図解的に分かりやすく見せる。
 */
export default function SimpleFlow() {
  return (
    <ol className="grid gap-4 md:grid-cols-4 md:gap-3">
      {SIMPLE_FLOW.map((s, i) => (
        <li key={s.title} className="relative">
          <div className="flex h-full flex-col items-center rounded-3xl border border-paper-200 bg-white px-5 py-7 text-center">
            <span className="text-[11px] font-semibold tracking-widest text-leaf-600">
              {s.step}
            </span>
            <div className="my-4 flex h-16 w-16 items-center justify-center rounded-full bg-leaf-50 ring-1 ring-leaf-200">
              <Icon name={s.icon} size={28} className="text-forest-600" />
            </div>
            <h3 className="font-serif text-lg text-forest-800">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-700">{s.body}</p>
          </div>
          {/* 矢印（PCは右向き・スマホは下向き） */}
          {i < SIMPLE_FLOW.length - 1 && (
            <span
              className="absolute left-1/2 top-full z-10 -translate-x-1/2 -translate-y-1/2 text-leaf-400 md:left-full md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              aria-hidden="true"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-leaf-200">
                <Icon name="arrow" size={16} className="rotate-90 md:rotate-0" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
