// スタイルの変更
const htmlStr = `
    <div>２秒後に文字と背景色が変わります。</div>
    <style>
        div {
            color: red;
            background-color: blue;
        }
    </style>`;
document.body.innerHTML = htmlStr;

setTimeout(() => {
  const div = document.querySelector("div");
  div.style.color = "blue";
  div.style.backgroundColor = "red";
}, 2000); // 2秒後に色を変更
