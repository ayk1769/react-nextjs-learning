// App.jsx - シンプルなReactコンポーネントの例

import React from 'react';

// 関数コンポーネント
function Greeting() {
  return <h1>こんにちは、世界！</h1>;
}

// Propsを受け取るコンポーネント
function PersonalGreeting(props) {
  return <h1>こんにちは、{props.name}さん！</h1>;
}

// 分割代入を使用したPropsの受け取り
function PersonalGreetingDestructured({ name }) {
  return <h1>こんにちは、{name}さん！</h1>;
}

// 複数のPropsを受け取るコンポーネント
function UserProfile({ name, age, occupation }) {
  return (
    <div>
      <h2>{name}さんのプロフィール</h2>
      <p>年齢: {age}歳</p>
      <p>職業: {occupation}</p>
    </div>
  );
}

// JSXで条件付きレンダリング
function ConditionalGreeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>おかえりなさい、{name}さん！</h1>;
  }
  return <h1>ログインしてください</h1>;
}

// 論理演算子を使った条件付きレンダリング
function UserStatus({ isOnline, name }) {
  return (
    <div>
      <h2>{name}</h2>
      {isOnline && <p>オンライン</p>}
      {!isOnline && <p>オフライン</p>}
    </div>
  );
}

// 三項演算子を使った条件付きレンダリング
function ToggleMessage({ isVisible }) {
  return (
    <div>
      {isVisible 
        ? <p>メッセージが表示されています</p> 
        : <p>メッセージは非表示です</p>}
    </div>
  );
}

// 子要素を受け取るコンポーネント
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// JSXの中のJavaScript式
function MathExample() {
  const a = 5;
  const b = 7;
  
  return (
    <div>
      <p>{a} + {b} = {a + b}</p>
      <p>{a} × {b} = {a * b}</p>
    </div>
  );
}

// 配列のレンダリング
function FruitList() {
  const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];
  
  return (
    <div>
      <h3>果物リスト</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// JSXで複数要素を返す（Fragmentを使用）
function MultipleElements() {
  return (
    <>
      <h2>タイトル</h2>
      <p>段落1</p>
      <p>段落2</p>
    </>
  );
}

// CSS Classesの適用
function StyledComponent() {
  return (
    <div className="container">
      <h2 className="title">スタイル付きのコンポーネント</h2>
      <p className="text">これはCSSクラスを適用した要素です</p>
    </div>
  );
}

// インラインスタイルの適用
function InlineStyledComponent() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px'
    },
    title: {
      color: '#333',
      fontSize: '24px'
    },
    text: {
      color: '#666',
      lineHeight: 1.5
    }
  };
  
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>インラインスタイルのコンポーネント</h2>
      <p style={styles.text}>これはインラインスタイルを適用した要素です</p>
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return (
    <div>
      <Greeting />
      <PersonalGreeting name="太郎" />
      <PersonalGreetingDestructured name="花子" />
      <UserProfile name="次郎" age={25} occupation="エンジニア" />
      <ConditionalGreeting isLoggedIn={true} name="三郎" />
      <UserStatus isOnline={true} name="四郎" />
      <ToggleMessage isVisible={true} />
      
      <Card title="カードコンポーネント">
        <p>これはカードの中の子要素です</p>
        <button>クリック</button>
      </Card>
      
      <MathExample />
      <FruitList />
      <MultipleElements />
      <StyledComponent />
      <InlineStyledComponent />
    </div>
  );
}
