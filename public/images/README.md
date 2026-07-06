# 画像の管理・差し替えガイド

サイトで使う画像は、すべて `lib/images.ts` の `PHOTO` / `ILLUST` で一元管理しています。
差し替えるときは、下表の同じファイル名で `public/images/` に置き換えるだけで全ページに反映されます。
ファイルが無い場合でも、黄緑のグラデーション（写真）やプレースホルダーで表示が崩れないようになっています。

すべて `.webp`（軽量・高画質）で配置しています。写真は最大幅1600px・イラストは正方形820px前後に最適化済みです。
※ 元の高解像度PNGはリポジトリ直下の `.source-images/`（Git管理外）に保管しています。

## 写真（photo-*.webp）— 実写・信頼感を伝える用途

| ファイル名 | 主な使用ページ | 内容 |
| --- | --- | --- |
| `photo-hero-care.webp` | トップ ヒーロー／横浜エリア | 利用者様と会話するスタッフ（明るい室内） |
| `photo-about-care.webp` | トップ想い／about／care-manager | 話に耳を傾けるスタッフ |
| `photo-home-care.webp` | 訪問介護／求人 | 食事介助の様子 |
| `photo-life-support.webp` | （予備・生活援助） | 洗濯物をたたむ様子 |
| `photo-walking-support.webp` | 求人 | 室内での歩行介助 |
| `photo-private-care.webp` | 自費介護 | 屋外での外出付き添い |
| `photo-outing-prep.webp` | 求人／働く環境 | 玄関での外出準備 |
| `photo-severe-care.webp` | 重度訪問介護 | 車椅子の利用者様に寄り添う様子 |
| `photo-staff-team.webp` | 求人／働く環境／会社概要 | スタッフ集合（笑顔） |
| `photo-consultation.webp` | ご家族／ご利用の流れ／連携 | ご家族を交えた相談 |

## イラスト（illust-*.webp）— 内容を分かりやすく伝える用途（黄緑の丸枠）

| ファイル名 | 表す内容 |
| --- | --- |
| `illust-meal.webp` | 食事介助 |
| `illust-bath.webp` | 入浴介助 |
| `illust-mobility.webp` | 移動・歩行介助 |
| `illust-hospital.webp` | 通院の付き添い |
| `illust-laundry.webp` | 洗濯・生活援助 |
| `illust-shopping.webp` | 買い物の支援 |
| `illust-outing.webp` | 外出の付き添い |
| `illust-severe-care.webp` | 車椅子での外出・重度訪問介護 |
| `illust-consultation.webp` | 相談の様子 |
| `illust-family-consultation.webp` | ご家族・ケアマネジャーとの相談 |

## 差し替えのコツ

- 写真は横長（16:9〜4:3）推奨。人物の顔が中心にくるものだと、`objectPosition` の微調整が最小限で済みます。
- イラストを追加したい場合は、黄緑の丸枠・白背景・線画調にそろえると統一感が保てます。`lib/images.ts` の `ILLUST` にキーを足し、`public/images/` に `illust-○○.webp` を置いてください。

## OGP画像（SNSシェア用）

`public/og-image.jpg`（1200 × 630px）を置くと、SNSでシェアされた際のサムネイルになります。未配置でも表示は崩れません。
