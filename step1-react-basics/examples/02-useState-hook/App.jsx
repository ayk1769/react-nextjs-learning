// useStateの基本的な使い方を示す例

import React, { useState } from 'react';

// シンプルなカウンターコンポーネント
function Counter() {
  // count: 現在の状態値
  // setCount: 状態を更新する関数
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>カウンター</h2>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

// テキスト入力フォームコンポーネント
function TextInput() {
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div>
      <h2>テキスト入力</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="ここに入力してください"
      />
      <p>入力されたテキスト: {text}</p>
      <button onClick={() => setText('')}>クリア</button>
    </div>
  );
}

// トグルスイッチコンポーネント
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <h2>トグルスイッチ</h2>
      <button 
        onClick={() => setIsOn(!isOn)}
        style={{
          backgroundColor: isOn ? 'green' : 'gray',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>現在の状態: {isOn ? 'オン' : 'オフ'}</p>
    </div>
  );
}

// オブジェクト状態の管理
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // 状態の一部だけを更新するときはスプレッド構文を使う
    setUser({
      ...user,      // 既存のプロパティをコピー
      [name]: value // 更新するプロパティのみ上書き
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`送信されたデータ: ${JSON.stringify(user)}`);
  };
  
  return (
    <div>
      <h2>ユーザーフォーム</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            名前:
            <input 
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            メール:
            <input 
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            年齢:
            <input 
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
      <div>
        <h3>プレビュー:</h3>
        <p>名前: {user.name}</p>
        <p>メール: {user.email}</p>
        <p>年齢: {user.age}</p>
      </div>
    </div>
  );
}

// 配列状態の管理
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    
    // 新しい配列を作成して状態を更新
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(''); // 入力フィールドをクリア
  };
  
  const handleToggleTodo = (id) => {
    // map()を使用して特定の要素のみを更新した新しい配列を作成
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const handleDeleteTodo = (id) => {
    // filter()を使用して特定の要素を除外した新しい配列を作成
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h2>ToDoリスト</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <button onClick={handleAddTodo}>追加</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
      <div>
        <p>合計タスク数: {todos.length}</p>
        <p>完了タスク数: {todos.filter(todo => todo.completed).length}</p>
        <p>未完了タスク数: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
}

// 複数のuseState
function UserDashboard() {
  const [username, setUsername] = useState('ゲストユーザー');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');
  
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      setUsername('山田太郎');
    } else {
      setUsername('ゲストユーザー');
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      padding: '20px',
      borderRadius: '8px'
    }
  };
  
  return (
    <div style={styles.container}>
      <h2>ユーザーダッシュボード</h2>
      <p>ユーザー名: {username}</p>
      <p>ログイン状態: {isLoggedIn ? 'ログイン中' : 'ログアウト中'}</p>
      <p>現在のテーマ: {theme}</p>
      <div>
        <button onClick={toggleLogin}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>
        <button onClick={toggleTheme}>
          テーマ切替
        </button>
      </div>
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>useStateフックの例</h1>
      <hr />
      <Counter />
      <hr />
      <TextInput />
      <hr />
      <ToggleSwitch />
      <hr />
      <UserForm />
      <hr />
      <TodoList />
      <hr />
      <UserDashboard />
    </div>
  );
}
