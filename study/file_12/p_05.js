// Promiseの記法
let prom = new Promise("非同期処理を扱う関数");
let thenProm = prom.then("非同期処理が成功した場合の処理");
let catchProm = prom.catch("非同期処理が失敗した場合の処理");
let finallyProm = prom.finally(
  "成功・失敗に関わらず処理が終わった後に実行される処理"
);
