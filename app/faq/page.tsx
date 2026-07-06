import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ContactBlock from '@/components/ui/ContactBlock'
import { Section, InfoNote, RelatedLinks } from '@/components/ui/primitives'
import { FAQS } from '@/lib/constants'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: '横浜の訪問介護 よくあるご質問｜利用条件・料金・相談方法',
  description:
    '横浜の訪問介護 株式会社はるじゅに寄せられる、よくあるご質問をまとめました。訪問介護の利用条件、ケアマネジャーへの相談、自費介護・重度訪問介護、料金、対応エリアなど、ご利用前の疑問にお答えします。',
  path: '/faq',
  keywords: ['横浜 訪問介護', '訪問介護 利用方法', '横浜 自費介護', '横浜 重度訪問介護'],
})

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <PageHeader
        eyebrow="FAQ"
        title="よくあるご質問"
        lead="訪問介護のご利用にあたって、よくいただくご質問をまとめました。ここで解決しないことは、どうぞお気軽にお問い合わせください。"
        crumbs={[{ name: 'よくあるご質問', href: '/faq' }]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle
              eyebrow="Questions"
              title="ご利用に関するご質問"
              lead="ご本人だけでなく、ご家族やケアマネジャーの方からのご相談も承っています。"
            />
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <FAQAccordion items={FAQS} />
            </Reveal>
          </div>
          <div className="mt-8">
            <Reveal>
              <InfoNote>
                制度の対象条件や自己負担、対応エリアは、介護保険制度・自治体の支給決定内容やお住まいの状況により異なります。
                個別のご事情については、当社または担当のケアマネジャーへご相談ください。
              </InfoNote>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            links={[
              { label: 'ご利用の流れ', href: '/flow', desc: 'ご相談から利用開始まで' },
              { label: 'サービス内容', href: '/service', desc: '訪問介護・自費介護・重度訪問介護' },
              { label: 'はるじゅについて', href: '/about', desc: '私たちの理念と約束' },
              { label: '会社概要', href: '/company', desc: '対応エリア・事業所情報' },
              { label: 'お問い合わせ', href: '/contact', desc: 'ご相談・ご質問はこちら' },
              { label: '求人情報', href: '/recruit', desc: '横浜で介護の仕事を探す方へ' },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
