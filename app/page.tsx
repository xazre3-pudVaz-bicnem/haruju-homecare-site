import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import ReasonsGrid from '@/components/sections/ReasonsGrid'
import SimpleFlow from '@/components/sections/SimpleFlow'
import AreaHighlight from '@/components/sections/AreaHighlight'
import Reveal from '@/components/ui/Reveal'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import RecruitCard from '@/components/ui/RecruitCard'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import ContactBlock from '@/components/ui/ContactBlock'
import CompanyInfo from '@/components/ui/CompanyInfo'
import BusinessHours from '@/components/ui/BusinessHours'
import Icon from '@/components/ui/Icon'
import Illustration from '@/components/ui/Illustration'
import { Section, CheckList, ButtonLink, InfoNote } from '@/components/ui/primitives'
import { PHOTO } from '@/lib/images'
import {
  SERVICES,
  BODY_CARE,
  LIFE_SUPPORT,
  JOBS,
  RECRUIT_POINTS,
  COMPANY,
  FAQS,
} from '@/lib/constants'
import NewsRow from '@/components/article/NewsRow'
import ArticleCard from '@/components/article/ArticleCard'
import { getLatestNews, formatNewsDate } from '@/lib/wordpress'
import { getColumnSummaries, formatColumnDate } from '@/lib/column'
import { faqSchema } from '@/lib/seo'

// トップの最新お知らせもWordPressから取得するため、関数を東京リージョンで実行する
// （エックスサーバーの国外IPアクセス制限を回避）。
export const preferredRegion = 'hnd1'

export default async function HomePage() {
  const latestNews = await getLatestNews(3)
  const latestColumns = getColumnSummaries().slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS.slice(0, 6))) }}
      />

      <Hero />

      {/* ブランドステートメント（キャッチコピー） */}
      <section className="border-b border-paper-200 bg-leaf-50">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:py-16">
          <Reveal>
            <p className="font-serif text-[1.4rem] leading-[1.7] text-forest-800 sm:text-[1.9rem] sm:leading-[1.7]">
              介護が必要になっても、
              <br className="sm:hidden" />
              <span className="whitespace-nowrap">「わたしの暮らし」</span>
              は続いていく。
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-ink-700 sm:text-[15px]">
              住み慣れた横浜の街で、その人らしい毎日を続けられるように。
              訪問介護ステーションNAE（株式会社はるじゅ）は、ご本人とご家族に寄り添い、
              在宅での暮らしを地域で支えます。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. はるじゅの想い */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.about.src}
              alt={PHOTO.about.alt}
              label="想いセクション写真"
              ratio="5 / 4"
              tone="sand"
              objectPosition="center 35%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Our Thought"
              title={
                <>
                  介護を受ける人にも、
                  <br />
                  働く人にも、誠実に。
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                年齢を重ねても、障がいがあっても、住み慣れたご自宅で自分らしく暮らし続けたい。
                その当たり前の願いを支えることが、私たちの仕事だと考えています。
              </p>
              <p>
                はるじゅは、ご本人とご家族が抱える不安を少しでも減らせるよう、
                一人ひとりの生活に合わせた支援を大切にしています。ケアマネジャーや医療機関、
                行政などの関係機関としっかり連携しながら、地域全体で暮らしを支えます。
              </p>
              <p>
                そして、その支えを担うのはスタッフ一人ひとりです。
                利用者様に誠実であるために、まず働く人が安心して働ける会社であること。
                はるじゅはその両方を、これからも大切にしていきます。
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outline">
                はるじゅについて
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 選ばれる理由 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Reasons"
            title="はるじゅが選ばれる理由"
            lead="サービスの内容だけでなく、「なぜ、はるじゅなのか」。私たちが利用者様やケアマネジャーの皆さまに選んでいただける理由をご紹介します。"
            align="center"
          />
        </Reveal>
        <Reveal>
          <div className="mt-12">
            <ReasonsGrid />
          </div>
        </Reveal>
      </Section>

      {/* 3. サービス紹介 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="はるじゅのサービス"
            lead="介護保険による訪問介護を中心に、保険外の自費介護、重度訪問介護まで。ご本人の状態やご希望に合わせて、必要な支援を組み合わせてご提案します。"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard
                name={s.name}
                href={s.href}
                lead={s.lead}
                illust={s.illust}
                tags={s.tags}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. 訪問介護でできること */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Home Care"
              title={
                <>
                  訪問介護で
                  <br />
                  できること
                </>
              }
              lead="ホームヘルパーがご自宅にうかがい、身体介護と生活援助の両面から在宅での暮らしをお手伝いします。"
            />
            <div className="mt-8">
              <ButtonLink href="/service/home-care" variant="outline">
                訪問介護の詳細
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Illustration name="bath" size={56} sizes="56px" />
                  <h3 className="font-serif text-lg text-forest-800">身体介護</h3>
                </div>
                <CheckList items={BODY_CARE} columns={2} />
              </div>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Illustration name="laundry" size={56} sizes="56px" />
                  <h3 className="font-serif text-lg text-forest-800">生活援助</h3>
                </div>
                <CheckList items={LIFE_SUPPORT} columns={2} />
              </div>
              <InfoNote>
                実際に受けられる支援の内容には、介護保険制度上の範囲があります。
                ご希望の支援が対象になるかどうかは、担当のケアマネジャーとご相談ください。
              </InfoNote>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 5. ご利用開始までの流れ（かんたん4ステップ） */}
      <Section tone="leaf">
        <Reveal>
          <SectionTitle
            eyebrow="Flow"
            title="ご利用開始までの流れ"
            lead="お問い合わせから、ご自宅での訪問相談、ご契約、サービス開始まで。はじめての方にも分かりやすい、かんたん4ステップです。"
            align="center"
          />
        </Reveal>
        <Reveal>
          <div className="mt-14 md:mt-12">
            <SimpleFlow />
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-leaf-200 bg-white p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[14px] leading-relaxed text-ink-700">
              介護保険をご利用の場合は、担当のケアマネジャーを通した流れになります。
              ケアマネジャーの方からのご相談も承っています。
            </p>
            <ButtonLink href="/flow" variant="outline" className="shrink-0">
              くわしいご利用の流れ
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* 6. 自費介護 */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={80} className="lg:order-2">
            <PlaceholderImage
              src={PHOTO.privateCare.src}
              alt={PHOTO.privateCare.alt}
              label="自費介護写真"
              ratio="5 / 4"
              tone="leaf"
              objectPosition="center 35%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal className="lg:order-1">
            <SectionTitle
              eyebrow="Private Care"
              title="保険では届きにくい部分を補う、自費介護"
              lead="介護保険サービスだけでは対応しきれないお困りごとに、柔軟に対応するのが自費介護です。時間や内容にとらわれず、ご本人・ご家族のご希望に合わせて組み立てられます。"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  '長時間の付き添い',
                  '通院・外出の付き添い',
                  '介護保険外の生活支援',
                  'ご家族不在時の見守り',
                  '柔軟な時間帯のサポート',
                  '保険サービスとの組み合わせ',
                ]}
                columns={2}
              />
            </div>
            <p className="mt-5 text-[13.5px] text-ink-600">
              料金は内容・時間により異なります。詳細はお問い合わせください。
            </p>
            <div className="mt-6">
              <ButtonLink href="/service/private-care" variant="outline">
                自費介護の詳細
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 7. 重度訪問介護 */}
      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src={PHOTO.severeCare.src}
              alt={PHOTO.severeCare.alt}
              label="重度訪問介護写真"
              ratio="5 / 4"
              tone="forest"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionTitle
              eyebrow="Severe Home Care"
              title="生活全般を支える、重度訪問介護"
              lead="重度の障がいがある方が、住み慣れた地域で暮らし続けられるよう、長時間にわたって生活全般を支えるサービスです。ご本人の生活リズムを大切にしながら支援します。"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  '長時間の見守り',
                  '移動支援',
                  '身体介護',
                  '家事援助',
                  '生活全般の支援',
                  '生活リズムに合わせた支援',
                ]}
                columns={2}
              />
            </div>
            <div className="mt-6">
              <InfoNote>
                対象となる方や利用条件は、自治体や支給決定の内容により異なります。
                まずはご本人の状況をお聞かせください。
              </InfoNote>
            </div>
            <div className="mt-6">
              <ButtonLink href="/service/severe-home-care" variant="outline">
                重度訪問介護の詳細
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 8. 求人セクション */}
      <Section tone="forest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Recruit"
              tone="light"
              title={
                <>
                  支える人が、
                  <br />
                  安心して働ける場所へ。
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-paper-100/85">
              <p>
                はるじゅでは、横浜で在宅生活を支える訪問介護スタッフを募集しています。
                地域に必要とされ、一人ひとりの利用者様とじっくり向き合える仕事です。
              </p>
              <p>
                未経験の方、ブランクのある方も歓迎します。資格を活かしたい方、
                働き方を相談しながら続けたい方。まずはお気軽にご相談ください。
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {RECRUIT_POINTS.slice(0, 4).map((p) => (
                <li key={p.title} className="flex items-start gap-2.5 text-[14px] text-paper-100/90">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-leaf-300" />
                  {p.title}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/recruit">求人情報を見る</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PlaceholderImage
              src={PHOTO.staffTeam.src}
              alt={PHOTO.staffTeam.alt}
              label="スタッフ集合写真"
              ratio="16 / 9"
              tone="forest"
              className="mb-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {JOBS.map((job) => (
                <div
                  key={job.slug}
                  className="rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-leaf-500/20 text-leaf-200">
                    <Icon name="users" size={20} />
                  </div>
                  <h3 className="font-serif text-[17px] text-white">{job.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper-100/75">
                    {job.lead}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-paper-100/60">
              給与・待遇などの募集要項は準備中です。詳細は面談時にご案内します。
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 対応エリア・営業案内 */}
      <Section tone="paper">
        <Reveal>
          <SectionTitle
            eyebrow="Area & Hours"
            title="対応エリアと営業案内"
            lead="横浜市内を中心にご自宅までうかがいます。営業時間・受付時間・緊急時の対応もご確認ください。"
            align="center"
          />
        </Reveal>
        <Reveal>
          <div className="mt-12">
            <AreaHighlight />
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6">
            <BusinessHours />
          </div>
        </Reveal>
      </Section>

      {/* 9. 会社概要（簡易） */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionTitle
              eyebrow="Company"
              title="会社概要"
              lead="横浜の在宅介護を支える事業所として、地域に根ざした運営を続けています。"
            />
            <div className="mt-8">
              <ButtonLink href="/company" variant="outline">
                会社概要を詳しく
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <CompanyInfo compact />
          </Reveal>
        </div>
      </Section>

      {/* 10-1. お知らせ（WordPressで管理／会社からのお知らせ） */}
      <Section tone="paper">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              eyebrow="News"
              title="お知らせ"
              lead="営業時間や休業のご案内、サービス・採用に関する更新情報をお届けします。"
            />
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700 hover:text-leaf-800"
            >
              すべて見る
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Reveal>
        {latestNews.length > 0 ? (
          <Reveal>
            <ul className="mt-8 divide-y divide-paper-200 overflow-hidden rounded-3xl border border-paper-200 bg-white">
              {latestNews.map((n) => (
                <NewsRow
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  title={n.title}
                  date={formatNewsDate(n.date)}
                  category={n.category}
                />
              ))}
            </ul>
          </Reveal>
        ) : (
          <p className="mt-8 rounded-3xl border border-paper-200 bg-white px-6 py-12 text-center text-[15px] text-ink-600">
            現在お知らせはありません。
          </p>
        )}
      </Section>

      {/* 10-2. 専門コラム（Markdownで管理／SEO用の読み物） */}
      <Section tone="white">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Column"
              title="専門コラム"
              lead="訪問介護や介護保険のしくみ、ご家族の関わり方など、在宅介護に役立つ情報をわかりやすく解説します。"
            />
            <Link
              href="/column"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700 hover:text-leaf-800"
            >
              すべて見る
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Reveal>
        {latestColumns.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestColumns.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <ArticleCard
                  href={`/column/${post.slug}`}
                  title={post.title}
                  description={post.description}
                  date={formatColumnDate(post.date)}
                  category={post.category}
                  image={post.image}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-3xl border border-paper-200 bg-paper-50 px-6 py-12 text-center text-[15px] text-ink-600">
            コラムは順次公開予定です。
          </p>
        )}
      </Section>

      {/* 11. 問い合わせ導線 */}
      <ContactBlock />
    </>
  )
}
