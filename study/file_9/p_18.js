const html = document.createElement("div");
html.style.height = "2000px";
document.body.appendChild(html);

setInterval(() => {
  if (window.scrollY > 1000) {
    alert("スクロール量が1000pxを超えました。");
    if (confirm("ウィンドウを閉じますか？")) {
      window.close();
    }
  }
}, 1000);
