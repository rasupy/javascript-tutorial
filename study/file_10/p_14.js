let chuka = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "麻婆豆腐"];
const chukaSet = new Set(chuka);
console.log(chukaSet);

chukaSet.add("杏仁豆腐");
chukaSet.add("餃子");

console.log(chukaSet);

chukaSet.delete("回鍋肉");
console.log(chukaSet);

console.log(chukaSet.has("八宝菜"));

chuka = Array.from(chukaSet);
console.log(chuka);
