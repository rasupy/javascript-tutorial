// 当月の初日と最終日を取得する
const data = new Date();

const firstDay = new Date(data.getFullYear(), data.getMonth(), 1);
console.log(firstDay.toDateString());

const lastDay = new Date(data.getFullYear(), data.getMonth() + 1, 0);
console.log(lastDay.toDateString());
