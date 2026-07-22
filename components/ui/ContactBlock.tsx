import Link from 'next/link'
import Icon from './Icon'
import { COMPANY, PHONE_NOTE } from '@/lib/constants'

/**
 * フッター前の問い合わせ導線。
 * 利用者向け（サービス相談）と求人向け（採用相談）の2導線を分ける。
 * 落ち着いたコーポレート調で、過剰なLP感は避ける。
 */
export default function ContactBlock() {
  return (
    <section className="bg-forest-800 py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="rule-accent justify-center text-sm font-semibold tracking-wider text-leaf-300">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
            ご相談・お問い合わせ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-paper-100/85">
            サービスのご利用について、採用について、それぞれの窓口からお気軽にご連絡ください。
            ご家族やケアマネジャーの方からのご相談も承っています。
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* 利用者向け */}
          <div className="flex flex-col rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-500/20 text-leaf-200">
              <Icon name="heart" size={24} />
            </div>
            <h3 className="font-serif text-xl text-white">
              サービスに関するご相談
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-paper-100/90">
              訪問介護・自費介護・重度訪問介護のご利用について。
              「何から始めればよいか」といった段階からのご相談も歓迎です。
            </p>
            <Link
              href="/contact?type=service"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-leaf-600"
            >
              サービスについて相談する
              <Icon name="arrow" size={16} />
            </Link>
          </div>

          {/* 求人向け */}
          <div className="flex flex-col rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-500/20 text-leaf-200">
              <Icon name="users" size={24} />
            </div>
            <h3 className="font-serif text-xl text-white">
              採用に関するご相談
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-paper-100/90">
              訪問介護スタッフ・登録ヘルパーなどの募集について。
              未経験・ブランクのある方、話を聞くだけのご相談もお受けします。
            </p>
            <Link
              href="/recruit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-leaf-300/60 px-6 py-3 text-sm font-semibold text-leaf-100 transition-colors hover:bg-white/10"
            >
              採用情報を見る
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>

        {/* 電話 */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-center text-paper-100/80">
          <p className="text-[13px]">お電話でのご相談も承っています</p>
          <a
            href={COMPANY.phoneTel}
            className="inline-flex items-center gap-2 font-serif text-2xl font-semibold text-white transition-colors hover:text-leaf-200"
          >
            <Icon name="phone" size={22} className="text-leaf-300" />
            {COMPANY.phone.value}
          </a>
          <p className="text-xs text-paper-100/60">
            {COMPANY.hours.value}（{COMPANY.holiday.value}） ／ {PHONE_NOTE}
          </p>
          {COMPANY.hours.isDummy && (
            <p className="mt-1 text-[11px] text-leaf-200/70">※営業時間は仮情報です</p>
          )}
        </div>
      </div>
    </section>
  )
}
