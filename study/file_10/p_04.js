let chuka = ["八宝菜", "麻婆豆腐", "回鍋肉", "青椒肉絲", "酢豚", "餃子"];

chuka.push("天津飯");
chuka.unshift("チャーハン");
chuka.shift();
chuka.pop();
chuka.splice(2, 1);
chuka.indexOf("餃子");
let subChuka = ["ラーメン", "ごま豆腐"];
chuka = chuka.concat(subChuka);
let newChuka = chuka.slice(1, 4);
newChuka.reverse();
let found = newChuka.includes("八宝菜");
console.log(found); // false
