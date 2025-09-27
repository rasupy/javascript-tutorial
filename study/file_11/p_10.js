const html = `<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー</header>`;

function* genHtmlTag(html) {
  const regex = /<(h[1-6])>(.+?)<\/\1>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    yield { tag: match[1], content: match[2] };
  }
}
for (const { tag, content } of genHtmlTag(html)) {
  console.log(`${tag}: ${content}`);
}
