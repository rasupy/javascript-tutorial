// DOM についての練習問題
const htmlStr = `
    <div>このタグの色を変更しましょう。</div>
    <style>
        .color-red {
            color: red;
        }
    </style>
`;
document.body.innerHTML = htmlStr;

// 背景色を灰色に変更
const div = document.querySelector("div");
div.style.backgroundColor = "gray";

// .color-red を divタグに追加
div.classList.add("color-red");

const htmlStr2 = `
    <div class="text"></div>
    <style>
        .text-color {
            color: Red;
        }
    </style>
`;
document.body.insertAdjacentHTML("beforeend", htmlStr2);

const div2 = document.querySelector("div.text");

const ans1 = '<span class="text-color">HTMLドキュメント</span>';
const ans2 = '<span class="text-color">document</span>';
const ans3 = '<span class="text-color">DOMツリー</span>';
const ans4 = '<span class="text-color">ノード</span>';
const ans5 = '<span class="text-color">エレメントノード</span>';

const text = `
DOMとは、JavaScriptのオブジェクトの形で[ ${ans1} ]の構造を表したもので、JavaScriptではDOMオブジェクトを通して [ ${ans1} ] の取得、変更を行います。[ ${ans1} ] の全体の構造は [ ${ans2} ] オブジェクトにツリー構造で格納されます。 これを [ ${ans3} ] と呼びます。また、[ ${ans3} ] を構成する個々のオブジェクトは [ ${ans4} ] と呼ばれ、これにはHTML要素以外にHTMLコメントやテキスト情報も含まれます。一方、[ ${ans4} ] の中でも、HTML要素をDOMとして表したものを[ ${ans5} ] と呼びます。
`;

// div2 に text を代入
div2.innerHTML = text;
