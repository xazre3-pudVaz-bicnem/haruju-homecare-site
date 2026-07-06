import { COMPANY } from '@/lib/constants'

type Row = { label: string; value: string; isDummy?: boolean }

/** 会社概要テーブル。仮情報には「※仮情報」ラベルを付ける。 */
export default function CompanyInfo({ compact = false }: { compact?: boolean }) {
  const rows: Row[] = [
    { label: '会社名', value: COMPANY.name },
    { label: '所在地', value: `〒${COMPANY.postalCode.value} ${COMPANY.address.value}`, isDummy: true },
    { label: '電話番号', value: COMPANY.phone.value, isDummy: COMPANY.phone.isDummy },
    { label: '営業時間', value: COMPANY.hours.value, isDummy: COMPANY.hours.isDummy },
    { label: '定休日', value: COMPANY.holiday.value, isDummy: COMPANY.holiday.isDummy },
    { label: '事業内容', value: COMPANY.business },
    { label: '対応エリア', value: COMPANY.areaServed },
  ]

  if (!compact) {
    rows.push(
      { label: '代表者', value: COMPANY.representative.value, isDummy: true },
      { label: '設立', value: COMPANY.established.value, isDummy: true },
    )
  }

  return (
    <dl className="overflow-hidden rounded-3xl border border-paper-200 bg-white">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:gap-6 ${
            i !== rows.length - 1 ? 'border-b border-paper-200' : ''
          }`}
        >
          <dt className="w-full shrink-0 text-sm font-semibold text-forest-700 sm:w-40">
            {row.label}
          </dt>
          <dd className="flex-1 text-[15px] text-ink-700">
            {row.value}
            {row.isDummy && (
              <span className="ml-2 rounded bg-leaf-100 px-1.5 py-0.5 text-[11px] font-medium text-forest-600 align-middle">
                ※仮情報
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
