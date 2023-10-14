/**
 * const,let等の変数宣言
 */
var val1 = 'val変数';
console.log(val1);

// var変数は上書き可能
val1 = 'var変数を上書き';
console.log(val1);

var val1 = 'var変数Who再宣言';
console.log(val1);

let val2 = 'let変数';
console.log(val2);

//letは上書き可能
val2 = 'let変数を上書き';
console.log(val2);

//let val2 = 'let変数は再宣言不可';


/**
 * constで定義したオブジェクトはプロパティの変更が可能
 */
const val3 = 'const変数';
console.log(val3);

//val3 = 'cosnt変数を上書き';

//const val3 = 'const変数を再宣言';
const val4 = {
  name : "test",
  age : 28,
};

val4.name = "test2";
val4.address = '住所';
console.log(val4);
/**
 * constで定義した配列はプロパティの変更が可能
 */
const val5 = ['dog','cat'];
val5[0] = 'bird';
val5.push('monkey');
console.log(val5);


/**
 * テンプレート文字列
 */
const name = 'test';
const age = '28';
//「私の名前はテストです。年齢は28歳です。」

//従来の方法
const message1 = '私の名前は' + name + 'です。年齢は' + age + 'です。';
console.log(message1);

//テンプレート文字列を用いた文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

