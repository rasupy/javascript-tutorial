const orders = [
  ["八宝菜", 1, 600],
  ["餃子", 4, 200],
  ["回鍋肉", 1, 500],
  ["青椒肉絲", 2, 700],
];
console.log(orders);

// "回鍋肉"を削除
const index = orders.findIndex((order) => order[0] === "回鍋肉");
if (index !== -1) {
  orders.splice(index, 1);
}
console.log(orders);

orders.forEach((order) => {
  const [dish, , price] = order;
  if (price <= 1000) {
    console.log(`${dish}は1000円以下です`);
  } else {
    console.log(`${dish}は1000円以上です`);
  }
});

// オーダーの金額が高いものから順にソート
orders.sort((a, b) => {
  return b[2] - a[2];
});
console.log(orders);

orders.forEach((order) => {
  const [dish, quantity, price] = order;
  console.log(`${dish}を${price}円で${quantity}個注文しました。`);
});

let total = 0;
orders.forEach((order) => {
  const [, quantity, price] = order;
  total += price * quantity;
});
console.log(`合計金額は${total}円です`);
