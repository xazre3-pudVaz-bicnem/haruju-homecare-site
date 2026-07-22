import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import ServiceCard from '@/components/ui/ServiceCard'
import FlowStep from '@/components/ui/FlowStep'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import FAQAccordion from '@/components/ui/FAQAccordion'
import {
  Section,
  CheckList,
  ButtonLink,
  InfoNote,
  RelatedLinks,
} from '@/components/ui/primitives'
import AreaHighlight from '@/components/sections/AreaHighlight'
import { SERVICES, CM_SPEC } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'ケアマネジャーの方へ｜横浜の訪問介護・自費介護のご依頼と連携',
  description:
    '横浜で訪問介護をお探しのケアマネジャーの方へ。株式会社はるじゅは居宅介護支援との連携を大切にし、訪問介護・自費介護・重度訪問介護のご依頼を承ります。相談から情報共有、担当者会議、サービス開始、モニタリングまで丁寧に対応します。',
  path: '/care-manager',
  keywords: [
    '横浜 訪問介護 ケアマネジャー',
    '訪問介護 ケアマネジャー 相談',
    '横浜市 訪問介護 連携',
    '居宅介護支援 訪問介護 依頼',
  ],
})

const CM_FLOW = [
  {
    title: 'ご相談・お問い合わせ',
    body: 'お電話またはフォームから、ご利用希望者様の概況をお知らせください。空き状況や対応可否をその場でお伝えできる場合もあります。',
  },
  {
    title: '情報共有',
    body: 'ご本人の状態や生活環境、ご希望の支援内容、ケアプランの方向性を共有いただきます。必要に応じてアセスメントに同席します。',
  },
  {
    title: 'サービス担当者会議',
    body: '関係するサービス事業所とともに、支援の目標や役割分担を確認します。訪問介護として担える範囲を具体的にご提案します。',
  },
  {
    title: 'サービス内容の調整',
    body: '訪問の曜日・時間・支援内容を、ご本人・ご家族・ケアマネジャーと一緒に調整します。契約に必要なご案内も行います。',
  },
  {
    title: 'サービス開始',
    body: 'ケアプランにそって担当ヘルパーがご自宅にうかがい、支援を始めます。開始直後は特にご様子を丁寧に確認します。',
  },
  {
    title: 'モニタリング・報告',
    body: 'ご状態の変化や気づいた点を定期的に共有します。必要に応じてケアプランの見直しに向けた情報提供を行います。',
  },
] as const

const FAQ_ITEMS = [
  {
    q: '訪問介護の依頼はどのように行えばよいですか。',
    a: 'お電話またはお問い合わせフォームから、ご利用希望者様の概況（お住まいの地域・要介護度・希望する支援内容など）をお知らせください。対応可否や空き状況を確認のうえ、担当者よりご連絡します。',
  },
  {
    q: '緊急時や状態変化への対応はどうなりますか。',
    a: 'ご状態の変化や気づいた点は、担当ケアマネジャーへ速やかに共有するよう努めています。対応できる範囲や体制は事業所の状況により異なりますので、依頼時にご確認ください。医療的な判断が必要な場面では、関係機関と連携して対応します。',
  },
  {
    q: '介護保険サービスと自費介護を組み合わせられますか。',
    a: '介護保険の訪問介護と、保険外の自費介護を組み合わせてのご利用も可能です。保険の範囲では対応しきれない長時間の付き添いや外出同行などを、自費で補う形でご提案できます。内容と料金はご相談のうえで調整します。',
  },
  {
    q: '空き状況はどこで確認できますか。',
    a: '空き状況は時期によって変動します。お問い合わせいただければ、その時点での対応可否をお伝えします。対応エリアや訪問できる時間帯にも限りがありますので、あわせてご相談ください。',
  },
] as const

export default function CareManagerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <PageHeader
        eyebrow="For Care Managers"
        title="ケアマネジャーの方へ"
        lead="横浜で在宅生活を支える一員として、居宅介護支援のケアマネジャーの皆さまとの連携を大切にしています。訪問介護・自費介護・重度訪問介護のご依頼を承ります。"
        crumbs={[{ name: 'ケアマネジャーの方へ', href: '/care-manager' }]}
        image="photo-about-care.webp"
      />

      {/* 連携を大切にしています */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              label="連携セクション写真"
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Partnership"
              title="連携を大切にしています"
              lead="ご利用者様の暮らしを支えるチームの一員として、丁寧な情報共有を心がけています。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                在宅での暮らしは、ケアマネジャーを中心とした多職種の連携によって支えられています。
                はるじゅは、ケアプランの意図をくみ取りながら、訪問介護として担える役割を丁寧に果たすことを大切にしています。
              </p>
              <p>
                日々の支援で気づいたご本人の変化や生活の様子は、担当のケアマネジャーへこまめに共有します。
                「頼んだあとの様子が見えにくい」という不安を感じさせないよう、報告と相談を欠かさない事業所でありたいと考えています。
              </p>
              <p>
                横浜 訪問介護のご依頼先を探しているケアマネジャーの方は、まずお気軽にご相談ください。
                対応エリアや空き状況を確認のうえ、ご利用希望者様に合った支援をご提案します。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 事業所スペック（営業でも活用できる概要） */}
      <Section tone="leaf">
        <Reveal>
          <SectionTitle
            eyebrow="At a Glance"
            title="事業所の概要"
            lead="ご依頼を検討される際にご確認いただきたい、事業所の基本情報です。空き状況や対応可能曜日は変動しますので、最新の状況はお問い合わせください。"
          />
        </Reveal>
        <Reveal>
          <dl className="mt-10 overflow-hidden rounded-3xl border border-paper-200 bg-white">
            {CM_SPEC.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:gap-6 ${
                  i !== CM_SPEC.length - 1 ? 'border-b border-paper-200' : ''
                }`}
              >
                <dt className="w-full shrink-0 text-sm font-semibold text-forest-700 sm:w-40">
                  {row.label}
                </dt>
                <dd className="flex-1 text-[15px] leading-relaxed text-ink-700">
                  {row.value}
                  {row.isDummy && (
                    <span className="ml-2 rounded bg-leaf-100 px-1.5 py-0.5 align-middle text-[11px] font-medium text-forest-600">
                      ※要確認
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal>
          <div className="mt-6">
            <AreaHighlight />
          </div>
        </Reveal>
      </Section>

      {/* ご相談・依頼の流れ */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Flow"
            title="ご相談・ご依頼の流れ"
            lead="初めてご依頼いただく場合も、順を追ってご案内します。既存のご利用者様の状態変化に伴うご相談も承ります。"
          />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ol className="rounded-3xl bg-white p-7 sm:p-9">
              {CM_FLOW.map((step, i) => (
                <FlowStep
                  key={step.title}
                  index={i + 1}
                  title={step.title}
                  body={step.body}
                  last={i === CM_FLOW.length - 1}
                />
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4">
              <div className="rounded-3xl border border-leaf-200 bg-white p-6">
                <h3 className="flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="chat" size={20} className="text-leaf-600" />
                  まずは概況のご共有から
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                  お住まいの地域・要介護度・希望する支援内容などをお知らせいただければ、
                  対応可否をスムーズに確認できます。
                </p>
              </div>
              <div className="rounded-3xl border border-leaf-200 bg-white p-6">
                <h3 className="flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="users" size={20} className="text-leaf-600" />
                  担当者会議にも同席します
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                  サービス担当者会議に参加し、支援の目標や役割分担を一緒に確認します。
                  訪問介護として担える範囲を具体的にご提案します。
                </p>
              </div>
              <InfoNote>
                ご依頼から開始までに必要な期間は、時期や空き状況、調整内容によって異なります。
                ご希望の開始時期がある場合は、早めにご相談ください。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 対応できるサービス */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="対応できるサービス"
            lead="訪問介護を中心に、保険外の自費介護、重度訪問介護までご相談いただけます。ケアプランに合わせて組み合わせをご提案します。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard
                name={s.name}
                href={s.href}
                lead={s.lead}
                illust={s.illust}
                tags={s.tags}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 情報連携・報告体制 */}
      <Section tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Reporting"
              title="情報連携・報告体制"
              lead="頼んだあとも見えやすい。連携のしやすさを大切にしています。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                支援の現場で気づいたことは、担当のケアマネジャーへ共有することを基本にしています。
                日々の小さな変化の積み重ねが、ケアプランの見直しや次の一手につながると考えているためです。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-leaf-200 bg-white p-7 sm:p-8">
              <CheckList
                items={[
                  'ご利用者様の状態変化・気づきの共有',
                  'モニタリングに向けた情報提供',
                  'サービス担当者会議への参加',
                  '医療機関・行政など関係機関との連携',
                  'ご家族の意向・生活状況の橋渡し',
                  'ケアプラン見直し時のご相談対応',
                ]}
                columns={1}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 空き状況・依頼の問い合わせ */}
      <Section tone="white">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-paper-200 bg-paper-50 px-6 py-10 text-center sm:px-10 sm:py-12">
            <span className="rule-accent inline-block text-sm font-semibold tracking-wider text-leaf-700">
              Contact
            </span>
            <h2 className="mt-4 font-serif text-2xl text-forest-800 sm:text-3xl">
              空き状況・ご依頼のお問い合わせ
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-700">
              新規のご依頼、既存ご利用者様の状態変化に伴うご相談など、
              ケアマネジャーの方からのお問い合わせを承っています。
              その時点での対応可否をお伝えしますので、まずはお気軽にご連絡ください。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact?type=care-manager">
                ケアマネジャー専用の相談へ
              </ButtonLink>
              <ButtonLink href="/flow" variant="outline">
                ご利用の流れを見る
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* よくあるご質問 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="ケアマネジャーの方からのよくあるご質問"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* 関連ページ */}
      <Section tone="white">
        <RelatedLinks
          links={[
            {
              label: '訪問介護',
              href: '/service/home-care',
              desc: '身体介護・生活援助でできること',
            },
            {
              label: 'ご利用の流れ',
              href: '/flow',
              desc: '相談から利用開始までの手順',
            },
            {
              label: '横浜で訪問介護をお探しの方へ',
              href: '/area/yokohama-home-care',
              desc: '横浜の在宅介護をお考えの方に',
            },
            {
              label: 'ご家族の方へ',
              href: '/family',
              desc: '介護をするご家族へのご案内',
            },
          ]}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
