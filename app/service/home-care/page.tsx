import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import IllustCard from '@/components/ui/IllustCard'
import FlowStep from '@/components/ui/FlowStep'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { BODY_CARE, LIFE_SUPPORT, FLOW_STEPS } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'

const FAQ_ITEMS = [
  {
    q: '横浜で訪問介護を利用したいのですが、まず何をすればよいですか。',
    a: 'すでに担当のケアマネジャーがいる方は、まずケアマネジャーへ「訪問介護を利用したい」とご相談ください。ケアプランにそって、はるじゅのホームヘルパーがご自宅にうかがいます。担当のケアマネジャーがいない方や、何から始めればよいか分からない方は、当社でもご相談をお受けしています。',
  },
  {
    q: '横浜市内ならどこでも訪問してもらえますか。',
    a: '横浜市内を中心に対応していますが、ご訪問できるエリアには限りがあります。お住まいの地域が対象になるかどうかは、お問い合わせの際にご確認ください。エリアによってはご希望に添えない場合もありますので、あらかじめご了承ください。',
  },
  {
    q: 'ホームヘルパーには、どんなことを頼めますか。',
    a: '食事・入浴・排せつ・着替えなどの身体介護と、掃除・洗濯・調理・買い物などの生活援助をお手伝いします。ただし、介護保険の訪問介護には制度上の範囲があり、ご家族分の家事や日常生活の範囲を超える作業などは対象外です。ご希望の支援が対象になるかは、担当のケアマネジャーとご相談ください。',
  },
  {
    q: '家族が離れて暮らしていても、本人の代わりに相談できますか。',
    a: 'もちろん可能です。ご本人に代わって、ご家族からのご相談も多くいただいています。遠方にお住まいで様子が心配な場合も、まずは現在のお困りごとをお聞かせください。ご本人とご家族、双方が納得できる形を一緒に考えます。',
  },
  {
    q: '要介護認定を受けていなくても利用できますか。',
    a: '介護保険による訪問介護のご利用には、要介護認定などの条件があります。認定を受けていない場合は、まず区役所や地域包括支援センターで申請が必要です。認定を待つ間や対象外の支援については、保険外の自費介護でお手伝いできる場合もありますので、あわせてご相談ください。',
  },
] as const

export const metadata = pageMeta({
  title: '横浜の訪問介護｜身体介護・生活援助に対応',
  description:
    '横浜市の訪問介護は株式会社はるじゅへ。経験あるホームヘルパーがご自宅にうかがい、食事・入浴・排せつなどの身体介護と、掃除・洗濯・調理などの生活援助を行います。ケアマネジャーと連携し、在宅生活を支えます。',
  path: '/service/home-care',
  keywords: [
    '横浜 訪問介護',
    '横浜市 訪問介護',
    '横浜 ホームヘルパー',
    '訪問介護 利用方法',
    '訪問介護 ケアマネジャー 相談',
  ],
})

export default function HomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <PageHeader
        eyebrow="Home Care"
        title="訪問介護"
        lead="ホームヘルパーがご自宅にうかがい、身体介護と生活援助の両面から、横浜での在宅生活をお手伝いします。住み慣れた我が家で、その人らしい毎日を続けていただくための支援です。"
        crumbs={[
          { name: 'サービス内容', href: '/service' },
          { name: '訪問介護', href: '/service/home-care' },
        ]}
        image="photo-home-care.webp"
      />

      {/* 訪問介護とは */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="訪問介護とは"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '訪問介護とは、ホームヘルパー（訪問介護員）が利用者様のご自宅にうかがい、日常生活を支援するサービスです。介護保険制度にもとづくサービスで、要介護認定を受けた方が、担当のケアマネジャーが作成するケアプランにそって利用します。',
                  '施設に入るのではなく、住み慣れた自宅で暮らし続けたい。その願いを支えるのが横浜の訪問介護です。はるじゅのヘルパーは、食事や入浴といった体に触れる介助から、掃除や調理などの家事まで、一人ひとりの生活リズムに寄り添ってお手伝いします。',
                  'ご本人にとっての「当たり前の暮らし」を守ることを大切にしています。できることはご自身でしていただき、難しいところをそっと支える。自立を尊重した関わりを心がけています。',
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.homeCare.src}
              alt={PHOTO.homeCare.alt}
              ratio="4 / 5"
              tone="leaf"
              objectPosition="center 35%"
            />
          </Reveal>
        </div>
      </Section>

      {/* 対象となる方 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="For You"
            title="このような方におすすめです"
            lead="横浜市内でこんなお困りごとを抱えている方は、訪問介護のご利用をご検討ください。ご本人はもちろん、支えるご家族からのご相談も歓迎します。"
          />
        </Reveal>
        <div className="mt-10">
          <CheckList
            items={[
              '一人での入浴や食事に不安がある方',
              '要介護認定を受けている、または申請を考えている方',
              '掃除や洗濯、買い物などの家事が難しくなってきた方',
              '通院の付き添いや外出のサポートが必要な方',
              '離れて暮らす家族の介護負担を減らしたい方',
              '施設ではなく自宅での暮らしを続けたい方',
            ]}
            columns={2}
          />
        </div>
        <Reveal delay={80}>
          <div className="mt-8">
            <InfoNote>
              介護保険による訪問介護のご利用には、要介護認定などの条件があります。対象になるかどうかは、状態やお住まいの状況、支給決定の内容により異なります。判断に迷う場合は、担当のケアマネジャーや当社へご相談ください。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* 身体介護・生活援助 */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="Support"
            title="訪問介護でできること"
            lead="訪問介護は、大きく「身体介護」と「生活援助」の2つに分かれます。ご本人の状態やケアプランにあわせて、必要な支援を組み合わせて行います。"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
              <h3 className="mb-2 flex items-center gap-2 font-serif text-xl text-forest-800">
                <Icon name="hand" size={22} className="text-leaf-600" />
                身体介護
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed text-ink-700">
                食事や入浴、排せつなど、直接体に触れて行う介助です。ご本人の尊厳を大切にしながら、安全に配慮してお手伝いします。
              </p>
              <CheckList items={BODY_CARE} columns={1} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
              <h3 className="mb-2 flex items-center gap-2 font-serif text-xl text-forest-800">
                <Icon name="broom" size={22} className="text-leaf-600" />
                生活援助
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed text-ink-700">
                掃除や洗濯、調理、買い物など、日々の暮らしを整えるための家事のお手伝いです。ご本人が過ごしやすい環境づくりを支えます。
              </p>
              <CheckList items={LIFE_SUPPORT} columns={1} />
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-8">
            <InfoNote>
              訪問介護で行える内容には、介護保険制度上の範囲があります。たとえば、ご家族のための家事や、日常生活の範囲を超える大掃除・庭仕事などは対象外です。医療行為にあたる処置も行えません。ご希望の支援が対象になるかどうかは、担当のケアマネジャーとご確認ください。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* イラストでわかる 訪問介護の内容 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="At a Glance"
            title="イラストでわかる 訪問介護の内容"
            lead="ホームヘルパーがご自宅でお手伝いする主な内容です。ご本人の状態やケアプランにあわせて、必要なものを組み合わせます。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <IllustCard
              illust="meal"
              title="食事の介助"
              body="食事の準備や、口まで運ぶお手伝い、見守りなど、安全に食べていただくための支援です。"
            />
          </Reveal>
          <Reveal delay={60}>
            <IllustCard
              illust="bath"
              title="入浴の介助"
              body="お風呂の準備から洗身、着替えまで、転倒に配慮しながらお手伝いします。"
            />
          </Reveal>
          <Reveal delay={120}>
            <IllustCard
              illust="mobility"
              title="移動・移乗の介助"
              body="室内の歩行や、ベッドと車椅子の間の移乗など、体を支えて安全に動くお手伝いです。"
            />
          </Reveal>
          <Reveal delay={180}>
            <IllustCard
              illust="hospital"
              title="通院の付き添い"
              body="通院時の移動や受診の付き添いを支援します。対象範囲は制度により異なります。"
            />
          </Reveal>
          <Reveal delay={240}>
            <IllustCard
              illust="laundry"
              title="掃除・洗濯などの生活援助"
              body="掃除や洗濯、調理など、日々の暮らしを整える家事のお手伝いです。"
            />
          </Reveal>
          <Reveal delay={300}>
            <IllustCard
              illust="shopping"
              title="買い物の支援"
              body="日用品や食材の買い物を、代行または一緒に行う形でお手伝いします。"
            />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-8">
            <InfoNote>
              ここに挙げた内容も、介護保険制度上の範囲や、担当のケアマネジャーが作成するケアプランによって、対象になるかどうかが異なります。ご希望の支援については、担当のケアマネジャーとご確認ください。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* ケアマネジャーとの連携 */}
      <Section tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              ratio="5 / 4"
              tone="forest"
              objectPosition="center 30%"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Teamwork"
              title="ケアマネジャーとの連携"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '介護保険を使った訪問介護は、担当のケアマネジャー（介護支援専門員）が作成するケアプランにそって行います。はるじゅは、ケアマネジャーと密に情報を共有しながら、計画にそった支援を丁寧に提供します。',
                  'ご本人の体調や生活の変化に気づいたときは、すみやかにケアマネジャーへ報告し、必要に応じて支援内容を見直します。担当者会議やサービス調整の場にも積極的に参加し、チームの一員として在宅生活を支えます。',
                  'ケアマネジャーの方からのご相談・お問い合わせも承っています。新規のご依頼や空き状況の確認など、お気軽にお声かけください。',
                ]}
              />
            </div>
            <div className="mt-8">
              <ButtonLink href="/care-manager" variant="outline">
                ケアマネジャーの方へ
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 利用するための流れ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Flow"
              title="利用するための流れ"
              lead="はじめての方にも分かりやすいよう、要介護認定からサービス開始までの流れをご案内します。ここでは主なステップを抜粋してご紹介します。"
            />
            <div className="mt-8">
              <ButtonLink href="/flow" variant="outline">
                ご利用の流れを詳しく
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ol className="rounded-3xl border border-paper-200 bg-white p-7 sm:p-9">
              {FLOW_STEPS.slice(0, 4).map((step, i, arr) => (
                <FlowStep
                  key={step.title}
                  index={i + 1}
                  title={step.title}
                  body={step.body}
                  last={i === arr.length - 1}
                />
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* 対応エリア */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Area"
            title="対応エリア"
            lead="横浜市内を中心に、ホームヘルパーがご自宅までうかがいます。"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 rounded-3xl border border-paper-200 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="map" size={22} />
              </div>
              <div>
                <p className="text-[14.5px] leading-relaxed text-ink-700">
                  はるじゅは横浜市内を中心に訪問介護を行っています。地域に根ざした事業所として、住み慣れた街で暮らし続けたい方を身近で支えることを大切にしています。ご訪問できるエリアには限りがありますので、お住まいの地域が対象になるかどうかは、お問い合わせの際にご確認ください。
                </p>
                <div className="mt-5">
                  <ButtonLink href="/contact">対応エリアを相談する</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* よくあるご質問 */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="よくあるご質問"
            lead="横浜での訪問介護について、よくいただくご質問をまとめました。ここにない疑問も、お気軽にお問い合わせください。"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </Reveal>
      </Section>

      {/* 関連ページ */}
      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            links={[
              { label: '自費介護', href: '/service/private-care', desc: '保険外の柔軟なサポート' },
              { label: '重度訪問介護', href: '/service/severe-home-care', desc: '長時間の生活全般の支援' },
              { label: 'ご利用の流れ', href: '/flow', desc: '相談から利用開始まで' },
              { label: 'ご家族の方へ', href: '/family', desc: '介護に悩むご家族へ' },
              { label: 'ケアマネジャーの方へ', href: '/care-manager', desc: '連携・ご相談の受付' },
              { label: 'サービス内容', href: '/service', desc: 'サービス全体のご案内' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
