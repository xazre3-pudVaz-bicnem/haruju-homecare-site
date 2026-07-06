import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/ui/Reveal'
import ContactBlock from '@/components/ui/ContactBlock'
import { Section, ButtonLink } from '@/components/ui/primitives'
import { NEWS, getNews, formatDate } from '@/lib/news'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const news = getNews(slug)
  if (!news) {
    return pageMeta({
      title: 'お知らせ｜横浜の訪問介護',
      description: '横浜の訪問介護 株式会社はるじゅからのお知らせです。',
      path: `/news/${slug}`,
    })
  }
  const description = (news.body[0] ?? '').slice(0, 110)
  return pageMeta({
    title: news.title,
    description,
    path: `/news/${slug}`,
  })
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const news = getNews(slug)
  if (!news) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: news.title,
    datePublished: news.date,
    dateModified: news.date,
    articleSection: news.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/news/${slug}` },
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <header className="relative overflow-hidden border-b border-paper-200 bg-leaf-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-10">
          <Breadcrumb
            items={[
              { name: 'お知らせ', href: '/news' },
              { name: news.title, href: `/news/${slug}` },
            ]}
          />
          <div className="mt-6 flex items-center gap-4">
            <time className="text-[13px] text-ink-500" dateTime={news.date}>
              {formatDate(news.date)}
            </time>
            <span className="rounded-full bg-leaf-100 px-2.5 py-0.5 text-[11px] font-medium text-forest-600">
              {news.category}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-[1.6rem] leading-tight text-forest-800 sm:text-3xl">
            {news.title}
          </h1>
        </div>
      </header>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-700">
              {news.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 border-t border-paper-200 pt-8">
            <ButtonLink href="/news" variant="outline">
              お知らせ一覧へ戻る
            </ButtonLink>
          </div>
        </div>
      </Section>

      <ContactBlock />
    </>
  )
}
