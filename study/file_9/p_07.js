const date = new Date(2021, 5);

const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
console.log(firstDay.toDateString());
console.log(firstDay.getDay()); // 日曜日: 0, 月曜日: 1, ...

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
console.log(lastDay.toDateString());
console.log(lastDay.getDay());

const nextDaysLater = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() + 30
);
console.log(nextDaysLater.toDateString());

const nextMonthLater = new Date(
  date.getFullYear(),
  date.getMonth() + 20,
  date.getDate()
);
console.log(nextMonthLater.toDateString());
