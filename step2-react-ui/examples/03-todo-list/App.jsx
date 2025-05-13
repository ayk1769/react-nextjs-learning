// ToDoリストアプリの例

import React, { useState, useEffect } from 'react';

// ToDoアイテムコンポーネント
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };
  
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };
  
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>
      
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button onClick={handleSave} className="btn save-btn">保存</button>
          <button onClick={handleCancel} className="btn cancel-btn">キャンセル</button>
        </div>
      ) : (
        <div className="todo-content">
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button onClick={handleEdit} className="btn edit-btn">編集</button>
            <button onClick={() => onDelete(todo.id)} className="btn delete-btn">削除</button>
          </div>
        </div>
      )}
    </li>
  );
}

// フィルターコンポーネント
function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="todo-filter">
      <button
        className={`btn filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        すべて
      </button>
      <button
        className={`btn filter-btn ${filter === 'active' ? 'active' : ''}`}
        onClick={() => onFilterChange('active')}
      >
        未完了
      </button>
      <button
        className={`btn filter-btn ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        完了済み
      </button>
    </div>
  );
}

// タスク統計コンポーネント
function TodoStats({ todos }) {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const percentComplete = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return (
    <div className="todo-stats">
      <div className="stats-item">
        <span className="stats-label">合計タスク数:</span>
        <span className="stats-value">{totalTasks}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">完了:</span>
        <span className="stats-value">{completedTasks}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">未完了:</span>
        <span className="stats-value">{activeTasks}</span>
      </div>
      <div className="stats-item">
        <span className="stats-label">完了率:</span>
        <span className="stats-value">{percentComplete}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${percentComplete}%` }}
          title={`${percentComplete}% 完了`}
        ></div>
      </div>
    </div>
  );
}

// メインのToDoリストコンポーネント
function TodoList() {
  // ローカルストレージから初期ToDoリストを取得
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        console.error('ToDoリストの解析に失敗しました', e);
        return [];
      }
    }
    return [];
  };
  
  const [todos, setTodos] = useState(getInitialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  
  // ToDoリストが変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // 新しいToDoを追加
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos([newTodoItem, ...todos]);
    setNewTodo('');
  };
  
  // フォーム送信ハンドラー
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
  
  // ToDoの完了状態を切り替え
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // ToDoを削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // ToDoを編集
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  
  // 完了済みのToDoをすべて削除
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  // すべてのToDoを完了/未完了に設定
  const toggleAll = () => {
    const areAllCompleted = todos.every(todo => todo.completed);
    setTodos(
      todos.map(todo => ({ ...todo, completed: !areAllCompleted }))
    );
  };
  
  // フィルターに基づいてToDoをフィルタリング
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDoリスト</h1>
      
      {/* 入力フォーム */}
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいタスクを入力"
          className="todo-input"
        />
        <button type="submit" className="btn add-btn">追加</button>
      </form>
      
      {/* フィルター */}
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      
      {/* ToDoリスト */}
      {todos.length > 0 ? (
        <>
          <div className="todo-actions">
            <button onClick={toggleAll} className="btn toggle-all-btn">
              {todos.every(todo => todo.completed) ? 'すべて未完了にする' : 'すべて完了にする'}
            </button>
            <button 
              onClick={clearCompleted} 
              className="btn clear-btn"
              disabled={!todos.some(todo => todo.completed)}
            >
              完了済みを削除
            </button>
          </div>
          
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
          
          {filteredTodos.length === 0 && (
            <p className="empty-message">
              {filter === 'all' 
                ? 'ToDoリストが空です' 
                : filter === 'active' 
                  ? '未完了のタスクはありません' 
                  : '完了済みのタスクはありません'}
            </p>
          )}
          
          {/* タスク統計 */}
          <TodoStats todos={todos} />
        </>
      ) : (
        <p className="empty-message">ToDoリストが空です。新しいタスクを追加してください。</p>
      )}
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return (
    <div className="app">
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
          }
          
          .app {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .todo-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          
          .todo-title {
            text-align: center;
            margin-bottom: 20px;
            color: #2c3e50;
          }
          
          .todo-form {
            display: flex;
            margin-bottom: 20px;
          }
          
          .todo-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          }
          
          .btn {
            padding: 8px 12px;
            margin-left: 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }
          
          .add-btn {
            background-color: #3498db;
            color: white;
          }
          
          .add-btn:hover {
            background-color: #2980b9;
          }
          
          .todo-filter {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .filter-btn {
            background-color: #f8f9fa;
            color: #333;
            margin: 0 5px;
          }
          
          .filter-btn.active {
            background-color: #3498db;
            color: white;
          }
          
          .todo-actions {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          
          .toggle-all-btn {
            background-color: #6c757d;
            color: white;
          }
          
          .clear-btn {
            background-color: #dc3545;
            color: white;
          }
          
          .clear-btn:disabled {
            background-color: #f8f9fa;
            color: #6c757d;
            cursor: not-allowed;
          }
          
          .todo-list {
            list-style-type: none;
          }
          
          .todo-item {
            display: flex;
            padding: 10px;
            border-bottom: 1px solid #eee;
            align-items: center;
          }
          
          .todo-item.completed .todo-text {
            text-decoration: line-through;
            color: #6c757d;
          }
          
          .todo-checkbox {
            margin-right: 10px;
          }
          
          .todo-content {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;
          }
          
          .todo-text {
            flex: 1;
            word-break: break-word;
          }
          
          .todo-edit {
            display: flex;
            flex: 1;
            align-items: center;
          }
          
          .todo-edit input {
            flex: 1;
            padding: 6px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-right: 5px;
          }
          
          .todo-actions button, .todo-edit button {
            margin-left: 5px;
          }
          
          .edit-btn {
            background-color: #ffc107;
            color: #212529;
          }
          
          .delete-btn {
            background-color: #dc3545;
            color: white;
          }
          
          .save-btn {
            background-color: #28a745;
            color: white;
          }
          
          .cancel-btn {
            background-color: #6c757d;
            color: white;
          }
          
          .empty-message {
            text-align: center;
            margin: 20px 0;
            color: #6c757d;
          }
          
          .todo-stats {
            background-color: #f8f9fa;
            border-radius: 4px;
            padding: 15px;
            margin-top: 20px;
          }
          
          .stats-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }
          
          .progress-bar {
            height: 10px;
            background-color: #e9ecef;
            border-radius: 5px;
            margin-top: 10px;
            overflow: hidden;
          }
          
          .progress {
            height: 100%;
            background-color: #3498db;
            transition: width 0.3s ease;
          }
        `}
      </style>
      
      <TodoList />
    </div>
  );
}
