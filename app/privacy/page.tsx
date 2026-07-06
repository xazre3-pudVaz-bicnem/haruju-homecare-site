import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import { Section } from '@/components/ui/primitives'
import { COMPANY, SITE_NAME } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: '個人情報保護方針｜横浜の訪問介護',
  description:
    '横浜の訪問介護 株式会社はるじゅの個人情報保護方針です。お客様の個人情報の取得・利用目的・第三者提供・管理・開示等について定めています。ご相談やお問い合わせの際は本方針にそって個人情報を取り扱います。',
  path: '/privacy',
  keywords: ['個人情報保護方針', '株式会社はるじゅ', 'プライバシーポリシー'],
})

type Clause = { title: string; body: string[]; list?: string[] }

const CLAUSES: Clause[] = [
  {
    title: '1. 個人情報の取得',
    body: [
      '当社は、お問い合わせ・ご相談・採用応募などの際に、適法かつ公正な手段によって、必要な範囲で個人情報を取得します。',
      '取得する個人情報には、お名前、電話番号、メールアドレス、ご相談内容などが含まれます。',
    ],
  },
  {
    title: '2. 利用目的',
    body: ['当社は、取得した個人情報を次の目的の範囲内で利用します。'],
    list: [
      'お問い合わせ・ご相談への対応、およびご連絡のため',
      '訪問介護・自費介護・重度訪問介護に関するサービスのご提供・ご案内のため',
      '採用選考および採用に関するご連絡のため',
      'サービスの品質向上、および今後の運営の参考とするため',
    ],
  },
  {
    title: '3. 第三者への提供',
    body: [
      '当社は、次のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。',
    ],
    list: [
      '法令に基づく場合',
      '人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難な場合',
      'ケアマネジャー・医療機関・行政機関等との連携にあたり、サービス提供上必要な範囲で共有する場合（この場合も必要最小限にとどめます）',
    ],
  },
  {
    title: '4. 個人情報の管理',
    body: [
      '当社は、個人情報の漏えい、滅失またはき損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。',
      '個人情報を取り扱う従業者に対して、適切な監督を行います。',
    ],
  },
  {
    title: '5. 開示・訂正・利用停止',
    body: [
      'ご本人から、ご自身の個人情報の開示、訂正、追加、削除、利用停止のお申し出があった場合は、ご本人であることを確認のうえ、法令にそって速やかに対応します。',
    ],
  },
  {
    title: '6. 法令等の遵守と見直し',
    body: [
      '当社は、個人情報の取り扱いに関する法令その他の規範を遵守するとともに、本方針の内容を必要に応じて見直し、継続的な改善に努めます。',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="個人情報保護方針"
        lead="株式会社はるじゅは、お客様の個人情報の重要性を認識し、以下の方針にそって適切に取り扱います。"
        crumbs={[{ name: '個人情報保護方針', href: '/privacy' }]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-ink-700">
              {SITE_NAME}（以下「当社」といいます）は、訪問介護をはじめとする事業を通じて取り扱う個人情報の保護を、
              社会的責務であると考えています。個人情報の保護に関する法令およびその他の規範を遵守し、
              以下の方針にそって個人情報を適切に取り扱います。
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {CLAUSES.map((clause, i) => (
              <Reveal key={clause.title} delay={i * 40}>
                <div>
                  <h2 className="font-serif text-lg text-forest-800">{clause.title}</h2>
                  <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-ink-700">
                    {clause.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {clause.list && (
                    <ul className="mt-4 space-y-2">
                      {clause.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl border border-paper-200 bg-paper-50 px-4 py-3 text-[14px] leading-relaxed text-ink-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* お問い合わせ窓口 */}
          <Reveal delay={40}>
            <div className="mt-12 rounded-3xl border border-paper-200 bg-white p-7 sm:p-8">
              <h2 className="font-serif text-lg text-forest-800">7. お問い合わせ窓口</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <dl className="mt-5 space-y-3 text-[14.5px] text-ink-700">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-full shrink-0 font-semibold text-forest-700 sm:w-28">事業者名</dt>
                  <dd className="flex-1">{COMPANY.name}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-full shrink-0 font-semibold text-forest-700 sm:w-28">電話番号</dt>
                  <dd className="flex-1">
                    {COMPANY.phone.value}
                    {COMPANY.phone.isDummy && (
                      <span className="ml-2 rounded bg-leaf-100 px-1.5 py-0.5 align-middle text-[11px] font-medium text-forest-600">
                        ※仮情報
                      </span>
                    )}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-full shrink-0 font-semibold text-forest-700 sm:w-28">受付時間</dt>
                  <dd className="flex-1">
                    {COMPANY.hours.value}
                    {COMPANY.hours.isDummy && (
                      <span className="ml-2 rounded bg-leaf-100 px-1.5 py-0.5 align-middle text-[11px] font-medium text-forest-600">
                        ※仮情報
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-10 text-right text-[13px] text-ink-500">
              制定日：2026年7月1日
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
