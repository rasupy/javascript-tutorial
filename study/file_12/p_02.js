// 非同期処理について
setTimeout(() => {
  console.log("A");
}, 1000);

setTimeout(() => {
  console.log("B");
});

console.log("C");
