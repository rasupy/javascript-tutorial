// classListを使ったスタイルの変更
const htmlStr = `
    <div>２秒後に文字と背景色の色が変わります。</div>
    <style>
        .preparedClass{
            color: red;
            background-color: blue;
        }
    </style>`;

document.body.innerHTML = htmlStr;

setTimeout(() => {
  const div = document.querySelector("div");
  div.classList.add("preparedClass");
}, 2000); // 2秒後にクラスを追加して色を変更
