// 練習問題
function action(actionName, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${actionName}`);
      resolve();
    }, duration);
  });
}

// 1日の行動
/*
function makeAction() {
  action("散歩", 500)
    .then(() => action("朝食", 200))
    .then(() => Promise.all([action("昼食", 500), action("おしゃべり", 100)]))
    .then(() => action("夕食", 600))
    .then(() => action("趣味", 400));
}
makeAction();
*/

// これをawait/asyncで書き換える
async function makeAction() {
  try {
    await action("散歩", 500);
    await action("朝食", 200);
    await Promise.all([action("昼食", 500), action("おしゃべり", 100)]);
    await action("夕食", 600);
    await action("趣味", 400);
  } catch (error) {
    console.error("Error:", error);
  }
}
makeAction();
