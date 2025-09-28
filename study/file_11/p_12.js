// 練習問題
// 税込み総額を計算して返す関数
// 第一引数：税率（%）
// 第二引数：任意の個数の製品本体価格
function totalPrice(taxRate, ...prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  return Math.floor(total + (total * taxRate) / 100);
}

// 税率, 製品本体価格1, 製品本体価格2, ...
console.log(totalPrice(10, 100, 200, 300));
console.log(totalPrice(10, 100, 200, 300, 400));
console.log(totalPrice(10, 1000, 2000));
