type Props = {
  index: number
  title: string
  body: string
  /** 最後のステップかどうか（縦線の描画制御） */
  last?: boolean
}

/**
 * 番号付きの縦並びステップ。ご利用の流れ・応募の流れで共有。
 */
export default function FlowStep({ index, title, body, last = false }: Props) {
  return (
    <li className="relative flex gap-5 pb-8 last:pb-0">
      {/* 縦のつなぎ線 */}
      {!last && (
        <span
          className="absolute left-[23px] top-12 bottom-0 w-px bg-leaf-300"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-leaf-300 bg-leaf-50">
        <span className="font-serif text-lg font-semibold text-leaf-700">
          {String(index).padStart(2, '0')}
        </span>
      </div>
      <div className="pt-1.5">
        <h3 className="font-serif text-lg text-forest-800">{title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-ink-700">{body}</p>
      </div>
    </li>
  )
}
