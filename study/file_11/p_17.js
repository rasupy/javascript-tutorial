// イテレータの作成
// genStep関数、引数: min, max. step
function* genStep(min, max, step) {
  for (let i = min; i <= max; i += step) {
    yield i;
  }
}
console.log("--- 練習問題１ ---");
const it = genStep(4, 10, 2);
let a = it.next();

while (!a.done) {
  console.log(a.value);
  a = it.next();
}

// 上記のイテレータをジェネレータに書き換える
console.log("--- 練習問題２ ---");
const it2 = genStep(4, 10, 2);
for (const num of it2) {
  console.log(num);
}
