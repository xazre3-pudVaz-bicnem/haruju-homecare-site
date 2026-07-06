import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

export type Crumb = { name: string; href: string }

/**
 * パンくずリスト。トップ（ホーム）は自動で先頭に付与する。
 * 構造化データ（BreadcrumbList）も同時に出力する。
 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ name: 'ホーム', href: '/' }, ...items]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />
      <nav aria-label="パンくずリスト" className="text-[13px] text-ink-500">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span className="text-ink-700" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-leaf-700"
                    >
                      {c.name}
                    </Link>
                    <span className="text-ink-400" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
