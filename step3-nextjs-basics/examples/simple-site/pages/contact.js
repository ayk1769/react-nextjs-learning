// pages/contact.js - お問い合わせページ
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Contact() {
  // フォームの状態
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // 入力エラーの状態
  const [errors, setErrors] = useState({});
  
  // 送信完了の状態
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // 入力フィールドの変更を処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // 入力時にエラーをクリア
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
    
    // 名前の検証
    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です';
    }
    
    // メールアドレスの検証
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    // 件名の検証
    if (!formData.subject.trim()) {
      newErrors.subject = '件名は必須です';
    }
    
    // メッセージの検証
    if (!formData.message.trim()) {
      newErrors.message = 'メッセージは必須です';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // フォーム送信の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 実際のアプリではここでAPIリクエストを送信する
      console.log('送信データ:', formData);
      
      // 送信完了メッセージを表示
      setIsSubmitted(true);
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>お問い合わせ - Next.js入門</title>
        <meta name="description" content="Next.jsの学習に関するお問い合わせページです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>お問い合わせ</h1>
        
        <p className={styles.description}>
          質問や感想などがありましたら、以下のフォームからお気軽にお問い合わせください。
        </p>
        
        {isSubmitted ? (
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <div style={{ 
              backgroundColor: '#d4edda', 
              color: '#155724', 
              padding: '20px', 
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <h2>お問い合わせありがとうございます！</h2>
              <p>メッセージが送信されました。できるだけ早くご返信いたします。</p>
            </div>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              新しいお問い合わせ
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                お名前 <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: errors.name ? '1px solid #dc3545' : '1px solid #ced4da',
                  borderRadius: '4px'
                }}
              />
              {errors.name && <div style={{ color: '#dc3545', marginTop: '5px' }}>{errors.name}</div>}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                メールアドレス <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da',
                  borderRadius: '4px'
                }}
              />
              {errors.email && <div style={{ color: '#dc3545', marginTop: '5px' }}>{errors.email}</div>}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                件名 <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: errors.subject ? '1px solid #dc3545' : '1px solid #ced4da',
                  borderRadius: '4px'
                }}
              />
              {errors.subject && <div style={{ color: '#dc3545', marginTop: '5px' }}>{errors.subject}</div>}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                メッセージ <span style={{ color: 'red' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: errors.message ? '1px solid #dc3545' : '1px solid #ced4da',
                  borderRadius: '4px'
                }}
              />
              {errors.message && <div style={{ color: '#dc3545', marginTop: '5px' }}>{errors.message}</div>}
            </div>
            
            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              送信する
            </button>
          </form>
        )}
        
        <div className={styles.backToHome}>
          <Link href="/">
            &larr; ホームに戻る
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Next.js入門 - サンプルプロジェクト
        </p>
      </footer>
    </div>
  );
}
