import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { SERVICES } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'サービス内容｜横浜の訪問介護・自費介護・重度訪問介護',
  description:
    '株式会社はるじゅのサービス一覧です。横浜市内を中心に、介護保険による訪問介護、保険外の自費介護、重度訪問介護に対応。ケアマネジャーと連携し、ご本人とご家族の暮らしを支えます。',
  path: '/service',
  keywords: ['横浜 訪問介護', '横浜 自費介護', '横浜 重度訪問介護', '横浜市 訪問介護'],
})

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="サービス内容"
        lead="住み慣れたご自宅で、その人らしい暮らしを続けていただくために。はるじゅは訪問介護を中心に、保険外の自費介護、重度訪問介護まで、必要な支援を組み合わせてご提案します。"
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
                  暮らしに寄り添う、
                  <br />
                  3つの介護サービス
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
                'はるじゅは、横浜市内を中心に訪問介護を行う介護事業所です。ホームヘルパーがご自宅にうかがい、食事・入浴・排せつなどの身体介護から、掃除・洗濯・調理といった生活援助まで、日々の暮らしをお手伝いします。',
                '介護保険による訪問介護に加えて、保険では対応しきれない部分を補う自費介護、重度の障がいがある方の生活全般を支える重度訪問介護にも対応しています。ご本人の状態やご希望にあわせて、複数のサービスを組み合わせてご利用いただけます。',
                'ご利用にあたっては、担当のケアマネジャーや医療機関、行政などの関係機関としっかり連携します。ご本人とご家族が安心して在宅生活を続けられるよう、地域全体で暮らしを支える体制づくりを大切にしています。',
              ]}
            />
            <div className="mt-6">
              <InfoNote>
                介護保険を使ったサービスのご利用には、要介護認定などの条件があります。対象になるかどうかは状態やお住まいの状況により異なりますので、まずはお気軽にご相談ください。
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
            title="はるじゅのサービス"
            lead="それぞれのサービスの詳細は、各ページでご確認いただけます。どのサービスが合うか分からない場合も、ご相談いただければ一緒に考えます。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
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

      {/* サービスの選び方・組み合わせ */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="How to Choose"
            title="サービスの選び方・組み合わせ方"
            lead="どのサービスが必要かは、ご本人の状態やご家族の状況によって変わります。無理に決める必要はありません。まずは今のお困りごとをお聞かせください。"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="home" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                介護保険を使いたい方
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                要介護認定を受けている、またはこれから受ける方は、訪問介護が基本になります。担当のケアマネジャーが作るケアプランにそって、必要な支援を組み立てます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="clock" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                保険の枠を超えて支えたい方
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                長時間の付き添いや、介護保険では対象外になる生活支援には、自費介護が向いています。訪問介護と組み合わせて、足りない部分だけ補うこともできます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="shield" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                重い障がいがある方
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                長時間にわたる見守りや生活全般の支援が必要な方には、重度訪問介護があります。対象となる方や利用条件は、個別にご相談のうえで確認します。
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 rounded-3xl bg-leaf-50 p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="font-serif text-xl text-forest-800">
                複数のサービスを組み合わせられます
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-700">
                介護保険の訪問介護と自費介護を併用したり、ご状態の変化にあわせて内容を見直したりと、暮らしにあわせて柔軟に調整できます。「これはできる？」という小さな疑問でも構いません。ご本人とご家族にとって無理のない形を、一緒に考えていきます。
              </p>
            </div>
            <div className="lg:justify-self-end">
              <CheckList
                items={[
                  '訪問介護と自費介護の併用',
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
