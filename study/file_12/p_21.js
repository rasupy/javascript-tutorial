// await/async を使ったPromiseチェーンの書き換え
function promiseFactory(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count++;

      console.log(
        `${count}回目のコールです。時刻:[${new Date().toTimeString()}]`
      );

      if (count === 3) {
        reject(count);
      } else {
        resolve(count);
      }
    }, 1000);
  });
}

// これをawait/asyncで書き換える
async function execute() {
  try {
    let count = await promiseFactory(0);
    count = await promiseFactory(count);
    count = await promiseFactory(count);
    count = await promiseFactory(count);
  } catch (errorCount) {
    console.error(`${errorCount}回目でエラーになりました`);
  } finally {
    console.log("処理を終了します");
  }
}
execute();
