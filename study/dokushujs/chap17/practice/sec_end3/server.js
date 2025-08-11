import express from "express";
const app = express();
const port = 3000;

/* テンプレートエンジンの指定 */
app.set("view engine", "ejs");

/* 公開用フォルダをpublicとして追加 */
app.use(express.static("public"));

app.get("/", (req, res) => {
  // countdownパラメータの値を取得
  const countdown = req.query.countdown;
  if (countdown) {
    /* テンプレートの読み込み */
    res.render("index.ejs", { countdown: countdown });
  } else {
    res.send("countdownパラメータを設定してください。");
  }
});

app.get("/plus", (req, res) => {
  // パラメータの取得（設定されていない場合は0を初期値とする。）
  const { val1 = 0, val2 = 0 } = req.query;
  // 合計値を計算
  const sum = Number(val1) + Number(val2);
  /* テンプレートの読み込み */
  res.render("plus.ejs", { val1, val2, sum });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}?countdown=5`);
  console.log(`listening at http://localhost:${port}/plus?val1=5&val2=6`);
});
