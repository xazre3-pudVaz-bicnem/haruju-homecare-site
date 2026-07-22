import Icon from './Icon'
import { COMPANY, PHONE_NOTE } from '@/lib/constants'

type Row = { icon: 'clock' | 'phone' | 'calendar' | 'shield'; label: string; value: string; isDummy?: boolean }

/**
 * 営業時間・電話受付・定休日・緊急時対応をまとめて見やすく表示する。
 * 仮情報には「※仮情報」を添える。
 */
export default function BusinessHours() {
  const rows: Row[] = [
    { icon: 'clock', label: '営業時間', value: COMPANY.hours.value, isDummy: COMPANY.hours.isDummy },
    { icon: 'phone', label: '電話受付', value: COMPANY.phoneHours.value, isDummy: COMPANY.phoneHours.isDummy },
    { icon: 'calendar', label: '定休日', value: COMPANY.holiday.value, isDummy: COMPANY.holiday.isDummy },
    { icon: 'shield', label: '緊急時の対応', value: COMPANY.emergency.value, isDummy: COMPANY.emergency.isDummy },
  ]

  return (
    <div className="overflow-hidden rounded-3xl border border-paper-200 bg-white">
      <div className="grid sm:grid-cols-2">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-start gap-4 p-6 ${
              i % 2 === 0 ? 'sm:border-r' : ''
            } border-paper-200 ${i < rows.length - (rows.length % 2 === 0 ? 2 : 1) ? 'border-b' : ''}`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
              <Icon name={row.icon} size={22} />
            </span>
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-forest-800">
                {row.label}
                {row.isDummy && (
                  <span className="rounded bg-leaf-100 px-1.5 py-0.5 text-[10px] font-medium text-forest-600">
                    ※仮情報
                  </span>
                )}
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-700">{row.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-paper-200 bg-paper-50 px-6 py-3.5">
        <Icon name="phone" size={16} className="shrink-0 text-leaf-600" />
        <a href={COMPANY.phoneTel} className="font-serif text-lg font-semibold text-forest-800 hover:text-leaf-700">
          {COMPANY.phone.value}
        </a>
        <span className="text-[12px] text-ink-500">／ {PHONE_NOTE}</span>
      </div>
    </div>
  )
}
