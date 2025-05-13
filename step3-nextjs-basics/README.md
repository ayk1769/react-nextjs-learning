# STEP 3: Next.jsの基本を学ぶ

このステップでは、Next.jsの基本的な概念と仕組みについて学びます。

## ✅ 学ぶこと

- Next.jsの特徴と利点
- ページルーティングとディレクトリ構造
- Linkコンポーネントによるナビゲーション

## 📝 Next.jsとは

Next.jsはReactフレームワークで、以下のような特徴と利点があります：

- **ハイブリッドレンダリング**: サーバーサイドレンダリング（SSR）、静的生成（SSG）、クライアントサイドレンダリングをサポート
- **ファイルベースのルーティング**: `pages`ディレクトリ内のファイル構造がそのままURLパスになる
- **コード分割**: 自動的なコード分割でパフォーマンスを最適化
- **イメージ最適化**: 内蔵のイメージ最適化機能
- **APIルート**: 同じプロジェクト内でバックエンドAPIを作成可能

## 📝 Next.jsプロジェクトの作成

Next.jsプロジェクトを作成するには、次のコマンドを実行します：

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

これでローカル開発サーバーが http://localhost:3000 で起動します。

## 📝 プロジェクト構造

Next.jsの標準的なプロジェクト構造は以下の通りです：

```
my-next-app/
├── .next/           # ビルド出力（自動生成）
├── node_modules/    # ライブラリ
├── pages/           # ページコンポーネント
│   ├── api/         # APIルート
│   ├── _app.js      # メインアプリコンポーネント
│   └── index.js     # トップページ
├── public/          # 静的ファイル
├── styles/          # CSSスタイル
├── components/      # 共通コンポーネント
├── next.config.js    # Next.jsの設定ファイル
├── package.json
└── README.md
```

## 📝 ページとルーティング

Next.jsはファイルベースのルーティングを采用しています。`pages`ディレクトリにファイルを作成すると、自動的にルートが生成されます。

```jsx
// pages/index.js -> /
export default function Home() {
  return <h1>ホームページ</h1>;
}

// pages/about.js -> /about
export default function About() {
  return <h1>このサイトについて</h1>;
}

// pages/blog/index.js -> /blog
export default function Blog() {
  return <h1>ブログ一覧</h1>;
}

// pages/blog/[id].js -> /blog/1, /blog/2, etc.
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>ブログ記事: {id}</h1>;
}
```

## 📝 Linkコンポーネント

Next.jsの`Link`コンポーネントを使用すると、クライアントサイドのナビゲーションが可能になります。

```jsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/about">このサイトについて</Link>
        </li>
        <li>
          <Link href="/blog">ブログ</Link>
        </li>
      </ul>
    </nav>
  );
}
```

## 📝 レイアウトとコンポーネント

共通のレイアウトやコンポーネントを作成する方法を見てみましょう。

```jsx
// components/Layout.js
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, title = 'デフォルトタイトル' }) {
  return (
    <div>
      <Head>
        <title>{title} | 私のサイト</title>
        <meta name="description" content="Next.jsで作ったウェブサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

// pages/index.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="ホーム">
      <h1>ホームページへようこそ！</h1>
      <p>ここはホームページの内容です。</p>
    </Layout>
  );
}
```

## 💻 シンプルなブログの例

Next.jsを使用したシンプルなブログの例を見てみましょう。

```jsx
// pages/blog/index.js
import Link from 'next/link';
import Layout from '../../components/Layout';

// ブログ記事のデータ
// 実際のアプリでは、APIやCMSから取得することが多い

const posts = [
  { id: '1', title: 'Next.jsの基本', date: '2025-05-10' },
  { id: '2', title: 'Reactコンポーネント', date: '2025-05-12' },
  { id: '3', title: 'CSS Modulesの使い方', date: '2025-05-15' }
];

export default function Blog() {
  return (
    <Layout title="ブログ">
      <h1>ブログ記事一覧</h1>
      
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <span>{post.title}</span>
            </Link>
            <small> ({post.date})</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// pages/blog/[id].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// 実際のアプリでは、このデータもAPIやCMSから取得

const posts = {
  '1': {
    title: 'Next.jsの基本',
    date: '2025-05-10',
    content: 'Next.jsは、Reactフレームワークを使用したウェブアプリケーションを構築するためのフレームワークです...'
  },
  '2': {
    title: 'Reactコンポーネント',
    date: '2025-05-12',
    content: 'Reactコンポーネントを作成する際のベストプラクティスをご紹介します...'
  },
  '3': {
    title: 'CSS Modulesの使い方',
    date: '2025-05-15',
    content: 'CSS Modulesを使用すると、スコープ付きのCSSを簡単に実装できます...'
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  // idがまだ取得されていない場合や存在しない場合の処理
  if (!id || !posts[id]) {
    return <div>記事が見つかりません</div>;
  }
  
  const post = posts[id];
  
  return (
    <Layout title={post.title}>
      <article>
        <h1>{post.title}</h1>
        <p><small>投稿日: {post.date}</small></p>
        <div>{post.content}</div>
      </article>
      
      <div>
        <Link href="/blog">
          ← 記事一覧に戻る
        </Link>
      </div>
    </Layout>
  );
}
```

## 💻 実践課題

次の課題に挑戦して、Next.jsの基本的な使い方を確認しましょう。

### 課題1: シンプルなポートフォリオサイト

以下の仕様を満たすシンプルなポートフォリオサイトを作成してください。

1. トップページ、プロフィールページ、プロジェクト一覧ページ、お問い合わせページを作成
2. 共通のナビゲーションとフッターを持つレイアウトコンポーネントを作成
3. 動的ルーティングを使用して、個別のプロジェクト詳細ページを実装

### 課題2: データ取得と表示

Next.jsのデータ取得メソッドを使用して、外部APIからデータを取得し表示するページを作成してください。

1. `getStaticProps`を使用してビルド時にデータを取得
2. 取得したデータをリストとして表示
3. 個別の詳細ページにリンクを設定

## 📚 参考リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Next.js公式チュートリアル](https://nextjs.org/learn/basics/create-nextjs-app)
- [Vercel Platform](https://vercel.com/)

## 次のステップ

Next.jsの基本を理解したら、次は[STEP 4: Next.jsアプリを作って公開](../step4-nextjs-deploy/README.md)に進み、実際のアプリケーションを作成して公開しましょう。