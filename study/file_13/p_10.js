// 練習問題
const htmlStr = `
    <div id="source">Source</div>
    <section id="section">
        <div class="wrap">
            <h1 class="title">
                <span>タイトル</span>
            </h1>
            <ul class="list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </section>
`;

document.body.innerHTML = htmlStr; // HTMLを挿入
const source = document.getElementById("source"); // Source要素を取得

// 2秒ごとに#source要素を移動させる
// h1タグ内のspanタグの前に移動
function test1() {
  const targetElement = document.querySelector("h1");
  targetElement.insertAdjacentElement("afterbegin", source);
}
function test2() {
  const targetElement = document.querySelector("h1");
  targetElement.insertAdjacentElement("afterend", source);
}
function test3() {
  const targetElement = document.querySelector("div.wrap");
  targetElement.insertAdjacentElement("beforeend", source);
}
function test4() {
  const targetElement = document.querySelector("ul.list li:nth-child(2)");
  targetElement.insertAdjacentElement("beforebegin", source);
}

// 2秒ごとに実行する関数
const testFunctions = [test1, test2, test3, test4];
let timeInterval = 2000;
for (let i = 0; i < testFunctions.length; i++) {
  let testNum = testFunctions[i]; // 関数を取得
  setTimeout(() => {
    testNum(); // 関数を実行
    console.log("test" + (i + 1));
  }, timeInterval * (i + 1));
}
