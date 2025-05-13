// JavaScript変数の使用例

// constは再代入できない変数を宣言します
const name = '太郎';
console.log('名前:', name);

// constで宣言したオブジェクトや配列の中身は変更可能です
const person = { name: '太郎', age: 30 };
person.age = 31; // OK - オブジェクトのプロパティは変更可能
console.log('人物情報:', person);

// constで宣言した配列の中身も変更可能です
const fruits = ['りんご', 'バナナ'];
fruits.push('オレンジ'); // OK - 配列に要素を追加可能
console.log('果物:', fruits);

// letは再代入可能な変数を宣言します
let age = 30;
console.log('年齢（変更前）:', age);
age = 31; // OK - letで宣言した変数は再代入可能
console.log('年齢（変更後）:', age);

// varは古い宣言方法でスコープに注意が必要です（あまり使わない方が良い）
var oldVar = '古い変数';
console.log('古い変数:', oldVar);

// スコープの例
function scopeExample() {
  const functionScoped = '関数スコープ';
  
  if (true) {
    const blockScoped = 'ブロックスコープ';
    let alsoBlockScoped = 'これもブロックスコープ';
    var notBlockScoped = 'ブロックスコープではない';
    
    console.log('ブロック内からアクセス:', blockScoped);
    console.log('ブロック内からアクセス:', functionScoped);
  }
  
  // console.log(blockScoped); // エラー！ブロックスコープ外からはアクセスできない
  // console.log(alsoBlockScoped); // エラー！ブロックスコープ外からはアクセスできない
  console.log('関数内からアクセス:', notBlockScoped); // OK - varはブロックスコープを無視
}

scopeExample();

// 実行方法:
// node 01-variables.js
