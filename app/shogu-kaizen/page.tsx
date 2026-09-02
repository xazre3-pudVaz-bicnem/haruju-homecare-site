import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import Icon, { type IconName } from '@/components/ui/Icon'
import CtaBanner from '@/components/ui/CtaBanner'
import { Section } from '@/components/ui/primitives'
import { COMPANY, SITE_NAME } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '福祉・介護職員等処遇改善加算に係る職場環境等要件への取組について',
  description:
    '株式会社はるじゅ 訪問介護ステーションNAEの、福祉・介護職員等処遇改善加算に係る職場環境等要件への取組の公表ページです。入職促進・資質向上・両立支援・健康管理・生産性向上・やりがいの6分野の具体的な取組を掲載しています。',
  path: '/shogu-kaizen',
  keywords: [
    '福祉・介護職員等処遇改善加算',
    '職場環境等要件',
    '見える化',
    '訪問介護ステーションNAE',
    '株式会社はるじゅ',
    '横浜市 訪問介護',
  ],
})

type Category = {
  icon: IconName
  title: string
  lead: string
  items: string[]
}

/**
 * 職場環境等要件の区分ごとの取組。
 * 加算の要件区分に沿って整理しているため、区分名・項目は原則そのまま掲載する。
 */
const CATEGORIES: Category[] = [
  {
    icon: 'users',
    title: '入職促進に向けた取組',
    lead: '法人としての考え方を明確にし、多様な方に門戸を開いた採用を行っています。',
    items: [
      '法人や事業所の経営理念、支援方針、人材育成方針等の明確化',
      '経験者、有資格者等に限定しない幅広い採用の仕組みの構築',
    ],
  },
  {
    icon: 'star',
    title: '資質の向上やキャリアアップに向けた支援',
    lead: '働きながら学び、段階的にキャリアを積み上げられる仕組みを整えています。',
    items: [
      '資格取得や専門的な研修受講に対する支援',
      '研修制度、キャリア段位制度等と人事評価との連動',
      '上位者・担当者等による定期的なキャリア面談・相談機会の確保',
    ],
  },
  {
    icon: 'calendar',
    title: '両立支援・多様な働き方の推進',
    lead: '育児・介護などの事情があっても働き続けられる勤務体制をつくっています。',
    items: [
      '育児や介護等と仕事を両立できる制度・職場環境の整備',
      '職員の事情に応じた勤務シフト、短時間勤務等の柔軟な働き方の整備',
      '有給休暇を取得しやすい職場づくりと取得状況の確認',
      '情報共有や複数担当制等による業務の属人化・業務負担の偏りの解消',
    ],
  },
  {
    icon: 'shield',
    title: '腰痛を含む心身の健康管理',
    lead: '心身の負担を一人で抱え込まない相談体制と、いざというときの体制を整えています。',
    items: [
      '職員相談窓口の設置等、相談体制の充実',
      '事故・トラブル発生時の対応マニュアル等の体制整備',
    ],
  },
  {
    icon: 'check',
    title: '生産性向上のための取組',
    lead: '記録や情報共有の仕組みを見直し、ケアに向き合う時間を確保します。',
    items: [
      '職場における課題の見える化と業務改善',
      '業務手順書の作成や記録・報告様式の工夫による情報共有・業務負担軽減',
      '業務支援ソフトや情報端末等の活用',
      '業務内容の明確化及び役割分担による業務効率化',
    ],
  },
  {
    icon: 'heart',
    title: 'やりがい・働きがいの醸成',
    lead: '利用者本位の支援を語り合える場をつくり、仕事の意味を共有しています。',
    items: [
      'ミーティング等による職場内コミュニケーションの円滑化',
      '利用者本位の支援方針、障害福祉及び法人理念等を学ぶ機会の確保',
    ],
  },
]

export default function ShoguKaizenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work Environment"
        title="福祉・介護職員等処遇改善加算に係る職場環境等要件への取組について"
        lead="株式会社はるじゅ「訪問介護ステーションNAE」が実施・推進している、職場環境等要件への取組を公表しています。"
        crumbs={[
          { name: '福祉・介護職員等処遇改善加算', href: '/shogu-kaizen' },
        ]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-ink-700">
              {SITE_NAME}「{COMPANY.officeName}」では、福祉・介護職員等処遇改善加算の算定にあたり、
              職員が安心して働き続けられる職場環境の整備、資質の向上、業務負担の軽減及びサービスの質の向上を目的として、
              以下の取組を実施・推進しています。
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 40}>
              <div className="h-full rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
                    <Icon name={cat.icon} size={20} />
                  </span>
                  <h2 className="font-serif text-[17px] leading-snug text-forest-800">
                    {cat.title}
                  </h2>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-600">{cat.lead}</p>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500"
                        aria-hidden="true"
                      />
                      <span className="text-[14.5px] leading-relaxed text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-leaf-200 bg-leaf-50 p-7 sm:p-8">
              <p className="text-[15px] leading-relaxed text-ink-700">
                {SITE_NAME}では、今後も職員の働きやすい職場環境の整備と人材育成を進め、
                利用者の皆様に質の高いサービスを提供できる体制づくりに取り組んでまいります。
              </p>
            </div>
          </Reveal>

          <Reveal delay={40}>
            <dl className="mt-8 overflow-hidden rounded-3xl border border-paper-200 bg-white">
              {[
                { label: '法人名', value: COMPANY.name },
                { label: '事業所名', value: COMPANY.officeName },
                {
                  label: '所在地',
                  value: `〒${COMPANY.postalCode.value} ${COMPANY.address.value}`,
                },
                { label: '電話番号', value: COMPANY.phone.value },
                { label: 'FAX番号', value: COMPANY.fax.value },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6 ${
                    i !== 0 ? 'border-t border-paper-200' : ''
                  }`}
                >
                  <dt className="w-full shrink-0 text-[13.5px] font-semibold text-forest-700 sm:w-32">
                    {row.label}
                  </dt>
                  <dd className="flex-1 text-[14.5px] text-ink-700">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <CtaBanner
            title="はるじゅの働く環境について"
            body="資格取得の支援や柔軟な勤務シフトなど、長く働き続けられる環境づくりに取り組んでいます。求人情報・働く環境のページもぜひご覧ください。ご質問だけでも歓迎です。"
          />
        </Reveal>
      </Section>
    </>
  )
}
