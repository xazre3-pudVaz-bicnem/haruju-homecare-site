type Props = {
  /** 記事本文HTML（コラム: 自前のMarkdown変換 / お知らせ: WordPressのrendered） */
  html: string
  className?: string
}

/**
 * 記事本文の表示。見出し・段落・リスト・リンクの体裁は globals.css の
 * `.article-body` にまとめている（お知らせ・専門コラムで共通）。
 */
export default function ArticleBody({ html, className = '' }: Props) {
  return (
    <div
      className={`article-body ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
