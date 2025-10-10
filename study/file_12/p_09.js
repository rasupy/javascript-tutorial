//　Promise チェーン 練習問題
// 1秒後にカウントを2増やし6までの値を返す promiseFactory 関数を作成してください。
function promiseFactory(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `${count}回目のコールです。時刻 : [${new Date().toTimeString()}]`
      );
      const nextCount = count + 2;
      if (nextCount > 6) {
        const error = new Error(`カウントが上限を超えました: ${nextCount}`);
        error.count = nextCount;
        reject(error);
      } else {
        resolve(nextCount);
      }
    }, 1000);
  });
}

promiseFactory(0)
  .then((count) => {
    return promiseFactory(count);
  })
  .then((count) => {
    return promiseFactory(count);
  })
  .then((count) => {
    return promiseFactory(count);
  })
  .catch((err) => {
    console.error(
      `エラーに飛びました。 現在のカウントは、${err.count ?? "不明"}です。`
    );
  })
  .finally(() => {
    console.log("処理を終了します。");
  });
