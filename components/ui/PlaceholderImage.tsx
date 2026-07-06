'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  /**
   * 画像パス（例: "/images/photo-hero-care.webp"）。
   * ファイルが存在すればその画像を表示し、無ければ自動でグラデーションの
   * プレースホルダーに切り替わるため、画像は後からいつでも差し替えられる。
   */
  src?: string
  /** alt / aria-label。必ず内容の分かる文言を入れる。 */
  alt: string
  /** プレースホルダー内に小さく表示するラベル（画像の内容メモ） */
  label?: string
  /** アスペクト比。CSS の aspect-ratio に渡す文字列。 */
  ratio?: string
  /** 配色トーン（プレースホルダー時） */
  tone?: 'leaf' | 'forest' | 'sand'
  className?: string
  rounded?: string
  priority?: boolean
  /** 顔や手元が切れないように object-position を調整（例: 'center 30%'） */
  objectPosition?: string
  /** next/image の sizes。既定はカード幅想定。 */
  sizes?: string
}

const TONES: Record<string, string> = {
  leaf: 'from-leaf-200 via-leaf-100 to-paper-50',
  forest: 'from-forest-500 via-forest-600 to-forest-800',
  sand: 'from-sand-100 via-paper-50 to-leaf-100',
}

export default function PlaceholderImage({
  src,
  alt,
  label,
  ratio = '4 / 3',
  tone = 'leaf',
  className = '',
  rounded = 'rounded-3xl',
  priority = false,
  objectPosition = 'center',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: Props) {
  const [failed, setFailed] = useState(false)
  const showPhoto = src && !failed
  const dark = tone === 'forest'

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* グラデーション下地（画像が無くても崩れない） */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${TONES[tone]}`}
        aria-hidden="true"
      />
      {!showPhoto && (
        <div className="absolute inset-0 bg-dots opacity-60" aria-hidden="true" />
      )}

      {showPhoto && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover"
          style={{ objectPosition }}
        />
      )}

      {!showPhoto && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={dark ? 'text-leaf-200' : 'text-forest-500/70'}
          >
            <path
              d="M4 16.5 9 11l4 4 3-3 4 4M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-xs font-medium tracking-wide ${
              dark ? 'text-leaf-100/90' : 'text-forest-700/80'
            }`}
          >
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  )
}
