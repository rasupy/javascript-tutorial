// Promise.allSettled
const myResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolveが呼ばれました。");
    console.log("myResolveの実行が終了しました。");
  }, 200);
});

const myReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject("rejectが呼ばれました。");
    console.log("myRejectの実行が終了しました。");
  }, 100);
});

Promise.allSettled([myReject, myResolve]).then((arry) => {
  for (const { status, value, reason } of arry) {
    console.log(`ステータス:[${status}], 値:[${value}], エラー:[${reason}]`);
  }
});
