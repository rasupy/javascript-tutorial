let data = localStorage.getItem("data");
data = JSON.parse(data); // JSON文字列をオブジェクトに変換

if (data === null) {
  data = { val: 0 };
}

console.log(data.val);
data.val++;

const json = JSON.stringify(data); // オブジェクトをJSON文字列に変換
localStorage.setItem("data", json);
