// イベントハンドリングの例

import React, { useState } from 'react';

// 1. 基本的なクリックイベント
function ClickEvents() {
  // クリックカウンター
  const [clicks, setClicks] = useState(0);
  
  // インラインで定義したイベントハンドラー
  const handleInlineClick = () => {
    alert('インラインで定義したイベントハンドラーがトリガーされました！');
  };
  
  // 名前付き関数でのイベントハンドラー
  function handleNamedClick() {
    alert('名前付き関数のイベントハンドラーがトリガーされました！');
  }
  
  // カウントを更新するイベントハンドラー
  const incrementCount = () => {
    setClicks(prevClicks => prevClicks + 1);
  };
  
  return (
    <div className="example-section">
      <h2>クリックイベント</h2>
      
      {/* インラインで直接記述 */}
      <button onClick={() => alert('ボタンがクリックされました！')}>
        インラインアラート
      </button>
      
      {/* 定義済み関数を参照 */}
      <button onClick={handleInlineClick}>インライン関数</button>
      <button onClick={handleNamedClick}>名前付き関数</button>
      
      {/* カウントの更新 */}
      <div>
        <button onClick={incrementCount}>クリックカウント: {clicks}</button>
      </div>
      
      {/* イベントハンドラーに引数を渡す */}
      <button onClick={() => alert(`引数付きアラート: ${new Date().toLocaleTimeString()}`)}>
        現在時刻をアラート
      </button>
    </div>
  );
}

// 2. フォームイベント
function FormEvents() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  
  // inputのchangeイベントハンドラー
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  
  // フォームのsubmitイベントハンドラー
  const handleSubmit = (event) => {
    event.preventDefault(); // ページのリロードを防止
    setSubmittedText(inputText);
    // フォーム送信後に入力をクリア
    setInputText('');
  };
  
  // selectのchangeイベントハンドラー
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  // checkboxのchangeイベントハンドラー
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  
  return (
    <div className="example-section">
      <h2>フォームイベント</h2>
      
      <form onSubmit={handleSubmit}>
        {/* テキスト入力 */}
        <div>
          <label>
            テキスト入力:
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="ここに入力してください"
            />
          </label>
        </div>
        
        {/* セレクトボックス */}
        <div>
          <label>
            選択:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="option1">オプション1</option>
              <option value="option2">オプション2</option>
              <option value="option3">オプション3</option>
            </select>
          </label>
        </div>
        
        {/* チェックボックス */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            同意します
          </label>
        </div>
        
        {/* 送信ボタン */}
        <button type="submit">送信</button>
      </form>
      
      {/* 結果表示 */}
      <div>
        <h3>フォーム状態:</h3>
        <p>入力テキスト: {inputText}</p>
        <p>送信されたテキスト: {submittedText}</p>
        <p>選択されたオプション: {selectedOption}</p>
        <p>チェック状態: {isChecked ? '同意済み' : '未同意'}</p>
      </div>
    </div>
  );
}

// 3. マウスイベント
function MouseEvents() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // マウス移動イベントハンドラー
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  
  // ホバーイベントハンドラー
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // ドラッグイベントハンドラー
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  return (
    <div className="example-section">
      <h2>マウスイベント</h2>
      
      {/* マウス移動のトラッキング */}
      <div
        onMouseMove={handleMouseMove}
        style={{
          height: '100px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px 0'
        }}
      >
        このエリア内でマウスを動かしてください
        <p>マウス位置: X={position.x}, Y={position.y}</p>
      </div>
      
      {/* ホバーエフェクト */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '20px',
          backgroundColor: isHovered ? '#e0f7fa' : '#f5f5f5',
          border: `1px solid ${isHovered ? '#26c6da' : '#ccc'}`,
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        {isHovered ? 'ホバー中！' : 'ここにホバーしてください'}
      </div>
      
      {/* ドラッグイベント */}
      <div
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          padding: '20px',
          backgroundColor: isDragging ? '#ffecb3' : '#fffde7',
          border: `1px solid ${isDragging ? '#ffc107' : '#e0e0e0'}`,
          borderRadius: '4px',
          cursor: 'grab',
          userSelect: 'none',
          margin: '10px 0'
        }}
      >
        {isDragging ? 'ドラッグ中！' : 'この要素をドラッグしてください'}
      </div>
    </div>
  );
}

// 4. キーボードイベント
function KeyboardEvents() {
  const [pressedKey, setPressedKey] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  // キーダウンイベントハンドラー
  const handleKeyDown = (event) => {
    setPressedKey(`${event.key} (keyCode: ${event.keyCode})`);
    
    // Escキーでクリア
    if (event.key === 'Escape') {
      setPressedKey('');
      setInputValue('');
    }
  };
  
  // 入力フィールドのchangeイベントハンドラー
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  return (
    <div className="example-section">
      <h2>キーボードイベント</h2>
      
      <div>
        <p>任意のキーを押してください (Escでクリア)</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="ここに入力"
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        />
        <p>最後に押されたキー: {pressedKey || 'なし'}</p>
      </div>
    </div>
  );
}

// 5. イベント伝播 (バブリング) の例
function EventPropagation() {
  const [logs, setLogs] = useState([]);
  
  // ログを追加する関数
  const addLog = (message) => {
    setLogs(prevLogs => [...prevLogs, message]);
  };
  
  // イベントハンドラー
  const handleOuterClick = (e) => {
    addLog('外側の要素がクリックされました');
  };
  
  const handleMiddleClick = (e) => {
    addLog('中間の要素がクリックされました');
    // e.stopPropagation(); // 伝播を止める場合はこの行をコメント解除
  };
  
  const handleInnerClick = (e) => {
    addLog('内側の要素がクリックされました');
    // e.stopPropagation(); // 伝播を止める場合はこの行をコメント解除
  };
  
  return (
    <div className="example-section">
      <h2>イベント伝播 (バブリング)</h2>
      
      <div 
        onClick={handleOuterClick}
        style={{
          padding: '30px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc'
        }}
      >
        外側の要素
        <div 
          onClick={handleMiddleClick}
          style={{
            padding: '20px',
            margin: '10px',
            backgroundColor: '#e0e0e0',
            border: '1px solid #bbb'
          }}
        >
          中間の要素
          <div 
            onClick={handleInnerClick}
            style={{
              padding: '10px',
              margin: '10px',
              backgroundColor: '#d0d0d0',
              border: '1px solid #aaa'
            }}
          >
            内側の要素
          </div>
        </div>
      </div>
      
      <div>
        <h3>イベントログ:</h3>
        <button onClick={() => setLogs([])}>ログをクリア</button>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
      
      <p style={{ marginTop: '10px', color: '#666' }}>
        注: デフォルトでは、内側の要素をクリックすると、イベントは内側から外側に「バブルアップ」します。
        <code>e.stopPropagation()</code>を使用して、このバブリングを停止できます。
      </p>
    </div>
  );
}

// 6. イベントハンドラーでの非同期処理
function AsyncEvents() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  // 非同期ロード関数（模擬）
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // 1〜3秒のランダムな遅延
      const delay = 1000 + Math.random() * 2000;
      
      setTimeout(() => {
        // 80%の確率で成功、20%の確率で失敗
        if (Math.random() > 0.2) {
          resolve({
            id: Math.floor(Math.random() * 1000),
            message: 'データの取得に成功しました',
            timestamp: new Date().toISOString()
          });
        } else {
          reject(new Error('データの取得に失敗しました'));
        }
      }, delay);
    });
  };
  
  // 非同期イベントハンドラー
  const handleFetchClick = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await fetchData();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="example-section">
      <h2>非同期イベントハンドラー</h2>
      
      <button 
        onClick={handleFetchClick} 
        disabled={isLoading}
        style={{
          padding: '10px 15px',
          backgroundColor: isLoading ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? 'データ取得中...' : 'データを取得'}
      </button>
      
      {isLoading && (
        <div style={{ margin: '10px 0' }}>
          読み込み中...
        </div>
      )}
      
      {error && (
        <div style={{ margin: '10px 0', color: 'red' }}>
          エラー: {error}
        </div>
      )}
      
      {data && (
        <div style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <h3>取得したデータ:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Reactのイベントハンドリング</h1>
      
      <ClickEvents />
      <hr />
      
      <FormEvents />
      <hr />
      
      <MouseEvents />
      <hr />
      
      <KeyboardEvents />
      <hr />
      
      <EventPropagation />
      <hr />
      
      <AsyncEvents />
    </div>
  );
}
