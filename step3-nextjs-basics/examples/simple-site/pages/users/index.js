// pages/users/index.js - ユーザー一覧ページ（SSRの例）
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

// サーバーサイドでデータを取得する関数
export async function getServerSideProps() {
  try {
    // 外部APIからデータをフェッチ
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    
    return {
      props: { users }
    };
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    return {
      props: { users: [] }
    };
  }
}

export default function Users({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ユーザー一覧 - Next.js入門</title>
        <meta name="description" content="データフェッチの例：ユーザー一覧" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ユーザー一覧</h1>
        
        <p className={styles.description}>
          サーバーサイドレンダリング（SSR）を使用してデータを取得する例です。
          このページはリクエスト時にサーバー上でレンダリングされます。
        </p>
        
        {users.length > 0 ? (
          <div className={styles.grid}>
            {users.map(user => (
              <Link href={`/users/${user.id}`} key={user.id} className={styles.card}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p>ユーザーデータが見つかりませんでした。</p>
        )}
        
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
