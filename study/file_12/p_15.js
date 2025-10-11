// Promise.resolve
let val = 0;

Promise.resolve().then(() => {
  console.log(`valの値は[${val}]です。`);
});

val = 1;

console.log("グローバルコンテキスト終了");
