import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{ background: '#f0f0f0', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', justifyContent: 'center' }}>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/blog">ブログ</Link>
        </li>
        <li>
          <Link href="/about">このサイトについて</Link>
        </li>
      </ul>
    </nav>
  );
}