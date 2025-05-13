// pages/about.js - このサイトについてのページ
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js入門 - このサイトについて</title>
        <meta name="description" content="Next.jsの基本を学ぶサイトについての詳細情報" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>このサイトについて</h1>
        
        <div className={styles.description}>
          <p>
            このサイトはNext.jsの基本的な機能を学ぶためのサンプルプロジェクトです。
            実際のプロジェクト構造やルーティングの仕組みを体験することができます。
          </p>
          
          <h2>学べる内容</h2>
          <ul className={styles.list}>
            <li>ページベースのルーティング</li>
            <li>Linkコンポーネントを使ったクライアントサイドナビゲーション</li>
            <li>静的生成（SSG）とサーバーサイドレンダリング（SSR）</li>
            <li>データフェッチの方法</li>
            <li>スタイリングとレイアウト</li>
          </ul>
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
