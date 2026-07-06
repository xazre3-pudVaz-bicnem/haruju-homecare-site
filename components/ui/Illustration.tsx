import Image from 'next/image'
import type { IllustKey } from '@/lib/images'
import { ILLUST } from '@/lib/images'

type Props = {
  /** lib/images.ts の ILLUST キー */
  name: IllustKey
  /** 円形にクリップするか（既定 true）。false でやわらかい角丸の正方形。 */
  circle?: boolean
  /** 表示サイズ（px）。レスポンシブは className の幅・高さで上書き可。 */
  size?: number
  className?: string
  /** 円の背景色（白 or 淡黄緑） */
  tone?: 'white' | 'leaf'
  /** next/image sizes */
  sizes?: string
  priority?: boolean
}

/**
 * 黄緑の丸枠イラストを表示する共通コンポーネント。
 * 素材そのものに黄緑の円フレームが含まれているため、円形クリップと
 * 淡い黄緑のリングを重ねて「クローバー調」の清潔なアイコンに仕上げる。
 * 1カードにつき1つの使用を想定。
 */
export default function Illustration({
  name,
  circle = true,
  size = 128,
  className = '',
  tone = 'white',
  sizes,
  priority = false,
}: Props) {
  const img = ILLUST[name]
  const shape = circle ? 'rounded-full' : 'rounded-3xl'
  const bg = tone === 'leaf' ? 'bg-leaf-50' : 'bg-white'

  return (
    <div
      className={`relative aspect-square overflow-hidden ${shape} ${bg} ring-1 ring-leaf-200 ${className}`}
      style={{ width: size, height: size, maxWidth: '100%' }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes ?? `${size}px`}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
