// pages/users/[id].js - ユーザー詳細ページ（SSGとgetStaticPathsの例）
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

// 静的生成するページのパスを指定
export async function getStaticPaths() {
  // 外部APIからユーザーIDのリストを取得
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  
  // 各ユーザーのIDに基づいてパスを生成
  const paths = users.map(user => ({
    params: { id: user.id.toString() }
  }));
  
  return {
    paths,
    fallback: 'blocking' // 存在しないパスの場合はサーバーサイドでレンダリング
  };
}

// 各ページのビルド時にデータを取得
export async function getStaticProps({ params }) {
  try {
    // 特定のユーザーデータを取得
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    
    // ユーザーの投稿を取得
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`);
    const posts = await postsRes.json();
    
    return {
      props: { user, posts },
      // 1時間ごとに再生成（増分静的再生成）
      revalidate: 3600
    };
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    return {
      notFound: true // 404ページを表示
    };
  }
}

export default function UserDetail({ user, posts }) {
  const router = useRouter();
  
  // fallback中の表示
  if (router.isFallback) {
    return <div>読み込み中...</div>;
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{user.name} - ユーザー詳細 - Next.js入門</title>
        <meta name="description" content={`${user.name}のユーザー詳細情報`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{user.name}</h1>
        
        <p className={styles.description}>
          静的サイト生成（SSG）と増分静的再生成（ISR）を使用したユーザー詳細ページです。
        </p>
        
        <div className={styles.card} style={{ width: '100%', maxWidth: '800px' }}>
          <h2>ユーザー情報</h2>
          <div>
            <p><strong>名前:</strong> {user.name}</p>
            <p><strong>ユーザー名:</strong> {user.username}</p>
            <p><strong>メール:</strong> {user.email}</p>
            <p><strong>電話:</strong> {user.phone}</p>
            <p><strong>ウェブサイト:</strong> {user.website}</p>
          </div>
          
          <div>
            <h3>住所</h3>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          
          <div>
            <h3>会社</h3>
            <p><strong>名前:</strong> {user.company.name}</p>
            <p><strong>キャッチフレーズ:</strong> {user.company.catchPhrase}</p>
            <p><strong>事業内容:</strong> {user.company.bs}</p>
          </div>
        </div>
        
        <div style={{ width: '100%', maxWidth: '800px', marginTop: '2rem' }}>
          <h2>{user.name}の投稿</h2>
          
          {posts.length > 0 ? (
            <div>
              {posts.map(post => (
                <div key={post.id} className={styles.blogCard}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>投稿がありません。</p>
          )}
        </div>
        
        <div className={styles.backToHome} style={{ marginTop: '2rem' }}>
          <Link href="/users">
            &larr; ユーザー一覧に戻る
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
