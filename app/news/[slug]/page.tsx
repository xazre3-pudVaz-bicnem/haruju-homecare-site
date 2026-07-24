import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactBlock from '@/components/ui/ContactBlock'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import Icon from '@/components/ui/Icon'
import ArticleBody from '@/components/article/ArticleBody'
import { Section } from '@/components/ui/primitives'
import { getNewsBySlug, formatNewsDate } from '@/lib/wordpress'
import { articleMeta, newsArticleSchema } from '@/lib/seo'

type Params = { params: Promise<{ slug: string }> }

// WordPressの環境変数を実行時に読むため、ビルド時に静的生成せず都度サーバーで描画する。
// （Vercelの「センシティブ」環境変数はビルド時に渡されないため、この指定が重要）
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const item = await getNewsBySlug(slug)
  if (!item) return { title: 'お知らせが見つかりません' }

  return articleMeta({
    title: item.title,
    description: item.excerpt || item.title,
    path: `/news/${item.slug}`,
    image: item.image ?? undefined,
    publishedTime: item.date,
    modifiedTime: item.modified,
  })
}

export default async function NewsDetailPage({ params }: Params) {
  const { slug } = await params
  const item = await getNewsBySlug(slug)
  if (!item) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            newsArticleSchema({
              title: item.title,
              description: item.excerpt || item.title,
              path: `/news/${item.slug}`,
              datePublished: item.date,
              dateModified: item.modified,
              image: item.image ?? undefined,
            }),
          ),
        }}
      />

      {/* 記事ヘッダー（お知らせはシンプルに） */}
      <header className="border-b border-paper-200 bg-paper-50">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-8 sm:pb-12 sm:pt-10">
          <Breadcrumb
            items={[
              { name: 'お知らせ', href: '/news' },
              { name: item.title, href: `/news/${item.slug}` },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-leaf-100 px-3 py-1 text-[11px] font-medium text-forest-600">
              {item.category}
            </span>
            <time dateTime={item.date} className="text-[13px] text-ink-500">
              {formatNewsDate(item.date)}
            </time>
          </div>
          <h1 className="mt-4 font-serif text-[1.5rem] leading-snug text-forest-800 sm:text-[1.9rem]">
            {item.title}
          </h1>
        </div>
      </header>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          {item.image && (
            <div className="mb-10">
              <PlaceholderImage
                src={item.image}
                alt={`${item.title}のイメージ`}
                label="お知らせ"
                ratio="16 / 9"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}

          <ArticleBody html={item.contentHtml} />

          <div className="mt-12 border-t border-paper-200 pt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 hover:text-leaf-800"
            >
              <Icon name="arrow" size={16} className="rotate-180" />
              お知らせ一覧へ戻る
            </Link>
          </div>
        </div>
      </Section>

      <ContactBlock />
    </>
  )
}
