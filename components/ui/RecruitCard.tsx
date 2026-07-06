import Icon from './Icon'

type Props = {
  name: string
  lead: string
  /** 補足バッジ（例: 正社員／パート） */
  badge?: string
}

/**
 * 募集職種カード。給与・待遇は未定のため「詳細は面談時にご案内」で統一。
 */
export default function RecruitCard({ name, lead, badge }: Props) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-[0_16px_40px_-12px_rgba(31,61,43,0.16)] sm:p-7">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
        <Icon name="users" size={22} />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-serif text-lg text-forest-800">{name}</h3>
        {badge && (
          <span className="rounded-full bg-leaf-100 px-2 py-0.5 text-[11px] font-medium text-forest-600">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">{lead}</p>
      <p className="mt-5 border-t border-paper-200 pt-4 text-[13px] text-ink-500">
        募集要項は準備中です。詳細は面談時にご案内します。
      </p>
    </div>
  )
}
