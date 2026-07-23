import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import Icon from '@/components/ui/Icon'

type Props = {
  href: string
  title: string
  description?: string
  date: string
  category?: string
  image?: string | null
  /** 画像のalt。未指定ならタイトルから生成 */
  imageAlt?: string
}

/**
 * 記事カード（専門コラム向け）。
 * 「専門性・読みやすさ・信頼感」を意識し、カバー画像＋カテゴリ＋見出し＋要約で構成する。
 * お知らせ（NewsRow）とは意図的に見た目を変えている。
 */
export default function ArticleCard({
  href,
  title,
  description,
  date,
  category,
  image,
  imageAlt,
}: Props) {
  return (
    <article className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-paper-200 bg-white shadow-[0_1px_2px_rgba(31,61,43,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-[0_16px_40px_-12px_rgba(31,61,43,0.18)]"
      >
        <div className="relative">
          <PlaceholderImage
            src={image ?? undefined}
            alt={imageAlt ?? `${title}のイメージ`}
            label="コラム"
            ratio="16 / 9"
            rounded="rounded-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {category && (
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-forest-700 shadow-sm">
              {category}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time dateTime={date} className="text-[12px] text-ink-500">
            {date}
          </time>
          <h3 className="mt-2 font-serif text-[17px] leading-snug text-forest-800 transition-colors group-hover:text-leaf-700">
            {title}
          </h3>
          {description && (
            <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-700 line-clamp-3">
              {description}
            </p>
          )}
          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-leaf-700">
            続きを読む
            <Icon
              name="arrow"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  )
}
