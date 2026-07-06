import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import FlowStep from '@/components/ui/FlowStep'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactBlock from '@/components/ui/ContactBlock'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import IllustCard from '@/components/ui/IllustCard'
import { Section, InfoNote, RelatedLinks } from '@/components/ui/primitives'
import { FLOW_STEPS } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import type { IllustKey } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: '横浜の訪問介護 ご利用の流れ｜相談から利用開始まで',
  description:
    '横浜の訪問介護 株式会社はるじゅのご利用の流れをご案内します。ケアマネジャーへの相談から介護認定、ケアプラン作成、契約、訪問開始まで。介護保険の利用方法や、自費介護・重度訪問介護のご相談についても分かりやすく説明します。',
  path: '/flow',
  keywords: [
    '訪問介護 利用方法',
    '訪問介護 ケアマネジャー 相談',
    '横浜 訪問介護',
    '横浜市 訪問介護',
    '横浜 自費介護',
  ],
})

const CASES: { illust: IllustKey; title: string; body: string }[] = [
  {
    illust: 'consultation',
    title: '介護保険を使う場合',
    body: '要介護認定を受けている方は、担当のケアマネジャーが作成するケアプランにそって訪問介護をご利用いただきます。まずはケアマネジャーへ、はるじゅを利用したい旨をお伝えください。',
  },
  {
    illust: 'family',
    title: 'すでにケアマネジャーがいる場合',
    body: '担当のケアマネジャーへご相談いただくのがスムーズです。当社からケアマネジャーと連携し、訪問の曜日・時間・支援内容を調整してご自宅にうかがいます。',
  },
  {
    illust: 'hospital',
    title: 'まだ介護認定を受けていない場合',
    body: 'お住まいの区役所や地域包括支援センターで要介護認定の申請を行うところから始まります。何から進めればよいか分からない場合も、当社でご相談をお受けします。',
  },
  {
    illust: 'shopping',
    title: '自費介護を利用したい場合',
    body: '介護保険では届きにくい部分を補う自費介護は、認定の有無にかかわらずご相談いただけます。長時間の付き添いや柔軟な時間帯の支援など、内容・時間はご相談のうえで調整します。',
  },
  {
    illust: 'severeCare',
    title: '重度訪問介護を相談したい場合',
    body: '重度の障がいがある方の生活全般を支えるサービスです。対象となる方や利用条件は自治体や支給決定内容により異なりますので、まずはご本人の状況をお聞かせください。',
  },
]

const FLOW_FAQS = [
  {
    q: '訪問介護を利用するには、まず何をすればよいですか。',
    a: 'すでに担当のケアマネジャーがいる方は、まずケアマネジャーへご相談ください。いない場合や、何から始めればよいか分からない場合は、当社でもご相談をお受けします。ご本人だけでなく、ご家族からのお問い合わせも歓迎しています。',
  },
  {
    q: 'ケアマネジャーがいなくても相談できますか。',
    a: 'はい、ご相談いただけます。介護認定の申請やケアマネジャー探しの段階からお困りの場合も、進め方をご案内します。まずは現在のお困りごとをお聞かせください。',
  },
  {
    q: '相談してから利用開始まで、どのくらいかかりますか。',
    a: 'ご状況や認定の有無、ケアプランの調整状況により異なります。すでに認定を受けていてケアマネジャーがいる場合は比較的スムーズです。具体的な目安はお問い合わせの際にご説明します。',
  },
  {
    q: '介護保険と自費介護を組み合わせて使えますか。',
    a: '組み合わせてのご利用も可能です。介護保険サービスで足りない部分を自費介護で補うなど、ご本人・ご家族のご希望に合わせて調整します。詳しくはご相談ください。',
  },
]

export default function FlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FLOW_FAQS)) }}
      />

      <PageHeader
        eyebrow="Flow"
        title="ご利用の流れ"
        lead="介護保険を使った訪問介護は、担当のケアマネジャーを通してご利用いただくのが基本です。初めての方にも分かりやすいよう、ご相談から利用開始までを順を追ってご案内します。"
        crumbs={[{ name: 'ご利用の流れ', href: '/flow' }]}
      />

      {/* 導入ビジュアル */}
      <Section tone="white" className="!pb-0">
        <Reveal>
          <PlaceholderImage
            src={PHOTO.consultation.src}
            alt={PHOTO.consultation.alt}
            label="ご相談の様子"
            ratio="21 / 9"
            objectPosition="center 32%"
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
        </Reveal>
      </Section>

      {/* メインの流れ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Step"
              title={
                <>
                  ケアマネジャーを
                  <br />
                  通してご利用ください
                </>
              }
              lead="介護保険による訪問介護は、ケアマネジャーが作成するケアプランにそって提供されます。下記の流れにそって進めていきます。"
            />
            <div className="mt-8">
              <InfoNote>
                介護保険で受けられる支援の範囲や自己負担は、制度や認定内容により異なります。
                ご不明な点は担当のケアマネジャーや当社へお気軽にご相談ください。
              </InfoNote>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ol className="rounded-3xl border border-paper-200 bg-white p-7 sm:p-9">
              {FLOW_STEPS.map((step, i) => (
                <FlowStep
                  key={step.title}
                  index={i + 1}
                  title={step.title}
                  body={step.body}
                  last={i === FLOW_STEPS.length - 1}
                />
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* ケース別 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Cases"
            title="ご状況に合わせたご相談"
            lead="今の状況によって、始め方は少しずつ異なります。当てはまるところからご覧ください。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <IllustCard illust={c.illust} title={c.title} body={c.body} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="利用方法に関するよくあるご質問"
            lead="ご相談の前によくいただく質問をまとめました。"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <Reveal>
            <FAQAccordion items={FLOW_FAQS} />
          </Reveal>
        </div>
      </Section>

      {/* 関連 */}
      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            links={[
              { label: 'サービス内容', href: '/service', desc: '訪問介護・自費介護・重度訪問介護' },
              { label: '訪問介護', href: '/service/home-care', desc: '身体介護・生活援助の内容' },
              { label: 'よくあるご質問', href: '/faq', desc: 'ご利用前の疑問はこちら' },
              { label: 'ご家族・ケアマネジャーの方へ', href: '/care-manager', desc: '連携・ご相談について' },
              { label: '会社概要', href: '/company', desc: '対応エリア・事業所情報' },
              { label: 'お問い合わせ', href: '/contact', desc: 'ご相談・ご質問はこちら' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
