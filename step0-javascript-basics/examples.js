// 変数宣言
const name = '太郎';  // 変更不可の変数
let age = 30;         // 変更可能な変数

// アロー関数
const greet = (name) => {
  return `こんにちは、${name}さん`;
};

// テンプレートリテラル
console.log(`${name}は${age}歳です`);

// 配列
const fruits = ['リンゴ', 'バナナ', 'オレンジ'];

// mapメソッド
const fruitList = fruits.map((fruit, index) => {
  return `${index + 1}: ${fruit}`;
});
console.log(fruitList);

// filterメソッド
const filteredFruits = fruits.filter(fruit => {
  return fruit.length > 3;
});
console.log(filteredFruits);

// オブジェクト
const person = {
  name: '三郎',
  age: 25,
  hobbies: ['読書', '旅行'],
  greet() {
    return `こんにちは、${this.name}です`;
  }
};
console.log(person.greet());

// 分割代入
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

// 配列の分割代入
const [first, second] = fruits;
console.log(first, second);

// スプレッド構文
const newFruits = [...fruits, 'ブドウ'];
console.log(newFruits);

// 実践課題のサンプル実装
const users = [
  { id: 1, name: '田中', age: 28, active: true },
  { id: 2, name: '鈴木', age: 32, active: false },
  { id: 3, name: '佐藤', age: 24, active: true },
  { id: 4, name: '高橋', age: 36, active: true },
  { id: 5, name: '伊藤', age: 22, active: false }
];

// 1. activeなユーザーだけをフィルタリング
const activeUsers = users.filter(user => user.active);
console.log('Active users:', activeUsers);

// 2. 各ユーザーの名前だけの配列を作成
const userNames = users.map(user => user.name);
console.log('User names:', userNames);

// 3. activeで30歳未満のユーザーを見つける
const youngActiveUsers = users.filter(user => user.active && user.age < 30);
console.log('Young active users:', youngActiveUsers);

// 4. ユーザーの平均年齢を計算
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log('Average age:', averageAge);