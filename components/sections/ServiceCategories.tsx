import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import Illustration from '@/components/ui/Illustration'
import Icon from '@/components/ui/Icon'
import { SERVICE_CATEGORIES, type ServiceItem } from '@/lib/services'

function ServiceRow({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={service.href}
      className="group grid h-full grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 rounded-3xl border border-paper-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-300 hover:shadow-[0_16px_40px_-16px_rgba(31,61,43,0.2)] sm:items-start sm:p-6"
    >
      <Illustration
        name={service.illust}
        size={72}
        tone="leaf"
        sizes="72px"
        className="shrink-0 sm:row-span-2"
      />
      <h4 className="font-serif text-lg leading-snug text-forest-800">
        {service.name}
        {service.subName && (
          <span className="ml-1.5 inline-block text-[13px] font-normal text-ink-500">（{service.subName}）</span>
        )}
      </h4>
      {/* スマホでは本文を横幅いっぱいに使う */}
      <div className="col-span-2 sm:col-span-1 sm:col-start-2">
        <p className="text-[13.5px] leading-relaxed text-ink-700">{service.lead}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {service.tags.map((t) => (
            <li key={t} className="rounded-full bg-leaf-100 px-2.5 py-0.5 text-[11px] font-medium text-forest-600">
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-leaf-700">
          詳しく見る
          <Icon name="arrow" size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

/**
 * 制度区分（介護保険／障害福祉／地域生活支援事業／自費）ごとのサービス一覧。
 * サービス一覧ページとトップページで共通利用する。
 */
export default function ServiceCategories() {
  return (
    <div className="space-y-6">
      {SERVICE_CATEGORIES.map((cat, i) => (
        <Reveal key={cat.key} delay={i * 40}>
          <section
            aria-labelledby={`svc-${cat.key}`}
            className="grid gap-6 rounded-[2rem] border border-paper-200 bg-paper-50/60 p-5 sm:p-7 lg:grid-cols-[0.8fr_2fr] lg:gap-10 lg:p-9"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-leaf-500 text-white">
                  <Icon name={cat.icon} size={22} />
                </span>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-leaf-700">
                    {cat.eyebrow}
                  </p>
                  <h3 id={`svc-${cat.key}`} className="scroll-mt-28 font-serif text-xl text-forest-800 sm:text-[1.35rem]">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-700">{cat.lead}</p>
              <p className="mt-4 flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-[13px] leading-relaxed text-ink-700 ring-1 ring-paper-200">
                <Icon name="check" size={16} className="mt-0.5 shrink-0 text-leaf-600" />
                <span>
                  <span className="font-semibold text-forest-700">対象：</span>
                  {cat.condition}
                </span>
              </p>
            </div>
            <div className={`grid gap-4 ${cat.services.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {cat.services.map((s) => (
                <ServiceRow key={s.slug} service={s} />
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  )
}
