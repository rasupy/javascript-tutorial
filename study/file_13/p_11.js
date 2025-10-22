// 属性の取得と設定
const htmlStr = `
<a href="https://www.google.com/">Googleへ</a>
<a href="https://www.yahoo.co.jp/">Yahooへ</a>
`;

document.body.innerHTML = htmlStr; // HTMLを挿入

const link = document.querySelectorAll("a");
// forEachで繰り返し処理: href属性に"google"が含まれている場合、YahooのURLに書き換え
setTimeout(() => {
  link.forEach((item) => {
    if (item.getAttribute("href").includes("google")) {
      item.setAttribute("href", "https://www.yahoo.co.jp/");
    }
  });
}, 2000);
