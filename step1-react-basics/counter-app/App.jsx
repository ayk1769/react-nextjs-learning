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