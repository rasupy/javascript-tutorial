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

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}?countdown=5`);
});
