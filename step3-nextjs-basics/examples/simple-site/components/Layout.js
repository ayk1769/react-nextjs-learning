// components/Layout.js - 共通レイアウトコンポーネント
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Layout({ children, title = 'Next.js入門', description = 'Next.jsの基本を学ぶサンプルアプリケーション' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            Next.js入門
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about">
                このサイトについて
              </Link>
            </li>
            <li>
              <Link href="/blog">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="/users">
                ユーザー一覧
              </Link>
            </li>
            <li>
              <Link href="/contact">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>
          Next.js入門 - サンプルプロジェクト
        </p>
      </footer>
    </div>
  );
}
