import Breadcrumb, { type Crumb } from './Breadcrumb'
import PlaceholderImage from './PlaceholderImage'

type Props = {
  eyebrow?: string
  title: string
  lead?: string
  crumbs: Crumb[]
  /** 背景に敷く画像（任意） */
  image?: string
  imageLabel?: string
}

/**
 * 下層ページ共通のヘッダー帯。
 * h1 はこのコンポーネントが担うため、ページ側では h2 以降を使う。
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  imageLabel,
}: Props) {
  return (
    <header className="relative overflow-hidden border-b border-paper-200 bg-leaf-50">
      {image && (
        <div className="absolute inset-0 opacity-30">
          <PlaceholderImage
            src={`/images/${image}`}
            alt=""
            label={imageLabel ?? title}
            ratio="auto"
            rounded="rounded-none"
            className="h-full"
          />
        </div>
      )}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf-200/50 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-10">
        <Breadcrumb items={crumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <span className="rule-accent text-sm font-semibold tracking-wider text-leaf-700">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-serif text-[1.75rem] leading-tight text-forest-800 sm:text-4xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700 sm:text-base">
              {lead}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
