import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import {
  Section,
  CheckList,
  ButtonLink,
  RelatedLinks,
} from '@/components/ui/primitives'
import { pageMeta } from '@/lib/seo'
import { PHOTO } from '@/lib/images'

export const metadata = pageMeta({
  title: '働く環境｜横浜の訪問介護求人',
  description:
    '横浜の訪問介護で働くはるじゅの環境をご紹介。研修・同行・フォロー体制、シフトの相談、スタッフ同士の連携など、働きやすい職場づくりを大切にしています。未経験・ブランクの方も歓迎します。',
  path: '/recruit/work-style',
  keywords: [
    '横浜 訪問介護 求人',
    '横浜 介護 求人',
    '訪問介護 働きやすい',
    'ホームヘルパー 職場',
  ],
})

/** スタッフ紹介（写真・プロフィールは差し替え前提の仮データ） */
const STAFF = [
  {
    initial: 'A',
    role: '訪問介護スタッフ ※仮',
    comment:
      '未経験からのスタートでした。同行から始められたので、少しずつ自分のペースで慣れることができました。',
  },
  {
    initial: 'B',
    role: '登録ヘルパー ※仮',
    comment:
      '家庭と両立しながら働いています。シフトを相談しやすいので、無理なく続けられています。',
  },
  {
    initial: 'C',
    role: 'サービス提供責任者 ※仮',
    comment:
      '困ったときに相談し合える雰囲気があります。スタッフが安心して働けることを大切にしています。',
  },
]

export default function WorkStylePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work Style"
        title="働く環境"
        lead="利用者様に誠実であるために、まず働く人が安心して働けること。はるじゅが大切にしている職場づくりをご紹介します。"
        crumbs={[
          { name: '求人情報', href: '/recruit' },
          { name: '働く環境', href: '/recruit/work-style' },
        ]}
        image="photo-staff-team.webp"
      />

      {/* 一人ひとりに向き合える訪問介護 */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="One on One"
              title={
                <>
                  一人ひとりに
                  <br />
                  向き合える訪問介護
                </>
              }
              lead="訪問介護は、利用者様のご自宅で一対一のケアを行う仕事です。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                大人数を同時に見るのではなく、お一人おひとりと落ち着いて
                向き合える時間があります。日々の小さな変化に気づけることも、
                この仕事のやりがいのひとつです。
              </p>
              <p>
                だからこそ、一件一件を丁寧に。焦らず、その方の生活リズムに
                寄り添える働き方を大切にしています。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.homeCare.src}
              alt={PHOTO.homeCare.alt}
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 35%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* シフト・働き方の相談 / 研修・同行・フォロー体制 */}
      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
                <Icon name="calendar" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">
                シフト・働き方の相談
              </h2>
              <div className="mt-4 space-y-4 text-[14.5px] leading-relaxed text-ink-700">
                <p>
                  家庭やご自身の予定に合わせて、働く曜日や時間を相談できます。
                  短い時間から始めたい方、少しずつ件数を増やしたい方も、
                  ご事情をうかがいながら一緒に考えます。
                </p>
                <p>
                  訪問エリアについても、無理なく回れる範囲になるよう配慮します。
                </p>
              </div>
              <div className="mt-6">
                <CheckList
                  items={['曜日・時間の相談', '訪問エリアの相談', '短時間からの勤務']}
                  columns={1}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
                <Icon name="shield" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">
                研修・同行・フォロー体制
              </h2>
              <div className="mt-4 space-y-4 text-[14.5px] leading-relaxed text-ink-700">
                <p>
                  入社後は先輩スタッフの同行から始めます。実際の流れを見ながら、
                  無理のないペースで現場に慣れていただけます。
                </p>
                <p>
                  一人で訪問するようになってからも、困ったときに相談できる
                  体制を整えています。分からないことを一人で抱えなくていい、
                  それがはるじゅの安心です。
                </p>
              </div>
              <div className="mt-6">
                <CheckList
                  items={['先輩スタッフの同行', '段階的な現場デビュー', '相談しやすい体制']}
                  columns={1}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* スタッフ同士の連携 */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.consultation.src}
              alt={PHOTO.consultation.alt}
              ratio="5 / 4"
              tone="sand"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Teamwork"
              title="スタッフ同士の連携"
              lead="訪問介護は一人で動く時間が多い仕事だからこそ、事業所での情報共有を大切にしています。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                利用者様の様子や気づいたことは、記録や報告を通してスタッフ間で
                共有します。誰が訪問しても同じように支援できるよう、
                チームで連携しています。
              </p>
              <p>
                サービス提供責任者やケアマネジャーとも連携し、利用者様の変化に
                合わせて支援を見直します。一人ではなく、みんなで支える。
                その意識を大切にしています。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* スタッフも大切にする文化 */}
      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Our Culture"
              tone="light"
              title={
                <>
                  利用者様だけでなく、
                  <br />
                  スタッフも大切にする文化
                </>
              }
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4 text-[15px] leading-relaxed text-paper-100/85">
              <p>
                良い支援は、支える人が心身ともに健やかであってこそ続けられると
                考えています。だからこそ、スタッフの声に耳を傾け、働きやすい環境を
                少しずつ整えていくことを大切にしています。
              </p>
              <p>
                困ったときに相談できること。頑張りに気づいてもらえること。
                長く働き続けられること。当たり前のようで大切なことを、
                これからも丁寧に積み重ねていきます。
              </p>
              <p>
                利用者様への誠実さと、スタッフへの誠実さ。はるじゅは、
                その両方を大切にする会社でありたいと考えています。
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* スタッフ紹介 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Staff Voice"
            title="スタッフ紹介"
            lead="実際に働くスタッフの声をご紹介します。写真とプロフィールは準備中のため、掲載内容は差し替え予定です。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((s, i) => (
            <Reveal key={s.initial} delay={i * 70}>
              <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-6 sm:p-7">
                <PlaceholderImage
                  alt={`スタッフ ${s.initial} の写真（準備中）`}
                  label="スタッフ写真 ※準備中"
                  ratio="4 / 3"
                  tone="leaf"
                />
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 font-serif text-lg font-semibold text-forest-700">
                    {s.initial}
                  </span>
                  <div>
                    <p className="font-serif text-[16px] text-forest-800">
                      スタッフ {s.initial}
                    </p>
                    <p className="text-[12.5px] text-ink-500">{s.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-700">
                  {s.comment}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-[13px] text-ink-500">
            ※スタッフ紹介は仮の内容です。正式な写真・プロフィールに差し替え予定です。
          </p>
        </Reveal>
      </Section>

      {/* 応募導線 */}
      <Section tone="white">
        <Reveal>
          <div className="rounded-3xl border border-leaf-200 bg-leaf-50 px-6 py-10 text-center sm:px-10 sm:py-12">
            <SectionTitle
              align="center"
              title="働く環境について、もっと知りたい方へ"
              lead="実際の一日の流れや募集職種は、求人情報のページでご案内しています。ご質問だけのご相談も歓迎します。"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact?type=recruit">応募・相談フォームへ</ButtonLink>
              <ButtonLink href="/recruit" variant="outline">
                求人情報を見る
              </ButtonLink>
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
                label: '採用FAQ',
                href: '/recruit/faq',
                desc: '応募前のよくある質問',
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
