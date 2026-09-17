import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon, { type IconName } from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import ServiceCategories from '@/components/sections/ServiceCategories'
import { SERVICE_CATEGORIES, ALL_SERVICES } from '@/lib/services'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'サービス内容｜横浜の訪問介護・障害福祉サービス・移動支援',
  description:
    '株式会社はるじゅのサービス一覧です。介護保険の訪問介護、障害福祉サービスの居宅介護・重度訪問介護・同行援護・行動援護、地域生活支援事業の移動支援、保険外サービスまで、横浜市内を中心に対応します。',
  path: '/service',
  keywords: [
    '横浜 訪問介護',
    '横浜 居宅介護',
    '横浜 重度訪問介護',
    '横浜 同行援護',
    '横浜 行動援護',
    '横浜 移動支援',
    '横浜 自費介護',
  ],
})

const CHOOSE: { icon: IconName; title: string; body: string; category: string }[] = [
  {
    icon: 'home',
    title: '介護保険を使いたい方',
    body: '要介護認定を受けている、またはこれから受ける方は、訪問介護が基本になります。担当のケアマネジャーが作るケアプランにそって支援を組み立てます。',
    category: '介護保険サービス',
  },
  {
    icon: 'heart',
    title: '障がいのある方',
    body: 'ご自宅での介助には居宅介護・重度訪問介護、外出の支援には同行援護・行動援護があります。相談支援専門員と連携してご案内します。',
    category: '障害福祉サービス',
  },
  {
    icon: 'map',
    title: '余暇や社会参加の外出をしたい方',
    body: '買い物や趣味、地域行事への参加など、暮らしを広げる外出には、横浜市の移動支援をご利用いただけます。',
    category: '地域生活支援事業',
  },
  {
    icon: 'clock',
    title: '制度の枠を超えて支えたい方',
    body: '長時間の付き添いや、制度では対象外になる生活支援には、保険外サービスが向いています。足りない部分だけ補うこともできます。',
    category: '自費サービス',
  },
]

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="サービス内容"
        lead="住み慣れたご自宅や地域で、その人らしい暮らしを続けていただくために。はるじゅは介護保険・障害福祉・地域生活支援事業・自費の4つの区分で、必要な支援を組み合わせてご提案します。"
        crumbs={[{ name: 'サービス内容', href: '/service' }]}
      />

      {/* イントロ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Overview"
              title={
                <>
                  4つの区分で選べる、
                  <br />
                  {ALL_SERVICES.length}つの在宅サービス
                </>
              }
            />
            <div className="mt-8">
              <ButtonLink href="/flow" variant="outline">
                ご利用の流れを見る
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <LeadParagraphs
              paragraphs={[
                'はるじゅは、横浜市内を中心に在宅での暮らしを支える介護事業所です。ホームヘルパーがご自宅にうかがう支援から、外出に付き添う支援まで、日々の暮らしをお手伝いします。',
                '高齢の方には介護保険の訪問介護を、障がいのある方には居宅介護・重度訪問介護・同行援護・行動援護といった障害福祉サービスや、横浜市の移動支援をご提供します。制度では届きにくい部分は、保険外サービス（自費介護）で補うこともできます。',
                'ご利用にあたっては、担当のケアマネジャーや医療機関、行政などの関係機関としっかり連携します。ご本人とご家族が安心して在宅生活を続けられるよう、地域全体で暮らしを支える体制づくりを大切にしています。',
              ]}
            />
            <div className="mt-6">
              <InfoNote>
                制度を使ったサービスのご利用には、要介護認定や障害福祉サービスの支給決定などが必要です。どの制度が使えるかはご本人の状態やお住まいの状況により異なりますので、まずはお気軽にご相談ください。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* サービス一覧カード */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Service List"
            title="制度別のサービス一覧"
            lead="ご利用いただく制度ごとに、サービスを分けてご案内します。どのサービスが合うか分からない場合も、ご相談いただければ一緒に考えます。"
            align="center"
          />
        </Reveal>
        <nav aria-label="サービス区分" className="mt-8 flex flex-wrap justify-center gap-2">
          {SERVICE_CATEGORIES.map((c) => (
            <a
              key={c.key}
              href={`#svc-${c.key}`}
              className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-[13px] font-medium text-forest-700 ring-1 ring-paper-200 transition-colors hover:bg-leaf-50 hover:ring-leaf-300"
            >
              {c.name}
              <span className="ml-1.5 text-[11px] text-ink-500">{c.services.length}</span>
            </a>
          ))}
        </nav>
        <div className="mt-10">
          <ServiceCategories />
        </div>
      </Section>

      {/* サービスの選び方・組み合わせ */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="How to Choose"
            title="サービスの選び方・組み合わせ方"
            lead="どのサービスが必要かは、ご本人の状態やご家族の状況によって変わります。無理に決める必要はありません。まずは今のお困りごとをお聞かせください。"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CHOOSE.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                  <Icon name={c.icon} size={22} />
                </div>
                <h3 className="font-serif text-lg text-forest-800">{c.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">{c.body}</p>
                <p className="mt-4 text-[12.5px] font-semibold text-leaf-700">→ {c.category}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 rounded-3xl bg-leaf-50 p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="font-serif text-xl text-forest-800">
                複数のサービスを組み合わせられます
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-700">
                訪問介護や障害福祉サービスと保険外サービスを併用したり、ご状態の変化にあわせて内容を見直したりと、暮らしにあわせて柔軟に調整できます。「これはできる？」という小さな疑問でも構いません。ご本人とご家族にとって無理のない形を、一緒に考えていきます。
              </p>
            </div>
            <div className="lg:justify-self-end">
              <CheckList
                items={[
                  '制度のサービスと保険外サービスの併用',
                  '居宅介護と外出支援の組み合わせ',
                  '状態の変化に応じた見直し',
                  'ご家族の負担にあわせた調整',
                ]}
                columns={1}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 関連ページ */}
      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            links={[
              { label: 'ご利用の流れ', href: '/flow', desc: '相談から利用開始までの手順' },
              { label: 'ご家族の方へ', href: '/family', desc: '介護に悩むご家族へのご案内' },
              { label: 'ケアマネジャーの方へ', href: '/care-manager', desc: '連携・ご相談の受付について' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
