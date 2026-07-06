import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import RecruitCard from '@/components/ui/RecruitCard'
import FlowStep from '@/components/ui/FlowStep'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import Icon from '@/components/ui/Icon'
import {
  Section,
  CheckList,
  ButtonLink,
  InfoNote,
  RelatedLinks,
} from '@/components/ui/primitives'
import { JOBS, RECRUIT_POINTS, APPLY_STEPS, RECRUIT_FAQS } from '@/lib/constants'
import { pageMeta } from '@/lib/seo'
import { PHOTO } from '@/lib/images'

export const metadata = pageMeta({
  title: '横浜の訪問介護求人｜採用情報・募集職種',
  description:
    '横浜で訪問介護スタッフ・登録ヘルパー・サービス提供責任者を募集中。未経験・ブランクの方も歓迎します。資格を活かして、一人ひとりの暮らしに向き合える仕事です。まずはご相談ください。',
  path: '/recruit',
  keywords: [
    '横浜 介護 求人',
    '横浜 訪問介護 求人',
    '登録ヘルパー',
    'サービス提供責任者',
    '横浜 ホームヘルパー 求人',
  ],
})

/** 1日の流れ（登録ヘルパーの一例） */
const DAY_FLOW = [
  {
    title: '朝：事業所で確認・出発',
    body: 'その日の訪問予定や利用者様の様子を確認し、準備を整えてご自宅へ向かいます。直行での勤務も相談できます。',
  },
  {
    title: '午前：訪問（身体介護・生活援助）',
    body: '起床や着替えのお手伝い、朝食の準備、掃除や洗濯など。お一人おひとりの生活リズムに合わせて支援します。',
  },
  {
    title: '昼：休憩・移動',
    body: '訪問と訪問の合間に休憩をとります。移動時間や訪問エリアは、無理のない範囲で調整します。',
  },
  {
    title: '午後：訪問・記録',
    body: '通院の付き添いや買い物の同行など。訪問後は支援の内容を記録し、気づいたことを事業所と共有します。',
  },
  {
    title: '夕方：振り返り・終了',
    body: '一日の様子を振り返り、次回に活かします。困ったことは一人で抱えず、いつでも相談できる体制です。',
  },
]

export default function RecruitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recruit"
        title="求人情報"
        lead="横浜で在宅生活を支える訪問介護のスタッフを募集しています。未経験の方も、資格を活かしたい方も。まずはお気軽にご相談ください。"
        crumbs={[{ name: '求人情報', href: '/recruit' }]}
        image="photo-staff-team.webp"
      />

      {/* キャッチ */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Message"
              title={
                <>
                  支える人が、
                  <br />
                  安心して働ける場所へ。
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                訪問介護は、利用者様のご自宅で一対一のケアを行う仕事です。
                施設のように大人数を同時に見るのではなく、お一人おひとりと
                じっくり向き合える時間があります。
              </p>
              <p>
                「ありがとう」と言われる距離の近さも、日々の変化に気づける
                やりがいも、この仕事ならではのものです。はるじゅは、その支えを担う
                スタッフが、長く安心して働ける会社でありたいと考えています。
              </p>
              <p>
                介護がはじめての方、久しぶりに現場へ戻る方も歓迎します。
                働き方を一緒に考えながら、無理のないペースで始めていただけます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.walking.src}
              alt={PHOTO.walking.alt}
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* はるじゅで働く魅力 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Our Point"
            title="はるじゅで働く魅力"
            lead="給与や待遇だけでは伝わらない、この仕事とこの会社の魅力をまとめました。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RECRUIT_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-6 sm:p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
                  <Icon name="heart" size={22} />
                </div>
                <h3 className="font-serif text-lg text-forest-800">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 訪問介護の仕事とは */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="About the Work"
              title={
                <>
                  訪問介護の
                  <br />
                  仕事とは
                </>
              }
              lead="ホームヘルパーとして利用者様のご自宅にうかがい、身体介護と生活援助の両面から在宅での暮らしを支えます。"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                身体介護は、食事・入浴・排せつ・着替え・移動の介助など、
                体に直接触れて行う支援です。生活援助は、掃除・洗濯・調理・買い物
                など、暮らしを整えるお手伝いです。
              </p>
              <p>
                一件あたりの訪問時間や内容はケアプランで決まっているため、
                その範囲のなかで丁寧に支援します。分からないことは、先輩スタッフや
                サービス提供責任者にいつでも相談できます。
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="hand" size={20} className="text-leaf-600" />
                  身体介護の例
                </h3>
                <CheckList
                  items={[
                    '食事の介助',
                    '入浴・清拭の介助',
                    '排せつの介助',
                    '着替えの介助',
                    '移動・移乗の介助',
                    '通院・外出の付き添い',
                  ]}
                  columns={2}
                />
              </div>
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-forest-800">
                  <Icon name="broom" size={20} className="text-leaf-600" />
                  生活援助の例
                </h3>
                <CheckList
                  items={['掃除', '洗濯', '調理', '買い物', '薬の受け取り', '生活のサポート']}
                  columns={2}
                />
              </div>
              <InfoNote>
                実際に行う支援の内容には、介護保険制度上の範囲があります。
                対応できる支援の詳細は、面談時にご説明します。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 募集職種 */}
      <Section tone="leaf">
        <Reveal>
          <SectionTitle
            eyebrow="Jobs"
            title="募集職種"
            lead="ご経験やご希望に合わせて、複数の職種で仲間を募集しています。どの職種が合うか分からない方も、まずはご相談ください。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {JOBS.map((job, i) => (
            <Reveal key={job.slug} delay={i * 70}>
              <RecruitCard name={job.name} lead={job.lead} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 text-center text-[13px] text-ink-600">
            給与・勤務時間などの募集要項は準備中です。詳細は面談時に個別にご案内します。
          </p>
        </Reveal>
      </Section>

      {/* 1日の流れ */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="A Day"
            title="1日の流れ"
            lead="登録ヘルパーとして働く場合の一例です。実際の働き方は、ご希望やご事情に合わせて調整します。"
          />
        </Reveal>
        <Reveal>
          <ol className="mt-10 rounded-3xl border border-paper-200 bg-white p-7 sm:p-9">
            {DAY_FLOW.map((step, i) => (
              <FlowStep
                key={step.title}
                index={i + 1}
                title={step.title}
                body={step.body}
                last={i === DAY_FLOW.length - 1}
              />
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 未経験・ブランクの方へ / 資格を活かしたい方へ */}
      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
                <Icon name="leaf" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">
                未経験・ブランクの方へ
              </h2>
              <div className="mt-4 space-y-4 text-[14.5px] leading-relaxed text-ink-700">
                <p>
                  介護の経験がなくても大丈夫です。最初は先輩スタッフの同行から
                  始め、実際の流れを見ながら少しずつ覚えていただけます。
                </p>
                <p>
                  出産や家庭の事情で現場を離れていた方も活躍しています。
                  ブランクへの不安は、面談のときに遠慮なくお聞かせください。
                  一人で抱えずに相談できる環境を大切にしています。
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-paper-200 bg-white p-8 sm:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600">
                <Icon name="star" size={24} />
              </div>
              <h2 className="font-serif text-xl text-forest-800">
                資格を活かしたい方へ
              </h2>
              <div className="mt-4 space-y-4 text-[14.5px] leading-relaxed text-ink-700">
                <p>
                  初任者研修・実務者研修・介護福祉士など、これまで学んだ資格を
                  活かして働けます。訪問介護ならではの、一人ひとりに向き合う
                  関わり方を大切にしたい方に向いています。
                </p>
                <p>
                  サービス提供責任者や管理者として、これまでの経験を
                  さらに活かしたい方のご相談も歓迎します。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 働き方 */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.outingPrep.src}
              alt={PHOTO.outingPrep.alt}
              ratio="5 / 4"
              tone="sand"
              objectPosition="center 35%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Work Style"
              title="働き方"
              lead="ライフスタイルに合わせて、無理なく続けられる働き方をご相談いただけます。"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  'シフト・曜日の相談',
                  '訪問エリアの相談',
                  '短時間からの勤務',
                  'ブランク明けの復帰',
                  '資格取得のサポート相談',
                  '無理のない件数調整',
                ]}
                columns={2}
              />
            </div>
            <div className="mt-6">
              <InfoNote>
                具体的な勤務条件は、ご希望や事業所の状況によって異なります。
                働き方の詳細は、面談のときに一緒に確認させてください。
              </InfoNote>
            </div>
            <div className="mt-6">
              <ButtonLink href="/recruit/work-style" variant="outline">
                働く環境をもっと見る
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 応募の流れ */}
      <Section tone="leaf">
        <Reveal>
          <SectionTitle
            eyebrow="Flow"
            title="応募の流れ"
            lead="ご応募から勤務開始まで、順を追ってご案内します。応募を決める前の、ご質問だけのご相談も歓迎です。"
          />
        </Reveal>
        <Reveal>
          <ol className="mt-10 rounded-3xl bg-white p-7 sm:p-9">
            {APPLY_STEPS.map((step, i) => (
              <FlowStep
                key={step.title}
                index={i + 1}
                title={step.title}
                body={step.body}
                last={i === APPLY_STEPS.length - 1}
              />
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 採用FAQ 抜粋 */}
      <Section tone="white">
        <Reveal>
          <SectionTitle
            eyebrow="Recruit FAQ"
            title="採用FAQ 抜粋"
            lead="応募を考えている方からよくいただくご質問です。詳しくは採用FAQのページもご覧ください。"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {RECRUIT_FAQS.slice(0, 4).map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <div className="h-full rounded-3xl border border-paper-200 bg-white p-6 sm:p-7">
                <h3 className="flex items-start gap-2.5 font-serif text-[16px] text-forest-800">
                  <Icon name="chat" size={20} className="mt-0.5 shrink-0 text-leaf-600" />
                  {f.q}
                </h3>
                <p className="mt-3 pl-[30px] text-[14px] leading-relaxed text-ink-700">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 text-center">
            <ButtonLink href="/recruit/faq" variant="outline">
              採用FAQをすべて見る
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* 応募フォームへの導線 */}
      <Section tone="forest">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              eyebrow="Apply"
              tone="light"
              align="center"
              title="まずは、話を聞いてみませんか。"
              lead="応募するか迷っている段階でも構いません。仕事内容や働き方について、まずはお気軽にお問い合わせください。"
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <ButtonLink href="/contact?type=recruit">応募・相談フォームへ</ButtonLink>
              <Link
                href="/recruit/work-style"
                className="text-sm font-semibold text-leaf-200 underline-offset-4 hover:underline"
              >
                働く環境を見る
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
                label: '働く環境',
                href: '/recruit/work-style',
                desc: 'フォロー体制やスタッフ紹介',
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
