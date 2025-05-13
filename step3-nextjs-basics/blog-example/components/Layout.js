import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, title = 'デフォルトタイトル' }) {
  return (
    <div>
      <Head>
        <title>{title} | ブログサンプル</title>
        <meta name="description" content="Next.jsで作ったブログサンプル" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}