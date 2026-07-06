import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { localBusinessSchema, organizationSchema } from '@/lib/seo'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '株式会社はるじゅ｜横浜の訪問介護・自費介護・重度訪問介護',
    template: `%s｜${SITE_NAME}`,
  },
  description:
    '株式会社はるじゅは、横浜市内を中心に訪問介護・自費介護・重度訪問介護を行う地域密着の介護事業所です。ケアマネジャーを通したご利用相談、保険外の生活支援、採用情報も掲載しています。',
  keywords: [
    '横浜 訪問介護',
    '横浜市 訪問介護',
    '横浜 ホームヘルパー',
    '横浜 自費介護',
    '横浜 重度訪問介護',
    '横浜 介護 求人',
    '横浜 訪問介護 求人',
    '訪問介護 利用方法',
    '訪問介護 ケアマネジャー 相談',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink-800 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
