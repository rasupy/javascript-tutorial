// 関数の実行
plus();

function plus() {
  // 要素の取得
  const val1 = document.querySelector("#val1");
  const val2 = document.querySelector("#val2");
  const answer = document.querySelector("#answer");

  function inputHandler() {
    // #val1要素と#val2要素の入力値の合計を#answer要素に挿入
    answer.textContent = Number(val1.value) + Number(val2.value);
  }

  // アクションの追加
  val1.addEventListener("input", inputHandler);
  val2.addEventListener("input", inputHandler);
}
