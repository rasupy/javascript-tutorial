// templateタグ
const htmlStr = `
    <template id="tmpl">
       <span>テンプレートHTMLを定義</span>
    </template>
`;

document.body.innerHTML = htmlStr; // templateタグのElementオブジェクトを取得
const tmpl = document.getElementById("tmpl");
const targetNewElement = tmpl.content; // templateタグ内のHTML構造を取得

document.body.prepend(targetNewElement); // bodyに挿入
// templateタグ内のHTML構造がElementオブジェクトとして取得できる
console.log(htmlStr);
console.log(tmpl);
console.log(targetNewElement);
