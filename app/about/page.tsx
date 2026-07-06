import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import IllustCard from '@/components/ui/IllustCard'
import ContactBlock from '@/components/ui/ContactBlock'
import { Section, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { COMPANY } from '@/lib/constants'
import { PHOTO } from '@/lib/images'
import type { IllustKey } from '@/lib/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '横浜の訪問介護事業所としての理念と3つの約束',
  description:
    '横浜市内で訪問介護・自費介護・重度訪問介護を行う株式会社はるじゅの理念をご紹介します。その人らしい暮らしを尊重し、ご家族の不安に寄り添い、ケアマネジャー・医療・行政と連携して在宅生活を支えます。',
  path: '/about',
  keywords: ['横浜 訪問介護', '横浜市 訪問介護', '横浜 ホームヘルパー', '在宅介護'],
})

const PROMISES: { illust: IllustKey; title: string; body: string }[] = [
  {
    illust: 'consultation',
    title: 'その人らしい暮らしを尊重します',
    body: '年齢を重ねても、障がいがあっても、住み慣れたご自宅で自分らしく暮らし続けたい。その願いを大切に、一人ひとりの生活のリズムやこだわりに合わせた支援を行います。',
  },
  {
    illust: 'family',
    title: 'ご家族の不安にも寄り添います',
    body: '介護はご本人だけでなく、支えるご家族の毎日にも関わります。ご家族が抱える不安や負担を少しでも減らせるよう、状況をうかがいながら一緒に考えます。',
  },
  {
    illust: 'hospital',
    title: '関係機関と連携して支えます',
    body: 'ケアマネジャー・医療機関・行政などの関係機関としっかり連携し、必要な支援がとぎれないようにします。地域全体でご本人の暮らしを支える体制づくりに取り組みます。',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="はるじゅについて"
        lead="横浜で在宅生活を支える訪問介護の事業所として、介護を受ける人にも、働く人にも誠実でありたい。私たちの理念と、大切にしている約束をご紹介します。"
        crumbs={[{ name: 'はるじゅについて', href: '/about' }]}
        image="photo-about-care.webp"
      />

      {/* メインビジュアル */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.about.src}
              alt={PHOTO.about.alt}
              ratio="5 / 4"
              tone="sand"
              objectPosition="center 35%"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Message"
              title={
                <>
                  住み慣れた家で、
                  <br />
                  その人らしく。
                </>
              }
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  'はるじゅは、横浜市内を中心に訪問介護・自費介護・重度訪問介護を行う地域密着の介護事業所です。ホームヘルパーがご自宅にうかがい、身体介護と生活援助の両面から在宅での暮らしをお手伝いします。',
                  '介護保険のサービスだけでは届きにくい部分は、保険外の自費介護で柔軟に補います。重度の障がいがある方には、長時間にわたって生活全般を支える重度訪問介護にも取り組んでいます。',
                  'どんな状態の方にも、これまでの暮らしがありました。その暮らしをできるだけ続けられるように寄り添うことが、私たちの役割だと考えています。',
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 理念 */}
      <Section tone="forest">
        <Reveal>
          <SectionTitle
            eyebrow="Philosophy"
            tone="light"
            align="center"
            title="介護を受ける人にも、働く人にも、誠実に。"
            lead="利用者様に誠実であるためには、まず支えるスタッフが安心して働けること。はるじゅはその両方を大切にしています。"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-[15px] leading-relaxed text-paper-100/85">
            <p>
              私たちが目指すのは、派手なことではありません。目の前のご本人とご家族に向き合い、
              その方の暮らしがつづくよう、できることを一つずつ積み重ねていくこと。
            </p>
            <p>
              そして、その支えを担うのはスタッフ一人ひとりです。働く人を大切にすることが、
              結果として利用者様への誠実なケアにつながると信じています。
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 3つの約束 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Our Promise"
            title="はるじゅの3つの約束"
            lead="私たちが日々の支援で大切にしている、3つの約束です。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <IllustCard illust={p.illust} title={p.title} body={p.body} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 代表メッセージ */}
      <Section tone="white">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              alt="株式会社はるじゅ 代表者の写真"
              label="代表者写真 ※準備中"
              ratio="4 / 5"
              tone="leaf"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle eyebrow="Representative" title="代表メッセージ" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                介護の現場に立ってきて感じるのは、暮らしを支えるという仕事の重みと、
                やりがいの大きさです。ご本人の「ありがとう」の一言や、ご家族が少しほっとした表情は、
                私たちにとって何よりの励みになります。
              </p>
              <p>
                横浜という地域で、在宅の暮らしを続けたい方を一人でも多く支えたい。
                そのためには、現場で働くスタッフが誇りを持って、安心して働ける会社であることが欠かせません。
                利用者様とスタッフ、その両方を大切にする事業所であり続けます。
              </p>
              <p>
                ご本人のこと、ご家族のこと、まずはお話をお聞かせください。
                これからも地域の皆さまとともに歩んでまいります。
              </p>
            </div>
            <div className="mt-6 border-t border-paper-200 pt-5">
              <p className="text-[13px] text-ink-500">株式会社はるじゅ 代表</p>
              <p className="mt-1 font-serif text-lg text-forest-800">
                {COMPANY.representative.value}
                <span className="ml-2 rounded bg-leaf-100 px-1.5 py-0.5 align-middle text-[11px] font-medium text-forest-600">
                  ※仮情報
                </span>
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/company" variant="outline">
                会社概要を見る
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 補足・関連 */}
      <Section tone="paper">
        <Reveal>
          <InfoNote>
            訪問介護や重度訪問介護でご利用いただける支援の範囲・条件は、介護保険制度や自治体の支給決定内容により異なります。
            まずはご本人の状況をお聞かせください。
          </InfoNote>
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <RelatedLinks
              links={[
                { label: 'サービス内容', href: '/service', desc: '訪問介護・自費介護・重度訪問介護' },
                { label: 'ご利用の流れ', href: '/flow', desc: 'ご相談から利用開始まで' },
                { label: '会社概要', href: '/company', desc: '事業所情報・対応エリア' },
                { label: '求人情報', href: '/recruit', desc: '横浜で介護の仕事を探す方へ' },
                { label: 'よくあるご質問', href: '/faq', desc: 'ご利用前の疑問はこちら' },
                { label: 'お問い合わせ', href: '/contact', desc: 'ご相談・ご質問はこちら' },
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <ContactBlock />
    </>
  )
}
