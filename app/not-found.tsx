import Link from 'next/link'
import { ButtonLink } from '@/components/ui/primitives'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <span className="font-serif text-6xl font-semibold text-leaf-500">404</span>
      <h1 className="mt-6 font-serif text-2xl text-forest-800">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
        お探しのページは、移動または削除された可能性があります。
        お手数ですが、トップページからお探しください。
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">トップページへ</ButtonLink>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-leaf-400 px-6 py-3.5 text-sm font-semibold text-forest-700 transition-colors hover:bg-leaf-50"
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  )
}
