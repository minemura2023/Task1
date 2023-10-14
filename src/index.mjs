/**
 * const,let等の変数宣言
 */
// var val1 = "val変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数Who再宣言";
// console.log(val1);

let val2 = "let変数";
console.log(val2);

//letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

//let val2 = 'let変数は再宣言不可';

/**
 * constで定義したオブジェクトはプロパティの変更が可能
 */
const val3 = "const変数";
console.log(val3);

//val3 = 'cosnt変数を上書き';

//const val3 = 'const変数を再宣言';
const val4 = {
  name: "test",
  age: 28,
};

val4.name = "test2";
val4.address = "住所";
console.log(val4);
/**
 * constで定義した配列はプロパティの変更が可能
 */
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "test";
const age = "28";
//「私の名前はテストです。年齢は28歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
//function fnc1(str){
//  return str;
//}
const fnc1 = function (str) {
  return str;
};
console.log(fnc1("test"));

//アロー関数
const fnc2 = (str) => str;
console.log(fnc2("テストです。"));

const fnc3 = (num1, num2) => num1 + num2;

console.log(fnc3(10, 20));

/**
 * 分割代入
 */
// const myProfile1 = {
//   name: 'テスト',
//   age: 28,
// };

// const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// const {name,age} = myProfile1;
// const msg2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// const myProfile2 = ['test', 28];

// const msg3 = `私の名前は${myProfile[0]}です。私の年齢は${myProfile[1]}です。`;
// console.log(msg3);

// const [name, age] = myProfile2;
// const msg4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(msg4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
sayHello("テスト");

/**
 * スプレッド構文
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5, 6];
const [num1, num2, ...arr3] = arr2;
//console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = [...arr4];
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfileterを使った配列の処理
 */
const nameArr = ["田中", "山田", "テスト"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
nameArr.map((name) => console.log(name));
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

//mapを使った実践コーディング
const newNameArr = nameArr.map((name) => {
  if (name === "テスト") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * ３項演算子
 */
//ある条件 ? 条件がTrueの時 : 条件がfalseの時
const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1);

const num = "13000";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
};
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味
 */
//||は左側はfalseなら右側を返す
// const number = 100;
// const fee = number || "金額は未設定です。";
// console.log(fee);

const number2 = 100;
const fee2 = number2 && "設定されました";
console.log(fee2);
