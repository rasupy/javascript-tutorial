// 非同期処理について
let val = 0;

setTimeout(() => {
  val = 1;
  console.log(val); // 1が出力される
}, 1000);

console.log(val); // 0が出力される
// setTimeoutの中の処理は1秒後に実行されるため、すぐにconsole.logが実行されるとvalはまだ0のままです。
