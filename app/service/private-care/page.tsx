import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import IllustCard from '@/components/ui/IllustCard'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { PHOTO } from '@/lib/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '自費介護｜横浜で保険外の付き添い・生活支援に柔軟対応',
  description:
    '横浜の自費介護は株式会社はるじゅへ。介護保険では対応しきれない長時間の付き添いや通院・外出の同行、保険外の生活支援に柔軟に対応します。時間や内容にとらわれず、ご本人とご家族のご希望にあわせて組み立てます。',
  path: '/service/private-care',
  keywords: ['横浜 自費介護', '横浜 訪問介護', '介護保険外 サービス', '付き添い 横浜'],
})

export default function PrivateCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Care"
        title="自費介護"
        lead="介護保険では届きにくい部分を補う、保険外のサービスです。時間や内容の制約にとらわれず、ご本人とご家族のご希望にあわせて、必要なサポートを柔軟に組み立てます。"
        crumbs={[
          { name: 'サービス内容', href: '/service' },
          { name: '自費介護', href: '/service/private-care' },
        ]}
        image="photo-private-care.webp"
      />

      {/* 介護保険では対応しきれないお困りごとを支える */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Why Private Care"
              title={
                <>
                  介護保険では対応しきれない
                  <br />
                  お困りごとを支えます
                </>
              }
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '介護保険による訪問介護は、暮らしを支える心強い制度です。一方で、利用できる時間や支援の内容には制度上の決まりがあり、「もう少し長く付き添ってほしい」「これは対象外と言われた」といった場面も少なくありません。',
                  '自費介護は、そうした保険の枠では届きにくい部分を補うサービスです。全額自己負担にはなりますが、時間や内容の制約が少なく、ご本人とご家族のご希望に沿って柔軟に対応できるのが特長です。',
                  '横浜で在宅生活を続けるなかで感じる「ちょっと困った」を、そのままにしないために。保険サービスと組み合わせて、足りない部分だけ自費で補うこともできます。',
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.privateCare.src}
              alt={PHOTO.privateCare.alt}
              ratio="4 / 5"
              tone="leaf"
              objectPosition="center 35%"
            />
          </Reveal>
        </div>
      </Section>

      {/* 利用例 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Examples"
            title="自費介護の利用例"
            lead="こんなときに、自費介護がお役に立ちます。ここに挙げた以外のご相談も、まずはお聞かせください。"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <IllustCard
              illust="shopping"
              title="買い物の代行・同行"
              body="日用品や食材の買い物を、代行または一緒にお出かけする形でお手伝いします。"
            />
          </Reveal>
          <Reveal delay={60}>
            <IllustCard
              illust="outing"
              title="外出・お出かけの付き添い"
              body="お墓参りや季節の行事など、保険では対象になりにくい外出にも同行します。"
            />
          </Reveal>
          <Reveal delay={120}>
            <IllustCard
              illust="hospital"
              title="通院の付き添い"
              body="受診の付き添いから待ち時間、帰宅まで。ご家族に代わってサポートします。"
            />
          </Reveal>
          <Reveal delay={180}>
            <IllustCard
              illust="consultation"
              title="ご家族不在時の見守り"
              body="ご家族が家を空ける間の見守りにも対応し、負担の集中をやわらげます。"
            />
          </Reveal>
        </div>
        <p className="mt-8 text-[13.5px] text-ink-600">
          料金は内容・時間により異なります。詳しくはお問い合わせください。
        </p>
      </Section>

      {/* 介護保険サービスとの違い */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="Difference"
            title="介護保険サービスとの違い"
            lead="どちらが良い・悪いということではなく、それぞれに得意な役割があります。両方を上手に組み合わせることで、暮らしにあった支援がつくれます。"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="home" size={22} />
              </div>
              <h3 className="font-serif text-xl text-forest-800">
                介護保険の訪問介護
              </h3>
              <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-700">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  自己負担割合が制度で定められている
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  ケアプランにそって支援内容が決まる
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  利用できる時間や内容に制度上の範囲がある
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  要介護認定などの条件が必要
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-leaf-300 bg-leaf-50 p-7 sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-leaf-700">
                <Icon name="clock" size={22} />
              </div>
              <h3 className="font-serif text-xl text-forest-800">
                自費介護（保険外）
              </h3>
              <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-700">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  全額自己負担だが、時間・内容の制約が少ない
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  ご希望にあわせて柔軟に組み立てられる
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  長時間の付き添いや外出の同行にも対応
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                  要介護認定がなくてもご相談いただける
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-8">
            <InfoNote>
              自費介護は介護保険の対象外のサービスです。ご利用の可否や内容の詳細は、ご本人の状況をうかがったうえで個別にご相談させていただきます。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* 利用シーン */}
      <Section tone="leaf">
        <Reveal>
          <SectionTitle
            eyebrow="Scenes"
            title="こんな場面でご利用いただいています"
            lead="ご家族の「困った」を、少しでも軽くするために。具体的な利用シーンをいくつかご紹介します。"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="walk" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                通院に付き添ってほしい
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                「平日は仕事で病院へ連れて行けない」。そんなとき、受診の付き添いから待ち時間、帰宅までをヘルパーがサポート。診察内容の共有もでき、離れて暮らすご家族にも安心していただけます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="clock" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                保険の時間だけでは足りない
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                介護保険の訪問時間だけでは見守りが足りない日も、自費介護で延長できます。ご家族が出張や冠婚葬祭で家を空ける間の見守りにもご利用いただけ、負担の集中をやわらげます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex h-full flex-col rounded-3xl bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="heart" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">
                久しぶりの外出を楽しみたい
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                お墓参りや買い物、季節の行事へのお出かけなど、保険では対象になりにくい外出にも同行します。ご本人の「行きたい」という気持ちを大切に、安全に配慮してお付き合いします。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 料金 */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Price"
              title="料金について"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-paper-200 bg-white p-7 sm:p-9">
              <p className="text-[15px] leading-relaxed text-ink-700">
                料金は、支援の内容や時間によって異なります。ご希望のサポート内容をうかがったうえで、事前にご説明しますので、まずはお気軽にお問い合わせください。
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-600">
                「どのくらいの費用がかかるのか不安」という段階でのご相談も歓迎します。ご予算やご希望にあわせて、無理のない形を一緒に考えます。
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact">料金を相談する</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ご家族の方へ */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="For Family"
              title="ご家族の方へ"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '介護は、支えるご家族にとっても大きな負担になります。「仕事と介護の両立が難しい」「自分の時間がまったく取れない」「遠方に暮らす親が心配」。そうした悩みを、一人で抱え込んでいませんか。',
                  '自費介護は、ご家族の負担をやわらげるための選択肢でもあります。ご家族が休息をとる時間や、自分自身の予定に向き合う時間を確保することは、決してわがままではありません。介護を長く続けていくために、必要なことだと考えています。',
                  'ご本人のためだけでなく、ご家族が心にゆとりを取り戻すために。はるじゅは、支える人の暮らしも大切にしながら、横浜での在宅介護を応援します。まずは、いま困っていることを言葉にしてみてください。',
                ]}
              />
            </div>
            <div className="mt-8">
              <ButtonLink href="/family" variant="outline">
                ご家族の方へのご案内
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.about.src}
              alt={PHOTO.about.alt}
              ratio="4 / 5"
              tone="sand"
              objectPosition="center 35%"
            />
          </Reveal>
        </div>
      </Section>

      {/* 関連ページ */}
      <Section tone="white">
        <Reveal>
          <RelatedLinks
            links={[
              { label: '訪問介護', href: '/service/home-care', desc: '介護保険による在宅支援' },
              { label: '重度訪問介護', href: '/service/severe-home-care', desc: '長時間の生活全般の支援' },
              { label: 'ご家族の方へ', href: '/family', desc: '介護に悩むご家族へ' },
              { label: 'ご利用の流れ', href: '/flow', desc: '相談から利用開始まで' },
              { label: 'サービス内容', href: '/service', desc: 'サービス全体のご案内' },
              { label: 'お問い合わせ', href: '/contact', desc: 'ご相談・お見積り' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
