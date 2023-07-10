export {}; // moduleにする。空のオブジェクトをexportすることで、module化することができる

let name = 'TypeScript';

console.log({ name });

// Boolean 型注釈
let isFinished: boolean = true;

isFinished = false;

// isFinished = 1; // エラー boolean型以外の値を代入しようとしている
// JSだとエラーにならないが、TSだとエラーになる
// ＊JSは代入のたびに型を変更できる

console.log({ isFinished });