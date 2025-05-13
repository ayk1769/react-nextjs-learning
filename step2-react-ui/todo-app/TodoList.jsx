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