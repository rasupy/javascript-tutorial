// 練習問題
console.log("A");

setTimeout(() => {
  queueMicrotask(() => console.log("B"));
  console.log("C");
});

Promise.resolve().then(() => console.log("D"));

console.log("E");
// A, E, D, C, B の順に出力される
// setTimeoutのコールバック関数はマクロタスクキューに入る
// Promiseのコールバック関数はマイクロタスクキューに入る
// マイクロタスクキューはマクロタスクキューよりも優先される
// よって、A, E, D, C, B の順に出力される
