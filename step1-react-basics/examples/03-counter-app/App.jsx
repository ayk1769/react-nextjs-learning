// カウンターアプリの実装例

import React, { useState } from 'react';

// ボタンコンポーネント
function Button({ text, onClick, color = 'blue' }) {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '8px 15px',
    margin: '0 5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };
  
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

// カウント表示コンポーネント
function Display({ count, label = 'カウント' }) {
  const displayStyle = {
    fontSize: '24px',
    margin: '20px 0',
    padding: '10px',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8'
  };
  
  return (
    <div style={displayStyle}>
      <span>{label}: </span>
      <span style={{ fontWeight: 'bold', color: count < 0 ? 'red' : 'green' }}>
        {count}
      </span>
    </div>
  );
}

// ステップ入力コンポーネント
function StepInput({ step, onStepChange }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>
        増減量:
        <input
          type="number"
          value={step}
          onChange={(e) => onStepChange(parseInt(e.target.value) || 1)}
          style={{ 
            marginLeft: '10px', 
            width: '50px',
            padding: '5px'
          }}
        />
      </label>
    </div>
  );
}

// メインのカウンターコンポーネント
function Counter() {
  // カウント状態
  const [count, setCount] = useState(0);
  
  // ステップ状態（増減量）
  const [step, setStep] = useState(1);
  
  // カウントの最大・最小値
  const [limits, setLimits] = useState({
    min: -10,
    max: 10
  });
  
  // カウント履歴
  const [history, setHistory] = useState([]);
  
  // カウントを増やす関数
  const increment = () => {
    if (count + step <= limits.max) {
      const newCount = count + step;
      setCount(newCount);
      setHistory([...history, { action: '増加', from: count, to: newCount }]);
    } else {
      alert(`最大値 (${limits.max}) を超えることはできません`);
    }
  };
  
  // カウントを減らす関数
  const decrement = () => {
    if (count - step >= limits.min) {
      const newCount = count - step;
      setCount(newCount);
      setHistory([...history, { action: '減少', from: count, to: newCount }]);
    } else {
      alert(`最小値 (${limits.min}) を下回ることはできません`);
    }
  };
  
  // カウントをリセットする関数
  const reset = () => {
    const oldCount = count;
    setCount(0);
    setHistory([...history, { action: 'リセット', from: oldCount, to: 0 }]);
  };
  
  // 履歴をクリアする関数
  const clearHistory = () => {
    setHistory([]);
  };
  
  // 最大値・最小値を設定する関数
  const handleLimitChange = (type, value) => {
    setLimits({
      ...limits,
      [type]: parseInt(value)
    });
  };
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>カウンターアプリ</h1>
      
      {/* カウント表示 */}
      <Display count={count} />
      
      {/* ボタングループ */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button text={`+${step}`} onClick={increment} color="#4CAF50" />
        <Button text={`-${step}`} onClick={decrement} color="#F44336" />
        <Button text="リセット" onClick={reset} color="#9E9E9E" />
      </div>
      
      {/* ステップ入力 */}
      <StepInput step={step} onStepChange={setStep} />
      
      {/* 最大値・最小値設定 */}
      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>限界値設定</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>
            最小値:
            <input 
              type="number"
              value={limits.min}
              onChange={(e) => handleLimitChange('min', e.target.value)}
              style={{ marginLeft: '10px', width: '60px' }}
            />
          </label>
          <label>
            最大値:
            <input 
              type="number"
              value={limits.max}
              onChange={(e) => handleLimitChange('max', e.target.value)}
              style={{ marginLeft: '10px', width: '60px' }}
            />
          </label>
        </div>
      </div>
      
      {/* 履歴表示 */}
      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>履歴</h3>
          <Button text="履歴クリア" onClick={clearHistory} color="#9C27B0" />
        </div>
        
        {history.length === 0 ? (
          <p>まだ履歴はありません</p>
        ) : (
          <ul style={{ maxHeight: '200px', overflowY: 'auto', padding: '0 20px' }}>
            {history.map((item, index) => (
              <li key={index}>
                {item.action}: {item.from} → {item.to}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return <Counter />;
}
