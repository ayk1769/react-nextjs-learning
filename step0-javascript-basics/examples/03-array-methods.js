// 配列操作のメソッド例

// 基本的な配列
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'いちご'];
console.log('基本配列:', fruits);

// ------------ 配列の要素へのアクセス ------------
console.log('\n--- 配列の要素へのアクセス ---');
console.log('最初の要素:', fruits[0]); // 'りんご'
console.log('3番目の要素:', fruits[2]); // 'オレンジ'
console.log('最後の要素:', fruits[fruits.length - 1]); // 'いちご'

// ------------ 配列の変更 ------------
console.log('\n--- 配列の変更 ---');

// 要素の追加 (push - 末尾に追加)
fruits.push('メロン');
console.log('pushで追加後:', fruits);

// 要素の追加 (unshift - 先頭に追加)
fruits.unshift('パイナップル');
console.log('unshiftで追加後:', fruits);

// 要素の削除 (pop - 末尾から削除)
const lastFruit = fruits.pop();
console.log('popで削除された要素:', lastFruit);
console.log('popで削除後:', fruits);

// 要素の削除 (shift - 先頭から削除)
const firstFruit = fruits.shift();
console.log('shiftで削除された要素:', firstFruit);
console.log('shiftで削除後:', fruits);

// 特定の位置の要素の削除/置換 (splice)
// splice(開始インデックス, 削除する要素数, 追加する要素...)
const removed = fruits.splice(1, 2, 'キウイ', 'マンゴー');
console.log('spliceで削除された要素:', removed);
console.log('splice後:', fruits);

// ------------ 配列の反復処理 ------------
console.log('\n--- 配列の反復処理 ---');

// for文による反復
console.log('for文:');
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// for...of による反復 (値を取得)
console.log('\nfor...of:');
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach による反復
console.log('\nforEach:');
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// ------------ 配列の変換 (map) ------------
console.log('\n--- map による変換 ---');

// 各要素を大文字に変換
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('大文字に変換:', uppercaseFruits);

// 各要素にインデックスを付加
const indexedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log('インデックス付き:', indexedFruits);

// ------------ 配列のフィルタリング (filter) ------------
console.log('\n--- filter によるフィルタリング ---');

// 4文字以上の果物をフィルタリング
const longNameFruits = fruits.filter(fruit => fruit.length >= 4);
console.log('長い名前の果物:', longNameFruits);

// ------------ 配列の検索 ------------
console.log('\n--- 配列の検索 ---');

// インデックスを検索 (indexOf)
const orangeIndex = fruits.indexOf('オレンジ');
console.log("'オレンジ'のインデックス:", orangeIndex); // -1 (見つからない場合)

// 要素の存在確認 (includes)
const hasMango = fruits.includes('マンゴー');
console.log("'マンゴー'は含まれていますか?", hasMango);

// 条件に合う要素を検索 (find)
const longFruit = fruits.find(fruit => fruit.length > 3);
console.log('最初の長い名前の果物:', longFruit);

// 条件に合う要素のインデックスを検索 (findIndex)
const longFruitIndex = fruits.findIndex(fruit => fruit.length > 3);
console.log('最初の長い名前の果物のインデックス:', longFruitIndex);

// ------------ 配列の結合と分割 ------------
console.log('\n--- 配列の結合と分割 ---');

// 配列の結合 (concat)
const moreFruits = ['パパイヤ', 'ドラゴンフルーツ'];
const allFruits = fruits.concat(moreFruits);
console.log('結合された配列:', allFruits);

// スプレッド構文を使った結合
const evenMoreFruits = [...fruits, ...moreFruits, 'ライチ'];
console.log('スプレッド構文で結合:', evenMoreFruits);

// 配列の一部を取得 (slice)
const someFruits = fruits.slice(1, 3); // インデックス1から3未満まで
console.log('slice(1, 3)の結果:', someFruits);

// ------------ 配列の並び替え ------------
console.log('\n--- 配列の並び替え ---');

// 配列の反転 (reverse)
const reversedFruits = [...fruits].reverse(); // 元の配列を変更しないためコピーを作成
console.log('反転された配列:', reversedFruits);

// 配列の並び替え (sort)
const sortedFruits = [...fruits].sort();
console.log('ソートされた配列:', sortedFruits);

// カスタム比較関数によるソート (長さの降順)
const lengthSortedFruits = [...fruits].sort((a, b) => b.length - a.length);
console.log('長さでソートされた配列:', lengthSortedFruits);

// ------------ 配列の集約 (reduce) ------------
console.log('\n--- reduce による集約 ---');

// 数値配列の合計
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('合計:', sum);

// 文字列の連結
const fruitString = fruits.reduce((result, fruit, index) => {
  return index === 0 ? fruit : `${result}、${fruit}`;
}, '');
console.log('連結された果物:', fruitString);

// オブジェクトへの変換 (インデックスをキーとして)
const fruitObject = fruits.reduce((obj, fruit, index) => {
  obj[`fruit${index + 1}`] = fruit;
  return obj;
}, {});
console.log('オブジェクトに変換:', fruitObject);

// 文字数でグループ化
const groupedByLength = fruits.reduce((groups, fruit) => {
  const length = fruit.length;
  if (!groups[length]) {
    groups[length] = [];
  }
  groups[length].push(fruit);
  return groups;
}, {});
console.log('文字数でグループ化:', groupedByLength);

// 実行方法:
// node 03-array-methods.js
