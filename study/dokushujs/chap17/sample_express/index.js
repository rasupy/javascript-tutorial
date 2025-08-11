import express from "express"; // ●❶モジュールのインポート
const app = express();
const port = 3000; // ●❷ポートを3000番に設定
app.get("/", (req, res) => {
  res.send("Hello World!"); // ●❸"Hello World!"をレスポンスとして返却
});
app.listen(port, () => {
  // ●❹サーバーを起動
  console.log(`listening at http://localhost:${port}`); // サーバー起動後に実行される
});
