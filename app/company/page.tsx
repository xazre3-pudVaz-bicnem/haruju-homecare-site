import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import CompanyInfo from '@/components/ui/CompanyInfo'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { Section, InfoNote, RelatedLinks } from '@/components/ui/primitives'
import { COMPANY } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '会社概要｜横浜の訪問介護 事業所情報・対応エリア',
  description:
    '横浜市内を中心に訪問介護・自費介護・重度訪問介護を行う株式会社はるじゅの会社概要です。事業所の所在地、営業時間、事業内容、対応エリアをご案内します。地域に根ざした在宅介護の事業所として運営しています。',
  path: '/company',
  keywords: ['横浜 訪問介護', '横浜市 訪問介護', '訪問介護 事業所', '横浜 介護'],
})

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="会社概要"
        lead="横浜の在宅介護を支える事業所として、地域に根ざした運営を続けています。事業所の情報と対応エリアをご案内します。"
        crumbs={[{ name: '会社概要', href: '/company' }]}
      />

      {/* 導入ビジュアル */}
      <Section tone="white" className="!pb-0">
        <Reveal>
          <PlaceholderImage
            src={PHOTO.staffTeam.src}
            alt={PHOTO.staffTeam.alt}
            label="スタッフ集合写真"
            ratio="21 / 9"
            objectPosition="center 40%"
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
        </Reveal>
      </Section>

      {/* 会社概要テーブル */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Overview"
              title="事業所情報"
              lead="正式な情報が確定次第、順次更新します。※仮情報の項目は現在準備中です。"
            />
          </Reveal>
          <Reveal delay={80}>
            <CompanyInfo />
          </Reveal>
        </div>
      </Section>

      {/* 対応エリア */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Area"
            title="対応エリア"
            lead="横浜市内を中心に、ご自宅にうかがっています。ご訪問できるエリアには限りがありますので、お住まいの地域が対象になるかは、お問い合わせの際にご確認ください。"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal>
            <div className="rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                  <Icon name="map" size={22} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-forest-800">{COMPANY.areaServed}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-700">
                    横浜市内の在宅で暮らす方を対象に、訪問介護・自費介護・重度訪問介護をご提供しています。
                    近隣の地域についても、まずはご相談ください。
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <InfoNote>
                  対応可能なエリアや訪問の可否は、ご住所やご希望の時間帯・支援内容により異なります。
                  地図の位置は正式な事業所住所の確定前のため、おおよその表示です（※仮情報）。
                </InfoNote>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-3xl border border-paper-200 bg-white">
              <iframe
                src={COMPANY.googleMapEmbedUrl}
                title="株式会社はるじゅ 対応エリア（横浜市周辺）の地図"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-video w-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 関連 */}
      <Section tone="white">
        <Reveal>
          <RelatedLinks
            links={[
              { label: 'はるじゅについて', href: '/about', desc: '私たちの理念と約束' },
              { label: 'サービス内容', href: '/service', desc: '訪問介護・自費介護・重度訪問介護' },
              { label: 'ご利用の流れ', href: '/flow', desc: 'ご相談から利用開始まで' },
              { label: 'よくあるご質問', href: '/faq', desc: 'ご利用前の疑問はこちら' },
              { label: '求人情報', href: '/recruit', desc: '横浜で介護の仕事を探す方へ' },
              { label: 'お問い合わせ', href: '/contact', desc: 'ご相談・ご質問はこちら' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
