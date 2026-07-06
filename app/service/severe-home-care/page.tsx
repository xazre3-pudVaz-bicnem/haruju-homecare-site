import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import Illustration from '@/components/ui/Illustration'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import { Section, CheckList, ButtonLink, InfoNote, RelatedLinks, LeadParagraphs } from '@/components/ui/primitives'
import { PHOTO } from '@/lib/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '重度訪問介護｜横浜で長時間の見守り・生活全般の支援に対応',
  description:
    '横浜の重度訪問介護は株式会社はるじゅへ。重度の障がいがある方が住み慣れた地域で暮らし続けられるよう、長時間の見守りから身体介護、家事、外出支援まで生活全般を支えます。ご本人の生活リズムを尊重した支援を大切にします。',
  path: '/service/severe-home-care',
  keywords: ['横浜 重度訪問介護', '横浜 訪問介護', '重度訪問介護 とは', '障がい 在宅支援 横浜'],
})

export default function SevereHomeCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Severe Home Care"
        title="重度訪問介護"
        lead="重度の障がいがある方が、住み慣れた地域で自分らしく暮らし続けられるように。長時間にわたって生活全般を支える、寄り添い型のサービスです。"
        crumbs={[
          { name: 'サービス内容', href: '/service' },
          { name: '重度訪問介護', href: '/service/severe-home-care' },
        ]}
        image="photo-severe-care.webp"
      />

      {/* 重度訪問介護とは */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="重度訪問介護とは"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '重度訪問介護は、重度の肢体不自由や知的障がい、精神障がいなどにより、常に介護を必要とする方を対象とした障害福祉サービスです。ホームヘルパーが長時間にわたってご自宅にとどまり、身体介護から家事、見守り、外出時の支援まで、生活全般を一体的に支えます。',
                  '短時間で区切られた訪問ではなく、暮らしの流れに沿って継続的に寄り添えることが、重度訪問介護の大きな特長です。ご本人のペースを崩さず、その日その時に必要な支援を、そばで柔軟に行います。',
                  '施設ではなく、住み慣れた自宅や地域で暮らし続けたい。その願いを実現するために、はるじゅは横浜での重度訪問介護のご相談に対応する体制づくりに取り組んでいます。',
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.severeCare.src}
              alt={PHOTO.severeCare.alt}
              ratio="4 / 5"
              tone="forest"
              objectPosition="center 30%"
            />
          </Reveal>
        </div>
      </Section>

      {/* 長時間の見守りや生活全般の支援 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Support"
            title="長時間の見守りと、生活全般の支援"
            lead="一日の暮らしのなかで生じるさまざまな場面を、ひとつながりで支えます。ご本人の状態やご希望にあわせて、必要な支援を組み合わせます。"
          />
        </Reveal>
        <div className="mt-10">
          <CheckList
            items={[
              '長時間にわたる見守り',
              '食事・入浴・排せつなどの身体介護',
              '着替えや移動・移乗の介助',
              '掃除・洗濯・調理などの家事援助',
              '外出時の移動支援・付き添い',
              '体調や生活リズムにあわせた支援',
            ]}
            columns={2}
          />
        </div>
        <Reveal delay={80}>
          <div className="mt-8">
            <InfoNote>
              重度訪問介護で行える支援の範囲や、実際の利用時間は、支給決定の内容によって異なります。医療的なケアが必要な場合の対応可否も含め、ご本人の状況をうかがったうえで個別にご案内します。
            </InfoNote>
          </div>
        </Reveal>
      </Section>

      {/* 対象となる方 */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Eligibility"
              title="対象となる方"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[15px] leading-relaxed text-ink-700">
              重度訪問介護は、重度の肢体不自由や、重度の知的障がい・精神障がいなどにより、常時介護を必要とする方が対象とされています。ご利用には、市区町村による障害支援区分の認定や、サービスの支給決定が必要です。
            </p>
            <div className="mt-6">
              <InfoNote>
                対象となる方や利用条件、支給される時間数は、自治体や支給決定の内容により異なります。ここに記した内容はあくまで一般的な目安であり、ご利用の可否を断定するものではありません。まずはご本人の状況をお聞かせいただき、行政や相談支援専門員とも連携しながら確認を進めます。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 横浜市内での相談に対応する想定 */}
      <Section tone="leaf">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Area"
              title="横浜市内でのご相談に対応します"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  'はるじゅは横浜市内を中心に、重度訪問介護のご相談に対応することを想定しています。地域で暮らし続けたいというご本人・ご家族の想いを、身近な事業所として支えたいと考えています。',
                  'ご訪問できるエリアや、支援を提供できる時間帯には限りがあります。お住まいの地域や必要な支援の内容によって、ご希望に添えない場合もありますので、まずはお気軽にお問い合わせください。',
                ]}
              />
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact">対応について相談する</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 30%"
            />
          </Reveal>
        </div>
      </Section>

      {/* ご本人の生活リズムを尊重 */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex aspect-[5/4] items-center justify-center rounded-3xl border border-paper-200 bg-leaf-50 p-8">
              <Illustration name="severeCare" size={200} sizes="200px" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Respect"
              title="ご本人の生活リズムを尊重します"
            />
            <div className="mt-6">
              <LeadParagraphs
                paragraphs={[
                  '起きる時間、食事の時間、休む時間。暮らしのリズムは人それぞれで、それはその人が大切にしてきた生き方そのものです。重度訪問介護では、支援する側の都合で予定を決めるのではなく、ご本人のリズムに合わせて寄り添うことを大切にしています。',
                  '「こうしたい」という気持ちを尊重し、できることはご自身の力を活かしながら、難しいところをそっと支える。ご本人が主役の暮らしを守るために、日々のちいさな希望にも耳を傾けます。',
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ご家族・相談支援専門員・行政との連携 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Teamwork"
            title="ご家族・相談支援専門員・行政との連携"
            lead="重度訪問介護は、多くの人が関わりながら暮らしを支えます。はるじゅは、その一員として関係機関としっかり連携します。"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="users" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">ご家族との連携</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                日々のご様子や気づいたことを共有しながら、ご家族の不安や負担にも目を向けます。支える家族の暮らしも大切にすることを心がけています。
              </p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="chat" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">相談支援専門員との連携</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                サービス等利用計画を作成する相談支援専門員と連携し、計画にそった支援を提供します。状態の変化があれば、すみやかに情報を共有します。
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                <Icon name="shield" size={22} />
              </div>
              <h3 className="font-serif text-lg text-forest-800">行政との連携</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-700">
                支給決定に関わる手続きなどでは、市区町村の窓口とも連携します。制度にもとづいた適切な支援が届くよう、関係機関と協力します。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 関連ページ */}
      <Section tone="white">
        <Reveal>
          <RelatedLinks
            links={[
              { label: '訪問介護', href: '/service/home-care', desc: '介護保険による在宅支援' },
              { label: '自費介護', href: '/service/private-care', desc: '保険外の柔軟なサポート' },
              { label: 'ご家族の方へ', href: '/family', desc: '介護に悩むご家族へ' },
              { label: 'ご利用の流れ', href: '/flow', desc: '相談から利用開始まで' },
              { label: 'サービス内容', href: '/service', desc: 'サービス全体のご案内' },
              { label: 'お問い合わせ', href: '/contact', desc: 'ご相談の受付' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
