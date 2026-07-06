import { Suspense } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import SectionTitle from '@/components/ui/SectionTitle'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import Illustration from '@/components/ui/Illustration'
import ContactForm from '@/components/forms/ContactForm'
import { Section, InfoNote } from '@/components/ui/primitives'
import { COMPANY, PHONE_NOTE } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'お問い合わせ｜横浜の訪問介護のご相談・採用のお問い合わせ',
  description:
    '横浜の訪問介護 株式会社はるじゅへのお問い合わせページです。訪問介護・自費介護・重度訪問介護のサービスに関するご相談、採用に関するご相談を受け付けています。ご家族やケアマネジャーの方からのお問い合わせも承っています。',
  path: '/contact',
  keywords: ['横浜 訪問介護', '訪問介護 相談', '横浜 介護 求人', '訪問介護 ケアマネジャー 相談'],
})

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="お問い合わせ"
        lead="サービスのご利用について、採用について、どちらもこちらの窓口で承っています。ご本人・ご家族・ケアマネジャーの方、どなたからのご相談も歓迎します。"
        crumbs={[{ name: 'お問い合わせ', href: '/contact' }]}
      />

      {/* 2つの相談窓口の案内 */}
      <Section tone="white">
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center">
            <Illustration name="family" size={112} tone="leaf" sizes="112px" />
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-700">
              ご利用者様ご本人、ご家族、ケアマネジャー、そして採用をお考えの方。
              どなたからのご相談も、下記の窓口でお受けしています。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                <Icon name="heart" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">サービスに関するご相談</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                訪問介護・自費介護・重度訪問介護のご利用について。「何から始めればよいか分からない」
                といった段階からのご相談もお受けします。介護認定やケアマネジャーのことも、あわせてご相談ください。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                <Icon name="users" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">採用に関するご相談</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                訪問介護スタッフ・登録ヘルパーなどの募集について。未経験・ブランクのある方も歓迎です。
                応募を決める前の、話を聞くだけのご相談もお受けしています。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* フォーム */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle
              eyebrow="Form"
              title="お問い合わせフォーム"
              lead="下記のフォームよりご連絡ください。内容を確認のうえ、担当者よりご返信します。"
            />
          </Reveal>
          <div className="mt-10 rounded-3xl border border-paper-200 bg-white p-6 sm:p-9">
            <Suspense
              fallback={
                <div className="py-10 text-center text-[14px] text-ink-500">
                  フォームを読み込んでいます…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>

      {/* 電話 */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-paper-200 bg-white p-8 text-center sm:p-10">
              <span className="rule-accent justify-center text-sm font-semibold tracking-wider text-leaf-700">
                Tel
              </span>
              <h2 className="mt-4 font-serif text-xl text-forest-800">お電話でのご相談</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                お急ぎの場合や、直接お話ししたい場合はお電話でも承っています。
              </p>
              <a
                href={COMPANY.phoneTel}
                className="mt-6 inline-flex items-center gap-2 font-serif text-3xl font-semibold text-forest-800 transition-colors hover:text-leaf-700"
              >
                <Icon name="phone" size={26} className="text-leaf-600" />
                {COMPANY.phone.value}
              </a>
              <p className="mt-3 text-[13px] text-ink-600">
                受付時間 {COMPANY.hours.value}（{COMPANY.holiday.value}）
              </p>
              <p className="mt-1 text-[13px] text-ink-500">{PHONE_NOTE}</p>
              {(COMPANY.phone.isDummy || COMPANY.hours.isDummy) && (
                <div className="mt-6 text-left">
                  <InfoNote>
                    電話番号・受付時間は現在準備中のため仮情報です（※仮情報）。正式な情報が確定次第、更新します。
                  </InfoNote>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
