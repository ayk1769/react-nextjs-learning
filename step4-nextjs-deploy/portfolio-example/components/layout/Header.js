import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">私のポートフォリオ</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">ホーム</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">私について</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">プロジェクト</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}