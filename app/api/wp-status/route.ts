import { NextResponse } from 'next/server'
import { isWordPressEnabled, getNewsList } from '@/lib/wordpress'

/**
 * WordPress連携の診断用エンドポイント（一時的）。
 * 本番で /api/wp-status を開くと、実行時に環境変数を読めているか・
 * WordPressから取得できているかが確認できる。秘密情報は出力しない。
 * 動作確認が済んだら、このファイルは削除して構わない。
 */
export const dynamic = 'force-dynamic'
// 本番と同じ経路で確認できるよう、関数を東京リージョンで実行する。
export const preferredRegion = 'hnd1'

export async function GET() {
  const result: {
    envDetected: boolean
    fromWordPress: boolean
    itemCount: number
    firstTitle: string | null
    error: string | null
  } = {
    envDetected: isWordPressEnabled,
    fromWordPress: false,
    itemCount: 0,
    firstTitle: null,
    error: null,
  }

  try {
    const list = await getNewsList(1)
    result.fromWordPress = list.fromWordPress
    result.itemCount = list.items.length
    result.firstTitle = list.items[0]?.title ?? null
  } catch (e) {
    result.error = e instanceof Error ? e.message : String(e)
  }

  return NextResponse.json(result, {
    headers: { 'cache-control': 'no-store' },
  })
}
