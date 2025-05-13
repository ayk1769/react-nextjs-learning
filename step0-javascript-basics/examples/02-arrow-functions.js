// アロー関数の使用例

// 従来の関数宣言
function greet(name) {
  return `こんにちは、${name}さん`;
}
console.log(greet('太郎'));

// 関数式
const greetExpression = function(name) {
  return `こんにちは、${name}さん`;
};
console.log(greetExpression('花子'));

// アロー関数（ブロック文と明示的なreturn）
const greetArrow = (name) => {
  return `こんにちは、${name}さん`;
};
console.log(greetArrow('次郎'));

// アロー関数（省略形 - 引数が1つの場合は括弧を省略可能）
const greetArrowShort = name => `こんにちは、${name}さん`;
console.log(greetArrowShort('三郎'));

// アロー関数（引数なし）
const sayHello = () => 'こんにちは！';
console.log(sayHello());

// アロー関数（複数の引数）
const add = (a, b) => a + b;
console.log('1 + 2 =', add(1, 2));

// 高階関数とアロー関数
const numbers = [1, 2, 3, 4, 5];

// 各要素を2倍する
const doubled = numbers.map(num => num * 2);
console.log('2倍した配列:', doubled);

// 偶数のみをフィルタリング
const evens = numbers.filter(num => num % 2 === 0);
console.log('偶数のみ:', evens);

// すべての要素の合計
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('合計:', sum);

// アロー関数とthisのバインド
// 通常の関数とアロー関数でのthisの動作の違い

// 通常の関数では、thisは呼び出し元によって変わる
const person = {
  name: '太郎',
  sayNameFunction: function() {
    console.log('通常の関数 - this.name:', this.name);
  },
  sayNameArrow: () => {
    // アロー関数ではthisは定義時のコンテキストから継承
    // ここではグローバルスコープ（またはmoduleスコープ）のthis
    console.log('アロー関数 - this.name:', this.name); // this.nameはundefined
  },
  sayNameDelayed: function() {
    setTimeout(function() {
      // 通常の関数では、setTimeoutのコールバック内のthisはWindowオブジェクト
      console.log('通常の関数のタイムアウト - this.name:', this.name); // undefined
    }, 100);
    
    setTimeout(() => {
      // アロー関数ではthisは外側のスコープから継承するため、personオブジェクト
      console.log('アロー関数のタイムアウト - this.name:', this.name); // '太郎'
    }, 100);
  }
};

person.sayNameFunction(); // '太郎' と出力される
person.sayNameArrow();    // undefined と出力される（ブラウザでは）
person.sayNameDelayed();  // setTimeout内で2つの異なる結果が出力される

// 実行方法:
// node 02-arrow-functions.js
