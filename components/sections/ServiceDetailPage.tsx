import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import IllustCard from '@/components/ui/IllustCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { PHOTO } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'
import type { ServiceDetail } from '@/lib/services'

export function serviceDetailMeta(d: ServiceDetail) {
  return pageMeta({ ...d.meta, path: d.service.href })
}

/** 障害福祉サービス・地域生活支援事業の連携先 */
const TEAMWORK = [
  {
    icon: 'users' as const,
    title: 'ご家族との連携',
    body: '日々のご様子や気づいたことを共有しながら、ご家族の不安や負担にも目を向けます。支える家族の暮らしも大切にします。',
  },
  {
    icon: 'chat' as const,
    title: '相談支援専門員との連携',
    body: 'サービス等利用計画を作成する相談支援専門員と連携し、計画にそった支援を提供します。状態の変化はすみやかに共有します。',
  },
  {
    icon: 'shield' as const,
    title: '行政との連携',
    body: '支給決定や利用の手続きでは、区役所などの窓口とも連携します。制度にもとづいた適切な支援が届くよう協力します。',
  },
]

/**
 * 障害福祉サービス等の詳細ページ共通テンプレート。
 * 内容は lib/services.ts の SERVICE_DETAILS で管理する。
 */
export default function ServiceDetailPage({ detail: d }: { detail: ServiceDetail }) {
  const { service, category } = d
  const photo = PHOTO[d.photo]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(d.faqs)) }}
      />
      <PageHeader
        eyebrow={d.eyebrow}
        title={service.name}
        lead={d.headerLead}
        crumbs={[
          { name: 'サービス内容', href: '/service' },
          { name: service.name, href: service.href },
        ]}
        image={photo.src.replace('/images/', '')}
      />

      {/* 〇〇とは */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-100 px-3 py-1 text-[12px] font-semibold text-forest-700">
              <Icon name={category.icon} size={14} />
              {category.name}
            </span>
            <div className="mt-4">
              <SectionTitle eyebrow="About" title={`${service.name}とは`} />
            </div>
            <div className="mt-6">
              <LeadParagraphs paragraphs={d.about} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={photo.src}
              alt={photo.alt}
              ratio="4 / 5"
              tone="leaf"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* 受けられる支援 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle eyebrow="Support" title={d.support.title} lead={d.support.lead} />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {d.scenes.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <IllustCard illust={s.illust} title={s.title} body={s.body} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10">
            <CheckList items={d.support.items} columns={2} />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8">
            <InfoNote>{d.support.note}</InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* 対象となる方 */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle eyebrow="Eligibility" title="対象となる方" />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-700">{d.eligibility.body}</p>
            <div className="mt-6">
              <InfoNote>{d.eligibility.note}</InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 横浜市内での対応 */}
      <Section tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionTitle eyebrow="Area" title="横浜市内でのご相談に対応します" />
            <div className="mt-6">
              <LeadParagraphs paragraphs={d.area} />
            </div>
            <div className="mt-8">
              <ButtonLink href={category.key === 'community-life' ? '/contact?type=mobility' : '/contact?type=welfare'}>
                {service.name}について相談する
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* 連携 */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="Teamwork"
            title="ご家族・相談支援専門員・行政との連携"
            lead="暮らしは、多くの人が関わりながら支えられています。はるじゅはその一員として、関係機関としっかり連携します。"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAMWORK.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                  <Icon name={t.icon} size={22} />
                </div>
                <h3 className="font-serif text-lg text-forest-800">{t.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* よくある質問 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title={`${service.name}のよくある質問`}
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={d.faqs} />
        </div>
      </Section>

      {/* 関連ページ */}
      <Section tone="white">
        <Reveal>
          <RelatedLinks links={d.related} />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
