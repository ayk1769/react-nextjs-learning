# STEP 4: Next.jsアプリを作って公開

このステップでは、実際に使えるNext.jsアプリケーションを作成し、Vercelで公開する方法を学びます。

## ✅ 学ぶこと

- コンポーネント分割
- デザイン適用（CSS Modules / Tailwindなど）
- Vercelで無料公開

## 📝 パーソナルホームページの作成

ここでは、パーソナルホームページを例に、Next.jsアプリを作成していきます。

### プロジェクトのセットアップ

```bash
# 新しいNext.jsプロジェクトを作成
npx create-next-app@latest my-portfolio
cd my-portfolio

# 開発サーバーを起動
npm run dev
```

### ディレクトリ構造の整理

SSTEP 3で学んだ内容を考慮し、以下のようなディレクトリ構造が良いでしょう：

```
my-portfolio/
├── components/       # 共通コンポーネント
│   ├── layout/        # レイアウト関連のコンポーネント
│   ├── ui/            # 共通ユーザーインターフェースコンポーネント
│   └── sections/      # 特定ページのセクション
├── pages/           # ページコンポーネント
├── public/          # 静的ファイル
├── styles/          # CSSスタイル
├── utils/           # ユーティリティ関数
└── data/            # サイトデータ（プロジェクト情報など）
```

## 📝 スタイリングの適用

Next.jsではいくつかのスタイリング手法があります。

### CSS Modules

CSS Modulesはコンポーネントごとにスコープ付きのCSSを書く方法です。

```css
/* styles/Home.module.css */
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
}

.description {
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
}
```

```jsx
// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>こんにちは、私は[名前]です</h1>
      <p className={styles.description}>フロントエンドエンジニア / Webデザイナー</p>
    </div>
  );
}
```

### Tailwind CSS

Tailwind CSSはユーティリティファーストなCSSフレームワークです。

```bash
# Tailwind CSSのインストール
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js`の設定：

```js
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

globals.cssに汎用スタイルを追加：

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwindを使用したコンポーネントの例：

```jsx
// components/ui/Button.js
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
```

## 📝 共通レイアウトの作成

すべてのページで共通のレイアウトを使用するため、レイアウトコンポーネントを作成します。

```jsx
// components/layout/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? `${title} - 私のポートフォリオ` : '私のポートフォリオ'}</title>
        <meta name="description" content={description || '個人ポートフォリオサイト'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
```

```jsx
// components/layout/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">私のポートフォリオ</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">ホーム</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">私について</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">プロジェクト</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
```

```jsx
// components/layout/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} 私のポートフォリオ</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
```

## 📝 ページの作成

次に各ページを作成します。

### ホームページ

```jsx
// pages/index.js
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="ホーム" description="私のポートフォリオサイトへようこそ">
      {/* ヒーローセクション */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">こんにちは、私は[名前]です</h1>
          <p className="text-xl md:text-2xl mb-8">フロントエンドエンジニア / Webデザイナー</p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects">
              <Button>プロジェクトを見る</Button>
            </Link>
            <Link href="/contact">
              <Button>お問い合わせ</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">HTML/CSS</h3>
              <p>5年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">JavaScript</h3>
              <p>4年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">React</h3>
              <p>3年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">Next.js</h3>
              <p>2年の経験</p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新プロジェクトセクション */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">最新プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* プロジェクトカードの例 */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/project1.jpg" 
                  alt="プロジェクト1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">プロジェクト1</h3>
                <p className="text-gray-700 mb-4">これはプロジェクト1の説明です。</p>
                <Link href="/projects/1">
                  <span className="text-blue-500 hover:underline">詳細を見る</span>
                </Link>
              </div>
            </div>
            
            {/* 同様に他のプロジェクトカード */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
```

## 📝 Vercelでのデプロイ

VercelはNext.jsの開発元であり、Next.jsアプリのデプロイに最適なプラットフォームです。

### 手順

1. GitHubにリポジトリを作成し、プロジェクトをプッシュします

```bash
# GitHubリポジトリを初期化
git init
git add .
git commit -m "Initial commit"

# GitHubにプッシュ
git remote add origin https://github.com/yourusername/my-portfolio.git
git push -u origin main
```

2. Vercelにサインアップし、GitHubアカウントと連携します
   - [Vercelのウェブサイト](https://vercel.com)にアクセス
   - GitHubでログイン

3. 「新規プロジェクトのインポート」をクリックし、GitHubリポジトリを選択

4. デフォルト設定を確認し、「デプロイ」をクリック

5. デプロイが完了するのを待ち、生成されたURLでサイトにアクセス

### Vercelのメリット

- **設定不要**: 特別な設定をしなくても、Next.jsアプリを適切にデプロイ
- **継続的デプロイ**: GitHubにプッシュするたびに自動でデプロイ
- **プレビューデプロイ**: PRごとにプレビュー用のデプロイが作成される
- **サーバーレス関数**: APIルートがサーバーレス関数としてデプロイされる
- **グローバルCDN**: コンテンツがグローバルCDNで配信される

## 💻 最終プロジェクトの例

This repository contains the final example project for a personal portfolio website built with Next.js and deployed to Vercel. You can use this as a reference for your own portfolio.

- [Example Repository](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [Live Demo](https://next-blog-starter.vercel.app/)

## 📚 参考リソース

- [Next.jsドキュメント](https://nextjs.org/docs)
- [Vercelプラットフォーム](https://vercel.com/docs)
- [Tailwind CSSドキュメント](https://tailwindcss.com/docs)

## 🎉 おめでとう！

Next.jsとReactの基本カリキュラムを完了しました！あなたは今、次のことができるようになりました：

- JavaScript (ES6)の基本を理解し実装する
- Reactのコンポーネント、props、stateを理解し実装する
- Reactで実用的なUIコンポーネントを作成する
- Next.jsの機能と利点を理解する
- Next.jsでウェブサイトを作成し、Vercelで公開する

学習したことを私たちの[GitHubリポジトリ](https://github.com/ayk1769/react-nextjs-learning)に共有して、あなたのスキルを示しましょう！