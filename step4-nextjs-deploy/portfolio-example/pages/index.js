import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="ホーム" description="私のポートフォリオサイトへようこそ">
      {/* ヒーローセクション */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">こんにちは、私は[名前]です</h1>
          <p className="text-xl md:text-2xl mb-8">フロントエンドエンジニア / Webデザイナー</p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects">
              <Button>プロジェクトを見る</Button>
            </Link>
            <Link href="/contact">
              <Button>お問い合わせ</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">HTML/CSS</h3>
              <p>5年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">JavaScript</h3>
              <p>4年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">React</h3>
              <p>3年の経験</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold mb-2">Next.js</h3>
              <p>2年の経験</p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新プロジェクトセクション */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">最新プロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* プロジェクトカードの例 */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="relative h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">プロジェクト1</h3>
                <p className="text-gray-700 mb-4">これはプロジェクト1の説明です。</p>
                <Link href="/projects/1">
                  <span className="text-blue-500 hover:underline">詳細を見る</span>
                </Link>
              </div>
            </div>
            
            {/* 他のプロジェクトカード */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="relative h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">プロジェクト2</h3>
                <p className="text-gray-700 mb-4">これはプロジェクト2の説明です。</p>
                <Link href="/projects/2">
                  <span className="text-blue-500 hover:underline">詳細を見る</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded shadow overflow-hidden">
              <div className="relative h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">プロジェクト3</h3>
                <p className="text-gray-700 mb-4">これはプロジェクト3の説明です。</p>
                <Link href="/projects/3">
                  <span className="text-blue-500 hover:underline">詳細を見る</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}