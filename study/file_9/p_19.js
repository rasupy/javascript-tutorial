// 日時の差分
const date1 = new Date("2025-01-01T00:00:00");
const date2 = new Date("2025-09-05T00:00:00");
let diff = date2 - date1;
diff = diff / (1000 * 60 * 60 * 24);
console.log(`${diff}日`); // 247日
