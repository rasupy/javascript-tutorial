// 要素の作成
// 要素の作成をする為には、document.createElementメソッドを使用する。
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
document.body.prepend(newDiv); // bodyの最初に追加
