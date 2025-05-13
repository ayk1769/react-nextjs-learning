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