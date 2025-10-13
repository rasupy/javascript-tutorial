// 非同期処理について
// [2] Promiseの使い方
function run(personName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 11);
    setTimeout(() => {
      if (time % 4 === 0) {
        // 4の倍数のとき
        // 途中でコケる
        reject({ personName });
      } else {
        // 完走
        resolve({ personName, time });
      }
    }, time);
  });
}

// 太郎、次郎、三郎が順番に走る(rejectされたら中断
/*
run("スタート")
  .then(() => {
    return run("太郎");
  })
  .then(({ personName, time }) => {
    console.log(`${personName}さんのタイムは${time}です。`);
  })
  .then(() => {
    return run("次郎");
  })
  .then(({ personName, time }) => {
    console.log(`${personName}さんのタイムは${time}です。`);
  })
  .then(() => {
    return run("三郎");
  })
  .then(({ personName, time }) => {
    console.log(`${personName}さんのタイムは${time}です。`);
    console.log("全員完走しました！");
  })
  .catch(({ personName = "" }) => {
    console.log(`${personName}さんがこけました。レースやり直し！`);
  });
*/

// 3人が一斉にスタート、最初にゴールした人の名前とタイムを表示
// 全員がこけた場合は、「レースやり直し！」と表示

Promise.all([run("太郎"), run("次郎"), run("三郎")])
  .then((results) => {
    const [first] = results;
    console.log(`${first.personName}さんのタイムは${first.time}です。`);
  })
  .catch(() => {
    console.log("全員がこけました。レースやり直し！");
  });
