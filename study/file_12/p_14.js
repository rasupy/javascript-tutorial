const ans1 = "fulfilled";
const ans2 = "rejected";
const ans3 = "settled";
const ans4 = "fulfilled";
const ans5 = "すべて";
const ans6 = "すべて";
const ans7 = "settled";

// 練習問題
function practiceQuestions() {
  console.log(
    `Promise.allは、すべてのPromiseが${ans1}のステータスに移るとthenメソッドに移行します。1つでもステータスが${ans2}に移るとcatchメソッドが呼び出されます。`
  );
  console.log(
    `Promise.raceは、いずれかのPromiseが${ans3}のステータスになったタイミングでthenメソッドまたはcatchメソッドを実行します。`
  );
  console.log(
    `Promise.anyは、いずれかのPromiseが${ans4}になったタイミングでthenメソッドに処理を移します。また${ans5}のPromiseの状態がrejectedになったときにはcatchメソッドを実行します。`
  );
  console.log(
    `Promise.allSettledは${ans6}のPromiseインスタンスの状態が${ans7}になったときにthenメソッドに処理を移行します。また、thenメソッドのコールバック関数には、それぞれのPromiseのステータスの状態(status)を含むオブジェクトが配列に格納されて渡されます。`
  );
}

practiceQuestions();
