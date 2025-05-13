import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? `${title} - 私のポートフォリオ` : '私のポートフォリオ'}</title>
        <meta name="description" content={description || '個人ポートフォリオサイト'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}