// ES6の便利な機能: 分割代入、スプレッド構文、テンプレートリテラル

// ------------ テンプレートリテラル ------------
console.log('\n--- テンプレートリテラル ---');

const name = '太郎';
const age = 30;

// 従来の方法
const greetingOld = 'こんにちは、' + name + 'さん。あなたは' + age + '歳です。';
console.log('従来の連結:', greetingOld);

// テンプレートリテラル
const greeting = `こんにちは、${name}さん。あなたは${age}歳です。`;
console.log('テンプレートリテラル:', greeting);

// 複数行のテキスト
const multiline = `
これは
複数行の
テキストです。
`;
console.log('複数行テキスト:', multiline);

// 式の埋め込み
const sum = `1 + 2 = ${1 + 2}`;
console.log('式の評価:', sum);

// タグ付きテンプレート
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return `${result}${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`;
  }, '');
}

const highlighted = highlight`こんにちは、${name}さん。あなたは${age}歳です。`;
console.log('タグ付きテンプレート:', highlighted);

// ------------ 分割代入（オブジェクト） ------------
console.log('\n--- オブジェクトの分割代入 ---');

const person = {
  firstName: '太郎',
  lastName: '山田',
  age: 30,
  address: {
    city: '東京',
    country: '日本'
  }
};

// 基本的な分割代入
const { firstName, lastName } = person;
console.log('firstName:', firstName); // 太郎
console.log('lastName:', lastName);   // 山田

// 変数名を変更する
const { firstName: givenName, lastName: familyName } = person;
console.log('givenName:', givenName); // 太郎
console.log('familyName:', familyName); // 山田

// デフォルト値を設定
const { middleName = '未設定' } = person;
console.log('middleName:', middleName); // 未設定

// ネストしたオブジェクトの分割代入
const { address: { city, country } } = person;
console.log('city:', city);       // 東京
console.log('country:', country); // 日本

// 残りのプロパティを取得
const { firstName: fn, ...rest } = person;
console.log('fn:', fn);   // 太郎
console.log('rest:', rest); // { lastName: '山田', age: 30, address: { city: '東京', country: '日本' } }

// 関数の引数での分割代入
function printPersonInfo({ firstName, lastName, age = 20 }) {
  console.log(`${lastName} ${firstName}, ${age}歳`);
}
printPersonInfo(person); // 山田 太郎, 30歳

// ------------ 分割代入（配列） ------------
console.log('\n--- 配列の分割代入 ---');

const colors = ['赤', '緑', '青', '黄', '紫'];

// 基本的な分割代入
const [red, green, blue] = colors;
console.log('red:', red);     // 赤
console.log('green:', green); // 緑
console.log('blue:', blue);   // 青

// 要素のスキップ
const [, , thirdColor] = colors;
console.log('thirdColor:', thirdColor); // 青

// デフォルト値
const [first, second, third, fourth, fifth, sixth = 'オレンジ'] = colors;
console.log('sixth:', sixth); // オレンジ

// 残りの要素を取得
const [primary, ...secondaryColors] = colors;
console.log('primary:', primary);           // 赤
console.log('secondaryColors:', secondaryColors); // [ '緑', '青', '黄', '紫' ]

// 値の交換
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('a:', a); // 2
console.log('b:', b); // 1

// 関数からの複数の値の返却
function getCoordinates() {
  return [10, 20];
}
const [x, y] = getCoordinates();
console.log('x:', x); // 10
console.log('y:', y); // 20

// ------------ スプレッド構文 ------------
console.log('\n--- スプレッド構文 ---');

// 配列のコピー
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log('originalArray:', originalArray);
console.log('copyArray:', copyArray);

// 配列の結合
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('combinedArray:', combinedArray); // [1, 2, 3, 4, 5, 6]

// 配列への要素の追加
const extendedArray = [...array1, 10, ...array2];
console.log('extendedArray:', extendedArray); // [1, 2, 3, 10, 4, 5, 6]

// 関数の引数への展開
function sum3(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log('sum3(...nums):', sum3(...nums)); // 6

// オブジェクトのコピー
const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };
console.log('originalObj:', originalObj);
console.log('copyObj:', copyObj);

// オブジェクトの結合
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log('mergedObj:', mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// プロパティの上書き
const overrideObj = { ...obj1, b: 5 };
console.log('overrideObj:', overrideObj); // { a: 1, b: 5 }

// 複雑なオブジェクトの結合と上書き
const userData = { name: '山田太郎', age: 30 };
const defaultSettings = { theme: 'light', notifications: true };
const userSettings = { theme: 'dark' };

const finalSettings = { ...defaultSettings, ...userSettings, lastUpdated: new Date() };
console.log('finalSettings:', finalSettings);

// 実用例: イミュータビリティを保ちながら状態を更新する
const initialState = {
  user: {
    name: '山田太郎',
    preferences: {
      theme: 'light',
      fontSize: 'medium'
    }
  },
  isLoggedIn: true
};

const updatedState = {
  ...initialState,
  user: {
    ...initialState.user,
    preferences: {
      ...initialState.user.preferences,
      theme: 'dark'
    }
  }
};

console.log('updatedState:', updatedState);

// 実行方法:
// node 04-destructuring-spread.js
