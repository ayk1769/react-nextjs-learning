# STEP 1: Reactの仕組みを理解

このステップでは、Reactの基本的な概念と仕組みについて学びます。

## ✅ 学ぶこと

- Reactとは？（UIライブラリの概要）
- JSXとは？（HTML風の記法）
- コンポーネントの作り方
- propsの受け渡し
- useStateによる状態管理

## 📝 ReactとはT

Reactはユーザーインターフェースを構築するためのジャバスクリプトライブラリです。Facebook（現在はMeta）によって開発され、以下の特徴があります：

- **コンポーネントベース**: UIを再利用可能なコンポーネントに分割
- **仮想DOM**: 実際のDOMの代わりに使用される軽量な表現
- **宣言的**: 「何を」表示するかを定義し、「どのように」表示するかはライブラリに任せる
- **一方向データフロー**: データは親コンポーネントから子コンポーネントへの一方向に流れる

## 📝 JSXとは

JSXはJavaScript XMLの略で、JavaScriptの中でHTMLのようなマークアップを書くことができる機能拡張です。

```jsx
// JSXの例
const element = <h1>Hello, world!</h1>;

// JavaScript変数を埋め込むことができます
const name = '太郎';
const greeting = <h1>こんにちは、{name}さん</h1>;

// 複数の要素は親要素でラップする必要があります
const container = (
  <div>
    <h1>タイトル</h1>
    <p>段落テキスト</p>
  </div>
);
```

## 📝 コンポーネント

Reactアプリはコンポーネントという再利用可能な部品から構成されます。

### 関数コンポーネント

```jsx
// 関数コンポーネント
function Greeting() {
  return <h1>こんにちは！</h1>;
}

// アロー関数でも書けます
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};

// 利用方法
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
```

## 📝 Props

Props（プロパティ）は親コンポーネントから子コンポーネントに渡されるデータです。

```jsx
// Propsを受け取るコンポーネント
function Greeting(props) {
  return <h1>こんにちは、{props.name}さん</h1>;
}

// 分割代入を使った書き方
function Greeting({ name }) {
  return <h1>こんにちは、{name}さん</h1>;
}

// 使用例
<Greeting name="太郎" />
```

## 📝 useStateフック

ReactフックのStateはコンポーネントの内部状態を管理するために使用されます。

```jsx
import { useState } from 'react';

function Counter() {
  // count: 現在の状態値
  // setCount: 状態を更新する関数
  // useState(0): 初期値を0に設定
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

## 💻 カウンターアプリの例

Reactの基本的な概念を組み合わせた簡単なカウンターアプリの例です。

```jsx
// App.jsx
import { useState } from 'react';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

function Display({ count }) {
  return (
    <p>現在のカウント: {count}</p>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>カウンターアプリ</h1>
      <Display count={count} />
      <div>
        <Button text="+1" onClick={increment} />
        <Button text="-1" onClick={decrement} />
        <Button text="リセット" onClick={reset} />
      </div>
    </div>
  );
}
```

## 💻 実践: Reactプロジェクトの作成

Create React Appを使用してプロジェクトを作成します。

```bash
# 新しいReactプロジェクトを作成
npx create-react-app my-app

# 作成したディレクトリに移動
cd my-app

# 開発サーバーを起動
npm start
```

## 💻 実践課題

次の課題に挑戦して、Reactの基本的な概念を確認しましょう。

### 課題1: プロフィールカードコンポーネント

以下の仕様を満たすプロフィールカードコンポーネントを作成してください。

1. `ProfileCard`コンポーネントには、`name`, `role`, `bio` のpropsを渡す
2. カードには名前、役割、自己紹介を表示する
3. カードには「詳細を見る」ボタンがあり、クリックするとメッセージが表示される

### 課題2: テーマ切り替え

ライトモードとダークモードを切り替えるボタンを持つコンポーネントを作成してください。

1. テーマ状態をuseStateで管理する
2. ボタンをクリックするとテーマが切り替わる
3. 現在のテーマに基づいて背景色とテキスト色が変わる

## 📚 参考リソース

- [React公式ドキュメント](https://ja.react.dev/)
- [ドットインストール：React入門](https://dotinstall.com/lessons/basic_reactjs)

## 次のステップ

Reactの基本的なコンセプトを理解したら、次は[STEP 2: Reactで簡単なUIを作れる](../step2-react-ui/README.md)に進み、より実践的なUIコンポーネントの作成に取り組みましょう。