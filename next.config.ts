import type { NextConfig } from "next";

/**
 * サイトの公開URL。canonical・OGP・sitemap に使う。
 * 明示指定（NEXT_PUBLIC_SITE_URL）→ Vercel の本番ドメイン（独自ドメインを接続すると自動でそちらになる）の順。
 * ビルド時に確定させてサーバー・ブラウザで同じ値を使う。
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://haruju-homecare-site.vercel.app')

/** お知らせ（WordPress）のアイキャッチ画像を next/image で扱えるよう、WPのホストを許可する */
const wpBase = process.env.WP_API_BASE_URL || process.env.NEXT_PUBLIC_WP_API_BASE_URL
const wpHost = (() => {
  try {
    return wpBase ? new URL(wpBase).hostname : undefined
  } catch {
    return undefined
  }
})()

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl.replace(/\/$/, ''),
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: wpHost ? [{ protocol: "https", hostname: wpHost }] : [],
  },
};

export default nextConfig;
