import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import ServiceCard from '@/components/ui/ServiceCard'
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
import { SERVICES } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: '横浜の訪問介護をお探しの方へ｜身体介護・生活援助・自費介護に対応',
  description:
    '横浜で訪問介護をお探しの方へ。株式会社はるじゅは横浜市内を中心に、ホームヘルパーによる身体介護・生活援助、自費介護、重度訪問介護に対応。退院後の在宅生活や一人暮らしの高齢者、ご家族の介護負担軽減を支えます。',
  path: '/area/yokohama-home-care',
  keywords: [
    '横浜 訪問介護',
    '横浜市 訪問介護',
    '横浜 ホームヘルパー',
    '在宅介護',
    '横浜 自費介護',
    '横浜 重度訪問介護',
  ],
})

const FAQ_ITEMS = [
  {
    q: '横浜市内ならどこでも訪問してもらえますか。',
    a: '横浜市内を中心に対応していますが、ご訪問できるエリアには限りがあります。お住まいの地域が対象になるかどうかは、お問い合わせの際にご確認ください。事業所からの距離や訪問の時間帯によってもご相談内容が変わります。',
  },
  {
    q: '横浜で訪問介護を始めるには、まず何をすればよいですか。',
    a: 'すでに担当のケアマネジャーがいる方は、まずケアマネジャーへ訪問介護を利用したい旨をご相談ください。担当がいない方や、何から始めればよいか分からない方は、当社でもご相談をお受けします。',
  },
  {
    q: '介護保険の訪問介護は、どんな人が利用できますか。',
    a: '訪問介護（介護保険）のご利用には要介護認定などの条件があります。対象になるかどうかは、ご本人の状態やお住まいの状況によって異なりますので、ケアマネジャーや当社へご相談ください。',
  },
  {
    q: '介護保険では足りない部分を横浜でお願いできますか。',
    a: '介護保険では対応しきれない長時間の付き添いや外出の同行などは、保険外の自費介護でご相談いただけます。介護保険サービスと組み合わせてのご利用も可能です。内容と時間はご相談のうえで調整します。',
  },
  {
    q: 'ご本人ではなく家族から相談してもよいですか。',
    a: 'ご家族からのご相談も歓迎しています。離れて暮らすご家族から、横浜で一人暮らしをする親御さんの在宅生活についてご相談いただくことも多くあります。まずは現在のお困りごとをお聞かせください。',
  },
] as const

export default function YokohamaHomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <PageHeader
        eyebrow="Area"
        title="横浜で訪問介護をお探しの方へ"
        lead="住み慣れた横浜のご自宅で、これからも自分らしく暮らし続けたい。株式会社はるじゅは横浜市内を中心に、ホームヘルパーによる訪問介護で在宅生活を支えます。"
        crumbs={[
          { name: '横浜で訪問介護をお探しの方へ', href: '/area/yokohama-home-care' },
        ]}
        image="photo-hero-care.webp"
      />

      {/* 横浜で在宅生活を支える訪問介護 */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Home Care in Yokohama"
              title={
                <>
                  横浜で在宅生活を
                  <br />
                  支える訪問介護
                </>
              }
              lead="横浜市 訪問介護をお探しの方に、在宅での暮らしをまるごとお手伝いします。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                年齢を重ねても、障がいがあっても、慣れ親しんだ横浜のまちで暮らし続けたい。
                その願いを支えるのが訪問介護です。ホームヘルパーがご自宅にうかがい、
                食事や入浴、排せつなどの身体介護と、掃除や洗濯、調理などの生活援助の両面から、
                在宅での毎日をお手伝いします。
              </p>
              <p>
                横浜 訪問介護のご利用を考え始めるきっかけは、人それぞれです。
                退院してこれから在宅生活を始める方、一人暮らしで日々の家事が負担になってきた方、
                離れて暮らすご家族の様子が心配な方。はるじゅは、ご本人とご家族の不安に寄り添いながら、
                横浜での在宅介護を無理なく続けられるよう支援します。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.hero.src}
              alt={PHOTO.hero.alt}
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 30%"
            />
          </Reveal>
        </div>
      </Section>

      {/* はるじゅが対応するサービス */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="はるじゅが横浜で対応するサービス"
            lead="介護保険による訪問介護を中心に、保険外の自費介護、重度訪問介護まで。ご本人の状態やご希望に合わせて、必要な支援を組み合わせてご提案します。"
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

      {/* 横浜での対応エリアの考え方 */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Service Area"
              title="横浜での対応エリアの考え方"
              lead="横浜市内を中心に、ご訪問できる範囲でご対応しています。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                訪問介護は、ヘルパーがご自宅までうかがうサービスです。
                そのため、事業所からの距離やご希望の時間帯によって、
                お受けできる範囲におのずと限りがあります。
                横浜市 訪問介護をお探しの際は、まずお住まいの地域が対象になるかをご確認ください。
              </p>
              <p>
                対象エリアであっても、曜日や時間帯によってはご希望に沿えない場合があります。
                反対に、エリアの境目にお住まいでも、状況によってはご相談をお受けできることもあります。
                「対応できるか分からない」という段階でも、遠慮なくお問い合わせください。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5">
              <PlaceholderImage
                src={PHOTO.about.src}
                alt={PHOTO.about.alt}
                ratio="16 / 10"
                tone="sand"
                objectPosition="center 35%"
              />
              <InfoNote>
                対応できるエリアや訪問できる時間帯は、事業所の体制やご依頼の状況により異なります。
                お住まいの地域が対象になるかどうかは、お問い合わせの際にご確認ください。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 訪問介護を始めるには */}
      <Section tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="How to Start"
              title="横浜で訪問介護を始めるには"
              lead="介護保険の訪問介護は、担当のケアマネジャーを通してご利用いただくのが基本です。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                介護保険を使った横浜 訪問介護は、要介護認定を受けたうえで、
                ケアマネジャーが作成するケアプランにそってご利用いただきます。
                すでに担当のケアマネジャーがいる方は、まずケアマネジャーへご相談ください。
              </p>
              <p>
                「まだ介護認定を受けていない」「担当のケアマネジャーがいない」という方も、
                何から始めればよいか一緒に整理します。はるじゅへ直接ご相談いただいてもかまいません。
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/flow">ご利用の流れを見る</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                横浜での利用を相談する
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4">
              <div className="rounded-3xl border border-leaf-200 bg-white p-6">
                <h3 className="flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="chat" size={20} className="text-leaf-600" />
                  すでにケアマネジャーがいる方
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                  担当のケアマネジャーへ、はるじゅの訪問介護を利用したい旨をお伝えください。
                  ケアプランにそって、当社のヘルパーがご自宅にうかがいます。
                </p>
              </div>
              <div className="rounded-3xl border border-leaf-200 bg-white p-6">
                <h3 className="flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="phone" size={20} className="text-leaf-600" />
                  これから探す方・迷っている方
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                  介護認定やケアマネジャー探しの段階でも、まずはお話をお聞かせください。
                  今の状況に合わせて、次に何をすればよいかをご案内します。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* こんな方に */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="For You"
            title="こんな方に、横浜の訪問介護を"
            lead="横浜 ホームヘルパーによる在宅介護は、こうしたお困りごとを抱える方に選ばれています。"
            align="center"
          />
        </Reveal>
        <div className="mt-12">
          <CheckList
            items={[
              '退院後、これから横浜の自宅で在宅生活を始める方',
              '一人暮らしで、日々の家事や身のまわりが負担になってきた高齢者',
              '入浴や排せつなど、身体の介助が必要になってきた方',
              '家族の介護負担を少しでも軽くしたいご家庭',
              '離れて暮らす親の様子や見守りが心配なご家族',
              '介護保険だけでは足りない部分を柔軟に補いたい方',
            ]}
            columns={2}
          />
        </div>
        <Reveal>
          <div className="mt-8">
            <InfoNote>
              利用できるサービスの範囲や自己負担は、要介護度や支給決定内容、
              制度によって異なります。ご自身のケースに当てはまるかどうかは、
              ケアマネジャーや当社へご相談ください。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* よくあるご質問 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="横浜の訪問介護に関するよくあるご質問"
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
              desc: '身体介護・生活援助でできることを詳しく',
            },
            {
              label: 'ご利用の流れ',
              href: '/flow',
              desc: '相談から利用開始までの手順',
            },
            {
              label: 'ご家族の方へ',
              href: '/family',
              desc: '介護をするご家族の不安に寄り添います',
            },
            {
              label: 'ケアマネジャーの方へ',
              href: '/care-manager',
              desc: '居宅介護支援からのご相談・連携',
            },
          ]}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
