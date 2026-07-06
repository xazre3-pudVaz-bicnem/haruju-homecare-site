import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, COMPANY } from './constants'

type PageMetaArgs = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

/** 各ページ共通の metadata 生成（canonical / OGP 含む） */
export function pageMeta({ title, description, path, keywords }: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: `${title}｜${SITE_NAME}`,
      description,
      url,
      type: 'website',
      locale: 'ja_JP',
      siteName: SITE_NAME,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  }
}

/** FAQPage 構造化データ */
export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

type Crumb = { name: string; href: string }

/** BreadcrumbList 構造化データ */
export function breadcrumbSchema(crumbs: readonly Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  }
}

/**
 * 事業所の構造化データ。
 * 訪問介護事業所は医療・福祉系のため MedicalBusiness を基本に、
 * 地域ビジネスとしての LocalBusiness も兼ねる形で記述。
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'はるじゅ',
  url: SITE_URL,
  telephone: COMPANY.phone.value,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    '横浜市内を中心に訪問介護・自費介護・重度訪問介護を行う地域密着の介護事業所。ケアマネジャーを通したご利用相談、保険外の生活支援、採用情報も掲載。',
  address: {
    '@type': 'PostalAddress',
    addressRegion: COMPANY.addressRegion,
    addressLocality: COMPANY.addressLocality,
    addressCountry: 'JP',
  },
  geo: { '@type': 'GeoCoordinates', latitude: COMPANY.lat, longitude: COMPANY.lng },
  areaServed: [
    { '@type': 'City', name: '横浜市' },
    { '@type': 'AdministrativeArea', name: '神奈川県' },
  ],
  knowsAbout: [
    '訪問介護',
    '自費介護',
    '重度訪問介護',
    '身体介護',
    '生活援助',
    'ホームヘルパー',
    '在宅介護',
    'ケアマネジャー連携',
  ],
}

/** Organization 構造化データ */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  telephone: COMPANY.phone.value,
  address: {
    '@type': 'PostalAddress',
    addressRegion: COMPANY.addressRegion,
    addressLocality: COMPANY.addressLocality,
    addressCountry: 'JP',
  },
}
