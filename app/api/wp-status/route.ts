import { NextResponse } from 'next/server'
import { isWordPressEnabled, getNewsList, probeWordPress } from '@/lib/wordpress'

/**
 * WordPress連携の診断用エンドポイント（一時的）。
 * 本番で /api/wp-status を開くと、
 *  - region: 関数が実行されているVercelリージョン（hnd1=東京 / iad1=米国）
 *  - probe : WordPressへキャッシュ無しで直接アクセスした実ステータス
 *  - list  : 通常経路（キャッシュあり）でWordPress取得できているか
 * が分かる。秘密情報（URL全体・キー）は出力しない。確認後は削除可。
 */
export const dynamic = 'force-dynamic'
export const preferredRegion = 'hnd1'

const VERSION = 'diag-2'

export async function GET() {
  const probe = await probeWordPress()

  let listFromWordPress = false
  let listCount = 0
  let listFirst: string | null = null
  let listError: string | null = null
  try {
    const list = await getNewsList(1)
    listFromWordPress = list.fromWordPress
    listCount = list.items.length
    listFirst = list.items[0]?.title ?? null
  } catch (e) {
    listError = e instanceof Error ? e.message : String(e)
  }

  return NextResponse.json(
    {
      version: VERSION,
      region: process.env.VERCEL_REGION ?? '(local)',
      envDetected: isWordPressEnabled,
      probe, // キャッシュ無しの直接アクセス結果（真実）
      list: {
        fromWordPress: listFromWordPress,
        itemCount: listCount,
        firstTitle: listFirst,
        error: listError,
      },
    },
    { headers: { 'cache-control': 'no-store' } },
  )
}
