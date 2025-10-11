// Promise.reject
Promise.reject("エラーの理由").catch((error) => {
  console.log(error);
});

console.log("グローバルコンテキスト終了");
