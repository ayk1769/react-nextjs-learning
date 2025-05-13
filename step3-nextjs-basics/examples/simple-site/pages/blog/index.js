// pages/blog/index.js - ブログ一覧ページ
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

// ブログ記事データ
// 実際のアプリではAPIやCMSから取得することが多い
const posts = [
  { 
    id: '1', 
    title: 'Next.jsの基本', 
    date: '2025-05-10',
    excerpt: 'Next.jsの基本的な機能と使い方について解説します。ページルーティング、データフェッチ、SSGとSSRの違いなどを説明します。'
  },
  { 
    id: '2', 
    title: 'Reactコンポーネント設計のベストプラクティス', 
    date: '2025-05-12',
    excerpt: 'Reactコンポーネントを設計する際のベストプラクティスを紹介します。コンポーネントの分割、Props、状態管理などについて説明します。'
  },
  { 
    id: '3', 
    title: 'CSS Modulesの使い方', 
    date: '2025-05-15',
    excerpt: 'Next.jsでCSS Modulesを使用する方法を解説します。スコープ付きのCSSを簡単に実装し、スタイルの衝突を防ぐ方法を学びましょう。'
  },
  { 
    id: '4', 
    title: 'APIルートの活用方法', 
    date: '2025-05-18',
    excerpt: 'Next.jsのAPIルート機能を使ってバックエンドAPIを作成する方法を説明します。フロントエンドとバックエンドを同じプロジェクトで開発する利点も紹介します。'
  }
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js入門 - ブログ</title>
        <meta name="description" content="Next.jsに関する記事や学習リソース" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ブログ記事一覧</h1>
        
        <p className={styles.description}>
          Next.jsやReactに関する記事や学習リソースを紹介します。
        </p>
        
        <div className={styles.blogList}>
          {posts.map(post => (
            <article key={post.id} className={styles.blogCard}>
              <h2>
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <div className={styles.date}>{post.date}</div>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                続きを読む &rarr;
              </Link>
            </article>
          ))}
        </div>
        
        <div className={styles.backToHome}>
          <Link href="/">
            &larr; ホームに戻る
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Next.js入門 - サンプルプロジェクト
        </p>
      </footer>
    </div>
  );
}
