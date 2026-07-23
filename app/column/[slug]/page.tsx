import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import CtaBanner from '@/components/ui/CtaBanner'
import Icon from '@/components/ui/Icon'
import ArticleBody from '@/components/article/ArticleBody'
import ArticleToc from '@/components/article/ArticleToc'
import ArticleCard from '@/components/article/ArticleCard'
import { Section } from '@/components/ui/primitives'
import {
  getColumnPost,
  getColumnPosts,
  getRelatedColumns,
  formatColumnDate,
} from '@/lib/column'
import { articleMeta, articleSchema } from '@/lib/seo'

type Params = { params: Promise<{ slug: string }> }

/** 記事は全件を静的生成（1,000本以上でも動作する） */
export function generateStaticParams() {
  return getColumnPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getColumnPost(slug)
  if (!post) return { title: 'コラムが見つかりません' }

  return articleMeta({
    title: post.title,
    description: post.description,
    path: `/column/${post.slug}`,
    image: post.image,
    publishedTime: post.date,
    keywords: post.tags.length > 0 ? post.tags : undefined,
  })
}

export default async function ColumnDetailPage({ params }: Params) {
  const { slug } = await params
  const post = getColumnPost(slug)
  if (!post) notFound()

  const related = getRelatedColumns(post, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              path: `/column/${post.slug}`,
              datePublished: post.date,
              image: post.image,
              type: 'Article',
            }),
          ),
        }}
      />

      {/* 記事ヘッダー */}
      <header className="border-b border-paper-200 bg-leaf-50">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-8 sm:pb-14 sm:pt-10">
          <Breadcrumb
            items={[
              { name: '専門コラム', href: '/column' },
              { name: post.title, href: `/column/${post.slug}` },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/column/category/${encodeURIComponent(post.category)}`}
              className="rounded-full bg-leaf-500 px-3 py-1 text-[11px] font-semibold text-white transition-colors hover:bg-leaf-600"
            >
              {post.category}
            </Link>
            <time dateTime={post.date} className="text-[13px] text-ink-500">
              {formatColumnDate(post.date)}
            </time>
          </div>
          <h1 className="mt-4 font-serif text-[1.6rem] leading-snug text-forest-800 sm:text-[2.1rem]">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{post.description}</p>
          )}
        </div>
      </header>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <PlaceholderImage
            src={post.image}
            alt={`${post.title}のイメージ`}
            label="コラム"
            ratio="16 / 9"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />

          <div className="mt-10">
            <ArticleToc items={post.toc} />
          </div>

          <div className="mt-10">
            <ArticleBody html={post.html} />
          </div>

          {post.tags.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-paper-200 pt-8">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-paper-50 px-3 py-1.5 text-[12px] text-ink-600 ring-1 ring-paper-200"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12">
            <CtaBanner
              title="横浜の訪問介護について、お気軽にご相談ください"
              body="記事の内容でご不明な点や、ご家族の介護についてのご相談も承ります。訪問介護・自費介護・重度訪問介護のご利用はもちろん、「何から始めればよいか分からない」という段階からのご相談も歓迎です。"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 hover:text-leaf-800"
            >
              <Icon name="arrow" size={16} className="rotate-180" />
              専門コラム一覧へ戻る
            </Link>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper">
          <h2 className="rule-accent text-sm font-semibold tracking-wider text-leaf-700">
            関連するコラム
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ArticleCard
                key={r.slug}
                href={`/column/${r.slug}`}
                title={r.title}
                description={r.description}
                date={formatColumnDate(r.date)}
                category={r.category}
                image={r.image}
              />
            ))}
          </div>
        </Section>
      )}

      <ContactBlock />
    </>
  )
}
