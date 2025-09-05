const html = `<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー</header>`;

// h1, h2, h3, headerのテキストを取得
const headings = html.match(/<h[1-3]>.*?<\/h[1-3]>|<header>.*?<\/header>/g);
const headingTexts = (headings || []).map((heading) =>
  heading.replace(/<\/?[^>]+(>|$)/g, "")
);
console.log(headingTexts); // ['見出し1', '見出し2', '見出し3', 'ヘッダー']
