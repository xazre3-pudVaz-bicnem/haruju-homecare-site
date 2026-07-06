import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Illustration from '@/components/ui/Illustration'
import ContactBlock from '@/components/ui/ContactBlock'
import {
  Section,
  ButtonLink,
  LeadParagraphs,
  RelatedLinks,
} from '@/components/ui/primitives'
import { RECRUIT_FAQS } from '@/lib/constants'
import { pageMeta, faqSchema } from '@/lib/seo'

export const metadata = pageMeta({
  title: '採用FAQ｜横浜の訪問介護求人',
  description:
    '横浜の訪問介護求人に関するよくある質問をまとめました。未経験やブランク、必要な資格、登録ヘルパーの働き方、募集要項についてなど。応募前のご相談もお気軽にどうぞ。',
  path: '/recruit/faq',
  keywords: ['横浜 介護 求人 FAQ', '横浜 訪問介護 求人', '訪問介護 未経験', '登録ヘルパー'],
})

export default function RecruitFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(RECRUIT_FAQS)) }}
      />

      <PageHeader
        eyebrow="Recruit FAQ"
        title="採用FAQ"
        lead="応募を考えている方から、よくいただくご質問をまとめました。ここに載っていないことも、遠慮なくお問い合わせください。"
        crumbs={[
          { name: '求人情報', href: '/recruit' },
          { name: '採用FAQ', href: '/recruit/faq' },
        ]}
      />

      {/* イントロ + FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-8 flex justify-center">
              <Illustration name="consultation" size={112} tone="leaf" sizes="112px" />
            </div>
            <LeadParagraphs
              paragraphs={[
                'はるじゅでは、未経験の方やブランクのある方も歓迎しています。「自分にできるだろうか」という不安は、多くの方が最初に感じるものです。',
                '応募を決める前の段階でも構いません。気になることがあれば、まずはお気軽にお問い合わせください。ご質問だけのご相談も歓迎しています。',
              ]}
            />
          </Reveal>
          <Reveal>
            <div className="mt-10">
              <FAQAccordion items={RECRUIT_FAQS} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 応募・相談への導線 */}
      <Section tone="forest">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              eyebrow="Contact"
              tone="light"
              align="center"
              title="疑問が残ったら、まず聞いてみてください。"
              lead="ここに載っていないご質問や、働き方の細かな相談も歓迎です。応募するか迷っている段階でも、どうぞお気軽にご連絡ください。"
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <ButtonLink href="/contact?type=recruit">応募・相談フォームへ</ButtonLink>
              <Link
                href="/recruit"
                className="text-sm font-semibold text-leaf-200 underline-offset-4 hover:underline"
              >
                求人情報に戻る
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 関連ページ */}
      <Section tone="paper">
        <Reveal>
          <RelatedLinks
            links={[
              {
                label: '求人情報',
                href: '/recruit',
                desc: '募集職種と応募の流れ',
              },
              {
                label: '働く環境',
                href: '/recruit/work-style',
                desc: 'フォロー体制やスタッフ紹介',
              },
              {
                label: 'はるじゅについて',
                href: '/about',
                desc: '私たちの想いと大切にしていること',
              },
            ]}
          />
        </Reveal>
      </Section>

      <ContactBlock />
    </>
  )
}
