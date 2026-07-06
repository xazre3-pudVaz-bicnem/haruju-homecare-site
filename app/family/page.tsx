import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import IllustCard from '@/components/ui/IllustCard'
import FAQAccordion from '@/components/ui/FAQAccordion'
import {
  Section,
  CheckList,
  ButtonLink,
  InfoNote,
  RelatedLinks,
} from '@/components/ui/primitives'
import { PHOTO } from '@/lib/images'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'ご家族の方へ｜横浜の訪問介護・在宅介護のご相談',
  description:
    '介護をするご家族の方へ。株式会社はるじゅは横浜で訪問介護・自費介護を行い、遠方で暮らす親の見守りや仕事と介護の両立、退院後の在宅生活など、ご家族の不安に寄り添います。ご家族からのご相談も歓迎しています。',
  path: '/family',
  keywords: [
    '横浜 訪問介護 家族',
    '横浜 訪問介護 相談',
    '在宅介護 家族 相談',
    '横浜 自費介護',
  ],
})

const FAQ_ITEMS = [
  {
    q: '本人ではなく、家族から相談してもよいですか。',
    a: 'もちろん可能です。ご本人に代わって、ご家族からご相談いただくことは多くあります。「どう切り出せばよいか分からない」「まず話だけ聞きたい」という段階でも歓迎しています。まずは今のお困りごとをお聞かせください。',
  },
  {
    q: '離れて暮らしていても頼めますか。',
    a: 'ご家族が遠方にお住まいでも、横浜で暮らすご本人への訪問介護をご相談いただけます。日々の様子で気づいたことは、ご家族へ共有するよう努めています。連携の方法はご希望に合わせてご相談ください。対応できるエリアには限りがあります。',
  },
  {
    q: '介護保険を使わず、自費だけでお願いできますか。',
    a: '保険外の自費介護のみのご利用も可能です。介護認定を受けていない方や、保険の範囲では足りない部分を補いたい方にもご利用いただけます。介護保険サービスと組み合わせることもできます。内容と料金はご相談のうえで調整します。',
  },
  {
    q: '費用はどのくらいかかりますか。',
    a: '介護保険の訪問介護は、制度で自己負担割合が定められています。自費介護は支援の内容や時間によって料金が異なります。ご家庭の状況に合わせてご案内しますので、詳しくはお問い合わせください。',
  },
] as const

export default function FamilyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <PageHeader
        eyebrow="For Families"
        title="ご家族の方へ"
        lead="介護は、ご本人だけでなくご家族にとっても大きなことです。横浜で訪問介護を行うはるじゅは、ご家族の不安に寄り添い、無理なく在宅介護を続けられるよう支えます。"
        crumbs={[{ name: 'ご家族の方へ', href: '/family' }]}
        image="photo-consultation.webp"
      />

      {/* ご家族の不安に寄り添います */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="We Are With You"
              title={
                <>
                  ご家族の不安に、
                  <br />
                  寄り添います。
                </>
              }
              lead="「このままで大丈夫だろうか」。その気持ちを、まず受けとめるところから始めます。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                親の物忘れが増えてきた。一人暮らしの様子が心配。退院してくるけれど、
                家で無理なく過ごせるだろうか。介護が身近になったとき、ご家族の頭には
                たくさんの不安がよぎります。何から手をつければよいのか分からず、
                一人で抱え込んでしまう方も少なくありません。
              </p>
              <p>
                はるじゅは、そうしたご家族の気持ちに寄り添いながら、横浜での在宅介護を支えています。
                ご本人が住み慣れた家で穏やかに暮らせること。そして、支えるご家族が
                自分の生活も大切にできること。その両方を叶えられるよう、一緒に考えていきます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              label="ご家族セクション写真"
              ratio="5 / 4"
              tone="sand"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* よくあるお困りごと */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Common Worries"
            title="よくあるお困りごと"
            lead="ご家族から寄せられるご相談には、こうしたものがあります。当てはまるものがあれば、それは相談を始めてよいサインです。"
            align="center"
          />
        </Reveal>
        <div className="mt-12">
          <CheckList
            items={[
              '遠方に住んでいて、親の毎日の様子が心配',
              '仕事と介護の両立が難しくなってきた',
              '夜間や不在時の見守りに不安がある',
              '退院後、家で安全に過ごせるか心配',
              '入浴や排せつの介助が、家族だけでは大変',
              '介護の負担が大きく、自分の時間が持てない',
            ]}
            columns={2}
          />
        </div>
      </Section>

      {/* はるじゅができること */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="What We Can Do"
              title="はるじゅができること"
              lead="介護保険の訪問介護と、保険外の自費介護。二つを柔軟に組み合わせて支えます。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                ホームヘルパーがご自宅にうかがい、食事・入浴・排せつなどの身体介護と、
                掃除・洗濯・調理などの生活援助をお手伝いします。ご家族だけで抱えていた
                負担を分かち合うことで、心にゆとりが生まれます。
              </p>
              <p>
                介護保険では対応しきれない長時間の付き添いや、ご家族が不在のあいだの見守りなどは、
                保険外の自費介護でご相談いただけます。「ここだけ手伝ってほしい」という
                ご要望にも、内容と時間を調整しながら柔軟にお応えします。
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/service/private-care" variant="outline">
                自費介護について
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4">
              <IllustCard
                layout="side"
                illust="meal"
                title="日々の介護の負担を軽くする"
                body="身体介護と生活援助でご家族の手が届きにくい部分を支え、介護と暮らしの両立をお手伝いします。"
              />
              <IllustCard
                layout="side"
                illust="outing"
                title="柔軟な時間・内容で補う"
                body="保険外の自費介護なら、長時間の付き添いや不在時の見守りなど、ご家庭の事情に合わせた支援を組み立てられます。"
              />
              <IllustCard
                layout="side"
                illust="family"
                title="様子をこまめにお伝えする"
                body="訪問時に気づいたご本人の様子は、ご家族へ共有するよう努めています。離れていても、安心につながるよう心がけます。"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* まずご家族からご相談ください */}
      <Section tone="leaf">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              eyebrow="First Step"
              title="まずは、ご家族からご相談ください"
              align="center"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                介護のご相談は、ご本人からでなくてもかまいません。むしろ、ご家族が先に
                気づいて動くことで、早めに備えられることも多くあります。
                「まだサービスを使うかは決めていない」という段階でも大丈夫です。
              </p>
              <p>
                今の状況をお聞かせいただければ、次に何をすればよいかを一緒に整理します。
                介護認定やケアマネジャー探しの段階からでも、お気軽にご相談ください。
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact">家族として相談する</ButtonLink>
              <ButtonLink href="/flow" variant="outline">
                ご利用の流れを見る
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ご利用までの流れ */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Flow"
              title="ご利用までの流れ"
              lead="初めての方にも分かりやすいよう、順を追ってご案内します。"
            />
            <div className="mt-6">
              <InfoNote>
                介護保険を使った訪問介護のご利用には、要介護認定などの条件があります。
                対象になるかどうかや利用できる範囲は、ご本人の状態やお住まいの状況により
                異なりますので、ケアマネジャーや当社へご相談ください。
              </InfoNote>
            </div>
            <div className="mt-6">
              <ButtonLink href="/flow" variant="outline">
                ご利用の流れを詳しく
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-paper-200 bg-paper-50 p-7 sm:p-8">
              <CheckList
                items={[
                  'まずはご家族からご相談・お問い合わせ',
                  '現在の状況やお困りごとをお聞かせいただく',
                  '担当ケアマネジャーと連携し、支援内容を調整',
                  'ご納得のうえで契約・サービス開始',
                  '様子を見ながら定期的に見直し',
                ]}
                columns={1}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* よくあるご質問 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="ご家族からのよくあるご質問"
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
              label: '自費介護',
              href: '/service/private-care',
              desc: '保険外で柔軟に補うサービス',
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
          ]}
        />
      </Section>

      <ContactBlock />
    </>
  )
}
