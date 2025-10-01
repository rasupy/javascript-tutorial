// 非同期処理(Promise)の例
let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 0から10までのランダムな整数を生成
    const rand = Math.floor(Math.random() * 11);
    if (rand <= 5) {
      reject(rand);
    } else {
      resolve(rand);
    }
  }, 1000);
});

// then の戻り値を受け取る
instance = instance.then((value) => {
  console.log(`5以上の値[${value}]が返されました`);
});

// catch の戻り値を受け取る
instance = instance.catch((errorValue) => {
  console.error(`5未満の値[${errorValue}]が返されました`);
});

// finally の戻り値を受け取る
instance = instance.finally(() => {
  console.log("Promiseの処理が完了しました");
});
