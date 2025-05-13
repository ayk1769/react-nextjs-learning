// pages/blog/[id].js - 動的ルーティングによるブログ詳細ページ
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

// ブログ記事データ
// 実際のアプリではAPIやCMSから取得することが多い
const posts = {
  '1': {
    title: 'Next.jsの基本',
    date: '2025-05-10',
    content: `
      Next.jsは、Reactを使用したウェブアプリケーションを構築するためのフレームワークです。
      
      ## 主な特徴
      
      - **ファイルベースのルーティング**: \`pages\`ディレクトリ内のファイル構造がそのままURLパスになります。
      - **サーバーサイドレンダリング(SSR)**: 各リクエストごとにページをレンダリングします。
      - **静的サイト生成(SSG)**: ビルド時にページを生成し、CDNで配信できます。
      - **増分静的再生成(ISR)**: 必要に応じて特定のページを再生成できます。
      - **APIルート**: 同じNext.jsアプリ内にAPIエンドポイントを作成できます。
      
      ## 始め方
      
      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`
      
      これで開発サーバーが起動し、http://localhost:3000 でアプリにアクセスできます。
      
      ## データフェッチング
      
      Next.jsには、3つの主要なデータフェッチング方法があります：
      
      1. \`getStaticProps\`: ビルド時にデータを取得し、静的にHTMLを生成します。
      2. \`getStaticPaths\`: 動的ルーティングと組み合わせて、どのパスを静的に生成するかを指定します。
      3. \`getServerSideProps\`: リクエスト時にサーバーサイドでデータを取得します。
      
      これらの方法を使い分けることで、最適なパフォーマンスと柔軟性を実現できます。
    `
  },
  '2': {
    title: 'Reactコンポーネント設計のベストプラクティス',
    date: '2025-05-12',
    content: `
      効果的なReactコンポーネントを設計するためのベストプラクティスを紹介します。
      
      ## 単一責任の原則
      
      コンポーネントは1つの責任だけを持つべきです。複数の役割を持つコンポーネントは、より小さく、集中したコンポーネントに分割しましょう。
      
      ## 再利用性と構成性
      
      コンポーネントは再利用可能で構成可能であるべきです。Propsを通じて必要な情報を受け取り、内部状態を最小限に保ちましょう。
      
      ## Propsの設計
      
      - Props名は明確で一貫性のあるものにしましょう
      - デフォルト値を提供して、コンポーネントの使いやすさを向上させましょう
      - PropTypesまたはTypeScriptを使用して型チェックを行いましょう
      
      ## 状態管理
      
      - ローカルstate: コンポーネント内でのみ使用する状態
      - Context API: 複数のコンポーネント間で共有する状態
      - Redux/MobX: アプリケーション全体の状態管理
      
      適切なレベルで状態を管理し、不要な再レンダリングを防ぎましょう。
      
      ## パフォーマンス最適化
      
      - React.memo、useCallback、useMemoを適切に使用する
      - 不要な再レンダリングを避ける
      - コンポーネントの分割とコード分割を活用する
      
      これらの原則を守ることで、メンテナンス性が高く、パフォーマンスの良いReactアプリケーションを構築できます。
    `
  },
  '3': {
    title: 'CSS Modulesの使い方',
    date: '2025-05-15',
    content: `
      CSS Modulesは、CSSのスコープをコンポーネントに限定する仕組みで、スタイルの衝突を防ぎます。
      
      ## Next.jsでのCSS Modules
      
      Next.jsではデフォルトでCSS Modulesをサポートしています。\`.module.css\`の拡張子を持つファイルを作成するだけです。
      
      \`\`\`css
      /* Button.module.css */
      .button {
        padding: 10px 15px;
        background-color: #0070f3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      .button:hover {
        background-color: #0051a2;
      }
      \`\`\`
      
      そして、Reactコンポーネントでインポートして使用します：
      
      \`\`\`jsx
      import styles from './Button.module.css';
      
      function Button({ children, onClick }) {
        return (
          <button className={styles.button} onClick={onClick}>
            {children}
          </button>
        );
      }
      
      export default Button;
      \`\`\`
      
      ## CSS Modulesの利点
      
      - クラス名の衝突を防ぐ
      - コンポーネントとスタイルの結合度を高める
      - スタイルの再利用性を向上させる
      - グローバルCSSの影響を受けにくい
      
      ## グローバルCSSとの併用
      
      特定のスタイルをグローバルに適用したい場合は、通常のCSSファイルも使用できます：
      
      \`\`\`jsx
      import '../styles/globals.css';
      \`\`\`
      
      CSS Modulesを効果的に使用することで、スタイリングの管理が容易になり、大規模なアプリケーションでも一貫性を保つことができます。
    `
  },
  '4': {
    title: 'APIルートの活用方法',
    date: '2025-05-18',
    content: `
      Next.jsのAPIルート機能を使えば、サーバーレス関数のようなバックエンドAPIを同じNext.jsアプリ内に作成できます。
      
      ## APIルートの基本
      
      \`pages/api\`ディレクトリ内にAPIルートを作成します：
      
      \`\`\`jsx
      // pages/api/hello.js
      export default function handler(req, res) {
        res.status(200).json({ message: 'Hello, World!' });
      }
      \`\`\`
      
      このAPIは\`/api/hello\`でアクセスできます。
      
      ## リクエストメソッドの処理
      
      \`\`\`jsx
      // pages/api/users.js
      export default function handler(req, res) {
        const { method } = req;
        
        switch (method) {
          case 'GET':
            // ユーザー一覧を取得
            res.status(200).json({ users: ['John', 'Jane', 'Bob'] });
            break;
          case 'POST':
            // 新しいユーザーを作成
            const { name } = req.body;
            res.status(201).json({ message: \`ユーザー \${name} を作成しました\` });
            break;
          default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(\`Method \${method} Not Allowed\`);
        }
      }
      \`\`\`
      
      ## 動的APIルート
      
      ファイル名に角括弧を使用することで、動的APIルートを作成できます：
      
      \`\`\`jsx
      // pages/api/users/[id].js
      export default function handler(req, res) {
        const { id } = req.query;
        
        res.status(200).json({ id, name: \`User \${id}\` });
      }
      \`\`\`
      
      ## APIルートの利点
      
      - フロントエンドとバックエンドを同じプロジェクトで開発できる
      - サーバーレスデプロイが容易
      - 認証やAPIキーの管理が簡単
      - TypeScriptサポート
      
      APIルートを活用することで、フルスタックアプリケーションを効率的に開発できます。
    `
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  
  // idがまだ取得されていない場合（初期レンダリング時）
  if (!id) {
    return <div>Loading...</div>;
  }
  
  // 存在しない記事の場合
  if (!posts[id]) {
    return (
      <div className={styles.container}>
        <Head>
          <title>記事が見つかりません - Next.js入門</title>
          <meta name="description" content="お探しの記事は見つかりませんでした" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>記事が見つかりません</h1>
          
          <p className={styles.description}>
            お探しの記事は存在しないか、削除された可能性があります。
          </p>
          
          <div className={styles.backToHome}>
            <Link href="/blog">
              &larr; ブログ一覧に戻る
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  const post = posts[id];
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} - Next.js入門</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article className={styles.blogPost}>
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.date}>{post.date}</div>
          
          <div className={styles.content}>
            {post.content.split('\n\n').map((paragraph, index) => {
              // 見出しの処理
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.substring(3)}</h2>;
              }
              
              // コードブロックの処理
              if (paragraph.includes('```')) {
                const parts = paragraph.split('```');
                return (
                  <div key={index}>
                    {parts.map((part, i) => {
                      if (i % 2 === 0) {
                        return <p key={i}>{part}</p>;
                      } else {
                        const lines = part.split('\n');
                        const language = lines[0];
                        const code = lines.slice(1).join('\n');
                        return (
                          <pre key={i} className={styles.code}>
                            <code>{code}</code>
                          </pre>
                        );
                      }
                    })}
                  </div>
                );
              }
              
              // 通常の段落
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>
        
        <div className={styles.backToHome}>
          <Link href="/blog">
            &larr; ブログ一覧に戻る
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
