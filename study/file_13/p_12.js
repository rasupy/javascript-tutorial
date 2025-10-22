// 要素の位置と大きさを取得する
const htmlStr = `
<div id="target">この要素の位置と大きさの取得</div>
<style>
    #target {
        margin: 100px;
        width: 200px;
        border: 10px solid red;
    }
</style>
`;
document.body.innerHTML = htmlStr;
const domRect = document.getElementById("target").getBoundingClientRect();

// 1. ビューポートの上端から要素の枠線の上端までの距離
console.log(
  "ビューポートの上端から要素の枠線の上端までの距離:",
  domRect.top + "px"
);

// 2. ビューポートの左端から要素の枠線の右端までの距離
console.log(
  "ビューポートの左端から要素の枠線の右端までの距離:",
  Math.round((domRect.left + domRect.width) * 10) / 10 + "px"
  // 小数点２位まで表示したい場合
  // Math.round((domRect.left + domRect.width) * 100) / 100 + "px"
);

// 3. 要素の枠線(border)を含めた横幅
console.log(
  "要素の枠線(border)を含めた横幅:",
  Math.round(domRect.width * 10) / 10 + "px"
);

// 4. 要素の枠線(border)を含めた縦幅
console.log(
  "要素の枠線(border)を含めた縦幅:",
  Math.round(domRect.height * 100) / 100 + "px"
);
