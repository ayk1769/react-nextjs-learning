// step4-nextjs-deploy/portfolio-template/README.md

# ポートフォリオサイトテンプレート

このテンプレートは、Next.jsを使用して個人ポートフォリオサイトを作成するためのものです。このテンプレートを使用して、あなた自身のポートフォリオサイトを作り、Vercelでデプロイしましょう。

## 機能

- レスポンシブデザイン
- ダークモード/ライトモードの切り替え
- プロジェクト一覧ページ
- ブログ/記事セクション
- お問い合わせフォーム
- アニメーション効果
- SEO対策済み

## 使い方

1. リポジトリをクローンする
```bash
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site
```

2. 依存関係をインストールする
```bash
npm install
```

3. 開発サーバーを起動する
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 にアクセスする

## カスタマイズ方法

### 基本情報の編集

`data/profile.js` ファイルを編集して、あなたの情報に更新してください。

```js
// data/profile.js
export const profile = {
  name: 'あなたの名前',
  title: '肩書き（例: フロントエンドエンジニア）',
  description: '自己紹介文...',
  location: '東京, 日本',
  email: 'your-email@example.com',
  social: {
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
  }
};
```

### プロジェクトの追加

`data/projects.js` ファイルを編集して、あなたのプロジェクトを追加してください。

```js
// data/projects.js
export const projects = [
  {
    id: 'project1',
    title: 'プロジェクト1',
    description: 'プロジェクトの説明...',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    demo: 'https://your-project-demo.com',
    source: 'https://github.com/your-username/project1',
  },
  // 他のプロジェクトを追加...
];
```

### ブログ記事の追加

`data/blog.js` ファイルを編集して、あなたのブログ記事を追加してください。

```js
// data/blog.js
export const posts = [
  {
    id: 'post1',
    title: '記事タイトル1',
    date: '2025-05-15',
    excerpt: '記事の抜粋...',
    content: '記事の内容...'
  },
  // 他の記事を追加...
];
```

### デザインのカスタマイズ

テーマカラーや他のデザイン要素は `styles/theme.js` ファイルで編集できます。

### 画像の追加

あなた自身の画像やプロジェクトのスクリーンショットは `public/images/` ディレクトリに配置してください。

## Vercelへのデプロイ

1. [Vercel](https://vercel.com) にアカウントを作成する（GitHubアカウントでサインアップ可能）

2. 「New Project」をクリックする

3. リポジトリをインポートする

4. デフォルト設定のまま「Deploy」をクリックする

5. デプロイが完了すると、公開URLが表示されます

## ディレクトリ構造

```
portfolio-site/
├── components/     # UIコンポーネント
├── data/           # サイトデータ（プロフィール、プロジェクト、ブログ記事など）
├── pages/          # Nextjsのページコンポーネント
├── public/         # 静的ファイル（画像、アイコンなど）
├── styles/         # CSSスタイル
└── utils/          # ユーティリティ関数
```

## ライセンス

MIT
