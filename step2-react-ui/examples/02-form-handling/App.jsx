// フォームハンドリングの例

import React, { useState } from 'react';

// 基本的なフォーム入力
function BasicForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  // 入力フィールドの変更を処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // formDataの更新
    setFormData({
      ...formData,
      [name]: value
    });
    
    // エラーメッセージをクリア
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // フォームの検証
  const validateForm = () => {
    const newErrors = {};
    
    // ユーザー名の検証
    if (!formData.username.trim()) {
      newErrors.username = 'ユーザー名は必須です';
    } else if (formData.username.length < 3) {
      newErrors.username = 'ユーザー名は3文字以上にしてください';
    }
    
    // メールの検証
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    // パスワードの検証
    if (!formData.password) {
      newErrors.password = 'パスワードは必須です';
    } else if (formData.password.length < 6) {
      newErrors.password = 'パスワードは6文字以上にしてください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // エラーがなければtrue
  };
  
  // フォーム送信の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (isValid) {
      // ここで実際のAPIリクエストなどを行う
      console.log('フォームデータ', formData);
      
      // 送信完了メッセージを表示
      setSubmitted(true);
      
      // フォームをリセット
      setFormData({
        username: '',
        email: '',
        password: ''
      });
      
      // 3秒後にメッセージを非表示
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <div className="form-section">
      <h2>基本的なフォーム</h2>
      
      {submitted && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          borderRadius: '4px', 
          marginBottom: '15px' 
        }}>
          フォームが正常に送信されました！
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">ユーザー名:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

// 複数の入力タイプを持つフォーム
function MultiInputForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    occupation: '',
    interests: [],
    bio: '',
    subscribe: false,
    contactMethod: 'email'
  });
  
  // テキスト、数値、選択フィールドの変更を処理
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'number' ? (value === '' ? '' : parseInt(value, 10)) : value
    });
  };
  
  // チェックボックスの変更を処理
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  // 複数選択のチェックボックスの変更を処理
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      // 興味リストに追加
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      // 興味リストから削除
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };
  
  // ラジオボタンの変更を処理
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // フォーム送信の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('送信されたデータ:', formData);
    
    // ここで実際のAPIリクエストなどを行う
    alert('フォームが送信されました。コンソールでデータを確認してください。');
  };
  
  return (
    <div className="form-section">
      <h2>複数入力フォーム</h2>
      
      <form onSubmit={handleSubmit}>
        {/* テキスト入力 */}
        <div className="form-group">
          <label htmlFor="fullName">氏名:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        
        {/* 数値入力 */}
        <div className="form-group">
          <label htmlFor="age">年齢:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="0"
            max="120"
          />
        </div>
        
        {/* セレクトボックス */}
        <div className="form-group">
          <label htmlFor="gender">性別:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
            <option value="prefer-not-to-say">回答しない</option>
          </select>
        </div>
        
        {/* セレクトボックス（選択肢が多い場合） */}
        <div className="form-group">
          <label htmlFor="occupation">職業:</label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <optgroup label="技術">
              <option value="software-engineer">ソフトウェアエンジニア</option>
              <option value="data-scientist">データサイエンティスト</option>
              <option value="product-manager">プロダクトマネージャー</option>
            </optgroup>
            <optgroup label="クリエイティブ">
              <option value="designer">デザイナー</option>
              <option value="writer">ライター</option>
              <option value="artist">アーティスト</option>
            </optgroup>
            <optgroup label="その他">
              <option value="student">学生</option>
              <option value="teacher">教師</option>
              <option value="other">その他</option>
            </optgroup>
          </select>
        </div>
        
        {/* 複数選択のチェックボックス */}
        <div className="form-group">
          <label>興味のある分野:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="interests"
                value="technology"
                checked={formData.interests.includes('technology')}
                onChange={handleInterestChange}
              />
              テクノロジー
            </label>
            
            <label>
              <input
                type="checkbox"
                name="interests"
                value="art"
                checked={formData.interests.includes('art')}
                onChange={handleInterestChange}
              />
              芸術
            </label>
            
            <label>
              <input
                type="checkbox"
                name="interests"
                value="science"
                checked={formData.interests.includes('science')}
                onChange={handleInterestChange}
              />
              科学
            </label>
            
            <label>
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formData.interests.includes('music')}
                onChange={handleInterestChange}
              />
              音楽
            </label>
            
            <label>
              <input
                type="checkbox"
                name="interests"
                value="sports"
                checked={formData.interests.includes('sports')}
                onChange={handleInterestChange}
              />
              スポーツ
            </label>
          </div>
        </div>
        
        {/* テキストエリア */}
        <div className="form-group">
          <label htmlFor="bio">自己紹介:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        {/* 単一のチェックボックス */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleCheckboxChange}
            />
            ニュースレターを購読する
          </label>
        </div>
        
        {/* ラジオボタン */}
        <div className="form-group">
          <label>連絡方法:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleRadioChange}
              />
              メール
            </label>
            
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleRadioChange}
              />
              電話
            </label>
            
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="sms"
                checked={formData.contactMethod === 'sms'}
                onChange={handleRadioChange}
              />
              SMS
            </label>
          </div>
        </div>
        
        <button type="submit">送信</button>
      </form>
      
      <div className="preview">
        <h3>プレビュー:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

// 動的フォームフィールド
function DynamicForm() {
  const [education, setEducation] = useState([
    { id: 1, institution: '', degree: '', year: '' }
  ]);
  
  // 新しい教育履歴フィールドを追加
  const addEducation = () => {
    setEducation([
      ...education,
      { id: Date.now(), institution: '', degree: '', year: '' }
    ]);
  };
  
  // 教育履歴フィールドを削除
  const removeEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };
  
  // 教育履歴フィールドの変更を処理
  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    
    setEducation(education.map(edu => {
      if (edu.id === id) {
        return { ...edu, [name]: value };
      }
      return edu;
    }));
  };
  
  // フォーム送信の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('教育履歴:', education);
    
    // ここで実際のAPIリクエストなどを行う
    alert('フォームが送信されました。コンソールでデータを確認してください。');
  };
  
  return (
    <div className="form-section">
      <h2>動的フォームフィールド</h2>
      
      <form onSubmit={handleSubmit}>
        <h3>教育履歴</h3>
        
        {education.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <h4>履歴 #{index + 1}</h4>
            
            <div className="form-group">
              <label htmlFor={`institution-${edu.id}`}>教育機関:</label>
              <input
                type="text"
                id={`institution-${edu.id}`}
                name="institution"
                value={edu.institution}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor={`degree-${edu.id}`}>学位/資格:</label>
              <input
                type="text"
                id={`degree-${edu.id}`}
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor={`year-${edu.id}`}>卒業年:</label>
              <input
                type="text"
                id={`year-${edu.id}`}
                name="year"
                value={edu.year}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>
            
            {education.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeEducation(edu.id)}
                className="remove-btn"
              >
                削除
              </button>
            )}
          </div>
        ))}
        
        <button type="button" onClick={addEducation} className="add-btn">
          履歴を追加
        </button>
        
        <div className="form-buttons">
          <button type="submit">送信</button>
        </div>
      </form>
      
      <div className="preview">
        <h3>プレビュー:</h3>
        <pre>{JSON.stringify(education, null, 2)}</pre>
      </div>
    </div>
  );
}

// ファイルアップロードフォーム
function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  
  // ファイル選択の処理
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    // ファイル検証
    if (selectedFile) {
      // ファイルタイプの検証
      if (!selectedFile.type.match('image.*')) {
        setError('画像ファイルを選択してください');
        setFile(null);
        setPreview(null);
        return;
      }
      
      // ファイルサイズの検証 (2MB以下)
      if (selectedFile.size > 2 * 1024 * 1024) {
        setError('ファイルサイズは2MB以下にしてください');
        setFile(null);
        setPreview(null);
        return;
      }
      
      setFile(selectedFile);
      setError(null);
      
      // 画像プレビューの作成
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  
  // フォーム送信の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('ファイルを選択してください');
      return;
    }
    
    // ここで実際のAPIリクエストなどを行う
    // 通常はFormDataオブジェクトを使用してファイルをアップロード
    const formData = new FormData();
    formData.append('file', file);
    
    console.log('アップロードするファイル:', file);
    alert('ファイルがアップロードされました（模擬）。コンソールでファイル情報を確認してください。');
  };
  
  return (
    <div className="form-section">
      <h2>ファイルアップロード</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file">画像を選択:</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <small>最大ファイルサイズ: 2MB</small>
          {error && <div className="error-message">{error}</div>}
        </div>
        
        {preview && (
          <div className="preview-image">
            <h4>プレビュー:</h4>
            <img 
              src={preview} 
              alt="プレビュー" 
              style={{ maxWidth: '100%', maxHeight: '200px' }} 
            />
          </div>
        )}
        
        <button type="submit" disabled={!file}>アップロード</button>
      </form>
      
      {file && (
        <div className="file-info">
          <h3>ファイル情報:</h3>
          <p>名前: {file.name}</p>
          <p>タイプ: {file.type}</p>
          <p>サイズ: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

// メインのAppコンポーネント
export default function App() {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ textAlign: 'center' }}>Reactフォームハンドリング</h1>
      
      <style>
        {`
          .form-section {
            margin-bottom: 40px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
          
          .form-group {
            margin-bottom: 15px;
          }
          
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          
          input, select, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          }
          
          input.error, select.error, textarea.error {
            border-color: #dc3545;
          }
          
          .error-message {
            color: #dc3545;
            font-size: 14px;
            margin-top: 5px;
          }
          
          button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-right: 10px;
          }
          
          button:hover {
            background-color: #45a049;
          }
          
          button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
          }
          
          .remove-btn {
            background-color: #f44336;
          }
          
          .remove-btn:hover {
            background-color: #d32f2f;
          }
          
          .add-btn {
            background-color: #2196F3;
            margin-bottom: 20px;
          }
          
          .add-btn:hover {
            background-color: #0b7dda;
          }
          
          .form-buttons {
            margin-top: 20px;
          }
          
          .preview {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 4px;
          }
          
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          
          .checkbox-group, .radio-group {
            display: flex;
            flex-direction: column;
          }
          
          .checkbox-group label, .radio-group label {
            margin-bottom: 5px;
            font-weight: normal;
          }
          
          .checkbox-group input, .radio-group input {
            width: auto;
            margin-right: 10px;
          }
          
          .education-item {
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #fff;
          }
          
          h4 {
            margin-top: 0;
          }
        `}
      </style>
      
      <BasicForm />
      <MultiInputForm />
      <DynamicForm />
      <FileUploadForm />
    </div>
  );
}
