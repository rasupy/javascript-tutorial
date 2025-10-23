// ボタンをクリックするとスタイルが変わる
const htmlStr = `
    <div>ボタンをクリックすると文字と背景色が変わります。</div>
    <button>ボタン</button>
    <style>
        .preparedClass {
            color: red;
            background-color: blue;
        }
    </style>`;
document.body.innerHTML = htmlStr;

const div = document.querySelector("div");
const button = document.querySelector("button");

// ボタンクリックでクラスをトグル
button.onclick = function () {
  div.classList.toggle("preparedClass");
};
