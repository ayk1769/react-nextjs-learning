import { useRouter } from 'next/router';
import Link from 'next/link';
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