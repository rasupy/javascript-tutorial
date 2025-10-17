// 複雑なHTML構造のElementを作成する場合
// <body>に挿入したいHTMLの構造を文字列で定義
const htmlStr = `
    <article id="article">
        <h1 id="article-title">記事のタイトル</h1>
        <div class="tag-area">
            <span>タグ:</span><span>スポーツ</span><span>バスケ</span>
        </div>
        <div class="article-body">記事の本文</div>
        <div id="recommend">
            <h2>おすすめの記事</h2>
            <a href="#">他の記事</a>
        </div>
    </article>
`;

// HTML文字列をElementに変換する関数
function htmlStrToElement(htmlStr) {
  const dummyDiv = document.createElement("div");
  dummyDiv.innerHTML = htmlStr;
  return dummyDiv.firstElementChild; // 最初の子要素を返す
}
// HTML文字列からElementオブジェクトを取得
const targetNewElement = htmlStrToElement(htmlStr);
document.body.prepend(targetNewElement); // bodyに挿入
