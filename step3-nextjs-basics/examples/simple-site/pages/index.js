// pages/index.js - Next.jsのホームページ
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js入門 - ホーム</title>
        <meta name="description" content="Next.jsの基本を学ぶためのサンプルアプリケーション" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js入門へようこそ
        </h1>

        <p className={styles.description}>
          このプロジェクトはNext.jsの基本を学ぶためのサンプルアプリです。
        </p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>このサイトについて &rarr;</h2>
            <p>このサイトの詳細情報や目的について説明します。</p>
          </Link>

          <Link href="/blog" className={styles.card}>
            <h2>ブログ &rarr;</h2>
            <p>Next.jsに関する記事や学習リソースを紹介します。</p>
          </Link>

          <Link href="/users" className={styles.card}>
            <h2>ユーザー一覧 &rarr;</h2>
            <p>データフェッチの例として、ユーザー一覧を表示します。</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h2>お問い合わせ &rarr;</h2>
            <p>フォームの実装例です。質問や感想を送信できます。</p>
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
