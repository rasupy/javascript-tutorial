// 練習問題
let instance = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 現在時刻を取得( 〇月〇日 〇時〇分〇秒 )
    const dateString = `${
      new Date().getMonth() + 1
    }月${new Date().getDate()}日 ${new Date().getHours()}時${new Date().getMinutes()}分${new Date().getSeconds()}秒`;

    const dateTime = new Date().getSeconds();
    // 秒数が偶数なら成功、奇数なら失敗
    if (dateTime % 2 === 0) {
      resolve(dateTime);
    } else {
      reject(dateTime);
    }
    console.log(dateString);
  }, 1000);
})
  .then((value) => {
    console.log(`偶数の値[${value}]が返されました`);
  })
  .catch((errorValue) => {
    console.error(`奇数の値[${errorValue}]が返されました`);
  })
  .finally(() => {
    console.log("Promiseの処理が完了しました");
  });
