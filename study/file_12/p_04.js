// 練習問題
function delay(fn, message, ms) {
  setTimeout(function () {
    fn(message);
  }, ms);
}
// 1秒後に"こんにちわ"と表示される
delay(console.log, "こんにちわ", 1000);

// 2秒後に"さようなら"と表示される
delay(alert, "さようなら", 2000);

// delay関数をネストして呼び出し、1秒後に"１秒経ちました"と表示される
// さらに2秒後に"2秒経ちました"と表示される
delay(
  function (msg) {
    delay(console.log, msg, 1000);
  },
  "1秒経ちました",
  1000
);
delay(
  function (msg) {
    delay(console.log, msg, 2000);
  },
  "2秒経ちました",
  2000
);
