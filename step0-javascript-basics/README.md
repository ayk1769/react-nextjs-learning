# STEP 0: JavaScript基礎復習

Reactを学ぶ前に、モダンなJavaScript（ES6以降）の基本を理解しておくことが重要です。このセクションでは、Reactで頻繁に使われるJavaScriptの機能について学びます。

## ✅ 学ぶこと

- const / letの使い分け
- 関数宣言 vs アロー関数
- 配列の操作（map / filter）
- オブジェクトの使い方
- 分割代入、スプレッド構文、テンプレートリテラル

## 📝 コア概念

### 変数宣言（const / let）

```javascript
// constは再代入できない変数を宣言します
const name = '太郎';
// name = '次郎'; // これはエラーになります

// letは再代入可能な変数を宣言します
let age = 30;
age = 31; // OK
```

### アロー関数

```javascript
// 従来の関数宣言
function greet(name) {
  return `こんにちは、${name}さん`;
}

// アロー関数
const greet = (name) => {
  return `こんにちは、${name}さん`;
};

// 省略形（本体が1行の場合）
const greet = name => `こんにちは、${name}さん`;
```

### 配列メソッド（map / filter）

```javascript
const numbers = [1, 2, 3, 4, 5];

// mapは配列の各要素に関数を適用し、新しい配列を返します
const doubled = numbers.map(num => num * 2);
// doubled: [2, 4, 6, 8, 10]

// filterは条件に一致する要素だけを含む新しい配列を返します
const evens = numbers.filter(num => num % 2 === 0);
// evens: [2, 4]
```

### 分割代入

```javascript
// オブジェクトの分割代入
const person = { name: '花子', age: 25 };
const { name, age } = person;
// name: '花子', age: 25

// 配列の分割代入
const colors = ['赤', '緑', '青'];
const [red, green, blue] = colors;
// red: '赤', green: '緑', blue: '青'
```

### スプレッド構文

```javascript
// 配列のコピーと結合
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// オブジェクトのコピーと結合
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### テンプレートリテラル

```javascript
const name = '太郎';
const age = 30;

// テンプレートリテラルを使うと、変数を文字列に埋め込むことができます
const message = `${name}は${age}歳です`;
// message: '太郎は30歳です'
```

## 💻 実践課題

次のJavaScriptの課題に挑戦してみましょう。これらの概念はReactでコンポーネントを作成する際に頻繁に使用します。

### 課題1: ユーザーリストのフィルタリング

```javascript
// ユーザーの配列があります
const users = [
  { id: 1, name: '田中', age: 28, active: true },
  { id: 2, name: '鈴木', age: 32, active: false },
  { id: 3, name: '佐藤', age: 24, active: true },
  { id: 4, name: '高橋', age: 36, active: true },
  { id: 5, name: '伊藤', age: 22, active: false }
];

// 1. activeなユーザーだけをフィルタリングしてください
const activeUsers = users.filter(user => user.active);

// 2. 各ユーザーの名前だけの配列を作成してください
const userNames = users.map(user => user.name);

// 3. activeで30歳未満のユーザーを見つけてください
const youngActiveUsers = users.filter(user => user.active && user.age < 30);

// 4. ユーザーの平均年齢を計算してください
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
```

## 📚 参考リソース

- [JavaScript入門（MDN）](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)
- [ドットインストール：JavaScript入門](https://dotinstall.com/lessons/basic_javascript_v5)
- [JavaScript.info](https://ja.javascript.info/)

## 次のステップ

JavaScriptの基本を理解したら、次は[STEP 1: Reactの仕組みを理解](../step1-react-basics/README.md)に進みましょう。