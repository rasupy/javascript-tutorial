// Promise.race
const myResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolveが呼ばれました。");
    console.log("myResolveの実行が終了しました。");
  }, 100);
});

const myReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject("rejectが呼ばれました。");
    console.log("myRejectの実行が終了しました。");
  }, 200);
});

Promise.race([myReject, myResolve])
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
