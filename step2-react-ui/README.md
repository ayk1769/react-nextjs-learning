# STEP 2: Reactで簡単なUIを作れる

このステップでは、Reactを使って実用的なUIコンポーネントを作成する方法を学びます。

## ✅ 学ぶこと

- イベントハンドラ（onClick など）
- 入力フォーム（inputの状態管理）
- リストの表示（mapで配列から要素を作る）

## 📝 イベントハンドリング

Reactでは、DOMイベントはcamelCaseで呼び出します。

```jsx
// クリックイベント
function Button() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return (
    <button onClick={handleClick}>クリックしてください</button>
  );
}

// インラインで書くことも可能です
<button onClick={() => alert('クリックしました！')}>クリック</button>
```

### 主なイベント一覧

- `onClick`: クリック時
- `onChange`: フォーム要素の値が変更された時
- `onSubmit`: フォームが送信された時
- `onMouseOver`: 要素上にマウスが移動した時
- `onKeyDown`: キーが押された時

## 📝 フォームと入力要素

Reactではフォーム要素の値をコンポーネントの状態として管理します。

```jsx
import { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // デフォルトの送信動作を防止
    e.preventDefault();
    
    // フォームデータの処理
    console.log('Submit:', { name, email });
    
    // フォームリセット
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="email">メール:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <button type="submit">送信</button>
    </form>
  );
}
```

## 📝 リストレンダリング

Reactでは、配列の要素をマッピングしてリスト要素を作成します。

```jsx
function ListExample() {
  const items = [
    { id: 1, name: 'リンゴ' },
    { id: 2, name: 'バナナ' },
    { id: 3, name: 'オレンジ' },
    { id: 4, name: 'ブドウ' }
  ];

  return (
    <div>
      <h2>フルーツリスト</h2>
      <ul>
        {items.map(item => (
          // keyプロパティは各要素を識別するために必要です
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 💻 ToDoリストアプリの例

ここまで学んだ概念を組み合わせて、簡単なToDoリストアプリを作成しましょう。

```jsx
// TodoList.jsx
import { useState } from 'react';

// ToDoアイテムコンポーネント
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}

// メインのToDoリストコンポーネント
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // 新しいToDoを追加
  const addTodo = () => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  // ToDoの完了状態を切り替え
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // ToDoを削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <button onClick={addTodo}>追加</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      
      <div>
        <p>完了タスク数: {todos.filter(todo => todo.completed).length}</p>
        <p>未完了タスク数: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
}
```

## 💻 実践課題

次の課題に挑戦して、ReactでのUIコンポーネント作成スキルを確認しましょう。

### 課題1: シンプルカラーピッカー

以下の仕様を満たすカラーピッカーを作成してください。

1. 指定した色を表示するボックスを作成
2. 色を選択できるボタンを用意（赤・緑・青など）
3. 現在選択されている色の名前を表示

### 課題2: 画像ギャラリー

以下の仕様を満たすシンプルな画像ギャラリーを作成してください。

1. 画像のURL配列を作成
2. 画像をサムネイルとして表示
3. サムネイルをクリックすると、大きな画像を表示
4. 大きな画像表示時に、前後の画像に移動できるボタンを追加

## 📚 参考リソース

- [React公式ドキュメント - イベント処理](https://ja.react.dev/learn/responding-to-events)
- [React公式ドキュメント - フォーム](https://ja.react.dev/reference/react-dom/components/input)
- [React公式ドキュメント - リストとキー](https://ja.react.dev/learn/rendering-lists)

## 次のステップ

ReactでUIコンポーネントを作成する基本を理解したら、次は[STEP 3: Next.jsの基本を学ぶ](../step3-nextjs-basics/README.md)に進み、Next.jsの特徴と仕組みを学びましょう。